# williamzqliu.com — Build Spec

Portfolio site rebuild. Astro, static, deployed to GitHub Pages.
Local: `D:\Work\personal-website` · Repo: `williamzqliu.com`

---

## 1. Positioning & goals

**Who I am:** Designer and developer. CS undergrad (Tongji), MFA Information Design & Data Visualization (Northeastern, Dec 2026). I build interactive tools for network and relational data.

**Two audiences, one site:**

| Track | Roles | Entry point |
|---|---|---|
| Design | Data Viz Designer, Information Designer, Design Technologist | `/` |
| Engineering | Data Visualization Engineer, Frontend Engineer, Research Engineer | `/engineering` |

Same project content, two curated orderings. No second domain.

**Primary job of the site:** a visitor finds what they came for within seconds, and in the time they stay, the projects demonstrate both skill and thinking.

**Success criteria:**
1. Live demos are reachable from the first screen of any project
2. A visitor can tell within 10 seconds what kind of work I do
3. Adding a project takes one markdown file, no code changes
4. The site is still current six months from now

---

## 2. Visual system

### Direction

Structured density, not minimalism. The work is information-dense (2,737-node graphs, print-scale posters); a sparse site would fight it. Reference points are scientific publishing and technical documentation, not portfolio templates.

Rules and whitespace carry the structure. No cards, no shadows, no rounded corners.

### Color

Derived from the existing logo wordmark (orange arrow, yellow counterform). Two accents, not one — this is what the identity already has.

```css
/* light */
--bg:            #FBFAF7;
--surface:       #F2F0EA;
--text:          #14140F;
--text-2:        #5C5C54;
--text-3:        #8E8E84;
--rule:          #DCDAD1;
--rule-strong:   #14140F;
--accent:        #F04A18;   /* logo orange */
--accent-2:      #FFC400;   /* logo yellow */

/* dark */
--bg:            #121210;
--surface:       #1C1C19;
--text:          #F0EEE7;
--text-2:        #9C9C93;
--text-3:        #6A6A62;
--rule:          #2C2C28;
--rule-strong:   #F0EEE7;
--accent:        #FF5C2B;
--accent-2:      #FFD24A;
```

Backgrounds are warm-neutral, not blue-black. All chromatic color on the page comes from the project media. The two accents are the only exception.

**Accent budget:** orange appears at most once per viewport — the active filter, or the hovered link. Yellow is rarer still: reserved for the focus ring and one identity mark. If both appear in the same viewport, remove one.

### Type

Three roles, three faces. The three-way split is the point: it encodes the design/engineering duality without a sentence explaining it.

| Role | Face | Notes |
|---|---|---|
| Display | Condensed grotesque matching the logo wordmark | Project titles only. Never body. |
| Body | Instrument Sans or Geist | Not Inter — too defaulted. |
| Technical | Commit Mono or Martian Mono | Not JetBrains Mono — too defaulted. |

Mono is for genuinely technical content only: stack lists, data values, engineering notes, code. It is **not** for navigation, years, section labels, or generic small text. Overusing mono is what makes a site read as templated.

**Scale** (1.25 ratio, rounded):

```
display-lg   40px / 1.05 / 500
display      28px / 1.15 / 500
title        20px / 1.25 / 500
body-lg      17px / 1.6  / 400
body         15px / 1.65 / 400
small        13px / 1.5  / 400
micro        11px / 1.4  / 400   mono only
```

Body line length: 62–68ch max. Never let prose fill a 1200px container.

**Avoid:** all-caps eyebrow labels above headings; one accented word in a headline; middot-joined meta strings (`A · B · C`). Use real columns, commas, or separate lines instead.

### Shape

```css
--radius: 0;              /* everywhere, no exceptions */
box-shadow: none;         /* everywhere, no exceptions */
--rule-hair: 1px;
--rule-heavy: 2px;        /* section boundaries only */
```

Hierarchy comes from rule weight, type scale, and whitespace. Nothing floats.

### Spacing

4px base scale: `4 8 12 16 24 32 48 64 96`. Use rem for vertical rhythm, px for component-internal gaps.

---

## 3. Motion

```css
--ease-out:   cubic-bezier(0.22, 0.61, 0.36, 1);
--ease-inout: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast:   120ms;
--dur-base:   240ms;
--dur-slow:   420ms;
```

Never `linear` except infinite loops.

**Animate only `transform` and `opacity`.** These composite on the GPU. Animating `width`, `height`, `top`, or `margin` drops frames.

**Where motion is allowed:**

| Moment | Treatment |
|---|---|
| Filter re-order | FLIP, 420ms, `--ease-inout`, 30ms stagger |
| Engineering notes expand | `grid-template-rows: 0fr → 1fr`, 300ms, `--ease-out` |
| Hover feedback | 120ms in, 180ms out (slower exit feels more responsive) |
| Page transition | Astro View Transitions API |

**Where it is not:** no scroll-triggered fade-ins on every section, no hero entrance animation, no per-card hover lift. Scattered non-user-triggered motion is the clearest generated-page tell. One orchestrated moment (the filter re-order) is the site's motion signature; everything else responds to a user action or stays still.

