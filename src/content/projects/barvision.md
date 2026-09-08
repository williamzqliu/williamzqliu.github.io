---
title: Barvision Song Contest
year: 2026
dates: Jul 2026 – Aug 2026
blurb: Visual identity and playout system for a community song contest, broadcast live three times.
tags: [interactive, narrative]
tracks: [design, engineering]
featured: 4
stack: [HTML, CSS, JavaScript, Canvas, ffmpeg, OBS]
links:
  replay: https://www.bilibili.com/video/BV1eT8s6zEk6/
cover:
  wide: /media/barvision/cover-wide.webp
  square: /media/barvision/cover-square.webp
  tone: dark
  alt: A televote reveal screen in cyan and teal, showing a cumulative leaderboard of 26 finalists beside the points being awarded.
quickFacts:
  - { label: Scope, value: "Visual identity, show design, playout system" }
  - { label: Role, value: "Art direction and technical direction" }
  - { label: Shows, value: "3 live broadcasts, Jul to Aug 2026" }
  - { label: Format, value: "Adapted from the Eurovision Song Contest" }
stats:
  - { value: "3", label: Live shows }
  - { value: "26", label: Finalists }
  - { value: "40", label: Jurors }
  - { value: "242", label: Cue steps }
---

## What this is

Barboard is a music community of about forty people. I am a core member, and over
one summer I designed and ran its song contest: three live broadcasts, a full visual
identity, and the playout system that put all of it on screen.

The format is borrowed. Barvision is a direct adaptation of the Eurovision Song
Contest, which is where the name comes from: a jury vote and a public televote scored
separately, points awarded on a 12, 10, 8, 7, 6, 5, 4, 3, 2, 1 ladder, semi-finals
feeding a grand final, a host city on the branding, a Running Order. None of that
structure is my invention and it would be dishonest to present it as such.

What is mine is everything between that format and a watchable two-hour broadcast.

No one was paid. I did this because I wanted the community to have it.

## The identity problem

Eurovision's visual system rests on one thing it can assume and I could not: nations.
Every participant arrives with a flag, a three-letter code, and a name that already
means something to the audience. The flag does an enormous amount of work. It is
legible at any size, it survives being reproduced twenty-six times on one screen, and
it identifies a competitor without needing a photograph.

A forty-person online community has none of that. Participants are usernames.
Usernames are long, visually undifferentiated, and useless at the size a
twenty-six-row leaderboard forces.

The solution was to give every participant a single Chinese character as their mark.
韩, 海, 星, 柠, 威, 松, 泰, 猴, and so on, each drawn from the participant's own
handle. One character reads at any size, it holds its shape in a small square, and it
sits comfortably beside a photograph without competing with it.

That single decision is what made the rest of the visual system possible. Once every
competitor had a mark, a leaderboard could carry twenty-six rows in three columns and
stay scannable, and a reveal screen could show cumulative standings and incoming
points at the same time without either half turning to mush.

## Colour carries the phase

A grand final has two voting acts, and they feel entirely different to watch. The
jury vote is slow and cumulative: forty jurors, each awarding ten sets of points, the
standings shifting a little at a time. The televote is a countdown from the bottom,
where one large number can reorder everything.

The show encodes that difference in colour. Everything in the jury act is purple and
magenta. Everything in the televote act is cyan and teal. A viewer joining mid-stream
knows which act they are in before reading a word, and a viewer watching the whole
thing feels the change of gear when the palette turns.

Interstitial screens sit on photographic night footage of Chongqing, the host city
under the borrowed convention. The vote screens sit on rendered light. The distinction
is deliberate: the city establishes where the show is, the abstract renders keep the
attention on the numbers.

## The reveal screens

Every reveal screen does three jobs at once, and the layout comes from that.

The left two thirds carry the cumulative standings, all twenty-six entries with their
running total, with the current leader in a highlighted frame. The right third carries
what is happening right now: which juror is voting, which entry is receiving points,
how much. A counter across the top says how far through the act we are, `3 / 40
JURIES`, `5 / 26`, `18 / 26 TELE VOTES REVEALED`.

