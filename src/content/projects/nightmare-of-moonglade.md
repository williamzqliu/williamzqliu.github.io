---
title: "Nightmare of Moonglade"
year: 2021
dates: "Sep 2020 – Mar 2021"
blurb: "A fan-made Hearthstone expansion exploring game systems through 130 cards and four original mechanics."
tags: ["interactive"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "Game systems"
compact: true
draft: false
stack:
  - Excel
  - Adobe Photoshop
# No link in the head. The one that was there went to the demo recording, and
# Section 06 now holds every card it walks through, at a size they can be read
# at — sending a reader off the page to see the same 130 cards more slowly is
# the wrong offer. The recording is still named in Section 05, where the rest
# of what was published is.
links: {}
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
  tools:
    - Excel
    - Adobe Photoshop
  # `Roles` rather than `Team`, which is what one person on their own is. The
  # row still earns its place: without it the page cannot say which parts are
  # mine.
  teamLabel: Roles
  team:
    - group: Design
      people:
        - Zhuoqi Liu
  # Without the first three sentences a reader would assume the wrong half is
  # mine, because the wrong half is what fills every picture. The last two are
  # what Blizzard's own guidelines ask of fan work: non-commercial, no implied
  # relationship or endorsement, the trademark symbol on the mark's first
  # appearance here, and the credit line they publish for the marks used —
  # merged into one sentence because their Hearthstone and World of Warcraft
  # lines are the same sentence with different names in it.
  note: "Hearthstone®, its card frames, its interface and the Warcraft setting are Blizzard Entertainment's. Card artwork is a mix of Blizzard's own and Hearthstone-style pieces sourced from artstation.com. What I made is the mechanics, the card text, the class pairings and the numbers. This is unofficial, non-commercial fan work, not affiliated with, sponsored by or endorsed by Blizzard. Hearthstone, World of Warcraft and Warcraft are trademarks or registered trademarks of Blizzard Entertainment, Inc., in the U.S. and/or other countries."
  collapse: false
---

A fan-made expansion for Hearthstone, built in my final undergraduate year. The set is adapted from *World of Warcraft: Stormrage*, a 2010 novel in which Malfurion Stormrage falls asleep inside the Emerald Dream while the nightmare he went there to investigate spreads across the world.

## Three questions, four mechanics

I did not start from a mechanic looking for a theme. I wrote three questions about that story and made each one produce rules.

How do you refer to a sleeper waking at the worst possible moment? How do you make a player feel two camps at war? How do you show two factions that hate each other fighting on the same side?

The answers were Awaken, the Blessing and Nightmare cards, Dual Class Sidequests, and Partner. Each mechanic has a plot reason for existing, and none of them was designed first and justified afterwards.

<!-- One panel per question, in a row at every width including a phone. The
     three share an aspect exactly, so equal columns come out level with
     nothing cropped, and the argument of this section is that there are three
     of them: stacked, a reader meets them one screen at a time and the set
     stops being a set. -->

<div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
  <figure>
    <img
      src="/media/nightmare-of-moonglade/concept-01.webp"
      alt="Concept 1, headed Malfurion's Awakening. A scroll asks how to refer to Malfurion's awakening in a desperate situation through a symbolic mechanism, and four notes answer it: running out of operations stands for the crisis the nightmare has caused; give players extra operations; the extra space should let them turn the battle; the trigger should be as obvious as possible. A plate at the foot reads New Keyword, Awaken."
      width="1000"
      height="1551"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Malfurion's awakening</figcaption>
  </figure>

  <figure>
    <img
      src="/media/nightmare-of-moonglade/concept-02.webp"
      alt="Concept 2, headed Confrontation Between Justice And Evil. The scroll asks how to let players feel the fight between good and evil, and the notes answer it: divide ten classes into two opposing camps; design special cards with matching effects for each camp; use the game's existing Sidequest mechanic to show how the battle is going; keep sidequests on what the two classes share. Two plates at the foot read New Feature, Blessing and Nightmare Cards, and New Feature, Dual Class Sidequest."
      width="1000"
      height="1551"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Justice against evil</figcaption>
  </figure>

  <figure>
    <img
      src="/media/nightmare-of-moonglade/concept-03.webp"
      alt="Concept 3, headed Cooperative Combat. The scroll asks how to show the Horde and the Alliance uniting to defeat the Nightmare King, and the notes answer it: design matching cards that echo the Dual Class Sidequests; use one set of imagery for partners in battle; fold the game's one-on-one combat into the idea. Two plates at the foot read New Keyword, Partner, and New Feature, Books of Experience."
      width="1000"
      height="1551"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Fighting on the same side</figcaption>
  </figure>
</div>

## A keyword made out of a button

Hearthstone's End Turn button turns green when the game has worked out that you have nothing left worth doing. Every player reads that signal without thinking about it, and no card had ever made it mean anything.

Awaken fires the first time the button turns green in a turn. A minion or weapon carrying the keyword hands something back at the moment you have run out, which is the novel's premise stated as a rule: the sleeper wakes when the situation is worst.

The trigger had to be obvious without a tutorial, and it already was. The interface had been telling players they were out of options for years.

<!-- Prose width: the four states are one diagram read left to right, and at
     the full article column the button glyphs blow up to a size the interface
     never shows them at. -->

<figure data-width="prose">
  <img
    src="/media/nightmare-of-moonglade/awaken.webp"
    alt="Under a banner reading Awaken, four states of the End Turn button in a row. Orange while operations remain; green the first time none do; a cyan glow while Awaken cards resolve and hand back further operations; green again once those are spent."
    width="2000"
    height="887"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The button already carried the state. Awaken gave it to the rules.</figcaption>
</figure>

## Turning two sides into card text

The other three mechanics work the same material: ten classes split into two camps, and inside them five partner pairs. Each one puts that structure somewhere a player has to read it.

**Blessing and Nightmare cards.** Every class got one minion whose Battlecry shuffles three copies of a spell into your deck, and that spell casts itself the moment it is drawn. The six Justice classes shuffle a Blessing, the four Evil classes shuffle a Nightmare. Same shape on both sides of the split and opposite effect: Blessed Paladin sends in Silver Hand Recruits, Demon Hunter's Nightmare burns the weakest enemy and hands your hero the attack.

**Dual Class Sidequest.** Sidequest already existed in Hearthstone. What was new was giving it to the pairs and writing each one out of what the two classes have in common. Hunter and Rogue both play cheap Secrets, so Into Moonglade asks for two Secrets and equips a bow. Warrior and Druid both lean on Taunt, so Three's a Crowd asks for three Taunt minions and gives them back at the start of your next turn.

**Partner.** The three Justice pairs each got a Book, and the keyword is what the Books are for: each one Discovers a spell from your partner class and does more when the partner condition is met. The Book of Chaos Discovers one spell and gives Armor equal to its cost, or Discovers two instead with Partner active.

<!-- The three mechanics in one row at every width, in the order the
     paragraphs above take them. They share an aspect exactly, so equal
     columns come out level with nothing cropped, and the point of the block
     is that the three are one answer to the same structure: a column each
     makes them three separate exhibits. The card text inside them is for the
     lightbox, not for the row. -->

<div class="media-pair" style="--pair-split: repeat(3, minmax(0, 1fr))">
  <figure>
    <img
      src="/media/nightmare-of-moonglade/blessing-and-nightmare.webp"
      alt="Under a banner reading Blessing and Nightmare Cards, two pairs of cards. Blessed Paladin, whose Battlecry shuffles three Blessings of Holiness into your deck, stands beside that Holy spell, which casts when drawn and summons two Silver Hand Recruits with a buff. Demon Hunter's Nightmare, whose Battlecry shuffles three Fallen Nightmares, stands beside that Fel spell, which casts when drawn, damages the lowest-health enemy and gives your hero attack."
      width="1800"
      height="1125"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Blessing and Nightmare cards</figcaption>
  </figure>

  <figure>
    <img
      src="/media/nightmare-of-moonglade/sidequest.webp"
      alt="Under a banner reading Dual Class Sidequest, three cards. Grace of Lake Elune'ara: Discover three cards, then deal 2 damage to all enemies. Into Moonglade: play two Secrets, then equip a 3/2 Eaglehorn Bow. Three's a Crowd: summon three Taunt minions, then resummon them at the start of your next turn."
      width="1800"
      height="1125"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Dual Class Sidequest</figcaption>
  </figure>

  <figure>
    <img
      src="/media/nightmare-of-moonglade/partner.webp"
      alt="Under a banner reading Partner, the three Books of Experience. Book of Awakening Discovers a spell that targets minions from your partner class, and costs nothing with Partner active. Book of Chaos Discovers a spell from the partner class and gives Armor equal to its cost, or Discovers two with Partner. Book of Nightmares Discovers a spell from a different spell school, recasting it if it came from the partner class and copying it with Partner."
      width="1800"
      height="1125"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Partner</figcaption>
  </figure>
</div>

## Building the set

Ten classes split into a Justice camp and an Evil camp, and inside them into five partner pairs: Druid with Warrior, Paladin with Priest, Mage with Shaman, Hunter with Rogue, Warlock with Demon Hunter.

Each pair got a worksheet before it got cards. One column of what each class is already good at, one column of what the two share, and the dual-class cards designed into the overlap rather than invented separately.

Every card then had to fit a quota. Nothing was included because it was a good idea on its own; a card existed because a slot existed and something had to be right for it.

<table data-width="prose">
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

<!-- The worksheets themselves are not on the page: each panel is mostly card
     renders, which means mostly other people's artwork, and the part worth
     having is the header strip at the top of it. It is set here in the page's
     own type instead, which also lets it be read rather than squinted at.
     Ends its section, which is where a disclosure belongs. -->

<details>
<summary>What each pair was built around</summary>

**Warrior and Druid, Justice.** Shared ground: Rush, Taunt, Armor and hero attack. Warrior takes the initiative in minion trades through weapons and Rush; Druid gets Choose One cards that keep a fast deck flexible. The dual-class cards run an old Druid mechanic back through Warrior's armour conversion.

**Paladin and Priest, Justice.** Shared ground: Holy spells, ground minions and spells that target minions. Paladin gets cards that pay off Silver Hand Recruits; Priest gets control of the board out of zero-cost cards and cost reduction. The pair's cards complete quests and cut costs through spells that target.

**Mage and Shaman, Justice.** Shared ground: Elementals, spell damage, Discover and mixed spell schools. Mage gets frost cards with a streak of randomness around its Secrets; Shaman gets nature and nerve, in cards deliberately over-statted. The pair's cards pay you for using Discover.

**Hunter and Rogue, Evil.** Shared ground: two-cost Secrets, crowd control and a weapon worth equipping. Hunter was the excuse to bring Spell Hunter back after a single expansion; Rogue got cheap cards and the Combo cards that make them worth playing. The pair's cards hand Spell Hunter its Secrets and Rogue its flexibility.

**Warlock and Demon Hunter, Evil.** Shared ground: Lifesteal, card exchanges and disruption on the board. Warlock buys an early advantage by trading cards away and closes with something large; Demon Hunter keeps Outcast cards coming and the pressure on. The pair's cards turn both classes' drawbacks into the payoff.

**Neutral.** Twenty cards for the figures the novel turns on, with effects to match: Ysera, Alexstrasza, Remulos and Teldrassil the World Tree take four of the five legendary slots.

</details>

## The table, then the forums

Then I printed the set and played it. The balance came out of watching which cards got picked, which never left a hand, and which ended a game too early, and moving the costs and stats until that stopped happening.

I also put the set up as images and text on bilibili and on the NGA Hearthstone forum, and revised it over several rounds on what people there sent back. The [card-by-card walkthrough](https://www.youtube.com/watch?v=lT1nN2Lxk-s) is still on YouTube.

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

## The full set

<!-- Two filters, the two the game's own collection is filtered by: a class and
     a mana cost. A dual-class card answers to both of its classes, which is
     how the game treats it, so picking Druid brings the six Druid and Warrior
     cards with it. Neutral is a class in the list because it is a column in
     the quota above.

     Reset clears both at once, and only exists while there is something to
     clear. It is the phone's control: a wide screen can drop a cost by
     pressing the lit chip again and a class by picking `All classes`, both of
     which are on screen already, while on a phone the way back is two menus
     deep.

     Cost is here twice, and one of the two is always hidden: eleven chips in a
     row are a scale you can read at a glance on a wide screen, and on a phone
     they are the widest thing in the article. Below 640px the chips give way to
     a second menu whose closed state says `Any cost`. Same state either way —
     the script writes to both.

     Buttons rather than links: these filter a block on the page and are not a
     place anyone should be able to arrive at, so they stay out of the URL. The
     script is in the page that renders the article, next to the table of
     contents, and with it off every card stays visible, the menu stays shut
     and the controls do nothing. -->

<!-- The class control is a menu rather than a `select`, because a native
     dropdown's panel is drawn by the operating system and cannot be animated.
     The trigger names itself from the label and from its own value, so a
     screen reader reads `Class, All classes` rather than one half of it.
     No blank line anywhere inside the block below: a blank line closes a
     markdown HTML block, and the indented lines after it come out as a code
     listing. -->

<div class="card-picker">
  <div class="card-picker__group">
    <span class="vh" id="card-class-label">Class</span>
    <div class="card-picker__menu">
      <button type="button" class="card-picker__trigger" id="card-class-trigger" data-cards-menu="class" aria-labelledby="card-class-label card-class-trigger" aria-expanded="false">All classes</button>
      <div class="card-picker__list" data-cards-list hidden>
        <button type="button" class="card-picker__option" data-cards-value="all" aria-pressed="true">All classes</button>
        <button type="button" class="card-picker__option" data-cards-value="druid" aria-pressed="false">Druid</button>
        <button type="button" class="card-picker__option" data-cards-value="warrior" aria-pressed="false">Warrior</button>
        <button type="button" class="card-picker__option" data-cards-value="paladin" aria-pressed="false">Paladin</button>
        <button type="button" class="card-picker__option" data-cards-value="priest" aria-pressed="false">Priest</button>
        <button type="button" class="card-picker__option" data-cards-value="mage" aria-pressed="false">Mage</button>
        <button type="button" class="card-picker__option" data-cards-value="shaman" aria-pressed="false">Shaman</button>
        <button type="button" class="card-picker__option" data-cards-value="hunter" aria-pressed="false">Hunter</button>
        <button type="button" class="card-picker__option" data-cards-value="rogue" aria-pressed="false">Rogue</button>
        <button type="button" class="card-picker__option" data-cards-value="warlock" aria-pressed="false">Warlock</button>
        <button type="button" class="card-picker__option" data-cards-value="demon-hunter" aria-pressed="false">Demon Hunter</button>
        <button type="button" class="card-picker__option" data-cards-value="neutral" aria-pressed="false">Neutral</button>
      </div>
    </div>
  </div>
  <div class="card-picker__group card-picker__group--cost" role="group" aria-label="Mana cost">
    <span class="card-picker__label">Cost</span>
    <button type="button" class="card-picker__chip" data-cards-cost="all" aria-pressed="true">Any</button>
    <button type="button" class="card-picker__chip" data-cards-cost="0" aria-pressed="false">0</button>
    <button type="button" class="card-picker__chip" data-cards-cost="1" aria-pressed="false">1</button>
    <button type="button" class="card-picker__chip" data-cards-cost="2" aria-pressed="false">2</button>
    <button type="button" class="card-picker__chip" data-cards-cost="3" aria-pressed="false">3</button>
    <button type="button" class="card-picker__chip" data-cards-cost="4" aria-pressed="false">4</button>
    <button type="button" class="card-picker__chip" data-cards-cost="5" aria-pressed="false">5</button>
    <button type="button" class="card-picker__chip" data-cards-cost="6" aria-pressed="false">6</button>
    <button type="button" class="card-picker__chip" data-cards-cost="7" aria-pressed="false">7</button>
    <button type="button" class="card-picker__chip" data-cards-cost="8" aria-pressed="false">8</button>
    <button type="button" class="card-picker__chip" data-cards-cost="9" aria-pressed="false">9</button>
    <button type="button" class="card-picker__chip" data-cards-cost="10" aria-pressed="false">10</button>
  </div>
  <div class="card-picker__group card-picker__group--costmenu">
    <span class="vh" id="card-cost-label">Cost</span>
    <div class="card-picker__menu">
      <button type="button" class="card-picker__trigger" id="card-cost-trigger" data-cards-menu="cost" aria-labelledby="card-cost-label card-cost-trigger" aria-expanded="false">Any cost</button>
      <div class="card-picker__list" data-cards-list hidden>
        <button type="button" class="card-picker__option" data-cards-cost="all" aria-pressed="true">Any cost</button>
        <button type="button" class="card-picker__option" data-cards-cost="0" aria-pressed="false">Cost 0</button>
        <button type="button" class="card-picker__option" data-cards-cost="1" aria-pressed="false">Cost 1</button>
        <button type="button" class="card-picker__option" data-cards-cost="2" aria-pressed="false">Cost 2</button>
        <button type="button" class="card-picker__option" data-cards-cost="3" aria-pressed="false">Cost 3</button>
        <button type="button" class="card-picker__option" data-cards-cost="4" aria-pressed="false">Cost 4</button>
        <button type="button" class="card-picker__option" data-cards-cost="5" aria-pressed="false">Cost 5</button>
        <button type="button" class="card-picker__option" data-cards-cost="6" aria-pressed="false">Cost 6</button>
        <button type="button" class="card-picker__option" data-cards-cost="7" aria-pressed="false">Cost 7</button>
        <button type="button" class="card-picker__option" data-cards-cost="8" aria-pressed="false">Cost 8</button>
        <button type="button" class="card-picker__option" data-cards-cost="9" aria-pressed="false">Cost 9</button>
        <button type="button" class="card-picker__option" data-cards-cost="10" aria-pressed="false">Cost 10</button>
      </div>
    </div>
  </div>
  <button type="button" class="card-picker__reset" data-cards-reset hidden>Reset</button>
</div>

<!-- A section of its own, and the last one, because it is the only block on
     the page a reader spends time in rather than passes: a section that ended
     in it would put the credits immediately after a hundred and thirty cards.

     A rail rather than the overlapping wall the poster used. On the poster the
     cards cover each other and only the front of each stack can be read,
     which is the one thing a card wants.

     Cost first, then the class order Section 04 pairs them in, then hero card
     before minion before spell before weapon. Fixed height and natural
     widths: a spell frame is wider than a minion frame, and letterboxing one
     to match the other would crop a card to make a grid.

     The line under it is the rail's position, drawn in the same 2px accent
     line the header uses for reading progress. It replaces the browser's
     scrollbar rather than sitting next to it: one indicator, and one that
     belongs to this page. Draggable, because a mouse with no wheel had the
     scrollbar to pull; `aria-hidden` because the rail itself is a focus stop
     and arrow keys already move it. -->

<figure>
  <div class="card-rail" tabindex="0" role="group" aria-label="The cards of the expansion, by mana cost">
    <img src="/media/nightmare-of-moonglade/cards/priest/astrological-healing.webp" data-class="priest" data-cost="0" alt="Astrological Healing, a 0-cost Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/road-to-awakening.webp" data-class="hunter" data-cost="0" alt="Road to Awakening, a 0-cost Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/descending.webp" data-class="rogue" data-cost="0" alt="Descending, a 0-cost Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/blessed-warrior.webp" data-class="warrior" data-cost="1" alt="Blessed Warrior, a 1-cost Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/token-blessing-of-courage.webp" data-class="warrior" data-cost="1" data-token alt="Blessings of Courage, the spell Blessed Warrior shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/desperate-trial.webp" data-class="paladin" data-cost="1" alt="Desperate Trial, a 1-cost Paladin spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/book-of-awakening.webp" data-class="paladin priest" data-cost="1" alt="Book of Awakening, a 1-cost Paladin and Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/divine-infusion.webp" data-class="paladin priest" data-cost="1" alt="Divine Infusion, a 1-cost Paladin and Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/dream-of-dragons.webp" data-class="paladin priest" data-cost="1" alt="Dream of Dragons, a 1-cost Paladin and Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/nightmare-elemental.webp" data-class="shaman" data-cost="1" alt="Nightmare Elemental, a 1-cost Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/grace-of-lake-eluneara.webp" data-class="mage shaman" data-cost="1" alt="Grace of Lake Elune’ara, a 1-cost Mage and Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/darkshore-captain.webp" data-class="rogue" data-cost="1" alt="Darkshore Captain, a 1-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/sharp-razor.webp" data-class="rogue" data-cost="1" alt="Sharp Razor, a 1-cost Rogue weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/into-moonglade.webp" data-class="hunter rogue" data-cost="1" alt="Into Moonglade, a 1-cost Hunter and Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/confuse-healbot.webp" data-class="warlock" data-cost="1" alt="Confuse Healbot, a 1-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/dead-silence.webp" data-class="warlock demon-hunter" data-cost="1" alt="Dead Silence, a 1-cost Warlock and Demon Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/evil-intake.webp" data-class="warlock demon-hunter" data-cost="1" alt="Evil Intake, a 1-cost Warlock and Demon Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/whisper-of-the-forest.webp" data-class="druid" data-cost="2" alt="Whisper of the Forest, a 2-cost Druid spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/scythe-of-luna.webp" data-class="druid" data-cost="2" alt="Scythe of Luna, a 2-cost Druid weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/resisting-the-nightmare.webp" data-class="warrior" data-cost="2" alt="Resisting the Nightmare, a 2-cost Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/book-of-chaos.webp" data-class="druid warrior" data-cost="2" alt="Book of Chaos, a 2-cost Druid and Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/threes-a-crowd.webp" data-class="druid warrior" data-cost="2" alt="Three’s a Crowd, a 2-cost Druid and Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/blessed-paladin.webp" data-class="paladin" data-cost="2" alt="Blessed Paladin, a 2-cost Paladin minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/token-blessing-of-holiness.webp" data-class="paladin" data-cost="2" data-token alt="Blessing of Holiness, the spell Blessed Paladin shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/dream-collapse.webp" data-class="paladin priest" data-cost="2" alt="Dream Collapse, a 2-cost Paladin and Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/blessed-mage.webp" data-class="mage" data-cost="2" alt="Blessed Mage, a 2-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/token-blessing-of-moonrune.webp" data-class="mage" data-cost="2" data-token alt="Blessing of Moonrune, the spell Blessed Mage shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/blessed-shaman.webp" data-class="shaman" data-cost="2" alt="Blessed Shaman, a 2-cost Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/token-blessing-of-demigod.webp" data-class="shaman" data-cost="2" data-token alt="Blessing of Demigod, the spell Blessed Shaman shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/fire-of-the-mist.webp" data-class="mage shaman" data-cost="2" alt="Fire of the Mist, a 2-cost Mage and Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/nightmare-anomaly.webp" data-class="hunter" data-cost="2" alt="Nightmare Anomaly, a 2-cost Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/spirit-of-the-devil.webp" data-class="hunter" data-cost="2" alt="Spirit of the Devil, a 2-cost Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/void-manager.webp" data-class="rogue" data-cost="2" alt="Void Manager, a 2-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/escaping.webp" data-class="rogue" data-cost="2" alt="Escaping, a 2-cost Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/corrupted-swamp.webp" data-class="hunter rogue" data-cost="2" alt="Corrupted Swamp, a 2-cost Hunter and Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/crystal-trap.webp" data-class="hunter rogue" data-cost="2" alt="Crystal Trap, a 2-cost Hunter and Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/spiritual-withdrawal.webp" data-class="hunter rogue" data-cost="2" alt="Spiritual Withdrawal, a 2-cost Hunter and Rogue spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/phalanx-blade.webp" data-class="hunter rogue" data-cost="2" alt="Phalanx Blade, a 2-cost Hunter and Rogue weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/demon-hunters-nightmare.webp" data-class="demon-hunter" data-cost="2" alt="Demon Hunter’s Nightmare, a 2-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/token-fallen-nightmare.webp" data-class="demon-hunter" data-cost="2" data-token alt="Fallen Nightmare, the spell Demon Hunter’s Nightmare shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/doomsday-ranger.webp" data-class="demon-hunter" data-cost="2" alt="Doomsday Ranger, a 2-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/fracture-watcher.webp" data-class="demon-hunter" data-cost="2" alt="Fracture Watcher, a 2-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/battle-royale.webp" data-class="demon-hunter" data-cost="2" alt="Battle Royale, a 2-cost Demon Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/homicidal-ideation.webp" data-class="demon-hunter" data-cost="2" alt="Homicidal Ideation, a 2-cost Demon Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/callerfin.webp" data-class="neutral" data-cost="2" alt="Callerfin, a 2-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/forestmist-huntress.webp" data-class="neutral" data-cost="2" alt="Forestmist Huntress, a 2-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/reincarnated-effigy.webp" data-class="neutral" data-cost="2" alt="Reincarnated Effigy, a 2-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/blessed-druid.webp" data-class="druid" data-cost="3" alt="Blessed Druid, a 3-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/token-blessing-of-ancient.webp" data-class="druid" data-cost="3" data-token alt="Blessing of Ancient, the spell Blessed Druid shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/furbolg-timbermaw.webp" data-class="druid" data-cost="3" alt="Furbolg Timbermaw, a 3-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/greedy-scavenger.webp" data-class="druid" data-cost="3" alt="Greedy Scavenger, a 3-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/tauren-druid.webp" data-class="druid" data-cost="3" alt="Tauren Druid, a 3-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/axe-of-broxigar.webp" data-class="warrior" data-cost="3" alt="Axe of Broxigar, a 3-cost Warrior weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/unawakened-dream.webp" data-class="druid warrior" data-cost="3" alt="Unawakened Dream, a 3-cost Druid and Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/lucan-foxblood.webp" data-class="paladin" data-cost="3" alt="Lucan Foxblood, a 3-cost Paladin minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/condensed-shield.webp" data-class="paladin" data-cost="3" alt="Condensed Shield, a 3-cost Paladin spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/blessed-priest.webp" data-class="priest" data-cost="3" alt="Blessed Priest, a 3-cost Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/token-blessing-of-dragon.webp" data-class="priest" data-cost="3" data-token alt="Blessing of Dragon, the spell Blessed Priest shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/shadow-of-tyrande.webp" data-class="priest" data-cost="3" alt="Shadow of Tyrande, a 3-cost Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/advanced-conjurer.webp" data-class="mage" data-cost="3" alt="Advanced Conjurer, a 3-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/holysword-arcanist.webp" data-class="mage" data-cost="3" alt="Holysword Arcanist, a 3-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/curse-totem.webp" data-class="mage shaman" data-cost="3" alt="Curse Totem, a 3-cost Mage and Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/book-of-nightmares.webp" data-class="mage shaman" data-cost="3" alt="Book of Nightmares, a 3-cost Mage and Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/warlocks-nightmare.webp" data-class="warlock" data-cost="3" alt="Warlock’s Nightmare, a 3-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/token-spiritual-nightmare.webp" data-class="warlock" data-cost="3" data-token alt="Spiritual Nightmare, the spell Warlock’s Nightmare shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/imminent-evil-plan.webp" data-class="warlock" data-cost="3" alt="Imminent Evil Plan, a 3-cost Warlock spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/mist-reaper.webp" data-class="demon-hunter" data-cost="3" alt="Mist Reaper, a 3-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/acolyte-of-souls.webp" data-class="warlock demon-hunter" data-cost="3" alt="Acolyte of Souls, a 3-cost Warlock and Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/sinking-hand.webp" data-class="warlock demon-hunter" data-cost="3" alt="Sinking Hand, a 3-cost Warlock and Demon Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/beachcomber.webp" data-class="neutral" data-cost="3" alt="Beachcomber, a 3-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/jungle-explorer.webp" data-class="neutral" data-cost="3" alt="Jungle Explorer, a 3-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/broll-bearmantle.webp" data-class="druid" data-cost="4" alt="Broll Bearmantle, a 4-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/kobold-conqueror.webp" data-class="warrior" data-cost="4" alt="Kobold Conqueror, a 4-cost Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/enemy-at-the-gates.webp" data-class="warrior" data-cost="4" alt="Enemy at the Gates, a 4-cost Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/forest-defender.webp" data-class="druid warrior" data-cost="4" alt="Forest Defender, a 4-cost Druid and Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/holy-ambush.webp" data-class="paladin" data-cost="4" alt="Holy Ambush, a 4-cost Paladin minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/hymn-to-valor.webp" data-class="paladin" data-cost="4" alt="Hymn to Valor, a 4-cost Paladin spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/magic-angler.webp" data-class="priest" data-cost="4" alt="Magic Angler, a 4-cost Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/nightmare-purifier.webp" data-class="priest" data-cost="4" alt="Nightmare Purifier, a 4-cost Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/frozen-arakkoa.webp" data-class="mage" data-cost="4" alt="Frozen Arakkoa, a 4-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/chopping-thornfin.webp" data-class="shaman" data-cost="4" alt="Chopping Thornfin, a 4-cost Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/lightning-strike.webp" data-class="shaman" data-cost="4" alt="Lightning Strike, a 4-cost Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/shattered-axe.webp" data-class="shaman" data-cost="4" alt="Shattered Axe, a 4-cost Shaman weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/dream-reappears.webp" data-class="mage shaman" data-cost="4" alt="Dream Reappears, a 4-cost Mage and Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/hunters-nightmare.webp" data-class="hunter" data-cost="4" alt="Hunter’s Nightmare, a 4-cost Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/token-emerald-nightmare.webp" data-class="hunter" data-cost="4" data-token alt="Emerald Nightmare, the spell Hunter’s Nightmare shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/shadowblade-panther.webp" data-class="hunter" data-cost="4" alt="Shadowblade Panther, a 4-cost Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/rouges-nightmare.webp" data-class="rogue" data-cost="4" alt="Rouge’s Nightmare, a 4-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/token-slumbering-nightmare.webp" data-class="rogue" data-cost="4" data-token alt="Slumbering Nightmare, the spell Rouge’s Nightmare shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter-rogue/rokhan-the-shadowhunter.webp" data-class="hunter rogue" data-cost="4" alt="Rokhan the Shadowhunter, a 4-cost Hunter and Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/rift-berserker.webp" data-class="warlock" data-cost="4" alt="Rift Berserker, a 4-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/blood-withered.webp" data-class="warlock" data-cost="4" alt="Blood Withered, a 4-cost Warlock spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/fandral-the-fallen.webp" data-class="demon-hunter" data-cost="4" alt="Fandral the Fallen, a 4-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/boasting-hatter.webp" data-class="neutral" data-cost="4" alt="Boasting Hatter, a 4-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/dreamburning-dwarf.webp" data-class="neutral" data-cost="4" alt="Dreamburning Dwarf, a 4-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/volcano-rager.webp" data-class="neutral" data-cost="4" alt="Volcano Rager, a 4-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/woodland-creeper.webp" data-class="neutral" data-cost="4" alt="Woodland Creeper, a 4-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/naralex.webp" data-class="druid" data-cost="5" alt="Naralex, a 5-cost Druid minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid/token-the-power-of-truth.webp" data-class="druid" data-cost="5" data-token alt="The Power of Truth, the spell Naralex adds to your hand." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/dwarf-warrior.webp" data-class="warrior" data-cost="5" alt="Dwarf Warrior, a 5-cost Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/thora-saurfang.webp" data-class="warrior" data-cost="5" alt="Thora Saurfang, a 5-cost Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/sword-of-shalamayne.webp" data-class="paladin" data-cost="5" alt="Sword of Shalamayne, a 5-cost Paladin weapon." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/elune-the-goddess.webp" data-class="priest" data-cost="5" alt="Elune the Goddess, a 5-cost Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/the-nightmare-is-coming.webp" data-class="priest" data-cost="5" alt="The Nightmare Is Coming, a 5-cost Priest spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/shandris-feathermoon.webp" data-class="paladin priest" data-cost="5" alt="Shandris Feathermoon, a 5-cost Paladin and Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/hero-power-psychic-protection.webp" data-class="paladin priest" data-cost="5" data-token alt="Psychic Protection, the Hero Power Shandris Feathermoon replaces yours with." width="538" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/korialstrasz.webp" data-class="mage" data-cost="5" alt="Korialstrasz, a 5-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/cracking-blast.webp" data-class="mage" data-cost="5" alt="Cracking Blast, a 5-cost Mage spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/sylvanas-the-darkqueen.webp" data-class="rogue" data-cost="5" alt="Sylvanas the Darkqueen, a 5-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/demon-hunter/lethon-the-fallen-dragon.webp" data-class="demon-hunter" data-cost="5" alt="Lethon the Fallen Dragon, a 5-cost Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/bushwhacker.webp" data-class="neutral" data-cost="5" alt="Bushwhacker, a 5-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/darkshore-deepdiver.webp" data-class="neutral" data-cost="5" alt="Darkshore Deepdiver, a 5-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/shadow-brontosaurus.webp" data-class="neutral" data-cost="5" alt="Shadow Brontosaurus, a 5-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/teldrassil-the-world-tree.webp" data-class="neutral" data-cost="5" alt="Teldrassil the World Tree, a 5-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/secret-rehearsal.webp" data-class="druid warrior" data-cost="6" alt="Secret Rehearsal, a 6-cost Druid and Warrior spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/priest/tyrande-the-moonpriest.webp" data-class="priest" data-cost="6" alt="Tyrande the Moonpriest, a 6-cost Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin-priest/tolvir-reforger.webp" data-class="paladin priest" data-cost="6" alt="Tol’vir Reforger, a 6-cost Paladin and Priest minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/chief-baine.webp" data-class="shaman" data-cost="6" alt="Chief Baine, a 6-cost Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/spore-vine.webp" data-class="shaman" data-cost="6" alt="Spore Vine, a 6-cost Shaman spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/zaldimar-the-trainer.webp" data-class="mage shaman" data-cost="6" alt="Zaldimar the Trainer, a 6-cost Mage and Shaman hero card." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage-shaman/hero-power-breaking-dreams.webp" data-class="mage shaman" data-cost="6" data-token alt="Breaking Dreams, the Hero Power that comes with Zaldimar the Trainer." width="538" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/xavius-the-nightmare-king.webp" data-class="warlock demon-hunter" data-cost="6" alt="Xavius the Nightmare King, a 6-cost Warlock and Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/time-transformer.webp" data-class="neutral" data-cost="6" alt="Time-Transformer, a 6-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/druid-warrior/hamuul-runetotem.webp" data-class="druid warrior" data-cost="7" alt="Hamuul Runetotem, a 7-cost Druid and Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/paladin/major-mattingly.webp" data-class="paladin" data-cost="7" alt="Major Mattingly, a 7-cost Paladin minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/eranikus.webp" data-class="mage" data-cost="7" alt="Eranikus, a 7-cost Mage minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/mage/spellbenders-will.webp" data-class="mage" data-cost="7" alt="Spellbender’s Will, a 7-cost Mage spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/zor-lonetree.webp" data-class="shaman" data-cost="7" alt="Zor Lonetree, a 7-cost Shaman minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/shaman/token-stable-evolution.webp" data-class="shaman" data-cost="7" data-token alt="Stable Evolution, the spell Zor Lonetree adds to your hand." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/goldrinn-the-wolfgod.webp" data-class="hunter" data-cost="7" alt="Goldrinn the Wolfgod, a 7-cost Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/nagaqueen-azshara.webp" data-class="warlock" data-cost="7" alt="Nagaqueen Azshara, a 7-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/nightmare-soulbinder.webp" data-class="warlock" data-cost="7" alt="Nightmare Soulbinder, a 7-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock-demon-hunter/bloodspell-dreadlord.webp" data-class="warlock demon-hunter" data-cost="7" alt="Bloodspell Dreadlord, a 7-cost Warlock and Demon Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/ogre-tyrannosaurus.webp" data-class="neutral" data-cost="7" alt="Ogre Tyrannosaurus, a 7-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/emissarys-hearthstone.webp" data-class="neutral" data-cost="7" alt="Emissary’s Hearthstone, a 7-cost neutral spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/emeriss-corrupted.webp" data-class="hunter" data-cost="8" alt="Emeriss, Corrupted, a 8-cost Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/ysondre-the-chaosmaker.webp" data-class="rogue" data-cost="8" alt="Ysondre the Chaosmaker, a 8-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/hunter/mass-combat.webp" data-class="hunter" data-cost="9" alt="Mass Combat, a 9-cost Hunter spell." width="560" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/alexstrasza-the-well-wisher.webp" data-class="neutral" data-cost="9" alt="Alexstrasza the Well-Wisher, a 9-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/remulos-the-guardian.webp" data-class="neutral" data-cost="9" alt="Remulos the Guardian, a 9-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/ysera-dreambound.webp" data-class="neutral" data-cost="9" alt="Ysera, Dreambound, a 9-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warrior/king-varian.webp" data-class="warrior" data-cost="10" alt="King Varian, a 10-cost Warrior minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/warlock/taerar-the-dread-dragon.webp" data-class="warlock" data-cost="10" alt="Taerar the Dread Dragon, a 10-cost Warlock minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/neutral/moltencrystal-giant.webp" data-class="neutral" data-cost="10" alt="Moltencrystal Giant, a 10-cost neutral minion." width="534" height="700" loading="lazy" decoding="async" />
  </div>
  <div class="card-rail__bar" data-cards-bar aria-hidden="true">
    <span class="card-rail__thumb"></span>
  </div>
</figure>

<!-- CLOSED:

     The fan-work notice. Blizzard has no single fan content policy page; the
     requirements are split between the Logo and Trademark Guidelines and the
     Legal FAQ, and there are four of them: personal, non-commercial use only;
     include the copyright and trademark notices as appropriate; never use a
     Blizzard Mark in a way that implies a relationship with, sponsorship by or
     endorsement from Blizzard; and use the trademark symbol on a mark's first
     appearance. The credits note now carries all four. The guidelines publish
     a credit line per mark, and the two this page uses read identically apart
     from the names, so they are one sentence here.

     Strictly, `first appearance` is the first in the whole page, which is the
     intro's `a fan-made expansion for Hearthstone`. The symbol sits in the
     notice instead: the site has no other symbols in running prose, and the
     notice is the part of the page that is a notice.

     https://www.blizzard.com/en-us/legal/8bcb0794-6641-4ce3-a573-8eb243bab342/blizzard-entertainment-logo-and-trademark-guidelines
     https://www.blizzard.com/en-us/legal/c1ae32ac-7ff9-4ac3-a03b-fc04b8697010/blizzard-legal-faq

     `tools` is in the order the work happened: the mechanics, the class
     pairings, the quota and every cost and stat were worked out in Excel, and
     Photoshop composited the cards and laid out the panels. The spreadsheet
     first, because on a systems project it is the one that did the designing.

     THE RAIL, and where its facts come from:

     All 130 cards, exported one per file from the card renders themselves, so
     the rail is the set rather than a recording of it. Cost and card type
     were read off each card; the counts check out against the quota in
     Section 04 — 80 single-class, 30 dual-class, 20 neutral — and against the
     export sizes, since minion, weapon and hero frames come out 454x595 and
     spell frames 536x670: 80 minions plus 6 weapons plus 1 hero card is the
     87 files at the first size, and 43 spells plus 12 generated tokens is the
     55 at the second.

     Zaldimar the Trainer is the set's only hero card, and its Hero Power is
     `hero-power-breaking-dreams`. Shandris Feathermoon is a minion that
     replaces the Hero Power with `hero-power-psychic-protection`.

     THE 12 TOKENS AND THE 2 HERO POWERS are in the rail too, each one beside
     the card that makes it, four fifths its height. They are made during a
     game rather than collected, so they are not part of the 130: they carry
     their parent's class and cost rather than their own, which keeps the cost
     buckets matching the quota and keeps a pair from being split three
     buckets apart. Two of them are also in the Blessing and Nightmare figure
     in Section 03.

     Their own printed costs, which the page does not use: Blessings of Courage
     1, Blessing of Ancient 3, The Power of Truth 0, Emerald Nightmare 3,
     Slumbering Nightmare 3, Blessing of Moonrune 2, Blessing of Demigod 1,
     Stable Evolution 1, Blessing of Holiness 2, Blessing of Dragon 2,
     Spiritual Nightmare 0, Fallen Nightmare 2, and 2 for both Hero Powers.

     One of them is named inconsistently on its own art: the Warrior token is
     `Blessings of Courage`, plural, where the other eleven are singular. The
     alt text reproduces what each card says.

     A card misspells its own name: `Rouge's Nightmare`, the Rogue Nightmare
     card, and the development panels carry the same slip in a heading. The
     rail's alt text reproduces what the card says.

     MEDIA NOT USED, deliberately:

     The class-card development panels (`panel-5*`) are mostly card renders,
     which means mostly other people's artwork. The worksheet header at the
     top of each is now the disclosure in Section 04.

     The quota scroll and the card wall from `panel-7-final-outcome` are both
     out: the numbers are a table in the page's own type, and the wall is the
     rail. The wall was on the page until the rail replaced it.

     The preview video is not embedded: Section 05 links the same footage on
     YouTube, and a local copy would ship seventy-odd megabytes of Blizzard
     interface. -->
