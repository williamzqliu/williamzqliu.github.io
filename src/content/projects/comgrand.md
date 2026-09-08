---
title: Comgrand
year: 2023
dates: Mar 2023 – Nov 2023
blurb: A service ecosystem that moves community elders from receiving care to providing it.
tags: [narrative]
tracks: [design]
featured: 9
stack: [Figma, Balsamiq, Blender, Service Design]
links: {}
cover:
  wide: /media/comgrand/cover-wide.webp
  square: /media/comgrand/cover-square.webp
  tone: light
  alt: Two views of a titanium smart ring with an integrated sensor band and a pressable display, annotated with component callouts.
quickFacts:
  - label: "Role"
    value: "Solo Designer & Researcher"
  - label: "Outcome"
    value: "12 panels, an app prototype, and a working ring model"
stats:
  - { value: "3", label: Interviews }
  - { value: "6", label: Functions scored }
  - { value: "9", label: Months }
  - { value: "12", label: Panels }
---

## Where this started

My grandmother has lived alone since my grandfather died. During the pandemic she
bought a pulse oximeter and used it on herself. When the restrictions in China
loosened in December 2022 she stayed quarantined at home for almost another month,
expecting no visitors, because she had no reliable way to find out what was actually
happening. She tried to learn to use a smartphone, gave up, and went back to her old
handset. She walks in the community most days, and when she runs into neighbours her
own age they sit on a bench and talk.

The question I started from was about her specifically: why does she insist on living
the way she always has, and respond to change with withdrawal rather than curiosity?

That is a question about one person. Turning it into a design problem meant finding
out whether the pattern held more widely, and if it did, what was actually causing it.

## What the research found

I interviewed three community elders, chosen so their living situations and digital
comfort differed rather than because they were easy to reach. One at 78 living alone,
able to use a basic phone. One at 74 living with her spouse, fluent with digital
products. One at 71 living with his children, able to use a smartphone for simple
tasks.

Then I looked at the secondary literature on empty nesters in urban Chinese
communities. The numbers pointed somewhere I had not expected. Among elders living
alone, 98.4% can care for themselves, 89.9% are in good health, and 90.1% are
financially self-sufficient. But 68.0% want to realise their own worth, 81.6% want
friendships with peers, 71.4% want to be part of society, and 84.5% want to be
respected.

The material needs are largely met. The gap is participation.

That reframing is the pivot of the whole project. The WHO Active Aging framework from
1999 rests on three pillars: health, insurance, and participation. Health and
insurance were being addressed. Participation was not, and no amount of better
healthcare delivery was going to address it.

The behaviour I had read as stubbornness turned out to have a structure. Internally:
damaged self-esteem, fear of making mistakes, a widening gap between how they see
themselves and how they are treated, and no vocabulary for describing what they
actually need. Externally: gerontology researchers building products without
attending to real needs, families providing informal support that is not enough, and
community organisations whose intervention is limited and often impatient.

If the problem is that elders are positioned only as recipients, the design has to
move them into the position of providers.

## From needs to functions

I ran a co-design session with community elders, a social worker, and other residents,
and put six candidate functions in front of them.

The social worker, Ms. Xiao, said something that reordered my priorities: the elders
seem to care more about having company than about who the company is. One
participant, Mrs. Wu, put it more directly. She said that when she is alone for long
enough, she starts to feel physically ill.

That gave me a hierarchy to design against. Companionship first, then physical
health, then variety of activity.

I scored the six functions across five criteria: demand match, willingness to
participate, satisfaction, scalability, and novelty. Socializing With Friends came out
at 20, Psychological Counseling at 19, Empowerment Activity at 18, Health Monitoring
at 16, Co-Creation of Community Space at 14, and Volunteer Service at 12. I kept the
top four and cut the bottom two.

Volunteer Service is worth dwelling on, because it is the function that sounds most
aligned with the recipient-to-provider goal and it scored last. Willingness to
participate was the lowest rating in the table. Wanting to contribute is not the same
as wanting to be assigned volunteer work, and the scoring is what showed me the
difference. If I had trusted the concept I arrived with, that function would have
shipped and failed.

## The system

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

## The ring

I sketched a range of forms and took three forward. A ring rather than a band or a
watch, because it is the least intrusive thing to wear all day and because tapping
your hand against a reader is a more natural gesture for someone who does not want to
operate a screen.

The digital model is 1.9 by 2.3 by 0.6 centimetres, with a health sensor array, an
integrated motion sensor, an NFC and Bluetooth module, a pressable display, and a
solar element. The CMF system offers three options on each axis: Origin, Charcoal, and
Carbon for colour; titanium, tungsten carbide, and hypoallergenic resin for material;
CNC engraving, matte texture, and a soft touch finish.

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

## Reflection

The finding I did not design for is that adaptability to the ring varies a lot between
individuals, and that nearly everyone worried about losing it. A device that holds
your payment credentials, your identity, and your medical alerts is a device you
cannot afford to misplace, and I had not treated that as a design constraint. Hardware
comfort and device security are where this would go next, ahead of any new features.

What I would keep is the order of operations. The scoring session cut a function I
was attached to, and the wear test found two problems I would not have found by
looking at the model. Both of those happened because I put unfinished work in front of
the people it was for, early enough that the answer could still change what I built.

What I would change is the ambition. Nine months produced a complete service design
across three layers, and the ring is the only part that got physically tested. If I
were doing it again I would build less system and test more of it.
