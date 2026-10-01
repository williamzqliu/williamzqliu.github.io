---
title: Melovision
year: 2023
dates: Jul 2023 – Oct 2023
blurb: An audio-reactive music visualization system with a discovery interface concept and spatial projection.
tags: [interactive]
tracks: [design]
category: visual-storytelling
published: true
stack:
  - TouchDesigner
  - Figma
links:
  demo:
    href: https://www.youtube.com/watch?v=Pem2er8I3Mc
    label: Project video
cover:
  wide: /media/melovision/cover-wide.webp
  tone: dark
  alt: "A teal and violet three-dimensional form with curved bands and a textured surface on a dark background."
  caption: "The visualization combines a genre preset, a mood color, and audio-driven surface changes."
quickFacts:
  - label: "Role"
    value: "Research, generative visual design, and interface prototyping"
  - label: "Outcome"
    value: "Generative music visuals, discovery interface concept, and spatial projection"
credits:
  skills:
    - Generative design
    - Interface design
    - User research
    - Visual identity
  tools:
    - TouchDesigner
    - Figma
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

## Designing music forms

<figure>
  <img src="/media/melovision/song-forms.webp"
    alt="One large form labeled As It Was by Harry Styles and nine smaller forms, each labeled with a track title, artist, and genre."
    width="1600" height="1128" loading="lazy" decoding="async" />
  <figcaption>Generated examples combine genre presets, mood colors, and the audio of different tracks.</figcaption>
</figure>

I assigned a base geometry to each of eight genre groups. The genre shapes provide a fixed
starting point for the audio-driven changes.

Color follows an emotion wheel that I compiled from online sources and my research. I used
it to connect mood labels with colors, then combined those colors with the genre
geometries.

<!-- Shape and color side by side at every width, phones included.
     `--pair-split` is the two images' own aspect ratios, 1.737 and 1.811, so
     they come out the same height with nothing cropped. -->
<div class="media-pair" style="--pair-split: 1.737fr 1.811fr">
  <figure>
    <img src="/media/melovision/shape-system.webp"
      alt="Eight base geometries labeled with genre groups, including rounded, curved, faceted, and open forms."
      width="1200" height="691" loading="lazy" decoding="async" />
    <figcaption>Each of the eight genre groups has a preset base geometry.</figcaption>
  </figure>
  <figure>
    <img src="/media/melovision/color-states.webp"
      alt="The same rounded pop geometry in red, gold, green, lavender, and pale blue, labeled angry, amazed, happy, agitated, and sad."
      width="1800" height="994" loading="lazy" decoding="async" />
    <figcaption>The same pop geometry is shown with five mood colors.</figcaption>
  </figure>
</div>

TouchDesigner reads the song's audio and uses spectrum parameters to change the surface in
real time. I connected and combined geometry, color, and texture controls in its node
network.

These shapes and mood colors are design conventions. Their interpretation by listeners has
not been validated.

<details>
<summary>Generation setup</summary>

My generation workflow reads a track, generates its audio spectrum, transfers selected
parameters to visual controls, and renders the result in TouchDesigner.

<table data-width="prose">
  <thead>
    <tr><th scope="col">Audio parameter</th><th scope="col">Visual assignment</th></tr>
  </thead>
  <tbody>
    <tr><td>Low frequency</td><td>Surface depth</td></tr>
    <tr><td>Middle frequency</td><td>Vertical texture</td></tr>
    <tr><td>High frequency</td><td>Horizontal texture</td></tr>
  </tbody>
</table>

<figure>
  <img src="/media/melovision/colour-system.webp"
    alt="A circular palette with mood terms arranged in colored rings and six outer groups: angry, amazed, afraid, happy, sad, and agitated."
    width="760" height="719" loading="lazy" decoding="async" />
  <figcaption>The emotion wheel organizes the project’s mood labels and color associations.</figcaption>
</figure>

</details>

## A music-discovery concept

I began with my own difficulty finding new music through personalized playlists. A survey
of 105 listeners and six interviews helped me examine what people wanted from music
discovery.

Respondents wanted more varied genres and less time auditioning songs. I interpreted those
concerns as a reason to make genre, mood, and tags explicit choices in the discovery
interface.

I designed Explore around those three controls and a refresh action. The prototype shows
how a listener could set preferences, preview a proposed next song, and request another
suggestion.

