---
title: Transit-Oriented Development in Boston
year: 2024
dates: Oct 2024 – Dec 2024
blurb: A two-phase weighted model that picks one transit station out of 124 for mixed-use development.
tags: [interactive]
tracks: [engineering]
featured: 8
stack:
  - Python
  - pandas
  - Plotly
  - Folium
  - geopy
links: {}
cover:
  wide: /media/tod-boston/cover-wide.webp
  tone: light
  alt: A bar chart ranking eight Boston-area communities by TOD suitability score, with Quincy highest at 69.95.
quickFacts:
  - label: "Role"
    value: "Data Analyst"
  - label: "Outcome"
    value: "Recommended station, Quincy Center, at an estimated $482M"
---

## The question a policy created

In January 2021 Massachusetts introduced a multi-family zoning requirement for MBTA
communities as part of its economic development bill. Every community served by the
MBTA has to zone a district where multi-family housing is permitted by right, and that
district has to sit near a transit station.

The policy says where housing must be allowed. It does not say where anyone should
actually build. That is the gap this project works in: given the whole MBTA rapid
transit network, which single station is the best candidate for a mixed-use
transit-oriented development, and what would it cost?

The answer needs to satisfy three things at once that pull against each other.
Ridership has to be high enough to justify density. Land has to be cheap enough for
the numbers to work. And the surrounding area has to have room to develop and a reason
to want it.

## Narrowing 124 stations to one

The screening funnel does most of the work.

The MBTA runs 124 rapid transit and light rail stops across the Red, Orange, Blue and
Green lines. The Silver Line is excluded because it is operated as bus rapid transit
rather than rail.

The state classifies MBTA communities into four service tiers. Twelve of them are
Rapid Transit Communities, meaning they have a subway station inside or within half a
mile of their border. Those twelve are the only places a rail-anchored TOD makes
sense.

Matching stations to communities turned out to be the awkward step, because the station
dataset carries coordinates and the community dataset carries names. I reverse
geocoded all 124 stations through Nominatim with a rate limiter to get a postcode for
each, then intersected those postcodes with the postcodes of the twelve communities.
That produced 45 candidate stations across eight communities. One station, Harvard,
came back with the wrong postcode and was corrected by hand.

Eight communities and 45 stations is small enough to evaluate properly and large enough
that the answer is not obvious.

## Five indicators, and what each one is for

The community-level model scores each of the eight on five measures. The reasoning
behind each one matters more than the arithmetic.

**Inbound rate**, weighted 20%. Average daily boardings divided by resident
population. Using absolute ridership would hand the win to whichever community has the
most people; the ratio measures how much a community actually depends on rail. Revere
leads at 5.68%, Newton trails at 0.15%.

**Coverage**, weighted 25%. The share of the community's district that must sit inside
a station area under the zoning requirement. Five communities are at 90%, three at 50%.
This is the most direct measure of whether transit-adjacent development can reach the
community rather than sit at its edge.

**Developable station area**, weighted 15%. Land available for development inside a
half-mile radius of stations, with excluded land removed. Newton has by far the most at
2,833, and Revere the least at 457.

**Commercial land use**, weighted 10% and inverted. A count of TOD-relevant zoning
entries. The logic for inverting it: a community that already has a working commercial
centre gains less from a new mixed-use development than one that does not. Somerville
has seven such entries, Braintree none.

**Land price**, weighted 30% and inverted. Assessed land value per acre. Brookline
runs at $4.34M per acre, Braintree at $429K. This is the heaviest weight in the model
because a development that cannot be financed does not get built.

Everything is min-max normalised with a small epsilon so no value lands exactly on 0
or 1.

## Why Quincy won

Quincy scores 69.95, ahead of Cambridge at 64.11 and Newton at 60.66. Brookline comes
last at 39.85.

Quincy does not win on ridership. Its inbound rate is 1.24%, sixth of eight. It wins
on the combination of 90% coverage, the second-cheapest land in the set at $555K per
acre, and only two existing TOD-relevant zoning entries, which under the inverted
scoring reads as unmet need.

Cambridge is the interesting comparison. It matches Quincy on coverage, beats it on
inbound rate and developable area, and has even less existing commercial zoning. It
loses on land at $2.47M per acre, roughly four and a half times Quincy's.

