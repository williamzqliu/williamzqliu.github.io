---
title: Transit-Oriented Development in Greater Boston
# The coursework is 2024 and the revision 2026. The year field drives the
# listing's chronology, and what a reader would be opening is the revision, so
# it carries the later date with the earlier one stated beside it.
year: 2026
dates: Oct 2024 – Dec 2024, revised Sep 2026
blurb: Comparing redevelopment sites near Boston’s rapid transit and testing how screening and scoring choices change the results.
# The output is a set of charts, tables and a map. One block responds to a
# reader, the map in section 04, but a single control is not what
# `interactive` is for on this site.
tags: [information-design]
tracks: [engineering]
category: data-research
published: true
stack:
  - Python
  - pandas
  - SciPy
  - Matplotlib
links:
  # The research report is where the main comparison (M3) is written up; the
  # 2026 notebook in the repository is the historical four-indicator baseline,
  # so it is not linked as the result. The repository README opens on M3.
  paper:
    href: https://github.com/williamzqliu/tod-boston/blob/main/RESEARCH_REVISION_REPORT.md
    label: Research Report
  code: https://github.com/williamzqliu/tod-boston
cover:
  # Drawn from the research revision's M3 outputs (tod-boston 011bda3) by
  # media-src/tod-boston/m3/make_m3_media.py. The card takes the 16:9 version
  # and the head the 2.1:1 one, each whole, so the network is never cropped.
  wide: /media/tod-boston/cover-wide.webp
  heroWide: /media/tod-boston/hero-wide.webp
  heroWhole: true
  tone: dark
  alt: A schematic diagram of Boston's rapid transit in the style of the MBTA map, with the Red, Orange, Blue and Green lines on a dark ground. Each of the 246 compared sites is a dot beside its nearest station. The fifteen non-dominated sites are orange, at Alewife, Harvard, Central, Malden Center, Wonderland, North Quincy, Wollaston, Quincy Adams and Braintree, which are named; the other 231 are grey.
  caption: Each dot is a compared site beside its nearest station. The 15 in orange are non-dominated across assessed land value per acre, buildable area and station activity.
quickFacts:
  - label: "Role"
    value: "Spatial analysis, decision modeling & data visualization"
  - label: "Outcome"
    value: "246 candidate sites compared, 15 non-dominated on three indicators"
credits:
  skills:
    - Spatial analysis
    - Decision modeling
    - Data analysis
    - Data visualization
    - Reproducible analysis
  tools:
    - Python
    - pandas and NumPy
    - SciPy
    - Matplotlib
    - Leaflet
  # `Roles` rather than `Team`: one person did the work and one person advised
  # on the 2024 coursework it began as. The guidance row is limited to that
  # coursework; the 2026 revision was not made inside the course.
  teamLabel: Roles
  team:
    - group: Analysis and modeling
      people:
        - Zhuoqi Liu
    - group: Faculty guidance, 2024 coursework
      people:
        - Nabeel Gillani
  note: "Built on MAPC’s Rethinking the Retail Strip Sites inventory (January 2022), MBTA rail ridership for Fall 2025 by hour and Fall 2024 by period, and route geometry from the MBTA GTFS feed; every input is in the linked repository. Claude Code assisted with analysis implementation and reproducibility checks."
  collapse: false
---

## Comparing sites directly

In a 2024 course project, I assessed redevelopment opportunities near Boston’s rapid
transit by first ranking eight communities, then comparing stations within the
highest-ranked community, Quincy. This led to Quincy Center, but left a question
unanswered: how would individual redevelopment sites in Quincy compare with those
elsewhere?

When I revisited the project in 2026, I made individual sites the unit of comparison.
I evaluated 246 screened sites across nine communities using a common set of three
indicators and scoring rules. This allowed sites in different communities to be
compared directly before narrowing the search.

<!-- Figures on this page are drawn from the research revision's M3 outputs
     (tod-boston 011bda3) by media-src/tod-boston/m3/make_m3_media.py. -->

