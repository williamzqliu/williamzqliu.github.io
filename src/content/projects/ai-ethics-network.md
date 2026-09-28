---
title: AI Ethics Network
year: 2026
dates: Jun 2026 – Jul 2026
blurb: "An interactive tool for exploring keywords, communities, and publication sources in AI ethics literature."
tags: [networks, interactive]
tracks: [design, engineering]
category: data-research
published: true
stack:
  - Svelte
  - D3
  - SVG
links:
  demo: https://nu-center-for-design.github.io/Polygraphs_AI_Ethics_Network/
  # NOT for CODE_LINKS_ENABLED. The repository belongs to the centre and is
  # private, so this URL 404s for anyone signed out. It stays as the record of
  # where the work lives; the demo above is the public artifact.
  code: https://github.com/NU-Center-for-Design/Polygraphs_AI_Ethics_Network
cover:
  # The card shows the network alone; the case study head keeps the whole
  # screen, controls and all, so it reads as a tool.
  wide: /media/ai-ethics-network/cover-wide.webp
  heroWide: /media/ai-ethics-network/hero-wide.webp
  tone: light
  alt: The keyword network of the tool, 534 AI ethics keywords coloured by six thematic communities.
quickFacts:
  - label: "Role"
    value: "Visualization design, interaction specification & implementation"
  - label: "Outcome"
    value: "Deployed research tool featured in the team’s manuscript draft"
credits:
  skills:
    - Network visualization
    - Interaction design
    - Visual prototyping
    - Design engineering
    - Research tool design
  tools:
    - Svelte
    - D3
    - SVG
  team:
    - group: Visualization design & interaction specification
      people:
        - Zhuoqi Liu
    - group: Project coordination
      people:
        - Todd Linkner
    - group: Research leads
      people:
        - Brian Ball
        - Ioannis Votsis
    - group: Data preparation & network analysis
      people:
        - Rafael Morris
  note: Claude Code generated most of the application code. I defined the interactions, contributed code, and debugged and checked the implementation through reviews with Todd Linkner and the London team.
  # Few enough rows, the note included, to show them all.
  collapse: false
---

## Exploring the research network

A research team at Northeastern University London had already analysed a JSTOR corpus
of AI ethics literature as a set of networks. My task was to define and build the
browser tool that lets them explore it: the neighbourhood of a keyword, the thematic
communities keywords fall into, and the publication sources that carry each keyword.

The keyword network has 534 keywords joined by 4,474 links. A second network connects
those keywords to 1,201 publication sources through 9,330 links. The tool is deployed,
and the team’s manuscript draft includes a section that introduces it.

<!-- Recorded from the live tool in headless Chrome at 1920 by 1080, each
     repainted frame kept lossless and held for as long as it was on screen,
     with a pointer drawn on the page because headless Chrome paints none. The
     Barvision final duel's player, but starting itself, muted, when it comes
     into view; the reader can pause and seek with the browser's controls.
     Master in media-src. -->
<figure>
  <video
    src="/media/ai-ethics-network/tool-walkthrough.mp4"
    poster="/media/ai-ethics-network/tool-walkthrough-poster.webp"
    width="1920"
    height="1080"
    muted
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The tool in use: selecting surveillance highlights its neighbours, Path mode traces poetry to missile, the view switches to Community, then to the Journal rings, where selecting privacy highlights its publication sources, and finally to the Journal columns."
  ></video>
  <figcaption>Selecting a keyword, tracing a path, and switching views.</figcaption>
</figure>

The research needs came from the London team. Todd Linkner and I worked out what was
feasible within the project and he coordinated between the two groups. I defined the
features and interactions, debugged them, wrote part of the code, and reviewed the
results with Todd and the London team. Claude Code generated most of the application
code.

<details>
<summary>Data scope</summary>

The data is the research team’s own JSTOR corpus and network analysis, downloaded in
October 2024. It does not represent all AI ethics literature, or the most recent.

The tool loads the team’s keyword and publication-source networks with one measure per
node, degree, alongside keyword frequency and link weights. The team’s upstream analysis
also produced other centrality scores; the tool does not load them.

