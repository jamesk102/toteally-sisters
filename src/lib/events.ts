import { getCollection, type CollectionEntry } from 'astro:content';

export type Event = CollectionEntry<'events'>;

export const endOf = (e: Event) => (e.data.end ?? e.data.start).getTime();

/** Split at build time. A tiny script on the Events page re-checks against the visitor's clock. */
export async function getEvents(now = Date.now()) {
  const all = await getCollection('events', (e) => !e.data.hidden);
  const upcoming = all.filter((e) => endOf(e) >= now).sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
  const past = all.filter((e) => endOf(e) < now).sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
  return { upcoming, past };
}

const tz = 'America/New_York';
export const formatDate = (d: Date, opts: Intl.DateTimeFormatOptions = {}) =>
  new Intl.DateTimeFormat('en-US', { timeZone: tz, month: 'long', day: 'numeric', year: 'numeric', ...opts }).format(d);
