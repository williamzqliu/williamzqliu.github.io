---
title: "Nightmare of Moonglade"
year: 2021
dates: "Sep 2020 – Mar 2021"
blurb: "A 130-card fan-made *Hearthstone* expansion translating a Warcraft story into keywords, class pairings, and card rules."
tags: ["interactive"]
tracks: ["design"]
published: true
archive: true
archiveLabel: "Game systems"
draft: false
stack:
  - Excel
  - Adobe Photoshop
# No link in the head: the full set is on the page at a size the cards can be
# read at, and the walkthrough recording is linked from the playtesting
# section, where the rest of what was published is.
links: {}
cover:
  # The head takes the title art. It is Blizzard's logo over a painted forest
  # and the credits note says so in the open. `heroWhole` keeps its own 16:9
  # rather than cropping it to the head's 2.1:1 banner.
  #
  # No card to feed: ArchiveList renders title, label and year with no cover,
  # the curated list excludes archive, and the landing page shows only the
  # projects in SELECTED_ORDER (src/lib/projects.ts), which skips archive
  # projects, so `wide` is read by the head alone.
  wide: "/media/nightmare-of-moonglade/cover-wide.webp"
  heroWhole: true
  tone: "dark"
  alt: "Nightmare of Moonglade title artwork over a purple forest, with the Hearthstone logo and a lone figure on the path."
quickFacts:
  - label: "Role"
    value: "Game systems design and rules writing"
  - label: "Outcome"
    value: "130-card *Hearthstone* fan expansion"
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
  # Ownership first, then the fan-work notice: non-commercial, no implied
  # relationship or endorsement, the trademark symbol on the mark's first
  # appearance here, and the credit line for the marks used.
  note: "Hearthstone®, its card frames, its interface, and the Warcraft setting are Blizzard Entertainment’s. Card artwork is a mix of Blizzard’s own work and Hearthstone-style pieces sourced from ArtStation. My contribution covers the expansion’s rules, card text, class pairings, costs, and stats, including adaptations of existing game mechanics. This is unofficial, non-commercial fan work, not affiliated with, sponsored by, or endorsed by Blizzard. Hearthstone, World of Warcraft, and Warcraft are trademarks or registered trademarks of Blizzard Entertainment, Inc., in the U.S. and/or other countries."
  collapse: false
---

Nightmare of Moonglade is a fan-made expansion based on *World of Warcraft: Stormrage*. I designed the card rules, class pairings, costs, and stats, and built the 130-card set in Excel and Adobe Photoshop.

The setting, interface, and card frames are Blizzard Entertainment's; the illustrations are sourced artwork. Full attribution appears in the Credits.

## Awaken: using the End Turn signal

In the novel, Malfurion sleeps in the Emerald Dream while the nightmare spreads across the world. I wanted Awaken to connect his awakening to a moment when the player has run out of available actions.

Awaken triggers the first time the End Turn button turns green each turn. Cards with the keyword then provide an additional effect, potentially opening up more actions. I chose the existing button state as a visible cue, with the aim of making the trigger easy to recognize.

<figure data-width="prose">
  <img src="/media/nightmare-of-moonglade/awaken.webp" alt="Awaken concept diagram: available actions, the first green End Turn state, Awaken resolution, and the green state after additional actions are spent." width="2000" height="887" loading="lazy" decoding="async" />
  <figcaption>Awaken resolves at the first green state each turn, before any additional actions are spent.</figcaption>
</figure>

<details>
<summary>Story and mechanic concepts</summary>

I used three story situations to guide the rules: Malfurion's awakening, opposing camps, and temporary cooperation between factions. The concept boards connect those situations to Awaken, Blessing and Nightmare cards, dual-class Sidequests, and Partner.

<div class="media-pair" data-stack style="--pair-split: repeat(3, minmax(0, 1fr))">
  <figure>
    <img src="/media/nightmare-of-moonglade/concept-01.webp" alt="Concept board connecting Malfurion’s awakening to the Awaken keyword and additional player actions." width="1000" height="1551" loading="lazy" decoding="async" />
    <figcaption>Malfurion’s awakening informed the Awaken trigger.</figcaption>
  </figure>
  <figure>
    <img src="/media/nightmare-of-moonglade/concept-02.webp" alt="Concept board connecting opposing camps to Blessing and Nightmare cards and dual-class Sidequests." width="1000" height="1551" loading="lazy" decoding="async" />
    <figcaption>The opposing camps informed Blessing and Nightmare cards and dual-class Sidequests.</figcaption>
  </figure>
  <figure>
    <img src="/media/nightmare-of-moonglade/concept-03.webp" alt="Concept board connecting cooperation between factions to Partner and the Books of Experience." width="1000" height="1551" loading="lazy" decoding="async" />
    <figcaption>Cooperation between factions informed Partner and the Books of Experience.</figcaption>
  </figure>
</div>

</details>

## Class pairings and card design

