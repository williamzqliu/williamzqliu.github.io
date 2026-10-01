---
title: What’s Going on in There?
year: 2024
dates: Nov 2024 – Dec 2024
blurb: A participatory exhibit using question cards, rubber bands, and a physical brain map to introduce sleep and caffeine science to college students.
tags: [interactive]
tracks: [design]
category: interfaces-experiences
published: true
stack:
  - Figma
  - FigJam
  - Adobe Illustrator
links: {}
cover:
  # The room rather than the artefact. A flat photograph of the panels shows
  # what was designed; this shows that it was built, installed and used, which
  # is the thing a reader cannot infer from a layout.
  wide: /media/whats-going-on-in-there/cover-wide.webp
  tone: light
  alt: The exhibit on an easel in a gallery room, with visitors standing around its panels, brain map, and colored rubber bands.
quickFacts:
  - label: "Role"
    value: "Content research, interaction prototyping, and exhibit graphics"
  - label: "Outcome"
    value: "Interactive educational exhibit"
credits:
  skills:
    - Information design
    - Exhibit design
    - Interaction design
    - Physical prototyping
    - User testing
  tools:
    - Figma
    - FigJam
    - Adobe Illustrator
  # The four students as one row with no group label, so the credits do not
  # file the design under one name; who did what is in Role and the prose.
  team:
    - people:
        - Zhuoqi Liu
        - Carmen Quintos
        - Yi-Ting Chen
        - Ravi Prasad
    - group: Faculty guidance
      people:
        - Sheila Pontis
  collapse: false
---

## What a visitor does

Our four-person team built a participatory exhibit about sleep, caffeine, and the brain
for college students. I researched caffeine's effects on brain regions using published
papers, built and debugged the interaction prototypes, and designed the brain diagram,
question cards, and exhibit panels.

The deck contains 12 questions, and visitors could answer as many as they wanted. Across
the cards, A was red, B yellow, C green, and D blue.

<ol class="process-steps">
  <li>
    <p class="process-steps__num">01</p>
    <p class="process-steps__name">Answer a question</p>
    <p class="process-steps__note">Choose the answer closest to your habits and remember its color. Turn the card over to read about the two brain regions it names.</p>
  </li>
  <li>
    <p class="process-steps__num">02</p>
    <p class="process-steps__name">Connect the regions</p>
    <p class="process-steps__note">Take a rubber band in your answer’s color and loop it around the two corresponding pins on the brain map.</p>
  </li>
  <li>
    <p class="process-steps__num">03</p>
    <p class="process-steps__name">Read the results</p>
    <p class="process-steps__note">Read the result card for the color you used most and leave a matching sticker on the shared board. For a tie, you could read both result cards and consider which description felt more relevant to your habits.</p>
  </li>
</ol>

<figure>
  <img src="/media/whats-going-on-in-there/card-final.webp"
    alt="Front and back of a sleep-schedule question card, with four color-coded answers and instructions to connect the amygdala and prefrontal cortex."
    width="1968" height="1376" loading="lazy" decoding="async" />
  <figcaption>A sleep-schedule question and the two brain regions named on its reverse</figcaption>
</figure>

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 0.750fr 1.333fr">
  <figure>
    <img src="/media/whats-going-on-in-there/brain-board.webp"
      alt="A brain diagram with labeled regions, pins linked by colored rubber bands, and spare bands hanging below."
      width="1024" height="1365" loading="lazy" decoding="async" />
    <figcaption>The labeled brain map with visitors’ rubber-band connections</figcaption>
  </figure>
  <figure>
    <img src="/media/whats-going-on-in-there/visitor.webp" data-nozoom
      alt="A visitor at the exhibit holding red rubber bands up to the brain map."
      width="1080" height="810" loading="lazy" decoding="async" />
    <figcaption>A visitor connecting regions on the brain map</figcaption>
  </figure>
</div>

This was a science-communication activity, not a validated assessment of brain function
or health. The bands recorded answers to the activity's questions.

## Choosing a flat brain map

