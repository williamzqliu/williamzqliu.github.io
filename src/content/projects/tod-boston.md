---
title: Transit-Oriented Development in Greater Boston
# The coursework is 2024 and the rebuild is 2026. The year field drives the
# listing's chronology, and what a reader would be opening is the second pass,
# so it carries the later date with the earlier one stated beside it.
year: 2026
dates: Oct 2024, rebuilt Sep 2026
blurb: A model that ranks 251 development sites beside MBTA stations, and tests how much its answer depends on the weights behind it.
# The output is a set of charts and a ranked shortlist. One block does
# respond to a reader, the map in section 04, but a single control is not what
# `interactive` is for on this site.
tags: [information-design]
tracks: [engineering]
published: true
featured: 8
stack:
  - Python
  - pandas
  - scikit-learn
  - Matplotlib
  - GeoPy
  - Leaflet
links:
  # The notebook, every dataset it reads and a README. `code` is the one link
  # this project has and the one an engineering-track reader wants: the result
  # is a judgement, and the judgement is only checkable if the work is open.
  code: https://github.com/williamzqliu/tod-boston
cover:
  wide: /media/tod-boston/cover-wide.webp
  tone: light
  # No axes, no legend, no title. The page supplies the words and the caption
  # supplies the encoding, so the picture can be the shape of the data and
  # nothing else. A chart with its own heading fights the one above it, and the
  # listing card crops it into nonsense.
  alt: A wide field of dots on white, crossed by two faint horizontal rules and two vertical ones. Most dots are pale grey and small; twenty-two are picked out in orange or teal, several much larger. Three of them are labelled, for Malden Center, Braintree and Revere Beach.
  caption: Each candidate site by land price per acre, horizontal, and average daily ridership at its station, vertical, both on log scales. Marker area is buildable acres. The twenty-two in colour are the sites not beaten on all four measures at once.
quickFacts:
  - label: "Role"
    value: "Data Analyst"
  - label: "Outcome"
    value: "A site-selection model, and a 22-site shortlist with three possible winners"
credits:
  skills:
    - Data analysis
    - Spatial analysis
    - Decision modeling
    - Data visualization
    - Urban analytics
  tools:
    - Python
    - pandas
    - scikit-learn
    - Matplotlib
    - Leaflet
  # `Roles` rather than `Team`, for the same reason as comgrand, emoease,
  # lumitex and melovision: one person did the work and one person advised on
  # it, which is not a collaboration and should not be labelled as one.
  #
  # `Faculty guidance` rather than `Portfolio guidance`, which is the opposite
  # call from those four. They were made for a graduate application portfolio
  # and the tutor advised on how they were presented. This was made inside a
  # Northeastern course and the instructor taught the course it was made for,
  # so the distinction that sends those four to `Portfolio guidance` sends this
  # one the other way.
  teamLabel: Roles
  team:
    - group: Analysis and modeling
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Nabeel Gillani
  # Provenance belongs here once. It was drawn under every chart for a while,
  # which put the same two lines into fifteen pictures.
  note: "Built on MAPC's Rethinking the Retail Strip Sites inventory (January 2022), MBTA rail ridership for Fall 2017, 2018, 2019, 2023, 2024 and 2025, MBTA subway performance for 3 February 2024, the Commonwealth of Massachusetts MBTA Communities compliance data, and route geometry from the MBTA GTFS feed. The map is drawn with Leaflet over OpenStreetMap tiles. Every data file is in the linked repository."
  # Four rows in total, which is not enough to be worth closing.
  collapse: false
---

## From policy to a site-selection problem

In January 2021 Massachusetts told the 177 communities the MBTA serves to zone for
multi-family housing near a station. Every one of them now has a district where
multi-family housing is permitted by right, somewhere near a train. The law settles
where housing must be allowed and leaves where it should go entirely open.

<!-- Two regular callouts on one page is one more than the docs call normal, and
     this is the one that earns it: the whole case study is an argument about
     whether a model answered this sentence well, and a reader who skims has to
     land on it. The three conditions move inside rather than sitting in a
     paragraph of their own, so the block costs no extra words. -->

