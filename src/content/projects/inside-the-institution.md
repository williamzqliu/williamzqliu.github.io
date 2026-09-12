---
title: Inside the Institution
year: 2026
dates: Jul 2025 – May 2026
blurb: An interactive research tool for exploring how co-authorship connects scholars, departments, and research centers within a university.
tags: [networks, interactive]
tracks: [design, engineering]
published: true
featured: 1
stack:
  - D3.js
  - HTML Canvas
  - Python
  - Three.js
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
    value: "Interactive research tool and MFA thesis, with a poster at NetSci 2026"
# Order is the editorial decision here — read down, not sorted. Five is the cap
# on skills and tools, enforced by the schema.
credits:
  skills:
    - Data visualization
    - Network analysis
    - Information design
    - UX research
    - Front-end development
  tools:
    - D3.js
    - Python
    - Three.js
    - HTML Canvas
    # `*name*` sets a named service in italics, as the prose does. Two APIs in
    # one entry rather than two of the five slots.
    - Scholarly APIs (OpenAlex and ORCID)
  team:
    - group: Research, analysis and design
      people:
        - Zhuoqi Liu
    - group: Advising
      people:
        - Dakota Murray
        - Nabeel Gillani
        - Alina Lungeanu
  specialThanks:
    - Network Science Institute
    - Todd Linkner
    - Kristine Lu
    - Isabel Dmitruk
  note: Selected coding tasks were supported by Claude Code.
---

## The exploration gap

Meta-scientists use co-authorship networks to study collaboration within
universities. Existing tools can reveal network structure, but make that
structure difficult to explore across departments, research centers, and individual
scholars.

**How might an institutional co-authorship network become something researchers can
actually explore?**

## Three views

I organized the same institutional network across three scales: **university,
research unit, and scholar.** The **Collaboration Map** reveals
institution-wide structure. **Research Units** compares departments and research
centers. **Bridging Scholars** surfaces people who connect otherwise separate
communities.

<figure>
  <video
    src="/media/inside-the-institution/collaboration-map.mp4"
    width="1920"
    height="950"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The Collaboration Map: the university-wide co-authorship graph, with a scholar selected to reveal their local network."
  ></video>
  <figcaption>University level: clusters, gaps, and cross-unit ties.</figcaption>
</figure>

<figure>
  <video
    src="/media/inside-the-institution/research-units.mp4"
    width="1440"
    height="694"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The Research Units view with one unit selected, showing collaboration inside it and with other units."
  ></video>
  <figcaption>Research-unit level: collaboration across organizational groups.</figcaption>
</figure>

<figure>
  <video
    src="/media/inside-the-institution/bridging-scholars.mp4"
    width="1920"
    height="950"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The Bridging Scholars view, with each scholar placed by the research areas they span."
  ></video>
  <figcaption>Scholar level: people connecting separate communities.</figcaption>
</figure>

<details>
<summary>Design concepts</summary>

**Three scales, three spatial models.** Rather than forcing the same visual form onto
every level, I used a spatial model suited to the question each view needed to
support.

**Collaboration Map: emergent structure.** A force-directed layout lets collaboration
clusters emerge from the data rather than from a predefined organizational hierarchy.

<div class="media-pair" style="--pair-split: 2fr 1fr">
  <figure>
    <img
      src="/media/inside-the-institution/research-units-concept.webp"
      alt="Three panels: a photograph of hexagonal Sanctuary tiles, hexagon encoding drafts for departments, research centers and colleges, and the final Research Units view."
      width="3000"
      height="1941"
      loading="lazy"
      decoding="async"
    />
    <figcaption>
      Hexagonal tiles became the visual grammar for research units.
    </figcaption>
  </figure>

  <figure>
    <img
      src="/media/inside-the-institution/bridging-scholars-concept.webp"
      alt="Two panels: planets at different distances from a viewer, and the final Bridging Scholars view with communities on one plane and connectors raised above it."
      width="2400"
      height="3106"
      loading="lazy"
      decoding="async"
    />
    <figcaption>University as a planetary system.</figcaption>
  </figure>
</div>

**Research Units: tiled structure.** The idea came from arranging hexagonal tiles
while playing *Sanctuary*. Their geometry suggested a way to represent organizational
units as distinct but comparable parts of one system.