I split the 10 classes into two story-based camps: six resisting the nightmare and four aligned with it. I mapped each class's strengths and shared mechanics in worksheets, then used that overlap and the card allocation to choose cards for five class pairs.

**Blessing and Nightmare cards.** Each class has a minion that shuffles three copies of a spell into the player's deck; the spell casts when drawn. The two card families represent the opposing camps. Blessed Paladin generates a Blessing that summons and buffs Silver Hand Recruits, while Demon Hunter's Nightmare generates a spell that damages an enemy and gives the hero additional attack.

**Partner.** Partner applies when the opponent is the class paired with the player's class. For example, a Druid activates Partner against a Warrior. I used that matchup condition to represent the story's temporary alliances. The Book of Chaos normally Discovers one spell from the partner class and grants Armor equal to its cost; Partner increases the Discover effect to two spells.

**Dual-class Sidequests.** I adapted *Hearthstone*'s existing Sidequests to the paired classes and based their objectives on shared mechanics. Into Moonglade uses the Hunter and Rogue overlap: play two Secrets to equip an Eaglehorn Bow. Three's a Crowd asks Warrior and Druid to summon three Taunt minions, then resummons them at the start of the next turn.

<figure data-width="prose">
  <img src="/media/nightmare-of-moonglade/sidequest.webp" alt="Three dual-class Sidequests. Into Moonglade rewards playing two Secrets with an Eaglehorn Bow; Three’s a Crowd resummons three Taunt minions at the start of the next turn." width="1800" height="1125" loading="lazy" decoding="async" />
  <figcaption>The quests use shared class mechanics: Secrets for Hunter and Rogue, and Taunt for Warrior and Druid.</figcaption>
</figure>

<details>
<summary>Class pairings and card allocation</summary>

**Warrior and Druid, Nightmare resistance.** Shared mechanics: Rush, Taunt, Armor, and hero attack. Warrior cards emphasize weapons and Rush; Druid cards use Choose One to support flexible play. Their dual-class cards combine Druid mechanics with Warrior's Armor conversion.

**Paladin and Priest, Nightmare resistance.** Shared mechanics: Holy spells and spells that target minions. Paladin cards support Silver Hand Recruits; Priest cards use zero-cost cards and cost reduction for board control. Their dual-class cards reward minion-targeting spells.

**Mage and Shaman, Nightmare resistance.** Shared mechanics: Elementals, spell damage, Discover, and mixed spell schools. Mage cards emphasize Frost and Secret-related randomness; Shaman cards emphasize Nature spells and higher stats for their cost. Their dual-class cards reward Discover.

**Hunter and Rogue, Nightmare aligned.** Shared mechanics: two-cost Secrets, crowd control, and weapons. Hunter cards support Spell Hunter, while Rogue cards emphasize cheap cards and Combo. Their dual-class cards support Secrets and flexible low-cost play.

**Warlock and Demon Hunter, Nightmare aligned.** Shared mechanics: Lifesteal, card exchanges, and board disruption. Warlock cards trade resources for an early advantage and larger finishers; Demon Hunter cards sustain pressure through Outcast. Their dual-class cards build on both classes' trade-offs.

**Neutral cards.** The 20 neutral cards include characters central to the novel. Ysera, Alexstrasza, Remulos, and Teldrassil the World Tree occupy four of the five Legendary slots.

**Card allocation**

<table>
  <thead>
    <tr><th scope="col">Group</th><th scope="col">Cards per unit</th><th scope="col">Total cards</th></tr>
  </thead>
  <tbody>
    <tr><td>Single-class</td><td>8 per class</td><td>80</td></tr>
    <tr><td>Dual-class</td><td>6 per pair</td><td>30</td></tr>
    <tr><td>Neutral</td><td>20 in total</td><td>20</td></tr>
  </tbody>
</table>

- Each class: two Legendary, two Epic, two Rare, and two Common cards.
- Each pair: one Legendary, one Epic, two Rare, and two Common cards.
- Neutral group: five Legendary, five Epic, five Rare, and five Common cards.

<figure>
  <img src="/media/nightmare-of-moonglade/blessing-and-nightmare.webp" alt="Blessing and Nightmare examples: Blessed Paladin and Demon Hunter’s Nightmare, each shown with its generated spell." width="1800" height="1125" loading="lazy" decoding="async" />
  <figcaption>Both families shuffle spells into the player’s deck and cast them when drawn.</figcaption>
</figure>

<figure>
  <img src="/media/nightmare-of-moonglade/partner.webp" alt="The three Books of Experience, showing their standard effects and additional Partner effects." width="1800" height="1125" loading="lazy" decoding="async" />
  <figcaption>The Books of Experience gain their Partner effects when the opponent is the paired class.</figcaption>
</figure>

</details>

## Playtesting and revisions

I printed the cards for paper playtests. I watched which cards were played, stayed in hand, or ended games unusually early, then adjusted costs and stats. I also published the set on Bilibili and the NGA *Hearthstone* forum, then revised card effects and wording in response to comments.

