# Content audit — Phase 0

Generated 2026-09-07. Read-only pass: nothing was fixed. No content file was
edited. Every item below is reported for review, per the Phase 0 instruction.

Method: `npm run build` stops at the first bad entry, so all sixteen files were
also validated out-of-band against both the current schema (`src/content.config.ts`)
and the target schema from `CLAUDE_CODE_BRIEF.md` §1a (`graphic` enum,
`links.replay`, `keywords`). A scratch copy of the repo was used to confirm which
errors remain once the schema is widened; the repo itself is untouched.

---

## A. Build blockers (3)

| # | File | Error | Fix belongs to |
|---|---|---|---|
| A1 | `dui-invisible-bill.md`, `not-always-more-for-more.md`, `visual-cognition.md` | `tags.0: Invalid option: expected one of "networks"｜"interactive"｜"narrative"｜"print"` — the files say `graphic`, the enum still says `print`. This is the error that currently stops the build. | Phase 1a, schema |
| A2 | `barvision.md` | `links.replay` is not in the schema. Astro strips unknown keys rather than failing, so this does not stop the build — but the Bilibili replay URL is silently dropped and never renders. | Phase 1a, schema |
| A3 | `polygraphs.md:5` | **YAML parse error, not a schema error.** `blurb: An interactive map of AI ethics literature: keyword co-occurrence...` — an unquoted value containing `: ` is invalid YAML in any parser. Error: `bad indentation of a mapping entry (line 4, col 50)`. Fixing this requires editing a content file, which I am not doing. It needs one pair of double quotes around the blurb value. **Your call.** | needs your decision |

With A1, A2 and A3 resolved, the build passes: 20 pages, no other errors.

## B. Missing media (34 files, all expected)

No `public/media/` directory exists at all. Every reference is dead.

- `cover.wide` — all 16 slugs
- `cover.square` — 14 slugs (not declared by `nightmare-of-moonglade`, `visual-cognition`)
- `links.poster` PDFs — 4: `dui-invisible-bill/poster.pdf`, `not-always-more-for-more/poster.pdf`, `emoease/panels.pdf`, `lumitex/panels.pdf`

No content body references any image; all inline figures are still to come.
Per SPEC §7 missing media must not block publishing, and it does not — the
covers render as tone-coloured plates. Phase 2 fills these with placeholders.

## C. Frontmatter discrepancies — reported, not fixed

### C1. `featured: 3` is used twice
`citing-less-critically.md` and `comgrand.md` both declare `featured: 3`. Sort
order between them is then undefined (falls back to collection order). One of
the two needs a different number.

### C2. The `featured` numbers in the files match neither the brief nor SPEC §9

Three different orderings are in play:

