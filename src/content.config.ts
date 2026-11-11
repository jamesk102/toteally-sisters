import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Events. Add a Markdown file to src/content/events/ to publish one.
 * Events move to "Past events" automatically once `end` (or `start`) has passed.
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      /** Shown instead of a computed time, e.g. "4–7 PM" */
      timeLabel: z.string().optional(),
      place: z.string(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** Where the main button goes. Omit to use the event's own page. */
      link: z.url().optional(),
      linkLabel: z.string().optional(),
      /** Fundraisers that benefit OCRA say so plainly. */
      benefitsOcra: z.boolean().default(false),
      /** Has a full detail page at /events/<id> */
      hasPage: z.boolean().default(false),
    }),
});

export const collections = { events };