**Bridging Scholars: vertical structure.** Inspired partly by
[*150 Years of Nature*](https://www.nature.com/immersive/d41586-019-03165-4/index.html), I
explored depth as an encoding channel. Research communities stay on a shared plane
while scholars connecting multiple communities are elevated above it.

Expert testing later showed that the 3D approach also introduced readability costs.

</details>

## The data problem

I started with a dataset containing only four fields per scholar: `internal ID`,
`name`, `database ID`, and `Northeastern affiliation flag`. My first Gephi and
D3.js prototypes could show network density, but not departments, research centers,
or meaningful organizational comparisons.

<div class="media-mosaic" style="--mosaic-split: 46fr 54fr; --mosaic-stack: 64fr 36fr">
  <figure>
    <img
      src="/media/inside-the-institution/initial-dataset-fields.webp"
      alt="Annotated view of the original dataset showing four fields for each scholar node."
      width="1800"
      height="982"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Four fields per node, with no organizational structure.</figcaption>
  </figure>

  <figure data-caption="center">
    <img
      src="/media/inside-the-institution/coauthorship-network-gephi.webp"
      alt="Dense purple co-authorship network rendered in Gephi."
      width="900"
      height="900"
      data-ground="paper"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The same network rendered in Gephi.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/inside-the-institution/coauthorship-network-d3.webp"
      alt="Dense co-authorship network rendered in D3.js with large overlapping nodes and edges."
      width="1200"
      height="675"
      loading="lazy"
      decoding="async"
    />
    <figcaption>
      Northeastern’s co-authorship network rendered in D3.js.
    </figcaption>
  </figure>
</div>

> The visualization attempt exposed a data problem.

I spent three months rebuilding the dataset with faculty affiliations, departments,
research centers, and publication records from OpenAlex and ORCID. The final
dataset covered **2,737 faculty across 11 colleges, 46 departments, and 64 research
centers**.

## Analysis to design

I first developed the Collaboration Map at a deliberately bounded scale: **379 scholars
across three departments and three research centers.** At that size, a force-directed
layout made clusters and cross-unit ties readable on its own. When I expanded the
network to all 2,737 faculty, the same layout became much denser. I added encodings to
keep structural patterns legible.

<!-- `--pair-split` in the pictures' own aspect ratios, 1.177 and 1, so the
     bounded network and the square full-university plate come out the same
     height without either being cropped. -->

<div class="media-pair" style="--pair-split: 1.177fr 1fr">
  <figure>
    <img
      src="/media/inside-the-institution/layout-379-scholars.webp"
      alt="The force-directed layout at prototype scale: separated clusters with the ties between them visible."
      width="1224"
      height="1040"
      loading="lazy"
      decoding="async"
    />
    <figcaption>379 scholars: 3 departments and 3 research centers.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/inside-the-institution/layout-2737-scholars.webp"
      alt="The same layout on the full institutional network: one dense mass with the structure no longer separable."
      width="3080"
      height="3080"
      loading="lazy"
      decoding="async"
    />
    <figcaption>2,737 scholars: full university network.</figcaption>
  </figure>
</div>

I used network analysis to surface structural roles that the layout no longer made
obvious. I measured the strength of scholars' collaboration across
departmental boundaries and translated that measure into progressively stronger outer
rings. The halo increases in
four steps, marking the top 25%, 5%, 3%, and 1% of the score distribution.

<div class="tier-key">
  <p class="tier-key__title">Bridge-score tiers</p>
  <div class="tier-key__row">
    <div class="tier-key__item">
      <svg width="44" height="44" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
        <circle cx="28" cy="28" r="14" stroke="#A4804A" stroke-width="0.9" fill="none" opacity="0.30" />
        <circle cx="28" cy="28" r="10" fill="#A4804A" fill-opacity="0.78" />
      </svg>
      <span>Top 25%</span>
    </div>
    <div class="tier-key__item">
      <svg width="44" height="44" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
        <circle cx="28" cy="28" r="15.5" stroke="#A4804A" stroke-width="1.2" fill="none" opacity="0.45" />
        <circle cx="28" cy="28" r="10" fill="#A4804A" fill-opacity="0.78" />
      </svg>
      <span>Top 5%</span>
    </div>
    <div class="tier-key__item">
      <svg width="44" height="44" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
        <circle cx="28" cy="28" r="17" stroke="#A4804A" stroke-width="1.8" fill="none" opacity="0.60" />
        <circle cx="28" cy="28" r="10" fill="#A4804A" fill-opacity="0.78" />
      </svg>
      <span>Top 3%</span>
    </div>
    <div class="tier-key__item">
      <svg width="44" height="44" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
        <circle cx="28" cy="28" r="18.5" stroke="#A4804A" stroke-width="2" fill="none" opacity="0.75" />
        <circle cx="28" cy="28" r="10" fill="#A4804A" fill-opacity="0.78" />
      </svg>
      <span>Top 1%</span>
    </div>
  </div>
</div>

<details>
<summary>How the bridge score is calculated</summary>

<div class="formula">
  <p class="formula__eq" aria-hidden="true">
    <span class="formula__term">Bridge score <span class="formula__op">=</span></span>
    <span class="formula__frac">
      <span>cross&#8209;department partners</span>
      <span>total partners</span>
    </span>
    <span class="formula__term"
      ><span class="formula__op">&#215;</span> log<sub>10</sub>(total partners)</span
    >
  </p>
  <p class="vh">
    Bridge score equals cross-department partners divided by total partners, multiplied
    by the base-ten logarithm of total partners.
  </p>
  <div class="formula__parts">
    <p><b>Proportion:</b> how much of a scholar’s collaboration crosses departmental
      boundaries.</p>
    <p><b>Breadth:</b> how many collaborators they have overall, log-transformed to reduce
      skew.</p>
  </div>
</div>

Either term alone produces misleading rankings. Combining them favors scholars who both
collaborate broadly and cross organizational boundaries.

</details>

## Bringing the views together

As the tool grew to three views, I needed them to feel like different perspectives on
the same dataset, not separate applications.

Early versions mixed global navigation with controls that only applied within a specific
view. I flattened the header and moved search, unit tabs, and ego-network controls into
the views where they were relevant.

<figure>
  <img
    src="/media/inside-the-institution/navigation-iterations.webp"
    alt="Four header states in sequence: no navigation with the search bar in the sidebar; three buttons in a row with search moved into the header; sub-navigation that mixed global and local controls; and a flat header with the search bar moved into the Collaboration Map."
    width="2560"
    height="1240"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Navigation evolution: global views separated from local controls.</figcaption>
</figure>

The side panel evolved for the same reason. It began as a place for scholar details.
Over time, it adopted the same visual language as the main views: joint appointments,
bridge status, and affiliation encoding.

In the final system, the panel carries scholar or unit context beside the active view. I
added Direct, 1-Hop, and 2-Hop controls to bring ego-network exploration onto the
main canvas. The panel became a contextual hub between the **university, research unit,
and scholar** levels.

<figure>
  <img
    src="/media/inside-the-institution/side-panel-iterations.webp"
    alt="Five panel states side by side: basic scholar details; joint appointments and community context; a bridge-scholar badge and data-quality indicator; affiliation bars in the canvas colours; and Direct, 1-Hop and 2-Hop controls."
    width="2496"
    height="1932"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Side-panel evolution: from detail display to a contextual hub.</figcaption>
</figure>

## Testing with experts

Before the formal study, I ran a two-person pilot to test the evaluation protocol
itself. Guided tasks took over too much of the session. Role-playing also produced less
grounded responses, so I removed both.

The formal study involved **20 meta-scientists**. All had prior experience with
network-analysis tools. Participants explored the tool freely while thinking aloud. They
then completed one open-ended task: find a pattern or connection that surprised them. A
short questionnaire followed.

<figure data-width="prose">
  <img
    src="/media/inside-the-institution/study-session.webp"
    alt="Participant using the collaboration visualization on a laptop during a think-aloud study session."
    width="1600"
    height="979"
    loading="lazy"
    decoding="async"
  />
  <figcaption>A formal think-aloud session: experts explored freely and formed their own questions.</figcaption>
</figure>

<!-- PARKED for 08 "What needed work". Written, not yet re-homed — do not delete
     without moving these facts into that section.

     The questionnaire combined twenty-five view-specific Likert items with six overall
     items and three open-ended questions. I analyzed the session records thematically
     alongside the questionnaire. Where the two disagreed, I gave the session records
     interpretive priority, on the principle that observed behavior is better evidence
     than self-reported satisfaction.

     Remove the cross-college group and the main connected component fragments into
     college-specific clusters. The share of faculty in the main component ranges from
     69.2% in Engineering to 3.3% at Northeastern University London.

     Participant experience, from the background questionnaire: seventeen with Python
     network libraries, fifteen with Gephi, seven with D3 or other web visualization.
-->

## What became visible

I counted how many faculty had at least one recorded internal co-authorship tie and how
many connected across colleges.

<div class="stat-strip">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">52.3%</p>
    <p class="stat-strip__label">Recorded internal tie</p>
    <p class="stat-strip__note">1,431 of 2,737 faculty</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">7.1%</p>
    <p class="stat-strip__label">Cross-college tie</p>
    <p class="stat-strip__note">195 of 2,737 faculty</p>
  </div>
</div>

During testing, participants traced cross-unit ties. They inspected local scholar
networks and compared scholars' positions in those networks with profile information and
their own knowledge of the university.

<blockquote class="participant-quote">
  <p>“I would not have thought some of the different areas were like collaborating together.”</p>
  <cite>Participant 09</cite>
</blockquote>

One participant found a scholar with a modest h-index but a high bridge score. That
contrast made them question whether bibliometric impact and structural importance were
measuring the same thing.

<figure>
  <img
    src="/media/inside-the-institution/scholar-selected.webp"
    alt="The Collaboration Map with one scholar selected in 2-Hop view: their local network on the left, and a panel on the right showing affiliations, h-index, collaborators and research interests."
    width="1256"
    height="708"
    loading="lazy"
    decoding="async"
  />
  <figcaption>A selected scholar in 2-Hop view: local connections shown alongside profile and research context.</figcaption>
</figure>


## What needed work

Participants needed a persistent legend and more orientation when they first entered the
tool, while some secondary features were easy to miss. Several also found the 3D view harder to
read and control than the 2D views.

<dl class="issue-response">
  <div>
    <dt>Encoding clarity</dt>
    <dd>I would keep a persistent legend on screen.</dd>
  </div>

  <div>
    <dt>Feature discoverability</dt>
    <dd>I would add onboarding and stronger signifiers for the features participants missed.</dd>
  </div>

  <div>
    <dt>3D interaction cost</dt>
    <dd>I would test a 2D alternative against the 3D view.</dd>
  </div>
</dl>

One participant found a deeper analytical mismatch between two definitions of
"bridging." I had computed bridge score from departmental boundaries, while the Bridging
Scholars view used Leiden communities derived from the co-authorship network. Both
measures were valid on their own, but I had presented them as if they described the same
kind of bridge.

<blockquote class="participant-quote">
  <p>“The bridge score is computed based on departments, but the visualization is based on topics.”</p>
  <cite>Participant 16</cite>
</blockquote>

I had made the interface visually consistent, but the two analyses answered different
questions. The analytical definitions have to align first. Only then should the visual
language make them look equivalent.

<details>
<summary>Limits and responsibility</summary>

**Co-authorship is partial evidence.** It captures one form of collaboration and
systematically underrepresents work in arts, humanities, and practice-based fields. An
isolated node is not an uncollaborative scholar.

**The network is not a performance metric.** It shows structural patterns, not
productivity or research quality. I would not use centrality, bridge score, or internal
tie counts to evaluate anyone.

**Aggregation creates new visibility.** The source records are public, but combining
them into identifiable scholar profiles is a different thing from the records
themselves. A production version would need correction mechanisms, consent
expectations, and data-governance rules.

</details>


## Takeaway

I began with a visualization brief, but each stage changed what the project required. My
first prototypes exposed missing institutional data. Scaling from 379 scholars to 2,737
forced me to add analytical encodings, and expert testing exposed a mismatch between two
definitions of bridging.

If I started again, I would define the data model and analytical terms earlier. I would
still keep the tool exploratory rather than guide users toward one story. Participants
compared unexpected units, questioned bibliometric impact, and caught an analytical
mismatch I had missed. Those moments convinced me that data, analysis, and interface
cannot be treated as separate steps.