Putting the cumulative and the incremental on the same screen is the whole point. A
viewer needs to know both what just happened and what it did to the standings, and
cutting between two screens to show them separately loses the connection between the
two. The reordering animation is what carries the drama, and it only works if the
before and after are in the same frame.

Layout also had to account for where the audience actually is. The stream runs on
Bilibili, where live comments overlay the lower right of the frame. The player has a
toggle that draws a guide over that region, so nothing load-bearing gets designed into
a space the platform is going to cover.

## Running the show

Three shows went out live: the allocation draw on 24 July, the semi-final and second
chance round on 8 August, and the grand final on 22 August. The grand final runs two
hours and twelve minutes across twenty-six cues and two hundred and forty-two
individual steps, and the [full replay is public](https://www.bilibili.com/video/BV1eT8s6zEk6/).

All of it is one browser page, driven from the keyboard by one operator, captured by
OBS. Nothing is served: the data is inlined as globals so the page opens over
`file://`, which removes a local server as a thing that can fail thirty seconds before
going live.

The operator console has about twenty keys in three groups. Advancing and stepping
back. Jumping between cues and seeking within a video. And then a third group that
exists purely because a live show cannot be repeated: a light mode that skips loading
the large video files, master volume, mute, background playback rate, and safe-area
guides. Input locks during transitions so a mistimed keypress cannot desynchronise the
show from itself.

Show state is never persisted. The engine derives the current state by replaying every
step from the beginning, which means a page refresh at any point recovers a known-good
state rather than restoring a save file that might be wrong. During a live broadcast
that difference matters more than the milliseconds it costs.

The semi-final had a constraint I could not design around: fifteen results would not
exist until voting closed, roughly thirty-one minutes before they had to appear on
screen. Rather than plan to edit code live, the show ships with a fill-in-the-blanks
data file: fifteen empty slots the operator types into during the interval, then
reloads.

## Verifiable fairness

The allocation draw is the one show that computes its result rather than replaying
one, and that made it the one place where the audience had to trust me.

So it does not ask them to. The draw runs on a seeded pseudo-random generator built on
a hand-written SHA-256 in counter mode. When the draw completes, the seed string and
its hash are written out together, to the clipboard, to local storage, and as a
downloadable text file. Anyone can recompute the entire draw from the published seed
and check that it produces what they watched.

For a community contest where I am both the organiser and a competitor, that was not
optional.

<details>
<summary>Production notes</summary>

Plain HTML, CSS and JavaScript. No framework, no bundler, no build step. Video and
audio elements, CSS custom properties and animations for the transitions, Canvas 2D
for the draw result export at 4K.

The three shows total about 23 GB of local assets: 281 images, 73 video files, 43
audio files. A set of Python tools around ffmpeg and ffprobe handles loudness
normalisation across performance clips, background re-encoding, and baking seamless
loops, because clips arriving from twenty-six different sources do not match on level
or format.

None of it is deployed. The playout system runs locally and is captured, so the
broadcast is the artefact and the code is the instrument. That also means it is not
in a public repository, which is a real limitation of this case study: you can watch
the shows, but you cannot read the system.

</details>

## What I would do differently

The visual system holds up and the shows went out clean. What I underestimated is how
much of the work was asset preparation rather than design or engineering. Twenty-six
performance clips arriving in twenty-six formats at twenty-six loudness levels is not
an interesting problem, and it consumed more of the schedule than the reveal
animations did. Next time that pipeline gets built first, not last.

The other thing missing is any real measurement. The grand final replay has passed
1,100 views, which is a lot for a contest with forty participants and suggests the
audience reached well past the people competing. But nothing in the system records
anything. I do not know where viewers dropped off, whether the reveal pacing held
them, or which of the two voting acts kept more of them watching. For a show designed
around pacing, that is the gap that matters.
