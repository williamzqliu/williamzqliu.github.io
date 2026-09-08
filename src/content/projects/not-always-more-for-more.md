---
title: "Not Always More for More"
year: 2025
dates: "Mar 2025 – Apr 2025"
blurb: "A unit chart asking whether higher health spending buys longer life. Ten countries say not reliably."
tags: ["information-design"]
tracks: ["design"]
featured: 12
draft: false
stack: ["Figma"]
links:
  poster: "/media/not-always-more-for-more/poster.pdf"
cover:
  wide: "/media/not-always-more-for-more/cover-wide.webp"
  square: "/media/not-always-more-for-more/cover-square.webp"
  tone: "light"
  alt: "Detail of the final chart: columns of green person icons above a baseline for population, columns of dollar signs below it for per capita health spending, with Mexico, the United States and China labelled."
quickFacts:
  - label: "Scale"
    value: "10 countries, 3 indicators, 2,000+ symbols"
  - label: "Role"
    value: "Solo designer"
  - label: "Stack"
    value: "Figma, auto layout"
  - label: "Shown at"
    value: "Course studio critique, Northeastern"
stats:
  - value: "10"
    label: "countries compared"
  - value: "4"
    label: "encoding versions"
  - value: "$100"
    label: "per dollar symbol"
  - value: "1M"
    label: "people per person icon"
---

Does higher health spending buy longer life? This is one chart, built four times, trying to answer that with 2022 data on population, per capita health spending and life expectancy.

## 01 The problem

The comparison itself is not hard to find. Our World in Data publishes life expectancy against health expenditure as a scatter plot, and the scatter shows the relationship clearly to anyone fluent in scatter plots. The problem was to make the same relationship legible to a reader who is not, and to do it in a single static frame.

That ruled out the encoding that works best statistically. A scatter plot puts both variables on continuous axes and asks the reader to interpret position. A unit chart asks the reader to count. Counting is slower and cannot show a correlation, but it carries something a scatter cannot: the reader can apply the rule themselves. One icon is a million people. Ten dollar signs is a thousand dollars a head. Those are conversions a reader can perform on their own country without being taught how to read the chart.

## 02 Approach

Four versions, and each one changed something different.

**The first version** used one fixed-width row per country: person icons on top, coins below on a colour band keyed to a life expectancy band. Because the row width was fixed and the counts were not, the icons had to shrink to fit. Luxembourg got one large figure; the United States got several hundred specks. That breaks the only reason to use unit symbols at all. If the symbols are not the same size, they cannot be counted, and the chart becomes a badly drawn bar chart.

**The second version** fixed that by moving to a small-multiples grid where every symbol is the same size everywhere on the page, with population and spending stacked in one column per country. To keep the American block from swallowing the layout, the dollar unit went up to $200.

**The third version** changed the argument rather than the encoding. Versions 2 and 6 compared high-income OECD countries only, and against that set the only available story is that the United States is an outlier. Bringing in Mexico, China and Costa Rica turns it into something else: there are countries spending a fraction of the American figure and living longer. This version also moved to a shared baseline, population above it and spending below, and reverted the dollar unit to $100.

**The final version.** Three countries out, four in, so the set spans the full range from 74.0 to 84.1 years. The three-band red, yellow and green scale became a single-hue sequential ramp.

## 03 What I built

A single frame. Ten countries left to right in ascending order of life expectancy, from Mexico at 74.0 years to Japan at 84.1. Above the baseline, one icon per million people. Below it, one dollar sign per hundred dollars of per capita spending. Colour lightness tracks life expectancy.

Read left to right, the top half tells you nothing surprising: populations vary. The bottom half is where it lands. The United States column runs to more than a hundred dollar symbols, an order of magnitude past China at nine and Costa Rica at fifteen, and its life expectancy of 78.0 years sits below both of them.

## 04 Key decisions

**Sorting by life expectancy, not by spending.** The reader moves along an axis where the outcome rises steadily, and watches the spending underneath fail to follow. Sorted by spending, the United States lands at one end and the finding collapses into a single anomaly the reader can dismiss.

**Choosing the country set to make the counterexample exist.** This is the decision the chart actually rests on. Costa Rica, five million people, low spending, 79.3 years, is the sharpest case on the page, and neither of the first two versions contained it. Rich-country comparisons produce a chart about American inefficiency. A wider set produces a chart about whether spending buys years.

**Replacing the traffic-light scale with a sequential ramp.** Red, yellow and green delivers a verdict on each country, and green for good is a judgement the data does not support making country by country. A single-hue ramp encodes magnitude without ranking anyone. It also resolved a mismatch in the previous version, where the legend still described three bands while every icon on the page was one green.

**Keeping the dollar unit at $100.** The $200 unit from version 6 halves the American column and makes the layout easier. Reverting to $100 keeps the conversion round and leaves the American column overwhelming, which is the argument. The imbalance is deliberate.

<details>
<summary>Encoding notes and where this chart is weak</summary>

**Population blocks overflow into the space above neighbouring columns.** China's roughly 1,400 icons do not fit in one column's width, so they wrap right across the area above the United States through Australia. The placement rule is consistent, but the reader cannot tell which block belongs to which column from position alone. This is the cost of unit symbols across a range from 5 to 1,412, a factor of 280. It is not a layout mistake and it is also not solved.

**Every symbol was placed by Figma auto layout, not by hand or by script.** Each country gets a fixed-width wrapping container; the instance count sets the number of rows. This is why reverting the dollar unit from $200 to $100 cost minutes rather than a rebuild, and why four full encoding revisions fit inside two months.

The cost is that nothing binds the instance count to the data. The number of icons comes from reading a table and duplicating a component. An off-by-one error has no mechanism to catch it. The overflow behaviour above is the same constraint from the other side: the container width is fixed, so China's count has nowhere to go but sideways.

**The shared baseline implies a single diverging variable.** A mirrored layout reads as the positive and negative sides of one quantity. Above the line is people and below it is money. The axis needs a stronger unit break than it has.

**The colour ramp discriminates almost nothing.** Mapping 74.0 to 84.1 years onto one hue means the United States at 78.0 and China at 78.2 are indistinguishable, and those two are the comparison the chart is about. The ramp only does work at the extremes. It fixed the judgement problem and left the legibility problem, which makes it a trade rather than an improvement.

**Ten countries is a selection, not a sample.** The counterexample holds. No global claim follows from it.

**Data.** UN World Population Prospects (2024) and World Health Organization (2025), accessed via Our World in Data.

</details>

## 05 Outcome

A finished chart and four traceable versions of it. No evaluation: no reader testing, no exhibition outside the course, nothing published. The critique it received was formative and internal.

## 06 Reflection

The version worth keeping in the portfolio alongside the final one is the first, the broken one. It looks fine at a glance and it is wrong in a way that is specific to this technique: fixed row width forces variable symbol size, variable symbol size destroys countability, and countability was the entire reason for choosing unit symbols instead of bars. Getting that wrong once is how I learned that the choice of encoding carries constraints that arrive later, in the layout, when it is expensive to change.

The other thing this taught me is that the country list was doing more work than any visual decision in the file. Three versions in, I was still refining an encoding around a set of countries that could not support the claim I wanted to make. Changing the set took an afternoon and changed the finding.
