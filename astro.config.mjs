// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://toteallysisters.org',
  adapter: vercel(),
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // The site keeps the original WordPress addresses. These forward the redesign's
  // short-lived addresses (and the old empty Contact Us page) to the originals.
  redirects: {
    '/contact-us': '/get-involved/',
    '/join': '/get-involved/',
    '/join/thanks': '/get-involved/thanks/',
    '/join/sorry': '/get-involved/sorry/',
    '/monthly-meetup': '/sister-support/',
    '/in-the-news': '/press-news/',
    '/events/ovarian-fitness-orlando': '/ovarian-fitness-orlando/',
    '/privacy': '/privacy-policy/',
    '/terms': '/terms-of-use/',
  },
});
