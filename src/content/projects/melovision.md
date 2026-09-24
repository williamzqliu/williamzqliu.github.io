---
title: Melovision
year: 2023
dates: Jul 2023 – Oct 2023
blurb: A music discovery concept that renders each song as a generative form driven by its own audio.
tags: [interactive]
tracks: [design]
category: visual-storytelling
published: true
stack:
  - TouchDesigner
  - Figma
links:
  demo: https://www.youtube.com/watch?v=Pem2er8I3Mc
cover:
  # One generated form on the project's dark ground, rendered wide rather than
  # cropped out of a board. The head has to say generative music visualization
  # before it says anything else, which rules out both the old title slide and
  # the three-phone app shot: the first says presentation, the second says app.
  # 16:9, and the head's 2.1:1 banner takes it without touching the form.
  wide: /media/melovision/cover-wide.webp
  tone: dark
  alt: A generative sphere in teal and violet, its surface warped and striped by the audio of a single song.
quickFacts:
  - label: "Role"
    value: "Designer & Researcher"
  - label: "Outcome"
    value: "Generative visual system and music-discovery prototype"
credits:
  skills:
    - Interaction design
    - User research
    - Generative design
    - Information visualization
    - Visual identity
  tools:
    - TouchDesigner
    - Figma
  # `Roles` rather than `Team`, and `Portfolio guidance` rather than `Faculty
  # guidance`, following comgrand, emoease and lumitex: the same tutor on the
  # same 2023 application portfolio, advising on how the work was presented
  # rather than teaching a course it was made for.
  teamLabel: Roles
  team:
    - group: Design and research
      people:
        - Zhuoqi Liu
    - group: Portfolio guidance
      people:
        - Vince Ye
  collapse: false
---

<!-- No intro paragraph. The head carries the title, the blurb and one large
     generated form, which is the whole premise stated in a picture; a sentence
     between that and Section 01 would be a second opening. The question the
     project started from now opens the section that answers it. -->

## Making recommendations visible

Recommendation systems save time. I started from a question about the cost: do they also narrow what listeners hear, and hide how a recommendation is made?

A survey of 105 listeners rated the recommendation mechanism. Convenience and satisfaction came apart.

<!-- Two ratings, and only ratings. The sample size is a count rather than a
     rate, so it sits in the sentence above; a strip holding `105` beside `6.13`
     would invite the eye to compare two numbers that are not the same kind of
     thing. The three percentages below stay in prose for the same reason: they
     are a list of wants, measured a third way.

     The scale rides with each figure as `/ 10` rather than waiting in the
     label, which is how the percentages on EmoEase carry their own sign. It is
     set like the label, so the number stays the loud thing in the cell. -->

<div class="stat-strip">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">6.13<span class="stat-strip__unit">/ 10</span></p>
    <p class="stat-strip__label">Convenience</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">5.30<span class="stat-strip__unit">/ 10</span></p>
    <p class="stat-strip__label">Satisfaction with what it recommended</p>
  </div>
</div>

What people wanted was not more recommendations. 66.7% chose a system that noticed when their preferences changed, 55.2% more diverse genres, and 51.4% less time auditioning songs before deciding whether they liked them.

Six interviews showed the same system from three sides. Listeners found the recommendations repetitive, independent musicians struggled to reach listeners who did not already follow them, and algorithm engineers explained how the system reduces individual preferences into reusable patterns.

So I did not set out to build a better recommender. I set out to make both the song and the listener's preferences easier to read.

<!-- No figure here, decided against. The three interview positions are a
     label each on `panel-2-research-survey`, and the labels only make sense
     sitting over the six persona cards they head. The paragraph above already
     names all three, and the strip carries the numbers. A crop of the whole
     block would be the research dashboard this restructure removed. -->

## Turning a song into a form

I took cymatics as the starting point. Sound vibration already produces visible patterns, so a form generated from a song follows from the music rather than decorating it.

I gave each song three independent layers: shape for genre, colour for emotion, and surface texture from its audio spectrum.

**Shape carries genre.** Eight geometries, one per genre group. I made it the coarsest of the three layers, so it is the one read first.

**Colour carries emotion.** An emotion wheel sets it, and this is the one layer I let the listener override by hand.

**Texture carries the spectrum.** The audio drives it: low frequencies push the surface into depth, middle frequencies run vertically through the form, high frequencies cross it horizontally.

<!-- Shape and colour side by side: two layers, one figure each, and the
     columns take their own aspects so the pair comes out level with nothing
     cropped. Texture has no figure of its own — the three spheres on the board
     are labelled surface, colour block and depth, which is not the vocabulary
     the paragraph above uses, and the synthesis diagram in the disclosure shows
     the frequency mapping properly. -->