| Rank | Content files (actual) | `CLAUDE_CODE_BRIEF.md` §1b (expected five) | `SPEC.md` §9 (current five) |
|---|---|---|---|
| 1 | inside-the-institution | inside-the-institution | Inside the Institution |
| 2 | polygraphs | polygraphs | PolyGraphs |
| 3 | citing-less-critically **/** comgrand (tie) | citing-less-critically | Ripples into Silence |
| 4 | barvision | whats-going-on-in-there | What's Going on in There |
| 5 | ripples-into-silence | ripples-into-silence | Barvision |

Full order as declared in the files: 1 inside-the-institution, 2 polygraphs,
3 citing-less-critically, 3 comgrand, 4 barvision, 5 ripples-into-silence,
6 barboard, 7 tod-boston, 8 melovision, 9 whats-going-on-in-there,
10 dui-invisible-bill, 11 not-always-more-for-more. No `featured`:
emoease, lumitex, nightmare-of-moonglade, visual-cognition (4, as the brief says).

So an explicit `.slice(0, 5)` over the current data yields
`inside-the-institution, polygraphs, citing-less-critically | comgrand, barvision,
ripples-into-silence` — **not** the five the brief predicts. `whats-going-on-in-there`
is at 9 and `comgrand` at 3. Either the brief's expected list or the `featured`
values in `comgrand.md`, `barvision.md` and `whats-going-on-in-there.md` are stale.
I am not guessing which. SPEC §9 is a third variant and also lists cover tones
(dark/light/dark/light/dark) tied to its own ordering.

### C3. Three unresolved `tags` values — do not want me to pick

Per your instruction I am naming them and choosing nothing:

| File | Current value | The open question |
|---|---|---|
| `comgrand.md` | `[narrative]` | A nine-month service design project with co-design and a physical prototype. None of `networks｜interactive｜narrative｜graphic` fits it. |
| `tod-boston.md` | `[interactive]` | A data analysis and modelling project whose output is static charts. `interactive` currently overstates it. |
| `melovision.md` | `[interactive]` | Sits between `graphic` (brand system, print, generative visuals) and `interactive` (spatial installation). |

The values above are what will build; they are just not settled.

### C4. `nightmare-of-moonglade.md` will render a case study page

It carries an 829-character body, and `caseStudyHref()` links any project with a
non-empty body. If it is archive-only, the body has to go — a content edit, so
reported not done. `visual-cognition.md` has an empty body and correctly
produces no page (15 case study pages, not 16).

### C5. `keywords` is not used by any file yet
The field will be added in Phase 1a per the brief, but no content file declares it.

### C6. Fields that are clean
All sixteen: `blurb` under 120 (longest 106, `whats-going-on-in-there`),
`tracks` non-empty, `cover.tone` valid, `year`/`dates` present, all absolute URLs
well-formed, no stray/unknown keys other than the two in A2 and C5, no `draft: true`.

---

## D. Page-level problems found while auditing (Phase 1 work, not touched)

1. `src/pages/index.astro` calls `featuredProjects('design')` — design track only,
   and no `.slice(0, 5)`. It currently renders **10 rows**. SPEC §1/§9 want
   design **OR** engineering, sliced to five. (`barboard` and `tod-boston` are
   engineering-only and are missing from `/` today.)
2. `src/pages/engineering.astro` exists and is built; `Nav.astro:12` links to it.
   Brief §1b deletes both.
3. `src/pages/work/index.astro` sorts by `year` descending (`allProjects()`),
   not by `featured` ascending with the four unfeatured after. Brief §1e.
4. `about.astro`: `Email` and `Resume` are both `href: '#'` and get filtered out,
   so the page has no contact method; "data-driven storytelling at Shanghai Media
   Group" (line 32); "2,000 nodes" (line 39); a stale
   `TODO: placeholder dates and details to be confirmed` at line 5. Brief §1f.
5. Missing components from SPEC §6: `ArchiveList`, `Section`, `PullQuote`,
   `MetricPair`, `EngineeringNotes`. Eleven case study bodies use native
   `<details>`/`<summary>` with no `.prose details` styling yet. Brief §1c/§1d.

---

## E. Found later (2026-09-08), still not fixed

- ~~`barvision.md:2` — `title: BarVision Song Contest`, plus one `BarVision` in
  the body.~~ **Fixed 2026-09-08 on your instruction**: both now read
  `Barvision`. This is the only content-file text edit made so far.

- ~~`citing-less-critically.md` — all seven `##` headings carried a literal
  number (`## 01 The problem`), which the other fifteen files do not. The
  section number is drawn by a CSS counter, so every heading printed its number
  twice and the table of contents put the number inside the title text.~~
  **Fixed 2026-09-08 on your instruction** (`请修复`): the `NN ` prefixes were
  removed from those seven heading lines. Second content-file text edit.

  Four more files had the same problem and were fixed the same way, also on
  your instruction: `dui-invisible-bill.md`, `emoease.md`, `lumitex.md` and
  `not-always-more-for-more.md`, six headings each. Five of the sixteen files
  carried literal numbers; the other eleven never did. Note that the heading
  ids changed with the text (`#01-the-problem` became `#the-problem`) — the
  table of contents is generated from the same headings, so it followed, but
  any link you saved to an old anchor will no longer resolve.

- **Emphasis coverage is uneven, not fixed.** `.prose strong` is now styled as
  editorial emphasis (weight only, no colour, no fill), and it draws on the
  `**…**` already in the bodies — 113 spans across the sixteen files. Two
  case studies have none at all: `barvision.md` and `comgrand.md`. Three are
  heavy enough to read as keyword highlighting rather than emphasis:
  `dui-invisible-bill.md` (20), `not-always-more-for-more.md` (14) and
  `lumitex.md` (13). Adding or thinning emphasis means editing body text, so
  it is left to you.

- **`quickFacts` standardised to two fields, 2026-09-08, on your instruction.**
  Every case study now carries exactly `Role` and `Outcome`; the third column,
  `Timeline`, is rendered from `dates` rather than duplicated in frontmatter.
  The labels that went away were `Scale`, `Scope`, `Stack`, `Tools`,
  `Published`, `Shown at`, `Made for`, `Built for`, `Shows`, `Format`,
  `Output`, `Result`, `Source`, `Live at`, `Team`, `Advisor`, `Research` and
  `Duration`.

  Each `Outcome` was composed from the fact it replaces, or is your own wording
  where you supplied it:

  | project | Outcome | from |
  |---|---|---|
  | barboard | Live at barboard.space | `Live at` |
  | barvision | Three live broadcasts, including a 26-song grand final with 242 cued steps | yours; `Shows` + the `242 / Cue steps` stat |
  | citing-less-critically | Published at EMNLP 2026, main conference | yours; `Published` |
  | comgrand | 12 panels, an app prototype, and a working ring model | `Output` |
  | dui-invisible-bill | Shown at a course studio critique, Northeastern | `Shown at` |
  | emoease | Made for a master's application portfolio, 2023 | `Made for` |
  | inside-the-institution | Interactive research tool and MFA thesis, presented at NetSci 2026 | yours; `Shown at` |
  | lumitex | Made for a master's application portfolio, 2023 | `Made for` |
  | melovision | Visual system, app, brand identity, and print | `Output` |
  | not-always-more-for-more | Shown at a course studio critique, Northeastern | `Shown at` |
  | polygraphs | Interactive research tool built for a Northeastern University London research team | yours; `Built for` |
  | ripples-into-silence | Interactive scrollytelling piece built from IOM Missing Migrants data | yours; `Source` + the blurb |
  | tod-boston | Quincy Center, at an estimated $482M | `Result` |
  | whats-going-on-in-there | Physical interactive exhibit developed by a four-person team | yours; `Team` |

  **Two things to check.** `inside-the-institution` now says *MFA thesis*; the
  body says "thesis" and the about page says "MFA thesis exhibition", but the
  two words have never appeared together in that file. And the `Advisor` fact
  on `whats-going-on-in-there` — *Sheila Pontis* — is the only value that was
  dropped without landing anywhere else. If the credit matters, it needs a line
  in the body.

  **Scale numbers no longer appear in the intro** for barboard, citing-less-
  critically, comgrand, dui-invisible-bill, emoease, inside-the-institution,
  lumitex, melovision, not-always-more-for-more, polygraphs,
  ripples-into-silence and tod-boston. In every case the same figures are still
  in the blurb, the `stats` row or the body, so nothing is lost from the page —
  only from the metadata grid.

- **`nightmare-of-moonglade.md` still builds a case study page, and it is
  empty.** Its body is one HTML comment explaining why it should not have a
  page, and a comment counts as content to `hasCaseStudy()`. With the new
  intro it renders a title, a blurb, a `Timeline` cell and a hero above nothing
  at all. Either the comment should go (leaving the body empty, which drops the
  page and the row's link) or `hasCaseStudy` should ignore comment-only bodies.

- **`Role` rewritten as a title rather than a task list, 2026-09-08, on your
  instruction.** Six values are yours verbatim; the other eight follow the same
  principle and claim no seniority the file does not already support.

  | project | Role | was |
  |---|---|---|
  | inside-the-institution | Visualization Designer & Researcher | Design, analysis, implementation, evaluation |
  | citing-less-critically | Research Contributor & Figure Designer | Third author. Figures, matching pipeline, annotation |
  | polygraphs | Visualization Research Assistant | Research assistant, visualization |
  | barvision | Art Director & Technical Director | Art direction and technical direction |
  | ripples-into-silence | Information Designer & Developer | Information design and development |
  | whats-going-on-in-there | Interaction Designer & Researcher | Key contributor: concepts, prototypes, visuals, testing |
  | barboard | Designer & Developer | Core member, built unpaid on my own initiative |
  | comgrand | Solo Designer & Researcher | Solo designer and researcher |
  | dui-invisible-bill | Solo Information Designer | Solo designer |
  | emoease | Solo Designer & Creative Technologist | Solo designer and creative technologist |
  | lumitex | Solo Designer | Solo designer |
  | melovision | Solo Designer & Researcher | Solo designer and researcher |
  | not-always-more-for-more | Solo Information Designer | Solo designer |
  | tod-boston | Data Analyst | Analysis and modelling |

  Two facts would have left the site with the old wording, so they moved into
  the Outcome instead of being dropped:

  - `citing-less-critically` — *Third author on a paper published at EMNLP
    2026, main conference*.
  - `barboard` — *Live at barboard.space, built unpaid on my own initiative*.
    Neither "core member" nor "unpaid" appears anywhere in that file's body, so
    the Role field was their only home.

  **Two judgement calls to check.** `barboard` reads *Designer & Developer*
  rather than a directing title: the file's old `Scope` line said "art
  direction, information architecture, technical direction", but its `Role`
  said "core member", and I did not want to promote one on the strength of the
  other. And `tod-boston` reads *Data Analyst* with no "solo" — nothing in that
  file says whether it was solo or a team.
