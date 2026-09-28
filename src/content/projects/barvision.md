---
title: Barvision Chongqing 2026
year: 2026
dates: Jun 2026 – Aug 2026
blurb: I organized, designed, hosted, and operated a community song contest, creating its visual identity and a browser-based system for the live grand final.
tags: [interactive, narrative]
tracks: [design, engineering]
category: interfaces-experiences
published: true
stack:
  - HTML
  - CSS
  - JavaScript
  - Python
  - FFmpeg
  - OBS
links:
  # Not `Live Demo`: the show is over and this is the recording of it. The
  # named-link form carries the label; `replay` is not a link kind the schema
  # knows, and an unknown key is dropped in silence.
  demo:
    href: https://www.bilibili.com/video/BV1eT8s6zEk6/
    label: Replay
cover:
  wide: /media/barvision/cover-wide.webp
  tone: dark
  alt: The contest title card, showing the Barvision wordmark, its V replaced by a pentagon, over curved streaks of cyan, violet and magenta light, above the lines Song Contest and Chongqing 2026.
quickFacts:
  - label: "Role"
    value: "Event organization, visual & motion design, broadcast interaction design, hosting & live operation"
  - label: "Outcome"
    value: "Delivered three live broadcasts, including a reproducible allocation draw and a three-hour grand final operated through a custom browser player."
credits:
  skills:
    - Art direction
    - Broadcast design
    - Motion design
    - Broadcast systems design
    - Live production
  tools:
    # Two languages in one slot, the way Inside the Institution puts two APIs
    # in one: five slots and six things to name.
    - HTML / CSS
    - JavaScript
    - Figma
    - FFmpeg
    - OBS
  # Named groups with the same person in each, so `Team` would claim a
  # collaboration that did not happen. Same shape and same label as Comgrand.
  teamLabel: Roles
  team:
    - group: Event organization, hosting & live operation
      people:
        - Zhuoqi Liu
    - group: Visual identity, posters, cards & motion design
      people:
        - Zhuoqi Liu
    - group: Broadcast interaction design & implementation review
      people:
        - Zhuoqi Liu
  specialThanks:
    - Barboard members
  note: I led the design decisions and implementation review. Claude Code handled most of the code implementation.
---

## From Slides to a Live Show

Inspired by Eurovision, Barvision is an annual song contest within the Barboard
community. The 2026 edition brought together 40 participants across 38 competing
entries. As the previous year’s winner, I organized the Chongqing edition.

Earlier editions relied largely on PowerPoint. For 2026, I wanted more control over how
information appeared, how rankings changed, and how each reveal unfolded.

The semi-final remained in PowerPoint because its more complex running order could not
be implemented within the available time. I introduced the browser player for the grand
final.

## Echoing Confluence

The identity began with Chongqing, where the Jialing and Yangtze rivers meet. Under the
theme Echoing Confluence, I translated that meeting of currents into overlapping
ripples, interference patterns, and refracted light.

<figure>
  <img
    src="/media/barvision/gf-cover.webp"
    alt="The Grand Final key visual: the Barvision wordmark, its V a pentagon, over curved streaks of violet, magenta and cyan light, with Song Contest and Chongqing 2026 beneath it and Grand Final in iridescent lettering below."
    width="2560"
    height="1440"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The Grand Final key visual translates the river-confluence concept into overlapping fields of light.</figcaption>
</figure>

Eurovision 2024’s posters were the main reference for the promotional layouts. I
developed the Chongqing edition’s posters around the Echoing Confluence concept, using a
modular grid, ripple imagery, and a coordinated palette across the three broadcasts.

<!-- The three posters in the order the season ran, one row at every width. -->
<div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
  <figure>
    <img
      src="/media/barvision/poster-allocation-draw.webp"
      alt="The poster system in blue and violet: Allocation Draw in white over a ripple field, the wordmark at the centre, and July 24 with a Beijing time of 21:00 on yellow."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Allocation Draw</figcaption>
  </figure>
  <figure>
    <img
      src="/media/barvision/poster-semi-final.webp"
      alt="The same poster system in orange and magenta: Semi-Final and Second Chance in white over a ripple field, the wordmark on purple, and August 8 with a Beijing time of 21:00 on yellow."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Semi-Final</figcaption>
  </figure>
  <figure>
    <img
      src="/media/barvision/poster-grand-final.webp"
      alt="The same poster system in colour blocks: the Barvision wordmark on blue, the theme name on purple, Grand Final in white over an orange and magenta ripple field, and August 22 with a Beijing time of 21:00 on yellow."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Grand Final</figcaption>
  </figure>
</div>

For the screen graphics, dark surfaces and luminous color provided a consistent setting
for both motion and dense information. I created all of the posters, key visuals, cards,
and looping backgrounds.

<!-- The two ends of the show. The closing clip is encoded at half speed
     rather than slowed in script, so the file is the 0.5x version and the
     lightbox plays it at the rate the page does. -->
