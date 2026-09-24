---
title: What’s Going on in There?
year: 2024
dates: Nov 2024 – Dec 2024
blurb: A collaborative exhibit that uses cards, colour-coded rubber bands and a physical brain map to help college students reflect on sleep and caffeine habits.
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
  alt: The exhibit installed on an easel in a gallery room, a printed brain panel with rubber bands hanging beside it, and seven visitors standing around it.
quickFacts:
  - label: "Role"
    value: "Interaction Designer & Researcher"
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
  # `Team` rather than `Roles`: four people worked on this one, which is a
  # collaboration and should be labelled as one.
  team:
    - group: Design
      people:
        - Zhuoqi Liu
    - group: Collaborators
      people:
        - Carmen Quintos
        - Yi-Ting Chen
        - Ravi Prasad
    - group: Faculty guidance
      people:
        - Sheila Pontis
  # Three rows, which is not enough to be worth closing.
  collapse: false
---

## What a visitor does

Our four-person team built an exhibit that helps college students connect everyday
habits with what happens in the brain. A visitor draws a question about sleep or
caffeine, picks the response closest to their own habits, and takes the rubber band in
that answer's colour. The back of the card names two brain regions the topic involves.
The visitor loops the band around those two pins on the brain map, then draws another
card.

Card by card, the relationships accumulate into a network the visitor has built. At the
end they compare the colour they used most often against a result card, and add a
sticker in that colour to a shared board, so their result sits beside everyone else's.

<!-- The loop, in the three things a visitor handles. Each of these is the
     finished article, and each is given more room than the versions behind it
     in the iteration section. -->
<figure>
  <img
    src="/media/whats-going-on-in-there/card-final.webp"
    alt="The question card, front and back. The front asks about physical symptoms when stressed or overtired, with four answers A to D in red, blue, yellow and green; the back is headed BRAINSTEM and PITUITARY GLAND, carries a drawing of the brain with both structures picked out, and ends with a line telling the visitor to take the band in their answer colour and loop it around those two pins."
    width="2864"
    height="2000"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Draw a card: the front carries the four answer colours, the back the two regions to connect</figcaption>
</figure>

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 0.750fr 1.333fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/brain-board.webp"
      alt="The brain panel in use. A colour-coded brain diagram with nine labelled regions, pins in each, criss-crossed with blue, green, yellow and red rubber bands. Spare bands in the four colours hang on hooks below."
      width="1024"
      height="1365"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Loop the band in that colour around those two pins</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/visitor.webp"
      alt="A visitor standing at the board mid-activity, holding a red rubber band and reaching towards the pins, with the card holders and the sticker key beside her."
      width="1080"
      height="810"
      loading="lazy"
      decoding="async"
      data-nozoom
    />
    <figcaption>A visitor partway through the sequence</figcaption>
  </figure>
</div>

<figure>
  <img
    src="/media/whats-going-on-in-there/result-final.webp"
    alt="The result card, front and back. The front is a circular RESULT CARD badge with two rubber bands drawn inside and a line naming the red bands as the ones mostly used; the back is split into RESULTS, FACTS and TIPS."
    width="2848"
    height="2000"
    loading="lazy"
    decoding="async"
  />
  <figcaption>At the end, compare the colour you used most with a result card</figcaption>
</figure>

## Narrowing the topic

We began with a broad question about food, health and the body. Early research and topic
mapping brought it down to two habits that college students already have: sleep and
caffeine.

That decided the scale as well: we would cover a small set of brain regions and show how
the two habits reach them.

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 2.128fr 1.910fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/topic-mapping.webp"
      alt="A FigJam board headed STEP 1: finding topics. Bubbles for food chemistry, fermentation, nutrition and how the body works, linked by arrows, with a column of research links from each team member down the right."
      width="1024"
      height="481"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Early topic mapping</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/concept-exploration.webp"
      alt="A FigJam board headed STEP 3: brainstorming concepts. Clusters of coloured notes branch from a central node into candidate formats, with a written game concept and a service diagram pinned below."
      width="1024"
      height="536"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Concept exploration</figcaption>
  </figure>
</div>

## Prototyping the mechanic

Rather than asking visitors to read another diagram, we looked for something they could
work with their hands. We made the mechanic three times over. The first test pinned a
brain diagram to paper and strung bands between the pins. The second moved it to cork
board, with every region named. The third cut the regions out of foam and stood them on
skewers.

We wrote the questions alongside, each with four answers and a colour for each answer.

<!-- `--pair-split` in the pictures' own aspect ratios, and the same split on
     the row below, so what was drawn lines up with what was built. -->
