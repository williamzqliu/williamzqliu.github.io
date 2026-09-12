---
title: Comgrand
year: 2023
dates: Mar 2023 – Nov 2023
blurb: A service ecosystem designed to help older adults connect, participate, and contribute in community life.
tags: [narrative]
tracks: [design]
published: true
featured: 9
# Tools, the way every other project's stack reads. Service design is a skill
# and lives in the credits.
stack:
  - Figma
  - Balsamiq
  - Blender
links: {}
cover:
  wide: /media/comgrand/cover-wide.webp
  tone: light
  alt: "One hand holding a phone that shows the Comgrand app, with a health score, reminders and a neighbourhood circle, while a younger hand and an older hand each hold one of the rings."
quickFacts:
  - label: "Role"
    value: "Designer & Researcher"
  - label: "Outcome"
    value: "Service ecosystem, mobile app, and physical smart ring prototype"
credits:
  skills:
    - Service design
    - User research
    - Co-design
    - Prototyping
  tools:
    - Figma
    - Balsamiq
    - Blender
  # Not `Team`: I did the project on my own, and Vince advised on how it is
  # presented here rather than on the work itself.
  teamLabel: Roles
  team:
    - group: Design and research
      people:
        - Zhuoqi Liu
    - group: Portfolio guidance
      people:
        - Vince Ye
  # Three rows in total, so there is nothing worth putting behind a control.
  collapse: false
---

## From assumptions to participation

Comgrand began with my grandmother, who lived alone. During the pandemic, I began
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
      data-nozoom
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
      data-nozoom
      alt="My grandmother playing cards on the floor with two of her grandchildren, laughing."
      width="2400"
      height="1051"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Playing cards with her grandchildren.</figcaption>
  </figure>
</div>

Later, I interviewed three older adults in her neighborhood and compared their experiences
with secondary research on older adults living alone in urban China. The research shifted my
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

That reframing raised a practical question: **what should the service actually help older
adults do?**

To narrow the concept, I brought six possible directions into a co-design session with
older adults, a community social worker, and other residents. Their priorities became
clearer: physical health came first, followed by companionship and a desire for more varied
activities.

<!-- Three frames of one session, so `--pair-split` carries the pictures' own
     aspect ratios, 0.73, 1.297 and 0.73. All three masters are 592px tall, so
     the ratios put them in a row at one height with nothing cropped. One
     caption, because it is one moment, and `data-abreast` so the row holds at
     every width: split across three screens they stop being one moment. -->

<figure>
  <div class="media-pair" data-abreast style="--pair-split: 0.73fr 1.297fr 0.73fr">
    <img
      src="/media/comgrand/codesign-01.webp"
      data-nozoom
      alt="Older residents seated in a circle in a community room, one of them speaking, with handwritten notes taped to the wall behind."
      width="432"
      height="592"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/comgrand/codesign-02.webp"
      data-nozoom
      alt="A wider view of the same circle: around ten older residents seated facing each other, several talking at once."
      width="768"
      height="592"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/media/comgrand/codesign-03.webp"
      data-nozoom
      alt="Someone standing in the middle of the circle speaking to the seated residents, with handwritten boards on the wall behind."
      width="432"
      height="592"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Co-designing service priorities with community participants.</figcaption>
</figure>

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
    <tr><td>6</td><td>Volunteer service</td><td>12</td></tr>
  </tbody>
</table>

> **Concept check**
>
> The direction closest to my original idea ranked last.
>
> Volunteer service sounded like a direct way to support contribution, but participants
> showed the least willingness to take part in it.

That made me separate **contribution from assigned service**. Wanting a more active role in
community life did not necessarily mean wanting formal volunteer work. The session showed
me which directions people were more willing to engage with, so I could move beyond my
original concept.

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

Companionship was an easier starting point than the contribution-oriented activities I
had begun with.

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

Because those priorities spanned social connection, health, and community life, I developed
them into a service ecosystem rather than a single product.

I structured Comgrand around **three interdependent layers**: community spaces that
supported everyday interaction, services and activities people could join or help lead, and
digital touchpoints that connected those experiences without replacing them.

<ul class="process-steps">
  <li>
    <p class="process-steps__name">Community space</p>
    <p class="process-steps__note">Shared spaces and bulletin boards supported informal interaction and made community activities easier to discover.</p>
  </li>

  <li>
    <p class="process-steps__name">Services and activities</p>
    <p class="process-steps__note">Health talks, skill-sharing, and workshops gave older adults ways to join or help lead.</p>
  </li>

  <li>
    <p class="process-steps__name">Digital support</p>
    <p class="process-steps__note">An app and smart ring connected identity, events, health information, and lightweight interactions.</p>
  </li>
</ul>

> **System decision**
>
> Not an app with hardware attached.
>
> The physical spaces, the services, and the digital touchpoints were designed to depend on
> one another.

