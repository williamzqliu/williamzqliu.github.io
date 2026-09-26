---
title: barboard.space
year: 2026
dates: May 2026 – Aug 2026
blurb: A community music website for exploring charts, searching song contest archives, and revisiting members’ records.
tags: [interactive]
tracks: [engineering]
category: interfaces-experiences
published: true
stack:
  - HTML
  - CSS
  - JavaScript
  - Python
  - GitHub Actions
links:
  # Not `Live Demo`: this is the site itself, running, not a demonstration of
  # it. The label override is what the schema's named-link form is for.
  demo:
    href: https://barboard.space
    label: View Website
cover:
  # A presentation layout built in the barboard.space repository from the
  # site's own styles, components and 2023 data, with the interface text in
  # English (07-annual-hero-a-* in media-src). Not a screenshot of one live
  # page: the navigation links, back link and meta line are left out. The
  # banner is the head on a desktop; the 16:9 version, composed with safe
  # margins for the card's hover zoom, is the card and the phone head. The
  # logo plate (cover-wide.webp) is no longer shown.
  wide: /media/barboard/cover-annual.webp
  heroWide: /media/barboard/hero-annual.webp
  heroMobile: /media/barboard/cover-annual.webp
  tone: dark
  alt: "The BARBOARD wordmark above the title Year-End Singles Chart 2023, beside the top of the year’s ranking, each song with its album artwork, points and chart count."
  caption: "The 2023 year-end chart: songs ranked by combined points, with the number of member charts each song appears on."
quickFacts:
  - label: "Role"
    value: "Information architecture, interface design & development"
  - label: "Outcome"
    value: "Published front-end website bringing community charts and archives together"
credits:
  skills:
    - Front-end design
    - Information architecture
    - Responsive design
    - Data interface design
  tools:
    - HTML
    - CSS
    - JavaScript
    - Python
    - GitHub Actions
  # `Roles` rather than `Team`: I built the site for a community that already
  # existed, and there is no one else to file under it.
  teamLabel: Roles
  team:
    - group: Visual identity, website design & development
      people:
        - Zhuoqi Liu
  note: Selected coding tasks were supported by Claude Code.
  # One line behind the disclosure is not worth closing, so the note sits in
  # the open credits as the last row.
  collapse: false
---

## A shared place for records

Barboard is a Chinese-speaking community for Western pop music, founded on Baidu Tieba
in 2013. I joined in 2017. As daily conversation moved to WeChat, years of charts and
contest results remained scattered across posts, spreadsheets, and member-produced
videos.

I designed and built barboard.space to bring those records into a shared website. I
focused on information members could return to: past results, participation histories,
current charts, and event updates.

<figure>
  <img
    src="/media/barboard/homepage.webp"
    alt="The dark homepage, with a large split-colour BARBOARD wordmark and a short founding line on the left, a dated list of recent community updates on the right, and a scrolling news ticker along the bottom edge."
    width="2880"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The homepage connects current updates with contest archives, charts, and member records.</figcaption>
</figure>

## Finding records across years

I organized the archive around four questions: what happened in a particular edition,
whether a song or artist had appeared before, what a member had entered, and how songs
ranked in past annual charts. These became edition pages, cross-edition search, member
profiles, and annual chart archives.

A contest entry can appear in several rounds. To keep search results from repeating the
same entry, I grouped records by edition, member, artist, and song, then displayed the
furthest stage reached.

Member profiles provide another route through the archive. They bring a person’s entries
and results together across editions, so readers can follow their participation without
opening each contest separately.

<figure>
  <img
    src="/media/barboard/member-profile.webp"
    alt="A member profile: avatar and nickname beside a row of pentagon badges, one per contest edition, then statistic cards, a table of that member’s entries and results, and a line chart of their placing in each contest."
    width="2880"
    height="2900"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Member profiles bring cross-edition entries and results into one view.</figcaption>
</figure>

<details>
<summary>Archive structure and exports</summary>

The archive draws on community posts, spreadsheets, event files, and videos. Searchable
records are organized into structured data; supporting material remains available
through the relevant pages.

Search results summarize each entry’s progress through an edition. Detailed
round-by-round results remain on the edition pages.

Members can also export a profile as an image.

<!-- The export is a 3552 by 6378 card. The page carries its top; `data-full`
     opens the whole card in the viewer. -->
<figure>
  <img
    src="/media/barboard/member-export-preview.webp"
    data-full="/media/barboard/member-export-full.webp"
    alt="The top of an exported profile image: avatar, member name, edition badges, statistic tiles and a ranking line chart, laid out as a single shareable card."
    width="3552"
    height="1900"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The exported profile collects a member’s records in a shareable image.</figcaption>
