---
title: Inside the Institution
year: 2026
dates: Jul 2025 – May 2026
blurb: An interactive visualization for exploring how co-authorship connects departments and research centers within a university.
tags: [networks, interactive]
tracks: [design, engineering]
featured: 1
stack: [D3.js, HTML Canvas, Python, Three.js]
links:
  demo: https://williamzqliu.com/neu-network-viz/
  thesis: https://heyzine.com/flip-book/b761227cbf.html
  poster:
    href: /media/inside-the-institution/netsci-2026-poster.pdf
    label: NetSci Poster
  spotlight:
    href: https://www.networkscienceinstitute.org/news/a-netsi-co-op-student-maps-the-hidden-architecture-of-academic-collaboration-at-northeastern-university
    label: NetSI Spotlight
  # Parked site-wide while the code is being tidied (CODE_LINKS_ENABLED).
  code: https://github.com/williamzqliu/neu-network-viz
cover:
  # One 16:9 still for both surfaces — the card and the case study head show
  # the same frame at different sizes, so a second crop would be a second
  # thing to keep true. Built from the PNG export in media-src/, which stays
  # out of public/ so the 6MB original is never served.
  wide: /media/inside-the-institution/cover-wide.webp
  tone: dark
  alt: A highlighted co-authorship network showing collaboration across multiple university research groups.
  caption: "A detail of Northeastern University’s internal co-authorship network, rendered with a standard D3.js force-directed layout."
quickFacts:
  - label: "Role"
    value: "Visualization Designer & Researcher"
  - label: "Outcome"
    value: "Interactive research tool and MFA thesis; poster presented at NetSci 2026"
---

## The gap between analysis and exploration

Meta-scientists use co-authorship networks to study collaboration within
universities. Existing tools like Gephi can reveal network structure, but make it
difficult to explore it across departments, research centers, and individual
scholars.

> **Challenge**
>
> How might an institutional co-authorship network become something researchers can
> actually explore?

## Building the dataset

The dataset I was given had four fields per node: an internal ID, a name, a database
identifier, and a flag for Northeastern affiliation. I tried to build a first
visualization with it, in Gephi and in D3. Both produced images that conveyed
density and nothing else. There was no way to filter by department, no way to tell
which scholars belonged to which research center, no way to compare units. The data
did not contain what any of those interactions would need.

That was not a tooling problem and it was not going to yield to trying harder. The
useful thing the attempt produced was a decision: before any design work could start,
the dataset had to be rebuilt. I spent three months curating it, identifying every
faculty member, mapping each to a primary college and department, and resolving
affiliations with each of the institution's research centers. Scholar and publication
records came from OpenAlex and ORCID, covering 1990 through 2025.

The final dataset covers 2,737 faculty across 11 colleges, 46 departments, and 64
research centers, linked by 3,650 co-authored works. OpenAlex matched 90.3% of the
faculty roster. Of those matches, 76.5% returned high-quality publication records and
18.2% were flagged for manual review.

Knowing what the data could not do came from trying to design with it. It would not
have come from planning.

## Three views, three scales

The tool organizes exploration into three views, each answering a different kind of
question.

The Collaboration Map shows the institution as one network. Faculty are nodes,
co-authorship the edges. Color carries college, size carries h-index, a gold outer ring
marks bridge scholars, edge thickness carries co-authorship weight.

The Research Units View shifts from people to structures. Each department and
research center becomes a hexagonal unit, so collaboration inside and between units
becomes visible. The form came from board-game tiles as modular containers.
Departments are flat-topped, research centers pointy-topped. One shape,
orientation carrying organizational type.

The Bridging Scholars View focuses on the individuals who connect otherwise
separate communities. Each bridging scholar sits in a 3D layout where position
reflects the research areas they span.

Each view uses its own visual grammar: dots for individuals, hexagons for units,
planets for bridging scholars. Forcing one grammar across all three would have
flattened the question each view exists to answer.

The views were not planned up front. They came out of four prototypes across seven
months and weekly conversations with three meta-scientist advisors. Prototype 1
covered 379 scholars across three departments and three centers, enough to test
whether an interactive force-directed view with organizational context supported the
questions meta-scientists wanted to ask. It did, and it also showed that a single view
would not be enough. Prototype 2 scaled the Collaboration Map to 1,416
research-track faculty and required a substantially redesigned encoding system rather
than a refinement of the old one. Prototype 3 took the dataset to full scale at 2,737
and scaffolded the two remaining views. Prototype 4 completed them and entered
evaluation.

Iteration here was a process of reformulating the problem, not refining a solution.
Each round changed what the tool was trying to do.

## Key decisions

**Canvas rather than SVG.** At 2,737 nodes, giving each one a DOM element makes
dragging and hovering untenable. The Collaboration Map renders to Canvas with a
device-pixel-ratio-aware backing store. There is no `append("svg")` anywhere in the
codebase.

**Analysis before encoding.** Bridge scores, Leiden communities, and center-level
metrics had to be computed before the encodings that depend on them could be
designed. Two measures came out of that analysis and then drove the visual system.

The bridge score is the share of a scholar's collaborators who sit in a different
department, multiplied by the log of their total collaborator count. The ratio captures
boundary-spanning. The log keeps productive but disciplinarily narrow collaborators
from dominating the top of the distribution. The gold ring tiers in the Collaboration
Map (top 25%, 10%, 5%, 3%, 1%) come directly from this distribution.

