---
title: "Nightmare of Moonglade"
year: 2021
dates: "Sep 2020 – Mar 2021"
blurb: "A fan-made Hearthstone expansion exploring game systems through 130 cards and four original mechanics."
tags: ["interactive"]
tracks: ["design"]
published: false
archive: true
archiveLabel: "Game systems"
compact: true
draft: false
stack: []
links:
  demo: "https://www.youtube.com/watch?v=lT1nN2Lxk-s"
cover:
  # The head takes the title art. It is Blizzard's logo over a painted forest
  # and the credits note says so in the open, which is what makes it usable:
  # the page states the ownership before a reader has to guess at it.
  # `heroWhole` keeps its own 16:9 rather than cropping it to the head's
  # 2.1:1 banner.
  #
  # No card to feed: ArchiveList renders title, label and year with no cover,
  # the curated list excludes archive, and the landing page needs a `featured`
  # rank this project does not have, so `wide` is read by the head alone.
  wide: "/media/nightmare-of-moonglade/cover-wide.webp"
  heroWhole: true
  tone: "dark"
  alt: "The expansion's title art: Nightmare of Moonglade set over a purple, overgrown forest under the Hearthstone logo, with a lone figure on the path below."
quickFacts:
  - label: "Role"
    value: "Game Systems Designer"
  - label: "Outcome"
    value: "130-card fan expansion"
credits:
  skills:
    - Game systems design
    - Rules writing
    - Balance design
  team:
    - group: Design
      people:
        - Zhuoqi Liu
  # Without this a reader would assume the wrong half is mine, because the
  # wrong half is what fills every picture.
  note: "Hearthstone, its card frames, its interface and the setting are Blizzard Entertainment's. Card artwork is a mix of Blizzard's own and Hearthstone-style pieces sourced from artstation.com. What I made is the mechanics, the card text, the class pairings and the numbers. This is unofficial fan work, not affiliated with or endorsed by Blizzard."
  collapse: false
---

A fan-made expansion for Hearthstone, built in my final undergraduate year. The set is adapted from *World of Warcraft: Stormrage*, a 2010 novel in which Malfurion Stormrage falls asleep inside the Emerald Dream while the nightmare he went there to investigate spreads across the world.

## Three questions, four mechanics

I did not start from a mechanic looking for a theme. I wrote three questions about that story and made each one produce rules.

How do you refer to a sleeper waking at the worst possible moment? How do you make a player feel two camps at war? How do you show two factions that hate each other fighting on the same side?

The answers were Awaken, the Blessing and Nightmare cards, Dual Class Sidequests, and Partner. Each mechanic has a plot reason for existing, and none of them was designed first and justified afterwards.

<figure>
  <img
    src="/media/nightmare-of-moonglade/concepts.webp"
    alt="Three concept columns side by side. Each holds a question about the story, a cluster of notes answering it, and the mechanics that came out of it: Malfurion's awakening produces the Awaken keyword; the confrontation between justice and evil produces Blessing and Nightmare cards and Dual Class Sidequests; cooperative combat produces the Partner keyword and the Books of Experience."
    width="2000"
    height="1016"
    loading="lazy"
    decoding="async"
  />
  <figcaption>One question per column, and the mechanics underneath it.</figcaption>
</figure>

## A keyword made out of a button

Hearthstone's End Turn button turns green when the game has worked out that you have nothing left worth doing. Every player reads that signal without thinking about it, and no card had ever made it mean anything.

Awaken fires the first time the button turns green in a turn. A minion or weapon carrying the keyword hands something back at the moment you have run out, which is the novel's premise stated as a rule: the sleeper wakes when the situation is worst.

The trigger had to be obvious without a tutorial, and it already was. The interface had been telling players they were out of options for years.

<figure>
  <img
    src="/media/nightmare-of-moonglade/awaken.webp"
    alt="Four states of the End Turn button in a row. Orange while operations remain; green the first time none do; a cyan glow while Awaken cards resolve and hand back further operations; green again once those are spent."
    width="2000"
    height="662"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The button already carried the state. Awaken gave it to the rules.</figcaption>