</figure>

</details>

## Reading dense data on mobile

With everyday community conversation taking place on WeChat, I treated mobile access as a
core use case. Scoreboards and search results needed different layouts because they
support different reading tasks.

Scoreboards depend on comparison across entries and voters. I kept the table structure and
pinned the identifying columns while the remaining scores scroll horizontally. Shortened
member labels reduce the space needed by the fixed columns.

<figure>
  <img
    src="/media/barboard/scoreboard-responsive.webp"
    alt="The same voting scoreboard on desktop and on a phone. On both, the leftmost columns naming each entry stay fixed while the grid of individual voter scores continues off to the right."
    width="3332"
    height="1848"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Entry identifiers stay visible while readers scroll through voting columns.</figcaption>
</figure>

Search results can be read independently. On smaller screens, I changed the table into
cards, keeping each entry’s song, artist, member, and result together.

<figure>
  <img
    src="/media/barboard/stats-responsive.webp"
    alt="The same search results on desktop and on a phone. The desktop version is a seven-column table; on the phone each result becomes its own card, led by a large rank number."
    width="3332"
    height="1848"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Desktop rows become individual cards on mobile, preserving the details of each result.</figcaption>
</figure>

<details>
<summary>Responsive implementation</summary>

The scoreboard calculates sticky-column offsets from rendered column widths and
recalculates them when the window resizes. Opaque backgrounds keep scrolling scores from
showing through the pinned columns.

On chart pages, search controls move from the desktop sidebar to above the table on
smaller screens.

</details>

## One interface across editions

I designed the visual identities for each Barvision edition and adapted them for the
website through artwork, color, and hero treatments. Navigation, body typography, and
results tables remain consistent across editions.

For Chongqing 2026, I adapted the dark surfaces and luminous accents from the event
identity I designed. The page shares its structure with other editions, allowing the
archive to accommodate different visual themes.

<figure>
  <img
    src="/media/barboard/edition-theme-system.webp"
    alt="Four edition pages for different years of the contest in a two by two grid. The layout is the same in all four while the colour palette and background artwork change between them."
    width="2508"
    height="1374"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Edition artwork and colors change within a shared page structure.</figcaption>
</figure>

<details>
<summary>From event identity to webpage</summary>

I translated the Chongqing 2026 key visual into page colors and interface accents. The
event’s audiovisual design and live operation are documented in the
[Barvision case study](/work/barvision/).

<figure>
  <img
    src="/media/barboard/keyvisual-to-page.webp"
    alt="The Chongqing 2026 event poster, with blue and violet ribbons of light behind the BARVISION wordmark, beside the edition page that uses the same artwork as its background under the site navigation and a large city name and year."
    width="2920"
    height="868"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The Chongqing 2026 key visual informs the edition page’s palette and accents.</figcaption>
</figure>

</details>

## Keeping current information available

Alongside the archive, I built pages for current charts and events. During Barvision
2026, the site carried registration, schedules, updates, and published results. The live
broadcast ran through a separate system described in the
[Barvision case study](/work/barvision/).

BarboardLab’s weekly chart is compiled manually and usually published on Musictrack about
a week after its chart date. I wrote a Python script to retrieve the published results and
convert them into JSON, with GitHub Actions running the updates on a schedule.

The website uses that data to display rankings and calculate highlights such as the
biggest rise and longest-charting song. Selecting a highlight jumps to the corresponding
entry.

<figure>
  <img
    src="/media/barboard/bbl-current-chart.webp"
    alt="The weekly chart page: ranked rows with album artwork, position movement and per-track figures in the main column, and a sidebar with a search field and highlight cards such as the biggest riser and the longest-charting song."
    width="2880"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Selecting a chart highlight takes readers directly to its entry in the ranking.</figcaption>
</figure>

<details>
<summary>Updates and event states</summary>

If a chart request fails, the update script retains the last retrieved data. A future
improvement is to distinguish a successful update from an unchanged chart or a failed
request, and notify the maintainer after repeated failures.

Historical contest and annual chart records are imported separately, rather than through
the weekly chart workflow.

The contest submission page changed through the season, with different states before
registration opened, while submissions were accepted, and after registration closed.
Browser-side validation and a local receipt supported the submission flow, while EmailJS
handled delivery.

The receipt applies to the same browser and device. It is not an account-based submission
history.

</details>

The current site is a front-end implementation, supported by data-update scripts and
third-party form delivery. It brings historical records and current updates into one
place. I have not yet evaluated how members use its search and archive features over
time.

I plan to add a backend in a later version.
