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
  # and the head the 2.1:1 one, each whole, so neither crop can cut the axis
  # names or the area key out of the picture.
  wide: /media/tod-boston/cover-wide.webp
  heroWide: /media/tod-boston/hero-wide.webp
  heroWhole: true
  tone: light
  alt: A scatter plot of the 246 compared sites, with assessed land value per acre across the bottom and daily boardings and alightings at the nearest station up the side, both on log scales, and marker area for buildable area. Fifteen non-dominated sites are orange; the other 231 are pale. A key gives circle sizes for 1, 5 and 15 acres.
  caption: Fifteen sites remain non-dominated across assessed land value per acre, buildable area and station activity.
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
  note: "Built on MAPC's Rethinking the Retail Strip Sites inventory (January 2022), MBTA rail ridership for Fall 2025 by hour and Fall 2024 by period, and route geometry from the MBTA GTFS feed; every input is in the linked repository. Claude Code assisted with analysis implementation and reproducibility checks."
  collapse: false
---

## Comparing sites directly

In a 2024 course project, I explored which locations near Boston’s rapid transit
warranted closer study for redevelopment, comparing land value, room to build and
station activity. The model worked in stages: it ranked
eight communities, selected Quincy, and then compared the four stations inside it,
ending at Quincy Center. When I returned to it in 2026, I compared every screened site
near rapid transit in one pass, under the same rules, and then tested how much the
ranking depended on its assumptions.

<!-- Figures on this page are drawn from the research revision's M3 outputs
     (tod-boston 011bda3) by media-src/tod-boston/m3/make_m3_media.py. -->
<figure>
  <img
    src="/media/tod-boston/workflow.webp"
    alt="Two workflows side by side. The 2024 column runs from 8 candidate communities through community ranking to Quincy, then through a station subset to 4 stations in Quincy, then through station ranking to Quincy Center. The revision column runs from 251 sites screened near rapid transit, with five records set aside, to 246 sites compared on three indicators, and from those 246 branches into two outputs side by side: 15 non-dominated sites, and ranking sensitivity checks on the reference, peak share and weights."
    width="3180"
    height="1350"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The original model ranked communities, then stations within Quincy. The revision compares individual sites across the study area.</figcaption>
</figure>

Keeping every score as in the final comparison, I restricted the ranking to Quincy's 35 sites. The best of them, Quincy
Center #1, ranks seventh of 246 under equal weights, behind six sites at Malden
Center. This is a controlled comparison inside the new framework, not a test of the
2024 model.

<details>
<summary>The 2024 model, and what the Quincy comparison does not test</summary>

The 2024 model matched the MBTA's 177 communities and 124 stations by postcode, which
left 12 communities and 45 stations. It ranked the eight communities with rapid
transit on five community indicators, with land price weighted most at 30%, and Quincy
came first. It then ranked Quincy's four stations on four station indicators, with
daily ridership at 40% and weekend ridership at 20%, and Quincy Center came first.
Every indicator was rescaled so the best value in the sample scored 1 and the worst 0,
and ridership came from Fall 2023. Medford dropped out of the candidate list in the
postcode join. The notebook is in the repository as it was submitted.

The Quincy comparison above uses the revision's data, indicators and scaling, so it
neither re-runs nor refutes the 2024 model. It shows only what restricting the search
to one community removes when everything else is held fixed. Across all 37
fixed-weight settings in the revision, no Quincy site ranks first among all
candidates.

<figure>
  <img
    src="/media/tod-boston/quincy-only-m3.webp"
    alt="A two-row strip on a linear rank axis from 1 to 246. The top row holds all 246 compared sites, with Malden Center #1 and #2 marked at rank 1, tied. The bottom row holds Quincy's 35 sites at their overall ranks, with the best of them, Quincy Center #1, marked at rank 7."
    width="2831"
    height="960"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Main comparison, equal weights. Restricting the ranking to Quincy leaves every score and the reference unchanged; the best Quincy site stands seventh overall.</figcaption>
</figure>

</details>

## Choosing what to score