<div class="media-pair" style="--pair-split: 1.194fr 1.724fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/concept-pinboard.webp"
      alt="A printed greyscale brain cross-section on paper, its regions gone over in purple and teal marker, with drawing pins pushed through several of them and green, red and blue rubber bands stretched between the pins."
      width="2760"
      height="2312"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The idea tested on paper first</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/concept-cards.webp"
      alt="A FigJam board of candidate questions in six columns. Each question sits in a coloured bubble above its answers, set as red, blue, yellow and green circles in the short versions and as four coloured bars in the longer ones."
      width="3000"
      height="1740"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Candidate questions, and the four answer colours</figcaption>
  </figure>
</div>

<!-- The same two ratios again, so the row reads as the one above, built. -->
<div class="media-pair" style="--pair-split: 1.194fr 1.724fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/prototype-flat.webp"
      alt="A printed brain diagram pinned to a cork board, seven regions named in capitals and highlighted in different colours, with coloured map pins in each region and rubber bands looped between them."
      width="2760"
      height="2312"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Flat prototype on cork board</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/prototype-standing.webp"
      alt="A standing prototype: hand-cut white foam pieces on wooden skewers in a foam base, each labelled in gold pen with a brain region, with a push pin in every piece and four skewers marked CORTEX around the edge."
      width="3000"
      height="1740"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Standing prototype in foam</figcaption>
  </figure>
</div>

## Testing with different audiences

We tested with three groups, each there for a different question. Neuroscience
students checked the accuracy of the brain content. College freshmen showed us whether
the explanations and instructions made sense without prior knowledge. Our design cohort
looked at hierarchy, readability, and how the interaction moved from card to board to
result.

Most of what came back was about the words and the layout. We simplified the
instructions, clarified the brain-region explanations, and made the cards easier to
scan while someone was standing at the exhibit.

<!-- Three frames of one session, so `--pair-split` carries the pictures' own
     aspect ratios: two uprights, then the wide one. -->
<div class="media-pair" style="--pair-split: 0.750fr 0.750fr 1.333fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/testing-session.webp"
      alt="A testing session in a corridor. Two people approach a table holding the prototype brain, bundles of coloured rubber bands and a spread of cards; a printed board with sticky notes hangs on the wall behind."
      width="512"
      height="683"
      loading="lazy"
      decoding="async"
      data-nozoom
    />
    <figcaption>Prototype testing</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/testing-cards.webp"
      alt="A tester standing at the table reading a question card, with the rest of the deck spread out, yellow answer notes, a tangle of coloured rubber bands, the cork-board brain prototype and the standing foam prototype all within reach."
      width="512"
      height="683"
      loading="lazy"
      decoding="async"
      data-nozoom
    />
    <figcaption>A tester working through the deck</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/testing-model.webp"
      alt="A tester reaching into the standing foam prototype to hook a rubber band between two labelled regions, with the card layout open on a laptop behind."
      width="1024"
      height="768"
      loading="lazy"
      decoding="async"
      data-nozoom
    />
    <figcaption>Testing the card-to-board interaction</figcaption>
  </figure>
</div>

## Iteration and the version we dropped

We kept redrawing the printed material long after the mechanic had settled. The
exhibition panels went through five versions, the question cards five, and the result
cards three.

We dropped one direction on purpose. A more illustrated, comic-like panel treatment
gave the project more personality. It also competed with the brain diagram and made
the exhibit harder to scan from across a room. It was unfinished, and the exhibition
date was close. We returned to the simpler layout and finished that.

<!-- Two panels of the same shape, so the split is their shared ratio twice. -->
<div class="media-pair" style="--pair-split: 1.333fr 1.333fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/panel-v1.webp"
      alt="Version 1 of the exhibition panel: a title block, three statistics about caffeine and sleep, a four-step column of activity instructions beside card pockets marked DRAW HERE, DISCARD and RESULTS, and two copies of the labelled colour brain diagram along the bottom."
      width="2400"
      height="1800"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 1</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/panel-v2.webp"
      alt="Version 2 on a blue ground. The same statistics and four instruction steps are set into rounded boxes, and the two brain diagrams below now carry coloured region labels."
      width="2400"
      height="1800"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 2</figcaption>
  </figure>
