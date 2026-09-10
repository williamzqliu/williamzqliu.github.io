# Case-study editorial system

How a case study on this site is written and what the reusable parts do. It
describes *how the patterns behave*, not what any project must contain.
Companion to `docs/portfolio-design-system.md`, which owns the visual
foundations.

`inside-the-institution.md` is the reference implementation because it
currently uses the most patterns. It is **not** a template. The next project
may have no accordion, no comparison, no user study, a different section order,
and a different reveal position.

---

## Editorial philosophy

- **A case study is a narrative, not a UX template.** There is no required
  spine. Do not impose Problem → Research → Process → Solution → Testing →
  Results.
- **Two reading speeds.** A 30–60 second scan (headings, media, captions,
  emphasis) and a 2–5 minute read. Both have to work from the same page.
- **The finished work should appear early.** Not at a fixed position, but early
  enough that someone scanning knows what was built before they meet the
  process.
- **Decisions over chronology.** Prefer *evidence → interpretation → decision →
  consequence* over a list of prototypes. Iteration appears where it explains a
  decision, never as a standalone "Iterations" section.
- **Never invent.** No findings, quotes, metrics, adoption, audience response
  or ownership that the project's own material does not support. If a sentence
  needs a fact that does not exist, leave a TODO and say so.
- **Density over brevity.** Short paragraphs, high information, no process
  narration for its own sake.

---

## Page anatomy

Every part below is optional except the head and the body.

| Part | What it is | Owner |
| --- | --- | --- |
| Frontmatter | title, dates, blurb, tags, tracks, stack, links, cover, quickFacts | `src/content/projects/<slug>.md`, validated by `src/content.config.ts` |
| Head | title, summary, stack chips, outbound links | `pages/work/[...slug].astro` |
| Quick facts | Timeline / Role / Outcome, read by name from `quickFacts` | `components/QuickFacts.astro` |
| Hero | `cover.heroWide ?? cover.wide`, with `cover.caption` under it | `components/CoverMedia.astro` |
| Section menu / TOC | derived from the `h2`s — nothing to maintain | `[...slug].astro` |
| Body sections | `## ` headings and prose | the markdown file |
| Optional depth | `<details>` | the markdown file |
| Hand-off | next project, or back to selected work | `components/NextProject.astro` |

Sections are numbered by a CSS counter on `.prose h2`. Renaming, reordering or
inserting a section needs no other edit: the numbers and the menu follow.

---

## Component catalogue

All prose-level patterns are plain HTML in the markdown, styled by the
`is:global` block in `src/pages/work/[...slug].astro`. There is no editorial
component layer to import — that is deliberate: the content file stays readable
and hand-editable.

### Standard figure

```html
<figure>
  <img src="/media/<slug>/thing.webp" alt="…" width="1440" height="712"
       loading="lazy" decoding="async" />
  <figcaption>What to notice.</figcaption>
</figure>
```

**Use for** one image or clip with a narrative job. The caption should answer
*why is this here* / *what should I notice*, not describe the pixels.

**Standard.** Takes the full article column. Caption below, 13px, `--text-3`,
as wide as the media. Opens in the lightbox. Video is `autoplay muted loop
playsinline`, no controls.

**Modifier.** `data-width="prose"` brings a figure back to the paragraphs'
width. For pictures that belong with the sentences rather than with the
evidence — a photograph of a session, a small explanatory shot — where the
full column would read as a claim the picture is not making.

**Don't** use a figure as decoration between paragraphs.

### Figure pair — `.media-pair`

```html
<div class="media-pair" data-abreast>…two <figure>s…</div>
```

**Use for** two images in a meaningful relationship: before/after,
early/revised, two competing states. The surrounding prose says why the change
mattered; the media shows what changed.

**Standard.** Equal columns, tops aligned, no crop, no card, no shadow, no
badges, no arrows, no slider. Each half opens in the lightbox independently.