**Stagger:** 30–50ms between siblings. Above 80ms reads as sluggish.

**Reduced motion:**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 4. Interaction & accessibility

### Three states, not one

| State | Treatment | Transition |
|---|---|---|
| `:hover` | Background shifts to `--surface`, title underline scales in from left | 120ms |
| `:active` | `scale(0.995)` + background deepens | **0ms — must be instant** |
| `:focus-visible` | 2px `--accent-2` outline, 2px offset | 0ms |

`:active` with any delay feels like a missed tap. `:focus-visible` (not `:focus`) keeps the outline off mouse clicks.

### Touch

```css
@media (hover: hover) and (pointer: fine) {
  /* all :hover rules live here */
}
```

Gate on device capability, not screen width — touch laptops get the right behavior.

```css
a, button { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
```

**`:active` is required on mobile and should be more pronounced than on desktop.** Navigation is not instant (300–800ms on mobile networks) and there is no physical click feedback; without a visual response users tap twice.

Minimum tap target 44×44px. Filter chips and inline links need vertical padding to reach this on mobile even though the type is small.

### Affordance

- Whole project row is clickable, not just the title
- `cursor: pointer` covers the full clickable area
- External links open in a new tab and are marked as such — but with an icon element, not a `→` character appended to the link text
- Filter state changes instantly on click (0ms); the re-order animation (420ms) is separate

### Baseline

- Skip link to `#main`, hidden until focused
- Tab order comes from DOM order; never use positive `tabindex`
- All images have meaningful `alt`; decorative media gets `alt=""`
- Contrast: body text ≥ 4.5:1, large text ≥ 3:1, in both modes
- Site works with JS disabled except the filter (progressive enhancement: without JS, show all projects)

---

## 5. Layout & breakpoints

```
< 640px     Mobile     single column, TOC collapses, square covers
640–1023    Tablet     single column, wide covers, TOC moves to top
≥ 1024px    Desktop    sticky side TOC, full-bleed covers
```

Three tiers. iPad falls into the middle tier and needs no special handling.

**Container:** `max-width: 1200px`. Content sits left of center, not centered — asymmetry signals authorship. Side padding: 16px mobile, 32px tablet, 48px desktop.

**Small-desktop check (1280–1440):** with a 200px TOC and 48px padding, the prose column is ~800px. Do not set container max-width above 1200px or this tier loses its margin.

---

## 6. Components

```
Nav               name left, links right, hairline rule below, theme toggle
Hero              left-aligned statement, one-line bio, stat row, no animation
StatRow           4 cells divided by vertical rules; values in mono
FilterRow         horizontal scroll on mobile, no wrap; active = orange underline
ProjectRow        cover media, title, blurb, stack, links — full row clickable
CoverMedia        <video autoplay loop muted playsinline poster> or <img>; respects tone
QuickFacts        rule-separated table: scale, role, stack, shown at
Section           numbered heading + prose + optional inline figure
EngineeringNotes  collapsible; mono; collapsed by default
MetricPair        large value + small label, rule-separated, no card
PullQuote         left rule, larger type, attribution below
ArchiveList       dense rows: title + category + year
NextProject       bottom of case study
ThemeToggle       light / dark / system; localStorage; inline script prevents flash
Footer            availability line + links
```

Every component reads CSS variables. No hardcoded colors.

---

## 7. Content model

`src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    dates: z.string(),
    blurb: z.string().max(120),
    tags: z.array(z.enum(['networks','interactive','narrative','print'])),
    tracks: z.array(z.enum(['design','engineering'])).min(1),
    featured: z.number().optional(),
    draft: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    links: z.object({
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
      paper: z.string().optional(),
      poster: z.string().optional(),
    }).default({}),
    cover: z.object({
      wide: z.string(),
      square: z.string().optional(),
      poster: z.string().optional(),
      tone: z.enum(['dark','light','neutral']),
      alt: z.string(),
    }),
    quickFacts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
```

### Rules

- **Filter categories are derived, never hardcoded.** `[...new Set(projects.flatMap(p => p.data.tags))]`. Adding a tag in frontmatter makes it appear in the filter row automatically. Two places to update is the most common way a site rots.
- **`tracks` drives the two entry points.** `/` filters to `design`, `/engineering` filters to `engineering`. One source, two curations.
- **`featured` is the sort key.** Present = appears on the landing page in that order. Absent = archive only.
- **`draft: true` excludes from build.** Half-written projects can live in the repo without blocking anything.
- **Media beyond `cover.wide` is optional.** No `square`? Crop the wide one. No video? Use the poster image. Missing assets must never block publishing.
- **Body content is optional.** A project with only frontmatter renders as a row with links but no case study page. Ship first, deepen later.

The last two rules matter more than the schema. The reason three of the four strongest projects are missing from the current site is publishing friction, not quality.

### Adding a project

