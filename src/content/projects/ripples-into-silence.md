---
title: Ripples into Silence
year: 2025
dates: Jan 2025 – Apr 2025
blurb: A scrollytelling piece on the migrant deaths that happen within sight of Lampedusa.
tags: [narrative, interactive]
tracks: [design, engineering]
featured: 5
stack: [D3.js, SVG, JavaScript, Python]
links:
  demo: https://nu-info-design.github.io/mapping-movement/ripples-into-silence/index.html
cover:
  wide: /media/ripples-into-silence/cover-wide.webp
  tone: dark
  alt: The silhouette of Lampedusa in mourning yellow against deep navy, with a dashed 50 kilometre radius drawn around it.
quickFacts:
  - label: "Role"
    value: "Information Designer & Developer"
  - label: "Outcome"
    value: "Interactive scrollytelling piece built from IOM Missing Migrants data"
---

## The version that did not work

The first version was called Northbound: A Deadly Voyage. It was a static Figma comp
of a full-screen web layout, covering migrant deaths and disappearances across the
entire Mediterranean in 2024.

Structurally it is an arc diagram in three tiers. Twenty countries of origin along the
bottom, six transit countries in the middle, five European destinations at the top.
Grey flows carry people from origin to transit. Coloured arcs carry them from transit
toward Europe, with colour encoding cause of death across six categories and a number
labelled at each arc's end. Libya to Italy, 682 drownings. Tunisia to Italy, 601.
Türkiye to Greece, 116.

It presents the data. That is all it does.

There is no story in it and nothing to feel. A reader arrives at a screen holding
every route in the sea at once, reads some numbers off some arcs, and leaves with an
impression of general magnitude. There is no entry point, no single thing to hold onto,
and no reason for the reader to be there rather than looking at a table of the same
figures. Every design decision in it is about accommodating the dataset, and none is
about the person reading.

I stopped and started over rather than refining it. What came next keeps the same
source data and throws away almost all of it.

## The problem with a global dataset

The International Organization for Migration publishes a record of migrant deaths and
disappearances worldwide. It is a remarkable dataset and it is almost unusable for
telling anyone anything.

The problem is scale. Tens of thousands of records across every continent produces a
number so large that it stops registering as people. Psychologists call this psychic
numbing: our capacity to care does not scale with the size of the tragedy, and past a
certain point larger numbers produce less response, not more.

A dashboard of the whole dataset would be accurate and would fail.

## Choosing 50 kilometres

Lampedusa is the southernmost territory of Italy, a small island closer to Tunisia
than to Europe. It sits 130 kilometres from the North African coast and 388 kilometres
from mainland Italy, which makes it the nearest piece of Europe for anyone crossing
the central Mediterranean. Boats leave from Tunisia or Libya aiming for it.

I filtered the global dataset down to incidents that occurred within 50 kilometres of
the island: 94 incidents between 2014 and 2024, accounting for 703 people dead or
missing. The filtering ran in Python, computing a great-circle distance from each
incident's coordinates to the island and keeping what fell inside the radius. The
distance became a column in the data, not just a filter, because it turned out to be
the thing the piece is about.

Fifty kilometres is the distance at which you can see the island on a clear day. The
people in these records got close enough to see Europe. That is the fact the whole
project is built to deliver, and it only exists once you narrow the frame far enough
for one place to become legible.

Choosing the anchor was harder than building anything.

## Four movements

The piece is structured like a requiem rather than a report.

**Intro** opens on deep navy and near silence. Ripples appear slowly, each one an
incident. Fragments of text surface between them.

**Outlines** is the centre of the piece. Every incident animates as a path travelling
toward the island and terminating in a ripple, with statistics accumulating alongside.
Between passes, the piece stops to explain: why Lampedusa, what the Tunisian Corridor
is, what 50 kilometres means.

**Trends** presents eleven years at once. The incident count and the death count both
rise, and 2023 and 2024 dominate the frame. This is the section that turns individual
tragedies into a pattern.