**Modifiers.** Default stacks below 640px. `data-abreast` keeps two columns at
every width (12px gutter on a phone, 24px above) for a comparison that means
nothing apart — the lightbox covers the lost detail. `--pair-split` (passed as
an inline style, like the mosaic's) sets the column ratio: give two differently
shaped pictures the ratio of their own aspects and they come out the same
height with nothing cropped.

**A sequence that arrives as one image stays one image.** Five panel states
exported as a single figure are one `<figure>` with one caption below, not five
crops in a grid: the composition is already the evidence, and the viewer
enlarges the whole strip.

**Don't** put two unrelated images together to save vertical space.

### Figure mosaic — `.media-mosaic`

**Use for** three pictures of one moment that tile into a rectangle.

**Standard.** Desktop: one tall picture beside two stacked ones, split passed
per instance as `--mosaic-split`. Phone: the wide one full width with two
beneath it, split passed as `--mosaic-stack`, captions hidden (the lightbox
carries them). The lightbox re-sorts a mosaic into column order so the pair
that belongs together steps together.

**Don't** use it as a gallery. Three images that do not describe one moment are
three figures.

### Generated editorial visual — `.formula`, `.tier-key`

Drawn in HTML/CSS/SVG rather than exported: formulas, encoding keys, small
diagrams, compact charts.

**Standard.** Prose width, never the media column. Body face; a key's label is
caption-size, `--text-3`, one weight up. A metric is named inside its equation
(`Bridge score = …`), never as a heading above it. No border inside a
disclosure — it already has two. Give the block `font-size: var(--fs-copy)` or
`--measure` (in `ch`) resolves narrow.

**Don't** invent a new visual language per project: reuse these two classes
before writing a third.

### Accordion — `<details>` / `<summary>`

**Use for** optional depth only: methodology, a formula, data curation, a
technical trade-off, an implementation note. **The narrative must be complete
without opening it.** Never hide a finding, an outcome, or a decision the
reader needs.

**Standard.** Native element, no JavaScript. Collapsed by default, whole row
clickable, keyboard-reachable with the site focus ring, mono micro label,
hairline above and below, `+` / `−` crossfading on the right, no card, no
nested scrolling. One per section as a rule; never nested.

**Label it specifically** — `Bridge score details`, `Data curation details`.
Never `Read more`.

### Callout — `> blockquote`

**Use for** a genuine turning point, a central insight, or a consequential
decision. One per case study is normal; Inside the Institution has exactly one.

**Standard.** Accent rule on the left, larger type, no fill, no card. An
optional bolded first line acts as a kicker.

**Don't** use it to restate the section title, and don't give every section one
— varied rhythm is the point.

### Quote block

Not yet implemented as a distinct pattern. When a project needs one, use the
callout treatment with attribution and document it here rather than inventing a
second device. Only quote when the words are stronger evidence than a
paraphrase: behaviour, critique, an expert's diagnosis. Never generic praise,
never a wall of testimonials.

### Stat strip — does not exist

There was a `StatRow` component and a `stats` frontmatter array on fifteen
projects; nothing ever rendered them, and both were removed in the architecture pass.
If a project ever earns one, build it then: three or four numbers that
genuinely help scanning, plain type, no icons, no dashboard styling. Do not
reintroduce a `stats` field speculatively.

---

## Caption rules

- **Ordinary figures: caption below.** That is the default and it stays.
- **Comparisons and sequences: a short label may sit above** each item when it
  works as a viewing cue — the reader should know what to look for before
  inspecting. `Before: …` / `After: …` is enough; no badges.
- Concise, usually one line, adding information rather than naming what is
  visible.
- Prefer a colon to an em dash: `University level: clusters, gaps, and
  cross-unit ties.`
- **Inline caption position is independent of the lightbox.** The viewer always
  shows the caption under the picture; moving an inline caption above a figure
  must not change that.

---

## Width rules

| Content | Width |
| --- | --- |
| prose, formulas, encoding keys, compact charts and diagrams, generated visuals | prose measure (`--measure`) |
| screenshots, video, large data visualisations, comparisons, sequences | article column |

Implemented as a default plus an opt-out in `[...slug].astro`; see the design
system document. Nothing needs a per-project width rule.

---

## Prose conventions

- **Inline code** for literal interface values, field names, modes and
  identifiers: `` `Direct` ``, `` `1-Hop` ``, `` `internal ID` ``.
- **Italics** for named software, tools, databases, publications and papers:
  *Gephi*, *D3.js*, *OpenAlex*, *ORCID*, *Figma*.
- Generic technologies stay plain: HTML Canvas, SVG, WebGL.
- **Bold** sparingly, for a figure or a term the eye should catch.
- Short paragraphs. No emoji. Prefer colons to em dashes in captions and short
  labels.
- Product names keep their own capitalisation; view names (Collaboration Map,
  Bridging Scholars) are proper nouns of the tool and stay plain.

---

## The iteration rule

Chronology is not a narrative. `Prototype 1 → 2 → 3 → 4` tells a reader what
happened but not what was learned. Show an earlier state only where it explains
a decision:

> the panel duplicated the network → that made it a second visualisation →
> replaced with controls that act on the main canvas → the panel became a
> control surface

One before/after pair carrying that argument is worth more than five stages in
sequence. Keep the rest for the thesis.

---

## Adding a project

1. `src/content/projects/<slug>.md` — frontmatter first; the build validates it.
2. Cover at `public/media/<slug>/cover-wide.webp`; master in `media-src/<slug>/`.
   Until it exists the card and hero render the tone plate — that is fine.
3. `public/media/<slug>/` for everything else, semantic filenames.
4. External links in `links:`; the kind supplies the label, or pass
   `{ href, label }` for a named artifact.
5. Check the card: title, blurb (≤130 chars), stack, tags, tracks, and which
   single link `cardLinks()` will surface.
6. Decide the narrative spine for *this* project. Do not copy another one's.
7. Decide what finished work appears early, and where.
8. Give every visual a job. If it has none, cut it.
9. Reuse the patterns above selectively — not all of them, and not in a fixed
   order.
10. Add a local modifier only where the project genuinely needs one.
11. Test: desktop, tablet, phone.
12. Test: keyboard focus through the head links, the section menu, the
    accordions.
13. Test: lightbox — open, step, caption, close.
14. Verify every external link resolves (there is no build-time guard on link
    targets, only on covers).
15. Check for horizontal overflow at 375px.
16. Check no media file in `public/media/<slug>/` is unreferenced.