Which means the ranking between the top two is decided by the land price weight, and
that weight is a judgement I made rather than a value I derived. More on that below.

## Quincy Center

The second phase drops to station level, where the question changes. Community
selection is about feasibility; station selection is about whether there is enough
human activity, spread across enough of the week, to sustain mixed use.

Four stations sit in Quincy: Quincy Center, North Quincy, Wollaston and Quincy Adams.
They score on four ridership measures: average daily ridership at 40%, average weekend
ridership at 20%, and two stability ratios at 20% each.

The stability ratios are the point of this phase. Peak-to-off-peak compares weekday
rush-hour flow to the rest of the day. Weekday-to-weekend compares the two halves of
the week. For both, a value near 1 is what you want, because it means the station is
busy across the day and across the week rather than for four hours on weekday
mornings. A commuter station with enormous peak flow and nothing else is a bad host for
retail and housing.

Quincy Center takes it with 82.40, against 53.32 for North Quincy, 49.91 for Wollaston
and 14.66 for Quincy Adams. It has the highest daily ridership at 3,366 and the
highest weekend ridership at 1,660, and it is the most balanced of the four on both
stability ratios.

Quincy Adams scoring 14.66 is instructive. It is a park-and-ride station: reasonable
peak flow, almost nothing on weekends. Exactly the profile the stability ratios were
built to catch.

## What it would cost

A 500,000 square foot mixed-use project, sized against local precedent rather than
ambition. The Prudential Center runs 3.6 million square feet, which is a different
order of city. Two recent Quincy projects sit closer: 119 Parkingway at seven storeys
with 300 units, and 1469 Hancock Street at fifteen storeys with 204.

At a floor area ratio of 3, 500,000 square feet needs about 3.8 acres.

| | | |
|---|---|---|
| Construction | 500,000 sqft at $700 | $350,000,000 |
| Land | 3.8 acres at $555,520 | $2,110,977 |
| Soft costs | | $129,500,000 |
| **Total** | | **$481,610,977** |

Soft costs break down into $70M general, $35M infrastructure and utilities, $17.5M
financing, and $7M marketing and pre-operational.

The land line is the striking one. At 0.44% of total cost, land is almost a rounding
error, which undercuts the 30% weight the model gave it. That tension is worth sitting
with rather than smoothing over: land price is a small share of the total budget but a
large share of the risk, because it is paid up front before anything generates revenue.

Programme splits into 100,000 square feet of retail and 400,000 of residential and
office.

<details>
<summary>Where the model is weak</summary>

Three problems, in order of how much they matter.

**The closeness-to-1 normalisation produces negative values.** It is implemented as
`1 - |x - 1|`, which goes negative once a ratio exceeds 2. All four weekday-to-weekend
ratios fall between 2.45 and 2.96, so all four normalised values are negative, between
-0.45 and -0.96. The direction is right, in that a station further from balance is
penalised more, but the output is no longer bounded to [0, 1], so the composite score
cannot be read as a 0 to 100 scale. A flat offset was added to compensate, which fixes
the sign and not the interpretability. `1 / (1 + |x - 1|)` would keep it bounded.

**Min-max within the sample makes every score relative.** With eight communities and
four stations, normalisation forces the best in each group to 1 and the worst to 0.
Quincy Center's 82.40 means "best of these four", not "82% suitable". Comparing these
scores against a different candidate set would be meaningless.

**No sensitivity analysis, on a result that is sensitive.** Land price carries 30% of
the community score, and it is what separates Quincy from Cambridge. Dropping that
weight toward 15% would likely reverse the ranking. Each weight has a written
justification, but a justification is not a test, and the honest statement about this
model is that it produces a defensible answer rather than a robust one.

</details>

## What I would do next

Run the sensitivity analysis. Not because it would probably overturn Quincy, but
because knowing which weights the answer hangs on is more useful than the answer. A
model that says "Quincy Center, and here is the range of weightings under which that
holds" is worth something to a planner. A model that says "Quincy Center, 82.40" is
worth less than it appears.

The second thing is to stop treating the two phases as independent. Community selection
throws away seven communities before station-level ridership is ever examined, which
means a strong station in a mid-ranked community never gets evaluated. That is
defensible as a way to keep the problem tractable, and it is still a real limitation of
the funnel.
