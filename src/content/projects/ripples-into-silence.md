---
title: Ripples into Silence
year: 2025
dates: Jan 2025 – Apr 2025, updated Sep 2026
blurb: A scrollytelling visualization using ripples to tell the story of twelve years of recorded migrant deaths and disappearances around Lampedusa.
tags: [narrative, interactive]
tracks: [design, engineering]
category: visual-storytelling
published: true
stack:
  - D3.js
  - JavaScript
  - Python
  - SVG
  - Canvas
links:
  # The course remote only the faculty can publish to is replaced by my own.
  # The account's user site carries a custom domain, so a project page is
  # served under that domain rather than under github.io.
  # The piece asks for a desktop window, so the label says so wherever the
  # link appears, on the card as well as in the head.
  demo:
    href: https://williamzqliu.com/ripples-into-silence/
    label: Live Demo (desktop only)
  code: https://github.com/williamzqliu/ripples-into-silence
cover:
  # The card and the head play the same loop: the record's opening, where
  # the island comes up with its name and shrinks to the cross, then its end
  # fading in, and back to the empty frame the loop starts from. Real frames
  # from the piece, with the nav, counters and year bar hidden, and in the
  # final state the records' rings raised to 1.7 times their opacity (capped
  # at 0.85) so they read at card size; the dashed distance rings are as drawn.
  # Made at the head's 2.1:1, which the card's 16:9 crops at the sides only.
  wide: /media/ripples-into-silence/hero-loop.mp4
  tone: dark
  alt: The yellow outline of Lampedusa appears with its name on a deep navy ground and shrinks to a small cross. The record's end fades in around it, ninety-five hollow white circles of different sizes inside dashed rings marked 10, 25 and 50 km, then fades back to the empty frame.
  caption: The opening and final state of The Record.
quickFacts:
  - label: "Role"
    value: "Data preparation, narrative design & visualization development"
  - label: "Outcome"
    value: "Published interactive data story"
credits:
  skills:
    - Information design
    - Data visualization
    - Scrollytelling
    - Data preparation
    - Creative development
  tools:
    - D3.js
    - JavaScript
    - Python
    - SVG and Canvas
  # `Roles` rather than `Team`: one person made this, and the second row is
  # the tutor of the course it was made for rather than a collaborator.
  teamLabel: Roles
  team:
    - group: Design and development
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Todd Linkner
  note: Claude Code assisted with parts of the implementation and with optimizing the code.
  # Three rows and a note, which is not enough to be worth closing.
  collapse: false
---

## The experience

Ripples into Silence follows deaths and disappearances recorded around Lampedusa,
a small Italian island between Tunisia and Sicily. I wanted to explore the human
cost of journeys made in the hope of starting a life somewhere new.

I built the piece so a viewer first watches the records appear one after another,
then compares the years, and finally sees the people inside the total. The current
version covers 95 records from 2014 to 2025, which together count 833 people
recorded as dead or missing.

<!-- Recorded from the local copy of the piece in headless Chrome at 1440 by
     900, every repainted frame kept and held for as long as it was on screen,
     so each excerpt runs in real time. Eleven excerpts, joined with 0.4 second
     fades. Masters in media-src/ripples-into-silence/2026. -->
<figure>
  <video
    src="/media/ripples-into-silence/overview.mp4"
    poster="/media/ripples-into-silence/overview-poster.webp"
    width="1440"
    height="900"
    muted
    playsinline
    controls
    loop
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="Excerpts from the piece in scene order: the title, the opening lines, records travelling in to their distance from Lampedusa, the three Why Lampedusa diagrams, the twelve annual discs, their marks becoming 833 circles grouped by reported cause, and the epilogue beside a relief of the island."
  ></video>
  <figcaption>Excerpts in scene order, from the title to the epilogue.</figcaption>
</figure>

## Choosing the frame

