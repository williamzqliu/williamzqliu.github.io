---
title: AI Ethics Network
year: 2026
dates: Jun 2026 – Jul 2026
blurb: "An interactive map of AI ethics literature: keyword co-occurrence and the journals that carry it."
tags: [networks, interactive]
tracks: [design, engineering]
featured: 3
stack: [Svelte 5, Vite 6, SVG, d3-force, GitHub Actions]
links:
  demo: https://nu-center-for-design.github.io/Polygraphs_AI_Ethics_Network/
  code: https://github.com/NU-Center-for-Design/Polygraphs_AI_Ethics_Network
cover:
  wide: /media/polygraphs/cover-wide.webp
  square: /media/polygraphs/cover-square.webp
  tone: light
  alt: A force-directed network of 534 AI ethics keywords, coloured by thematic community, with dense clusters around technology and philosophy.
quickFacts:
  - { label: Scale, value: "534 keywords, 4,474 co-occurrences, 1,201 journals" }
  - { label: Role, value: "Research assistant, visualization" }
  - { label: Stack, value: "Svelte 5, Vite, SVG" }
  - { label: Built for, value: "A research team at Northeastern University London" }
stats:
  - { value: "534", label: Keywords }
  - { value: "4,474", label: Co-occurrences }
  - { value: "1,201", label: Journals }
  - { value: "7", label: Design explorations }
---

## What this is

A research team at Northeastern University London is studying the AI ethics
literature as a network. They built a corpus from JSTOR, extracted keyphrases, and
ran Louvain community detection over the keyword co-occurrence graph. The analysis is
theirs. What they did not have was a way to look at it.

Network analysis output arrives as tables and static plots. If you want to know
whether a given keyword sits closer to the privacy cluster or the fairness cluster,
or which journals carry the security and military keywords and which carry none of
them, a table will not tell you and a static image will not let you ask.

I joined as the research assistant on the visualization, working under a
visualization design lead in Boston. The principal investigator wrote a design brief
listing the interactions he wanted: hover labels to keep the default view uncluttered,
default labels on the anchor keywords so people have somewhere to start,
click-to-center modelled on Six Degrees of Francis Bacon, one and two hop
neighbourhood highlighting, search, edge weight carried by line thickness, and
support for three graph layers. My job was to work out how those should behave, and
build them.

The whole engagement was five weeks and roughly fifty-four hours of paid work.

## Seven ways to draw it

Rather than discuss approaches and then build one, I built seven. Each sketch
commits to a different idea about what the network is for. They are all still live at
the `/sketches/` path.

**Atlas** lets community colour carve the network and pushes edges into the
background. **Nightfall** goes dark and hub-radial, lighting only anchor nodes and
expanding on click. **Lattice** treats edges as the subject rather than the nodes,
weighted by co-occurrence. **Strata** shows the three data layers and how they
connect. **Territory** uses an organic layout with soft hulls around each community.
**Orbit** pulls communities around a circle for clean partitions. **Compass** gives
each community its own wedge.

Building them as working pages rather than mockups meant the review happened against
the real data, and it produced specific answers rather than general preferences.

Nightfall failed for a reason I had not anticipated. It was too small to read, and
zooming in on the reviewer's machine enlarged the text annotations rather than the
graphics. A visual idea that only works at one zoom level is not a visual idea that
survives contact with someone else's screen.

Territory was cut because the team already had a static version of that view from
their own analysis. There was no point spending the remaining hours rebuilding
something that existed.

Compass was the cleanest partition of the seven, and the reviewer could not say what
it let him learn that the other layouts did not. That is the right question to ask of
a layout, and clean is not the same as informative.

Atlas, Strata, and Orbit all survived, and the decision was to combine them behind a
layout picker rather than pick one. Lattice was kept as a monotone variant. That
synthesis came out of the review, not from me.

## Four layouts

The Network view is the force-directed layout: node size for keyword frequency,
colour for thematic community. This is where the overall shape is legible, and it
keeps the spatial relationships the layout algorithm found, so overlapping
communities look overlapping.

The Community view groups the same keywords into their clusters. The structure is two
levels deep, six top-level themes over twenty-one sub-themes, so this is where the
hierarchy becomes readable instead of implied by colour.