I compared sites from MAPC’s Rethinking the Retail Strip inventory across nine
communities in the study’s rapid-transit scope. A site can span several tax parcels.
Screening for transit proximity, excluded land and flood risk leaves 251 sites. I set aside five records
whose parcel assessments could not be reliably attributed to individual sites. The
remaining 246 form the comparison set.

<table data-width="prose">
  <thead>
    <tr>
      <th>Indicator</th>
      <th>Preferred in this study</th>
      <th>What it does not represent</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Assessed land value per acre</td><td>Lower</td><td>An acquisition price; buildings, demolition and holding costs</td></tr>
    <tr><td>Buildable area</td><td>Larger</td><td>What zoning would permit or a design would fit</td></tr>
    <tr><td>Daily boardings and alightings at the nearest station with available ridership data</td><td>Higher</td><td>Distinct riders, future demand or revenue for a development</td></tr>
  </tbody>
</table>

These directions are preferences I chose for this comparison, not a measure of what
makes transit-oriented development succeed. I converted each indicator to a
percentile score within the 246 candidates, oriented so that higher scores reflect the
preferred direction. Equal weights give each indicator one third of the total. The
proximity filter requires a site’s centroid to fall within 0.805 km of the nearest
station with available ridership data, measured in a straight line.

Two indicators from earlier versions stay out of the score.

<dl class="issue-response">
  <div>
    <dt>Peak share, the portion of a station's weekday activity in the morning and evening peaks. Neither direction follows from this study's comparison goal.</dt>
    <dd>I kept peak share descriptive because the study did not establish whether peak-heavy or off-peak activity should be preferred.</dd>
  </div>

  <div>
    <dt>Regional job access. MAPC's measure describes the transit network before the Green Line Extension, and its edition is uncertain.</dt>
    <dd>I use it only in a labelled historical extension of the earlier four-indicator setting, outside the main comparison.</dd>
  </div>
</dl>

<details>
<summary>Screening steps and the five set-aside records</summary>

- The counts at each step are in the chart below. The land step keeps sites with
  less than half their area on excluded land and less than half in the 1% flood
  zone, two separate conditions.
- Each site is assigned to the nearest station with Fall 2025 ridership data, by
  coordinates. MAPC's own station label differs at 39 of the 285 sites.
- Three of the set-aside records, Assembly #1, Assembly #2 and Quincy Center #6, carry
  a parcel value whose attribution to the site is unclear. Two, Assembly #3 and Quincy
  Center #8, are held out conservatively, because they share parcels with the flagged
  records and the allocation of assessed values remains unresolved. None is a
  duplicate, and none was repaired or re-apportioned. Under the earlier four-indicator
  rules, keeping all five changes no first place and no top-ten member.
- Weekend ridership correlates at 0.98 with daily ridership, and MAPC's estimated
  mixed-use capacity at 0.94 with buildable area, so neither is scored.
- Peak hours are 07:00–10:00 and 16:00–19:00 on weekdays. Across stations, the peak
  share this window gives correlates at 0.96 with the MBTA's Fall 2024
  period-based measure.
- Data: MAPC inventory published January 2022, assessment year not stated; MBTA rail
  ridership by hour, Fall 2025.

<figure>
  <img
    src="/media/tod-boston/screening-funnel-m3.webp"
    alt="A horizontal bar chart of candidate counts at each screening step: 3,028 MAPC redevelopment sites in the region, 581 in a community with rapid transit, 285 associated with a rapid-transit station in MAPC's data, 265 within 0.805 km in a straight line, 257 with land value and buildable area above zero, 251 with excluded land and flood zone each under 50%, and 246 after five records are set aside because their valuation attribution is uncertain."
    width="3091"
    height="1084"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Candidate count at each screening step, from MAPC's regional inventory to the 246 compared.</figcaption>
</figure>

</details>

## Testing the ranking

I checked how the rankings responded to the reference set, indicator direction and
weights.