> **The question**
>
> Of everywhere the law reaches, where would a development of homes, shops and
> workplaces actually work, and what would it cost?
>
> Ridership has to justify the density, land has to be cheap enough for the sums to
> work, and the site needs room to grow. No single measure carries all three, so the
> answer comes out of a weighted model, which makes the weights the whole argument.

I have answered it twice. The first version was a course project in autumn 2024; the
second is a rebuild I started this year after going back to the first. They point to
different places, and most of what follows is an account of why.

## Two methods for the same question

The 2024 model ran in two stages: rank the communities that hold rapid transit
stations, take the highest-ranked one, then rank the stations inside it. It returned
Quincy Center, and an estimate of about $482M for a building of 500,000 square feet,
a fifth of it shops and the rest homes and workplaces. The 2026 version works on
individual redevelopment sites in one pass, and returns a shortlist. Both are drawn
below at the same scale.

<!-- Drawn in the analysis script beside the charts, so the counts in it are the
     ones the notebook produces and cannot drift out of step with the page. It
     replaces the portrait flowchart from 2024, which only showed one of the two
     methods and was a 644px original that went soft the moment anyone enlarged
     it. The original is still in the repository, inside `2024-original.ipynb`. -->

<figure>
  <img
    src="/media/tod-boston/two-methods.webp"
    alt="Two workflow diagrams side by side, each a column of square-cornered boxes joined by downward arrows. The 2024 column, headed Two-stage weighted ranking, runs 177 plus 124 MBTA communities and stations, to 12 plus 45 after postcode matching, to 8 candidate communities, to 1 highest-ranked community, to its 4 stations, to 1 highest-ranked station. The 2026 column, headed Site-level screening and scenario ranking, runs 3,028 redevelopment sites, to 251 adjacent to rapid transit, to 22 not beaten on all four measures, to 3 ranked first in at least one scenario. The last two boxes of the 2026 column and its numbers are in orange."
    width="3000"
    height="1523"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Site-selection workflows in 2024 and 2026. The 2024 model first selected a community and then ranked stations within it. The 2026 workflow starts with individual redevelopment sites, filters the candidate set, and compares the remaining sites across five weighting scenarios.</figcaption>
</figure>

**What the 2024 model got right.** Its screening is sound: the zoning obligation really does apply
at community level, and restricting to communities with a rapid transit station really
does define the candidate space. The indicators are the right kinds of thing to measure,
each one has a written justification, and the cost model is sized against two built
Quincy projects.

**Where the 2024 model falls short.** Everything it decides, it decides one resolution above the
thing being chosen. A development goes on a parcel; the model scored towns, and fed
itself town averages to do it. Choosing one community discards seven before any station
is examined. Two of the station indicators turn out to measure the same quantity. And
every number is drawn from a single season that later turns out to be a trough.

**What the 2026 rebuild changes.** One stage instead of two, scored at parcel level, with
the shortlist produced before any weight is applied and the weights themselves treated
as a set of positions to be compared.

<table data-width="prose">
  <thead>
    <tr>
      <th></th>
      <th>2024</th>
      <th>2026</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Unit of analysis</td><td>community, then station</td><td>individual site</td></tr>
    <tr><td>Stages</td><td>two</td><td>one</td></tr>
    <tr><td>Candidates evaluated</td><td>8 communities, then 4 stations</td><td>251 sites across 9 communities</td></tr>
    <tr><td>Indicators</td><td>5 community, then 4 station</td><td>4, checked for redundancy</td></tr>
    <tr><td>How indicators are scaled</td><td>best in the sample scores 1, worst scores 0</td><td>each site's standing among all 3,028 regional sites</td></tr>
    <tr><td>Shortlist before weighting</td><td>&#8212;</td><td>22 sites that nothing else beats outright</td></tr>
    <tr><td>Weighting</td><td>one set of weights</td><td>five weighting scenarios</td></tr>
    <tr><td>Ridership vintage</td><td>Fall 2023</td><td>Fall 2025, with a 2017&#8211;2025 panel</td></tr>
    <tr><td>Output</td><td>one recommended station</td><td>ranked shortlist, three scenario winners</td></tr>
  </tbody>
