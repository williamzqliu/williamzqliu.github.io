---
title: barboard.space
year: 2026
dates: May 2026 – Aug 2026
blurb: A web portal and archive for a long-running Chinese music community, bringing members, charts, events, and history together.
tags: [interactive]
tracks: [engineering]
featured: 7
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
    label: Website
cover:
  wide: /media/barboard/cover-wide.webp
  tone: dark
  alt: "The Barboard logo, a five-sided badge beside the wordmark, on a dark grid with purple and teal light at the edges."
quickFacts:
  - label: "Role"
    value: "Designer & Developer"
  - label: "Outcome"
    value: "Live community archive and web portal at barboard.space"
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
  # The role is the row label, so the name sits in the open credits rather than
  # behind a control. No `Team`: I built the site for a community that already
  # existed, and there is no one else to file under it.
  teamLabel: Design and development
  team:
    - people:
        - Zhuoqi Liu
---

## From Tieba to barboard.space

<!-- The page is `lang="en"`. Without marking these three, a screen reader
     pronounces Chinese with an English voice. -->

Barboard (<span lang="zh-Hans">榜吧</span>), short for
<span lang="zh-Hans">欧美流行音乐个人榜吧</span>, is a Chinese-speaking community for
Western pop music founded on Baidu Tieba in 2013. Its English name combines
&#8220;Bar,&#8221; a play on the Chinese &#8220;<span lang="zh-Hans">吧</span>,&#8221;
with &#8220;board,&#8221; reflecting the personal-chart culture at the center of the
community. I joined in 2017.

As day-to-day conversation gradually moved to WeChat, there was no longer a single durable
place for the community&#8217;s members, charts, events, and years of records. Chat was
good for staying connected, but not for finding what happened years ago.

In 2026, I designed and built barboard.space as an archive and web portal for the
community. The goal was not to replace WeChat, but to give Barboard a place of its own for
information people might want to return to.

<!-- TODO media. This section wants one desktop view of the barboard.space home
     page, showing the BAR / BOARD identity, 欧美流行音乐个人榜吧, the live updates
     area and enough interface to read as a working site. Nothing of the kind is
     in `media-src/barboard/`, which holds only the logo the cover is cut from,
     and the browser pane cannot capture at the 2400 to 3200px the media rules
     ask of a screenshot. Drop a full-width home page capture into that folder
     and it goes in here, above the callout. Keep the Chinese interface as it
     is; the caption carries the context. -->

> **Product scope**
>
> Not another social platform.
>
> WeChat remained the place for daily conversation. barboard.space was built for the
> information the community needed to keep, revisit, and find again.

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. None of it is published elsewhere on the page. Delete once each
     fact has a home in Sections 02 to 06 or has been ruled out.

     1. Scale and terms: the community is 143 people; I am a core member; the
        site was unpaid, unasked for, and built alongside a thesis and a job
        search, which is the constraint the whole thing was designed around.

     2. Why static: not a conviction about architecture but the shape of the
        thing one person could ship and keep running, and a stage rather than
        an end state, with a backend as the intended next step. Section 06
        still carries the backend argument; this framing does not.

     3. What I did and how: art direction, visual system, information
        architecture and technical direction were mine, and the implementation
        was carried out with AI assistance, visible in the commit history
        rather than hidden, with 302 of 353 commits carrying a co-authorship
        trailer. This is a disclosure the previous draft chose to make in the
        open, and it currently appears nowhere on the page.
-->


## Shaping the visual system

Barboard already had its own identity, but barboard.space took shape during Barvision
Chongqing 2026, the community&#8217;s largest event. I had designed that edition around
Chongqing&#8217;s river confluence and cyber-lit nightscape, using liquid neon, wave-like
forms, and blue-violet light. I carried that visual language into the website so the new
portal felt connected to the community&#8217;s biggest live moment.

From there, I simplified it into a reusable web system: small Chinese labels paired with
large English display headings, a dark base, and shared accent colors across members,
charts, events, and archives, while BarboardLab and individual Barvision editions kept
their own visual character.

> **System principle**
>
> Turn a seasonal visual language into a system that could outlast the season.
>
> The website carried the atmosphere of Barvision Chongqing 2026 into reusable typography,
> color, and interface rules for the wider community.

<details>
<summary>Visual system details</summary>

**From Barvision 2026 to the web.** The Chongqing edition was built around the meeting of
the Jialing and Yangtze rivers, which let water ripples and sound-wave interference stand
for each other. Its identity used dark surfaces, liquid neon, refraction, and glow on a
blue-violet base, with each stage introducing its own accent colors. The website does not
reproduce that artwork. I took the reusable qualities out of it instead: dark surfaces,
luminous accents, restrained glow, and a shared color vocabulary.