**What each score is measured against.** The earlier four-indicator setting used a
mixed reference: land value and buildable area were percentiles against the regional
MAPC reference data, and the station measures against the screened candidates.
Changing only that, to the candidate set for all four, keeps seven of the top ten.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th>Site</th>
        <th>Mixed reference</th>
        <th>Candidate-set reference</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Malden Center #1</td><td>1</td><td>1 (tied)</td></tr>
      <tr><td>Malden Center #2</td><td>2</td><td>1 (tied)</td></tr>
      <tr><td>Braintree #1</td><td>3</td><td>11</td></tr>
      <tr><td>Malden Center #3</td><td>11</td><td>4</td></tr>
    </tbody>
  </table>
  <figcaption>Equal-weight ranks in the historical four-indicator setting, where only the percentile reference changes. This is not the main three-indicator comparison.</figcaption>
</figure>

I used the same candidate set for every indicator so that the scores describe relative
standing within one comparison group.

**Which way peak share points.** Under equal weights, the preferred direction changes
which site ranks first.

<figure data-width="prose">
  <table data-width="prose">
    <thead>
      <tr>
        <th>Peak share</th>
        <th>First under equal weights</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Not scored (main comparison)</td><td>Malden Center #1 and #2, tied</td></tr>
      <tr><td>Scored, lower preferred</td><td>Malden Center #1 and #2, tied</td></tr>
      <tr><td>Scored, higher preferred</td><td>Alewife #1</td></tr>
    </tbody>
  </table>
  <figcaption>Alewife #1 ranks 62nd with lower preferred and first with higher preferred.</figcaption>
</figure>

**Weights.** Across 200,000 sampled weightings of the three indicators, 11 sites rank
first at least once, most often Malden Center #1 and #2. The shares describe that
sampling setup, not anyone's preferences or a chance of success.

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
- Adding MAPC's regional job access to the four-indicator setting widens the
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

## Interpreting the shortlist

A site is non-dominated when no other candidate is at least as good on all three
indicators and better on at least one. Fifteen of the 246 meet that test, in five
communities, and they form the shortlist for closer study.

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
        alt="A static map of the rapid transit network from Newton and Brookline in the west to Revere in the north-east and Braintree in the south, with the 246 compared sites as small white dots ringed in the colour of their nearest station's line, and the 15 non-dominated sites drawn larger in full colour, in Cambridge, Malden, Revere, Quincy and Braintree. Community names, a 5 km scale bar and a key beside the map."
        width="3840"
        height="2160"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
  <figcaption>All 246 compared sites, each in the colour of its nearest station's line. The 15 labelled markers are non-dominated; select a site for its values and equal-weight rank.</figcaption>
</figure>

Under equal weights, Malden Center #1 and #2 tie exactly for first.

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
      <tr><td>Daily boardings and alightings</td><td>13,356</td><td>13,356</td></tr>
      <tr><td>Equal-weight score</td><td>94.72</td><td>94.72</td></tr>
    </tbody>
  </table>
  <figcaption>The two sites share one station and so one activity value.</figcaption>
</figure>

Malden Center #1 has four more acres, and #2 has a slightly lower assessed land value
per acre. On each of those indicators the two are three places apart, in opposite
directions, so their equal-weight percentile scores tie. The tie means this scoring
cannot separate them, not that the sites are equivalent. A magnitude-sensitive scale
could rank them differently.

All 16 Malden Center sites share one station activity value, which is one reason seven
of them reach the top ten, so their high ranks are not independent evidence of a
transit advantage. Before any of the fifteen could become a development
recommendation, it would still need checks of ownership, walking connections and
development feasibility.

<details>
<summary>The percentiles behind the Malden tie</summary>

<table data-width="prose">
  <thead>
    <tr>
      <th>Percentile among the 246</th>
      <th>Malden Center #1</th>
      <th>Malden Center #2</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Buildable area</td><td>97.76</td><td>96.54</td></tr>
    <tr><td>Assessed land value per acre (lower preferred)</td><td>94.11</td><td>95.33</td></tr>
    <tr><td>Daily boardings and alightings</td><td>92.28</td><td>92.28</td></tr>
    <tr><td>Mean of the three</td><td>94.72</td><td>94.72</td></tr>
  </tbody>
</table>

Each gap of 1.22 points is three places among 246.

</details>
