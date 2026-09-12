---
title: Barvision Chongqing 2026
year: 2026
dates: Jun 2026 – Aug 2026
blurb: A live song contest I organized, art-directed, hosted, and operated, with a custom broadcast system for its three-hour grand final.
tags: [interactive, narrative]
tracks: [design, engineering]
published: true
featured: 4
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
    value: "Organizer, Art Director, Host & Broadcast Systems Designer"
  - label: "Outcome"
    value: "Three live broadcasts, including a verifiable allocation draw and a three-hour grand final run from a purpose-built browser system"
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
  # Two named groups with the same person in both, so `Team` would claim a
  # collaboration that did not happen. Same shape and same label as Comgrand.
  teamLabel: Roles
  team:
    - group: Organization, art direction and hosting
      people:
        - Zhuoqi Liu
    - group: Broadcast design, development and live production
      people:
        - Zhuoqi Liu
  specialThanks:
    - Barboard members
  note: Selected coding tasks were supported by Claude Code.
---

## Reimagining the Broadcast

Inspired by Eurovision, Barvision is an annual song contest within
[Barboard](/work/barboard#from-tieba-to-barboardspace). The 2026 edition brought together
40 participants across 38 competing entries. As the previous year's winner, I organized,
art-directed, hosted, and operated the Chongqing edition.

Earlier editions relied largely on PowerPoint, which limited motion and live score
presentation. For 2026, I wanted the Bilibili broadcasts to feel closer to a produced
live show than a sequence of slides.

I used Eurovision 2024 as a production reference and built the Grand Final around an
HTML/CSS-based broadcast system. That gave me more control over animation, ranking
changes, and reveal pacing.

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. None of it is published elsewhere on the page. Delete once each
     fact has a home in Sections 02 to 06 or has been ruled out.

     1. The borrowed format, and the statement that none of it is my
        invention: a jury vote and a public televote scored separately, points
        awarded on a 12, 10, 8, 7, 6, 5, 4, 3, 2, 1 ladder, semi-finals feeding
        a grand final, a host city on the branding, a Running Order. The name
        comes from the same place. Section 05 is where the reveal structure is
        due to be explained, so the ladder and the two-act vote probably belong
        there; the acknowledgement itself needs a home wherever the format is
        first described in detail.

     2. My standing in the community: core member of Barboard.

     3. Terms: no one was paid, and the reason given was wanting the community
        to have it. Nothing on the page currently says the work was unpaid.

     4. The claim that what is mine is everything between the borrowed format
        and the finished broadcast. The old draft sized that broadcast at two
        hours; the Outcome now says three, so the number does not survive the
        move without being checked.
-->

## Echoing Confluence

The 2026 identity began with its host city, Chongqing. I used the confluence of the
Jialing and Yangtze rivers as a visual metaphor for sound. Under the theme
*Echoing Confluence*, overlapping ripples and interference patterns became the event's
core visual language. The promo posters carried that language into a modular grid of color
blocks.

<!-- The key visual beside the three stage posters, as one block.

     Every master is 16:9, so a tall left column is not available: three 16:9
     frames stacked come to three times the height of one, plus two inner
     gutters. An `fr` ratio only balances that at one viewport, because the
     gutters are fixed pixels while the columns are not, so the split is solved
     instead: left = 3/4 of the block + two gutters x 16/9.

     The right column is a figure holding a one-column `.media-pair`, which is
     the documented way to put several frames under a single caption. No new
     CSS: both columns and the stack are the pair pattern with a split. -->

<div class="media-pair" style="--pair-split: calc(75% + 3.3px) 1fr">
  <figure>
    <img
      src="/media/barvision/gf-cover.webp"
      alt="The Grand Final key visual: the Barvision wordmark, its V a pentagon, over curved streaks of violet, magenta and cyan light, with Song Contest and Chongqing 2026 set beneath it."
      width="2560"
      height="1440"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Grand Final cover</figcaption>
  </figure>

  <figure>
    <div class="media-pair" data-phone-row style="--pair-split: minmax(0, 1fr)">
      <img
        src="/media/barvision/poster-grand-final.webp"
        alt="A poster built from colour blocks: the Barvision wordmark on blue, the theme name on purple, Grand Final in white over an orange and magenta ripple field, and August 22 with a Beijing time of 21:00 on yellow."
        width="2560"
        height="1440"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/media/barvision/poster-semi-final.webp"
        alt="The same poster system in orange and magenta: Semi-Final and Second Chance in white over a ripple field, the wordmark on purple, and August 8 with a Beijing time of 21:00 on yellow."
        width="2560"
        height="1440"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/media/barvision/poster-allocation-draw.webp"
        alt="The same poster system in blue and violet: Allocation Draw in white over a ripple field, the wordmark at the centre, and July 24 with a Beijing time of 21:00 on yellow."
        width="2560"
        height="1440"
        loading="lazy"
        decoding="async"
      />
    </div>
    <figcaption>Promo posters</figcaption>
  </figure>
</div>

I built the system around a liquid-neon material defined by dark water-like surfaces,
refracted light, and glow. Rather than giving every stage a separate look, I kept the
visual language consistent and shifted its color across the competition.

The semi-finals shifted between magenta and cyan-green, and the Grand Final used
blue-violet as its base. The same system extended into the broadcast graphics. Each stage
could feel distinct without breaking the overall identity.

<!-- STILL TO COME: two broadcast frames, the jury board in purple beside the
     televote board in cyan, which is what proves the identity reached the live
     system and did not stop at posters. Masters go in media-src/barvision/;
     nothing is referenced until the processed file is really in
     public/media/barvision/. -->

<!-- PARKED in this revision, out of the copy above:

     1. Warm orange-yellow for the breakthrough rounds. The colour system now
        names only the semi-finals and the Grand Final, so the first stage of
        the run has no hue on the page.

     2. The custom Barvision wordmark and its pentagon motif, which the
        previous draft named here. The cover alt text describes the wordmark,
        but no body copy currently credits it. -->

<!-- PARKED from the previous draft of this section, which this rewrite
     replaces. None of it is published elsewhere on the page, and the first
     item is the strongest argument the old draft made.

     1. Participant marks. Eurovision can assume nations: every competitor
        arrives with a flag, a three-letter code and a name the audience
        already knows, and a flag stays legible at any size, survives being
        reproduced twenty-six times on one screen, and identifies a competitor
        without a photograph. A forty-person online contest has none of that,
        because participants are usernames, which are long, visually
        undifferentiated and useless at the size a twenty-six-row leaderboard
        forces. The solution was one Chinese character per participant as
        their mark, each drawn from their own handle: 韩, 海, 星, 柠, 威, 松,
        泰, 猴 and so on. One character reads at any size, holds its shape in
        a small square, and sits beside a photograph without competing with it.

     2. What that decision bought. With every competitor carrying a mark, a
        leaderboard could hold twenty-six rows in three columns and stay
        scannable, and a reveal screen could show cumulative standings and
        incoming points at once without either half turning to mush. This is
        the constraint that shaped the leaderboard, so it may belong with
        Section 05 rather than here.
-->

## On Air

<!-- The two ends of the show, as a row. Both masters are 16:9, so the pair
     needs no split. Same video treatment the Collaboration Map uses in Inside
     the Institution: muted, looping, autoplaying, `playsinline` so a phone
     does not take it fullscreen. `data-abreast` keeps the two side by side on
     a phone as well: they are the two ends of one show, and stacked they stop
     reading as a pair.

     The closing clip is encoded at half speed rather than slowed in script:
     every frame of the 60fps master is kept and laid out at 30fps, so the file
     itself is the 0.5x version and the lightbox plays it at the same rate the
     page does. Re-export from the master and the speed comes back. -->

<div class="media-pair" data-abreast>
  <figure>
    <video
      src="/media/barvision/gf-opening-loop.mp4"
      width="1920"
      height="1080"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="The opening title sequence: orange neon Grand Final lettering running away across a dark floor plane, with the Barvision wordmark and Song Contest, Chongqing 2026 held still at the center."
    ></video>
    <figcaption>Grand Final opening</figcaption>
  </figure>

  <figure>
    <video
      src="/media/barvision/gf-ending-loop.mp4"
      width="1920"
      height="1080"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="The closing sequence: cyan neon See You Next Year lettering sliding past on a dark wall, with the Barvision wordmark held still at the center."
    ></video>
    <figcaption>Grand Final closing</figcaption>
  </figure>
</div>

Across the Grand Final, I used motion to guide attention and keep the visual rhythm
moving upward and forward.

<!-- The dense boards this section is about, as one block. Every master is
     16:9, so two stacked on the right come to twice the height of one on the
     left, plus a gutter and a second caption. An `fr` ratio only balances that
     at one viewport, because the gutter and the captions are fixed pixels
     while the columns are not. The split is solved for instead:

       left = 2/3 of the block + (caption + gutter) x 16/9
            = calc(66.6667% + 17.2px)

     which lands the two columns on the same line at every width, with nothing
     cropped. The right column is a nested one-column `.media-pair`. No new
     CSS.

     All three are seamless loops: the tail cross-dissolves into the head over
     0.5s, so the browser's hard loop point falls inside a dissolve rather than
     on a cut. Image to image, never through black. See the note in
     media-src/ for the recipe. -->

<div class="media-pair" style="--pair-split: calc(66.6667% + 17.2px) 1fr">
  <figure>
    <video
      src="/media/barvision/earlier-stage-results.mp4"
      width="1920"
      height="1080"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="A results board building up on a lit stage: rows of entrants, each with a single Chinese character, an artist photo, a song title and a line of scores, arriving in two columns under the heading Scoreboard."
    ></video>
    <figcaption>Earlier-stage results</figcaption>
  </figure>

  <div class="media-pair" style="--pair-split: minmax(0, 1fr)">
    <figure>
      <video
        src="/media/barvision/gf-order-jury.mp4"
        width="1920"
        height="1080"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-label="The jury vote running order in purple: twenty-six entrants in two columns, each row a Chinese character, an artist photo, a song title and a score of zero."
      ></video>
      <figcaption>Grand Final order: Jury Vote</figcaption>
    </figure>
    <figure>
      <video
        src="/media/barvision/gf-order-tele.mp4"
        width="1920"
        height="1080"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-label="The same board for the televote act in cyan, the rows now carrying the jury totals and reordered by them."
      ></video>
      <figcaption>Grand Final order: Tele Vote</figcaption>
    </figure>
  </div>
</div>

The earlier-stage results and the running-order screens carried dense information, so I
staged how each layer entered the frame instead of showing everything at once. I gave each
member a compact nameplate: a single Chinese character paired with a photo of the artist
or band behind their entry. This gave the 26-row scoreboard a consistent visual anchor
without spending space on full usernames.

<!-- MEDIA STILL TO COME. The screens that carry the dense information this paragraph
     is about, in broadcast order. Looping clips where a sequence exists,
     stills only where nothing moves. One caption per clip, not per frame.
     Captions, in order:
       Wildcard Round results
       Non-qualified results
       Second Chance results
       Grand Final running order -->

<!-- Full column width, the default for a figure that is the section's own
     evidence. Seamless loop, same recipe as the block above. -->

<figure>
  <video
    src="/media/barvision/jury-vote.mp4"
    width="1920"
    height="1080"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The jury board during voting: twenty-six rows carrying running totals, a juror's name on the right, and their twelve points landing on one entry while the rows reorder around it."
  ></video>
  <figcaption>Grand Final: Jury Vote</figcaption>
</figure>

During the jury vote, scores arrived live and the leaderboard reordered as each juror
reported. I gave the 12-point award its own visual effect so each juror's top score landed
as a distinct moment.

<details>
<summary>How the leaderboard reorders</summary>

<!-- Inside a disclosure the figure is already capped at the measure by
     `.prose > *`, so it needs no modifier of its own. -->

<figure>
  <video
    src="/media/barvision/leaderboard-reorders.mp4"
    width="1920"
    height="1080"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The leaderboard reordering as scores arrive: rows sliding out sideways, the rows below falling into the gaps they leave, and the promoted rows sliding back in at their new ranks."
  ></video>
  <figcaption>Grand Final: Leaderboard Reorders</figcaption>
</figure>

When a jury score changed the ranking, I did not let the rows simply jump to their new
positions. I designed the reorder as a three-beat "gravity stack": promoted rows are
pulled out, displaced rows fall into the gaps, and the promoted rows slide back into their
new positions. The board settles like a stack of cards rather than re-sorting like a
table.

**Falls are timed by distance.** A row dropping six places takes longer than one dropping
two, so the rows do not land together.

**A row leaving the bottom of the left column never crosses the center gap.** It keeps
falling out of the left stack, re-enters above the right one, and drops into place, so the
two columns read as one flow rather than two tables.

**The columns do not wait for each other.** Each side starts reinserting once enough of its
own collapse is done, so the beats overlap and neither side sits idle.

A row that gains points without changing rank stays where it is. Moving it away only to
return it to the same position would add motion without adding information.

</details>

<!-- CUT from this disclosure once the clip above was in place, on the rule
     that prose should not describe what the reader can watch: the direction
     and fading of the exits, the staggering and its roughly half-second span,
     the temporary z-order that lets a moving row pass in front of a still one,
     and the slower, more deliberate return. All of it is visible in the loop.
     The four notes that remain are the ones the clip does not explain by
     itself. -->

<!-- NO CODE EXCERPT. The Barvision source is not in this repository, so there
     is nothing to quote. -->

<!-- Full column width, the section's own evidence. Seamless loop, same
     recipe as the blocks above. -->

<figure>
  <video
    src="/media/barvision/tele-vote.mp4"
    width="1920"
    height="1080"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The televote in cyan: an entrant's score counting up to a large figure on the right while the board reorders around the row it belongs to."
  ></video>
  <figcaption>Grand Final: Tele Vote</figcaption>
</figure>

Televote scores counted upward instead of appearing at once. The count slowed noticeably
as a score approached or overtook the current leader, so the timing itself built the
suspense.

<!-- MEDIA STILL TO COME. The handoff into the televote, then the televote itself.
     The count-up pacing is the point, so the clip has to run long enough for
     one score to slow near the leader.
     Captions, in order:
       Televote transition
       Televote -->

<!-- Full column width. Played at 1.25x, baked into the file rather than set
     in script: the reveal runs ninety seconds live and the page is not the
     broadcast. Seamless loop, same recipe as the blocks above. -->

<figure>
  <video
    src="/media/barvision/final-duel.mp4"
    width="1920"
    height="1080"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The final duel: the current leader and the last challenger side by side with their totals, and a line above saying how many points the challenger needs to win."
  ></video>
  <figcaption>Grand Final: Final Duel</figcaption>
</figure>

For the final reveal, I adapted the head-to-head format used at Eurovision 2026. Reducing
the screen to the current leader and the final challenger made the ending easier to follow
and more dramatic.

<!-- MEDIA STILL TO COME. Final duel. Looping clip.
     Caption: Final duel. -->

<!-- The closing result and the recap screens the paragraph is about, in the
     same shape Section 02 uses: one frame on the left, three stacked on the
     right, one caption under each column.

     Every asset is 16:9, so three stacked come to three times the height of
     one, plus two inner gutters. An `fr` ratio only balances that at one
     viewport, because the gutters are fixed pixels while the columns are not,
     so the split is solved instead:

       left = 3/4 of the block + two gutters x 16/9
            = calc(75% + 3.3px) -->

<div class="media-pair" style="--pair-split: calc(75% + 3.3px) 1fr">
  <figure>
    <video
      src="/media/barvision/final-results.mp4"
      width="1920"
      height="1080"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="The closing result screen: the winning entry named above the final standings, over night footage of Chongqing."
    ></video>
    <figcaption>Grand Final: Final Results</figcaption>
  </figure>

  <figure>
    <div class="media-pair" data-phone-row style="--pair-split: minmax(0, 1fr)">
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
        alt="A recap screen headed Jury vote results, the same three columns with the completed jury totals, over a night skyline."
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
    <figcaption>Recap screens</figcaption>
  </figure>
</div>

At four recap points, I replaced the abstract broadcast background with looping night
footage from recognizable parts of Chongqing. The city stayed present without competing
with the results.

<!-- MEDIA STILL TO COME. The recap screens on city footage.
     Captions, in order:
       Jury vote results
       Televote recap
       Final results -->

<!-- NONE OF THE ABOVE EXISTS YET. The project ships one asset, the cover.
     Everything here has to be exported from the Barvision source project as
     looping video, masters into media-src/barvision/, processed files into
     public/media/barvision/. Nothing is referenced until the processed file is
     really there, so the section currently renders as prose only.

     Open question on the televote block: the caption list names
     `Televote transition`,
     but the media grouping puts the transition with the running order, before
     the jury vote. Placed here on the strength of the caption name, since the
     jury act comes first and a transition into the jury vote would not be
     called a televote transition. -->

<!-- The running times both stand and measure different things: roughly
     three hours counting the warm-up, two hours and twelve minutes for the
     show proper. `Running the show` below still says 2:12. -->
<!-- OVERLAP TO RESOLVE. `The reveal screens` and `Running the show` below have
     not had their editorial pass yet, and both now say things this section
     says: the reordering animation carrying the drama, the cumulative and
     incremental halves of a reveal screen, twenty-six entries. When their turn
     comes, the showcase should stay here and the layout and operating
     arguments should stay there. -->

<!-- PARKED from `Colour carries the phase`, the section this one replaced in
     position 03. None of it is published elsewhere on the page.

     1. Colour by voting act, inside the Grand Final. The jury vote is slow and
        cumulative: forty jurors, each awarding ten sets of points, the
        standings moving a little at a time. The televote is a countdown from
        the bottom, where one large number can reorder everything. The show
        encoded that difference in colour, purple and magenta through the jury
        act and cyan and teal through the televote act, so a viewer joining
        mid-stream knew which act they were in before reading a word. The two
        voting acts are now described above without their colours, so this is
        the piece most worth re-housing.

     2. Backgrounds. The vote screens sat on rendered light while interstitial
        screens sat on photographic night footage of Chongqing. The recap
        paragraph above now carries the city footage; the rendered-light half
        of the contrast is still unstated.

     NOTE: item 1 is in tension with Section 02, which says the Grand Final used
     blue-violet as its base. Both can be true, one being the stage hue and the
     other the hue inside the act, but the page should say so somewhere. -->

## Behind the Broadcast

The show ran from a browser-based player. I structured its three hours as 26 cues and 242
operator steps, and those steps controlled video playback, graphics, scoreboards, music,
and transitions.

Because I was both the on-air host and the sole operator, the broadcast window also had to
serve as my control interface. A compact HUD showed the current cue and step, playback
status, preload progress, and volume, and I could hide it from the OBS capture. I kept the
core workflow keyboard-driven so I could move forward or back, jump between cues, and
rehearse specific moments without leaving the player.

<details>
<summary>Making the player safe to run live</summary>

**Rebuildable scoring state.** Rather than carry a running scoreboard that could drift,
the player rebuilt the standings for any step from the timeline. Stepping back, jumping
ahead, and moving between cues therefore all arrived at the right scoreboard.

**Media watchdog.** Playback can stall in a long browser session, so a watchdog monitored
it and recovered on its own rather than leaving it for me to catch while hosting.

**One-key safe mode.** If performance dropped, one keyboard shortcut disabled the
decorative video layers. It was a fallback for a bad moment, not a second visual mode.

**Preload and fallback.** Assets were preloaded before the show, and a missing file drew a
labeled fallback rather than a blank frame.

</details>

<!-- MEDIA STILL TO COME. Operator-facing only; the polished broadcast frames
     belong to Section 03 and should not be repeated here.

     1. the player with the HUD showing, so cue, step, playback status,
        preload and volume are all readable,
     2. the same moment with the HUD hidden, which is what went to air. The
        pair is the argument: one surface, two purposes.
     3. optional, a light annotation over (1) naming only the HUD regions.
        Not a shortcut-key infographic.

     None of this is in the repo. Masters into media-src/barvision/, processed
     files into public/media/barvision/. -->

<!-- NO CODE EXCERPT. The brief asks for `stateAt()`, and the Barvision source
     is not in this repository, so there is nothing to quote. Writing a
     plausible-looking function would be inventing evidence. Paste the real
     excerpt here and the code-block treatment is already in place. -->

<!-- OVERLAP TO RESOLVE. `Running the show` below still states the same
     operator facts this section now states, and its state-replay and light
     mode paragraphs restate two of the four safeguards above. That section has
     not had its editorial pass yet. -->

<!-- PARKED from `The reveal screens`, the section this one replaced in
     position 04. None of it is published elsewhere on the page.

     1. What a reveal screen had to do at once. The left two thirds carried the
        cumulative standings, all twenty-six entries with their running total
        and the current leader in a highlighted frame; the right third carried
        what was happening right now, which juror was voting, which entry was
        receiving points, how much. A counter across the top said how far
        through the act the show was: 3 / 40 JURIES, 5 / 26,
        18 / 26 TELE VOTES REVEALED.

     2. Why both halves share a screen. A viewer needs to know what just
        happened and what it did to the standings, and cutting between two
        screens loses the connection. The reordering animation carries the
        drama and only works if the before and after are in the same frame.
        Section 03 now describes the reordering without this argument for it.

     3. Where the audience actually is. The stream runs on Bilibili, where live
        comments overlay the lower right of the frame, so the player has a
        toggle that draws a guide over that region and nothing load-bearing
        gets designed into a space the platform is going to cover. This is a
        layout constraint with no home anywhere on the page.
-->

## Designing for Trust

<!-- Full column width. Seamless loop, same recipe as the clips in Section
     03. -->

<figure>
  <video
    src="/media/barvision/allocation-draw.mp4"
    width="1920"
    height="1080"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="The allocation draw in progress over night footage of Chongqing: five pots of entrants across the top, the two semi-finals below, and a card in the middle showing the entrant just drawn and the half they were assigned to."
  ></video>
  <figcaption>Allocation Draw</figcaption>
</figure>

Earlier editions had no live allocation draw, so I added one for 2026. Barvision is a
community event: members bring songs they care about, and the way those songs are
assigned can shape how fair the competition feels. I wanted members to see how those
decisions were made, especially when an assignment or a later result was not what someone
had hoped for.

<!-- Prose width: `data-width="prose"` is the existing modifier for a picture
     that belongs with the sentences rather than standing as the section's
     evidence. -->

<figure data-width="prose">
  <img
    src="/media/barvision/allocation-results.webp"
    alt="The completed allocation over night footage of Chongqing: Semi-Final 1 and Semi-Final 2 side by side, each split into a first half and a second half, with every entrant listed under its own mark."
    width="1920"
    height="1080"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Semi-Final draw results</figcaption>
</figure>

Following Eurovision's allocation-draw format, I grouped entries into pots, then assigned
them to Semi-Final 1 or 2 and to the first or second half of the running order. I built
the draw around a public seed, so the same input always reproduced the same allocation and
members could verify the published result afterward. I also treated it as part of the
broadcast rather than a backstage utility: the seed screen carried Chongqing's skyline into
the interface, and the completed allocation became a full result board.

<details>
<summary>How the draw could be checked</summary>

<!-- Inside a disclosure the figure is already capped at the measure by
     `.prose > *`, so it needs no modifier of its own. -->

<figure>
  <img
    src="/media/barvision/draw-seed.webp"
    alt="The seed screen: the five pots above the two empty semi-finals, and a row of six numbers in the centre being collected from the live chat below it."
    width="1920"
    height="1080"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Seed input screen</figcaption>
</figure>

**One public seed.** The draw ran on a seeded generator rather than on the browser's
own randomness, so the seed string was the whole input, and each stage of the allocation
was a separate step from it.

**Published with the result.** When the draw completed, the seed and its hash were written
out to the clipboard, to local storage, and as a downloadable text file. Anyone could
recompute the draw from them and compare it with what they had watched.

</details>


<!-- PARKED from `Verifiable fairness`, the section this one replaces.

     1. The implementation, which the visible copy now deliberately keeps out:
        a seeded pseudo-random generator built on a hand-written SHA-256 in
        counter mode. The disclosure above describes what it bought without
        naming the construction; add it back only if the section ever needs to
        argue for the method rather than the result.

     2. The conflict-of-interest line, which is the sharpest sentence the old
        draft had and has no home now: for a community contest where I am both
        the organiser and a competitor, publishing the seed was not optional.

     3. The draw is the one show that computes its result rather than replaying
        a recorded one, which is why it is the one place the audience had to
        take something on trust.
-->

<!-- PARKED from `Running the show`, which Section 04 replaced and which is now
     removed. Most of it belongs with Show Day.

     1. The three dates: the allocation draw on 24 July, the semi-final and
        second chance round on 8 August, the grand final on 22 August. The
        public replay link, https://www.bilibili.com/video/BV1eT8s6zEk6/, is
        also in the frontmatter, so the page still reaches it.

     2. The grand final runs two hours and twelve minutes. Sections 03 and 04
        say three hours, which counts the warm-up. Whichever survives has to
        say which one it is measuring.

     3. Nothing is served. The data is inlined as globals so the page opens
        over `file://`, which removes a local server as a thing that can fail
        thirty seconds before going live.

     4. The operator console has about twenty keys in three groups: advancing
        and stepping back; jumping between cues and seeking within a video; and
        a third group that exists purely because a live show cannot be
        repeated, being a light mode that skips the large video files, master
        volume, mute, background playback rate, and safe-area guides. Input
        locks during transitions so a mistimed keypress cannot desynchronise
        the show from itself.

     5. The semi-final constraint: fifteen results would not exist until voting
        closed, roughly thirty-one minutes before they had to be on screen.
        Rather than edit code live, the show ships with a fill-in-the-blanks
        data file, fifteen empty slots the operator types into during the
        interval, then reloads.
-->

<!-- PARKED from `Production notes`, the disclosure that hung off
     `Verifiable fairness`. It describes the whole project rather than the
     draw, so it belongs with Show Day if anywhere.

     1. Plain HTML, CSS and JavaScript. No framework, no bundler, no build
        step. Video and audio elements, CSS custom properties and animations
        for transitions, Canvas 2D for the draw result export at 4K.

     2. The three shows total about 23 GB of local assets: 281 images, 73 video
        files, 43 audio files. Python tools around ffmpeg and ffprobe handle
        loudness normalisation across performance clips, background
        re-encoding, and baking seamless loops, because clips arriving from
        twenty-six different sources do not match on level or format.

     3. None of it is deployed. The playout system runs locally and is
        captured, so the broadcast is the artefact and the code is the
        instrument. That also means it is not in a public repository, which is
        a real limitation of this case study: you can watch the shows, but you
        cannot read the system.
-->

## Building for Future Editions

Barvision is an annual event, so I did not want the 2026 production to end as a one-off
system. After the show, I separated what belonged specifically to Chongqing from what
could carry forward: the allocation logic, the scoring flow, the cue structure, the reveal
patterns, and the reusable animation components.

Earlier editions relied on manually arranged PowerPoint layers, duplicated visual states,
and position values that had to be adjusted screen by screen. Moving the production into
HTML, CSS, and JavaScript turned much of that repeated setup into reusable code and data.
Future editions can keep the underlying draw and scoring logic while replacing the visual
package and importing a new set of competition data.

That shift changed the goal from producing one polished broadcast to building a foundation
the event can keep improving. After the 2026 season, I published the full results to
Barboard's permanent archive on
[barboard.space](/work/barboard#making-history-searchable), so the live event joins the
community's longer history.

<!-- PARKED from `What I would do differently`, the closing section this one
     replaces. Neither item is published elsewhere on the page, and both are
     admissions the old draft chose to make.

     1. Asset preparation was the underestimated cost. Twenty-six performance
        clips arriving in twenty-six formats at twenty-six loudness levels is
        not an interesting problem, and it took more of the schedule than the
        reveal animations did. The conclusion was that the pipeline gets built
        first next time, not last.

     2. There is no measurement. The grand final replay has passed 1,100 views,
        which is more than the forty people competing, but nothing in the
        system records anything: not where viewers dropped off, not whether the
        reveal pacing held them, not which voting act kept more of them. For a
        show designed around pacing that is the gap that matters. Note the
        earlier caution about the 1,100 figure, which is a view count and not
        an audience measurement.
-->
