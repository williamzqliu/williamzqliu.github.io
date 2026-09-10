---
title: Comgrand
year: 2023
dates: Mar 2023 – Nov 2023
blurb: A service ecosystem designed to help older adults connect, participate, and contribute in community life.
tags: [narrative]
tracks: [design]
featured: 9
stack: [Figma, Balsamiq, Blender, Service Design]
links: {}
cover:
  wide: /media/comgrand/cover-wide.webp
  tone: light
  alt: "One hand holding a phone that shows the Comgrand app, with a health score, reminders and a neighbourhood circle, while a younger hand and an older hand each hold one of the rings."
quickFacts:
  - label: "Role"
    value: "Designer & researcher"
  - label: "Outcome"
    value: "Service ecosystem, mobile app, and physical smart ring prototype"
---

## From assumptions to participation

Comgrand began with my grandmother, who lived independently. During the pandemic, I began
paying closer attention to how she navigated uncertainty and change. Even after
restrictions eased in December 2022, she stayed home for nearly another month because she
lacked a reliable way to understand what was happening outside. I initially read this as
resistance to change.

<!-- `--pair-split` in the pictures' own aspect ratios, 1.354 and 2.284, so
     two differently shaped photographs come out the same height without
     either being cropped. -->

<div class="media-pair" style="--pair-split: 1.354fr 2.284fr">
  <figure>
    <img
      src="/media/comgrand/grandmother-alone.webp"
      alt="My grandmother sitting alone on the sofa in a face mask, holding a pulse oximeter, with her phone on the table beside her."
      width="2400"
      height="1772"
      loading="lazy"
      decoding="async"
    />
    <figcaption>At home on her own.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/comgrand/grandmother-social.webp"
      alt="My grandmother playing cards on the floor with two of her grandchildren, laughing."
      width="2400"
      height="1051"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Playing cards with her grandchildren.</figcaption>
  </figure>
</div>

Later, I interviewed three older adults in Chongqing and compared their experiences with
secondary research on older adults living alone in urban China. The research shifted my
focus beyond everyday care.

> **Research gap**
>
> Meeting basic needs did not mean feeling socially connected or involved.
>
> The research pointed to needs around friendship, respect, self-worth, and opportunities
> to take part in community life.

That reframed the project. Instead of asking how older adults could adapt to technology, I
began asking how a community could create more meaningful ways for them to **connect,
participate, and contribute on their own terms**.

<details>
<summary>Research details</summary>

**Three perspectives.** I spoke with three community residents aged 71 to 78 whose living
situations and comfort with digital technology differed.

<ul class="process-steps">
  <li>
    <p class="process-steps__name">My grandmother</p>
    <p class="process-steps__num">78 years old</p>
    <p class="process-steps__note">Living alone, mostly basic phone use.</p>
  </li>

  <li>
    <p class="process-steps__name">Mrs. Wang</p>
    <p class="process-steps__num">74 years old</p>
    <p class="process-steps__note">Living with her spouse, confident with digital products.</p>
  </li>

  <li>
    <p class="process-steps__name">Uncle Zhang</p>
    <p class="process-steps__num">71 years old</p>
    <p class="process-steps__note">Living with family, comfortable with simple smartphone tasks.</p>
  </li>
</ul>

Digital confidence varied substantially even within this small group of older adults.

**What secondary research added.** Secondary research broadened what I had heard in the
interviews. Physical and financial independence did not necessarily resolve needs around
social connection, recognition, and participation.

<div class="stat-strip" data-grid>
  <div class="stat-strip__cell">
    <p class="stat-strip__value">84.5%</p>
    <p class="stat-strip__label">Wanted to gain respect</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">81.6%</p>
    <p class="stat-strip__label">Wanted peer friendships</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">71.4%</p>
    <p class="stat-strip__label">Wanted to integrate into society</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">68.0%</p>
    <p class="stat-strip__label">Wanted to realize their self-worth</p>
  </div>
</div>

<p class="stat-strip__source">Source: <em>Emotional needs of empty nesters in urban community and their countermeasures: Based on the investigation and analysis of three cities in Southern Jiangsu Province.</em></p>

**Framework.** I used the Active Aging framework to organize the research around health,
security, and participation. Participation became the area I chose to design around.

</details>


## Letting research change the concept

Reframing the problem around participation still left a practical question: **what should
the service actually help older adults do?**

To narrow the concept, I brought six possible directions into a co-design session with
older adults, a community social worker, and other residents. Their priorities came back
clearer than my initial concept: companionship first, then physical health, then having a
wider variety of things to do.

<!-- TODO media. Section 3 of the brief asks for one photograph from the 2023
     co-design session, or a tight crop of the prioritisation board. Nothing of
     the kind is in `media-src/comgrand/`, which holds only the cover and the two
     grandmother photographs, so this section publishes no figure rather than a
     path that does not resolve. Drop a co-design photo into that folder and it
     goes in here, above the ranking. -->

<table data-ranked>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Direction</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Socializing with friends</td><td>20</td></tr>
    <tr><td>2</td><td>Psychological counseling</td><td>19</td></tr>
    <tr><td>3</td><td>Empowerment activity</td><td>18</td></tr>
    <tr><td>4</td><td>Health monitoring</td><td>16</td></tr>
    <tr><td>5</td><td>Co-creation of community space</td><td>14</td></tr>
    <tr data-mark><td>6</td><td>Volunteer service</td><td>12</td></tr>
  </tbody>