The second measure classifies research centers by internal structure. Superstar
centers organize around a few highly connected individuals. Team-of-Teams centers
are densely networked across many small groups. Greenfield centers are sparse but
disciplinarily broad. Of 64 centers, 4 fit Superstar, 10 Team-of-Teams, and 14
Greenfield. They carry the same institutional label and are structurally different
things.

**The side panel as control surface, not second visualization.** Early versions
embedded a small ego network inside the panel, disconnected from the main canvas.
Replacing it with a Direct / 1-Hop / 2-Hop toggle turned the panel into a controller
for the canvas behind it. The panel also moved from fixed to slide-in. A fixed panel
announces itself as permanent structure; scholar and unit detail is contextual, and the
panel should behave the way the content actually works.

**3D as something to earn.** Three of the four views stay in 2D. The Bridging
Scholars View uses 3D only because vertical separation encodes a structural
distinction the plane could not carry.

**Design in Figma, implementation with AI assistance.** The design work happened
before any code. Concept sketches in a notebook became a Figma design language
spec, then wireframes, then a full UI specification. I used Claude Code in the
implementation stage to translate those specifications into working JavaScript. It was
most useful for work that was conceptually settled but technically intricate: tuning
the Three.js scene, the caching layer for force simulation results, the hexagonal tiling
logic, and the handlers coordinating selection state across the canvas and panel. No
visual encoding, layout choice, interaction pattern, color palette, or view structure
came from an AI suggestion. The analytical logic was mine, and I validated the
outputs of the data pipeline before using them. I document this in the thesis rather
than leaving it implicit, because what the user study evaluated was a tool whose design
decisions are mine, implemented through a mix of my coding and AI-accelerated
coding.

<details>
<summary>Implementation notes</summary>

No build tooling, no framework, no package manager. D3 v7.8.5 and Three.js r128
load from CDN. Modules are IIFEs with a single `datastore.js` state source, fields
annotated with `Used by:` comments.

Layout results are cached in a `Map` keyed on the active filter combination, written
when the force simulation fires `'end'`. After that, two likely next filter states
(`retired` and `former`) are computed in the background on a 200ms delay, so
revisiting a filter combination renders immediately. Node initial positions fall back
through `prev?.x ?? cached?.x ?? random`, which keeps a filter change from
rearranging the whole graph.

While the simulation is unconverged, the canvas sets `pointerEvents = 'none'` to
disable hit testing; on a cache hit it re-enables immediately rather than waiting for
`'end'`. View switches defer the rebuild past layout with nested
`requestAnimationFrame`.

The 3D view uses `QuadraticBezierCurve3` for edge bundling with `BufferGeometry`
and `MeshStandardMaterial`.

Two things I would change. Hit testing is a linear scan over 2,737 nodes and 3,650
edges and should use `d3.quadtree`. And 7.3MB of data loads as nine blocking
`<script>` tags, which should be fetched with `scholar_detail` deferred until a scholar
is selected.

</details>

## What the study showed

I ran a pilot with two participants, then a formal study with twenty meta-scientists.
Sessions ran about twenty minutes in four phases: a background questionnaire, eight
minutes of free exploration with think-aloud, a single open-ended task, and a
structured questionnaire. I observed silently and prompted only after thirty seconds
of silence.

The pilot changed the protocol. Guided tasks consumed too much of the session and
suppressed the exploratory behavior the tool was built for, so I removed them. The
original framing asked participants to adopt a role, which felt awkward and produced
less grounded responses, so I replaced it with direct engagement as themselves.

Participants were expert users. All had prior experience with at least one network
analysis tool: seventeen with Python network libraries, fifteen with Gephi, seven with
D3 or other web visualization. Their feedback reads as expert assessment rather than
novice impression.

The questionnaire combined twenty-five view-specific Likert items with six overall
items and three open-ended questions. I analyzed the session records thematically
alongside it, and where the two streams disagreed I gave the session records
interpretive priority, on the principle that observed behavior is better evidence than
self-reported satisfaction.

Two findings matter most. The first is what the network turned out to look like. Only
52.3% of faculty have any recorded co-authorship tie inside the university, and only
7.1% have a tie with someone in a different college. Remove that small group and the
main connected component fragments into college-specific clusters. The share of
faculty in the main component ranges from 69.2% in Engineering to 3.3% at
Northeastern University London.

The second is that participants surfaced structural patterns the network analysis had
not anticipated: gaps between colleges, bridge scholars connecting otherwise
disconnected communities, disciplinary asymmetries in how research gets published.
One participant found a design inconsistency in the tool that I had not caught.

## Reflection

The participant who found the inconsistency is the reason this project has an
argument rather than just an artifact. Network analysis and interactive visualization
produce different kinds of knowledge. The analysis told me the network was
fragmented. It could not tell me what a meta-scientist would notice first, which
encoding they would trust, or which feature they would never find. Design is what
connects the two.

The limits are real. The work covers one institution, so the structural findings are
about Northeastern and not about research universities generally. Co-authorship is a
narrow proxy for collaboration and misses mentorship, grant work, and everything
unpublished. And a tool that makes individual collaboration patterns legible to
administrators carries obligations I spend a chapter of the thesis on rather than a
sentence here.

If I rebuilt it, I would start with the data model rather than arriving at it. Three
months of curation was the right call and it was also the consequence of designing
before knowing what the design needed.