<figure>
  <img
    src="/media/tod-boston/workflow.webp"
    alt="Two workflows side by side. The 2024 column runs from 8 candidate communities through community ranking to Quincy, then through a station subset to 4 stations in Quincy, then through station ranking to Quincy Center. The revision column runs from 251 sites screened near rapid transit, with five records set aside, to 246 sites compared on three indicators, and from those 246 branches into two outputs side by side: 15 non-dominated sites, and ranking sensitivity checks on the comparison group, peak share and weights."
    width="3180"
    height="1350"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The original model selected a community before comparing stations. The revision compares sites across communities, with both the shortlist and sensitivity checks drawn from all 246 candidates.</figcaption>
</figure>

The revised ranking shows what could be missed by selecting a community first. In the
2026 main comparison, with the three indicators (assessed land value per acre,
buildable area and station activity) weighted equally, Quincy Center #1 ranks highest
among Quincy’s 35 sites but seventh among all 246, behind six sites at Malden Center.
Limiting the search to Quincy would exclude those six higher-ranked candidates. This
is a comparison within the revised model, rather than a direct test of the 2024
result.

<details>
<summary>How the Quincy-only comparison works</summary>

For this check, I used the main three-indicator, equal-weight comparison from the 2026
revision. I scored all 246 sites using the full candidate set as the percentile
reference, the comparison group each score is calculated against, then restricted the
ranking to Quincy’s 35 sites without changing the indicators, weights or scores.
Quincy Center #1 ranks seventh overall and first within Quincy; only the geographic
scope of the ranking changes.

<figure>
  <img
    src="/media/tod-boston/quincy-only-m3.webp"
    alt="A two-row strip on a linear rank axis from 1 to 246. The top row holds all 246 compared sites, with Malden Center #1 and #2 marked at rank 1, tied. The bottom row holds Quincy's 35 sites at their overall ranks, with the best of them, Quincy Center #1, marked at rank 7."
    width="2831"
    height="960"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Main comparison, equal weights. Restricting the ranking to Quincy leaves every score and the percentile reference unchanged; the best Quincy site stands seventh overall.</figcaption>
</figure>

The 2024 model ranked communities and stations using different data and indicators.
This check does not recreate that analysis or show that its calculations were
incorrect. It demonstrates which higher-ranked sites a Quincy-only search would omit
under the revised scoring rules. The original submitted notebook remains available in
the repository.

</details>

## <span class="anchor-alias" id="choosing-what-to-score"></span>Reassessing the model

Comparing sites across communities changed the scope of the analysis, but I also
needed to reconsider how they were scored. In 2024, I had assigned separate indicators
and weights to the community and station rankings without establishing why those
weights were appropriate or how strongly they influenced the outcome.

Land price carried 30% of the community score. In the station ranking, daily ridership
carried 40% and weekend ridership 20%. These choices made some measures more
influential than others, but I had not tested whether the resulting rankings depended
on those priorities.

<details>
<summary>2024 indicators and weights</summary>

**Community ranking**

<table data-width="prose" class="weights-2024">
  <thead>
    <tr>
      <th>Indicator</th>
      <th>What it measures</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Inbound rate</td><td>Average daily station entries relative to the community’s population</td><td>20%</td></tr>
    <tr><td>Coverage</td><td>Share of the community’s area within station areas</td><td>25%</td></tr>
    <tr><td>Developable station area</td><td>Developable land within half a mile of stations</td><td>15%</td></tr>
    <tr><td>Commercial land use</td><td>Number of TOD-related commercial land uses (fewer preferred)</td><td>10%</td></tr>
    <tr><td>Land price</td><td>Assessed land value per acre of the community’s retail-strip sites (lower preferred)</td><td>30%</td></tr>
    <tr><td>Total</td><td></td><td>100%</td></tr>
  </tbody>
</table>

**Station ranking**

<table data-width="prose" class="weights-2024">
  <thead>
    <tr>
      <th>Indicator</th>
      <th>What it measures</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Average daily ridership</td><td>Average daily boardings and alightings at the station</td><td>40%</td></tr>
    <tr><td>Average weekend ridership</td><td>Average boardings and alightings on a weekend day</td><td>20%</td></tr>
    <tr><td>Peak to off-peak ratio</td><td>Weekday peak activity relative to off-peak activity (closer to 1 preferred)</td><td>20%</td></tr>
    <tr><td>Weekday to weekend ratio</td><td>Average weekday activity relative to average weekend activity (closer to 1 preferred)</td><td>20%</td></tr>
    <tr><td>Total</td><td></td><td>100%</td></tr>
  </tbody>
