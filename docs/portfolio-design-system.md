# Portfolio design system

A working map of the site, not a component library. It exists so a change has
one obvious home and so the next project does not re-invent what already
exists. Nothing here is aspirational: every file and class named below is in
the repository today.

---

## Philosophy

- **Tokens over values, files over folders.** The layers below are conceptual.
  They map onto files that already exist rather than onto a directory tree
  invented to express them.
- **Consistency where drift would be a bug, freedom where difference is the
  point.** Two projects that stack their media differently are not an
  inconsistency; two links that hover differently are.
- **Rules, not cards.** The whole visual system is type, space and hairlines.
  There are no shadows, no rounded corners (`--radius: 0`), no fills except
  `--surface` chips and the cover plates.
- **One person edits this.** Prefer the smallest change that creates a
  convention.

---

## The four layers

| Layer | Owns | Lives in |
| --- | --- | --- |
| Foundations | colour, type, space, widths, motion, breakpoints | `src/styles/tokens.css`, `src/styles/base.css` |
| Global components | chrome and listing UI used on more than one page | `src/components/*.astro` |
| Editorial components | the patterns a case study is written out of | `src/pages/work/[...slug].astro` (global prose styles) + `src/components/Lightbox.astro` |
| Project content | prose, frontmatter, project media, local exceptions | `src/content/projects/*.md`, `public/media/<slug>/` |

---

## Foundations

### Colour — `src/styles/tokens.css`

Semantic, never literal. Three theme blocks carry the same names: `:root`
(light), `:root[data-theme='dark']`, and a `prefers-color-scheme: dark` block
for visitors who have not chosen.

| Token | Job |
| --- | --- |
| `--bg`, `--surface` | page, chip and plate fills |
| `--text`, `--text-2`, `--text-3` | ink, secondary, quietest (captions, labels) |
| `--rule`, `--rule-strong` | hairline dividers, structural rules |
| `--accent`, `--accent-2` | resume orange (links, hover), logo yellow (focus ring) |
| `--code-ink` | inline code in prose |
| `--tap-press` | the scrim a touch device draws under a finger |
| `--paper` | **theme-independent.** The ground artwork was drawn on, for exports with a transparent background |
| `--tone-dark`, `--tone-light`, `--tone-neutral` (+ `-ink`) | cover placeholder plates; also outside the theme |

Hard-coded hex belongs in exactly two places: `tokens.css`, and inside a drawn
figure that reproduces another product's colour (the gold `#A4804A` bridge
rings in Inside the Institution, which is that tool's colour, not this site's).

### Typography — `src/styles/tokens.css` (scale) + component styles (roles)

Three faces: `--font-display` (Bricolage Grotesque — hero identity, project and
section titles only), `--font-body` (Instrument Sans — everything else),
`--font-mono` (IBM Plex Mono — stack chips, data values, section labels,
disclosure labels; never navigation).

| Role | Size token | Owner |
| --- | --- | --- |
| Hero name / greeting | `--fs-hello-name`, `--fs-hello-greet` | `components/IdentityLine.astro`, `pages/resume.astro` |
| Hero statements | `--fs-statement` | `components/Hero.astro` |
| Project card title | `--fs-cardtitle` | `components/ProjectRow.astro` |
| Case-study title | `--fs-casetitle` | `pages/work/[...slug].astro` `.cs__title` |
| Case-study summary | `--fs-lead` | `.cs__summary` |
| Section heading (`h2`) | `--fs-display` | `.prose h2` |
| Body copy | `--fs-copy` (17px, 18px ≥640) | `.prose p` |
| UI / link text | `--fs-body` (15px) | components |
| Navigation | `--fs-nav` (14px) | `components/Nav.astro` |
| Caption, small label | `--fs-small` (13px) | `.prose figcaption`, `.cs__caption` |
| Mono micro (chips, labels) | `--fs-micro` (11px) | `components/KeywordTags.astro`, `.section-label` |

Weights are a four-step scale (`--fw-regular` 400 → `--fw-display` 700). One
step up is the standard way to promote something; do not reach for a size
change first.

Three utility classes survive in `base.css` (`.t-display-lg`, `.t-display`,
`.t-body-lg`). Everything else sizes itself from the tokens in its own scoped
style block. **Do not add new `.t-*` utilities** — a utility nothing calls is a
second place to look for an answer that lives in `tokens.css`.

### Spacing — `src/styles/tokens.css`

`--sp-4` … `--sp-120`, a 4px base. Use the token. Two deliberate exceptions
exist and both are documented in place: the 4px gap between a link and its
arrow (the arrow is a mark on the word, not a second item), and the half-pixel
paddings in the phone link grid, where one padding produces two different
optical gaps.

