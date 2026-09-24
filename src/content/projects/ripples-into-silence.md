---
title: Ripples into Silence
year: 2025
dates: Jan 2025 – Apr 2025
blurb: A scrollytelling piece on the migrant deaths that happen within sight of Lampedusa.
tags: [narrative, interactive]
tracks: [design, engineering]
category: visual-storytelling
published: true
stack:
  - D3.js
  - JavaScript
  - Python
  - SVG
links:
  # The course remote only the faculty can publish to is replaced by my own.
  # The account's user site carries a custom domain, so a project page is
  # served under that domain rather than under github.io.
  demo: https://williamzqliu.com/ripples-into-silence/
  code: https://github.com/williamzqliu/ripples-into-silence
cover:
  wide: /media/ripples-into-silence/cover-wide.webp
  tone: dark
  alt: The silhouette of Lampedusa in mourning yellow against deep navy, with a dashed 50 kilometre radius drawn around it.
quickFacts:
  - label: "Role"
    value: "Information Designer & Developer"
  - label: "Outcome"
    value: "Interactive scrollytelling experience"
credits:
  skills:
    - Information design
    - Data visualization
    - Scrollytelling
    - Interaction design
    - Creative development
  tools:
    - D3.js
    - JavaScript
    - Python
    - SVG
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
  # Two rows, which is not enough to be worth closing.
  collapse: false
---

## The version that did not work

The first version tried to show the entire Mediterranean at once. Twenty countries of
origin sat along the bottom, six transit countries in the middle, and five European
destinations at the top. Arcs encoded routes, causes of death, and the number of
people lost.

<figure>
  <img
    src="/media/ripples-into-silence/northbound.webp"
    alt="Northbound: A Deadly Voyage. An arc diagram on a charcoal ground, with country silhouettes in three tiers and coloured arcs labelled with death counts running from North Africa and Türkiye toward Spain, Italy and Greece."
    width="2400"
    height="1349"
    loading="lazy"
    decoding="async"
  />
  <figcaption><em>Northbound: A Deadly Voyage</em>, the first version</figcaption>
</figure>

It presented the data but gave the reader nowhere to enter the story. Every design
decision in it was about fitting the dataset onto the screen, and none was about the
person reading. So I stopped refining it and started over from the same source.

## Choosing 50 kilometres

Lampedusa gave the project a geographic anchor. The island sits between North Africa
and mainland Italy, 130 kilometres from Tunisia, on one of the central Mediterranean
migration routes.

I filtered the IOM dataset to incidents recorded within 50 kilometres of the island.
That left 94 incidents between 2014 and 2024, accounting for 703 people dead or
missing.

I calculated the distance from each incident to the island in Python. At first the
distance was only a filter. It became one of the main visual variables in the piece,
because every one of these journeys ended somewhere between the edge of that circle
and the shore.

## Building the narrative

I structured the experience as six scenes rather than as a dashboard, and only one is
on screen at a time. The next scene stays hidden until its top edge comes up the
screen, then crossfades with the one before it, scrubbed by the scroll: a reader who
stops half way holds the fade half way. In an earlier build each section scrolled in
under the last, and the next heading came up the screen while the reader was still
in the one before.

I put the record first. A reader watches all 94 incidents arrive before Why Lampedusa
explains the island, the corridor and the 50-kilometre frame, one pinned step at a
time beside its diagram. After that, 11 Years compares the years, and In 2024 takes
the year with the most lives lost down to single people before the epilogue.

<div class="media-pair">
  <figure>
    <img
      src="/media/ripples-into-silence/tunisian-corridor.webp"
      alt="The Why Lampedusa scene: a paragraph on the Tunisian Corridor pinned beside a diagram of the route from Sfax to Lampedusa."
      width="1984"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Tunisian Corridor</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ripples-into-silence/eleven-years.webp"
      alt="Eleven small discs, one per year from 2014 to 2024, in rows of four, three and four, each with its incident and death counts beneath it."
      width="1984"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>11 Years</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ripples-into-silence/in-2024.webp"
      alt="A close-up grid of yellow dots with one white dot among them, under the sentence: 660 people set out for Lampedusa in 2024 and reached this water. One dot is one person."
      width="1984"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>2024 in context</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ripples-into-silence/epilogue.webp"
      alt="The epilogue: eight short paragraphs ending on But 206 did not, beside a shaded relief of Lampedusa with the town marked in red, and the credits beneath."
      width="1984"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Final scene</figcaption>
  </figure>
</div>

## Encoding distance and loss

The animation uses two primary encodings. Ripple size represents the number of people
dead or missing in an incident, and radial position represents its recorded distance
from Lampedusa.

<!-- Recorded from the live piece in headless Chrome at 1600 by 900: the
     first two incidents of the record, from launch to ripple, with the
     counters and the year bar moving. Seconds 12.5 to 24.5 of a full run. -->