<figure>
  <img src="/media/melovision/explore-panel.webp"
    alt="An Explore prototype showing the current track As It Was, genre tiles, a mood palette, tags, and a proposed next track, Billions, with a refresh control."
    width="1800" height="1053" loading="lazy" decoding="async" />
  <figcaption>Explore presents genre, mood, and tags as choices in the discovery concept.</figcaption>
</figure>

The interface demonstrates a proposed flow. It has no integrated recommendation system, and
I have not established whether it improves discovery or reduces selection time.

<details>
<summary>Research context</summary>

The survey included 105 respondents, with 90.5% aged 18–30. I also interviewed two music
enthusiasts, two independent musicians, and two algorithm engineers.

The interview summary records concerns about repetitive recommendations and independent
musicians' reach, alongside engineers' descriptions of recommendation mechanisms.

These figures describe the surveyed group. They do not establish how recommendation systems
affect the wider population.

<table data-width="prose">
  <thead>
    <tr><th scope="col">Survey rating</th><th scope="col">Score out of 10</th></tr>
  </thead>
  <tbody>
    <tr><td>Convenience</td><td>6.13</td></tr>
    <tr><td>Satisfaction with the mechanism</td><td>5.35</td></tr>
    <tr><td>Satisfaction with recommended music</td><td>5.30</td></tr>
    <tr><td>Willingness to keep using the mechanism</td><td>5.61</td></tr>
  </tbody>
</table>

<table data-width="prose">
  <thead>
    <tr><th scope="col">Selected expectation</th><th scope="col">Respondents</th></tr>
  </thead>
  <tbody>
    <tr><td>More sensitive analysis of music preferences</td><td>66.7%</td></tr>
    <tr><td>More diverse genres and avoidance of information cocoons</td><td>55.2%</td></tr>
    <tr><td>Less time spent auditioning and selecting music</td><td>51.4%</td></tr>
  </tbody>
</table>

</details>

## From screen to room

I projected the generated forms at room scale, extending the visual language beyond the
discovery interface. The installation displayed the generated visuals and had no
audience-responsive controls.

<!-- Cut from the 49-second recording (26.20s to 33.20s), with the tail
     cross-faded into the head so the loop has no visible cut. The same player
     as Barvision's clips: it starts itself, muted, in view, with the browser's
     controls. The poster is the opening frame. -->
<figure>
  <video
    src="/media/melovision/projection-loop.mp4"
    poster="/media/melovision/projection-loop-poster.webp"
    width="1120"
    height="630"
    muted
    loop
    playsinline
    controls
    preload="none"
    data-player="autoplay"
    data-nozoom
    aria-label="A large animated form projected on a dark wall, with smaller forms arranged beside it."
  ></video>
  <figcaption>The generated forms are presented as moving images at room scale.</figcaption>
</figure>

The projection demonstrates a change of scale. Its effect on audience understanding has not
been established.

<details>
<summary>Visual identity extensions</summary>

I carried the same forms and colors into the identity, promotional website concept, and
printed invitations. The logo combines a sound wave, cocoon threads, and the generated music
form.

The invitations and scanner screen illustrate a proposed entry into the experience. This
entry flow is shown as a concept.

<figure>
  <img src="/media/melovision/identity.webp"
    alt="A visual identity board showing the logo’s three source elements, logo variants, typography, genre and mood tiles, and yellow, green, and violet brand colors."
    width="1200" height="941" loading="lazy" decoding="async" />
  <figcaption>The logo connects the sound wave, cocoon threads, and generated form.</figcaption>
</figure>

<figure>
  <img src="/media/melovision/invite-scanner.webp"
    alt="Printed Melovision invitations shown with a phone displaying a QR scanner screen."
    width="1800" height="1306" loading="lazy" decoding="async" />
  <figcaption>Printed invitations and a scanner screen extend the concept’s entry flow.</figcaption>
</figure>

</details>

<!-- MEDIA, and where each figure came from (originals in media-src):

     cover-wide       cover-wide.png
     song-forms       rendering.png
     shape-system     genre-shape.png
     color-states     color-states.png
     colour-system    emotion-colors.png
     explore-panel    website-screenshot.png
     identity         visual-identity.png
     invite-scanner   invite-scanner.png
     projection-loop  melovision-music-interactive-space.mp4

     Not used: app-screens.webp and the generation diagram on panel 6, which
     carries a spectral-centroid mapping the page does not claim. -->
