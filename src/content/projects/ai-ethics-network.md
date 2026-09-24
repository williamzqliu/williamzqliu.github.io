---
title: AI Ethics Network
year: 2026
dates: Jun 2026 – Jul 2026
blurb: "An interactive tool for exploring how topics and journals connect across AI ethics research."
tags: [networks, interactive]
tracks: [design, engineering]
published: true
featured: 3
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
    value: "Visualization Research Assistant"
  - label: "Outcome"
    value: "Interactive research visualization"
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
    - group: Visualization
      people:
        - Zhuoqi Liu
        - Todd Linkner
    - group: Research
      people:
        - Brian Ball
        - Ioannis Votsis
        - Rafael Morris
  # Three rows, which is not enough to be worth closing.
  collapse: false
---

## Overview

A research team at Northeastern University London was studying how AI ethics
literature is organised across topics, communities and journals. Their analysis of a
JSTOR corpus produced several networks, but the relationships in them were hard to
investigate through tables and static figures alone.

I designed and developed an interactive visualization that lets researchers move
between the overall keyword network, its thematic communities, and the links from
keywords to the journals that publish them. It also works at the scale of single
keywords: the neighbours of one, and the shortest path between two. The tool draws on
the team's data: 534 keywords with 4,474 weighted links between them, and 9,330 links
from those keywords to 1,201 journals.

<!-- Recorded from the live tool in headless Chrome at 1600 by 900, with a
     pointer drawn on the page because headless Chrome paints none. -->
<figure>
  <video
    src="/media/ai-ethics-network/tool-loop.mp4"
    width="1600"
    height="900"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The tool in use: selecting surveillance highlights its neighbours, Path mode traces poetry to missile through philosophy, technology and military, then the view switches to Community, to the Journal rings and to the Journal columns."
  ></video>
  <figcaption>Selecting a keyword, tracing a path, and switching views</figcaption>
</figure>

<div class="media-pair">
  <figure>
    <img
      src="/media/ai-ethics-network/community-view.webp"
      alt="The Community view: the six top-level communities pulled apart around a circle, each a coloured cluster of labelled keywords, with grey links between them."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Community view</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ai-ethics-network/journal-rings.webp"
      alt="The Journal view in rings: an inner ring of purple keywords and an outer ring of orange journals, joined by faint links."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Journal view, in rings</figcaption>
  </figure>
</div>

## From analysis to exploration

The research team had already built the keyword co-occurrence network from the corpus
and weighted each link by how often two keywords appeared together. They had assigned
every keyword to a thematic community with Louvain community detection, computed
centrality scores, and linked each keyword to the journals that published it. Brian
Ball, one of the principal investigators, set out the interactions he wanted, with
Six Degrees of Francis Bacon as the reference.

A static network figure shows all of that in one fixed state. It cannot answer the
questions a researcher brings to it: what sits around a particular keyword, how two
concepts are connected, which community a topic belongs to, which journals carry a
keyword, and how a keyword relates to the field as a whole.

So the problem was not drawing another graph. The analysis already existed, and my
job was to turn it into something researchers could question one keyword or one
connection at a time.

## Seven working hypotheses

Before building the final tool, I built seven working sketches on the real network
data. Each one tested a different idea of what researchers should be able to see or
do.

<div class="media-pair" data-stack style="--pair-split: repeat(4, minmax(0, 1fr))">
  <figure>
    <img src="/media/ai-ethics-network/sketch-atlas.webp" alt="Atlas: the keyword network coloured by community, with faint edges." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Atlas: can community colour alone carry the structure?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-nightfall.webp" alt="Nightfall: a dark network in which only the anchor keywords are lit." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Nightfall: can a view start from a few anchors and grow on click?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-lattice.webp" alt="Lattice: a monotone network in which link thickness carries co-occurrence." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Lattice: what if the links, not the keywords, are what you read?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-strata.webp" alt="Strata: the full network with controls for switching between three data layers." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Strata: can one view move between the three layers of data?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-territory.webp" alt="Territory: soft coloured hulls drawn around each community on the network." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Territory: do drawn boundaries make membership readable?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-orbit.webp" alt="Orbit: the communities pulled apart into separate clusters around a circle." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Orbit: does separating the communities show what links them?</figcaption>
  </figure>
  <figure>
    <img src="/media/ai-ethics-network/sketch-compass.webp" alt="Compass: each community given its own wedge of arcs around a centre." width="1600" height="900" loading="lazy" decoding="async" />
    <figcaption>Compass: does a strict wedge per community help comparison?</figcaption>
  </figure>
</div>

Brian Ball reviewed the sketches in writing and answered each one. He saw ideas worth
combining in Atlas, Strata and Orbit, wanted Lattice kept, and asked for Strata's
keyword-to-journal graph as a separate view. Compass struck him as interestingly
different, but he was not sure it taught him anything the other layouts could not.