Participation also had to be reciprocal. Older adults would earn community points by
joining or leading activities and redeem them for health services at the community clinic.
If people give the community their time or their knowledge, the system should return
something of value.

<ol class="process-steps">
  <li>
    <p class="process-steps__num">01</p>
    <p class="process-steps__name">Join or lead activities</p>
  </li>

  <li>
    <p class="process-steps__num">02</p>
    <p class="process-steps__name">Earn community points</p>
  </li>

  <li>
    <p class="process-steps__num">03</p>
    <p class="process-steps__name">Redeem health services</p>
  </li>
</ol>

A service like this depended on more than the older adults using it. I mapped the groups
and organizations involved, along with the flows of materials, information, and money, to
understand what the service needed to support the people using it.

<figure>
  <img
    src="/media/comgrand/system-map.webp"
    alt="The Comgrand system map. Nine groups are placed around the community elderly at the centre: technology company, government, community office, community clinics, community workers, volunteer neighbours, gerontology researchers, family relatives, and the device and application themselves. Solid, dashed and pink arrows carry material flow, information flow and fund flow between them, each labelled with what moves. A stakeholder map on the right sorts the same groups into partners, primary and secondary stakeholders."
    width="3200"
    height="1542"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The service ecosystem across nine participating groups and the resources exchanged between them.</figcaption>
</figure>

Mapping these relationships showed what running the service would take. Designing it also
meant asking who would provide each service, where information would move, and how value
could circulate through the system.

<details>
<summary>How the service works end to end</summary>

I used a service blueprint to trace what someone did at each stage, which touchpoint
carried it, and what had to happen frontstage and backstage behind it.

<figure>
  <img
    src="/media/comgrand/service-blueprint.webp"
    alt="The Comgrand service blueprint. Columns run left to right through preparation, treatment offline and online, event participation beforehand, in progress and afterwards, online socialization, and achievements. Rows below each stage list user behaviour, whether the app or the device is the touchpoint, the frontstage actions the service performs, and the backstage actions behind them."
    width="3200"
    height="1301"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Service blueprint: user behaviour at each stage, the touchpoint carrying it, and the frontstage and backstage actions behind it.</figcaption>
</figure>

</details>


## Connecting physical and digital touchpoints

With the ecosystem defined, I split the digital experience between an app for
information-rich tasks and a ring for quick, everyday interactions.

<ul class="process-steps" data-cols="2">
  <li>
    <p class="process-steps__name">Mobile app</p>
    <p class="process-steps__note">For browsing activities, viewing health information, managing community points, and other tasks that benefited from a larger screen.</p>
  </li>

  <li>
    <p class="process-steps__name">Smart ring</p>
    <p class="process-steps__note">For identity, check-in, payment, health sensing, and emergency interactions that needed to stay quick and lightweight.</p>
  </li>
</ul>

I explored several wearable forms before choosing a ring. I saw it as less intrusive for
all-day wear than a larger wrist device, while also making simple tap-based interactions
such as identity exchange, payment, and event check-in more immediate.

<!-- The exploration and what it resolved into, in the pictures' own aspect
     ratios, 1.491 and 1.219, so the sheet of sketches and the render come out
     the same height with neither cropped. -->

<div class="media-pair" style="--pair-split: 1.491fr 1.219fr">
  <figure>
    <img
      src="/media/comgrand/ring-sketches.webp"
      alt="Fifteen hand-drawn wearable concepts on a pale green ground: rings, open cuffs, clip-on forms and small screen-bearing bands, drawn from several angles. Three of them are circled."
      width="1932"
      height="1296"
      loading="lazy"
      decoding="async"
    />
    <figcaption>Exploring wearable forms before narrowing the concept to a ring.</figcaption>
  </figure>

  <figure>
    <img
      src="/media/comgrand/ring-product-render.webp"
      alt="A render of the ring in two finishes, annotated with the proposed components: health data sensor, electrode array, integrated dynamic sensor, NFC and Bluetooth, a pressable display and a solar module, with the digital model measured at 1.9 by 2.3 by 0.6 centimetres. A hand wearing a ring sits above."
      width="3120"
      height="2560"
      loading="lazy"
      decoding="async"
    />
    <figcaption>The digital model of the ring.</figcaption>
  </figure>
</div>

Rather than reproducing a smartphone on the hand, I developed the ring around a small set
of actions someone would carry out in passing. The concept combined NFC and Bluetooth
connectivity, health sensing, a pressable display, and an emergency trigger.

> **Interaction principle**
>
> Keep the wearable focused on short, contextual interactions.

The app carried the heavier information layer that the ring was not designed to handle.
Neighborhood supported local connection, Health surfaced personal information, Events made
activities discoverable, and Me connected identity and community points.