<figure>
  <video
    src="/media/ripples-into-silence/record-loop.mp4"
    width="1240"
    height="900"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="An incident path travels in from the dashed 50 kilometre circle toward the cross that marks Lampedusa, its distance counting down beside it, and ends as a ripple while the incident and death counters go up. A second path follows."
  ></video>
  <figcaption>Incident paths near Lampedusa</figcaption>
</figure>

I fixed the distance scale to the frame, so an incident recorded at 50 kilometres
lands on the dashed circle and the 25 and 10 kilometre rings are read off the same
ruler as the marks. An incident 12 kilometres from the island therefore lands visibly
closer than one recorded 48 kilometres away. Angle carries no data. I assigned it by
walking the golden angle, 137.5 degrees, down the incidents in order of distance, so
marks at similar distances land on opposite sides of the island. That took the share
of landing points overlapping another one from more than half of the 94 to under a
fifth.

In 11 Years I drew each year as its own copy of the same disc with the same two
rules, so the years can be compared by where their marks fall and how large they are.
Any disc opens at full size with its rings and the figures for each mark.

<figure data-width="prose">
  <img
    src="/media/ripples-into-silence/disc-2024.webp"
    alt="The 2024 disc opened large: nineteen white marks of different sizes inside dashed rings labelled 10, 25 and 50 km, beside the year's totals of 19 incidents and 206 dead or missing."
    width="1560"
    height="1080"
    loading="lazy"
    decoding="async"
  />
  <figcaption>2024 opened large: distance from the cross, and size for the people lost</figcaption>
</figure>

In 2024 keeps one dot for one person the whole way through. The 45,997 people who
reached Lampedusa that year, a figure from the Italian Red Cross, share one field with
the 206 who did not. I open it close up on a few hundred people, then draw back until
all 46,203 are on screen and the white dots can no longer be picked out. The arrivals
then fade and the 206 sort themselves by cause of death. Nothing is rescaled between
those steps.

<details>
<summary>Engineering notes</summary>

About 3,200 lines of JavaScript across 28 ES modules, 1,400 of CSS and 270 of
markup. D3 handles the scales, selections and transitions; the record and the discs
are SVG, and the 46,203 dots of 2024 are drawn on a canvas. There is no framework and
no build step, so the repository is exactly what is published. EB Garamond is
self-hosted.

The code is organised the way the page is: one stylesheet and one script per scene,
with the crossfade, the float-in for prose and the navigation shared between them.
The record's modules each do one job, from the island reveal and the release schedule
to a single path and its ripple, and every tunable number for it sits in one
configuration file.

Path animation used to advance by a fixed amount on every `requestAnimationFrame()`
callback, so it ran at the display's refresh rate: a path took about 417 ms to travel
on a 60Hz screen and 208 ms on a 120Hz one. It now advances by elapsed time, with each
step capped at 50 ms so a tab returning from the background does not jump a path
forward.

</details>

## Making the pacing carry meaning

I did not want all 94 incidents to arrive at the same pace.

The first few appear slowly, giving the viewer time to understand that one path
represents one incident and to watch its distance count down to where it was
recorded. The interval then shortens, and by the later years several paths are
moving at once.

<div class="media-pair">
  <figure>
    <img
      src="/media/ripples-into-silence/record-early.webp"
      alt="Early in the record: one ripple inside the 10 kilometre ring and one path on its way in, labelled 15.40 km, with the counters at 1 incident and 4 dead or missing."
      width="1240"
      height="900"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Early: one incident at a time</figcaption>
  </figure>

  <figure>
    <img
      src="/media/ripples-into-silence/record-late.webp"
      alt="Later in the record: dozens of ripples across the circle and several paths still arriving, with the counters at 74 incidents and 458 dead or missing and the year bar at 2023."
      width="1240"
      height="900"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Later: 74 incidents in, by 2023</figcaption>
  </figure>
</div>

The growing density is part of the finding. Instead of only reading that recent years
contain more incidents, the viewer watches the circle fill. I also made the record wait
for the reader: when less than half of it is on screen, it holds where it is.

<details>
<summary>How the pacing works</summary>

The first incident leaves 3 seconds after the counters and the year bar come up. The
first three are released 6 seconds apart and travel at a quarter of the normal speed,
with their distance counting down beside them.

After that a scheduler releases the rest with at least 400 ms between launches and no
more than five paths in flight at once. It takes them in turn from 20 angular
sectors, so consecutive incidents arrive from different directions. The remaining 91
go out in about 40 seconds.

Every delay counts only the time the record is on screen, and the scheduler stops
while it is not. All of these values live in `js/config.js`.

</details>

## What I took from it

The hardest part was not the code or the visual system. It was deciding what not to
show.

My first version tried to honour the dataset by representing as much of it as
possible. The result showed everything and said very little. Narrowing the project to
one island and one radius meant discarding almost all of the source data, but that
reduction is what gave the final piece a point of view.

The first version was still useful because it made the problem visible. Sometimes
drawing the version you suspect is wrong is the fastest way to understand why it is
wrong.
