---
title: "Witness"
year: 2024
dates: "Dec 2024"
blurb: "A mind map of a visual cognition course, sequenced by the running order of a Katy Perry song."
tags: ["information-design"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "Information design"
compact: true
draft: false
stack:
  - Figma
links: {}
cover:
  # The card takes the reading notes, not the poster's title card. The title
  # card is the borrowed identity this page was rebuilt to keep out, and a
  # project whose subject is `I studied this material` should lead with the
  # studying.
  wide: "/media/witness/notes.webp"
  # No picture in the head, because the opening image is three panels in a row
  # and one `<img>` cannot be that. The row is the first block of the body
  # instead, so the work arrives before the writing does.
  #
  # It also solves a measurement problem: a single portrait panel at full
  # column width ran 1311px tall against a 1200px column, which is either
  # cropped or taller than a viewport. Three of them in a row are 433px tall,
  # uncropped, and standing beside each other where they belong.
  heroInBody: true
  tone: "light"
  alt: "Three pages of handwritten reading notes side by side, in blue, red, orange and green ink, with arrows linking terms into flows."
quickFacts:
  - label: "Role"
    value: "Information Designer"
  - label: "Outcome"
    value: "Course-summary mind map"
credits:
  skills:
    - Information design
    - Diagram design
    - Information architecture
    - Editorial layout
  tools:
    - Figma
  team:
    - group: Design
      people:
        - Zhuoqi Liu
    - group: Faculty guidance
      people:
        - Carmen Hull
  # Stated because the page cannot otherwise answer `which parts are yours`.
  # The eye-and-brain drawing is licensed stock, credited in place on the
  # poster; every other figure on this page was built for the course.
  note: "The eye and brain illustration at the top of this page is a licensed stock vector by VectorMine, credited in place. The remaining figures and the structure are my own."
  # The note is the reason the credits exist here at all, so it sits in the
  # open rather than behind a disclosure nobody would open.
  collapse: false
---

<!-- The opening image: three panels in the order they run down the poster,
     which is also the order Mapping perception names them in. Columns take the
     ratio of each panel's own aspect, so the row comes out level with nothing
     cropped, and three portrait panels side by side cost one screen instead of
     three. One caption under the row rather than three under the columns: the
     middle column is 69px wide on a phone and cannot carry its own. -->

<figure>
  <div class="media-pair" style="--pair-split: 0.9165fr 0.5865fr 1.158fr">
    <img
      src="/media/witness/eye-and-cortex.webp"
      alt="A panel on how the eye forms images. A labelled eye sends light to a brain, four numbered steps describe the path from photons to iconic memory, and a fan diagram below divides the cortical layers into V1 and V2 slash V4."
      width="1833"
      height="2000"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/witness/object-recognition.webp"
      alt="A panel on object recognition. A brain in profile has the where pathway running along its top and the what pathway along its base, and a numbered line below runs from the eyes through V1 to V2. A three-step flow closes the panel, from visual interrogation to a vague concept to sketch and improvement."
      width="1173"
      height="2000"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/witness/search-and-recognition.webp"
      alt="A panel on eye movement. Fixation and saccade are defined at the top, and below them a loop diagram runs from processing the current area of fixation to pattern testing and back, with a small scatter of dots showing a current point of fixation, inhibited targets and next candidates."
      width="2316"
      height="2000"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Three sections of the map: light into memory, the what and where pathways, and the search loop. Each pink heading is a line from the song.</figcaption>
</figure>

This was the final project for Visual Cognition. The class was asked to make a mind map of the course, which covers how people take in visual information, from light entering the eye to the brain recognising the objects in a scene.

The three sections above show roughly what the whole poster looks like. It was framed as a Spotify Wrapped page, with the complete lyrics of Katy Perry's *Witness* running down one side.

I used the song's order to structure the map. Its sequence matched the way visual perception develops, from detecting simple features to comparing, searching, recognizing, and finally seeing a complete pattern. Each lyric became a section heading, so reading down the poster meant following both the song and the stages of perception.

<figure data-width="prose">
  <img
    src="/media/witness/notes.webp"
    alt="Three pages of handwritten reading notes side by side, in blue, red, orange and green ink, with arrows linking terms into flows: a cognitive system branching into who, where and how; a chain from light through the retina to detection, analysis, identification and long-term memory; and structure-mapping between a source and a target domain."
    width="2048"
    height="1097"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Reading notes from the semester. The arrows were already turning terms into sequences.</figcaption>
</figure>

<!-- PARKED from the sectioned draft these four paragraphs replace. The page
     has no `##` headings now, so none of this is published elsewhere.

     1. `Mapping perception`, the section on how the figures were made:
        almost everything in the course was a sequence, so each section had to
        show how something happens rather than what a term means; each was
        built as a path you can follow, with light entering an eye and leaving
        as an electrical impulse, the what and where pathways splitting from
        one input, and a search loop returning to its own start; following the
        arrows is following the process.

     2. The Gestalt exclusion: the eight principles are the most redrawn
        subject in information design and my version adds nothing to a
        textbook. The panel is still out of the page; the reason is simply no
        longer stated on it.

     3. The closing takeaway: the poster never left the course and its style
        is not mine to claim, and the decision worth repeating is that when
        the material already has an order, borrow one instead of arranging
        boxes and hoping the reader finds a way in.
-->

<!-- PARKED. Why this is an archive row with a short page rather than a full
     case study, and why the poster itself is not shown.

     1. Third-party material, in three kinds at different levels of risk. The
        left column of the poster reproduces the complete lyrics of a
        copyrighted song, which is verbatim reproduction of a whole work with
        no parody defence. The Spotify wordmark, the Wrapped identity and the
        player chrome are trademark use, defensible as student parody but
        needing an explicit statement of no affiliation. The artist photograph
        beside `My Top Song` is third-party copyright again. Handling all three
        costs more than the piece returns, and handling them removes what made
        it striking.

     2. Most of the visual framework is borrowed. The palette, the layout and
        the components are Spotify's. That was a smart choice for a course
        assignment and a liability in a portfolio, where the honest answer to
        `which parts are yours` is the structure and the diagrams, not the
        visual system. Showing the poster whole invites the reader to credit me
        with someone else's design.

     3. The eight Gestalt principles are the single most redrawn subject in
        information design. That section of the poster is competently made and
        carries no differentiation.

     What the project is still evidence for: grounding in visual perception
     theory. Preattentive processing, the what and where pathways, saccades and
     visual search, Gestalt. This is the artifact showing the material was
     studied rather than skimmed.

     Deliberately not on the page: an audience statement, the song's fanbase,
     a line-by-line lyric mapping, a course reflection, and any framing that
     treats the Spotify pastiche as the design achievement. Each of those pulls
     the project back to `student themed poster` and away from the one thing
     worth showing.

     `archive: true` keeps it out of the landing page and out of the main /work
     list; it appears under the archive filter. All four archive-only projects
     carry it: this one, lumitex, emoease and nightmare-of-moonglade.
-->
