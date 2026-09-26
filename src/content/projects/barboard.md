---
title: barboard.space
year: 2026
dates: May 2026 – Aug 2026
blurb: A community music website for exploring shared charts, following song contests, and revisiting members’ records.
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
    href: https://barboard.space/
    label: View Website
cover:
  # A presentation layout built in the barboard.space repository from the
  # site's own styles, components and 2023 data, with the interface text in
  # English (08-annual-hero-* in media-src). Not a screenshot of one live
  # page: the navigation links, back link and meta line are left out, and the
  # chart shows places 1 to 5 without the asterisked 4* row. The
  # banner is the head on a desktop; the 16:9 version, composed with safe
  # margins for the card's hover zoom, is the card and the phone head. The
  # logo plate (cover-wide.webp) is no longer shown.
  wide: /media/barboard/cover-annual.webp
  heroWide: /media/barboard/hero-annual.webp
  heroMobile: /media/barboard/cover-annual.webp
  tone: dark
  alt: "The BARBOARD wordmark above the title Year-End Singles Chart 2023, beside the top of the year’s ranking, each song with its album artwork, points and chart count."
  caption: "The 2023 year-end chart shows combined points alongside the number of member lists supporting each song."
quickFacts:
  - label: "Role"
    value: "Information architecture, interface design & development"
  - label: "Outcome"
    value: "Published website connecting community charts, contest archives, and member profiles"
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

## A home for community music

Barboard is a Chinese-speaking community for Western pop music, founded on Baidu Tieba
in 2013. I joined in 2017. As daily conversation moved to WeChat, years of charts and
contest results remained scattered across posts, spreadsheets, and member-produced
videos.

Members share music through several activities. BarboardLab combines their personal
weekly charts into a community ranking. The year-end archive preserves rankings compiled
from members’ annual lists. Barvision is a song contest in which members submit songs
and vote through competition rounds.

I designed and built barboard.space to bring these activities into a shared website. The
homepage surfaces current updates, while activity pages preserve the charts and results.
A member directory provides another way in, through the people who contributed them.

<figure>
  <img
    src="/media/barboard/homepage.webp"
    alt="The dark homepage, with a large split-colour BARBOARD wordmark and a short founding line on the left, a dated list of recent community updates on the right, and a scrolling news ticker along the bottom edge."
    width="2880"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Dated updates and contest status sit alongside routes into the community’s records.</figcaption>
</figure>

## Exploring shared music charts

The year-end archive covers 2013–2023. I converted spreadsheets with different layouts
into a consistent chart format, while keeping personal selections separate from the
combined ranking. Each year’s entry card previews its winning song and contributing
lists; readers can move between adjacent years from the chart page.

Weekly and annual charts share a consistent order for rank, artwork, song, and artist.
Their supporting figures differ: weekly charts show movement, peak position, weeks on
the chart, and current points; annual charts show combined points and how many member
lists included each song.

I added search and linked highlights to support different ways of exploring a ranking.
Readers can look up a song directly or jump from a weekly highlight, such as the
longest-charting song, to its row. Search includes songs beyond the initially displayed
list, and a highlight can reveal a row that has not yet been expanded.

<figure>
  <img
    src="/media/barboard/bbl-current-chart.webp"
    alt="The weekly chart page: ranked rows with album artwork, position movement and per-track figures in the main column, and a sidebar with a search field and highlight cards such as the biggest riser and the longest-charting song."
    width="2880"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Selecting a weekly highlight locates its song within the full ranking.</figcaption>
</figure>

## Following Barvision across editions

Barvision’s format has changed across its history, from contests with separate song
categories to recent editions with semifinals and a final. I kept each edition’s rules,
results, and individual voting records together, preserving the context behind its
rankings. The 2026 event area also links to playlists and replay videos after voting has
closed.

For readers looking for a particular song, I built a separate search across editions,
with modes for song, artist, member, and language. A song that progressed through
several rounds appears once, with its furthest stage reached. Links lead back to the
relevant edition and the member who submitted it.

On mobile, the search results become individual cards.

<figure>
  <img
    src="/media/barboard/stats-responsive.webp"
    alt="The same search results on desktop and on a phone. The desktop version is a seven-column table; on the phone each result becomes its own card, led by a large rank number."
    width="3332"
    height="1848"
    loading="lazy"
    decoding="async"
  />
  <figcaption>A search result links the song to its contest edition and submitting member; on mobile, it becomes a self-contained card.</figcaption>
</figure>

Voting tables retain their grid because readers need to compare scores across songs and
voters. I pinned the identifying columns while the remaining scores scroll horizontally.

<figure>
  <img
    src="/media/barboard/scoreboard-responsive.webp"
    alt="The same voting scoreboard on desktop and on a phone. On both, the leftmost columns naming each entry stay fixed while the grid of individual voter scores continues off to the right."
    width="3332"
    height="1848"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Entry identifiers remain visible while the voting columns scroll horizontally.</figcaption>
</figure>

<details>
<summary>Search and score records</summary>