My first version, *Northbound: A Deadly Voyage*, set out to show migration across
the whole Mediterranean. It placed countries of origin, transit and destination in
three tiers, with arcs for routes, causes of death and the number of people lost.

<div class="media-pair" style="--pair-split: 1.78fr 2fr">
  <figure>
    <img
      src="/media/ripples-into-silence/northbound.webp"
      alt="Northbound: A Deadly Voyage. An arc diagram on a charcoal ground, with country silhouettes in three tiers and coloured arcs labelled with death counts running from North Africa and Türkiye toward Spain, Italy and Greece."
      width="2400"
      height="1349"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Before: 31 countries in three tiers, joined by arcs.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ripples-into-silence/frame-50km.webp"
      alt="The Why Lampedusa scene: a short paragraph headed Only 50 Kilometers Away beside the yellow silhouette of Lampedusa inside a dashed circle with its 50 km radius marked."
      width="2160"
      height="1080"
      loading="lazy"
      decoding="async"
    />
    <figcaption>After: one island and a 50 km radius around it.</figcaption>
  </figure>
</div>

I found the composition lacked a clear entry point. Keeping the same source, I
narrowed the frame to Lampedusa, an island on a central Mediterranean route, so the
piece could start from one place.

The 50 km radius is a focus I chose. I applied it by measuring each record's
coordinates against a reference point on the island and keeping the records inside
the radius. A coordinate can mark an incident, a rescue, the discovery of remains
or an arrival, so it may not be where a person died.

<details>
<summary>Data scope and limitations</summary>

The source is a CSV export of the IOM Missing Migrants Project, supplied in
September 2026. The snapshot covers records through December 2025 and should not
be treated as a complete account of all losses.