For 385 publication sources, the degree stored in the data differs from the number of
links in the current edge table. The value was not recomputed from that table and where
it comes from is still to be confirmed, so the page calls it the degree the data
provides.

</details>

## Choosing the views

Before building the tool, I made seven working sketches on the real network data, each
testing a different idea of what researchers should see first. Brian Ball, one of the
principal investigators, replied in writing on 27 June. He suggested combining Atlas,
Strata and Orbit, asked to keep Lattice, and wanted the keyword-to-source network
available on its own.

<div class="media-pair" data-stack style="--pair-split: repeat(2, minmax(0, 1fr))">
  <figure>
    <img src="/media/ai-ethics-network/sketch-atlas.webp" alt="Atlas: the keyword network coloured by community, with faint edges." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Atlas: one network coloured by community.</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-orbit.webp" alt="Orbit: the communities pulled apart into separate clusters around a circle." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Orbit: communities pulled apart.</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-strata.webp" alt="Strata: the full network with controls for switching between three data layers." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Strata: switching between data layers.</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-lattice.webp" alt="Lattice: a monotone network in which link thickness carries co-occurrence." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Lattice: a single-colour network.</figcaption>
  </figure>
</div>

That feedback led to three decisions. Atlas and Orbit use the same keyword network, so I
kept them as two views of it. **Network** keeps the force-directed arrangement for
browsing the whole set of relationships, and **Community** separates the six top-level
communities around a circle while each keeps its internal arrangement. Choosing a
community in the sidebar fades the others without removing them.

<figure>
  <img
    src="/media/ai-ethics-network/community-view.webp"
    alt="The Community view: the six top-level communities pulled apart around a circle, each a coloured cluster of labelled keywords, with grey links between them."
    width="2400"
    height="1350"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The Community view separates the six top-level communities.</figcaption>
</figure>

The keyword-to-source network describes a different relationship, so it became its own
view, the **Journal** view, with two layouts. Rings place keywords on an inner ring and
publication sources on an outer one, so a selected keyword can be followed out to its
sources. Columns set the two lists side by side, each ordered by degree.

The Journal view shows the 50 keywords and the 50 publication sources with the highest
degree the data provides. I chose 50 by trying the layouts: at that size the view stayed
legible and responsive in use. There is no measured threshold behind the number. It
leaves out the less connected nodes, so it is not the complete publication-source
network.

<div class="media-pair" data-stack>
  <figure>
    <img
      src="/media/ai-ethics-network/journal-rings.webp"
      alt="The Journal view in rings: an inner ring of purple keywords and an outer ring of orange publication sources, joined by faint curved links."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Rings: keywords inside, publication sources outside.</figcaption>
  </figure>
  <figure>
    <img
      src="/media/ai-ethics-network/journal-columns.webp"
      alt="The Journal view in columns: 50 keywords in a purple column on the left and 50 publication sources in an orange column on the right, each ordered by degree, joined by curved links."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Columns: the two lists side by side.</figcaption>
  </figure>
</div>

Lattice’s single-colour scheme became a colour mode within the tool, so it did not need
a view of its own.

<details>
<summary>All seven sketches and the rest of the feedback</summary>

Brian also commented on the three sketches that did not carry forward. Nightfall’s
marks and type were too small, and zooming in on his screen enlarged the text more than
the graphics. Territory repeated a static view that Rafael Morris had already made from
the analysis. Compass struck him as interestingly different, though he was not sure it
showed anything the other layouts could not.

<div class="media-pair" data-stack style="--pair-split: repeat(3, minmax(0, 1fr))">
  <figure>
    <img src="/media/ai-ethics-network/sketch-nightfall.webp" alt="Nightfall: a dark network in which only the anchor keywords are lit." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Nightfall: a few anchors lit on a dark network.</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-territory.webp" alt="Territory: soft coloured hulls drawn around each community on the network." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Territory: hulls drawn around communities.</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-compass.webp" alt="Compass: each community given its own wedge of arcs around a centre." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Compass: a wedge per community.</figcaption>
  </figure>
</div>

</details>

