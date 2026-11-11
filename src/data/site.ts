/**
 * Site-wide facts. Edit here; every page reads from this file.
 */

export const site = {
  name: 'Toteally Sisters',
  description:
    'A free, survivor-founded community for women facing gynecologic cancer, and the people who love them. Monthly meetups on Zoom and gatherings around Orlando.',
  instagram: 'https://www.instagram.com/toteallysisters/',
  facebook: 'https://www.facebook.com/toteallysisters/',
  ocraDonate: 'https://orlando.ocrafit.ocrahope.org/donate',
  ocraHome: 'https://orlando.ocrafit.ocrahope.org/',
};

/**
 * The monthly Zoom meetup.
 * Fill in `schedule` and `time` once confirmed (e.g. "Second Tuesday of every month", "7:00 PM ET").
 * While they are null, the site says the date and link are emailed after you join.
 * `next` is optional: an ISO date for the next meetup, shown on the home page invitation.
 */
export const meetup = {
  schedule: null as string | null,
  time: null as string | null,
  length: null as string | null,
  next: null as string | null,
};

export const nav = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/monthly-meetup', label: 'Monthly Meetup' },
  { href: '/events', label: 'Events' },
];