### Widths — `src/styles/tokens.css` + `pages/work/[...slug].astro`

| Token | Value | Job |
| --- | --- | --- |
| `--container` | 1200px | page container, via `.container` in `base.css` |
| `--pad` | 18 / 32 / 48px | gutter, per breakpoint |
| `--measure` | 62ch | long-form prose |
| `--measure-meta` | 46ch | blurbs, one-line bios |
| `--measure-display` | 20ch | the hero name, project titles |
| `--measure-lead` | 34ch | the hero statement (currently unused) |

Inside a case study there are two widths and one rule that decides between
them, in `[...slug].astro`:

```css
.prose > *            { max-width: var(--measure); }   /* the default */
.prose > figure,
.prose > table        { max-width: 100%; }             /* the article column */
```

**Drawn things keep the measure; photographed things take the column.** A
formula, an encoding key, a small diagram or a compact chart lines up with the
paragraph edges. Screenshots, video, comparisons and data tables get the full
column. `--measure` is in `ch`, so any block that must match the paragraphs
needs `font-size: var(--fs-copy)` or it comes out narrower.

### Breakpoints

Three, everywhere, no others: `max-width: 639px`, `min-width: 640px`,
`min-width: 1024px`. CSS variables cannot be used in media queries, so these
are literal — that is the one accepted duplication in the codebase. Capability
queries (`(hover: hover) and (pointer: fine)`, `(prefers-reduced-motion)`) are
orthogonal and must never be folded into a width query.

---

## Global components

| Component | Path | Purpose | Used by | Notes |
| --- | --- | --- | --- | --- |
| `Base` | `layouts/Base.astro` | document shell, `<head>`, ClientRouter, skip link | every page | |
| `Nav` | `components/Nav.astro` | header, active underline, reading-progress bar | `Base` | progress bar reads `[data-reading]`; shown on `/work/*` only |
| `Footer` | `components/Footer.astro` | contact block | `Base` | 2×2 baseline grid ≥1024 |
| `BackToTop` | `components/BackToTop.astro` | reveal-on-scroll link | `Base` | trigger derived from `[data-totop-from]` on each page, not a magic scrollY |
| `ThemeToggle` | `components/ThemeToggle.astro` | light/dark switch | `Nav` | |
| `ProjectRow` | `components/ProjectRow.astro` | the project card | `pages/index.astro`, `pages/work/_index.astro` | see below |
| `CoverMedia` | `components/CoverMedia.astro` | cover image / video / tone plate | `ProjectRow`, case study head | `ratio="responsive" \| "hero"`, `tone`, optional `src`/`mobileSrc` |
| `KeywordTags` | `components/KeywordTags.astro` | stack chips | `ProjectRow`, case study head | `items`, `limit`, `emphasise` |
| `QuickFacts` | `components/QuickFacts.astro` | Timeline / Role / Outcome | case study head | |
| `ExtArrow` | `components/ExtArrow.astro` | the ↗ mark | four link sites | |
| `NextProject` | `components/NextProject.astro` | end-of-page hand-off | case study | destination decided by `nextStep()` |
| `Hero`, `HomeIntro`, `IdentityLine` | `components/` | homepage opening | `pages/index.astro`, `pages/about.astro` | |
| `FilterRow`, `ArchiveList` | `components/` | work-index UI | `pages/work/_index.astro` | parked with the index — see *The GFL cut* |
| `Lightbox` | `components/Lightbox.astro` | the image/video viewer | case study | one implementation, site-wide |

**When not to create another one:** if a pattern exists once, leave it where it
is. Formalise on the second use, and only if a shared implementation would
prevent visual drift.

---

## Project cards

One source of truth: the project's markdown frontmatter, read through
`src/lib/projects.ts`. A card never carries its own copy of a title, cover,
tag, or URL.

| Card part | Source |
| --- | --- |
| title, year, blurb, stack, tone | frontmatter fields of the same name |
| cover | `cover.wide`, passed through `shippedMedia()` |
| case-study link | `caseStudyHref()` — only exists when the body has prose |
| outbound link | `cardLinks()` |
| hover | `ProjectRow.astro`, inside `(hover: hover) and (pointer: fine)` |

**Card links are a slice, not a second list.** `projectLinks()` returns every
link in presentation order (`demo, thesis, paper, poster, spotlight, code`);
`cardLinks()` returns `projectLinks(project).slice(0, 1)`. So Inside the
Institution shows four links on its page and only *Live Demo* on its card,
without a second field anywhere. `CODE_LINKS_ENABLED` in the same file parks
every repository link site-wide with one boolean.

