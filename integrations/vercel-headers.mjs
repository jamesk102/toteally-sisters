// Adds security and caching headers to the Vercel build output.
// The @astrojs/vercel adapter writes .vercel/output/config.json in its own `astro:build:done` hook,
// and adapters always run first, so this hook can safely add routes to that file afterwards.
// (A vercel.json file is not applied when Astro produces the Build Output API directory.)
import { readFile, writeFile } from 'node:fs/promises';

const CSP = [
  "default-src 'self'",
  // Astro inlines its small page scripts, so inline scripts and styles are allowed; nothing loads from other sites.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ');

const SECURITY = {
  'Content-Security-Policy': CSP,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
};

/** @param {{ productionHost?: string, vercelHost?: string }} [options] */
export default function vercelHeaders({ productionHost = 'toteallysisters.org', vercelHost } = {}) {
  return {
    name: 'vercel-headers',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const file = new URL('../.vercel/output/config.json', import.meta.url);
        let config;
        try { config = JSON.parse(await readFile(file, 'utf8')); } catch { logger.warn('No Vercel config.json found; headers not added.'); return; }
        const routes = [
          { src: '/(.*)', headers: SECURITY, continue: true },
          // Original photos, video and fonts are not fingerprinted, so cache them for a week (fonts a month) and revalidate after.
          { src: '/(images|media)/(.*)', headers: { 'cache-control': 'public, max-age=604800, stale-while-revalidate=86400' }, continue: true },
          { src: '/fonts/(.*)', headers: { 'cache-control': 'public, max-age=2592000, stale-while-revalidate=86400' }, continue: true },
        ];
        // Send visitors of the production *.vercel.app address to the same page on the real domain.
        // (Per-deployment preview URLs use other hostnames and are unaffected.)
        const redirect = vercelHost ? [{ src: '/(.*)', has: [{ type: 'host', value: vercelHost }], headers: { Location: `https://${productionHost}/$1` }, status: 308 }] : [];
        config.routes = [...redirect, ...routes, ...(config.routes ?? [])];
        await writeFile(file, JSON.stringify(config, null, 2));
        logger.info(`Added security and cache headers (production host ${productionHost}).`);
      },
    },
  };
}