## Following keywords and connections

Three interaction modes answer different questions about a keyword. In **Explore**,
selecting a keyword highlights it and its direct neighbours and fades the rest of the
network, and the sidebar lists its strongest links. **Neighbors** takes two keywords
and shows both neighbourhoods together, the union of the two. **Path** takes two
keywords and draws the shortest chain of links between them.

<div class="media-pair" data-stack>
  <figure>
    <img
      src="/media/ai-ethics-network/neighbors.webp"
      alt="Surveillance selected: its neighbours stay in colour with their labels, the rest of the network fades, and the sidebar lists its strongest links."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Surveillance and its neighbours.</figcaption>
  </figure>
  <figure>
    <img
      src="/media/ai-ethics-network/shortest-path.webp"
      alt="Path mode: a line from poetry through philosophy, technology and military to missile, drawn over the faded network, with the path listed in the sidebar."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>A path from poetry to missile.</figcaption>
  </figure>
</div>

The examples are demonstrations of the tool, not research findings. Path finds the
fewest links between the two keywords, and among paths of that length it picks the one
whose keywords have the highest total degree. I chose degree because it is a familiar
network measure, and I wanted the path to pass through well-connected keywords a reader
is more likely to recognise; a high degree does not guarantee that. A path is the
fewest steps through the network. It does not measure semantic distance, the strongest
association, or scholarly influence. Path works in the Network and Community views and
not in the Journal view.

<details>
<summary>How the path and its numbers are computed</summary>

A breadth-first search finds the shortest distance from the first keyword to every
other. Among the links that lie on a shortest route, the tool then keeps, for each
keyword, the route with the highest running sum of degree, and traces back from the
second keyword. Link weight plays no part in choosing the path.

The sidebar shows each link’s weight, the number of papers the two keywords share. It
also sums those weights along the path. That total is not a count of distinct papers,
because the same paper can be counted on more than one link.

In the Network and Community views, node size follows keyword frequency, which also
orders the sidebar lists by default. Degree sets which labels are shown first and breaks
ties between paths of the same length. Link widths in some selected states come from
the average degree of the two ends, and the resting network draws every link at one
width, so a thicker line does not mean more shared papers. In the Journal view, the
degree the data provides sets which nodes are drawn, their size and their order, and
link weight orders the sidebar and labels the highlighted links. Distance on screen is
not an exact measure of how strongly two keywords are related.

</details>

## Stable layouts and editable figures

I computed the layout once, ahead of time, and wrote the coordinates into the data file
the tool loads. The tool opens with every keyword already in place, so a researcher does
not wait for a layout to settle, and the nodes stay where they are while being read.

The researchers need figures for papers and talks, so the Save control downloads the
current canvas as an SVG file. It keeps the selection, the highlighting and fading, and
the label styling, so the figure can be edited further. I tested the export on the
deployed tool. The file contains the canvas alone, without the sidebar or the rest of
the page.

<details>
<summary>Implementation notes</summary>

The tool is a single-page Svelte application that renders to SVG and is deployed as a
static site. Svelte holds the interface state: the view, the mode and the selection. A
Node script lays the network out with d3-force and saves the coordinates; in the
browser, the tool only nudges overlapping nodes apart, because node size is applied
after the layout is computed. The Community view reuses those coordinates, moving each
community to a point on a circle, and the Journal view computes its own positions from
the ring or column it is drawing.

Labels are placed in order of degree, and a label that would collide with one already
placed is dropped. Export clones the live SVG, adds the label styles, serialises it and
downloads it named after the current view.

</details>

## Research use and remaining limits

The tool is deployed, and the team’s manuscript draft introduces it in its own section
with examples of exploring the network. The manuscript is not yet published, and I do
not know whether figures exported from the tool will be used in it.

No one outside the project team has used the tool in a study, so there is no evidence
yet on whether it makes the research faster or leads to new findings. Two things in Brian’s
original brief are not built: search, and following a link back to the papers behind
it, which needs a mapping from papers to keywords that the dataset does not include.
Watching researchers outside the team answer questions of their own with the tool would
be the next step.