<div class="media-pair">
  <figure>
    <video
      src="/media/barvision/gf-opening-loop.mp4"
      poster="/media/barvision/gf-opening-loop-poster.webp"
      width="1920"
      height="1080"
      muted
      loop
      playsinline
      preload="none"
      data-loop
      aria-label="The opening title sequence: orange neon Grand Final lettering running away across a dark floor plane, with the Barvision wordmark and Song Contest, Chongqing 2026 held still at the center."
    ></video>
    <figcaption>Opening loop</figcaption>
  </figure>
  <figure>
    <video
      src="/media/barvision/gf-ending-loop.mp4"
      poster="/media/barvision/gf-ending-loop-poster.webp"
      width="1920"
      height="1080"
      muted
      loop
      playsinline
      preload="none"
      data-loop
      aria-label="The closing sequence: cyan neon See You Next Year lettering sliding past on a dark wall, with the Barvision wordmark held still at the center."
    ></video>
    <figcaption>Closing loop</figcaption>
  </figure>
</div>

## Making Results Easy to Follow

The grand final needed to move between dense result screens and individual moments of
anticipation. I designed the sequence around three tasks: recognizing an entry,
following a change in rank, and understanding what the final challenger needed to win.
The clips below are edited excerpts from the live final, with selected passages
re-recorded to address an audio interruption and presentation pauses.

### Recognizing each entry

I gave each entry a compact identifier: a single Chinese character associated with its
submitting member, paired with an image of the artist or band. This kept the 26-entry
scoreboard compact while providing a consistent visual reference across running-order
and scoring screens.

<figure>
  <video
    src="/media/barvision/gf-order-jury.mp4"
    poster="/media/barvision/gf-order-jury-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The jury vote running order in purple: twenty-six entrants in two columns, each row a Chinese character, an artist photo, a song title and a score of zero."
  ></video>
  <figcaption>Compact entry identifiers connect the running-order screen with the scoreboard used during the reveal.</figcaption>
</figure>

### Following the points

Jury scores were loaded before the broadcast and revealed live. Each scoring stage first
identified the recipients, then updated their totals, and finally reordered the
leaderboard. The 12-point award received a longer pause and a distinct visual treatment.

<figure>
  <video
    src="/media/barvision/jury-vote.mp4"
    poster="/media/barvision/jury-vote-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The jury board during voting: twenty-six rows carrying running totals, a juror’s name on the right, and their points landing on the receiving entries while the rows reorder around them."
  ></video>
  <figcaption>Points are revealed on the right before totals and ranks update on the left.</figcaption>
</figure>

### Making rank changes legible

I used a three-beat reorder to distinguish entries gaining rank from those displaced by
them. Entries whose rank stays unchanged remain in place.

The two columns behave as connected stacks. A row passing the column boundary falls out
of the left stack and re-enters above the right, preserving the downward direction of
movement.

<figure>
  <video
    src="/media/barvision/leaderboard-reorders.mp4"
    poster="/media/barvision/leaderboard-reorders-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The leaderboard reordering as scores arrive: rows sliding out sideways, the rows below falling into the gaps they leave, and the promoted rows sliding back in at their new ranks."
  ></video>
  <figcaption>Promoted entries move out, displaced rows fall, and promoted entries return at their new ranks.</figcaption>
</figure>

<details>
<summary>Refining the reorder</summary>

I refined the movement to remove pauses and competing directions. Entries leave and
return from the outer edge of their column, rather than crossing the center gap. Each
column begins reinserting entries according to its own timing, overlapping the end of
the fall so empty spaces do not linger.

Fall duration increases with travel distance, with a cap on longer moves.

</details>

### Pacing the final reveal

For the audience scores, I used an upward count and slowed it near the leading totals. I
tuned the timing for this edition, giving close results more time to unfold before the
leaderboard settled.

<figure>
  <video
    src="/media/barvision/tele-vote.mp4"
    poster="/media/barvision/tele-vote-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The televote in cyan: an entrant’s score counting up to a large figure on the right while the board reorders around the row it belongs to."
  ></video>
  <figcaption>The count slows as an entry approaches the leading totals.</figcaption>
</figure>

For the last reveal, I adapted Eurovision’s head-to-head format to focus on the current
leader and the final challenger. The screen shows how many points the challenger needs
to win, and expands the scale near the leader so a small difference remains visible.

<!-- The whole reveal, played at 1.25x in the file. It starts itself, muted,
     when it comes into view and loops from the start when it ends; the reader
     can pause and seek with the browser's own controls. It does not open in
     the viewer, whose click would fight the control bar. -->
<figure>
  <video
    src="/media/barvision/final-duel.mp4"
    poster="/media/barvision/final-duel-poster.webp"
    width="1920"
    height="1080"
    muted
    playsinline
    controls
    loop
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The final duel: the current leader and the last challenger side by side with their totals, a scale between them, and a line above saying how many points the challenger needs to win."
  ></video>
  <figcaption>The final duel shows how many points the challenger needs to take the lead.</figcaption>