**Typography across two scripts.** The community follows Western pop music in Chinese, so
Chinese interface text sits beside English artist names, song titles, chart terminology,
and event branding on the same page. Large display headings use Bebas Neue, Chinese text
and body copy use DM Sans, and DM Mono carries dates and other data. Bebas Neue and DM
Mono have no Chinese glyphs, so Chinese content needs a fallback that is chosen rather
than whatever the browser reaches for, and stating that became an explicit rule across the
site. The member renderer detects CJK characters and switches the face for exactly this
reason.

**From campaign colors to interface colors.** The event palette becomes interface roles
rather than decoration. Blue, pink, violet, and gold recur across headings, rankings,
states, charts, and activity accents, while shared background and text values keep the
data-heavy pages consistent. The implementation currently holds 65 CSS custom properties.

**Shared system, local identities.** BarboardLab works inside the shared system with its
own color treatment, and a Barvision edition can keep its own palette in the hero area,
while tables, navigation, typography, and the rest of the interface return to the common
system. The pentagon mark recurs as a motif across those contexts. Consistency does not
require every activity to look identical.

The same Barvision 2026 visual language was also extended into the event&#8217;s
[live broadcast and control system](/work/barvision).

</details>

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. Not published elsewhere on the page. Delete once each fact has a
     home in Sections 03 to 06 or has been ruled out.

     1. A single fixed dark palette with no theme switching: no
        `prefers-color-scheme`, no data attribute, no light mode. For a
        community site with one context of use, a theme toggle adds surface
        area and answers no question anyone asked.

     2. The token counts behind the 65: they are referenced across 29 files,
        and 51 of them are palette.

     3. Tokens are redeclared in exactly one place, a 768px breakpoint where
        four spacing and layout values change. Responsive rather than thematic
        redeclaration, which is the less common of the two uses. This is
        Section 04's material.
-->


## Making history searchable

Barboard&#8217;s history was never stored in one place. Over more than a decade, records
accumulated across Tieba posts, spreadsheets, and chart videos edited and uploaded by
members to Bilibili, a major Chinese video-sharing platform. The information was still
there, but as the years passed, it became harder to trace, compare, or even know where to
look.

For barboard.space, I began bringing those records back together as a structured archive.
Instead of treating past results as isolated artifacts, I designed ways to explore them by
edition, year, person, song, artist, and language. The goal was not simply to preserve old
files, but to make the community&#8217;s history easier to return to and use again.

<!-- Four figures, so the strip closes its dividers into a cross. Coarse to fine
     rather than high to low: these are not four measurements of one thing, and
     editions, years, entries and ballots is the order the archive nests in. -->

<div class="stat-strip" data-grid>
  <div class="stat-strip__cell">
    <p class="stat-strip__value">16</p>
    <p class="stat-strip__label">Barvision editions</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">11</p>
    <p class="stat-strip__label">Years of annual charts</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">771</p>
    <p class="stat-strip__label">Competition entries</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">11,130</p>
    <p class="stat-strip__label">Ballot records</p>
  </div>
</div>

> **Archive principle**
>
> Preserving history also means making it possible to find again.
>
> Bringing scattered records into connected views made more than a decade of community
> activity easier to revisit.

<details>
<summary>How the archive was rebuilt</summary>

**Records across platforms and formats.** The material accumulated over many years rather
than arriving as one dataset: Tieba-era records, spreadsheets, activity files, and
member-produced videos hosted on platforms such as Bilibili. Different activities and
different years preserved different levels of detail, so the first job was deciding which
sources could become structured data and which could only stay as references or media.
The point was never to copy every old artifact into the website. It was to rebuild the
information people would want to return to.

**From records to questions.** The same material is reorganized into different views
depending on what someone is trying to find. What happened in this edition goes to the
Barvision edition pages. Whether a song or an artist has appeared before goes to Barvision
Stats. What a person has done goes to their member profile. What was on the chart in a
given year goes to the annual chart archive. Deciding those four questions first, and
letting the views follow from them, is the information architecture.

**Reconstructing incomplete history.** The original Barvision summary archive held 87
podium-result rows across 15 editions. Reconstructing the records underneath them expanded
that into 771 competition entries, 1,140 voter records, and 11,130 ballot cells across 16
editions, alongside 2,291 chart rows across 11 years in the annual archive. Completeness
still varies by year and by activity. The interface distinguishes information that is
missing from a value that is genuinely zero, and anonymous or unattributed entries stay
unattributed rather than being assigned to a member who looks likely. An archive that
hides its own gaps is harder to trust than one that shows them.