The objections were specific too. Nightfall's marks and type were too small, and
zooming in on his screen enlarged the text more than the graphics. Territory repeated
a static view that Rafael Morris had already made from the analysis.

That feedback set the direction I built: one interface with a picker for the Network,
Community and Journal views, with Lattice kept as a monotone colour mode. It was
formative feedback from the research team on working prototypes, and some of it, like
the zoom problem in Nightfall, could only have come from a working page.

## One dataset, different questions

The final tool keeps one dataset and changes the geometry when the question changes.

**Network** places each keyword where a force-directed layout put it, sized by how
often it appears in the corpus and coloured by its community. Strongly linked
keywords sit close together, so this is the view for the overall shape and for what
surrounds a keyword.

**Community** pulls the six top-level communities apart around a circle, and each
keeps its internal arrangement from the Network view. The grouping that colour only
suggests in the Network view becomes explicit. Choosing a community in the sidebar
fades the others without removing them.

**Journal** connects keywords to the venues that publish them. I limited it to the 50
most connected keywords and the 50 most connected journals, and gave it two
arrangements for two comparisons. Rings trace one keyword out to the journals that
publish it, with the links bent outward so they do not cross the centre. Columns set
the two lists side by side, each sorted by connections, so their distributions can be
read against each other.

<figure>
  <img
    src="/media/ai-ethics-network/journal-columns.webp"
    alt="The Journal view in columns: 50 keywords in a purple column on the left and 50 journals in an orange column on the right, each sorted by connections, joined by curved links."
    width="2400"
    height="1350"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The same keyword-to-journal links, in columns</figcaption>
</figure>

## Following a connection

Selecting a keyword highlights its immediate neighbours. I kept the rest of the
network visible at low contrast, so the local structure becomes legible without
losing the network around it. The sidebar lists the keyword's frequency, its number
of links and its strongest links. Neighbors mode, which Brian asked for in his
feedback, keeps two selections and shows both neighbourhoods at once.

I added Path mode for a different question: how two concepts are connected through
the network, beyond whether they happen to sit near each other on screen. A
researcher selects two keywords and the tool draws the shortest chain of links
between them. The sidebar lists each keyword on the path with the weight of each
link. From poetry to missile, the path runs through philosophy, technology and
military.

<div class="media-pair">
  <figure>
    <img
      src="/media/ai-ethics-network/neighbors.webp"
      alt="Neighbors mode with surveillance selected: its neighbours stay in colour with their labels, the rest of the network fades, and the sidebar lists its strongest links."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Surveillance and its neighbours</figcaption>
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
    <figcaption>The shortest path from poetry to missile</figcaption>
  </figure>
</div>

<details>
<summary>How path selection works</summary>

Path mode first finds the fewest links between the two keywords with a breadth-first
search. There are usually several paths of that length, so it then picks the one
whose keywords have the most links in the whole network, added together. The path
therefore runs through well-connected keywords. It is the shortest route by links,
and it says nothing about how close two concepts are in meaning. Path mode works in
the Network view.

</details>

## Designing for research use

The researchers need figures for papers and talks, so the Save control downloads the
current view as an SVG file, with its selection and highlighting, ready to edit
further. That requirement is also why I rendered the tool in SVG: at 534 keywords the
browser handles one element per keyword without strain, and the export is the page
itself.

The dataset is fixed, so I computed the layout once, offline, and wrote the positions
into the data file the tool loads. The tool opens with every keyword already in
place, every visitor sees the same arrangement, and a figure exported next month
matches one exported today.

Some items in the brief stayed out. I did not build search, the centrality filter or the option to show only the most central neighbours, although every keyword carries its centrality scores. Brian also asked to see paper titles when hovering over a link, but that needs a mapping from papers to keywords that the dataset does not include.

<details>
<summary>Implementation notes</summary>

The tool is a single-page Svelte application that renders to SVG and is deployed as a
static site on GitHub Pages, so sharing it with the team in London is a link.

A Node script reads the team's CSV tables, computes node degrees, drops malformed
rows, lays the network out with d3-force, and saves one JSON file with the
coordinates in it. The browser only nudges overlapping nodes apart and runs no force
simulation.

The Community view reuses those coordinates, moving each community to a point on a
circle and scaling its keywords in around it. The Journal view computes its own
positions from the ring or column it is drawing.

Export clones the live SVG, serialises it, and downloads it named after the current
view. This was my first Svelte project, and I used AI assistance on specific
implementation problems as I learned it.

</details>

## What I would test next

The direction of the tool came from Brian Ball's written feedback on the sketches. No
one outside the project team has used it in a study, and there is no usage data. What
I know is how the research team responded to it, not how other researchers will use
it.

The next step would be to watch researchers outside the team use it to answer
questions of their own. I would want to learn whether they understand what separates
the three views, whether neighbour highlighting leads them somewhere useful, and when
a shortest path actually helps. I would also look at whether the journal views
support the comparisons they make, and at what they choose to export for papers and
talks.