---
title: "Lumitex"
year: 2023
dates: "Sep 2023 – Nov 2023"
blurb: "An untested AR reading-support concept for children with dyslexia, informed by interviews and a school questionnaire in Hangzhou."
tags: ["interactive"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "AR design"
draft: false
stack:
  - Reality Composer
  - Nomad
  - Procreate
  - Figma
cover:
  # The head takes the Interest Mode scene. `heroWhole` keeps its own 16:9
  # rather than cropping it to the head's 2.1:1 banner. There is no card to
  # feed: ArchiveList renders title, label and year with no cover, the curated
  # list excludes archive, and the landing page shows only the projects in
  # SELECTED_ORDER (src/lib/projects.ts), which skips archive projects, so
  # `wide` is read by the head alone.
  wide: "/media/lumitex/cover-wide.webp"
  heroWhole: true
  tone: "light"
  alt: "A child crouching in grass beside a butterfly on a flower, with a translucent panel floating in front of the scene that names the species and offers a few controls."
  caption: "Interest Mode explores learning beyond the book as part of the four-mode concept."
quickFacts:
  - label: "Role"
    value: "Research, interaction design, and visual prototyping"
  - label: "Outcome"
    value: "Four-mode AR concept and visual mockups"
credits:
  skills:
    - Information design
    - User research
    - Interaction design
    - Accessibility design
    - Visual prototyping
  tools:
    - Figma
    - Reality Composer
    - Nomad
    - Procreate
  # `Roles` rather than `Team`, and `Portfolio guidance` rather than `Faculty
  # guidance`, following comgrand and emoease: the same tutor and the same
  # panel series, and the repo already records that he advised on how the work
  # is presented rather than on the work itself. This project was made for a
  # graduate application portfolio, which is the presentation he advised on.
  teamLabel: Roles
  team:
    - group: Design and research
      people:
        - Zhuoqi Liu
    - group: Portfolio guidance
      people:
        - Vince Ye
  # Stated because the page cannot otherwise answer `which parts are yours`.
  # The scenes are composited by me; some of what is inside them is not drawn
  # by me. Sharpen this if a specific asset turns out to need crediting by
  # name, the way Witness credits its stock vector.
  note: "The AR scenes are my own compositions, built partly from sourced base imagery."
  collapse: false
---

## Three perspectives changed the brief

I interviewed an adult with dyslexia, a child with dyslexia, and the child's mother. I also conducted a questionnaire at a primary school in Hangzhou, where children and parents answered together.

<!-- `data-stack` on a phone, which is the one opt-out the row has. A picture
     at a third of a phone screen is a small picture; a paragraph at a third of
     a phone screen is a ladder of one and two words, and the longest word in
     these three is wider than the column it is in. The rule that a row beats
     stacking is a rule about pictures, and this is the case it was written to
     make an exception for. -->

<div class="media-pair" data-stack style="--pair-split: repeat(3, minmax(0, 1fr))">
  <blockquote class="participant-quote">
    <p>“I hope that parents will create an environment in which their children can build up their self-confidence.”</p>
    <cite>Adult with dyslexia, 22</cite>
  </blockquote>

  <blockquote class="participant-quote">
    <p>“I keep asking myself why others can remember words at a glance, but I have to memorize them forty or fifty times.”</p>
    <cite>Child with dyslexia, 11</cite>
  </blockquote>

  <blockquote class="participant-quote">
    <p>“I can understand him, but others can’t. As parents, we can only try our best to protect him.”</p>
    <cite>The child’s mother, 43</cite>
  </blockquote>
</div>

I chose these perspectives to explore reading difficulty, confidence, and the support surrounding a child. I used them to frame two directions: immediate help during reading and activities for practice and confidence building.

<figure data-width="prose">
  <img
    src="/media/lumitex/school-room.webp"
    data-nozoom
    alt="A classroom viewed from the back, with pupils facing a teacher at an interactive board."
    width="1600"
    height="900"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The questionnaire took place at a primary school in Hangzhou.</figcaption>
</figure>

## Assisting the page, not replacing it

I chose AR to explore support on the physical reading surface. A separate app would move the text away from the book; an overlay could add assistance while keeping the page in place.

The Reading and Focus mockups show two ways of adding support to the page. I used English demonstration text because the project was prepared for overseas graduate-school applications.

<div class="media-pair">
  <figure>
    <img
      src="/media/lumitex/mode-reading.webp"
      alt="A Reading Mode mockup over a picture book spread, with two panels of widely spaced text, colored word groups, three-dimensional objects, and a toolbar."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Reading Mode explores wider spacing and color-coded word groups within a page overlay.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/lumitex/mode-focus.webp"
      alt="A Focus Mode mockup showing a sentence on a pale panel, with the background blurred and a word underlined beside an explanation marker."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Focus Mode isolates a sentence and marks selected text for an explanation.</figcaption>
  </figure>
</div>

## Where the concept outgrew the evidence

In hindsight, I spread the concept too far. The information architecture grew to four modes and 18 proposed features, and I stopped short of a version a child could try.

<!-- The two structure diagrams side by side: apart they are a plan and a
     spec, together they show the scope growing. Columns take each one's own
     aspect, so the row is level with nothing cropped; stacked on a phone. -->

<figure>
  <div class="media-pair" data-stack style="--pair-split: 1.0458fr 1.9881fr">
    <img
      src="/media/lumitex/mind-map.webp"
      alt="A mind map with dyslexia at the center, divided into emotional support, assistive reading, and ability training, with ideas grouped around each area."
      width="1600"
      height="1530"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/lumitex/information-architecture.webp"
      alt="An information architecture diagram with four modes (Reading, Focus, Training, and Interest) containing 18 proposed features in total."
      width="2000"
      height="1006"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>The mind map groups three areas of support; the information architecture expands them into four modes and 18 proposed features.</figcaption>
</figure>

I did not test the concept with children or validate AR hardware feasibility. If I revisited the project, I would develop and test Reading and Focus first, using a smaller set of functions to assess the basic reading task.

<details>
<summary>Training and Interest Modes</summary>

Training and Interest extended the concept into activities and learning beyond the reading page. These additional mockups document the broader scope.

<div class="media-pair">
  <figure>
    <img
      src="/media/lumitex/mode-training.webp"
      alt="A Training Mode mockup showing a five-by-five number grid over a tabletop, with a start button and a timer."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Training Mode proposes a timed number-grid activity.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/lumitex/mode-interest.webp"
      alt="An Interest Mode mockup in a library aisle, with an Astronomy Experience Area label, a distance marker, and forward arrows."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Interest Mode proposes navigation to a library learning area.</figcaption>
  </figure>
</div>

</details>
