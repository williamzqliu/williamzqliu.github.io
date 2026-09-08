import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// SPEC §7. Adding a project is one markdown file in src/content/projects/ —
// the schema is validated at build time, so bad frontmatter fails the build
// rather than shipping.
const projects = defineCollection({
  // Files prefixed with `_` are ignored, which is a second escape hatch
  // alongside `draft: true`.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    dates: z.string(),
    blurb: z.string().max(120),
    /* Subject, not status. `information-design` is stored hyphenated and
       displayed with a space — a value with a space in it would need quoting
       in every frontmatter file. */
    tags: z.array(z.enum(['networks', 'interactive', 'narrative', 'information-design'])),
    tracks: z.array(z.enum(['design', 'engineering'])).min(1),
    featured: z.number().optional(),
    /* Portfolio status, kept separate from the subject tags: archived work is
       reachable but never mixed into the primary view. */
    archive: z.boolean().default(false),
    draft: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    links: z
      .object({
        demo: z.url().optional(),
        code: z.url().optional(),
        paper: z.string().optional(),
        poster: z.string().optional(),
      })
      .default({}),
    cover: z.object({
      wide: z.string(),
      square: z.string().optional(),
      poster: z.string().optional(),
      tone: z.enum(['dark', 'light', 'neutral']),
      alt: z.string(),
    }),
    /* Search metadata only. Never rendered — the day it appears on a page it
       stops being metadata and starts needing curation. */
    keywords: z.array(z.string()).optional(),
    quickFacts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