**Ending** returns to human scale. If a single plane crash killed 200 people we would
mourn and we would change laws. When 206 people die across 19 boats in one year, while
45,997 others step safely onto the island, we tell ourselves the number is not so
high, because most of them made it.

## Encoding and rhythm

Two things carry meaning in the animation, and both are data rather than decoration.

Ripple radius maps the number of dead in that incident. Radial position maps the
actual distance to Lampedusa, so an incident that happened 12 kilometres out lands
visibly closer to the island than one at 48. Paths are distributed across twenty
angular buckets so that a dense year does not collapse into a single overlapping
smear.

The pacing is the part I spent longest on. All of it lives in one configuration file
as tunable constants. The first three incidents are released six seconds apart, with a
three second delay before the first one. After that the interval drops to a minimum of
400 milliseconds with at most five paths in flight at once.

That curve is the argument. Opening slowly gives a viewer time to understand that one
ripple is one incident and to watch a single path complete. Once that reading is
established, the acceleration does the work: the density itself becomes the finding,
and by 2023 the screen is busy in a way no chart of the same numbers would convey.

Restraint holds the rest together. Mourning yellow against deep navy, short lines of
text, no embellishment. The dataset has enough weight without help.

## Key decisions

**SVG rather than Canvas.** At 94 incidents the DOM is nowhere near strain, and SVG
gives direct access to D3 transitions and keeps the elements real. This is the
opposite call from a 2,737-node network I built the same year, where per-node DOM
elements would have made interaction impossible. Same reasoning, different scale.

**Modular scenes, centralised parameters.** The animation lives in fifteen modules
that each do one thing: the ripple background, path rendering, the cross marker, the
radius line, the island reveal, the year progress bar, the running statistics, the
trends chart. Every tunable number sits in one configuration file rather than scattered
across the modules that use it. That is what made the pacing work possible at all,
because getting the rhythm right meant changing four constants and reloading, over and
over.

**Two scroll mechanisms rather than one.** Continuous progress, like the ripple
background responding to scroll depth, reads position with `getBoundingClientRect` on
every scroll event. Discrete scene entry uses `IntersectionObserver`. Using the
observer for continuous animation gives you steps instead of motion; using scroll
position for one-shot triggers means writing your own debounce and getting it wrong.

<details>
<summary>Engineering notes</summary>

About 3,000 lines: 900 of CSS, 340 of markup, and roughly 1,600 of JavaScript across
seventeen ES modules. D3 for scales, selections and transitions. No build tooling, no
framework, no bundler. Fonts self-hosted.

One real bug, since diagnosed. Path animation advanced by a fixed increment on every
`requestAnimationFrame` tick rather than by elapsed time, which means the animation
runs at whatever speed the display refreshes. On a 60Hz screen it plays as designed; on
a 120Hz screen it plays at double speed. The page originally disclosed this as a
platform inconsistency, which was the wrong diagnosis: it has nothing to do with the
operating system and everything to do with refresh rate. The fix is to accumulate
elapsed milliseconds and advance proportionally.

This is diagnosed but not yet fixed. The page's original advice to use a Mac is
actively wrong, since current Macs mostly run at 120Hz, so the misdiagnosis is the
part worth correcting first.

</details>

## What I took from it

The hardest part was not the code or the visual system. It was deciding what not to
show. A dataset of this kind arrives with an implicit demand to represent all of it,
and honouring that demand produced Northbound, which presents everything and says
nothing.

Filtering to one island and one radius meant discarding almost everything, and the
final piece works because of what was discarded. Laying out the first version is what
made the absence obvious: with the whole sea on screen there was visibly nowhere for
a reader to stand. That is easier to see in a comp than to reason about in advance,
which is a reason to draw the version you suspect is wrong.

The animation timing is still unfixed. I know what causes it and roughly what the fix
costs, and it has stayed on the list while other work took priority. Worth being
straight about: the original page shipped a warning label pointing at the wrong
culprit, which is worse than shipping the bug, because it tells a reader something
untrue about their own machine.
