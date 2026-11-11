// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://toteallysisters.org',
  adapter: vercel(),
  trailingSlash: 'ignore',
  // Old WordPress URLs keep working.
  redirects: {
    '/sister-support': '/monthly-meetup',
    '/get-involved': '/join',
    '/contact-us': '/join',
    '/press-news': '/in-the-news',
    '/ovarian-fitness-orlando': '/events/ovarian-fitness-orlando',
    '/privacy-policy': '/privacy',
    '/terms-of-use': '/terms',
  },
});
