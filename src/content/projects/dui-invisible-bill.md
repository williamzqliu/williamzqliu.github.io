---
title: "DUI’s Invisible Bill"
year: 2024
dates: "Sep 2024"
blurb: "A redesign that reframes national DUI losses through the scale of everyday household expenses."
tags: ["information-design"]
tracks: ["design"]
published: true
compact: true
featured: 11
draft: false
stack:
  - Figma
  - Adobe Illustrator
cover:
  # The head carries no picture: the opening image is three posters with arrows
  # between them, which one `<img>` cannot be. The row is the first block of the
  # body instead, built from the article's own media patterns so each poster
  # stays a separate layer and opens in the viewer on its own.
  wide: "/media/dui-invisible-bill/cover-wide.webp"
  heroInBody: true
  tone: "light"
  alt: "Detail of the redesigned infographic: a yellow map of the United States with $296 billion set across it in red, beside nine icons for the components of the loss figure."
quickFacts:
  - label: "Role"
    value: "Information Designer"
  - label: "Outcome"
    value: "Print infographic redesign"
credits:
  skills:
    - Information design
    - Data visualization
    - Data storytelling
    - Visual hierarchy
    - Editorial layout
  tools:
    - Figma
    - Adobe Illustrator
  team:
    - group: Design
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Sheila Pontis
---

<!-- The whole iteration, as the opening image. Columns in the ratio of each
     poster's own width at the height it is drawn at, so the two earlier
     editions come out at 75% of the final one and `data-align="end"` stands
     them on the same floor. The arrows are `<img>` so the existing media rules
     size them, and `data-nozoom` keeps them out of the viewer while the three
     posters stay in it. Each arrow sits in a wrapper carrying the shorter
     poster's aspect ratio, which is what puts it on their middle rather than
     on the middle of the block. -->

<figure>
  <div class="media-pair" data-align="end" style="--pair-split: 1128fr 190fr 1165fr 190fr 1553fr">
    <img
      src="/media/dui-invisible-bill/original.webp"
      alt="The original infographic: three income brackets in three columns, each headed by a car and a manufacturer badge, with arrows running down to statistics on commuting, home ownership, marriage, pet ownership and drinking, and a closing panel on the legal blood alcohol limit."
      width="2000"
      height="3191"
      loading="lazy"
      decoding="async"
    />
    <div style="aspect-ratio: 190 / 1800">
      <img src="/media/dui-invisible-bill/iteration-arrow.svg" alt="" data-nozoom width="48" height="72" />
    </div>
    <img
      src="/media/dui-invisible-bill/version-01.webp"
      alt="The first edition of the redesign. The same four movements are present, but the poverty-line ladder counts upward to the loss figure, the months-of-expenses boxes are filled panels, and the reference household sits at the top of the median column."
      width="2000"
      height="3091"
      loading="lazy"
      decoding="async"
    />
    <div style="aspect-ratio: 190 / 1800">
      <img src="/media/dui-invisible-bill/iteration-arrow.svg" alt="" data-nozoom width="48" height="72" />
    </div>
    <img
      src="/media/dui-invisible-bill/final-chart.webp"
      alt="The final poster, which moves from $296 billion on a map of the United States, through a division into $2,354 per household, to bar charts against rent, food, health coverage, an auto loan and tuition, and closes on 283 children."
      width="2400"
      height="3709"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>The original, the first edition, and the final poster. The original is published by Marketplace Wealth &amp; Poverty and reproduced here for critique.</figcaption>
</figure>

For my first project in Information Design Studio Principles, I redesigned an existing infographic advocating against driving under the influence. I rebuilt the argument around a question the original never clearly answered: how can the impact of DUI be made tangible in everyday life?

## Diagnosing the original

The original *INCOME/OUTCOME* infographic compares three income groups across car ownership, commuting, housing, marriage, and drinking habits, then ends with a warning about DUI. Most of the evidence never establishes a connection to DUI, and the hierarchy points elsewhere: cars and brand logos dominate the page, several encodings are hard to read, and unrelated lifestyle statistics compete for attention. I treated those as symptoms of one problem, which was that the argument itself needed rebuilding.


## Reframing the argument

Before designing the page, I tested three possible arguments. Two depended on relationships I could not support with comparable public data: whether DUI risk changes with income, and how DUI affects different kinds of families.

The third had public data on both sides. I took the national estimate of DUI-related losses and translated it into an illustrative per-household figure of $2,354, then compared that with rent, food, health coverage, an auto loan, and tuition. I chose that argument because the data existed to support it, not because it was the one I liked most.