1. Create `src/content/projects/<slug>.md`
2. Fill frontmatter (copy the template in README)
3. Drop media in `public/media/<slug>/`
4. `npm run build` locally
5. Commit and push

---

## 8. Media specs

| Asset | Format | Size | Notes |
|---|---|---|---|
| Cover loop | MP4 H.264 | 1600×900, < 2MB | 5–8s seamless loop, no audio |
| Cover still | WebP + JPG | 1600×900 | Video poster and fallback |
| Square cover | WebP + JPG | 1000×1000 | Mobile; crop or separate composition |
| Walkthrough | MP4 H.264 | 1920×1080 | 60–90s, captions not narration |
| Inline figures | WebP | max 1600px wide | `loading="lazy"` |

**Do not use GIF.** 256-color palettes destroy the antialiased thin lines and translucent edges in network graphics, and an 8-second GIF is ~15× the size of the equivalent MP4.

**Autoplay requires all three:** `muted`, `playsinline`, `autoplay`. Missing any one breaks iOS.

**Mobile does not autoplay.** Show the poster; play on tap. Saves bandwidth and battery, and small screens make motion noisier.

**Recording:** capture at 4K and display downscaled. Hide bookmarks bar, disable notifications, move the cursor deliberately slowly, pause ~1s between actions.

**Cover tone:** the media container background is locked to the declared `tone` and does not follow the theme. A dark network graphic stays on a dark plate in light mode rather than becoming a patch of contrast.

**When the demo is desktop-only:** on mobile, promote the walkthrough video to the primary action and demote the live demo to a secondary link marked "best on desktop."

---

## 9. Pages

### `/` — Landing (design track)

```
Nav
Hero          statement · one-line bio · stat row
FilterRow
ProjectRow ×4 (featured, tracks includes 'design')
ArchiveList
Footer
```

### `/engineering` — Landing (engineering track)

Same structure. Different hero line, different project set and order, stack lines given more prominence.

### `/work` — Index

Full list, all featured projects, no hero. Same filter row. Archive at the bottom. Differences from landing: no self-introduction, nothing truncated.

### `/work/[slug]` — Case study

```
Breadcrumb
Title · one-line summary · primary links (demo first)
Hero media           full bleed, tone-locked
QuickFacts           scale · role · stack · shown at
[sticky TOC] | Sections
                01 The problem
                02 Approach
                03 What I built
                04 Key decisions      ← design AND technical decisions together
                EngineeringNotes      ← collapsible, mono
                05 Outcome            ← metrics + pull quote
                06 Reflection
NextProject
```

QuickFacts sits above the prose because most visitors will not read to the end; those four values guarantee they leave with scale, role, stack, and provenance.

Engineering notes collapsed by default: the design track skips it, the engineering track expands it. One page, two depths.

### `/about`

Bio with real specifics (Tongji CS, Axis embedded C++, Shanghai Media Group, NetSci 2026, EMNLP 2026). No "T-shaped designer." No "passionate about." Links to resume PDF, GitHub, LinkedIn, email.

### `/404`

---

## 10. Setup & maintenance

### Before `git init`

`.gitignore`:

```
node_modules/
dist/
.astro/
.env
.env.*
!.env.example
.DS_Store
Thumbs.db
CLAUDE.md
.claude/
```

`CLAUDE.md` stays local and is never tracked.

### Windows

```bash
git config --global core.autocrlf input
```

Node 22 LTS. Astro requires 18+.

### Commits

Disable the Claude co-author trailer in Claude Code settings, or write commit messages manually. (Ask Claude Code directly for the current config key — it knows its own settings schema.)

### Workflow

1. Develop locally in `D:\Work\personal-website`
2. `npm run dev` to iterate
3. **`npm run build` locally before every push** — Astro's dev and build differ on base paths and asset resolution; dev-passes-build-fails is common
4. Push to `main`; GitHub Actions builds and deploys to Pages

### Deploy

`.github/workflows/pages.yml`: Node 22 → `npm ci` → `npm run build` → `actions/upload-pages-artifact` (`./dist`) → `actions/deploy-pages`. Set `concurrency` so overlapping pushes do not race.

`astro.config.mjs` needs `site` set, and `base` only if serving from a subpath. Custom domain means no `base`.

### Migration

Do not touch `williamzqliu.com` DNS until the new site is ready. Build at `williamzqliu.github.io` or a subdomain, point the resume at the new URL immediately, and cut the apex over when satisfied. Keep the Framer site — demote it to a subdomain as the design-track archive rather than deleting it.

### README

Include an `## Adding a project` section with the frontmatter template. Six months from now this is the difference between updating the site and not.

---

## Open items

- Windows rendering inconsistency in Ripples into Silence (path animation timing, font fallback) — diagnose before writing "best viewed on Mac" anywhere
- Record cover loops and walkthroughs for Inside the Institution and PolyGraphs
- Export square covers for mobile
- Confirm project naming and public display permission with Brian Ball
- GitHub username currently `williw7`; domain and LinkedIn use `williamzqliu` / `william-zqliu`. Unify, and update the demo URLs if renamed.
