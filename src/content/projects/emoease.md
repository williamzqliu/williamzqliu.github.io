---
title: "EmoEase"
year: 2023
dates: "Oct 2023 – Nov 2023"
blurb: "A projection installation that responds to visitors’ presence using Kinect, particles, and emoji."
tags: ["interactive"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "Interactive installation"
compact: true
draft: false
stack:
  - TouchDesigner
  - Kinect
links:
  demo:
    href: "https://www.youtube.com/watch?v=1XzRk-Fi_zc"
    label: "Video Demo"
cover:
  # The head takes the loop. A still cannot show a piece whose subject is
  # responding to you, and CoverMedia already reads the extension and renders
  # a muted autoplaying video instead of a picture. `heroWhole` keeps its own
  # 16:9 rather than cropping it to the head's 2.1:1 banner.
  #
  # `wide` is the card image, and an archive project has no card: ArchiveList
  # renders title, category and year with no cover, the curated list excludes
  # archive, and the landing page needs a `featured` rank this project does
  # not have. It points at the installation still so that the field is not a
  # path to a file nobody made.
  wide: "/media/emoease/installation.webp"
  heroWide: "/media/emoease/projection-loop.mp4"
  heroWhole: true
  tone: "dark"
  alt: "The projection running: a field of yellow, green, and red emoji drifting over a dark wall, with two bright yellow particle silhouettes of standing figures holding their shape in the middle of it."
  caption: "Final installation"
quickFacts:
  - label: "Role"
    value: "User research, interaction design, and development"
  - label: "Outcome"
    value: "Interactive projection installation"
credits:
  skills:
    - Interaction design
    - Creative technology
    - User research
    - Experience design
    - Prototyping
  tools:
    - TouchDesigner
    - Kinect
  # `Roles` rather than `Team`, and `Portfolio guidance` rather than `Faculty
  # guidance`, both following comgrand: the same tutor, and the repo already
  # records that he advised on how the work is presented rather than on the
  # work itself. This project was made for a graduate application portfolio,
  # which is the presentation he advised on.
  teamLabel: Roles
  team:
    - group: Design and development
      people:
        - Zhuoqi Liu
    - group: Portfolio guidance
      people:
        - Vince Ye
  collapse: false
---

## Research context

I started EmoEase with a personal question: **why did social media sometimes leave me anxious even when I knew much of what I was seeing was curated or exaggerated?**

In a survey with 106 valid responses, 77 people (72.6%) said they had been troubled by over-packaged content on social media.

Six interviews showed different reactions. One interviewee said people tend to notice such content only afterward and feel embarrassed to say so. Another said that once they noticed content was exaggerated, they turned to friends for support, and another mentioned connecting with people in real life.

## Building the projection

I built EmoEase in TouchDesigner as a projection that combines two layers in one image: imported social media footage, which I processed into layered trails, and the visitor's body, which a Kinect turns into a particle silhouette surrounded by emoji.

I also set a simple rule for how the projection changes with the number of people in front of it. The thresholds were my own choice.

<figure>
  <img
    src="/media/emoease/composition.webp"
    alt="The two layers and their merge, in three columns. Type 1 builds trails of social media imagery from a randomized sequence of layers; type 2 builds the emotion visualization, generating particle streams, outlining a body from them, and growing emoji from detected facial expressions; the third column shows the two merged into one field of emoji over a particle silhouette."
    width="2000"
    height="1277"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The footage layer, the particle body layer, and the two merged.</figcaption>
</figure>

<details>
<summary>How the projection was built</summary>

**Body tracking.** A Kinect supplied the depth image and the skeleton.

**The body layer.** The depth silhouette drives a particle system, so the visitor appears as particles rather than as camera video. In the design, facial expressions map to the emoji that grow out of the silhouette; the mapping is a visual rule and does not identify how anyone feels.

**Compositing.** The two layers merge with a maximum operation, which keeps the brighter of the two at each pixel.

**Interaction rule.** The flowchart is the interaction specification I wrote for the number-of-people rule.

<figure>
  <img
    src="/media/emoease/interaction-system.webp"
    alt="The interaction flowchart. From a start box a visitor stands in front of the sensor, which branches on how many people are present: one goes straight to performance mode 1; two and more than two each ask whether they are interacting, and a no on either branch returns to mode 1 while a yes gives mode 2 and mode 3. All branches meet at a single output. A dashed line across the diagram separates what the visitor sees from the camera, computer, and sensor that stay invisible."
    width="2000"
    height="1269"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The interaction specification, with the modes as planned.</figcaption>
</figure>

</details>

## In the room

I used emoji as the visual language because they come from the platforms the project was questioning, so the projection answers in their vocabulary.

The installation ran with visitors interacting with it, as the demo video and the photo below show, but I did not formally evaluate whether it changed their awareness.

<!-- The head carries the loop, cut from the middle of the demo recording
     where the camera is on the wall alone and no hand crosses the frame. The
     tail cross-fades into the head so the wrap is invisible: the join measures
     26.5 dB against 23.4 dB for an ordinary frame step, which means the loop
     point moves less than the picture does anyway.

     This one is the room rather than the wall, so it sits at the prose
     measure: the loop above already had the article column, and a second
     full-width frame of the same installation would say it twice. -->

<figure data-width="prose">
  <img
    src="/media/emoease/installation.webp"
    alt="The installation seen from the back of the room. A visitor stands in silhouette at the left edge, the projection covers the wall in front of them with emoji around a yellow particle figure, and the Kinect sits on a low stand below the image."
    width="2000"
    height="1501"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Installation in use</figcaption>
</figure>

<!-- PARKED from the application-portfolio version this rebuild replaces.

     1. Survey detail beyond the three headline figures: respondents mostly 18
        to 30, averaging four and a half hours a day; 66% naming anxiety and
        confusion as their reaction; 73.6% naming an effect on their thinking;
        and 90.1% coping by avoiding controversial topics or believing only
        parts, which is avoidance rather than verification.
     2. The interview excerpts. Section 01 now attributes the noticing-afterward
        account to one interviewee rather than to all six.
     3. `Key decisions` as a headed list: the subject is awareness rather than
        accuracy; two layers rather than one composition; presence as the
        input rather than gesture. All three are now consequences inside
        Sections 02 and 03 instead of a section of their own.
     4. `Outcome`: built, ran with people in the room, one public video. Never
        exhibited publicly, no publication, no evaluation, made for a graduate
        application portfolio.
     5. `Reflection`: that the obvious missing step was standing in the room
        for an afternoon and writing down what people did.
     6. The three modes are not distinguishable in any footage that exists.
        The flowchart defines them; the site video does not separate them.
        Claiming the branching as a decision would be better supported by a cut
        that shows all three, which has not been made.

     PANEL DEFECTS, if any of the old boards are ever exported as source:
     - Panel 4-3 repeats the same caption for concept steps 2 through 5.
     - The YouTube URL printed on panels 4-0 and 4-5 is wrong in two ways.
       Video IDs are case sensitive; the correct ID is 1XzRk-Fi_zc, which is
       what the frontmatter link uses.
-->