**Cover fallback.** `shippedMedia()` (`src/lib/media.ts`) returns the path only
if the file is really in `public/`. Missing artwork renders the tone plate, not
a broken image — most projects are in that state today, deliberately.

**Hover model** (desktop pointers only): the title takes `--accent`, the cover
goes from `grayscale(1)` to full colour and scales 1.1. `@media (hover: none)`
removes the grayscale so a phone never shows a permanently grey cover.

---

## Media system

**Where files live.** `public/media/<project-slug>/` for what the site serves;
`media-src/<project-slug>/` for the originals. Same base name on both sides,
different extension: `collaboration-map.mp4` is built from
`media-src/inside-the-institution/collaboration-map.mp4`. `media-src/` is
git-ignored — it is a local archive, not a backup.

**Formats.** Stills ship as WebP (sharp, quality 80–85, width-only resize, no
crop). Video ships as H.264 MP4 (`-crf 26–27`, no audio, `+faststart`), width
1440 for a 720px column at 2×. Never ship the master.

**Size a still for the viewer, not for the slot it sits in.** The lightbox
enlarges to `min(1600px, 100%)` and a retina screen wants two device pixels per
CSS pixel, so anything with fine detail — a diagram, a UI capture, a
multi-panel composition — needs roughly **2400–3200px** on its long edge even
when it renders inline at 360px. A file exported for the inline size looks
soft the moment it is opened. Vector sources (PDF) can be rasterised at any
resolution: `fitz.Matrix(zoom, zoom)` with `zoom = target_width / page.width`.

**Naming.** Semantic, describing what the media contains:
`side-panel-before.webp`, not `screenshot-04.webp`. A master that produces one
published file shares its name; a master that a clip is *cut from* takes a
`.full` suffix (`research-units.full.mp4`).

**In prose.** `<figure>` with `<figcaption>`; images get `width`/`height`,
`loading="lazy"`, `decoding="async"`. Video is `autoplay muted loop playsinline
preload="metadata"` with no `controls` — a clip on this site is a moving
picture, not a player.

**Opt-in attributes** (all in `[...slug].astro`):

| Attribute | Effect |
| --- | --- |
| `data-ground="paper"` on an `<img>` | fills the transparent ground with `--paper`, dark theme included |
| `data-caption="center"` on a `<figure>` | centres the caption under a plate that has no left edge |

**Lightbox.** `components/Lightbox.astro`, one implementation for the whole
site, with two gesture models that share one visual language: a fine pointer
clicks a picture a second time to open it at its own size, then scrolls or
drags the oversized result (`data-zoomed` on the dialog, chrome switched to
`position: fixed`; the drag scrolls the container rather than transforming the
picture); touch keeps pinch and pan. A new picture, a close, or a
step always returns to the fitted view. It collects `.prose img, .prose video, .cs__media img` at open time,
orders them by document position (only a `.media-mosaic` is re-sorted, into the
column order the eye takes), and carries each figure's caption. Desktop gets
arrows and keys; touch gets swipe, two-finger pinch zoom to 4×, and pan while
zoomed. Zoom resets between pictures. A clip opens at the time the page copy
had reached. **Do not build a second viewer.**

---

## Interactions

**Link roles.** Four visual roles, and they should not blur into each other:

| Role | Looks like | Where |
| --- | --- | --- |
| Navigation | body face, 14px, ink; 2px rule under the current page | `Nav.astro` |
| Text link with arrow | inline-flex, 4px gap, medium weight, colour-only hover | `Footer.astro`, `ProjectRow.astro` (`.prow__linkout`), `resume.astro` (`.resume__action`), `[...slug].astro` (`.cs__link`) |
| Inline prose link | underline offset, accent on hover | `.prose a` |
| Utility link | `.link` in `base.css`, accent with a rule on hover | skip link, 404 |

The four text-link sites are deliberately separate rules: they share the
geometry and the hover, and differ in size, colour and tap padding because they
sit in different densities. **If you change the hover behaviour, change all
four** — that is the drift risk this table exists to name.

**No buttons.** The site has no filled buttons. `<button>` is used for the theme
toggle, the lightbox controls and the disclosure summary, all styled as marks
rather than as controls.

**Focus.** One rule, in `base.css`: `:focus-visible { outline: 2px solid
var(--accent-2); outline-offset: 2px }`. Never `:focus`. The only opt-out is
`.lb:focus`, because the lightbox shell takes focus on open so that no control
starts out ringed; every control inside it keeps the ring.

**Touch targets.** `--tap: 44px` is the target. One place sits below it
deliberately and says so in a comment: the case-study intro links on a phone,
at 34.5px, where the padding that would make the target was spent on the
editorial rhythm instead. **Open accessibility item — worth revisiting.** The
lightbox step buttons keep their full 44px.'

