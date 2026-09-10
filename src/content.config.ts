import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * A link is normally just its address: the kind supplies the label, so every
 * demo across the site reads the same way. Some links are named things rather
 * than kinds of thing — a poster shown at one conference, a feature written by
 * one institute — and calling those `Poster` and `Spotlight` throws away the
 * part that matters. Those carry their own label.
 */
const link = (address: z.ZodType<string>) =>
  z.union([address, z.object({ href: address, label: z.string() })]);

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
    /* A cap, not a target. Three lines is what the card is built for, and
       roughly 125 characters is what three lines hold at its narrowest — a
       phone, or the two-column listing at 1024. The ceiling is 140 so a
       sentence can spend a fourth line when it is worth it; Inside the
       Institution does. */
    blurb: z.string().max(140),
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
    /* Presentation order lives in lib/projects.ts, not here. `paper`,
       `poster` and `thesis` take a path as well as a URL, because those are
       often files in public/ rather than somewhere else on the web. */
    links: z
      .object({
        demo: link(z.url()).optional(),
        thesis: link(z.string()).optional(),
        paper: link(z.string()).optional(),
        poster: link(z.string()).optional(),
        spotlight: link(z.url()).optional(),
        code: link(z.url()).optional(),
      })
      .default({}),
    cover: z.object({
      wide: z.string(),
      /* Art direction for the case study head, both optional. The listing card
         always uses `wide`; a hero that needs a different composition — a
         portrait project, an installation view, a wide arrangement of details
         — supplies its own, and falls back to `wide` when it does not. */
      heroWide: z.string().optional(),
      heroMobile: z.string().optional(),
      tone: z.enum(['dark', 'light', 'neutral']),
      alt: z.string(),
      /* Printed under the case study head. `alt` says what the picture is for
         a reader who cannot see it; this says what it shows to one who can. */
      caption: z.string().optional(),
    }),
    quickFacts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /* The end credits. Source order is the presentation order in every list —
       nothing here is sorted, because the order is the editorial decision. The
       caps on skills and tools are the point of putting them in the schema:
       five is a curated list, and a sixth fails the build rather than quietly
       turning the block into a resume. Role is deliberately absent — it is
       already in `quickFacts`. */
    credits: z
      .object({
        skills: z.array(z.string()).max(5).default([]),
        tools: z.array(z.string()).max(5).default([]),
        team: z
          .array(z.object({ group: z.string(), people: z.array(z.string()).min(1) }))
          .default([]),
        specialThanks: z.array(z.string()).default([]),
        note: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
