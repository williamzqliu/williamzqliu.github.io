# williamzqliu.com

Portfolio site. Astro, static, deployed to GitHub Pages at
[williamzqliu.com](https://williamzqliu.com).

Design and build decisions live in [SPEC.md](SPEC.md). It is the authority — the
colours, type scale, spacing and motion values in it are deliberate.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321, hot reload
```

Before every push:

```bash
npm run build        # dev and build differ on asset resolution
npm run preview      # serves the real dist/ output
```

In VS Code, `Ctrl+Shift+B` starts the dev server. There is a second task,
`astro: build + preview`, for the pre-push check.

Note that there is no `.html` anywhere in the source — `src/pages/*.astro` are
compiled at build time. Live Server cannot serve this project.

## Adding a project

One markdown file. No code changes.

1. Create `src/content/projects/<slug>.md` from the template below
2. Drop media in `public/media/<slug>/`
3. `npm run build` locally — bad frontmatter fails the build rather than shipping
4. Commit and push; GitHub Actions deploys

### Frontmatter template

```yaml
---
title: Project Name
year: 2026
dates: Jan – Jun 2026          # human-readable, shown as written
blurb: One sentence, 120 characters maximum. This is the landing-page line.
tags: [networks, interactive]  # networks | interactive | narrative | print
tracks: [design, engineering]  # design | engineering — at least one
featured: 3                    # omit to keep it in the archive only
draft: false                   # true excludes it from the build entirely
stack: [TypeScript, D3.js, Python]

links:                         # every entry optional
  demo: https://example.com
  code: https://github.com/williamzqliu/repo
  paper: /papers/name.pdf
  poster: /posters/name.pdf

cover:
  wide: /media/<slug>/cover-wide.webp   # required
  square: /media/<slug>/cover-square.webp
  poster: /media/<slug>/cover-poster.webp
  tone: dark                   # dark | light | neutral — see below
  alt: What the cover shows, for screen readers.

quickFacts:                    # case study page
  - { label: Scale, value: 2,737 nodes }
  - { label: Role, value: Design and engineering }

stats:                         # case study outcome section
  - { value: 2,737, label: nodes rendered at 60fps }
---

Body content is optional. Frontmatter alone renders a row on the landing page.
Add prose here when there is a case study to write — ship first, deepen later.
```

### Fields that change behaviour

| Field | Effect |
|---|---|
| `featured` | Present = appears on the landing page, in that number order. Absent = archive only. |
| `tracks` | `design` shows it on `/`, `engineering` shows it on `/engineering`. One source, two curations. |
| `draft: true` | Excluded from the build. Half-written projects can live in the repo. |
| `tags` | The filter row is derived from whatever tags exist. Adding a tag makes a filter chip appear on its own — never edit a list somewhere else. |
| `cover.tone` | Locks the media plate's background. A dark graphic stays on a dark plate in light mode instead of becoming a patch of contrast. |

A filename starting with `_` is ignored by the loader, which is a second escape
hatch alongside `draft`.

### Media

See SPEC §8 for formats and sizes. The short version: MP4 H.264 for cover loops
(1600×900, under 2MB, no audio), WebP for stills, never GIF. Missing media must
never block publishing — `cover.wide` is the only required path, and the row
falls back to a tone-locked placeholder plate until real media exists.

## Project layout

```
src/
  content.config.ts        collection schema (SPEC §7)
  content/projects/*.md    one file per project
  lib/projects.ts          shared queries: featured, tag derivation, links
  components/              Nav, Hero, StatRow, FilterRow, ProjectRow, ThemeToggle, Footer
  layouts/Base.astro       head, theme script, skip link
  pages/                   index.astro, 404.astro
  styles/
    tokens.css             SPEC §2 and §3 — every colour, size and easing
    base.css               reset, type roles, container
```

Every component reads CSS variables. No hardcoded colours anywhere else.

## Deploy

Push to `main`. `.github/workflows/pages.yml` runs `npm ci`, `npm run build`, and
publishes `dist/` to GitHub Pages. Typical time from push to live is under a
minute.