</details>

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. Not published elsewhere on the page. Delete once each fact has a
     home in Sections 04 to 06 or has been ruled out.

     1. What static bought: no server of any kind, the site is static files on
        GitHub Pages behind a custom domain, everything that would normally
        need a backend is pushed to a third party or moved to the client, and
        the operational cost after three months is a domain registration.
        Nothing breaks while nobody is looking: nothing to patch, nothing to
        renew, no credentials to rotate, no bill to forget.

     2. How that works in practice: the member directory is a CSV the browser
        fetches, parses and renders as 143 cards with live filtering and
        substring search, with no API and no query layer, so adding a member is
        a line in a CSV. The one form, for contest submissions, posts through
        EmailJS from the browser. Every page is authored HTML with no build
        step, no bundler and no package manager, fonts are self-hosted, and the
        EmailJS SDK is the only third-party script on the site.

     3. What it cost: every piece of state is maintained by hand. Adding a
        member means editing the CSV and keeping a hardcoded list of built
        pages in sync with it. Cache invalidation means bumping a version
        string across every page that references the stylesheet. Submission
        de-duplication lives in local storage, so it works per device and not
        per person. None of those are bugs; they are the same decision seen
        from the maintenance side.
-->


## Designing for small screens

Barboard members often talk about music in WeChat, then leave the conversation briefly to
check a chart result or song before sharing it back in the group. That made mobile access
an important part of the website experience.

On data-heavy pages, that was not always simple. Some Barvision scoreboards are more than
1,100 pixels wide, so instead of shrinking everything, I changed how the information
behaves at smaller widths: tables scroll while key columns stay visible, some become
cards, and controls move to more useful positions.

> **Responsive principle**
>
> Preserve the information, change the presentation.
>
> A smaller screen should change how dense content is arranged, not simply make everything
> smaller.

<details>
<summary>Responsive implementation details</summary>

**Keeping wide scoreboards usable.** Several Barvision tables are wider than a phone
screen and cannot honestly be made narrower, so the horizontal scroll is contained inside
each table rather than let loose on the page. The columns that say who and what a row is
stay in place while the score columns move under them, and a swipe hint appears only when
the table actually exceeds the width available. The frozen positions are measured from the
rendered columns with `getBoundingClientRect()` rather than assumed from fixed values,
because the widths change with the content.

**Changing components, not only dimensions.** Some Stats and Hall of Fame tables stop
being tables on a small screen and become cards. Long member handles give way to shorter
nicknames where the horizontal space is worth more than the full name. The BarboardLab
search control leaves the desktop sidebar and sits above the chart. Member grids drop
columns, and navigation becomes a drawer. Responsive work here meant changing what a
component is and where it sits, not only its type size and spacing.

**Refining real browser behavior.** Several decisions only came from watching the pages
run. Measuring widths as fractions rather than rounding them took the visible jitter out
of the frozen columns. Frozen cells needed opaque backgrounds, or the scrolling content
showed through them. `text-size-adjust: 100%` stopped Chrome inflating type in the wide
scoreboards. Hover states and tooltips are suppressed where they mean nothing on a touch
device.

</details>

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. Not published elsewhere on the page. This is Section 06's
     material: it is the honest account of what the build does not do, and
     `Looking ahead` is where it belongs. Delete once it has a home there or
     has been ruled out.

     1. The token system covers less than it should. No radius, shadow or
        motion tokens at all; those values are written literally at each use
        site. A Python audit script exists to find exactly this drift, and run
        today it reports 45 hardcoded hex colours with no matching token, 262
        distinct rgba literals of which 52 recur three or more times, 15
        off-scale font sizes out of 36, and 34 off-scale spacing values out of
        43.

     2. The audit is not enforced. It runs manually, is not in CI, has no
        threshold, and never fails a build, so it reports drift rather than
        preventing it, and drift accumulated anyway.

     3. Its committed output is stale by a wide margin. The tool excluded
        generated member pages by matching a filename pattern; a migration to
        clean URLs renamed those pages from `member/<id>.html` to
        `member/<id>/index.html`, the exclusion silently stopped matching, and
        the scan grew from 12 files to 194. It did not error, it just started
        reporting on a different corpus while the checked-in report kept
        describing the old one. A consistency checker with no test coverage of
        its own scope is a checker you cannot trust, and a routine rename is
        what broke it.

     4. Other known issues. Cache-busting query strings appear on 16 of 184
        pages. Thirteen PNGs account for 93.7MB of the repository with no image
        pipeline, no WebP or AVIF and no LFS. Fourteen of 29 Python scripts
        have no execution path and exist only as one-shot generators
        referenced in documentation. Documentation runs to 714KB, 5.6 times
        the size of all the CSS and JavaScript source combined.

     5. The audit tool is the part I would rebuild. Not because a checker is
        the wrong idea, but because a checker that cannot fail a build is a
        note to yourself, and I wrote it as though it were a guardrail.

     6. There is no measurement at all: no analytics, no tag manager, no error
        tracking. That kept the build simple, and it means that after three
        months I can say the site works and cannot say whether anyone uses the
        member directory, which is the feature I spent the most time on.
