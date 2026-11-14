/**
 * Small in-memory sliding-window rate limiter for the form endpoint.
 * Best effort: each warm serverless instance keeps its own counts, so it slows down
 * scripted floods but is not a hard global limit. For that, add a Vercel Firewall rate-limit rule.
 */
const hits = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function rateLimit(key: string, limit: number, windowMs: number, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false as const, retryAfter: Math.ceil((windowMs - (now - recent[0])) / 1000) };
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > MAX_KEYS) {
    // Drop the oldest entries so memory stays bounded.
    for (const k of [...hits.keys()].slice(0, hits.size - MAX_KEYS)) hits.delete(k);
  }
  return { ok: true as const, retryAfter: 0 };
}