</div>

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 3.000fr 2.000fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/panel-v3.webp"
      alt="Version 3, now three panels wide: an introduction and statistics on the left, the labelled brain headed THE HUMAN BRAIN in the middle, and five instruction steps on the right beside pockets for cards, results and stickers."
      width="3000"
      height="1000"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 3, where the panel became three</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/panel-v4.webp"
      alt="Version 4, unfinished. A hand-lettered title with lightning bolts, a cartoon brain character talking in speech bubbles, and two stat blocks headed CAFFEINATED BEVERAGES and SLEEP DEPRIVATION, beside a second panel headed MY ANATOMY."
      width="3000"
      height="1500"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 4, the comic treatment we did not use</figcaption>
  </figure>
</div>

<figure>
  <img
    src="/media/whats-going-on-in-there/panel-final.webp"
    alt="The final three panels: title, five statistics and the project goals on the left; the labelled brain in the middle; and the instructions on the right, set two by two with small drawings of hands and a prompt to place a sticker."
    width="3000"
    height="1000"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The panels as exhibited</figcaption>
</figure>

<!-- A single card beside a front-and-back spread, in their own ratios. -->
<div class="media-pair" style="--pair-split: 0.852fr 1.698fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/card-v1.webp"
      alt="Version 1 of the question card, front only: the question about a usual response to feeling tired, with four answers A to D in red, blue, yellow and green rows."
      width="1172"
      height="1376"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 1, front only</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/card-v2.webp"
      alt="Version 2, front and back. The front asks how many cups of coffee a day over four coloured answers; the back names the prefrontal cortex and the cerebellum and explains how caffeine blocks adenosine."
      width="2336"
      height="1376"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 2, with the explanation on the back</figcaption>
  </figure>
</div>

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 2.011fr 1.430fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/card-v3.webp"
      alt="Version 3: two fronts asking the same question about sleep schedule in different layouts, beside a back split between PREFRONTAL CORTEX and HIPPOCAMPUS."
      width="2896"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 3</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/card-v4.webp"
      alt="Version 4, front and back. The front asks about physical symptoms when stressed or overtired; the back is headed BRAINSTEM and PITUITARY GLAND, with pins drawn down one edge and a line telling the visitor to take the band in their answer colour."
      width="2288"
      height="1600"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 4. The next change produced the card at the top of the page</figcaption>
  </figure>
</div>

<!-- Two uprights, in their own ratios. -->
<div class="media-pair" style="--pair-split: 0.900fr 0.714fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/result-v1.webp"
      alt="Version 1 of the red result card: an underlined opening line about mostly red rubber bands, then two solid paragraphs of explanation and advice."
      width="1800"
      height="2000"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 1</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/result-v2.webp"
      alt="Version 2, in coral, with a rubber-band mark at the top and the text broken into three headed parts: RESULTS, FACTS and TIPS."
      width="1428"
      height="2000"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 2. The next change produced the result card at the top of the page</figcaption>
  </figure>
</div>

## What came back

At the final exhibition visitors could move through the whole sequence without anyone
standing over them: draw a card, answer it, connect the two brain regions, compare the
pattern they had built, and leave a sticker on the shared board.

Some visitors also left handwritten notes beside the exhibit. Those comments were not
part of a study. They were an unprompted sign that people were reflecting on what they
had answered.

We recorded no visitor counts, no time spent at the exhibit, no accumulated band
patterns and nothing about what anyone remembered afterwards. The exhibition is not
evidence that the experience changed a habit or improved understanding over time.

<!-- `--pair-split` in the pictures' own aspect ratios, so the row is one height. -->
<div class="media-pair" style="--pair-split: 1.413fr 1.395fr">
  <figure>
    <img
      src="/media/whats-going-on-in-there/exhibition-panels.webp"
      alt="The installed exhibit seen straight on: a title panel of statistics, the brain map, and an activity-instructions panel, with four bundles of coloured rubber bands and the card holders pinned along the bottom."
      width="2048"
      height="1449"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The exhibit as installed</figcaption>
  </figure>
  <figure>
    <img
      src="/media/whats-going-on-in-there/sticky-notes.webp"
      alt="Four handwritten sticky notes pinned under the exhibit, reading I lied, Sorry my brain, I've got a great brain, and stay healthy. Above them the shared sticker board and the result-card holder."
      width="1024"
      height="734"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Notes visitors left without being asked to</figcaption>
  </figure>
</div>

## Takeaways

**Physical interaction can carry information.** The rubber bands did more than make the
exhibit hands-on: each answer left a visible connection, and the connections added up
into a map of one person's habits.

**Different questions need different testers.** Scientific accuracy, comprehension and
visual clarity each needed their own kind of feedback, so no single group could have
covered all three.

**Simplifying the surrounding information mattered most.** The core interaction stayed
close to its first form while the panels, cards and instructions changed again and
again to make the exhibit easier to understand and use.
