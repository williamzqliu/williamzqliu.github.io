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
  demo: https://williamzqliu.com/ripples-into-silence/
  code: https://github.com/williamzqliu/ripples-into-silence
cover:
  # The card and the head play the same loop: the record's opening, where
  # the island comes up with its name and shrinks to the cross, then its end
  # fading in, and back to the empty frame the loop starts from. Real frames
  # from the piece, with the nav, counters and year bar hidden. Made at the
  # head's 2.1:1, which the card's 16:9 crops at the sides only.
  wide: /media/ripples-into-silence/hero-loop.mp4
  tone: dark
  alt: The yellow outline of Lampedusa appears with its name on a deep navy ground and shrinks to a small cross. The record's end fades in around it, ninety-five hollow white circles of different sizes inside dashed rings marked 10, 25 and 50 km, then fades back to the empty frame.
  caption: The record's opening and its end, each circle one record at its distance from the island. The piece runs in a desktop browser window of at least 1024 by 640 pixels.
quickFacts:
  - label: "Role"
    value: "Data preparation, narrative design & visualization development"
  - label: "Outcome"
    value: "Published scrollytelling piece covering records from 2014 to 2025"
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

Ripples into Silence follows the deaths and disappearances recorded around
Lampedusa, a small Italian island between Tunisia and Sicily. People make these
crossings hoping to start a life somewhere new, and I wanted to look at what that
journey can cost through the records that remain of it.

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
the whole Mediterranean. Twenty countries of origin, six transit countries and five
European destinations sat in three tiers, with arcs for routes, causes of death and
the number of people lost.

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

With that many regions and relationships on screen at once, a reader had no clear
place to begin. I kept the same source and narrowed the frame to one island.
Lampedusa lies on a central Mediterranean route, and a single place gave the piece
a geographic entry that a viewer can hold on to from the first scene to the last.

The 50 km radius is a focus I chose, and I applied it by calculation: I measured
each record's supplied coordinates against a reference point on the island and
kept the records inside the radius. A coordinate can mark an incident, a rescue,
the discovery of remains or an arrival, so where a record sits is not always where
a person died.

<details>
<summary>Data scope and limitations</summary>

The source is a CSV export of the IOM Missing Migrants Project, supplied in
September 2026, with dates from 2 January 2014 to 31 December 2025. I make no
claim that it is the latest release or that the reporting is complete.

I kept unique Main IDs dated 2014 to 2025 whose coordinates fall within 50 km of
35.5086, 12.5929, using a haversine distance on a 6,371 km Earth radius. The
distance is to that one reference point, and it says nothing about the nearest
coastline or about what can be seen from the island.

A Main ID is a record, not a boat, and two records with the same date and
coordinates stay separate. The 95 records count 833 people: 199 in the dead field
and 634 in the missing field. A blank field stays blank, and I do not count it as
a confirmed zero.

The sample differs from the one the 2025 version used. Split rows were merged,
some historical records changed in the source, other records are new, and 2025 is
added. Four
records whose location text disagrees with their coordinates, such as one described
as 100 km northwest of Lampedusa whose coordinates give 7.65 km, carry a note in
the sample and stay in it. They are the discrepancies found in review, and I did
not check every coordinate against its description.

The piece's [data and method notes](https://github.com/williamzqliu/ripples-into-silence/blob/main/data/METHOD.md)
give the full rules, and `scripts/build_data.py` rebuilds the sample from the
source and records the source's hash.

</details>

## Giving the records a rhythm

In the record, each record travels in toward the island and stops at its recorded
distance, then leaves a ripple sized by the number of people it counts. I fixed the
distance scale to the frame, so the marks and the 10, 25 and 50 km rings read off
the same ruler. Only distance is to scale. The directions and the inward paths are
illustrative, and a line under the time bar says so.

I slowed the opening so the encoding can be learned from a few records. The first
five go out one at a time, each waiting until the one before has finished, with its
distance and its count labelled beside it. After them the pace settles, and the
other 90 follow in date order.

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

The playback is edited, and it does not replay the gaps between events. After the
opening I gave each record an equal share of the time bar, so a year with more
records takes longer to play, and a year with only one or two still gets room for
its label. I kept that pace even so the animation would not suggest that the risk
was growing.

The animation is built for reading one record at a time, which makes comparing
years a matter of memory. So after it I drew each year as its own disc, with the
same rings and the same size scale for all twelve, and a reader can compare where
the marks fall and how large they are from one year to the next.

<figure>
  <img
    src="/media/ripples-into-silence/twelve-years.webp"
    alt="Twelve discs in three rows of four, one per year from 2014 to 2025, each with the same dashed rings and white marks of different sizes, and its record and dead or missing counts beneath it. The 2025 disc has a faint ring around it."
    width="2400"
    height="1393"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Twelve years on one distance and size scale, from one record in 2014 to 35 in 2023.</figcaption>
</figure>

Any disc opens at full size, and hovering a mark gives its count, date and
distance. I also kept the source's own description of the location in it: the
coordinate may mark a rescue or an arrival, and the description is how a reader
can check.

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

In the discs, one mark is one record, and its size says how many people that
record counts. A record of one person and a record of dozens are still two marks
of the same kind. For the last step I wanted to move attention from the number of
records to the people inside them.

As the reader scrolls, I let the marks leave their discs, draw together and split
into 833 equal circles, each record into as many circles as it counts. The circles
pass through an outline of Lampedusa and then settle into groups by the cause
reported for their record. The island outline is a visual device that holds the
833 together for a moment. It does not show a journey, and it does not mean these
people reached the island.

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

I kept the change continuous so the figures on either side stay connected. Every
circle in the groups comes out of a mark in a disc, and scrolling back up returns
each one to its mark. Cutting to a new chart would have left the reader to trust
that the 833 and the twelve years are the same records.

The groups take the cause field of each circle's record, so they are not a
confirmed cause for every missing person. I put records that report more than one
cause in a group of their own. That group says less about any one person, but
splitting it would have given people causes their record does not assign.

<details>
<summary>Playback and implementation</summary>

The record and the discs are SVG, drawn with D3.js. The 833 circles are drawn on a
canvas, which takes over each white mark at the position the SVG rendered it, and
the SVG marks are hidden once the canvas has them, so the two are never drawn over
each other.

The transition has no clock of its own. The scroll position inside the pinned stage
sets every circle's position, so a reader who stops halfway holds halfway, and
scrolling back runs the same frames in reverse. The record does have a clock, and
it runs only while the record is on screen.

Each circle keeps the Main ID of its record, which decides the mark it leaves and
the group it joins. A test in the repository checks the 833 circles, the count in
each of the seven groups, and that each of the 95 records yields as many circles as
it counts.

With reduced motion requested, the discs appear filled, the transition changes
straight from the discs to the groups, and the epilogue's lines appear together.
The record's paths still animate.

There is no framework and no build step. The page is ES modules and CSS, and the
repository is what is published.

</details>