<div class="media-pair" style="--pair-split: 1.737fr 1.056fr">
  <figure>
    <img
      src="/media/melovision/shape-system.webp"
      alt="Eight generated forms in two rows of four, each labelled with a genre. Pop, R&amp;B, Latin and country on the top row are rounded and banded; indie, electric and dance, rock and metal, and rap and hip hop below are faceted blocks and open wireframe cages."
      width="1200"
      height="691"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Eight geometries, one per genre group</figcaption>
  </figure>
  <figure>
    <img
      src="/media/melovision/colour-system.webp"
      alt="The emotion wheel. About forty terms sit in rings inside a colour disc, from irate, upset and frustrated in the reds through anxious and worried, to chill, satisfied and pleased in the greens and depressed, grief and disappointed in the blues. Six labels ring it: angry, amazed, afraid, happy, sad and agitated."
      width="760"
      height="719"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The wheel, and the layer a listener can change</figcaption>
  </figure>
</div>

The frequency mapping is the part I would defend hardest. Bass is felt as weight, midrange carries the vocal and melodic body, treble is detail and edge: each band shapes the form the way the ear already treats it. I can give a reason for every assignment and I have tested none of them.

<table data-width="prose">
  <thead>
    <tr>
      <th>Reading</th>
      <th>Drives</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Spectral centroid</td><td>Mood tone</td></tr>
    <tr><td>Low frequency</td><td>Depth of the surface</td></tr>
    <tr><td>Middle frequency</td><td>Vertical texture</td></tr>
    <tr><td>High frequency</td><td>Horizontal texture</td></tr>
  </tbody>
</table>

Because the layers are independent, two songs in one genre share a shape and diverge in colour and surface. I ran nine released tracks through the whole pipeline to check the system made forms you could tell apart rather than nine versions of one object.

<!-- The result, at prose width rather than the full column. Nothing else in
     the section is wider than the measure now, and a figure that breaks out
     reads as the section's own conclusion rather than as one more example; the
     labels inside it are small at this size, which the lightbox answers. -->

<figure data-width="prose">
  <img
    src="/media/melovision/song-forms.webp"
    alt="One large generated form labelled As It Was, and nine smaller ones in a three by three grid. Each of the nine sits under its track title, artist and genre and over its own waveform strip, running from Anti-Hero as pop to Roman Holiday as rock and metal. No two are alike in shape, colour or surface."
    width="1600"
    height="1128"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Nine tracks, and the one the demo runs on</figcaption>
</figure>

<details>
<summary>How the forms are generated</summary>

**Audio in.** The track is read as audio rather than as metadata, so the form comes from the recording.

**Spectrum analysis.** The signal is split into its frequency bands and a spectral centroid.

**Parameter extraction.** Each band becomes a number, and the spectral centroid becomes the mood tone.

**Geometry and surface.** The numbers displace the genre geometry and work its surface; the emotion layer sets the colour.

**Rendering.** TouchDesigner generates the form in real time, which is what let it run as video at room scale later.

</details>

## Giving listeners control

So I turned the preference model into a set of controls. Rather than let the system infer everything silently, I put genre, mood and tags in front of the listener, with a way to reject what comes back and ask for another.

That reverses what the research found. The system still recommends music, but the listener can see what shaped the recommendation and change it.

I carried the same visual language into an identity, a promotion site and printed invitations, as one system in other media rather than separate outcomes.

<!-- The prototype at full width because it is the section's argument, and the
     app and the identity under it at half, because they are the sentence about
     the system extending and nothing more. One figure each: a second identity
     figure would be the branding section this restructure removed. -->

<figure>
  <img
    src="/media/melovision/explore-panel.webp"
    alt="The prototype with the Explore panel open. A row of genre tiles runs across the top, a mood wheel sits below on the left and a list of tags on the right. Under them is the track that came back, Billions by Caroline Polachek, with its generated form and a refresh control. Four notes point at the controls: choose a genre, choose a mood colour from the palette, add tags, and refresh if you do not like the song."
    width="1800"
    height="1053"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Genre, mood and tags, the track they return and a way to reject it</figcaption>
</figure>

<div class="media-pair" style="--pair-split: 1.096fr 1.276fr">
  <figure>
    <img
      src="/media/melovision/app-screens.webp"
      alt="Three phone screens. A getting-started screen carrying the logo, an Explore screen with a generated form above the player, and a code scanner."
      width="1000"
      height="912"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Onboarding, Explore and the code scanner</figcaption>
  </figure>
  <figure>
    <img
      src="/media/melovision/identity.webp"
      alt="The identity. The logo is given as an equation of three parts: a sound wave, cocoon threads and a music ball. Below it the logotype in two weights, four genre tiles, the typeface Outfit in bold and extra light, and three colours: a yellow, a green and a violet."
      width="1200"
      height="941"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The logo, built from a wave, cocoon threads and a music ball</figcaption>
  </figure>
</div>

## From screen to room

I projected the forms at room scale to see whether they still worked outside the app. The projection was not interactive; it was a spatial test.

The change in scale mattered. On a phone a music form behaved like album art. At several metres wide it became something people could stand in front of, compare and discuss, which is what convinced me the form had a use beyond a private recommendation feed.