</table>

The two station ratios were scored by how close they were to 1. Ridership came from
Fall 2023. The [submitted
notebook](https://github.com/williamzqliu/tod-boston/blob/main/2024-original.ipynb) is
in the repository.

</details>

For the site-level comparison, I used the Rethinking the Retail Strip inventory from
the Metropolitan Area Planning Council (MAPC), Greater Boston’s regional planning
agency. A site can span several tax parcels. Screening left 251 candidates; I set
aside five records with unresolved parcel-assessment allocation, leaving 246.

Transit proximity was measured from each site’s centroid to the nearest station with
available ridership data, using a straight-line threshold of 0.805 km (approximately
half a mile).

During the 2026 rebuild and revision, I considered the following measures. I retained
three for the main score and kept the others out for the reasons below.

<table data-width="prose" class="measure-decisions">
  <thead>
    <tr>
      <th>Measure</th>
      <th>Decision</th>
      <th>Reason and limits</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Assessed land value per acre</td><td>Retained (lower preferred)</td><td>Compares assessed land value per unit of area, not acquisition or development costs.</td></tr>
    <tr><td>Buildable area</td><td>Retained (larger preferred)</td><td>Measures available area, not permitted building capacity or a tested design.</td></tr>
    <tr><td>Daily station activity</td><td>Retained (higher preferred)</td><td>Daily boardings and alightings at the assigned station describe existing activity, not future demand for the site.</td></tr>
    <tr><td>Weekend ridership</td><td>Not scored separately</td><td>Closely tracks daily station activity.</td></tr>
    <tr><td>Estimated mixed-use capacity</td><td>Not scored separately</td><td>Closely tracks buildable area.</td></tr>
    <tr><td>Peak share</td><td>Descriptive only in the main comparison</td><td>Previously scored in a four-indicator model during the 2026 revision. The study provides no basis for preferring a higher or lower share of activity during peak hours.</td></tr>
    <tr><td>Regional job access</td><td>Historical extension only</td><td>The measure predates the Green Line Extension, and its edition is uncertain. The extension uses the earlier four-indicator model.</td></tr>
  </tbody>
</table>

The 2024 model rescaled most indicators between the lowest and highest values in its
sample. For the revised main comparison, I used percentile scores within the 246
candidates, oriented so that higher scores reflect the preferred direction. These
scores describe relative standing rather than the size of the differences between
sites.

I used equal weights for the three retained indicators as a starting point, not as a
validated statement of stakeholder priorities. I then tested how changes to the
comparison group, indicator direction and weights affected the rankings.

<details>
<summary>Indicator checks</summary>

**Redundant indicators.** Weekend ridership correlates at 0.98 with daily station
activity, and MAPC’s estimated mixed-use capacity at 0.94 with buildable area. I left
both out of the score to limit overlap between indicators.

**Peak-share definition.** Peak hours are 07:00–10:00 and 16:00–19:00 on weekdays.
Across stations, the resulting peak share correlates at 0.96 with the MBTA’s Fall 2024
period-based measure. This checks agreement between the measures; it does not
establish a preferred scoring direction.

</details>

<details>
<summary>Screening steps and the five set-aside records</summary>

<figure>
  <img
    src="/media/tod-boston/screening-funnel-m3.webp"
    alt="A horizontal bar chart of candidate counts at each screening step: 3,028 MAPC redevelopment sites in the region, 581 in a community with rapid transit, 285 associated with a rapid-transit station in MAPC's data, 265 within 0.805 km in a straight line, 257 with land value and buildable area above zero, 251 with excluded land and flood zone each under 50%, and 246 after five records are set aside because their valuation attribution is uncertain."
    width="3091"
    height="1084"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Candidate count at each screening step, from MAPC’s regional inventory to the 246 compared.</figcaption>
</figure>

**Screening details**

- Excluded land and the 1% flood zone must each cover less than half of a site.
- Station assignment uses the nearest station with Fall 2025 ridership data. This
  differs from MAPC’s station label for 39 of the 285 records checked.

**Five records set aside**

<table data-width="prose">
  <thead>
    <tr>
      <th>Sites</th>
      <th>Treatment</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Assembly #1, Assembly #2; Quincy Center #6</td><td>Set aside</td><td>Assessed parcel values could not be reliably attributed to individual sites.</td></tr>
    <tr><td>Assembly #3; Quincy Center #8</td><td>Held out conservatively</td><td>They share parcels with the flagged records, and the allocation of assessed values remains unresolved.</td></tr>
  </tbody>
</table>

These are distinct site records, not duplicates. I did not reallocate their assessed
values. Under the earlier four-indicator rules, retaining all five changed neither the
first-place sites nor top-ten membership.

<p class="code-note">Data: MAPC inventory published January 2022, assessment year not stated; MBTA rail ridership by hour, Fall 2025.</p>

</details>

## <span class="anchor-alias" id="testing-the-ranking"></span>What changes the ranking?

During the 2026 revision, I tested how site rankings changed when I varied which sites
the scores were calculated against, whether higher or lower indicator values were
preferred, and how much weight each indicator received.

### Who is each site compared with?

A site’s score depends partly on which other sites it is compared with. In the earlier
four-indicator model, land value and buildable area were scored against regional data,
while station measures were scored against the screened candidates.

I changed the model so that every indicator used the same candidate group. With the
indicators and weights unchanged, seven of the top ten sites remained in the top ten.
Braintree #1 fell from third to eleventh.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th>Site</th>
        <th>Different comparison groups</th>
        <th>Same candidate group</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Malden Center #1</td><td>1</td><td>1 (tied)</td></tr>
      <tr><td>Malden Center #2</td><td>2</td><td>1 (tied)</td></tr>
      <tr><td>Braintree #1</td><td>3</td><td>11</td></tr>
      <tr><td>Malden Center #3</td><td>11</td><td>4</td></tr>
    </tbody>
  </table>
  <figcaption>The earlier four-indicator model, equal weights. Only the groups used to calculate the scores change.</figcaption>
</figure>

I used the same candidate group in the revised model so that every score describes a
site’s standing among the places being considered.

### Should a higher peak share score better?

Peak share measures how much of a station’s weekday activity occurs during the morning
and evening peaks. But should a higher share count in a site’s favor?

I compared the final three-indicator model with two alternatives that add peak share
as a fourth indicator, giving all included indicators equal weight. Favoring a lower
share puts Malden Center #1 and #2 first. Favoring a higher share puts Alewife #1
first instead. Because the study provides no basis for choosing either preference, I
left peak share out of the main score.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th>How peak share is treated</th>
        <th>First under equal weights</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Not scored (main comparison)</td><td>Malden Center #1 and #2, tied</td></tr>
      <tr><td>Lower preferred</td><td>Malden Center #1 and #2, tied</td></tr>
      <tr><td>Higher preferred</td><td>Alewife #1</td></tr>
    </tbody>
  </table>
  <figcaption>Alewife #1 ranks 62nd when a lower peak share is preferred and first when a higher share is preferred.</figcaption>
</figure>

### What if different qualities matter more?

Weights determine how much each indicator contributes to the final score. Giving all
three equal weight is one choice; putting more emphasis on land value, area or station
activity can produce another ranking.

For the main three-indicator model, I tested 200,000 combinations of weights. Eleven
sites ranked first at least once, with Malden Center #1 and #2 leading most often.
There was no single winner across all the combinations tested.

These results show how rankings respond to different priorities. They do not tell us
which priorities a planner or developer would choose, or how likely a development is
to succeed.

<details>
<summary>Weight sampling, tie rules and the historical settings</summary>

- Weight sampling: 200,000 weight combinations sampled from a Dirichlet(1,1,1)
  distribution, with weights summing to one (seed 7). The share of draws in which each
  site ranks first is in the chart below. Across four other seeds the largest share
  moves by at most 0.26 percentage points.
- Ties: tied values take their average position, and final scores are compared
  exactly, so a joint first place is reported as a tie. In the four-indicator
  controlled comparisons tested, switching from the earlier tie rule to this one
  changed no first place and no top-ten member.
- The 2026 rebuild before this revision ranked 251 sites on four indicators, with peak
  share lower preferred, under five weightings I wrote as developer, city, transit
  agency, place-making and equal positions. None was tested with those groups. Its
  first places were Braintree #1, Malden Center #1 and Revere Beach #1, and those
  results stay in the repository as the historical baseline.
- Adding MAPC’s regional job access to the earlier four-indicator model widens the
  non-dominated set to 54 of 246 and keeps Malden Center #1 and #2 tied first under
  equal weights. It stays outside the main comparison for the reason in section 02.

<figure>
  <img
    src="/media/tod-boston/weight-shares-m3.webp"
    alt="A horizontal bar chart of the 11 sites that rank first in at least one of 200,000 sampled weightings in the main comparison: Malden Center #1 41.6%, Malden Center #2 32.0%, Braintree #1 12.9%, Malden Center #4 9.0%, Alewife #1 2.3%, Harvard #1 0.85%, Harvard #4 0.56%, Central #1 0.30%, Wonderland #1 0.29%, Quincy Adams #1 0.15% and Harvard #3 0.05%."
    width="2597"
    height="1515"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Main comparison only: the share of sampled weightings in which each site ranks first.</figcaption>
</figure>

</details>

## <span class="anchor-alias" id="interpreting-the-shortlist"></span>What the results show

The comparison leaves 15 sites across five communities for closer study. For each of
these sites, no other candidate offers an improvement on one of the three measures
without giving something up on another. Choosing among them therefore depends on which
qualities matter most.

<figure>
  <div
    class="smap"
    data-sitemap="/media/tod-boston/map-m3.json"
    role="region"
    aria-label="Zoomable map of the 246 compared sites and the MBTA rapid transit network"
    data-nozoom
  >
    <div class="smap__fallback">
      <img
        src="/media/tod-boston/candidate-map-m3.webp"
        alt="A static map of the rapid transit network from Newton and Brookline in the west to Revere in the north-east and Braintree in the south, with the 246 compared sites as small white dots ringed in the color of their nearest station's line, and the 15 non-dominated sites drawn larger in full color, in Cambridge, Malden, Revere, Quincy and Braintree. Community names, a 5 km scale bar and a key beside the map."
        width="3840"
        height="2160"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
  <figcaption>All 246 compared sites, each in the color of its nearest station’s line. The 15 labeled markers are non-dominated; select a site for its values and equal-weight rank.</figcaption>
</figure>

With the three indicators weighted equally, Malden Center #1 and #2 share first place.
But they offer different things: #1 has about four more buildable acres, while #2 has
a slightly lower assessed land value per acre. Both use the same station activity
figure because they share a station.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th></th>
        <th>Malden Center #1</th>
        <th>Malden Center #2</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Buildable area</td><td>10.02 ac</td><td>6.06 ac</td></tr>
      <tr><td>Assessed land value per acre</td><td>$595,818</td><td>$584,175</td></tr>
      <tr><td>Daily station activity (boardings and alightings per day)</td><td>13,356</td><td>13,356</td></tr>
      <tr><td>Equal-weight score</td><td>94.72</td><td>94.72</td></tr>
    </tbody>
  </table>
  <figcaption>The two sites share one station and so one activity value.</figcaption>
</figure>

The tie comes from how the scoring works. It measures where each site stands among the
candidates, rather than how large the differences are. Site #1’s lead in the area
score exactly offsets #2’s lead in the land-value score. The model gives them the same
score, but it does not tell us whether four additional acres matter more than the
difference in assessed value.

Seven of the top ten sites are near Malden Center. They all receive the same station
activity score, so their high rankings are not seven independent pieces of evidence
about transit activity.

The shortlist identifies places worth investigating next. Ownership, actual walking
routes to transit and development feasibility still need to be checked before
recommending a site.

<details>
<summary>The percentiles behind the Malden tie</summary>

<table data-width="prose">
  <thead>
    <tr>
      <th>Percentile score among the 246</th>
      <th>Malden Center #1</th>
      <th>Malden Center #2</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Buildable area</td><td>97.76</td><td>96.54</td></tr>
    <tr><td>Assessed land value per acre (lower preferred)</td><td>94.11</td><td>95.33</td></tr>
    <tr><td>Daily station activity</td><td>92.28</td><td>92.28</td></tr>
    <tr><td>Mean of the three</td><td>94.72</td><td>94.72</td></tr>
  </tbody>
</table>

Each gap of 1.22 points is three places among 246.

</details>
