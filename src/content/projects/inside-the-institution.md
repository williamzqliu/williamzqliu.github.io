---
title: Inside the Institution
year: 2026
dates: Jul 2025 – May 2026
blurb: An interactive research tool for exploring coauthorship across scholars, departments, and research centers at Northeastern University.
tags: [networks, interactive]
tracks: [design, engineering]
category: data-research
published: true
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
  alt: A highlighted coauthorship network showing collaboration across multiple university research groups.
  caption: "A detail of Northeastern University’s internal coauthorship network, rendered with a standard D3.js force-directed layout."
quickFacts:
  - label: "Role"
    value: "Research, data analysis, design & development"
  - label: "Outcome"
    value: "Interactive prototype evaluated with 20 participants; MFA thesis and NetSci 2026 poster."
# Order is the editorial decision here — read down, not sorted. Five is the cap
# on skills and tools, enforced by the schema.
credits:
  skills:
    - Data visualization
    - Data curation & network analysis
    - Interaction design
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
  # `Roles` rather than `Team`. Three people advised and one did the work, so
  # `Team` would read as four collaborators and claim a share of the research
  # for people who guided it instead.
  teamLabel: Roles
  team:
    - group: Data curation, analysis, design, development & evaluation
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
  note: Claude Code assisted with code implementation and optimization for selected features.
---

## Exploring collaboration

I curated the institutional data, analyzed the network, and designed and implemented
the prototype. It brings together **2,737 faculty and 3,650 coauthorship ties** across
three exploratory views.

> **Research question**
>
> How can an interactive visualization help researchers explore collaboration within a
> university, across organizational units and individual scholars?

A coauthorship network shows who has published together. Exploring it at an
institutional scale also requires knowing where people work and which organizational
boundaries their collaborations cross. I organized the prototype around three ways
into the same dataset.

### Collaboration Map

Explore the overall network, narrow it to an organizational unit, and inspect a
scholar’s collaborators.

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
    aria-label="The Collaboration Map: the university-wide coauthorship graph, with a scholar selected to reveal their local network."
  ></video>
  <figcaption>Move from the university network to an individual’s collaboration neighborhood.</figcaption>
</figure>

### Research Units

Browse departments and research centers, then inspect their membership and
collaboration measures.

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
  <figcaption>Inspect a unit’s members and its connections with other units.</figcaption>
</figure>

### Bridging Scholars

Explore connections between network communities, then select a community to inspect
the scholars linking it to others.

<!-- The recording shows the 3D community view, not the department score, so
     the caption describes what is on screen rather than the cross-unit
     measures. -->
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
    aria-label="The Bridging Scholars view in 3D: communities drawn as spheres and the scholars who link them in yellow. Selecting a community highlights its connections and opens its details."
  ></video>
  <figcaption>Select a community to see the scholars who link it to others.</figcaption>
</figure>

## Building the dataset

I manually curated faculty and research-unit records, including primary appointments,
additional affiliations, and employment status and years. I connected these records to
publication data from OpenAlex and built a pipeline for identity checks, publication
reconciliation, coauthorship edges, and unit-level summaries.

The organizational records cover 11 colleges, 46 departments, and 64 research centers.
The roster includes current, retired, and former faculty.

I recorded primary and additional affiliations separately. The scholar panel displays
both departmental and research-center affiliations.

Coauthorship captures only part of collaboration. Missing publication records and
differences in how disciplines publish also affect who appears connected. An
unconnected person in this dataset should not be read as someone who does not
collaborate.

<details>
<summary>Data scope and affiliation rules</summary>

The prototype includes units selected for this research dataset, rather than a complete
historical record of the university. Faculty identities were matched to OpenAlex
records; 266 roster entries had no main OpenAlex ID in the supplied dataset.

For faculty with multiple departmental affiliations, I used the designated primary
department. Departmental affiliation took precedence when someone also belonged to a
research center; center-only appointments retained their center affiliation.
Additional affiliations were stored separately.

I also collected employment start and end years. Where the available sources supported
only an approximate year, I marked it as an estimate in the source roster. These
records do not establish a complete history of changes in departmental or center
membership.

</details>

## Designing the exploration

### Adapting to a larger network

The project grew from an early prototype with 379 scholars to a roster of 2,737. At
that scale, the overview needed routes into smaller, interpretable groups. I used unit
filtering, local exploration, and scholar details to support movement between the
institution and individual relationships.

<!-- `--pair-split` in the pictures' own aspect ratios, 1.177 and 1, so the
     bounded network and the square full-roster plate come out the same
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
    <figcaption>Early prototype: 379 scholars.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/inside-the-institution/layout-2737-scholars.webp"
      alt="The same layout on the full roster: one dense mass with the structure no longer separable."
      width="3080"
      height="3080"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Full roster: 2,737 scholars.</figcaption>
  </figure>
