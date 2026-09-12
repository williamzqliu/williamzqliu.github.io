---
title: "Lumitex"
year: 2023
dates: "Sep 2023 – Nov 2023"
blurb: "An AR reading-aid prototype shaped by research with children with dyslexia and their parents."
tags: ["interactive"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "AR design"
compact: true
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
  # list excludes archive, and the landing page needs a `featured` rank this
  # project does not have, so `wide` is read by the head alone.
  wide: "/media/lumitex/cover-wide.webp"
  heroWhole: true
  tone: "light"
  alt: "A child crouching in grass beside a butterfly on a flower, with a translucent panel floating in front of the scene that names the species and offers a few controls."
quickFacts:
  - label: "Role"
    value: "Designer"
  - label: "Outcome"
    value: "AR reading-aid prototype"
credits:
  skills:
    - Information design
    - User research
    - Interaction design
    - Accessibility design
    - AR prototyping
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

## Beyond reading difficulty

I began the project after briefly wondering whether my own difficulty with dense text might be dyslexia. A later evaluation showed that it was not. What the research turned up instead was that reading difficulty is only part of the problem, and the rest of it is social.

<!-- The interview cards are not on this page. At the article column that strip
     was 183px tall and the words inside it were unreadable; what the page
     needs is the words, so they are set in its own type instead. Three of them
     rather than one, because the finding is that three positions describe
     three different problems: the adult looking back, the child still in it,
     and the parent watching.

     Named and shown on the panel; de-identified here. One of the three is
     eleven years old.

     `.participant-quote` says not to stack several into a gallery. The rule is
     aimed at a run of quotes all making the same point, which is a results
     chapter; here the difference between them is the point. -->

<div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
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

A second child in the same position would only have confirmed the first. Choosing three people in three positions is what changed the brief from making text easier to read to supporting reading without treating the child as the problem.

## Designing for child and parent

I surveyed 27 children with dyslexia and their parents at a primary school in Hangzhou, and asked both groups what kind of help they wanted.

<!-- The bars and the conclusion box from the panel, rebuilt out of the two
     patterns the site already has rather than shipped as a picture: the strip
     for the three figures, the callout for what sits under them. A picture of
     a bar chart cannot be selected, read aloud, or set in the page's own type,
     and this ranking is three numbers rather than a shape worth drawing. -->

<div class="stat-strip" data-cols="3">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">85.2%</p>
    <p class="stat-strip__label">Game-based training to improve performance</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">77.8%</p>
    <p class="stat-strip__label">Accessible reading with emotional support</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">55.6%</p>
    <p class="stat-strip__label">New technology to enhance the experience</p>
  </div>
</div>

> **Not the ranking**
>
> The children asked for novelty and colour. Their parents asked for something practical they could do with their child.

Instead of averaging the two answers, I used them to define two kinds of support: immediate help while reading, and longer-term activities that could build confidence and skills.

<figure>
  <div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
    <img
      src="/media/lumitex/school-reading.webp"
      alt="A pupil reading a Chinese language textbook aloud at their desk, face redacted, with classmates working behind them."
      width="1600"
      height="900"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/lumitex/school-child.webp"
      alt="A pupil at a desk holding up a hand mid-answer, face redacted."
      width="1600"
      height="900"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/lumitex/school-room.webp"
      alt="The classroom from the back: rows of pupils seen from behind, facing a teacher at a smartboard."
      width="1600"
      height="900"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>The survey ran in classrooms rather than online. Hangzhou, October 2023.</figcaption>
</figure>

## Assisting the page, not replacing it

I chose AR because the difficulty happens on the page itself. Moving the text into a separate app would replace the reading surface; an overlay could assist it while keeping the book in place.

The prototype explored four modes. Reading Mode opened up the spacing and coloured word groups by their function. Focus Mode isolated one line at a time. Training Mode added game-based exercises for literacy and for attention. Interest Mode connected reading to things the child could explore outside the book.

<!-- The four modes as one block rather than one after another: they share an
     aspect exactly, so two columns fall into two rows on their own and the set
     reads as a set. These are mockups rather than a device running, and the
     captions say only which mode each one is.

     Provenance: the scenes are my own compositions, built partly from sourced
     base imagery, and credits says so. -->

<div class="media-pair">
  <figure>
    <img
      src="/media/lumitex/mode-reading.webp"
      alt="Reading Mode over a picture book spread: two panels of widely spaced text sit on the illustration, with word groups tinted by function, and a small toolbar floats above."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Reading Mode</figcaption>
  </figure>

  <figure>
    <img
      src="/media/lumitex/mode-focus.webp"
      alt="Focus Mode: a single sentence held on a pale panel with the rest of the page blurred away behind it, one word underlined and marked with a footnote."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Focus Mode</figcaption>
  </figure>

  <figure>
    <img
      src="/media/lumitex/mode-training.webp"
      alt="Training Mode: a five by five Schulte grid laid over a real table top, with a start button and a timer beside it."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Training Mode</figcaption>
  </figure>

  <figure>
    <img
      src="/media/lumitex/mode-interest.webp"
      alt="Interest Mode in a library aisle: a label reading Astronomy Experience Area sits ahead of the reader, with a distance of eight metres and an arrow pointing straight on."
      width="1400"
      height="916"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Interest Mode</figcaption>
  </figure>
</div>

In hindsight, I spread the concept too far. Four modes produced twenty features, and I stopped short of a version any child could try. If I revisited the project, I would narrow it to Reading and Focus Modes and test those first.

<!-- The two structure diagrams side by side rather than one in each section:
     apart they are a plan and a spec, together they are the drift. Columns
     take each one's own aspect, so the row is level with nothing cropped. -->

<figure>
  <div class="media-pair" style="--pair-split: 1.0458fr 1.9881fr">
    <img
      src="/media/lumitex/mind-map.webp"
      alt="A mind map with dyslexia at the centre of a ring divided into three equal arcs: emotional support, assistive reading and ability training, each carrying its own cluster of ideas."
      width="1600"
      height="1530"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/lumitex/information-architecture.webp"
      alt="The information architecture: Lumitex branches into Reading, Focus, Training and Interest Mode, and each mode carries four or five features of its own, twenty in total."
      width="2000"
      height="1006"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Three balanced branches, and the twenty features they became.</figcaption>
</figure>

<!-- PARKED from the application-portfolio version this rebuild replaces.

     1. The opening statistics: prevalence from 5 to 17 percent globally, on
        the order of 15 million children in China, an optimal intervention age
        of around six, and sex ratio and comorbidity figures. All secondary
        sources. They made the page read as a medical research report, and
        none of them is what the design decisions rest on.
     2. The three interviews in full. Leif, 22, dyslexic, studying media
        production in Toronto, looking back on childhood with a self-image
        already rebuilt. Qun Xiao, 11, dyslexic, in the middle of it,
        describing memorising a single word forty or fifty times. Mrs. Feng,
        43, Qun Xiao's mother, talking about an exam-oriented system in which
        a score is the only measure of a child. The structural point is worth
        keeping somewhere: three people chosen to disagree with each other
        produced the finding the project rests on, where two dyslexic children
        would have said the same thing twice.
     3. The competitive analysis of three existing products, grouped into
        functions, forms and experiences.
     4. Training Mode in detail: RAVE-O is the intervention model with the
        strongest evidence base and it is a phonological programme built for
        English, so the exercises were rebuilt around orthography and stroke
        order rather than translated. Schulte grids, stroke-order guidance,
        Chinese character puzzles.
     5. `Key decisions`: emotional support sitting alongside ability training
        rather than underneath it, with Mental Sandbox and Emotion Records
        existing to make a child's emotional state visible rather than to
        drive engagement; and writing the negative evaluation result into the
        deliverable rather than letting the project read as first-person.
     6. The `Where this project falls short` disclosure: nothing about the
        solution was validated, and the prototype-testing photograph in the
        panels has no surviving record of what was tested or with whom; AR
        hardware feasibility was never argued, and 2023 headsets were wrong
        for eight to twelve year olds on weight, price, field of view and safe
        wear time; twenty features from one person in three months is scope
        failure. Section 03 now carries the scope point in one paragraph.
     7. Data sources: prevalence, sex ratio, comorbidity and intervention-age
        figures are secondary; the RAVE-O model and the WRMT-R Word Attack
        comparison are third-party research, credited on the panel to
        nidolearning.com/RAVE-O.
     8. `Outcome`: six panels, a full research chain, a four-mode concept with
        AR prototypes and 3D models. No validation, no deployment, never
        exhibited, made for a graduate application portfolio.

     PANEL DEFECTS, if any of the old boards are ever exported as source:
     - Panel 3-6 reads `Mental Sanbox`; it should be Mental Sandbox.
     - Panel 3-2 lays out two published quotations as headshot-plus-quote,
       which reads as an interview. Each needs a source line.
-->
