---
title: "Not Always More for More"
year: 2025
dates: "Mar 2025 – Apr 2025"
blurb: "A unit chart exploring how symbol scale, country selection, ordering, and color shape comparisons of health spending and life expectancy."
tags: ["information-design"]
tracks: ["design"]
archive: true
archiveLabel: "Information design"
published: true
compact: true
draft: false
stack:
  - Figma
  - Adobe Illustrator
cover:
  # The head takes the whole chart, uncropped, at its own aspect. `wide` is
  # the detail crop; ArchiveList renders no cover, so the head is what shows.
  wide: "/media/not-always-more-for-more/cover-wide.webp"
  heroWide: "/media/not-always-more-for-more/final-chart.webp"
  heroWhole: true
  tone: "light"
  alt: "Unit chart of ten selected countries ordered by life expectancy, with person icons above a shared baseline and dollar signs below it. China has the largest population block, and the United States has the deepest spending block."
  caption: "Original 2025 graphic: ten selected countries ordered by life expectancy, with population above the baseline and per capita health spending below it."
quickFacts:
  - label: "Role"
    value: "Information design and data visualization"
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
  # `Roles` rather than `Team`: one person made it and one person taught the
  # course it was made for, which is not a collaboration and should not be
  # labelled as one. Same call as comgrand, emoease, lumitex and melovision,
  # which say `Portfolio guidance` because the advice there was on how the work
  # was presented rather than on a course.
  teamLabel: Roles
  team:
    - group: Design
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Todd Linkner
---

I reworked Our World in Data's life expectancy and health spending scatterplot as an ISOTYPE-inspired unit chart. Across four versions, I adjusted symbol size, country selection, ordering, and color to shape a static comparison.

## Reading the selected comparison

In the original graphic, the United States has a much larger spending block than China and Costa Rica. The labels show 78.0 years for the United States, 78.2 for China, and 79.3 for Costa Rica.

I included population as context for reading spending and life expectancy together. China brings that choice into focus: the chart shows a very large population alongside relatively low per capita spending and a life expectancy close to the United States.

I used repeated icons to give each quantity a tangible scale. Dense blocks make magnitude visible, although exact counts become harder to read. The shared baseline aligns the countries, and population and spending keep their separate units.

I ordered the countries by life expectancy so that this value rises from left to right, while spending varies beneath it.

The original graphic and its values are preserved here. Its historical spending definition, population source, and symbol counts have not been fully reverified.

## Revising the encoding and framing

In the first version, I arranged each country in one horizontal row. The population icons varied in size across rows, especially between Luxembourg and the United States.

<figure data-width="prose">
  <img
    src="/media/not-always-more-for-more/version-01.webp"
    alt="First version with one horizontal row per country and population icons that vary in size across rows."
    width="2400"
    height="2280"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Version 1: population icons vary in size across country rows, especially between Luxembourg and the United States.</figcaption>
</figure>

I then standardized the icon size in a small-multiples grid and adjusted the spending unit to keep the largest block manageable within the layout. Each country used the same visual unit for each measure.

I expanded the early country set to include Mexico, China, and Costa Rica. For the final selection, I considered striking values, different economic backgrounds, and small, medium, and large populations. These choices determined which comparisons the chart could present.

I replaced the red, yellow, and green palette with a single green hue that changes in lightness. The earlier palette suggested a good-to-bad judgment. I wanted color to track life expectancy across the selected set.

Working across these versions showed me how country selection, symbol scale, ordering, and color work together to shape a comparison. I completed the static graphic, but have not tested reader comprehension.

<details>
<summary>Earlier versions and data notes</summary>

<p>The original graphic credits UN World Population Prospects (2024) and WHO (2025), accessed through <a href="https://ourworldindata.org/grapher/life-expectancy-vs-health-expenditure">Our World in Data</a>. The linked chart has since been updated.</p>

<figure>
  <img
    src="/media/not-always-more-for-more/version-02.webp"
    alt="Small-multiples grid with consistent person-icon sizes and dollar symbols beneath each population block."
    width="2400"
    height="1350"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Version 2: a shared icon size and a larger spending unit reorganize the country blocks.</figcaption>
</figure>

<figure>
  <img
    src="/media/not-always-more-for-more/version-03.webp"
    alt="Unit chart with population above a shared baseline and spending below it, including Mexico, China, and Costa Rica."
    width="1920"
    height="1080"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Version 3: Mexico, China, and Costa Rica introduce additional comparisons around a shared baseline.</figcaption>
</figure>

</details>