The Journal layer has two layouts rather than one, because the reviewer wanted it
promoted to its own thing and because it has to answer two different questions.
Concentric rings work when you want to follow one keyword out to the journals that
carry it. Two columns work when you want to compare the distribution on both sides at
once. Same data, different question, different geometry.

## Key decisions

**SVG rather than Canvas.** At 534 nodes the DOM holds up fine, and SVG buys two
things Canvas does not: the nodes are real elements, and the current view can be
serialized straight out as a vector file. The researchers need figures for papers, so
export was a requirement rather than a nice extra.

This is the opposite of the call I made on a 2,737-node network the same year, where
per-node DOM elements would have made dragging and hovering untenable. The reasoning
is the same in both cases. The scale is what differs.

**The layout is computed offline.** A Node script reads the source CSV tables,
computes node degrees, filters malformed rows, runs a d3-force layout, and writes a
single JSON file with coordinates baked in. The app loads it and renders immediately.
There is no force simulation in the client at all.

This graph does not change. Running the simulation in the browser would mean every
visitor waits for the same layout to reach the same positions, and watching nodes
settle is only interesting once. Precomputing also makes the layout reproducible,
which matters when a figure in a paper needs to match what the tool shows.

**Shortest path with a degree tie-break.** The reviewer asked whether two keywords
could be selected and the connection between them traced. Breadth-first search gives
the fewest hops, but there are usually many paths of the same length and they are not
equally informative. So a second pass runs dynamic programming over the
shortest-path DAG and picks the route with the highest total degree, then backtracks.
The path you get goes through well-connected keywords rather than through obscure
ones that happen to sit at the right distance.

**Edge routing per layout.** In the ring layout, straight chords cut across the
centre and turn the middle into noise, so edges bend outward. In the column layout a
horizontal S-curve reads as a connection between two lists. Same edges, drawn
differently, because what makes a line readable depends on what it sits inside.

<details>
<summary>Implementation notes</summary>

Svelte 5 with runes throughout: 15 `$state`, 28 `$derived`, 4 `$effect`. Almost all
layout work lives in `$derived` values that recompute from the current layout mode and
selection, which leaves very little imperative update code. The main component is
about 1,270 lines with a 540-line sidebar.

Three dependencies: svelte, vite, and the Svelte Vite plugin. No visualization
library at runtime. d3-force is used only in the offline layout script.

SVG export clones the live SVG node, serializes it with `XMLSerializer`, and returns
it as a Blob download named after the current layout.

Deployment is a GitHub Actions workflow on push to main: Node 20, `npm ci`, build,
then `upload-pages-artifact` and `deploy-pages`, with a concurrency group set to
cancel in-progress runs so overlapping pushes do not race.

Two things worth fixing in the repository. The offline layout script is not
committed, which means the most technically substantial part of the work is invisible
to anyone reading the code. And there is no `.gitignore`, so `node_modules` and the
build output are both tracked. It is a shared repository, so the move is to raise both
before changing them.

</details>

## What did not get built

The brief asked for filtering by centrality score and for an option to show only the
top few most central neighbours on click. The data supports both. Every node carries
degree, betweenness, and eigenvector centrality, and every edge carries Jaccard and
PMI similarity alongside raw weight. None of it is used in the shipped tool.

One request was declined outright. The reviewer asked whether hovering an edge could
surface a few paper titles containing both keywords. The dataset does not include the
paper-to-keyword mapping needed to do that, so the answer was no rather than a partial
implementation that looked like it worked.

Fifty-four hours buys seven explorations and a working tool. It does not buy
everything on the list, and being clear about which items were dropped is more useful
than presenting the result as complete.

## Attribution and what has been tested

The corpus, the community detection, and the dataset preparation are the team's work.
The feature requirements came from the principal investigator's design brief, and the
reference point for the interaction model was his suggestion. What I contributed is
the seven explorations, the decisions about how each interaction should behave, the
implementation, the offline layout pipeline, and the deployment.

I had not worked in Svelte before this project and used AI assistance for specific
implementation problems while learning the framework.

The seven sketches went through written review with the principal investigator, who
responded to each one individually, and the direction the final tool takes came out of
that review. That is formative feedback from someone who will actually use the thing,
which is the kind that changes what gets built.

What has not happened is any study with readers outside the team. There is no
usability testing and no usage data. I know the tool does what the brief asked for. I
do not know whether a philosopher working in this literature reaches for the
shortest-path tracing or ignores it, and that is the next thing this project needs.