</figure>

After the final duel, I returned to the complete standings, using night footage of
Chongqing to reconnect the results with the host city.

<figure>
  <video
    src="/media/barvision/final-results.mp4"
    poster="/media/barvision/final-results-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The grand final results over night footage of Chongqing: the final standings entering column by column, then the winning entry marked at the top."
  ></video>
  <figcaption>The final standings enter column by column over night footage of Chongqing.</figcaption>
</figure>

<details>
<summary>Additional broadcast screens</summary>

<figure>
  <video
    src="/media/barvision/earlier-stage-results.mp4"
    poster="/media/barvision/earlier-stage-results-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="Results boards for the earlier stages building up on a lit stage: the wildcard round, the entries that did not qualify, and the second chance round, each a two-column board of entrants with a Chinese character, an artist photo, a song title and scores."
  ></video>
  <figcaption>Earlier-stage results presented during the grand final.</figcaption>
</figure>

<figure>
  <video
    src="/media/barvision/gf-order-tele.mp4"
    poster="/media/barvision/gf-order-tele-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The running order for the televote in cyan, the rows carrying the jury totals and reordered by them."
  ></video>
  <figcaption>The running order before the televote, carrying the jury totals.</figcaption>
</figure>

<figure>
  <div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
    <img
      src="/media/barvision/live-scoreboard-1.webp"
      alt="A recap screen headed 20 of 40 juries voted: twenty-six rows of running totals in three columns over night footage of a Chongqing temple roof."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/barvision/live-scoreboard-2.webp"
      alt="A recap screen headed Jury vote results: the completed jury totals for all twenty-six entries in three columns, over a night skyline of Chongqing."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/barvision/live-scoreboard-3.webp"
      alt="A recap screen headed 18 of 26 tele votes revealed, the standings reordered by the combined score, over a night view of the city from above."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Recap screens show the standings at checkpoints during the jury and audience-score reveals.</figcaption>
</figure>

</details>

## Hosting and Operating the Show

I was both the on-air host and the sole operator, so the player had to support the pace
of presenting. I organized the grand final into 26 cues, with keyboard controls for
advancing, stepping back, and moving between segments.

A compact HUD showed the current cue and step, playback status, preload progress, and
volume. Some routine transitions advanced automatically, while recorded jury
announcements retained manual control so I could follow the speaker’s pace.

As each segment was completed, I rehearsed its playback and checked the animation
transitions into and out of adjacent segments.

<details>
<summary>Playback safeguards</summary>

The player rebuilds the scoring state from the timeline when moving backward or jumping
to another step. This supports rehearsal and navigation without carrying forward an
accidentally accumulated score.

A media watchdog attempts to restart interrupted playback. A separate performance mode
pauses decorative video layers to reduce load while retaining the main scoring display.

</details>

## Making the Draw Reproducible

I introduced a live allocation draw so members could see how entries were assigned to
the semi-finals and to the first or second half of the running order.

Following Eurovision’s pot-based format, the draw used a seed assembled from the date,
time, and numbers contributed through live chat. With the same seed, ordered pot lists,
and algorithm, the allocation can be reproduced.

<figure>
  <video
    src="/media/barvision/allocation-draw.mp4"
    poster="/media/barvision/allocation-draw-poster.webp"
    width="1920"
    height="1080"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="The allocation draw in progress over night footage of Chongqing: five pots of entrants across the top, the two semi-finals below, and a card in the middle showing the entrant just drawn and the half they were assigned to."
  ></video>
  <figcaption>The allocation draw reveals each assignment within the event’s visual system.</figcaption>
</figure>

The result export records the seed and its SHA-256 hash alongside the allocation. This
provides a record for checking the result against the draw procedure.

<!-- Side by side at every width. Both are 16:9, so nothing is cropped; the
     detail is read in the viewer. -->
<figure>
  <div class="media-pair">
    <img
      src="/media/barvision/draw-seed.webp"
      alt="The seed screen over the Chongqing skyline: the five pots across the top, the two empty semi-finals below them, seed input fields between the semi-finals, and the live chat underneath."
      width="1920"
      height="1080"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/barvision/allocation-results.webp"
      alt="The completed allocation over night footage of Chongqing: Semi-Final 1 and Semi-Final 2 side by side, each split into a first half and a second half, with every entrant listed under its own mark."
      width="1920"
      height="1080"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>The seed input and completed allocation provide the inputs and result of the draw.</figcaption>
</figure>

## Lessons for the Next Edition

One background-music interruption showed that audio continuity needed more explicit
checks alongside the visual transitions rehearsed during development.

For future editions, I want to retain the core playback logic while refreshing the
visual package and contest data. The next step is to separate the remaining
edition-specific layouts, timing, and cue behavior, then test that approach in another
production.

After the season, I published the [full results on
Barboard](https://barboard.space/barvision/2026/), connecting the live event with the
community’s longer history.