</figure>

## Building the set

Ten classes split into a Justice camp and an Evil camp, and inside them into five partner pairs: Druid with Warrior, Paladin with Priest, Mage with Shaman, Hunter with Rogue, Warlock with Demon Hunter.

Each pair got a worksheet before it got cards. One column of what each class is already good at, one column of what the two share, and the dual-class cards designed into the overlap rather than invented separately. Warlock and Demon Hunter share card discards, lifesteal and sacrifice, so the cards between them turn negative effects into advantages.

<figure data-width="prose">
  <img
    src="/media/nightmare-of-moonglade/classes.webp"
    alt="A scroll headed The Division of Classes. Druid with Warrior, Paladin with Priest and Mage with Shaman are bracketed as partner classes in the Justice Camp; Hunter with Rogue and Warlock with Demon Hunter sit under the Evil Camp."
    width="1200"
    height="1582"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Ten classes, two camps, five partner pairs.</figcaption>
</figure>

Every card then had to fit a quota. Nothing was included because it was a good idea on its own; a card existed because a slot existed and something had to be right for it.

<table>
  <thead>
    <tr>
      <th>Group</th>
      <th>Cards</th>
      <th>Legendary</th>
      <th>Epic</th>
      <th>Rare</th>
      <th>Common</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Single-class, 8 per class</td><td>80</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
    <tr><td>Dual-class, 6 per pair</td><td>30</td><td>1</td><td>1</td><td>2</td><td>2</td></tr>
    <tr><td>Neutral</td><td>20</td><td>5</td><td>5</td><td>5</td><td>5</td></tr>
  </tbody>
</table>

<figure>
  <img
    src="/media/nightmare-of-moonglade/card-set.webp"
    alt="The finished set laid out as an overlapping grid: rows of cards in the game's frames, class by class, ending in a row of legendaries with their rule text readable."
    width="2000"
    height="1465"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The full set. The demo walks through all 130 one at a time.</figcaption>
</figure>

Then I printed the set and played it. The balance came out of watching which cards got picked, which never left a hand, and which ended a game too early, and moving the costs and stats until that stopped happening.

<!-- Both photographs, side by side. They share an aspect exactly, so equal
     columns come out level, and the pair carries what one alone does not: two
     players and a board in the first, a hand being read in the second. -->

<figure>
  <div class="media-pair">
    <img
      src="/media/nightmare-of-moonglade/playtest-01.webp"
      alt="Two players holding fans of printed cards over a paper game board on a pale table, with face-down cards stacked at the near edge."
      width="1800"
      height="1351"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/nightmare-of-moonglade/playtest-02.webp"
      alt="A hand of three printed cards held over the paper board, with an opponent's hand of face-down cards behind it."
      width="1800"
      height="1351"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Balance came from the table, not from a spreadsheet.</figcaption>
</figure>

<!-- TODO(fact), before this can be published:

     1. Tools, so `stack` is not empty. The panels were laid out in something
        and the cards were composited in something.
     2. Whether the fan-work line in credits should be stronger. It is
        accurate as written; a publisher's fan content policy usually wants a
        specific form of words.

     MEDIA NOT USED, deliberately:

     The class-card development panels (`panel-5*`) are mostly card renders,
     which means mostly other people's artwork. The one part worth having is
     the advantage worksheet at the top of each, described in Section 03
     rather than shown; if it is ever wanted as a picture, crop the header
     strip alone and leave the cards out of frame.

     The quota scroll from `panel-7-final-outcome` is not used: it is a table
     of numbers set on Blizzard parchment, and the numbers are now a table in
     the page's own type. The card wall from the same panel is used, cropped
     off the title art and the QR block on either side of it.

     The preview video is in media-src and is not on the page: the demo link
     in the frontmatter already reaches the same footage on YouTube, and a
     local copy would ship several megabytes of Blizzard interface. -->
