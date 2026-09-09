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
    value: "Interactive research tool and MFA thesis. Poster presented at NetSci 2026"
---

## The exploration gap

Meta-scientists use co-authorship networks to study collaboration within
universities. Existing tools like *Gephi* can reveal network structure, but make it
difficult to explore it across departments, research centers, and individual
scholars.

**How might an institutional co-authorship network become something researchers can
actually explore?**

## The data problem

The first dataset contained only four fields per scholar: `internal ID`, `name`,
`database ID`, and `Northeastern affiliation flag`. My first *Gephi* and *D3.js*
prototypes could show density, but not departments, research centers, or meaningful
comparisons.

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
    <figcaption>The same network rendered in <em>Gephi</em>.</figcaption>
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
      Northeastern&#8217;s co-authorship network rendered in <em>D3.js</em>.
    </figcaption>
  </figure>
</div>

> The visualization problem was actually a data problem.

I spent three months rebuilding the dataset with faculty affiliations, departments,
research centers, and publication records from *OpenAlex* and *ORCID*. The final
dataset covered **2,737 faculty across 11 colleges, 46 departments, and 64 research
centers**.

<details>
<summary>Data curation details</summary>

Scholar and publication records came from *OpenAlex* and *ORCID*. *OpenAlex* matched
90.3% of the faculty roster; of those matches, 76.5% returned high-quality publication
records, while 18.2% were flagged for manual review.

</details>

## Three views

The first prototype treated the institution as a single network. As the project
expanded, it became clear that different questions required different scales of
exploration.

The final tool organizes exploration across three levels: **university, research unit,
and scholar.**

<figure>
  <video
    src="/media/inside-the-institution/collaboration-map.mp4"
    width="1440"
    height="712"
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
    width="1440"
    height="712"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The Bridging Scholars view, with each scholar placed by the research areas they span."
  ></video>
  <figcaption>Scholar level: people connecting separate communities.</figcaption>
</figure>

## Analysis before encoding

Before deciding how scholars should look in the interface, I analyzed the network for
communities, boundary-spanning scholars, and unit-level structure. Those measures
became inputs to the visual system rather than results added afterward.

The bridge score, for example, identifies scholars whose collaborators cross
departmental boundaries while accounting for their overall collaboration volume. In the
Collaboration Map, that score becomes a tiered outer ring, making structurally
important connectors visible without replacing affiliation or connectivity encodings.

<details>
<summary>Bridge score details</summary>

The bridge score is the share of a scholar's collaborators who belong to a different
department, multiplied by the log of their total collaborator count. The ratio captures
boundary-spanning, while the logarithmic term keeps highly productive but
disciplinarily narrow scholars from dominating the ranking.

In the Collaboration Map, outer-ring tiers correspond to the top 25%, 10%, 5%, 3%,
and 1% of the bridge-score distribution.

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
analysis tool: seventeen with Python network libraries, fifteen with *Gephi*, seven with
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
