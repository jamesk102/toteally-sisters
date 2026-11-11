import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Events (one Markdown file each in src/content/events/).
 * Once `end` (or `start`) has passed, an event moves from the main list to "Past Events" automatically.
 * `hidden: true` keeps an event off the site entirely.
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    /** The small date label on the card, exactly as written, e.g. "August 10, 2026 4PM-7PM" */
    dateLabel: z.string(),
    summary: z.string(),
    /** Image in public/images/ (full resolution) */
    image: z.string(),
    imageAlt: z.string(),
    /** Where "View Event" goes */
    link: z.string(),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { events };