</table>

## How the flaws surfaced

None of this was visible from inside the 2024 notebook. Each problem came out of a
check I had not run at the time.

**Correlating the indicators against each other.** The station model gave daily
ridership 40% and weekend ridership 20%. Across the rebuilt candidate set those two
correlate at 0.98, so sixty per cent of the weight sat on what is effectively a single
quantity. Buildable area and estimated capacity repeat the pattern at 0.94. The weight
table said something the arithmetic did not do.

<figure data-width="prose">
  <img
    src="/media/tod-boston/redundancy.webp"
    alt="A correlation heatmap of eight candidate indicators. Average daily ridership and weekend ridership correlate at 0.98; buildable area and estimated mixed-use capacity at 0.94. Every other pair is below 0.4."
    width="2600"
    height="2210"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Correlation between the eight candidate indicators across the 251 sites, where 1 means two indicators rise and fall together exactly and 0 means they are unrelated. Two pairs reach 0.98 and 0.94; every remaining pair falls below 0.4.</figcaption>
</figure>

**Opening up the land price column.** Land price carried the heaviest weight in the
community model, 30%, and it entered as a municipal average. Inside Quincy alone, the
price per acre of the actual redevelopment sites runs from $335K to $4.06M, a 12-fold
spread. A town average cannot say what the three acres you would buy will cost. The
cheapest land in Quincy sits at Quincy Adams, the station the 2024 model ranked last
of four.

**Reading the same weight against the cost model.** The 2024 notebook estimates land
at 0.44% of the project total. Both numbers were on my screen in 2024, thirty per cent
of the score and half a per cent of the budget, and I never put them next to each
other.

**Extending the ridership series backwards.** Every 2024 number came from Fall 2023.
Pulling Fall 2017, 2018, 2019, 2024 and 2025 from the same MBTA release shows that
season was a trough: weekday flow at the candidate stations runs a median 12% higher
two years later.