<figure>
  <img
    src="/media/comgrand/high-fidelity.webp"
    alt="High-fidelity screens laid out in two rows: health reports, reminders and treatments above; Neighborhood, Health, the home screen, the quick bar, Events and Me below, with an easy mode that enlarges the health summary."
    width="3200"
    height="1678"
    loading="lazy"
    decoding="async"
  />
  <figcaption>High-fidelity screens for Neighborhood, Health, Events, and the personal account.</figcaption>
</figure>

<details>
<summary>App structure and interaction flow</summary>

I mapped the app structure and key interaction flows before developing the high-fidelity
interface.

<figure>
  <img
    src="/media/comgrand/app-structure.webp"
    alt="The app's information architecture. Four top-level sections branch from the app: Neighborhood with chats, contacts and explore; Health with health report, medication reminder and treatment; Events with recommended events, an events list and community notifications; and Me with settings, device connection, the achievement system, payment records and tutorials."
    width="2880"
    height="2080"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The app structure organized the service across neighborhood, health, events, and personal functions.</figcaption>
</figure>

<figure>
  <img
    src="/media/comgrand/interaction-flow.webp"
    alt="Wireframe screens connected by arrows, grouped into Neighborhood, Me, Health and Events. The flows run from the landing page through chats, contacts and explore, through health reports, medication reminders and treatment records, and through the events list to event details."
    width="3200"
    height="1790"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Selected interaction flows connecting the app’s main service functions.</figcaption>
</figure>

</details>


## Testing with older adults

The ring looked resolved in sketches and renders, but wearing it exposed problems I could
not see on screen.

I built a physical prototype and asked two older adults to try it across several intended
interactions, including check-in, payment, health sensing, and the emergency function. The
prototype carried the form rather than working electronics, so it could show me how the
object sat on a hand and whether each gesture made sense to the person performing it.

<figure>
  <img
    src="/media/comgrand/testing.webp"
    alt="A sheet of nine labelled frames. On the left, a hand resting on a table wearing the prototype, a plain white band with no display or visible components. On the right, eight frames of it in use: verification against a phone, NFC payment, event check-in against a reader, two hands touching to exchange contacts, oximetry, and lifting an emergency state."
    width="3680"
    height="1240"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The physical prototype, and the intended interactions it was tried across.</figcaption>
</figure>

<ul class="process-steps" data-cols="2">
  <li>
    <p class="process-steps__num">Accidental activation</p>
    <p class="process-steps__name">Easy to trigger was not always better.</p>
    <p class="process-steps__note">My grandmother found the interaction straightforward, but worried that the emergency function could be activated by accident.</p>
  </li>

  <li>
    <p class="process-steps__num">Fit and readability</p>
    <p class="process-steps__name">The form did not suit both wearers equally.</p>
    <p class="process-steps__note">Mrs. Pan, her neighbour, found the band too narrow and the display area too dim to read comfortably.</p>
  </li>
</ul>

For a high-stakes action, preventing accidental activation mattered as much as making the
interaction easy to perform. I had also sized the ring around the form I wanted, not
around the range of hands it had to fit or the conditions it had to be read in.

Two people cannot settle either question, but they were enough to show me what a next
iteration would have to work on.

<dl class="issue-response">
  <div>
    <dt>Emergency interaction</dt>
    <dd>Reduce accidental activation.</dd>
  </div>

  <div>
    <dt>Fit</dt>
    <dd>Accommodate a wider range of hands.</dd>
  </div>

  <div>
    <dt>Readability</dt>
    <dd>Improve display visibility.</dd>
  </div>
</dl>

<details>
<summary>Unresolved risk</summary>

**Losing the ring mattered more once it carried sensitive functions.** Participants varied in how
easily they adapted to wearing and using the ring, and concern about losing it came up
repeatedly. Because the
concept combined payment, identity, and medical alert functions, loss and security would
need to be treated as core design constraints in a future iteration.

</details>


## Looking back

Looking back, I would keep the core idea but narrow the scope and test it earlier.

<ul class="process-steps" data-stack>
  <li>
    <p class="process-steps__num">01</p>
    <p class="process-steps__name">Narrow the scope</p>
    <p class="process-steps__note">Build a smaller part of the service first, then expand only after testing it.</p>
  </li>

  <li>
    <p class="process-steps__num">02</p>
    <p class="process-steps__name">Test the service earlier</p>
    <p class="process-steps__note">The ring reached physical testing, but most of the wider service system did not.</p>
  </li>

  <li>
    <p class="process-steps__num">03</p>
    <p class="process-steps__name">Define the audience more carefully</p>
    <p class="process-steps__note">Three participants aged 71 to 78 already differed in living situation and digital confidence. “Older adults” was too broad a category.</p>
  </li>
</ul>

<!-- `data-close` puts the label in the accent. The one place on the site
     where a callout label leaves the quiet mono grey: this is the last line of
     the case study, and the colour is what marks it as the end rather than
     another note. -->

<blockquote data-close>
  <p><strong>What I learned</strong></p>
  <p>What I learned was to let research change the direction, and to test ideas with people before developing them too far.</p>
</blockquote>
