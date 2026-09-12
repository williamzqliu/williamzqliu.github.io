---
title: "Not Always More for More"
year: 2025
dates: "Mar 2025 – Apr 2025"
blurb: "A unit chart comparing life expectancy, population, and per-capita health spending across ten countries in 2022."
tags: ["information-design"]
tracks: ["design"]
published: false
compact: true
featured: 12
draft: false
stack:
  - Figma
  - Adobe Illustrator
cover:
  # The card takes a detail, which is what reads at card size. The head takes
  # the whole chart, uncropped, because counting the symbols is the point of it.
  wide: "/media/not-always-more-for-more/cover-wide.webp"
  heroWide: "/media/not-always-more-for-more/final-chart.webp"
  heroWhole: true
  tone: "light"
  alt: "A unit chart of ten countries in ascending order of life expectancy, with one green person icon per million people above a baseline and one dollar sign per hundred dollars of per capita health spending below it. The United States column of dollar signs runs several times deeper than any other."
  caption: "Ten countries in ascending order of life expectancy: population above the baseline, per capita health spending below it."
quickFacts:
  - label: "Role"
    value: "Information Designer"
  - label: "Outcome"
    value: "Static information graphic"
credits:
  skills:
    - Information design
    - Data visualization
    - Unit chart design
    - Visual encoding
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
        - Todd Linkner
---

Does higher health spending mean longer life? I explored that relationship with 2022 data. Instead of another scatter plot, I used ISOTYPE-inspired unit symbols so the quantities could be read as tangible counts.

## Reading the chart

I chose counting over position. A scatter plot puts both variables on continuous axes and asks the reader to interpret where a dot sits; a unit chart asks them to count. Counting is slower and cannot show a correlation, but it hands the reader a rule they can apply themselves: one icon is a million people, one dollar sign is a hundred dollars a head, and both convert to their own country without anyone explaining the chart.

I sorted by life expectancy rather than by spending, left to right from Mexico at 74.0 years to Japan at 84.1, with colour lightness tracking the same variable. Sorted by spending, the United States lands at one end and the finding collapses into one anomaly a reader can dismiss.

Sorted this way, the top half holds no surprise: populations vary. The bottom half is where it lands. The United States column runs to more than a hundred dollar symbols, an order of magnitude past China at nine and Costa Rica at fifteen, and its life expectancy of 78.0 years sits below both of them.

<!-- MEDIA STILL TO COME. The hero already carries the whole chart, so this
     section wants detail crops rather than a second copy of it:

     1. the United States beside China and Costa Rica, close enough to count,
     2. the baseline with the legend, where the two units are stated.

     Masters into media-src/not-always-more-for-more/; nothing is referenced
     until the processed file is in public/media/not-always-more-for-more/. -->

## Iterating the encoding

I built four versions, and changed something different in each.

<!-- Three stills of different shapes, so the columns take the ratio of their
     own aspects and the row comes out level with nothing cropped. -->

<div class="media-pair" style="--pair-split: 1.053fr 1.778fr 1.778fr">
  <figure>
    <img
      src="/media/not-always-more-for-more/version-01.webp"
      alt="The first version: one fixed-width row per country, so the person icons shrink to fit and are no longer the same size from row to row."
      width="2400"
      height="2280"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 01</figcaption>
  </figure>

  <figure>
    <img
      src="/media/not-always-more-for-more/version-02.webp"
      alt="The second version: a small-multiples grid with population and spending stacked in one column per country, every symbol the same size."
      width="2400"
      height="1350"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 02</figcaption>
  </figure>

  <figure>
    <img
      src="/media/not-always-more-for-more/version-03.webp"
      alt="The third version: a shared baseline with population above it and spending below, and a wider country set."
      width="1920"
      height="1080"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Version 03</figcaption>
  </figure>
</div>

**The first version.** I gave each country one fixed-width row. Because the width was fixed and the counts were not, the icons had to shrink to fit: Luxembourg got one large figure, the United States several hundred specks. Symbols that are not the same size cannot be counted, so what I had built was a badly drawn bar chart.

**The second version.** I moved to a small-multiples grid: one symbol size everywhere, population and spending stacked in one column per country. To keep the American block from swallowing the layout I raised the dollar unit to $200.

**The third version.** I changed the argument rather than the encoding. Among high-income OECD countries the only available story is that the United States is an outlier, so I brought in Mexico, China and Costa Rica: countries spending a fraction of the American figure and living longer. I also moved to the shared baseline and took the dollar unit back to $100.

**The final version.** I took three countries out and brought four in, so the set spans the full range from 74.0 to 84.1 years, and I replaced the three-band scale with a single-hue ramp. Red, yellow and green delivers a verdict on each country, and green for good is a judgement the data does not support.

Data from [UN World Population Prospects (2024) and the World Health Organization (2025), via Our World in Data](https://ourworldindata.org/grapher/life-expectancy-vs-health-expenditure).

<!-- PARKED from the long-form draft this compact layout replaces. None of it
     is published elsewhere on the page.

     1. The opening framing: the comparison is not hard to find, because Our
        World in Data already publishes life expectancy against health
        expenditure as a scatter plot, and it reads clearly to anyone fluent in
        scatter plots. The problem was to make the same relationship legible to
        a reader who is not, in a single static frame.

     2. Two of the four `Key decisions`, which the section above now states as
        consequences rather than as headed decisions:
        - Sorting by life expectancy rather than by spending. The reader moves
          along an axis where the outcome rises steadily and watches the
          spending underneath fail to follow. Sorted by spending, the United
          States lands at one end and the finding collapses into a single
          anomaly the reader can dismiss.
        - Choosing the country set to make the counterexample exist. Costa Rica,
          five million people, low spending, 79.3 years, is the sharpest case on
          the page, and neither of the first two versions contained it.

     3. Keeping the dollar unit at $100. The $200 unit halves the American
        column and makes the layout easier; reverting keeps the conversion round
        and leaves the column overwhelming, which is the argument.

     4. The whole `Encoding notes and where this chart is weak` disclosure:
        China population blocks overflowing above neighbouring columns; every
        symbol placed by Figma auto layout with nothing binding the instance
        count to the data; the shared baseline implying a single diverging
        variable; the colour ramp failing to separate the United States at 78.0
        from China at 78.2, which is the comparison the chart is about; and ten
        countries being a selection rather than a sample. A compact project
        carries no disclosure, so if any of this is worth keeping it has to
        become a sentence in Section 01 or 02.

     5. Outcome: a finished chart and four traceable versions, with no reader
        testing, no exhibition and nothing published. The critique was formative
        and internal.

     6. Reflection: that the version worth keeping beside the final one is the
        first, the broken one, because fixed row width forces variable symbol
        size and variable symbol size destroys countability, which was the whole
        reason for choosing unit symbols; and that the country list was doing
        more work than any visual decision in the file.

     NOTE: the draft referred to `versions 2 and 6` and `version 6`. There
     were four versions; 6 was Figma's own frame number, which means nothing
     to a reader, so the references are gone rather than renumbered.
-->