Ravi proposed connecting pins with colored rubber bands. I built and debugged prototypes
of the mechanism, including a flat cork-board version and a standing model made from
foam.

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 1.194fr 1.724fr">
  <figure>
    <img src="/media/whats-going-on-in-there/prototype-flat.webp"
      alt="A printed brain diagram on cork board, with labeled regions, colored pins, and rubber bands connecting the pins."
      width="2760" height="2312" loading="lazy" decoding="async" />
    <figcaption>Flat prototype on cork board</figcaption>
  </figure>
  <figure>
    <img src="/media/whats-going-on-in-there/prototype-standing.webp"
      alt="Foam pieces labeled with brain regions, mounted on wooden skewers, with a pin in each piece."
      width="3000" height="1740" loading="lazy" decoding="async" />
    <figcaption>Standing prototype made from foam</figcaption>
  </figure>
</div>

Our team discussed both formats and chose a flat panel for the exhibition. The choice
considered how much visitors would need to learn before using the mechanism, as well as
the time and cost of fabrication.

## Coordinating cards and panels

We narrowed a broad topic about food and health to sleep and caffeine. I designed the
brain diagram, question cards, and panels together so visitors could move from a question
to its explanation and the matching labels on the board.

We tested the prototypes in multiple rounds. Testers included neuroscience students,
first-year college students, and our design cohort. Their feedback informed changes to the
interaction sequence, the paths through the exhibit, and the order of content across the
materials.

<!-- Two frames of testing sessions, in their own aspect ratios. -->
<div class="media-pair" style="--pair-split: 0.750fr 1.333fr">
  <figure>
    <img src="/media/whats-going-on-in-there/testing-cards.webp" data-nozoom
      alt="A tester reading a question card beside the deck, rubber bands, and brain-map prototypes."
      width="512" height="683" loading="lazy" decoding="async" />
    <figcaption>A tester reading the question cards</figcaption>
  </figure>
  <figure>
    <img src="/media/whats-going-on-in-there/testing-model.webp" data-nozoom
      alt="A tester attaching a rubber band to the standing foam prototype, with a card layout open on a laptop behind it."
      width="1024" height="768" loading="lazy" decoding="async" />
    <figcaption>A tester using the standing prototype</figcaption>
  </figure>
</div>

I revised the cards and panels as the team adjusted the flow from answering a question to
connecting regions and reading the results. The three-panel layout placed the
introduction, brain map, and activity instructions side by side.

I also explored a comic direction for the panels. With the exhibition approaching, our
team discussed the time and production costs and chose to finish the simpler layout.

<details>
<summary>The comic direction</summary>

<figure>
  <img src="/media/whats-going-on-in-there/panel-v4.webp"
    alt="An unfinished panel layout with a cartoon brain, speech bubbles, and sections about caffeine and sleep."
    width="3000" height="1500" loading="lazy" decoding="async" />
  <figcaption>Unfinished comic direction explored before the team chose the simpler layout</figcaption>
</figure>

</details>

## At the exhibition

At the exhibition, we saw visitors work through the activity on their own: answering
cards, connecting regions, reading results, and leaving stickers on the shared board.

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 1.413fr 1.395fr">
  <figure>
    <img src="/media/whats-going-on-in-there/exhibition-panels.webp"
      alt="The installed exhibit with three panels, a brain map, question-card holders, rubber bands, and the sticker board."
      width="2048" height="1449" loading="lazy" decoding="async" />
    <figcaption>The exhibit as installed</figcaption>
  </figure>
  <figure>
    <img src="/media/whats-going-on-in-there/sticky-notes.webp"
      alt="Handwritten visitor comments below the exhibit, beside the shared sticker board and result-card holder."
      width="1024" height="734" loading="lazy" decoding="async" />
    <figcaption>Handwritten comments left beside the exhibit</figcaption>
  </figure>
</div>

Visitors also left handwritten comments beside the exhibit. I read these as informal
reactions to the activity. We did not track visitor counts, completion times, or what
participants remembered afterward, so the exhibition provides no measure of learning gains
or habit change.