-->


## Building live community tools

barboard.space was not only built for looking back. During Barvision 2026 and each weekly
BarboardLab update, it also needed to reflect what the community was doing now. Members
could check the latest chart, search within it, follow the contest, and submit songs while
registration was open.

I designed these as reusable tools rather than one-off event pages. The chart updates from
structured data, time-sensitive pages change as an event moves through different stages,
and interactive controls make it easier to find or act on information without rebuilding
the experience each time.

> **Product principle**
>
> Turn recurring community routines into reusable tools.
>
> Checking charts, following events, and submitting entries should not require rebuilding
> the experience each time.

<details>
<summary>How the live tools work</summary>

**Keeping the weekly chart current.** BarboardLab publishes a new singles chart every
week. A Python script retrieves the source data and reshapes it into a consistent JSON
file, and a GitHub Actions workflow runs that on a schedule, so the home page and the
BarboardLab pages read the updated file directly rather than waiting on anyone to publish
it. The same run can refresh related home page content, such as the current issue
information. The workflow has run on its schedule through the project period.

**Designing interaction around the data.** Displaying the chart is the easy half. Search
filters the current chart by song or artist. Computed highlight cards surface the things
people actually look for, such as the highest debut, the longest-charting song, the
biggest rise and the biggest fall, and selecting one takes you straight to that row in the
chart. The Barvision interfaces use sorting, filtering and tabbed views where the
information rewards being explored directly, and a member record can be exported as an
image to share. The point is that the data is not only shown; the interface gives people
something to do with it.

**Handling a live event over time.** Barvision 2026 was not one page, it was a state that
changed across the summer. The submission page reads differently before registration
opens, while submissions are active, and after it closes. Validation and confirmation
happen in the browser, and EmailJS carries the submission itself, so a song can be entered
without a server standing behind the form. A local receipt means someone returning on the
same device can see what they already sent. Other surfaces moved with the competition too,
including the odds board and the season status.

</details>

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. Not published elsewhere on the page. Per the brief these are
     deeper technical material for the later code pass, or Section 06's.
     Delete once each has a home or has been ruled out.

     1. Shape and scale of the weekly job: the script reshapes the chart into
        100 records of nine fields each and writes a 30KB JSON file, three
        pages fetch it at load time, and it had run 26 times across three
        months without intervention at the time the previous draft was
        written.

     2. The endpoint refuses non-browser clients. A plain HTTP library gets a
        403 regardless of headers, because the rejection is based on the TLS
        handshake rather than the request, so the fetch uses `curl_cffi` with
        Chrome 136 impersonation to reproduce the browser's TLS fingerprint,
        alongside thirteen headers matching what Chrome 136 would send. This
        is the one part of the project where the naive approach simply does
        not work and knowing why matters.

     3. It fails silently, on purpose. On a 403 or any other exception the
        script prints a message and exits zero, the existing data stays put,
        and the site keeps serving last week's chart rather than an error or
        an empty state. The cost is that the workflow reports success whether
        or not anything happened and there is no alerting: if the endpoint
        changed shape tomorrow the chart would quietly freeze and I would find
        out by noticing. I would make the same call again for a community site
        where a stale chart is a non-event and a broken page is embarrassing,
        and not for anything where the data mattered. The right version has
        the same graceful degradation plus a notification, and I skipped the
        second half.

     4. A self-skipping backup run. The primary job runs Saturday evening UTC
        and a second runs Monday morning, but first checks whether the data
        file was committed in the last two days and exits if it was. One retry
        window, no duplicate work, no coordination state to maintain.
-->


## Looking ahead

Static was the right first version and it is not the right last one. The limitations
above are not independent problems; they are one problem seen from four angles, and
they all resolve the same way.

A member should be able to update their own entry instead of asking me to edit a CSV,
which means authentication and a writable store, and it also removes the hand-synced
list of built pages. Contest submissions should be de-duplicated and validated on the
way in rather than trusted per browser. Chart data should be queryable across weeks
rather than only in its latest snapshot, which is the difference between a chart and
a chart history. The pipeline should be able to tell me when it has failed, which is
the part I consciously left out. And basic usage data would let me find out whether
the features I built are the features anyone opens.

None of that needed to exist for the site to be useful this summer. All of it needs to
exist for the site to keep growing, and building it is a stated next step rather than
an aspiration, which is also why the current version is documented this precisely.
Knowing exactly which manual step each limitation produces is what makes the migration
a scoping exercise instead of a rewrite.
