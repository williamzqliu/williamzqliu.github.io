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

<ol class="process-steps" data-stack>
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
    <p class="process-steps__name">Read and reflect</p>
    <p class="process-steps__note">Read the result card for the color you used most, consider its reflection prompts, and leave a matching sticker on the shared board.</p>
  </li>
</ol>

Colors recorded the answers visitors chose. Result cards provided related science information
and prompts for reflecting on sleep and caffeine habits. Visitors could also read two result
cards when colors were tied.

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 1.430fr 1.424fr">
  <figure>
    <img src="/media/whats-going-on-in-there/card-final.webp"
      alt="Front and back of a sleep-schedule question card, with four color-coded answers and instructions to connect the amygdala and prefrontal cortex."
      width="1968" height="1376" loading="lazy" decoding="async" />
    <figcaption>A sleep-schedule question and the two brain regions named on its reverse</figcaption>
  </figure>
  <figure>
    <img src="/media/whats-going-on-in-there/result-final.webp"
      alt="Front and back of the red result card, with sleep and caffeine facts and three reflection questions."
      width="2512" height="1764" loading="lazy" decoding="async" />
    <figcaption>A red result card with science information and reflection prompts</figcaption>
  </figure>
</div>

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" data-stack style="--pair-split: 0.750fr 1.333fr">
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

We narrowed a broad topic about food and health to sleep and caffeine. I used the same
brain-region names in the card explanations and on the board so visitors could locate the
regions to connect.

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
connecting regions and reading the results.

<figure>
  <img src="/media/whats-going-on-in-there/panel-final.webp"
    alt="Three exhibit panels with an introduction on the left, a labeled brain map in the center, and illustrated activity instructions and a sticker area on the right."
    width="3000" height="1000" loading="lazy" decoding="async" />
  <figcaption>Introduction on the left, brain map in the center, and activity instructions on the right</figcaption>
</figure>

<details>
<summary>Research sources</summary>

<p>These references support the science information in the displayed cards and panels.</p>

<table>
  <thead>
    <tr><th scope="col">Displayed content</th><th scope="col">Supporting source</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Question card: sleep loss and emotional responses</td>
      <td><a href="https://www.ocf.berkeley.edu/~ahsleep/sleepteam/wp-content/uploads/2022/12/The-human-emotional-brain-without-sleep-a-prefrontal-amygdala-disconnect.pdf">Yoo et al. (2007)</a><br />Laboratory study of responses to negative images</td>
    </tr>
    <tr>
      <td>Result card: sleep restriction and attention</td>
      <td><a href="https://pubmed.ncbi.nlm.nih.gov/12683469/">Van Dongen et al. (2003)</a><br />Repeated sleep restriction and cognitive performance</td>
    </tr>
    <tr>
      <td>Result card: caffeine dose, timing, and sensitivity</td>
      <td><a href="https://pubmed.ncbi.nlm.nih.gov/24235903/">Drake et al. (2013)</a>; <a href="https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much">FDA caffeine guidance</a><br />400 mg at bedtime and 3 or 6 hours before bedtime; individual sensitivity</td>
    </tr>
    <tr>
      <td>Panel: 93% caffeine consumption and 29% unsure of a safe daily amount</td>
      <td><a href="https://ific.org/wp-content/uploads/2025/04/IFIC-Caffeine-Survey.March-2022.pdf">IFIC survey (2022)</a><br />U.S. adults aged 18 and older; n = 1,000; report pages 3 and 10</td>
    </tr>
    <tr>
      <td>Panel: 35% staying up until 3 a.m. at least once a week</td>
      <td><a href="https://en.smrc-sa.com/wp-content/uploads/2014/12/Sleep-Patterns-and-Predictors-of-College-Students.pdf">Lund et al. (2010)</a><br />Students at one university; n = 1,125</td>
    </tr>
    <tr>
      <td>Panel: 27% at risk for at least one sleep disorder</td>
      <td><a href="https://pubmed.ncbi.nlm.nih.gov/20864434/">Gaultney (2010)</a><br />Students at one university; n = 1,845; questionnaire screening</td>
    </tr>
    <tr>
      <td>Brain map: cerebellum function</td>
      <td><a href="https://www.nimh.nih.gov/news/media/2023/get-to-know-your-brain">NIMH brain overview (2023)</a><br />Movement coordination and balance</td>
    </tr>
  </tbody>
</table>

</details>

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
<div class="media-pair" data-stack style="--pair-split: 1.413fr 1.395fr">
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
reactions to the activity.