**Motion.** `--dur-hover-in` 200ms / `--dur-hover-out` 280ms, `--dur-base`
240ms, `--dur-press` 90ms, `--dur-draw` 320ms, `--dur-theme` 150ms, easing
`--ease-out`. The lightbox crossfade is asymmetric on purpose: 150ms out,
280ms in. A global `prefers-reduced-motion` block in `tokens.css` reduces every
duration to 0.01ms; the lightbox also branches on it in script.

---

## Global vs local: the decision order

When a change is requested, in this order:

1. Can an existing **token** carry it?
2. Can an existing **shared component** carry it?
3. Can a **modifier** on an existing component carry it
   (`data-abreast`, `data-caption="center"`, `data-ground="paper"`,
   `--mosaic-split`)?
4. Is it genuinely **project-specific**? Then keep it local — a data attribute
   or a CSS custom property passed from the content file.
5. Only then create something new.

Local exceptions belong in the content file as an attribute or a custom
property, never as a new stylesheet or a project-specific class. That is how a
mosaic passes its column split and how one comparison stays side by side on a
phone while every other pair stacks.

---

## Known gaps (found in the audit, deliberately not changed)

- **Links have no build-time guard.** Covers fall back to a tone plate when
  the file is missing; a link to a file that is not in `public/` simply 404s.
  Check link targets by hand when adding a project.
- **Unused tokens**: `--dur-fast`, `--dur-slow`, `--ease-inout`,
  `--measure-lead`. Kept as vocabulary; say the word and they go.
- **`--header-h` is a fixed 97px / 63px** rather than measured. It feeds
  `scroll-margin-top` for every anchor; if the header ever changes height, this
  is the number to change.

### The GFL cut

`src/lib/projects.ts` carries a temporary reduced edition: `/work` is parked at
`pages/work/_index.astro` (Astro ignores `pages/**/_*`), `Work` is commented out
of `Nav.astro`, and the homepage shows four projects. `grep -rn GFL src/` lists
every site. To restore: set `GFL_CUT` to `undefined`, rename the index back,
uncomment the nav entry.

---

## Where do I edit this?

| I want to change… | File |
| --- | --- |
| a colour, in either theme | `src/styles/tokens.css` |
| a type size, weight, or face | `src/styles/tokens.css` |
| spacing scale | `src/styles/tokens.css` |
| page width, gutter, prose measure | `src/styles/tokens.css` |
| the breakpoints | every `@media` — they are literal; there are three |
| focus ring, selection, skip link, reset | `src/styles/base.css` |
| main navigation, active state, progress bar | `src/components/Nav.astro` |
| footer | `src/components/Footer.astro` |
| back-to-top trigger | `src/components/BackToTop.astro` + `[data-totop-from]` on the page |
| project card: layout, hover, tags, links | `src/components/ProjectRow.astro` |
| which links a card shows | `cardLinks()` in `src/lib/projects.ts` |
| project ordering, next-project chain, tracks | `src/lib/projects.ts` |
| what frontmatter a project may declare | `src/content.config.ts` |
| cover behaviour and the tone plates | `src/components/CoverMedia.astro`, `src/lib/media.ts` |
| stack chips | `src/components/KeywordTags.astro` |
| Timeline / Role / Outcome | `src/components/QuickFacts.astro` + the page's `facts` array |
| case-study head: title, summary, links, hero | `src/pages/work/[...slug].astro` (frontmatter + `.cs__*` styles) |
| section menu / desktop TOC | `src/pages/work/[...slug].astro` (`.cs__toc*` + the script) |
| all case-study prose styling | `src/pages/work/[...slug].astro`, the `is:global` block |
| figure, caption, media widths | same block: `.prose figure`, `.prose figcaption`, `.prose > *` |
| two-up, mosaic, formula, tier key | same block: `.media-pair`, `.media-mosaic`, `.formula`, `.tier-key` |
| accordion look and the +/− | same block: `.prose details`, `.prose summary` |
| callout | same block: `.prose blockquote:not(.participant-quote)` |
| participant quote, issue → response | same block: `.participant-quote`, `.issue-response` |
| stat strip | same block: `.stat-strip` |
| lightbox, swipe, pinch | `src/components/Lightbox.astro` |
| a project's words, media, section order | `src/content/projects/<slug>.md` |
| a project's images | `public/media/<slug>/` (masters in `media-src/<slug>/`) |
| one project's local layout exception | an attribute or custom property in that project's markdown |

See `docs/case-study-editorial-system.md` for how to write a case study with
these parts.
