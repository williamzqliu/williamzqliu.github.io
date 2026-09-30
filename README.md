# williamzqliu.com

Portfolio site. Astro, static, deployed to GitHub Pages at
[williamzqliu.com](https://williamzqliu.com).

## Local development

Requires Node 22.12 or later.

```bash
npm install
npm run dev          # http://localhost:4321, hot reload
```

The dev server shows every project, published or not, so a draft can be read
against its own card and case study. The build shows only published projects.
Before every push, check the build itself:

```bash
npm run build        # what deploys
npm run preview      # serves the built dist/, the published set only
```

The repository has no editor configuration. Run these npm scripts from any
terminal, or wrap them in tasks in your own editor.

There is no `.html` anywhere in the source: `src/pages/*.astro` are compiled at
build time, so Live Server cannot serve this project.

## Adding a project

1. Create `src/content/projects/<slug>.md` from the template below.
2. Put its media in `public/media/<slug>/`.
3. Run `npm run build`. Frontmatter that breaks the schema fails the build. An
   unknown key is dropped without an error, so check field names against the
   schema.
4. Set `published: true` when the project is ready to be read.
5. Commit and push; GitHub Actions deploys.

A published project appears on `/work` without any code change: under its
category in All work, or under Archive. Its place in those lists is set in
`src/lib/projects.ts` by `MAIN_ORDER` and `ARCHIVE_ORDER`; a project missing
from them follows the listed ones, newest first. The homepage shows only the
projects in `SELECTED_ORDER`, in that order.

### Frontmatter template

Checked against `src/content.config.ts`, which remains the authority.

```yaml
---
title: Project Name
year: 2026                     # the year shown on cards and rows
dates: Jan 2026 – Jun 2026     # the Timeline, shown as written
blurb: One or two sentences for the project card.
tags: [interactive]            # networks | interactive | narrative | information-design
tracks: [design]               # design | engineering; see the table below
category: data-research        # data-research | interfaces-experiences | visual-storytelling
                               # required unless archive: true
archive: false                 # true lists it under Archive, with no category
published: false               # true to deploy it
stack: [TypeScript, D3.js, Python]

links:                         # every entry optional
  demo: https://example.com
  paper: /papers/name.pdf      # paper, poster, and thesis take a path or a URL
  poster:                      # any link can carry its own label
    href: /posters/name.pdf
    label: NetSci 2026 poster

cover:
  wide: /media/<slug>/cover-wide.webp   # required: the card, and the head by default
  tone: dark                   # dark | light | neutral
  alt: What the cover shows, for screen readers.
  caption: What the cover shows, printed under the case study head.

quickFacts:                    # the head reads Role and Outcome by label
  - label: Role
    value: Research, data analysis, and design
  - label: Outcome
    value: Interactive research tool and published paper
---

Case study body in markdown. Optional: without it the project is a card only.
```

Optional fields not in the template:

- `links`: `thesis`, `spotlight`, and `code`. A `code` link is shown only for
  projects listed in `CODE_LINKS_ENABLED` in `src/lib/projects.ts`.
- `cover`: `heroWide` and `heroMobile` (a different picture for the case study
  head), `heroWhole` (the head keeps the picture's own proportions),
  `heroInBody` (no picture in the head), and `zoom: false` (the head does not
  open in the viewer).
- `archiveLabel`: a more specific description for the Archive row, which
  otherwise shows the tags.
- `compact: true`: a short case study without the contents rail.
- `draft: true`: excluded from the build entirely.
- `credits`: skills and tools (at most five each), team, special thanks, and a
  note, rendered after the case study.

### Fields that change behavior

| Field | Effect |
|---|---|
| `published` | Defaults to false. Only `published: true` reaches the deployed site; the dev server shows every project. |
| `draft: true` | The file does not build at all, in dev or in the build. |
| `archive` | `true` lists the project under Archive, never under All work or a category. |
| `category` | The one public category a main project is filtered under on `/work`. Required unless `archive: true`. |
| `tracks` | The schema requires at least one value, `design` or `engineering`. No page currently reads the field. |
| `blurb` | 160 is the build's hard limit. The card is designed for about three lines, roughly 125 characters at its narrowest, so check the rendered card. |
| `cover.tone` | Locks the media plate's background, so a dark graphic stays on a dark plate in light mode. |

A filename starting with `_` is ignored by the loader, which is a second escape
hatch alongside `draft`.

### Media

Cover stills are image files (the site uses WebP); MP4 and WebM covers play as
muted loops. `cover.wide` is the only required path, and a missing file never
blocks the build: the card and the head fall back to a placeholder plate in the
project's tone until the file exists in `public/media/`.

## Project layout

```
src/
  content.config.ts        collection schema
  content/projects/*.md    one file per project
  lib/projects.ts          publication gate, categories, list order, links
  lib/media.ts             cover files and their fallback plates
  lib/loop.ts              which list "Next project" follows
  components/              site components, one .astro file each
  layouts/Base.astro       head, theme script, skip link
  pages/                   index, about, resume, 404, work/index, work/[...slug]
  styles/
    tokens.css             design tokens: color, type, spacing, motion
    base.css               reset, document defaults, layout primitives
```

## Deploy

Push to `main`. `.github/workflows/pages.yml` runs `npm ci` and `npm run build`
on Node 22 and publishes `dist/` to GitHub Pages.