<!-- The projection moving, because the thing this page argues for is a form
     generated from audio in real time, and a still is the one frame that
     cannot show it. Cut from the 49-second recording: 6 seconds out of the
     stretch after everyone had left the shot, with the tail cross-faded into
     the head so the wrap is an ordinary frame step rather than a cut. The
     dissolve hides in the form itself, which is diffuse and churning.

     Muted and looping, and `playVisibleClips()` in the page script starts it
     200px before it arrives and pauses it on the way out. -->

<figure>
  <video
    src="/media/melovision/projection-loop.mp4"
    width="1120"
    height="630"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-label="A generated form projected onto a dark wall, turning and churning in place, with five smaller forms floating in a grid to the right of it."
  ></video>
  <figcaption>Spatial projection test</figcaption>
</figure>

<!-- The closing callout, which is the pattern for exactly this: the author's
     voice, set apart from the narrative, as the last block of the case study.
     `data-close` puts the label in the accent rather than the quiet grey, and
     the docs allow it once and only as the closing block — being the end is
     what earns the colour.

     Not a heading: `.prose h2` carries the section counter, so one here would
     number itself 05 and turn four sections into five. Not a bold-lead
     paragraph either, which is what it was: at eighty words it read as a sixth
     paragraph of Section 04 rather than as the page putting its own case down. -->

<blockquote data-close>
  <p><strong>What remains untested</strong></p>
  <p>The research established the problem, not the solution.</p>
  <p>I never tested whether anyone could read genre off a shape, whether the emotion colours matched associations beyond my own, or whether the forms made choosing music faster. Shape is the weakest of the three: eight geometries have no inherent connection to eight genres, so a listener would have to learn them, which is the cost the project set out to remove.</p>
</blockquote>

<!-- MEDIA, and where each figure came from. The boards were re-exported at
     7680x2688, which is what made these crops possible; at the first export
     they were 1920 wide and every one of them would have been upscaled three
     to five times.

     Every figure is now an export of the component itself rather than a crop
     out of a board, which is why none of them is upscaled and why the aspect
     ratios in the two `--pair-split` values below are the components' own.

     cover-wide         cover-wide.png
     shape-system       genre-shape.png
     colour-system      emotion-colors.png
     song-forms         rendering.png

     OUT of Section 02: `waveforms.png`, the four-arrow mapping diagram. At
     2.6:1 it set its own width and it carried eight words and four arrows,
     which a prose-width table holds with less furniture. `media-src` still
     holds it.
     explore-panel      website-screenshot.png
     app-screens        app-screenshot.png
     identity           visual-identity.png
     projection-loop    melovision-music-interactive-space.mp4, 26.20s to 33.20s

     OUT of Section 04: the one still of the projection with a person standing
     in it. The loop above it is the same test and shows the forms moving,
     which is the thing a still cannot carry; two frames of one projection was
     the second one earning its place on scale alone. The consequence is that
     nothing on the page now pictures a person in front of the work, so the
     sentence about standing in front of it rests on the prose. `panel-9` still
     holds the frame if that ever needs reversing.

     WHAT THE OLD BOARDS HELD, and what happened to it. The application panels
     were: inspiration, primary research, competitive analysis, design strategy,
     design development, visual identity, final outcome, reflection. The four
     sections here take the argument out of them; the boards themselves are
     source material and are not shipped whole. Specifically dropped: the
     competitive-analysis table, the recommendation-algorithm diagram, the HMW
     blocks, the strategy mind map, the branding board, the promotion site, the
     invitation cards, and the reflection paragraph on panel 9.

     `Interactive Space` was the old panel's name for Section 04. It is wrong —
     nothing in the room responded to anyone — and the section is now called
     what it was.

     THIRD-PARTY MATERIAL. Nothing on this page carries a streaming service's
     interface or marks: `panel-1` is app screenshots and `panel-3` is the
     NetEase, QQ Music, Spotify and Apple Music comparison, and both are out.
     No album artwork and no artist photography anywhere. The nine-track figure
     prints titles and artists, which is what was analysed rather than what is
     being promoted, and the prose no longer names any of them.

     NOT USED, and still in media-src:

     `prototype.webp` is the same Explore view as `explore-panel` without the
     four callout notes, at 1024 wide. The annotated crop won on both counts:
     it is 1800 wide and it labels the controls, which saves the prose from
     describing every one of them.

     OPEN, and not a blocker:

     1. `tags: [interactive]`. CONTENT-AUDIT.md §C3 has this one unsettled: the
        project is a brand system and print (`graphic`) as much as a spatial
        piece (`interactive`). Left as it was found.
     2. Two verbatim interview quotations are in the previous draft and are not
        on the page: a listener on homogeneous recommendations, and an engineer
        on preferences resolving into a fixed preference chain preset. They
        would carry Section 01 as a `.participant-quote` pair if the third
        position can be quoted too; two out of three positions quoted and one
        paraphrased would read as a gap.
     3. Section 04 rests on one photograph. If the demo recording holds a
        steady stretch of the projection, a second frame or a seamless loop
        would carry `people could stand in front of it` better than a still. -->