</table>

> **Concept check**
>
> The direction closest to my original idea ranked last.
>
> Volunteer service sounded like a direct way to support contribution, but participants
> showed the least willingness to take part in it.

That made me separate **contribution from assigned service**. Wanting a more active role in
community life did not necessarily mean wanting formal volunteer work, and the session gave
me a reason to carry forward the directions people were more willing to engage with rather
than push my original concept into the service.

<details>
<summary>Decision details</summary>

**How I compared the directions.** I rated each of the six candidate directions against
five criteria: demand match, willingness to participate, satisfaction, scalability, and
novelty. The totals in the table are the sum of those five ratings. They were a way to
compare directions inside the project, not a measurement of what older adults want.

**What participants emphasized.** The community social worker, Ms. Xiao, made the point
that having company mattered to the older adults she worked with more than who the company
was. One of the older participants, Mrs. Wu, described long stretches of time on her own as
something she felt physically.

Companionship read as a more immediate and lower-barrier way in than the
contribution-oriented activities I had started from.

</details>

<!-- PARKED from the previous draft of this section. Not in the copy above and
     not published elsewhere on the page. Delete once these facts have a home or
     have been ruled out.

     1. Three figures on empty nesters living alone, carried in the old draft
        without a source: 98.4% can care for themselves, 89.9% are in good
        health, 90.1% are financially self-sufficient. The four figures now in
        Section 01 come from the Southern Jiangsu study and are attributed;
        these three are not, so they are held back until the source is found.

     2. The structure the old draft gave to the behaviour I had read as
        stubbornness. Internal: damaged self-esteem, fear of making mistakes, a
        widening gap between how older adults see themselves and how they are
        treated, and no vocabulary for describing what they actually need.
        External: gerontology researchers building products without attending to
        real needs, families providing informal support that is not enough, and
        community organisations whose intervention is limited and often
        impatient.
-->

## Building the service ecosystem

The result is three things that depend on each other, not an app with hardware
attached.

The community layer is physical. An elderly-oriented area gets renovated, with a
bulletin board and interactive fixtures, so that the incidental bench conversations
that already happen have somewhere to happen reliably.

The service layer is programming: health talks, skill workshops, and co-creation of
the community space, organised so elders can run sessions as well as attend them.

The digital layer is an app and a ring, syncing in both directions. The app has four
sections: Neighborhood for sharing and contact, Health for records and medication
reminders, Events for community activities, and Me for settings and the points
system. The ring carries NFC for payment and identity exchange, sensors for health
data, Bluetooth for sync, and an emergency trigger with a status light.

The points system exists to make participation pay. Attending and running activities
earns community points, and those points redeem against health services at the
community clinic. Without that loop, asking elders to contribute is asking them for
labour.

The system map traces material, information, and money across nine parties:
technology company, government, community office, community clinics, community
workers, volunteer neighbours, gerontology researchers, family relatives, and the
elders themselves. Mapping the money mattered. A service that no one can afford to
run is a concept, not a design.

## Connecting physical and digital touchpoints

I sketched a range of forms and took three forward. A ring rather than a band or a
watch, because it is the least intrusive thing to wear all day and because tapping
your hand against a reader is a more natural gesture for someone who does not want to
operate a screen.

The digital model is 1.9 by 2.3 by 0.6 centimetres, with a health sensor array, an
integrated motion sensor, an NFC and Bluetooth module, a pressable display, and a
solar element. The CMF system offers three options on each axis: Origin, Charcoal, and
Carbon for colour; titanium, tungsten carbide, and hypoallergenic resin for material;
CNC engraving, matte texture, and a soft touch finish.

## Testing with older adults

I built a physical prototype and had two elders wear it through the actual use cases:
identity verification, exchanging contacts with another wearer, oximetry, NFC
payment, event check-in, and triggering an emergency state.

Both of them found problems.

My grandmother said the gesture itself was easy with her fingers, but she was worried
about triggering it by accident. Mrs. Pan, her neighbour, said the band was too narrow
to sit comfortably on her finger, and that the display was not bright enough to read.

Neither problem is a detail. A wearable that can be triggered accidentally is a
wearable that produces false emergencies, which is worse than no emergency function
at all. And I had sized the ring for the form I wanted rather than for the range of
hands that would wear it.

## Looking back

The finding I did not design for is that adaptability to the ring varies a lot between
individuals, and that nearly everyone worried about losing it. A device that holds
your payment credentials, your identity, and your medical alerts is a device you
cannot afford to misplace, and I had not treated that as a design constraint. Hardware
comfort and device security are where this would go next, ahead of any new features.

What I would keep is the order of operations. The co-design session cut a function I
was attached to, and the wear test found two problems I would not have found by
looking at the model. Both of those happened because I put unfinished work in front of
the people it was for, early enough that the answer could still change what I built.

What I would change is the ambition. Nine months produced a complete service design
across three layers, and the ring is the only part that got physically tested. If I
were doing it again I would build less system and test more of it.
