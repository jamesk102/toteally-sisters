import type { APIRoute } from 'astro';
import { validate, labels, type JoinFields } from '../../lib/join-form';

export const prerender = false;

/**
 * Emails a Join submission to the team via Resend (https://resend.com).
 * Vercel environment variables:
 *   RESEND_API_KEY    – the Resend API key (secret)
 *   JOIN_TO_EMAIL     – who receives submissions, e.g. hello@toteallysisters.org
 *   JOIN_FROM_EMAIL   – a sender on a domain verified in Resend, e.g. "Toteally Sisters <join@toteallysisters.org>"
 */
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

export const POST: APIRoute = async ({ request, redirect }) => {
  let input: Record<string, unknown>;
  const ct = request.headers.get('content-type') ?? '';
  // A plain form post (no JavaScript) gets a page back instead of JSON.
  const html = !ct.includes('application/json');
  const reply = (body: { ok: boolean; [k: string]: unknown }, status = 200) =>
    html ? redirect(body.ok ? '/join/thanks' : '/join/sorry', 303) : json(body, status);
  try {
    input = ct.includes('application/json') ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    return reply({ ok: false, error: 'bad_request' }, 400);
  }

  // Spam checks: a hidden field people never see, and a minimum time on the page.
  const started = Number(input.started);
  if (input.website || (Number.isFinite(started) && Date.now() - started < 3000)) {
    return reply({ ok: true }); // pretend success to bots
  }

  const { data, errors, ok } = validate(input);
  if (!ok) return reply({ ok: false, error: 'invalid', errors }, 422);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.JOIN_TO_EMAIL;
  const from = process.env.JOIN_FROM_EMAIL ?? 'Toteally Sisters <onboarding@resend.dev>';
  if (!key || !to) return reply({ ok: false, error: 'not_configured' }, 503);

  const rows = (Object.keys(labels) as (keyof JoinFields)[])
    .map((k) => `<tr><th align="left" valign="top" style="padding:6px 16px 6px 0;font-family:sans-serif">${esc(labels[k])}</th><td style="padding:6px 0;font-family:sans-serif;white-space:pre-wrap">${esc(data[k] || '—')}</td></tr>`)
    .join('');
  const text = (Object.keys(labels) as (keyof JoinFields)[]).map((k) => `${labels[k]}: ${data[k] || '—'}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s: string) => s.trim()),
      reply_to: data.email,
      subject: `New sister: ${data.firstName} ${data.lastName}`,
      html: `<p style="font-family:sans-serif">Someone just filled out the Join form. Reply to this email to write back to them.</p><table>${rows}</table>`,
      text,
    }),
  });

  if (!res.ok) return reply({ ok: false, error: 'send_failed' }, 502);
  return reply({ ok: true });
};
