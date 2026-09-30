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
  # margins for the card's hover zoom, is the card and the phone head.
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

Members contribute personal weekly charts to BarboardLab and annual lists to the
year-end rankings. In Barvision, they submit songs and vote through competition rounds.

I designed and built barboard.space to bring these activities into a shared website. The
homepage surfaces current updates, while activity pages preserve the charts and results.
A member directory provides another way in, through the people who contributed them.

<figure>
  <img
    src="/media/barboard/homepage.webp"
    alt="The dark homepage, with a large split-color BARBOARD wordmark and a short founding line on the left, a dated list of recent community updates on the right, and a scrolling news ticker along the bottom edge."
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

I added search for finding a specific song and linked highlights for exploring notable
chart changes. Both work beyond the initially displayed rows. In the example below,
selecting the biggest drop reveals the remaining entries and brings the song into view.

<!-- Recorded from a local copy of the production site (barboard.space
     053e56f), BarboardLab issue 141. The pointer is a marker drawn for the
     recording, since headless Chrome paints none, and the site's Back to top
     button was hidden in the recording only; the scroll and the violet row are
     the page's own. The poster is the opening frame. -->
<figure>
  <video
    src="/media/barboard/bbl-highlight-demo.mp4"
    poster="/media/barboard/bbl-highlight-poster.webp"
    width="1440"
    height="900"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The weekly chart with its highlight cards beside it. The pointer selects the biggest-drop card, Fire Away at number 95; the chart loads its remaining rows, scrolls down and marks that row."
  ></video>
  <figcaption>Selecting a weekly highlight locates its song within the full ranking.</figcaption>
</figure>

## Following Barvision across editions

Barvision’s format has changed across its history, from contests with separate song
categories to recent editions with semifinals and a final. I kept each edition’s rules,
results, and individual voting records together, preserving the context behind its
rankings. The 2026 event area also links to playlists and replay videos after voting has
closed.

I built cross-edition search by song, artist, member, and language. Within each
edition, results combine a song’s repeated appearances across rounds under the same
submitting member, showing the furthest stage reached. Each result links to its edition
and submitting member.

Search results can be read independently, so I presented them as individual cards on
mobile. Each card keeps the song, result, edition, and submitting member together, while
desktop readers can scan the same fields in a table.

<!-- Desktop and phone recorded separately in song mode and composited with
     typing starting on the same frame. The phone pane is scaled 1.075 so both
     windows are the same height with the mode tabs on one line. The poster is
     the opening frame, both inputs empty. -->
<figure>
  <video
    src="/media/barboard/stats-search-demo.mp4"
    poster="/media/barboard/stats-search-poster.webp"
    width="1442"
    height="566"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The query love is typed into the song search on desktop and mobile. Matching entries appear as table rows on desktop and cards on mobile."
  ></video>
  <figcaption>Typing ‘love’ filters the same archive into table rows on desktop and individual cards on mobile.</figcaption>
</figure>

Voting records require comparison across entries and voters, so I retained the grid on
mobile. Identifying columns stay fixed while the individual scores scroll horizontally,
keeping each score connected to its entry.

<!-- Real scrolling of the table's own container, desktop first and then the
     phone, recorded separately and placed on one canvas at one scale, with the
     two scoreboards' top edges on the same line. The poster is the opening
     frame: the 2026 Grand Final jury scoreboard, unscrolled. -->
<figure>
  <video
    src="/media/barboard/scoreboard-scroll-demo.mp4"
    poster="/media/barboard/scoreboard-responsive.webp"
    width="1678"
    height="880"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The 2026 Grand Final jury scoreboard on desktop and on a phone. Each table scrolls sideways in turn: the voter score columns move while the entry, member, total and jury columns stay in place."
  ></video>
  <figcaption>Entry identifiers remain visible while the voting columns scroll horizontally.</figcaption>
</figure>

<details>
<summary>Search and score records</summary>

Detailed round-by-round results remain on the edition pages.

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

I linked historical records through stable member IDs, accounting for changing nicknames
and jointly submitted songs. Each profile brings a member’s contest results and ranking
history together with their personal year-end selections and contributions to the
community charts.

Contest records and personal charts remain in separate sections. To keep several years
of selections manageable, each available personal list initially shows three songs and
expands to its full Top 10.

<!-- One desktop session on a local copy of the production site (barboard.space
     053e56f): a search in the member directory, a real click through to
     member 7, and the page scrolled to its foot. The pointer is a marker
     drawn for the recording, and the site's Back to top button was hidden in
     the recording only. The poster is the top of the member page. -->
<figure>
  <video
    src="/media/barboard/member-journey-demo.mp4"
    poster="/media/barboard/member-journey-poster.webp"
    width="1440"
    height="900"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="A member search for williw_ opens their profile. The page scrolls through contest results and ranking history, then expands and collapses the 2023 personal Top 10 before continuing to the bottom."
  ></video>
  <figcaption>A member search connects contest history with personal year-end charts; available lists expand from three songs to ten.</figcaption>
</figure>

Where source material is incomplete, the profile identifies the missing records. Members
can also export their Barvision ranking history or complete contest record as an image.

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
edition. The renderer handles differences in competition structure and voting formats,
keeping page behavior consistent while preserving each edition’s rules and results.

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
    alt="The tops of four edition pages in a two by two grid, for Qiqihar 2023, Tonghua 2024, Jinzhong 2025 and Chongqing 2026. Each keeps the same navigation bar and hero layout, with the city, the year and the contest logo, while the artwork and colors change."
    width="2988"
    height="1404"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Each edition uses its own artwork and colors within a shared navigation and hero layout.</figcaption>
</figure>

<details>
<summary>Data updates and event support</summary>

BarboardLab’s weekly chart is compiled manually and usually published on Musictrack about
a week after its chart date. I wrote a Python script to retrieve the published results
and convert them into JSON. Scheduled GitHub Actions runs update the chart data, homepage
ticker, and dated announcement together.

If a chart request fails, the script retains the previous data so the page remains
available. A next improvement is to distinguish a newly published issue from an
unchanged chart or a failed request, and notify the maintainer after repeated failures.

During Barvision 2026, the submission page used different states before registration
opened, while submissions were accepted, and after registration closed. Browser-side
validation and a local receipt supported the submission flow, while EmailJS handled
delivery. The receipt applies to the same browser and device. After the event, playlists
and replay links remain available.

</details>

The published site brings historical records and ongoing community activity into one
place. Weekly charts are retrieved on a schedule, while contest and year-end archives
follow separate import processes. I have not yet evaluated how members use the search
and archive features over time.
