---
title: Barboard
year: 2026
dates: May 2026 – Aug 2026
blurb: A zero-backend site for a 143-member music community, with an automated weekly chart pipeline.
tags: [interactive]
tracks: [engineering]
featured: 7
stack: [HTML, CSS, JavaScript, Python, GitHub Actions]
links:
  demo: https://barboard.space
cover:
  wide: /media/barboard/cover-wide.webp
  square: /media/barboard/cover-square.webp
  tone: dark
  alt: The Barboard homepage in its fixed dark palette, showing the weekly singles chart above the member directory.
quickFacts:
  - label: "Role"
    value: "Designer & Developer"
  - label: "Outcome"
    value: "Live at barboard.space, built unpaid on my own initiative"
stats:
  - { value: "143", label: Members }
  - { value: "3", label: Months running }
  - { value: "26", label: Automated updates }
  - { value: "0", label: Servers }
---

## What this is

Barboard is a music community of 143 people. I am a core member, and I built its
website because it did not have one and I wanted it to.

Nobody paid for this and nobody asked. That is the constraint the whole thing is built
around: one person, unpaid, alongside a thesis and a job search, maintaining whatever
got built for as long as the community wanted it.

So the site is entirely static. That was not a conviction about architecture. It was
the shape of the thing I could actually ship and keep running with the time and
attention I had, and it is a stage rather than an end state. A version with a backend
is the intended next step, and the section at the end says what it would be for.

I did the art direction, the visual system, the information architecture, and the
technical direction. The implementation was carried out with AI assistance, which is
visible in the commit history rather than hidden: 302 of 353 commits carry a
co-authorship trailer. What the project demonstrates is the direction, not the typing.

## What static bought, and what it cost

There is no server. Not a lightweight one, not a serverless function, not a database.
The site is static files on GitHub Pages behind a custom domain, and everything that
would normally need a backend is either pushed to a third party or moved to the
client.

The member directory is a CSV file. The browser fetches it, parses it, and renders 143
cards with live filtering and substring search. There is no API and no query layer.
Adding a member is a line in a CSV.

The one form on the site, for song submissions to the community contest, posts through
EmailJS directly from the browser. No endpoint, no queue, no inbox integration on my
side.

Every page is authored HTML with no build step, no bundler, and no package manager.
Fonts are self-hosted. The only third-party script anywhere on the site is the EmailJS
SDK.

What this buys is the thing I actually needed: nothing breaks while I am not looking.
There is nothing to patch, nothing to renew, no credentials to rotate, and no bill to
forget. Three months in, the operational cost of this site is a domain registration.
For a solo unpaid project that is not a small advantage, it is the difference between
a site that is still up and a site that quietly expired.

What it costs is that every piece of state is maintained by hand. Adding a member
means editing a CSV and keeping a hardcoded list of built pages in sync with it.
Cache invalidation means bumping a version string across every page that references
the stylesheet, which has actually happened on 16 of 184 pages. Submission
de-duplication lives in the browser's local storage, so it works per device and not
per person.

None of those are bugs. They are the same decision, seen from the maintenance side.

## The weekly chart pipeline

The community tracks a weekly singles chart, and keeping it current by hand was never
going to survive contact with a busy month.

A Python script fetches the chart, reshapes it into 100 records of nine fields each,
and writes a 30KB JSON file. A GitHub Actions workflow runs it on a schedule and
commits the result. Three pages fetch that file at load time. That is the whole
pipeline, and it has run 26 times across three months without intervention.

Two parts of it are worth explaining.

**The endpoint refuses non-browser clients.** A plain HTTP library gets a 403,
regardless of headers, because the rejection is based on the TLS handshake rather than
the request. So the fetch uses `curl_cffi` with Chrome 136 impersonation, which
reproduces the browser's TLS fingerprint, alongside thirteen headers that match what
Chrome 136 would actually send. This is the one part of the project where the naive
approach simply does not work and knowing why matters.

**It fails silently, on purpose.** On a 403, and on any other exception, the script
prints a message and exits zero. The existing data stays where it is, and the site
keeps serving last week's chart rather than an error or an empty state.

That decision has a cost I want to be explicit about: the workflow reports success
whether or not anything happened, and there is no alerting. If the endpoint changed
shape tomorrow, the chart would quietly freeze and I would find out by noticing.

I would make the same call again for a community site, where a stale chart is a
non-event and a broken page is embarrassing. I would not make it for anything where
the data mattered. The right version of this has the same graceful degradation plus a
notification, and I skipped the second half.

**And a self-skipping backup run.** The primary job runs Saturday evening UTC. A second
runs Monday morning, but first checks whether the data file was committed in the last
two days and exits if it was. One retry window, no duplicate work, no coordination
state to maintain.

## The visual system

A single fixed dark palette, with no theme switching. No `prefers-color-scheme`, no
data attribute, no light mode. For a community site with one context of use, a theme
toggle is a feature that adds surface area and answers no question anyone asked.

Design tokens live as CSS custom properties in one file: 65 of them, referenced across
29 files. The palette is 51 of those tokens, which reflects what the site actually
needed. Type is three font stacks: a condensed display face, a sans for body, a mono
for data.

The only place tokens are redeclared is a 768px breakpoint, where four spacing and
layout values change. Redeclaring tokens responsively rather than thematically was the
right call for this site, and it is worth naming because it is the less common of the
two uses.

## Where it falls short

<details>
<summary>Engineering notes</summary>

**The token system covers less than it should.** There are no radius, shadow, or motion
tokens at all: those values are written literally at each use site. A Python audit
script exists to find exactly this kind of drift, and run today it reports 45 hardcoded
hex colours with no matching token, 262 distinct rgba literals of which 52 recur three
or more times, 15 off-scale font sizes out of 36, and 34 off-scale spacing values out
of 43.

**The audit is not enforced.** It runs manually, is not in CI, has no threshold, and
never fails a build. So it reports drift rather than preventing it, and drift
accumulated anyway.

**Worse, its committed output is stale by a wide margin.** The tool excludes generated
member pages by matching a filename pattern. A migration to clean URLs renamed those
pages from `member/<id>.html` to `member/<id>/index.html`, so the exclusion silently
stopped matching anything and the scan grew from 12 files to 194. The tool did not
error. It just started reporting on a different corpus, and the checked-in report kept
describing the old one.

That is the most instructive failure in the project. A consistency checker with no
test coverage of its own scope is a checker you cannot trust, and the thing that broke
it was a routine rename.

**Other known issues.** Cache-busting query strings appear on 16 of 184 pages.
Thirteen PNGs account for 93.7MB of the repository with no image pipeline, no WebP or
AVIF, and no LFS. Fourteen of 29 Python scripts have no execution path and exist only
as one-shot generators referenced in documentation. Documentation runs to 714KB, which
is 5.6 times the size of all the CSS and JavaScript source combined.

</details>

The audit tool is the part I would rebuild. Not because a checker is the wrong idea,
but because a checker that cannot fail a build is a note to yourself, and I wrote it as
though it were a guardrail.

The other thing missing is any measurement at all. The site carries no analytics, no
tag manager, and no error tracking. That kept the build simple and it means that after
three months I can tell you the site works and I cannot tell you whether anyone uses
the member directory, which is the feature I spent the most time on.

## What a backend would be for

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