I grouped search records by edition, member, artist, and song, retaining the record from
the furthest competition stage. Detailed results remain on the edition pages, where
readers can inspect each round separately.

The 2026 import preserves published score values and includes checks against individual
jury votes. Approval-vote rounds retain their published ties and are excluded from
selected historical records that use a different scoring scale.

The data center also includes an edition overview, a sortable member leaderboard, and
winners’ shares of the available score pool. These summaries sit alongside individual
song searches; differences in voting rules still matter when comparing editions.

</details>

## Connecting records through members

People provide a different route through the same history. I built a directory
searchable by nickname or account name, with filters for community groups and
participation in a particular Barvision edition.

<figure>
  <img
    src="/media/barboard/member-directory.webp"
    alt="The member directory with name search, community-group and Barvision filters, the member count, and cards linking to individual profiles."
    width="2360"
    height="1572"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Name search and activity filters lead to individual members’ records.</figcaption>
</figure>

I linked historical records through stable member IDs, accounting for changing nicknames
and jointly submitted songs. This lets the same person’s participation appear together
across editions and activities.

Each profile keeps contest participation and personal year-end charts in separate
sections. The Barvision section combines results, a sortable song table, and a ranking
history. The year-end section shows available personal Top 10 lists and how many of that
member’s selections appeared in the community’s combined rankings.

<!-- Both profile crops are member 7, captured from the live site at 1440 by
     900 and 2x: the first from the name down to the end of the ranking
     history, the second from the year-end heading to the end of the expanded
     2023 Top 10. -->
<figure>
  <img
    src="/media/barboard/member-profile.webp"
    alt="A member profile: the member’s name and edition badges, then the Barvision section with summary figures, a sortable table of their contest entries and results, and a line chart of their placing in each edition."
    width="2360"
    height="2690"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Contest results and ranking history remain grouped under the member who submitted the songs.</figcaption>
</figure>

<figure>
  <img
    src="/media/barboard/member-annual-records.webp"
    alt="The year-end section of the same member’s profile, showing contribution counts and an expanded personal Top 10 list."
    width="2360"
    height="2360"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The same profile connects personal year-end selections with their presence in the community chart.</figcaption>
</figure>

I used in-page navigation to connect the sections and expandable lists to keep several
years of personal charts manageable. Where source material is incomplete, the profile
identifies the missing records. Members can also export their Barvision ranking history
or complete contest record as an image.

<details>
<summary>Personal records and exports</summary>

The combined annual chart does not contain every song from every member’s list. For
years where those selections would be missing, I used full source sheets or individual
submissions to build the personal Top 10s. Where detailed records were unavailable, I
kept only the known contribution counts and marked the missing personal lists.

I built image export as a separate layout for Barvision records. The ranking chart is
redrawn at a fixed width, with embedded fonts and resolved styles, before it is combined
with the member’s results. On supported touch devices, the file can use the system share
sheet; otherwise it downloads as a PNG.

</details>

## A shared interface across editions

I built the contest pages around a shared renderer and separate data files for each
edition. The renderer accommodates changes in competition structure, including separate
song categories, semifinals, finals, and approval-vote rounds. This keeps page behavior
consistent while preserving each edition’s rules and results.

For the recent editions shown here, I designed the event identities and translated them
into theme settings for artwork, colors, and hero treatments. Shared navigation,
typography, and table styling provide continuity. Separate mobile artwork avoids
cropping essential parts of the desktop composition.

Chongqing 2026 uses dark surfaces and luminous accents from its event artwork. The
website carries this identity through the contest pages; the audiovisual design and live
broadcast system are documented in the [Barvision case study](/work/barvision/).

<figure>
  <img
    src="/media/barboard/edition-theme-system.webp"
    alt="Four edition pages for different years of the contest in a two by two grid. The layout is the same in all four while the colour palette and background artwork change between them."
    width="2508"
    height="1374"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Edition artwork and colors vary around consistent navigation and data-table styling.</figcaption>
</figure>

The published site combines a historical archive with ongoing community activity. A
scheduled Python workflow retrieves the weekly chart and updates both its ranking data
and the homepage announcement. Historical contest and annual-chart records follow
separate import processes. The implementation uses front-end pages, data-update scripts,
and third-party form delivery. I have not yet evaluated how members use the search and
archive features over time.

<details>
<summary>Data updates and event support</summary>

BarboardLab’s weekly chart is compiled manually and usually published on Musictrack about
a week after its chart date. I wrote a Python script to retrieve the published results
and convert them into JSON. Scheduled GitHub Actions runs update the chart data, homepage
ticker, and dated announcement together.

Fetch failures leave the previous chart data in place. The current workflow does not
reliably distinguish a new issue, an unchanged issue, and a handled fetch failure in its
success status. Historical contest and annual-chart records follow separate import
processes.

During Barvision 2026, the submission page used different states before registration
opened, while submissions were accepted, and after registration closed. Browser-side
validation and a local receipt supported the submission flow, while EmailJS handled
delivery. The receipt applies to the same browser and device. After the event, playlists
and replay links remain available.

</details>