</div>

### Keeping details in context

An earlier version put the scholar profile on a separate page. Feedback showed that
this interrupted orientation and repeated information. I moved the profile into a side
panel beside the map so readers could inspect a person while retaining the surrounding
network.

<figure>
  <img
    src="/media/inside-the-institution/scholar-selected.webp"
    alt="The Collaboration Map with one scholar selected in 2-Hop view: their local network on the left, and a panel on the right showing affiliations, h-index, collaborators and research interests."
    width="1256"
    height="708"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Moving the profile beside the map keeps the scholar’s relationships in view.</figcaption>
</figure>

### Choosing an organizational measure

I wanted to compare collaboration across departments, so I defined a score using the
share of a scholar’s collaborators outside their department and the number of
collaborators. Algorithmically detected communities would answer a different question:
those groups do not necessarily follow organizational boundaries. The 3D view uses
network communities, while this score uses departmental affiliations.

I treated the score as an entry point for exploration. It does not establish research
quality, influence, or the value of a person’s collaborations.

<details>
<summary>How the score is defined</summary>

The intended score combines the proportion of cross-department collaborators with the
logarithm of the total collaborator count:

<div class="formula">
  <p class="formula__eq" aria-hidden="true">
    <span class="formula__term">Score <span class="formula__op">=</span></span>
    <span class="formula__frac">
      <span>cross&#8209;department collaborators</span>
      <span>all collaborators</span>
    </span>
    <span class="formula__term"
      ><span class="formula__op">&#215;</span> log<sub>10</sub>(all collaborators)</span
    >
  </p>
  <p class="vh">
    Score equals cross-department collaborators divided by all collaborators, multiplied
    by the base-ten logarithm of all collaborators.
  </p>
</div>

The proportion describes how much a person’s collaboration extends beyond their
department; the logarithmic term also accounts for the size of that collaboration
network. The result depends on affiliation assignments and publication coverage.

The original calculation script is unavailable, so the exported scores cannot be fully
reproduced, including their eligibility rules and low-degree handling.

</details>

<details>
<summary>Implementation</summary>

I precomputed network measures and summaries in Python and built a client-side
prototype using JavaScript, D3, Canvas, SVG, and Three.js.

</details>

## Evaluating with researchers

I evaluated the prototype with **20 participants**, most of whom were PhD researchers
or postdoctoral researchers. Sessions combined open exploration with a task to find a
surprising connection, followed by a questionnaire.

One participant noticed a scholar with a relatively low h-index but a high
cross-department score. The measures drew attention to different aspects of that
person’s research profile. This suggested a useful role for the tool: helping readers
identify cases worth examining more closely.

Another participant questioned whether crossing departments necessarily meant crossing
research topics. That distinction exposed a limit in the measure’s interpretation.
Organizational distance and intellectual distance do not always align.

<details>
<summary>Evaluation approach</summary>

The participant group included 14 PhD or postdoctoral researchers, two faculty members,
two staff members, one research professor or scientist, and one alumnus. Many were
familiar with network-analysis tools, so the findings primarily reflect an experienced
research audience.

Sessions lasted approximately 20 minutes and included exploration, a task, and
feedback. The questionnaire contained 25 rating items across the individual views and
the overall experience, alongside written responses.

The study was exploratory, with no baseline comparison. It identified useful
interactions, interpretation problems, and usability issues; it does not establish
performance gains or general usability for other audiences.

</details>

## Changes and open issues

Feedback pointed to three areas where the interface needed clearer guidance or a
different approach.

<dl class="issue-response">
  <div>
    <dt>Participants needed clearer explanations of visual encodings and available interactions.</dt>
    <dd><strong>Updated.</strong> I revised the legend and added interaction guidance after the study. These changes have not been validated in a follow-up study.</dd>
  </div>

  <div>
    <dt>Several participants questioned the usability of the 3D interaction.</dt>
    <dd><strong>Planned.</strong> A 2D alternative remains a next step; the prototype still uses the 3D view.</dd>
  </div>

  <div>
    <dt>Participants brought different meanings to “bridging,” including organizational and topic boundaries.</dt>
    <dd><strong>Unresolved.</strong> The definition remains unresolved in the prototype. The next revision needs to make the measured boundary explicit wherever the score appears.</dd>
  </div>
</dl>

## Outcome and next steps

The project produced an interactive prototype, an MFA thesis, and a poster presented at
NetSci 2026. I brought institutional records and publication data into an interface
where researchers could move between organizational patterns and individual
collaboration profiles.

The evaluation showed why those connections need explanation as well as navigation.
Participants used the measures to notice unfamiliar patterns, but also questioned what
crossing a department boundary meant. My next priorities are to clarify that
definition, test a 2D alternative, and evaluate the revised guidance.

[Explore the prototype](https://williamzqliu.com/neu-network-viz/)
