# Portfolio formatting

The editorial-formatting rules for project content. Where
`portfolio-design-system.md` covers how the site is built and
`case-study-editorial-system.md` covers which pattern a piece of content
belongs in, this file covers the smaller decisions inside a sentence: what gets
italics, what gets a backtick, what a caption ends with, how a role is written.

It is the source of truth for formatting audits. Read it before reviewing a new
or substantially revised project.

Approved and applied 10 September 2026, after a full-site audit of sixteen
projects.

---

## Italics

Italics are for the titles of standalone works: books, reports, exhibitions,
published visualizations, games. Inside the Institution italicises *Sanctuary*
and *150 Years of Nature*; DUI's Invisible Bill italicises *INCOME/OUTCOME*,
the published infographic it critiques.

**Software is not a work.** No italics for software, services, databases,
programming tools or AI models. Gephi, D3.js, OpenAlex, ORCID, Dimensions,
GPT-5.1, Claude-3.5-Haiku, Figma, TouchDesigner, Kinect, Svelte, Vite, OBS,
ffmpeg, Python, EmailJS, GitHub Actions, Bilibili, WeChat all set roman. They
are proper nouns, and the site has thirteen projects that were already treating
them that way.

**Academic paper and article titles are not covered by a blanket rule.** Their
treatment depends on the citation context around them, and the site has too few
citations to have settled one. Comgrand's source note under the participation
figures is the only instance: it italicises the article title. Left as it is,
deliberately. If a second citation appears, decide the pattern then and record
it here.

---

## Inline code

Backticks mark a literal technical token, something a reader could type or find
in a file:

- callable function names, with parentheses: `getBoundingClientRect()`
- variables and runes: `$state`
- CSS properties and values: `text-size-adjust: 100%`
- file paths and directories: `.gitignore`, `/sketches/`
- commands: `npm ci`
- data field names: `internal ID`, `database ID`
- code literals: `null`, `0`, `true`

Not for interface labels, product names, software names, or emphasis. A word in
backticks is a claim that the word is code; using it for emphasis makes every
real literal on the page a little less legible.

Class names used as types rather than called, such as `IntersectionObserver`,
keep the backticks and take no parentheses.

---

## UI labels

An interface label is ordinary text in its own capitalization: Direct, 1-Hop,
2-Hop. The same label must read the same way in body copy and in a caption.

---

## Links

No raw URLs in prose. A link is a phrase.

An internal project reference can be either the project title, as Citing Less
Critically links [*Inside the Institution*](/work/inside-the-institution), or a
descriptive phrase, as Barboard links
[live broadcast and control system](/work/barvision). Both are allowed. Pick
whichever the sentence wants.

Link something only where navigating, verifying or exploring it genuinely helps
the reader. Named organizations and tools are not linked by default.

**Frontmatter links use the schema's own kinds** — `demo`, `thesis`, `paper`,
`poster`, `spotlight`, `code`. Zod strips an unknown key in silence, so a
misspelled or invented kind produces no error and no link. Barvision lost its
replay link that way for months. Where the default label is wrong for the
instance, use the named form rather than a new kind:

```yaml
links:
  demo:
    href: https://…
    label: Replay
```

---

## Quotes and apostrophes

SmartyPants is on. In markdown prose, write ordinary `'` and `"` and let it
render the typography. Numeric entities there are redundant and make the source
harder to read.

**Frontmatter and raw HTML do not go through SmartyPants.** Write the literal
characters, `’ “ ”`, not entities and not straight quotes. A straight
apostrophe in a frontmatter title reaches the page as a straight apostrophe;
that is how `DUI's Invisible Bill` and `What's Going on in There?` shipped with
the wrong glyph in their own headings.

Entities that are semantically necessary stay: `&#954;` for κ, `&#10216;` and
`&#10217;` for the angle brackets around a measure, `&#8209;` for a
non-breaking hyphen.

---

## Headings

Sentence case. `##` only; the case study supplies its own `h1` and the credits
block its own `h2`.

---

## Captions

Sentence case. A caption that is a complete sentence ends with a period, and
almost all of them are.

Use `and`, not `+`, as a conjunction. Prefer a colon to an em dash:
`University level: clusters, gaps, and cross-unit ties.`

---

## Credits

Sentence case for skills, tools and group labels: `Data visualization`,
`Front-end development`, `Research, analysis and design`.

Use `and` rather than `&` in a descriptive group label. Official proper names
keep their own form.

Tools name what the work was made with. Capabilities belong in skills.

---

## Role

Title Case, and it names a responsibility: `Information Designer`,
`Art Director & Technical Director`, `Designer & Researcher`.

**Role is not team size.** `Solo` does not appear in it. Five projects carried
`Solo Designer` or `Solo Information Designer`, which described the staffing
rather than the job. Where independent authorship is worth stating, it belongs
in credits or in the narrative, where it can be said properly.

---

## Outcome

A concise noun phrase, one statement, no terminal period, and no leading
article unless dropping it produces awkward English. `Completed unit chart of
more than 2,000 symbols`, not `A completed unit chart…`; `Interactive research
tool and MFA thesis, with a poster at NetSci 2026`, not two sentences.

---

## Stack

Tools, technologies, languages and concrete technical media. Not design or
research capabilities: `Service design`, `Brand identity`, `Physical
prototyping` and `Projection` all came out, and the work they describe is
already carried by the Outcome field or by the case study itself.

Author it as a YAML block list.

---

## Numbers and units

Body prose reads: `1,100 pixels`. Technical annotations and code are compact:
`1440px`. That layering is deliberate, and the two registers do not have to
agree.

Tables carry exact figures and prose can round them: TOD Boston's cost table
says `$481,610,977` and its Outcome says `$482M`. Where the long form is the
point, keep it — DUI's Invisible Bill writes `$296,000,000,000` in the body
because the division has to be visible.

---

## Code blocks

Every fenced block declares its language. Code lives inside a disclosure, so a
reader who does not read code can skip all of them and still have the argument.

A sentence of prose before the block gives the design consequence. A
`.code-note` under it is optional: use it when there is a technical detail the
surrounding text does not already carry, and not otherwise. Barboard has five
blocks and four notes.

Keep excerpts to the lines that make the point, keep the original comments in
their own language, and never annotate line by line.

---

## Audit workflow

1. Read this file before reviewing a new or substantially revised project.
2. `git diff --name-only` against the last audited commit to find the changed
   project content.
3. Audit only what changed, against the rules above.
4. Report the findings for approval before touching anything. Group them as
   high-confidence fixes, consistency fixes, and editorial choices, and
   describe a repeated pattern once with its locations listed under it.
5. Do not re-run a full-site audit unless one of these changed: this file, the
   shared rendering or components, the markdown or SmartyPants configuration,
   or the introduction of a new content pattern.
6. The mechanical checks can be scripted eventually — straight apostrophes in
   frontmatter, captions missing a period, headings out of sentence case, raw
   URLs in prose, unknown `links` keys, fenced blocks with no language. The
   editorial judgments stay reviewable.

**When a rule is genuinely ambiguous, do not invent one.** Say so, flag the
instance, and leave it until there is a second case to decide against.
