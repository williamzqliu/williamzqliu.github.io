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

**Modifiers.** Default stacks below 640px. `data-abreast` keeps the row at
every width (12px gutter on a phone, 24px above) for pictures that mean nothing
apart. `--pair-split` (passed as an inline style, like the mosaic's) sets the
column ratio: give differently shaped pictures the ratio of their own aspects
and they come out the same height with nothing cropped. The two work together,
so a row set abreast with a split holds both its shape and its single height
down to the phone.

**A sequence that arrives as one image stays one image.** Five panel states
exported as a single figure are one `<figure>` with one caption below, not five
crops in a grid: the composition is already the evidence, and the viewer
enlarges the whole strip.

**One moment, one caption.** Where several frames are the same moment rather
than a comparison, the row goes inside a single `<figure>` as bare `<img>`
children of the `.media-pair`, with one `<figcaption>` under it: three photos
of one session are one picture as far as the reader is concerned, and three
captions would ask them to tell the frames apart. `--pair-split` takes as many
ratios as there are frames, so masters exported at one height come out in a row
at one height, and `data-abreast` keeps them in that row on a phone — split
across three screens they stop being one moment. Comgrand's Section 02 has the
three-frame form.

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

**A disclosure ends its section.** Nothing essential goes after one: no
conclusion, no interpretation, and no transition into the next section. The
disclosure is the optional tail a reader can skip, so anything placed under it
is content the section is relying on and half its readers will never open the
block to reach. The next numbered section opens itself; it does not need a
teaser at the bottom of the one before it.

### Callout — `> blockquote`

**Use for** a genuine turning point, a central insight, or a consequential
decision. One per case study is normal; Inside the Institution has exactly one.

**Standard.** Accent rule on the left, larger type, no fill, no card. Up to
three paragraphs: a bolded label in the mono caps register, the statement at
`--fs-title`, and an optional third line at copy size in the supporting tone
for the detail behind it.

**Modifier.** `data-close` needs the raw `<blockquote>` form, since markdown has
no way to put an attribute on a `>` block. It puts the label in the accent instead of the quiet grey. The one
place a callout label leaves that grey, and it earns it by being the last line
of the case study: the colour is what says this is the end rather than another
note along the way. One per case study, and only as the closing block.

**Don't** use it to restate the section title, and don't give every section one
— varied rhythm is the point. It is the author's voice: a verbatim sentence
from a study participant belongs in a participant quote instead.

### Participant quote — `.participant-quote`

**Use for** exact evidence from a research participant or user, where the
wording itself carries something a paraphrase would lose: what they noticed,
what they doubted, how they diagnosed a problem. Inside the Institution has two
— one discovery in 07, one critique in 08.

**Standard.** A native `<blockquote class="participant-quote">` holding a `<p>`
and a `<cite>`. A 2px accent rule on the left with 20px of padding, the
sentence at `--fs-title` in `--fw-medium` on a 1.4 line, 85% of the measure so
it sits inside the column rather than filling it, and the source 12px under the
words in the mono label register, one pixel over micro. 32px of air above and
below. No fill, no card, no shadow, no giant quote mark, no centring.

A vertical rule rather than a horizontal one: the stat strip and the section
rules already cut across this column, and a third full-width line would keep
slicing the page instead of marking a voice. The author callout carries the same
rule at the full 720px with no attribution; the two never appear in the same
section, and the shorter measure and the source underneath are what tell them
apart.

**Don't** use it for your own conclusions, a section summary, a turning point,
or anything that reads as a testimonial — those are the callout, or they are
prose. Don't paraphrase inside the quotation marks: the surrounding paragraph is
where the precise version goes. Don't stack several into a gallery; a case study
is not a results chapter.

### Issue → response — `.issue-response`

**Use for** findings that each point at one concrete change, where the pairing
is the information. Inside the Institution has exactly one, carrying the three
interface problems from the study and what each one asks for.

**Standard.** A native `<dl>` with one `<div>` per pair, `<dt>` for the issue and
`<dd>` for the response, at prose width. Two columns from 640px so a pair reads
across in one line, a hairline above the list and between the rows, and stacked
inside each pair on a phone so the pair stays one unit. No cards, no icons, no
badges, no arrow glyphs, no fills — three sentences should not look like a
dashboard.

**Don't** use it for a feature list, statistics, or any two columns that are not
an issue and its response, and don't add an "Issue / Response" header row: the
pairing is legible without one.

### Stat strip — `.stat-strip`

**Use for** a small group of numbers the section is built on, where scanning
them beats reading them in a sentence. Inside the Institution has exactly one,
carrying two figures.

**Standard.** Prose width, closed by a hairline above and below with 24px of
air inside them. Three levels: a mono value two pixels under `--fs-display`
with tabular figures and `--fw-strong`, a label 8px under it, and a quieter note 4px under
that for the count a percentage came from. Two columns with a lighter, inset
divider between them; one column on a phone, where the divider goes and space
takes over. No fill, no corners, no shadow, no icon, no chart.

Two columns by default. `data-cols="3"` takes a third, above 640px only:
below that the phone rule wraps them instead, because three 28px figures do
not fit a phone column without touching. Citing Less Critically's grounding
section uses the three-column form.

`data-grid` is for a strip that wraps into rows: four cells two by two, six
cells three by two, and so on. It closes the dividers into a cross rather than
leaving a column rule with nothing under it. Gaps go to zero and the space
moves inside the cells, so the vertical and horizontal rules meet exactly at
the centre and the block reads as one field divided rather than as separate
boxes; the first column keeps no left padding, so its figures stay on the
prose's own left edge. Comgrand's research disclosure uses the two by two.

**Order.** Independent categories with no sequence of their own read high to
low, in the grid's normal reading order: top left, top right, then the row
under it. Where the data does carry an order, chronological, procedural or
conceptual, that order wins and the values fall where they fall.

**A grid, not a table.** Four figures with a short label each is still a strip:
the figure leads and the label says what it counts. A list of rows with the
same shape of value in each, where the rows are the content and the figures
are one column of it, is a table and should use `.prose table`.

**Don't** create a second one in the same case study, and don't build one out
of study ratings — behaviour is better evidence than a row of Likert scores.
There is no `stats` frontmatter field; the markup lives in the content file
like every other editorial pattern.

---

### Ranked table — `.prose table[data-ranked]`

**Use for** a shortlist the project ranked: candidate concepts, evaluated
directions, research priorities, design alternatives. Four to eight rows, each
carrying a position, a name and one figure, where the order is the point and
the size of the gap between the figures is not. Comgrand's Section 02 has one,
carrying the six directions from the co-design session.

**A modifier, not a pattern.** The strip's own rule already sends this shape to
`.prose table`: rows that are the content, with the figures as one column of
it. So this adds hierarchy to the table rather than a new block. Fixed 3rem and
4rem outer columns, both centred in their own width, so the positions and the
figures each stack into a column the eye runs down; the name takes whatever is
left. The position is mono at the micro size in the secondary tone, the name
takes full ink at the body size, and the figure follows in mono a pixel under
it at the regular weight — it is what the ranking was built from, not what the
row is read for.

Prose width, stated as `--measure` at the copy size on the table with the body
size handed back to the cells: `ch` resolves against the element's own font
size, and without that the block runs to the article column while the
paragraphs around it stop at the measure.

**Every row reads the same.** An earlier version lifted one row to full ink to
mark the entry the copy discusses. It read as a state rather than as emphasis,
and the sentence under the table already names the row. The ranking carries its
own emphasis through position.

**Don't** convert the values to percentages, add a chart, or write a figure
into the table that the section does not need — if magnitude is the message
rather than order, this is the wrong block. And don't use it for a table that
happens to be sorted; the position column is a claim that the ranking is the
finding.

---

## Code excerpt

**Use for** real source from the project, inside a disclosure, where the
decision it encodes is part of what the case study is arguing. Barboard has
five, across three disclosures. No other project has any, which is the right
ratio: most design work is not better explained by its source.

**Standard.** A fenced block in the content file, hairlines above and below
like every other block that interrupts the prose, mono a pixel under the
caption size in the supporting tone, and the horizontal scroll contained so a
long line moves the block rather than the page. **No syntax highlighting**,
site-wide: Shiki ships a themed rectangle with its own palette, and it would be
the only coloured surface on a page built out of rules and space. Set in
`astro.config.mjs`.

**Say what it means, not what it does.** A sentence of prose before the block
gives the design consequence; `.code-note` under it carries the one technical
detail worth stating, in the caption register. Never a line-by-line walkthrough.

**Keep the source as it is.** Original comments stay in their own language, the
same way a screenshot keeps its interface: the English goes in the prose around
it. Trim to the lines that carry the point, but do not rewrite real code into
prettier pseudo-code.

**Don't** put code in the reading layer. Every disclosure on the page can be
skipped without losing the argument, and a code block in the open would make
that untrue for the reader who does not read code.

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

## What opens in the lightbox

**Artifacts, not people.** The viewer is for images whose detail is part of the
reading: system maps, service blueprints, wireframes, interface screens,
product and prototype close-ups, dense figures. A reader who cannot enlarge
those is being shown a claim they cannot check.

**Documentary photographs of people carry `data-nozoom`** on the `<img>`. A
photograph of a session, a participant or a family is context and evidence that
the work happened with real people; enlarging a face adds nothing the reader
needs and turns the person into something to inspect. The cursor and the
gallery come off the same selector, so a marked picture never shows a
`zoom-in` cursor that leads nowhere.

Currently marked: Comgrand's two grandmother photographs and the three
co-design frames. Inside the Institution's think-aloud photograph is not
marked, because the participant is shot from behind and the picture is really
of the interface on the screen.

`data-nozoom` on `.cs__media` does the same job for a case-study head.

**A crop in the page, the whole thing in the viewer.** `data-full` on an
`<img>` points the viewer at a different file. It is for an artifact whose real
proportions cannot go inline: Barboard's exported member card is 3552 by 6378,
so the page carries the top of it and the viewer opens all of it. Not for
serving a larger version of the same framing; the published file is already
sized for the viewer.

**Media inside a closed disclosure is out of the gallery** until the reader
opens it. A closed `<details>` still lays its content out, so the viewer tests
`details:not([open])` rather than geometry; without that, stepping through the
gallery lands on a picture that is not on the page behind the viewer.

---

## Width rules

| Content | Width |
| --- | --- |
| prose, formulas, encoding keys, compact charts and diagrams, generated visuals | prose measure (`--measure`) |
| screenshots, video, large data visualisations, comparisons, sequences | article column |

Implemented as a default plus an opt-out in `[...slug].astro`; see the design
system document. Nothing needs a per-project width rule.

---

## Process steps — `.process-steps`

**Use for** the stages of a method, where the order is part of the content and
each stage has a name worth scanning for. Citing Less Critically uses one, for
the study's three stages.

**Standard.** One `<li>` per item holding `.process-steps__name` and
`.process-steps__note`, with `.process-steps__num` above them when the items
are a sequence. `<ol>` when the order is the content and the numbers are drawn;
`<ul>` when the items are parallel and unnumbered, as the design changes in
Citing Less Critically's Section 02 are. Prose width, a single hairline above,
three equal columns from 640px with the stat strip's inset divider between
them, one column on a phone where space separates them. The article's list
marker and indent are turned off.

Both the block rule and its 640px rule are written `.prose .process-steps`:
`.prose ul, .prose ol` sets a margin-top, and a single class loses to it.

The hierarchy is the inverse of the stat strip's: there the number is what is
being read and takes the display size, here it is only a position, so the name
leads in full ink at copy size, the description sits under it, and the number is
the smallest and quietest of the three.

`data-stack` keeps one column at every width, with the rows separated by the
same inset hairline the columns get. For items that read in sequence rather
than in parallel: three reflections side by side ask to be weighed against each
other, while a retrospective is a list the reader goes down. Comgrand's Section
06 uses it.

`data-cols="2"` takes the row down to two columns from 640px, for a block that
divides a responsibility in two rather than stepping through stages: three
columns holding two items leave a third of the row empty and the gap reads as a
missing item. Same attribute name the stat strip uses for the same job.
Comgrand's Section 04 splits app and ring on it.

**Don't** add arrows between the stages, or a fill, card, icon or badge around
them; and don't use it for a feature list or a set of principles, which have no
order to carry. If the block sits above a figure it should stay quieter than the
figure: prose width, not the article column.

---

## Project credits

The end-credit frame every case study closes with. Rendered by
`src/components/ProjectCredits.astro` from a `credits:` block in the project's
frontmatter.

**Why a component and not a markdown pattern.** `.participant-quote`,
`.issue-response`, `.formula` and `.tier-key` are one-off editorial shapes
written into the content file where they are used. Credits is the opposite: the
same structured fields, the same markup and the same three-breakpoint
recomposition at the end of every project. One shared component; not one per
row.

**Core categories** — Skills, Tools, Team. **Optional** — Special Thanks, Note.
`teamLabel` renames the third row per project: a solo project with someone who
advised on it is not a team, and `Team` would claim a collaboration that did not
happen. Comgrand labels it `Roles` and gives each person their own group.
They render in that order and an empty one disappears.

**Two depths.** Skills, tools and team are visible by default; special thanks
and the note sit behind one `Full credits` disclosure. The first three answer
what the project was made of and who made it, which is the question a credits
block exists to answer. Thanks and the note are the acknowledgement layer:
owed, but not what someone arriving at the end of a case study is reading for.

`collapse: false` drops the disclosure and shows every row. The control earns
its place when there is enough behind it to be worth closing: Citing Less
Critically credits three rows in total, and a control that hides one of them is
a step the reader takes for nothing.

**Role** is deliberately absent. The intro already carries it, and credits
should complement that block rather than restate it.

**Skills** — at most five, ordered by what the project actually asked of you.
Never alphabetised, never numbered: vertical order is the only ranking, and it
is not labelled as one. The cap is in the schema, so a sixth fails the build.

**Tools** — at most five, same rules. Combine closely related services rather
than spending two slots on them: `Scholarly APIs (OpenAlex and ORCID)` is one
entry. `*name*` in a credits string sets that name in italics, which is for a
work title; software sets roman here as it does in the prose, so nothing in the
current credits uses it.

**Team** — groups of `{ group, people }`, so a project can carry Design,
Development, Research, Leadership, Advising, or whatever it actually had.
Prefer a functional noun for the group label over a reproduced job title:
*Advising*, not *Principal Investigators*. The label is optional: a project
that does not divide its team into contributions just lists who was on it, and
should not invent roles it cannot verify. The label is quieter than the names
under it. No cards, no avatars, no bios, no automatic links.

**Special thanks** — optional, a compact factual list, no descriptions after
the names and no gratitude prose. The names are the acknowledgement.

**Note** — optional, one short clarification or attribution, set as the most
subordinate line in the block. Not a disclaimer box, not a callout.

**Placement.** After the last narrative section and before the next-project
hand-off, outside `.prose` — which is what keeps it out of the section counter
and out of the table of contents, both of which read the markdown headings. The
numbered narrative still ends at the last `##` in the content file.

**Look.** A 2px rule opening the block, in the same off-strength colour the
section headings' rules use; the title holds the same left column the table of
contents holds above it, with labelled rows to the right and hairlines between
them. The rules separate rows, they do not box the block: nothing closes the
bottom, and the credits end into the space before the next project. The
disclosure is a row like the others — same grid, same rule above it, the
control sitting in the content column and carrying the same crossfading
`+`/`−` sign every collapsed layer in the article uses. No fills, no cards, no
pills, no icons. It should read as an end-credit frame, not as a second
resume.

---

## Prose conventions

For the typographic and semantic formatting conventions in full, follow
`docs/portfolio-formatting.md`. It is the source of truth, and where the two
files disagree it wins. What is here is the short form and the narrative
conventions that have no home there.

- **Inline code** for literal technical tokens: function names with their
  parentheses, variables, CSS properties and values, file paths, commands, data
  field names, and code literals such as `` `null` ``.
- **Interface labels are ordinary text** in their own capitalisation: Direct,
  1-Hop, 2-Hop. A backtick claims the word is code, and a label is not.
- **Italics** for the titles of standalone works: *Sanctuary*, *150 Years of
  Nature*. Software, services, databases, tools and models set roman: Gephi,
  D3.js, OpenAlex, ORCID, Figma.
- **Bold** sparingly, for a figure or a term the eye should catch.
- Short paragraphs. No emoji. Prefer colons to em dashes in captions and short
  labels.
- On a collaborative project, name the actor: first person for your own
  contribution, *our team* for the group's. Avoid *the study* as an active
  subject where a person would be clearer, but it stays fine as a descriptive
  noun phrase, as in *the study's dataset*. Zero occurrences is not the rule.
- Product names keep their own capitalisation; view names (Collaboration Map,
  Bridging Scholars) are proper nouns of the tool and stay plain.

**One-pass comprehension.** A sentence should be understandable on the first
read. The reader should not have to return to its beginning, split it mentally,
hold several clauses open, or translate an abstract phrase into what it actually
means. Length is not the test: a forty-word sentence that reads clearly on the
first pass is fine; a twenty-word sentence that has to be reconstructed is not.

Common failure modes include an abstract noun standing in for a concrete action;
an unclear subject or referent; a second major claim appended with `which` or
`and` to an already complete sentence; and a list whose items are not parallel
in structure.

**Check it during editing, not after.** When a section is substantially
finished, read it once against this standard and report anything that fails
before moving to the next section. Fixing one sentence is cheap; a full-site
pass is not. A project joins the reviewed set once its final section has passed
this check.

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
17. Only then set `published: true`.

---

## Project publication

Projects carry an explicit `published` flag in frontmatter.

`published: true`

- appears in the public project listings
- generates a public case study route at `/work/<slug>`
- is offered by the other surfaces that read the collection

`published: false`, or the field left out

- stays in the repository and is edited in place
- is left out of every public listing
- generates no route, so the old `/work/<slug>` URL is not reachable

The flag defaults to false in the schema, so a project goes public only when
someone writes the line. Every query reads the collection through one gate,
`isPublic()` in `lib/projects.ts`, which is why a card and a route cannot
disagree about whether a project is public.

Set it to true only after reading both the card and the case study. Nothing is
inferred from how long the body is, whether a cover exists, how recently the
file changed, or whether a folder sits in `media-src/` — that folder was the
reference for the first migration and has no part in the build.

`draft: true` is the older, blunter flag and still means a file that should not
build at all. `published` is the narrower case: a file that builds, is worked on
locally, and is not ready to be read yet.
