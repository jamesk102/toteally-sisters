import type { APIRoute } from 'astro';

// Every indexable page. Utility pages (thank-you, error, 404) and the form endpoint are left out on purpose.
const pages = ['/', '/our-story/', '/sister-support/', '/events/', '/ovarian-fitness-orlando/', '/get-involved/', '/press-news/', '/privacy-policy/', '/terms-of-use/'];

export const GET: APIRoute = ({ site }) => {
  const urls = pages.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