<figure>
  <img
    src="/media/tod-boston/six-autumns.webp"
    alt="Left, weekday flow at each candidate station across six autumns on a log scale, with a grey band marking the missing 2020 to 2022 years. Right, a scatter of Fall 2019 size against Fall 2025 recovery, sloping down: the bigger a station was in 2019, the smaller the share of it that returned, correlation minus 0.50."
    width="3000"
    height="970"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Left: weekday passenger flow at each candidate station across six autumn ratings, log scale, coloured by line; 2020 to 2022 are not published. Right: Fall 2025 flow as a percentage of Fall 2019, against Fall 2019 flow, with a fitted trend (r = &#8722;0.50).</figcaption>
</figure>

The panel also produced a result I had not gone looking for. The busiest stations
recovered worst. Quincy Center, the 2024 answer, sits at 58% of its 2019 weekday flow,
while the small Green Line stops in Brookline and Newton are back above 100%. The
demand returning to the network is local and spread across the day; the commute into
downtown offices has not come back, and a development of homes and shops depends on
the first kind.

## Building the second version

If the decision is about a parcel, the model should be scoring parcels. The
Metropolitan Area Planning Council (MAPC), the regional planning agency for Greater
Boston, keeps an inventory of 3,028 redevelopment sites across the region, each with
its own land value, buildable area and the station it sits beside. The 2024 model used
two of its 64 columns and averaged them up to the town.

A site here is one parcel, and several stations have more than one candidate beside
them, so each parcel is named for its station and numbered within it, largest first.
Malden Center #1 is the ten acres and Malden Center #3 is the acre and a half two
streets over; Harvard has four, #1 to #4. That is what every chart and table below
calls them. Each parcel is attached to the
nearest station that has a current ridership rating, and anything more than a
half-mile walk from one leaves the candidate set.

Eligibility filters the candidates and suitability scores them, and nothing is
discarded before the parcels themselves have been looked at.

<figure data-width="prose">
  <img
    src="/media/tod-boston/screening-funnel.webp"
    alt="A horizontal funnel. 3,028 MAPC sites region-wide, 581 in a rapid transit community, 285 beside a rapid transit station, 265 within a half-mile walk of a station, 257 with land value and buildable area above zero, 251 under half excluded land or flood zone."
    width="2600"
    height="904"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Candidate count at each screening step, from the full MAPC regional inventory to the set carried into the model. Bracketed figures are the change at each step.</figcaption>
</figure>

Twelve communities are eligible; nine of them hold a candidate parcel. Half the
candidates walk to a Green Line branch.


<div class="stat-strip" data-cols="3">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">251</p>
    <p class="stat-strip__label">Candidate sites, across nine communities</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">22</p>
    <p class="stat-strip__label">On the shortlist, picked without weights</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">3</p>
    <p class="stat-strip__label">Sites that come first, depending on who asks</p>
  </div>
</div>

**A shortlist that needs no weights.** Suppose one parcel is cheaper than another, has
more room, more riders and steadier demand across the day. Then no set of weights can
rank the second parcel above the first, whatever the weights are. A parcel in that
position is beaten outright and can go before any judgement is applied at all.
Twenty-two of the 251 are never beaten outright. Economists call that set a Pareto
frontier; the rest of this page calls it the shortlist. The 2024 model had no step
that did this.

The twenty-two are spread over nine communities and all four lines. The map in the
next section places every one of them.


<figure>
  <img
    src="/media/tod-boston/pareto-frontier.webp"
    alt="Three scatter plots: land price against ridership, buildable area against ridership, and land price against buildable area. In each, 229 beaten sites are pale grey and the 22 on the shortlist are orange, each labelled with its station and number."
    width="3000"
    height="871"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The 251 candidate sites, plotted for each pair of the four indicators in turn. Grey markers are beaten outright by some other parcel; orange markers are the 22 that are not. Labelled in each panel: whichever shortlisted parcel sits at each end of each axis.</figcaption>
</figure>

**Twenty-two is still too many to read one at a time.** Sorting all 251 parcels into
groups by how similar their four numbers are gives three kinds of site, and the
shortlist is not spread evenly across them. Eight parcels are big and cheap, and five
of those eight make the shortlist. A hundred and thirteen are small, expensive and
quiet, and none of them do.

<figure>
  <img
    src="/media/tod-boston/site-types.webp"
    alt="Left, buildable acres against daily riders on log scales, coloured by three site types, with shortlisted sites drawn larger. Right, the share of each type reaching the shortlist: big and cheap 62%, small expensive and busy 13%, small expensive and quiet 0%."
    width="3000"
    height="965"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Left: candidate sites by buildable area and daily ridership, both on log scales, coloured by which of three groups they fall into. The groups come from k-means, a standard way of splitting points into a set number of clusters; three was chosen by testing two through six. Shortlisted sites are drawn larger, and the one at each end of each axis is labelled. Right: the share of each group that reaches the shortlist.</figcaption>
</figure>

That dead forty-five per cent sits mostly on Green Line branches, which have a reputation
for being slow. The data can check that reputation directly.

<figure>
  <img
    src="/media/tod-boston/by-line.webp"
    alt="Four bar charts comparing the Red, Orange, Blue and Green lines on seconds between stops, minutes between trains, jobs reachable in 45 minutes, and average daily riders. Green has the shortest hop times, the most frequent service and the highest job access, and by far the lowest ridership."
    width="3000"
    height="640"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Four service and demand measures by rapid transit line. Travel time and headway are medians from a single service date, 3 February 2024; job access is the site median from MAPC; ridership is the station median for Fall 2025.</figcaption>
</figure>

The reputation does not survive the measurement. Green Line branches have the shortest
times between stops, the most frequent trains and the best job access in the whole
candidate set, on about a tenth of the ridership. A trip along one drags because it
stops so often. Whatever holds those sites back, the service they get is fine, and a
model built on accessibility alone would have sent me straight to them.

## Findings

**Weights are a position, so let each position speak.** I could not defend one set of
weights in 2024 and I still cannot. Choosing more carefully would not settle it, so
each scenario below is a stance a real person could hold, written as a set of weights.

<!-- A table, not the bump chart the notebook carries. Six scenarios by five
     ranks, with six site names that all read `Town / Station (n ac)`, asks a
     reader to hold a legend and a line together at 905px. The result is six
     rows with one name in each, and that is a table. -->

<table data-width="prose">
  <thead>
    <tr>
      <th>Scenario</th>
      <th>What it weights most</th>
      <th>Highest-ranked site</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Developer (cost first)</td><td>Land price</td><td>Braintree #1</td></tr>
    <tr><td>City (housing first)</td><td>Buildable area</td><td>Malden Center #1</td></tr>
    <tr><td>Transit agency (ridership first)</td><td>Daily ridership</td><td>Malden Center #1</td></tr>
    <tr><td>Place-making (all-day use first)</td><td>How evenly demand spreads across the day</td><td>Revere Beach #1</td></tr>
    <tr data-accent><td>No prior</td><td>All four equally</td><td>Malden Center #1</td></tr>
  </tbody>
</table>

Every row weights the same four indicators and only those, so the table holds five
opinions about one set of numbers. Three parcels take first place across them, and all
three are on the shortlist, so the no-weights step discarded nothing a weighting would
have chosen.

Those three, and the other 248 the model looked at, are on the map below. The markers
there are short codes: three letters for the station and the parcel's number, so MAL-1
is Malden Center #1. Zoom in and the full name replaces the code.

<figure>
  <!-- Placed under the scenario table, not earlier with the funnel. The
       panel beside the map says whether a parcel comes first under any of the
       five scenarios, and the five scenarios are the table directly above: any
       earlier and the panel is explaining itself with a term the page has not
       introduced. It is also the first table that names specific parcels.
       A map rather than a picture of one. The static export stays as the
       fallback: it is what a printout and a reader without JavaScript get. -->
  <div
    class="smap"
    data-sitemap="/media/tod-boston/map.json"
    role="region"
    aria-label="Zoomable map of the 251 candidate parcels and the MBTA rapid transit network"
    data-nozoom
  >
    <div class="smap__fallback">
      <img
        src="/media/tod-boston/candidate-map.webp"
        alt="A map of Greater Boston drawn without a basemap. Pale grey dots sketch the built-up region and leave the harbour empty. Coloured dots mark the candidate sites in the colour of the rapid transit line each walks to: Green in Brookline and Newton, Red through Cambridge and down to Quincy and Braintree, Orange through Somerville to Malden, Blue out to Revere. Nine communities and ten stations are labelled."
        width="2600"
        height="3158"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
  <figcaption>All 251 candidate parcels, on rapid transit lines drawn from the MBTA's own route geometry. The 22 on the shortlist carry a labelled marker, orange where the parcel comes first under at least one of the five scenarios above. Three further markers are hollow. They are the parcels that come first under a single column but were discarded by the dominance step: Porter #1 and East Somerville #1, joint top of MAPC's own site score, and Central #2, top on regional access. The remaining 227 are small grey dots.</figcaption>
</figure>

Five positions are five points in a space of every possible weighting, so I drew
200,000 more at random to fill in what lies between them.

<figure data-width="prose">
  <img
    src="/media/tod-boston/weight-space.webp"
    alt="A bar chart of how often each shortlisted parcel ranks first across 200,000 random weightings: Braintree #1 33%, Malden Center #1 31%, Revere Beach #1 14%, Wonderland #1 10%, Harvard #1 6%, then two parcels below 3%."
    width="2600"
    height="1102"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Each of 200,000 draws assigns the four indicators a different set of weights adding to 1, with every combination equally likely; the bar is the share of those draws under which the parcel comes first. A station name appearing twice is two separate parcels beside it, which the number after it tells apart. Parcels below 0.5% are omitted.</figcaption>
</figure>

**What the choice actually changes.** The 2024 model spent its heaviest weight
protecting land cost. Running the same cost estimate over each winner settles what that
bought.

<figure>
  <img
    src="/media/tod-boston/cost-vs-capacity.webp"
    alt="Three bar charts, each on its own scale. Left, the cost of the land alone at each winning site: $1.39M at Braintree, $2.28M at Malden Center, $2.88M at Revere Beach, 2.1 times apart. Middle, the total cost of the identical 500,000 square foot building at the same three sites: $480.9M, $481.8M and $482.4M, three bars of visibly the same length, 0.31 per cent apart. Right, the floor area each site could hold: 1.74 million, 1.31 million and 0.64 million square feet, 2.7 times apart."
    width="3000"
    height="770"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The same 500,000 sqft building priced and sized at each of the three scenario winners. Each panel has its own scale, because the land is under one per cent of the bill and would otherwise be a sliver: left, the land alone; middle, the total with construction and soft costs; right, the most floor area the site could hold at three square feet of building per square foot of land, a middling density for this kind of development.</figcaption>
</figure>

> **The finding**
>
> Choosing a site barely changes what it costs. It changes how much you get.
>
> The land under the building costs 2.1 times as much at one of the three sites as at
> another, and the finished building costs 0.31% more. What the sites can hold varies by
> 2.7 times. The heaviest weight in the 2024 model was guarding the one thing that
> hardly moves.

**Does any of this beat sorting on one column?** If the four indicators together rank
sites the way any one of them does alone, the model is adding nothing. The check is to
sort the 251 parcels each way in turn and see how closely each order matches the order
the four produce together, on a scale where 1 is identical and 0 is unrelated. It costs
one line per column and I did not run it in 2024.

The accented row at the top is the four indicators combined, and it is the order every
other row is measured against, which is why its own cell holds no figure. It is also
the last scenario in the table above under a second name: no prior is all four weighted
equally, and it picks the same parcel. The four rows under it are those same four
indicators sorted one at a time. The last two are not among the four: regional access
is the fifth quantity the appendix weighs and sets aside, and MAPC's site score is a
third party's reading of the same parcels, in the table because it is the one outside
opinion available.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th>Ranking rule</th>
        <th>How closely it matches</th>
        <th>Highest-ranked site</th>
      </tr>
    </thead>
    <tbody>
      <tr data-accent><td>All four, equally weighted</td><td>the baseline</td><td>Malden Center #1</td></tr>
      <tr><td>Evenness of demand across the day</td><td>0.78</td><td>Revere Beach #1 to #7, all tied</td></tr>
      <tr><td>Daily ridership only</td><td>0.72</td><td>Harvard #1 to #4, all tied</td></tr>
      <tr><td>Buildable area only</td><td>0.49</td><td>Alewife #1</td></tr>
      <tr><td>Land price only</td><td>0.47</td><td>Quincy Adams #1</td></tr>
      <tr data-outside><td>MAPC's own site score</td><td>0.19</td><td>Porter #1 and East Somerville #1, tied</td></tr>
      <tr data-outside><td>Regional access</td><td>&#8722;0.05</td><td>Central #2</td></tr>
    </tbody>
  </table>
  <figcaption>Regional access is MAPC's own measure: the number of jobs reachable from the site by transit in 45 minutes during the morning peak, counted in 2018.</figcaption>
</figure>

Two of those rules cannot separate parcels at all. Ridership and evenness of demand
are measured at the station, so all seven parcels at Revere Beach hold one value and
all four at Harvard hold another, and the rule has nothing left to choose between them
with. MAPC's percentile ties Porter #1 and East Somerville #1 at exactly 100. The data
imposes that, and it is the same limit the model carries everywhere: a station's
ridership is credited to every parcel beside it.

No single indicator reproduces the four together. Evenness of demand comes closest at
0.78 and still sends you somewhere else. Sorting on ridership alone gives Harvard
Square, already the most developed place in the candidate set; sorting on land price
alone gives Quincy Adams, a station that is mostly a car park and has the least demand
of the group. Those are the two traps the four indicators exist to dodge, and neither
is visible from inside a single column.

**A second reading, and where it parts from this one.** MAPC scores every parcel in
its own inventory for redevelopment potential, on criteria that overlap these four
without matching them. It carries no more authority than this model does, which is
what makes it worth checking against. The two agree on direction: the shortlisted
parcels sit at a median 94th place in every hundred across the region, against 83rd for
the rest. They disagree about plenty of
individual parcels, and the disagreement has a shape.

<figure>
  <img
    src="/media/tod-boston/mapc-reading.webp"
    alt="Two panels. Left, a bar chart of how strongly MAPC's own site score correlates with six measures: walk score 0.57, buildable acres 0.55, jobs reachable in 45 minutes 0.51, land price per acre 0.29, daily riders 0.09, peak share minus 0.01. Right, a scatter of all 251 parcels, MAPC's regional percentile across the bottom and this model's rank up the side. Sixty-eight parcels that this model ranks far higher sit to the upper left in orange; sixty-seven that MAPC ranks far higher sit to the lower right in teal."
    width="3000"
    height="1008"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Left: rank correlation between MAPC's overall site score and six measures of the 251 candidate parcels, Spearman. Right: every candidate parcel placed by both readings, with the two groups the readings separate by more than sixty positions picked out, and the median land price and ridership of each.</figcaption>
</figure>

What their score moves with is size and walkability. Ridership barely registers at 0.09
and evenness of demand not at all, so two of the four indicators here are invisible to
it. Land price registers at 0.29, and positively: the parcels MAPC rates highest are
the walkable, well-connected, expensive ones. The 67 parcels it puts far above this
model cost a median $3.40M an acre and carry 770 riders a day, and 29 of them are in
Brookline, which holds nothing on the shortlist. The 68 this model puts far above MAPC
cost $929K an acre and carry 7,065 riders, and 30 of them are in Quincy. The two
readings are answering different questions. Theirs is whether redevelopment would be
good for the place; this one is whether a building would pay for itself there.

**Where the 2024 answer ended up.** The 2024 write-up named the funnel's weakness and
moved on. Checking it against the rebuilt shortlist shows what the weakness cost.

<figure data-width="prose">
  <img
    src="/media/tod-boston/then-and-now.webp"
    alt="A bar chart of how many 2026 shortlisted sites each community holds, tallest bar first, with each community's 2024 rank printed under its name. Cambridge holds six and ranked second in 2024; Quincy holds five and ranked first; Somerville four, ranked fourth; Malden three, ranked sixth; Revere two, ranked fifth; Newton and Braintree one each, ranked third and seventh; Brookline none, ranked eighth; Medford none, never ranked. The 2024 ranks run 2, 1, 4, 6, 5, 3, 7, 8 across the chart."
    width="2600"
    height="1211"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Number of shortlisted 2026 sites in each community, tallest bar first. Under each name is that community's rank in the 2024 community model, which runs 2, 1, 4, 6, 5, 3, 7, 8 from left to right. Bar height is a count, not a rank. Medford did not enter the 2024 model.</figcaption>
</figure>

Malden finished sixth of eight in 2024 and holds the site that wins three of the five
scenarios here. Brookline finished last of the eight and holds nothing on the
shortlist, which is where the two versions agree. Medford was lost in a postcode join and never
entered the 2024 model at all. Quincy Center is still on the shortlist and still ranks
sixth of 251 under equal weights, so it was a fair answer. It was also a narrow one, from a method that could
never have found the alternatives.

<details>
<summary>How the rebuild is put together</summary>

**Stations are matched by coordinates.** MAPC's station labels date from its 2022
inventory and some of them have since moved: seven Somerville parcels are filed under
`Washington Street`, which in the current MBTA feed is a Green Line B stop six
kilometres away in Brighton, and joining on the name handed those parcels Brighton's
ridership. Every parcel now goes to the nearest station with a Fall 2025 rating, which
disagrees with the MAPC label at 39 of 285 sites, and anything beyond a half-mile walk
leaves the set.

**Percentiles against the whole region.** The 2024 model rescaled each indicator across
its eight communities, which forces the best to 1 and the worst to 0 and ties every
score to whoever else happened to be in the frame. Quincy Center's 82.40 meant best of
these four and nothing more, and no other candidate set could be compared against it.
Here each indicator becomes a percentile against all 3,028 sites in the regional
inventory, so a site's score holds still when the shortlist changes.

**Redundant indicators get dropped.** Anything correlating above 0.9 with a sibling is
one variable under two names. Weekend ridership goes at 0.98 with daily ridership;
estimated mixed-use capacity goes at 0.94 with buildable area. The next highest pair is
0.38, so the cut is not a close call. Four quantities are left, measuring four things.

**Why regional access is only a column.** It duplicates none of the four and orders
the parcels almost independently of them, which is what disqualifies it as a
criterion: anything scoring well on a measure that agrees
with nothing gets an axis where nothing beats it, and one axis is all dominance needs.
Added to the filter the shortlist goes from 22 to 54; weighted as a sixth scenario it
returns Malden Center #1, which equal weights already pick.

**Hard constraints filter.** A site more than half covered by excluded land or by the
hundred-year flood zone is removed outright. No amount of cheap land makes a floodplain
buildable, so there is nothing to trade off.

**The peak window is checked against a known-good one.** Fall 2025 reports ridership by
hour, so the peak has to be defined by hand. I scored four candidate definitions against
the period-based Fall 2024 file and used the one that agrees at 0.96: seven to ten in
the morning, four to seven in the evening.

**Six seasons changed the vintage and nothing else.** Growth is tempting to add and
wrong twice over. Percentage recovery is an artefact of the base: Riverside returned to
236% of its 2019 flow while shedding 1,251 riders a day since 2023. And absolute growth
correlates 0.87 with ridership itself, which is the redundancy problem again. The panel
changed which year the model reads.

</details>

## Takeaways

**Why a model at all.** The policy creates a question it does not answer, and the easy
way out is to pick somewhere that feels right and reason backwards. Weighting
indicators does not remove the judgement. It moves the judgement into a handful of
numbers in one place, where someone can argue with a specific one. That was the point
in 2024 and it still is.

**What I would carry forward.** Choose the unit of analysis to match the resolution
the decision happens at: scoring towns to choose a parcel hid a 12-fold price spread
inside Quincy. Correlate the indicators before weighting them, because two of the eight
I started with repeated a sibling above 0.9, and the weight table credited each of them
separately. And test a single winner against the weights that produced it. The most any parcel
here manages is a third of the possible weightings, which is a good deal less certainty
than a ranked list appears to offer.

**What it still cannot do.** Nothing here describes who lives near these sites, which
is the first thing anyone financing housing would underwrite. Land values come from tax
assessments, which lag the market. Station ridership is attributed to every parcel
beside it, fine for a half-mile catchment and wrong at the corner. And nobody who works
in these municipalities has seen a line of it: all five positions in the scenario table
are ones I wrote for them.

<!-- The closing callout, which is the pattern for exactly this: the author's
     voice, set apart from the narrative, as the last block of the case study.
     `data-close` puts the label in the accent, and the docs allow it once and
     only here, so being the end is what earns it. -->

<blockquote data-close>
  <p><strong>The difference between the versions</strong></p>
  <p>The funnel I flagged as a risk in 2024 had already discarded the site the rebuild keeps returning to.</p>
  <p>The 2024 write-up said in its own conclusion that a strong station in a mid-ranked community would never be evaluated. Testing that sentence took one comparison against the rebuilt shortlist, and the comparison came two years after the sentence. What it shows is above: the community the funnel dropped in sixth place holds the parcel that comes first under three of the five scenarios and under a third of all the weightings I could draw.</p>
</blockquote>
