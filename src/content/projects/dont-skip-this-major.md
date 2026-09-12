---
title: "Don’t Skip This Major"
year: 2025
dates: "Jan 2025 – Apr 2025"
blurb: "A poster introducing information design to Chinese parents navigating the Gaokao and university application process."
tags: ["information-design"]
tracks: ["design"]
published: false
# Same shape as the other information design projects: no contents rail, so
# the article column runs the full width and the figures get it.
compact: true
featured: 13
draft: false
stack:
  - Figma
  - Adobe Illustrator
links: {}
cover:
  # A card of its own rather than a slice off the poster: the poster is 2:3
  # and every 16:9 crop of it is a crop.
  wide: "/media/dont-skip-this-major/cover-wide.webp"
  # No picture in the head: the opening image is the two editions side by
  # side, which one `<img>` cannot be. The pair is the first block of the body
  # instead. It also solves the height, since one 2:3 poster at full column
  # width runs past a viewport and two at half width do not.
  heroInBody: true
  tone: "light"
  alt: "An illustration in pale blue: a parent and a student stand at the near end of a path that forks into three, each fork ending at an arched doorway holding a bar chart, a pen nib and a globe."
quickFacts:
  - label: "Role"
    value: "Information Designer"
  - label: "Outcome"
    value: "Bilingual information poster"
credits:
  skills:
    - Information design
    - Information architecture
    - Editorial layout
    - Bilingual typesetting
  tools:
    - Figma
    - Adobe Illustrator
  team:
    - group: Design
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Ashley Treni
---

<!-- The opening image: both editions, side by side. Equal columns because the
     two share an aspect, so the row is level with nothing cropped, and half a
     column each keeps a 2:3 poster inside one viewport. -->

<figure>
  <div class="media-pair">
    <img
      src="/media/dont-skip-this-major/final-chinese.webp"
      alt="The finished poster in Chinese, in blue and grey. A left column steps down through the Gaokao, the score release, choosing a major, the application, the wait and admission; a wide band across the middle runs from Explore majors to Information design to Careers with impact; the centre and right columns explain what the field is, what a student learns, and where the degree leads."
      width="1800"
      height="2782"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/dont-skip-this-major/final-english.webp"
      alt="The same poster in English, with the identical three-column structure and the same band across the middle."
      width="1800"
      height="2782"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>The final poster in both editions. Sources are printed in the top right corner.</figcaption>
</figure>

This was the final project for Information Design Theory and Critical Thinking. The brief asked for one large poster explaining information design to someone unfamiliar with the field. I chose parents of Chinese students preparing for the Gaokao, who are helping their children choose a university major.

<!-- The reading guide sits between the poster and the first numbered section
     because it explains the picture directly above it. It is a bold-lead
     block rather than a heading: `.prose h2` carries the section counter, so
     a heading here would number itself 01 and push the two real sections to
     02 and 03. There is no h3 in the design system, and a lead in bold is how
     this article already titles a block of prose. -->

**How the final poster reads.** A horizontal band connects three stages across the poster. The left column follows the familiar path from the Gaokao to university admission, the center explains information design, and the right follows the major into careers and social impact.

The tone shifts with the structure: procedural on the left, explanatory in the center, and future-facing on the right. Parents enter through a process they already understand before encountering a field they may not.

## Designing for parents

Rather than starting with a definition of information design, I organized the poster around questions a parent might actually ask: What is this major? What will my child learn? Who is it for? Where can it lead?

## Finding the structure

I drew the first version as a literal path, a numbered trail winding down the page. It gave the reader a route to walk and the content almost no hierarchy. Across four versions, I replaced that path with three zones: the application journey, the major, and what comes after it.

Version 04 shows that structure before the content was filled in. Two columns were still empty, but the layout itself had stopped changing.

<!-- The four versions as a real sequence rather than a before and after: the
     structural change is the argument of this section, and it takes all four
     to see it. Equal columns because the four share an aspect. -->

<div class="media-pair" style="--pair-split: repeat(4, minmax(0, 1fr))">
  <figure>
    <img
      src="/media/dont-skip-this-major/version-01.webp"
      alt="Version 01: a numbered puzzle trail winding down a white page, with seven stops carrying questions such as what is information design and what will my child learn, and loose circles of colour scattered around them."
      width="1200"
      height="1855"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 01</figcaption>
  </figure>

  <figure>
    <img
      src="/media/dont-skip-this-major/version-02.webp"
      alt="Version 02: three columns headed by the Gaokao steps on the left, Majors in the centre and Professions on the right, with a large circle diagram placing information design among neighbouring fields."
      width="1200"
      height="1855"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 02</figcaption>
  </figure>

  <figure>
    <img
      src="/media/dont-skip-this-major/version-03.webp"
      alt="Version 03: the same three columns now labelled Today, Tomorrow and After tomorrow across the top, with the application steps on the left, the skills and principles of the field in the centre, and job titles on the right."
      width="1200"
      height="1855"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 03</figcaption>
  </figure>

  <figure>
    <img
      src="/media/dont-skip-this-major/version-04.webp"
      alt="Version 04: the structure alone, with the left column filled in and the other two left empty under the words Tomorrow and After tomorrow, and a band across the middle reading Explore majors, Information design, A brighter future."
      width="1200"
      height="1855"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 04</figcaption>
  </figure>
</div>

<!-- CLOSED, so a later pass does not raise them again:

     Tools. Figma and Adobe Illustrator, both now in `stack` and in credits.

     The cover illustration. Asked whether it needed a provenance note in
     credits the way Witness carries one; the answer was no. Recorded here
     rather than dropped, so the question is not reopened.

     The sources. They turned out to be the course reading list rather
     than data sources, eleven titles from Buchanan to Sless printed under
     `Designed by Zhuoqi Liu` in the top right corner. Nothing on this page
     states a figure that needs citing, so there is no `Sources` paragraph to
     write; the poster carries its own bibliography and the head shows it at
     full size.

     REMOVED: three detail crops of the Chinese poster, one per column, which
     sat under a third numbered section. That section is now the unnumbered
     reading guide above Section 01, and it carries no media because the
     poster it describes is directly above it. The masters are still in
     media-src/, so the crops are one pass away.

     PARKED, and deliberately not written:

     The brief says `through user research you will test the poster
     understanding and refine the final deliverable`. Nothing on this page
     claims that testing happened or that any change came from it, because the
     brief is an instruction rather than evidence. If there were readers, what
     is worth writing is the specific thing that changed because of them: a
     sentence in Section 02 naming the feedback and the structural change it
     caused. Without that, `user research showed` would be the page's only
     unverifiable claim.
-->