<!-- The three sketches as three pictures rather than one composite: equal
     columns because they share an aspect, and `data-width="prose"` so the row
     is as wide as the sentences it belongs to rather than as wide as the
     poster above it. -->

<figure data-width="prose">
  <div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
    <img
      src="/media/dui-invisible-bill/concept-1.webp"
      alt="A notebook page working out the loss figure as a tree of nine cost components, then the division into $2,354, then a poverty-line chart beside a radar chart of household expenses, and a note about 283 children."
      width="641"
      height="1084"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/dui-invisible-bill/concept-2.webp"
      alt="A second page listing the household expenses as a labelled column with icons and monthly figures, with the division worked out underneath and the 283 note at the foot."
      width="641"
      height="1084"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/dui-invisible-bill/concept-3.webp"
      alt="A third page leading with the poverty-line and median-family incomes and a reference household, then the loss figure branching into per-household comparisons, and the children note boxed at the bottom."
      width="641"
      height="1084"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Three sketches working the same argument into a page.</figcaption>
</figure>

## Building the final story

I structured the infographic as a sequence of scales, running from the national estimate down to one household and its monthly bills, and ending on the human consequences of alcohol-impaired crashes.

Studio critique then changed the visual hierarchy. I reduced the amount of competing color, gave red, yellow, and dark blue distinct roles, and opened up the spacing for print.


<!-- MEDIA STILL TO COME. The head carries the finished poster whole, so what
     is missing here is the close reading of what critique changed. One or two
     crops would do it, taken from the same place in both editions so the pair
     can be compared:

     1. the poverty-line ladder, which reversed direction and moved the loss
        bar to the top,
     2. the months-of-expenses boxes, which went from filled panels to outlined
        ones with the figure in red.

     Masters into media-src/dui-invisible-bill/; nothing is referenced until
     the processed file is in public/media/dui-invisible-bill/. -->

**Data note.** The $296 billion figure is a comprehensive national cost estimate that includes quality-of-life valuations, not money directly paid by households. Dividing it by the number of U.S. households is a rhetorical comparison used to make the scale legible, not an estimate of what each household actually pays. The loss estimate is from 2019, while the household count is from 2022. Every figure carries a numbered source, printed along the bottom edge of the poster.

<!-- PARKED from the long-form draft this restructure replaces. None of it is
     published elsewhere on the page.

     1. The four diagnoses, written out. The logical connection to DUI is
        missing, because nearly all the surface area goes to income-based
        lifestyle differences and the closing line about the legal limit
        arrives from nowhere. Much of the data is irrelevant: marriage counts,
        pet ownership, bird and gerbil ownership and home ownership have no
        connection. The encodings mislead, because half-filled car
        illustrations cannot be read as proportions and the arrows cross in a
        way that leaves no reliable reading order. The hierarchy points at the
        wrong subject, since the largest and most saturated elements are cars
        and manufacturer logos. Separating the four mattered more than any one
        of them: a single verdict of `this is cluttered` would have licensed a
        cosmetic fix, and the broken argument could not be solved by layout.

     2. The three strategies as they were written, including why each was
        rejected or chosen, and the line that the strategies were eliminated on
        data availability rather than on which felt strongest.

     3. The four movements in detail: the nine components of the $296 billion
        figure; the division shown as a labelled equation so the reader can see
        that nothing was smuggled in; the five expense conversions with their
        month figures; and the closing panel, where the education comparison
        and the 283 are deliberately not combined, because combining them
        converts a life into a dollar figure.

     4. Key decisions: dropping from national scale to a single household is
        the whole redesign; ratios over raw amounts, because readers have an
        intuition for months and none for other households' grocery bills; the
        poverty-line comparison coming first with a household-size ladder,
        since it is the only place the loss figure exceeds an income figure.

     5. The named critique: Sheila Pontis pushed for less colour, Gab
        questioned how elements sat inside the icons, and Chaitanya asked for
        tighter margins and larger key figures.

     6. `Outcome`: a finished print piece with no evaluation at all. No reader
        testing, no exhibition outside the course, nothing published, and a
        refusal to describe a studio review as validation.

     7. `Reflection`: that a redesign's hardest constraint is data
        availability, and that the quality-of-life caveat should have been
        stated in the piece itself rather than only in the write-up. The Data
        note above now carries the caveat.
-->