I kept unique Main IDs dated 2014 to 2025 within 50 km of a reference point on
Lampedusa, measured from that single point. The piece's
[data and method notes](https://github.com/williamzqliu/ripples-into-silence/blob/main/data/METHOD.md)
give the coordinates, the distance formula, and the script that rebuilds the sample
and records the source's hash.

A Main ID is a record, not a boat, and records with the same date and coordinates
stay separate. The 95 records count 833 people: 199 in the dead field and 634 in
the missing field. Blank fields are not counted as confirmed zeros.

The sample differs from the one the 2025 version used. Split rows were merged, some
historical records changed in the source, other records are new, and 2025 is
added. Four records whose location text disagrees with their coordinates, such as
one described as 100 km northwest of Lampedusa that sits at 7.65 km, carry a note
and stay in the sample. They are the discrepancies found in review; other
coordinates were not checked against their descriptions.

</details>

## Giving the records a rhythm

I used fading ripples as a metaphor for lives lost at sea. A ripple appears,
spreads and disappears, giving each record a brief presence before the surface
grows quiet again. What stays behind is a thin ring at the record's distance from
the island, sized by the number of people it counts. I fixed the distance scale to
the frame, so each record's ring and the 10, 25 and 50 km guides read off the
same ruler.
Radial position encodes distance; direction and movement do not represent actual
routes.

I slowed the opening so the encoding can be learned from a few records. The first
five appear one at a time, each labelled with its distance and its count, and the
rest follow in date order.

<!-- Seconds 6 to 42 of one take of the record, recorded the same way,
     uncut and at real speed. -->
<figure>
  <video
    src="/media/ripples-into-silence/record-opening.mp4"
    poster="/media/ripples-into-silence/record-opening-poster.webp"
    width="1440"
    height="900"
    muted
    playsinline
    controls
    loop
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The record's opening at real speed. The island shrinks to a cross inside rings marked 10, 25 and 50 km, and five records travel in one at a time, each labelled with its distance and then its number of dead or missing, while the counters and the year bar advance. After the fifth, records begin to arrive at a steadier pace."
  ></video>
  <figcaption>The opening at real speed: five labelled records, then the steady pace.</figcaption>
</figure>

Playback follows date order without reproducing the gaps between events. After the
opening, I used a largely steady pace, allowing more time for years with more
records.

Watching one record at a time makes comparing years a matter of memory. So after
the animation I drew each year as its own disc, with the same rings and size scale
for all twelve, and set them side by side.

<figure>
  <img
    src="/media/ripples-into-silence/twelve-years.webp"
    alt="Twelve discs in three rows of four, one per year from 2014 to 2025, each with the same dashed rings and white marks of different sizes, and its record and dead or missing counts beneath it. The 2025 disc has a faint ring around it."
    width="2400"
    height="1393"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Twelve annual views with shared distance and size scales.</figcaption>
</figure>

Any disc opens at full size, and hovering a mark gives its count, date and
distance. I retained the source's location descriptions in the tooltips so viewers
could read the context behind each coordinate.

<figure data-width="prose">
  <img
    src="/media/ripples-into-silence/disc-2024.webp"
    alt="The 2024 disc opened large beside its totals of 17 records and 211 dead or missing. The other marks dim while one is hovered, and its tooltip reads 44 dead or missing, 9 Dec 2024, 22.5 km from Lampedusa, and gives the recorded location: off the coast of Lampedusa, Italy, departure from Sfax, Tunisia, see coordinates for location of rescue."
    width="2040"
    height="1360"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The tooltip keeps the source's location text, which here says the coordinates mark the rescue.</figcaption>
</figure>

## From records to people

In the discs, one mark is one record, sized by the number of people it counts. For
the last step I wanted to move attention from the records to the people inside
them.

As the reader scrolls, I let the marks leave their discs, draw together and split
into 833 equal circles, each record into as many circles as it counts. The circles
pass through an outline of Lampedusa and then settle into groups by the cause
reported for their record. The outline is a visual device that holds the 833
together for a moment; it does not show a journey or mean these people reached the
island.

<!-- One take, recorded the same way: 16 seconds of eased scrolling from the
     discs to the groups. Three seconds are trimmed from each end of the
     master and the rest plays at 1.1 times, uncut in between. The scroll
     sets every position, so the pace is the scroll's. -->
<figure>
  <video
    src="/media/ripples-into-silence/people.mp4"
    poster="/media/ripples-into-silence/people-poster.webp"
    width="1440"
    height="900"
    muted
    playsinline
    controls
    loop
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The twelve annual discs fade to their white marks, which drift together and split into small equal circles. The circles fill an outline of Lampedusa, then flow out of it into blocks under the heading 833 people, each block labelled with a reported cause and its count."
  ></video>
  <figcaption>One continuous scroll, from the twelve discs to the cause groups.</figcaption>
</figure>

I kept the transition continuous so viewers could follow the same records into the
person-level view. Every circle comes from a mark in an annual disc, and scrolling
back returns it to that mark.

Cause groups reflect the source records, not individually confirmed causes for
every missing person. I kept multiple causes together rather than assign
individual people to causes the record does not distinguish.

<details>
<summary>Playback and implementation</summary>

The record and the discs are SVG, drawn with D3.js. The 833 circles are drawn on a
canvas, which takes over each white mark where the SVG drew it; the SVG marks are
then hidden so the two never overlap.

The transition has no clock of its own: the scroll position inside the pinned stage
sets every circle's position, so a reader who stops halfway holds halfway. The
record runs on its own clock, and only while it is on screen. After the opening,
the records in most years take equal slots on the time bar, and a year with only a
few records is given at least enough width for its label. The bar's years are
therefore not a calendar scale.

Each circle keeps the Main ID of its record, which decides the mark it leaves and
the group it joins. A test in the repository checks the 833 circles, the count in
each of the seven groups, and that each of the 95 records yields as many circles as
it counts.

With reduced motion requested, the discs appear filled, the transition changes
straight from the discs to the groups, and the epilogue's lines appear together.
The record's paths still animate.

</details>