<figure>
  <div class="media-pair">
    <img src="/media/nightmare-of-moonglade/playtest-01.webp" alt="Two players holding printed cards over a paper game board." width="1800" height="1351" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/playtest-02.webp" alt="A hand of printed cards being read during a paper playtest." width="1800" height="1351" loading="lazy" decoding="async" />
  </div>
  <figcaption>Paper playtests used printed cards and a tabletop board.</figcaption>
</figure>

**Revising Enemy at the Gates**

<!-- Text beside the card at the paragraphs' width. The card is the gallery file
     with its transparent margin trimmed, so its top and its caption line up
     with the text; the gallery keeps the original. Stacked on a phone. -->
<div class="media-pair" data-stack style="--pair-split: minmax(0, 2.2fr) minmax(0, 1fr); max-width: var(--measure); font-size: var(--fs-copy); margin-top: var(--sp-16)">
  <div>
    <p style="margin-top: 0">Enemy at the Gates originally set up a weapon replacement for the next time the player’s weapon was destroyed. The effect could be set up before the player equipped a weapon. Feedback pointed out that this situation lacked a clear ability indicator.</p>
    <p>I attached the effect to the player’s weapon as a Deathrattle instead of keeping the deferred trigger. This gave up the ability to set up the effect before equipping a weapon. The March 31 update records the change, and the current card uses the Deathrattle wording.</p>
    <p>The update log documents the changes, not a measured improvement in comprehension or balance. The <a href="https://www.youtube.com/watch?v=lT1nN2Lxk-s">card-by-card walkthrough</a> remains available on YouTube.</p>
  </div>
  <figure>
    <img src="/media/nightmare-of-moonglade/enemy-at-the-gates-card.webp" alt="Enemy at the Gates, a Warrior spell that gives a weapon a Deathrattle to equip a random weapon from the deck." width="420" height="590" loading="lazy" decoding="async" />
    <figcaption>The revised card attaches the replacement effect to the weapon’s Deathrattle.</figcaption>
  </figure>
</div>

<details>
<summary>Selected revision notes</summary>

The log records updates labeled 3.26, 3.27, and 3.31, covering balance adjustments, card-text changes, and artwork updates.

<table>
  <thead>
    <tr><th scope="col">Update</th><th scope="col">Recorded changes</th></tr>
  </thead>
  <tbody>
    <tr><td>3.26</td><td>Balance adjustments to Emeriss, Corrupted and Sharp Razor; card-text and keyword-formatting edits.</td></tr>
    <tr><td>3.27</td><td>A balance adjustment to Axe of Broxigar and artwork updates.</td></tr>
    <tr><td>3.31</td><td>A balance adjustment to Remulos the Guardian; revisions to Enemy at the Gates, Nightmare cards, and Holysword Arcanist; an artwork update.</td></tr>
  </tbody>
</table>

**Responding to a lore suggestion**

A commenter questioned how several characters and weapons fit Warcraft lore and class assignments. In my reply, I explained that I prioritized the novel's characters and relaxed some class assignments where those choices strained the available Legendary slots.

I also explained why I had kept the Axe of Broxigar design: I considered the proposed chain of Deathrattles difficult to describe and too close to an existing card effect, and Saurfang's Legendary design was already established.

</details>

## The full set

Browse the 130-card set by class and mana cost. The gallery also includes 12 generated spells and two Hero Powers, shown beside their source cards and grouped under those cards' filters.

<!-- Filters by class and by mana cost. A dual-class card answers to both of
     its classes; generated spells and Hero Powers carry their source card's
     class and cost, not their own printed cost. Cost is a row of chips on a
     wide screen and a menu below 640px, both driven by the same script.
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

<!-- One rail of every card, cost first, then class, then hero card, minion,
     spell and weapon. Fixed height and natural widths. The bar under it is
     the rail position and replaces the browser scrollbar; it is `aria-hidden`
     because the rail itself is a focus stop and arrow keys already move it. -->

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
    <img src="/media/nightmare-of-moonglade/cards/rogue/rouges-nightmare.webp" data-class="rogue" data-cost="4" alt="Rogue’s Nightmare, a 4-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/token-slumbering-nightmare.webp" data-class="rogue" data-cost="4" data-token alt="Slumbering Nightmare, the spell Rogue’s Nightmare shuffles into your deck." width="560" height="700" loading="lazy" decoding="async" />
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
    <img src="/media/nightmare-of-moonglade/cards/hunter/emeriss-corrupted.webp" data-class="hunter" data-cost="8" alt="Emeriss, Corrupted, an 8-cost Hunter minion." width="534" height="700" loading="lazy" decoding="async" />
    <img src="/media/nightmare-of-moonglade/cards/rogue/ysondre-the-chaosmaker.webp" data-class="rogue" data-cost="8" alt="Ysondre the Chaosmaker, an 8-cost Rogue minion." width="534" height="700" loading="lazy" decoding="async" />
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
