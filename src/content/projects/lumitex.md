---
title: "Lumitex"
year: 2023
dates: "Sep 2023 – Nov 2023"
blurb: "An AR reading aid for dyslexic children, built from research in a Hangzhou primary school."
tags: ["interactive"]
tracks: ["design"]
archive: true
draft: false
stack: ["Reality Composer", "Nomad", "Procreate", "Figma"]
links:
  poster: "/media/lumitex/panels.pdf"
cover:
  wide: "/media/lumitex/cover-wide.webp"
  square: "/media/lumitex/cover-square.webp"
  tone: "light"
  alt: "A child wearing AR glasses reading a picture book, with coloured word groups and short captions overlaid on the page."
quickFacts:
  - label: "Role"
    value: "Solo Designer"
  - label: "Outcome"
    value: "Made for a master's application portfolio, 2023"
stats:
  - value: "27"
    label: "children surveyed"
  - value: "3"
    label: "interviews across a triad"
  - value: "4"
    label: "reading modes"
  - value: "15M"
    label: "dyslexic children in China"
---

<!--
No `featured` key: this project lives in the archive list, not on a landing
page. It overlaps Comgrand closely and Comgrand is the stronger of the two.
The case study still renders and is reachable from the archive row.

The expert statements on panel 3-2 (Li Hong, Beijing Normal University;
Maryanne Wolf, UCLA) are quoted from published literature, not from
interviews. This page does not reproduce them. Before the panels PDF is
exported, each quote needs a source line added on the panel itself, because
the headshot-plus-quote layout reads as an interview.

Still to settle before the media goes in:
- Provenance of the AR renders and the deliver-page scenes (made by me,
  stock, or AI generated). The site discloses AI assistance.
- Third-party assets in the panels: Minecraft creeper, 3D emoji set,
  Wikipedia mark, stock photos of children. Remove or replace.
- On-site research photos show identifiable primary school pupils. Only the
  redacted versions, or no people at all.
- Panel 3-6 typo: "Mental Sanbox" should read Mental Sandbox.
-->

Dyslexia has nothing to do with intelligence and responds well to early intervention. The optimal age to start is around six. Most dyslexic children in China are not identified by then, and the reason is not diagnostic capacity.

## The problem

I started from my own experience. Dense blocks of text have always cost me more than they seem to cost other people, and for a while I suspected I was dyslexic. A follow-up evaluation said I was not. What stayed was the three weeks in between, when I read everything I could find about a condition I thought I had.

The research pointed somewhere I did not expect. Prevalence estimates run from 5 to 17 percent globally; in China that is on the order of 15 million children. Dyslexia is neurological, unrelated to intelligence, and improves measurably with intervention. The constraint is not the intervention. It is that the condition carries enough stigma that families hide it, and hiding it costs the intervention window.

That reframing set the whole project: a design here has to address reading difficulty and social position at the same time, or it addresses neither.

## Approach

**Three interviews, chosen to disagree with each other.** Leif, 22, dyslexic, studying media production in Toronto, could look back on childhood with a self-image already rebuilt. Qun Xiao, 11, dyslexic, was in the middle of it and described memorising a single word forty or fifty times. Mrs. Feng, 43, is Qun Xiao's mother, and what she talked about was neither reading nor self-image but an exam-oriented system in which a score is the only measure of a child, and the most a parent can do is absorb the damage.

**A survey at a school rather than online.** 27 dyslexic children in grades three to six, with their parents, at a primary school in Hangzhou, in October 2023. The ranked result was game-based training to improve performance at 85.2 percent, accessible reading with emotional support at 77.8 percent, and new technology to enhance the experience at 55.6 percent.

The more useful finding was a conflict rather than a ranking. The children wanted novel technology and colourful images. Their parents wanted practicality and something they could do together with their child. Those are two different buyers, and averaging them would have produced a design neither wanted.

**Competitive analysis of three existing products** grouped their shortcomings into functions, forms and experiences: no multi-language support and no personalisation; content aimed at children but not varied enough to hold them; interfaces complex enough that operating the tool becomes its own task.

## What I built

Lumitex is an AR reading aid, and choosing AR over an app was the first real decision. The difficulty happens in contact with real text, on a real page. Another body of text inside a screen replaces the page rather than assisting with it. Overlay keeps the book.

Four modes, split between immediate assistance and long-term intervention.

**Reading Mode** recolours word groups by function and opens up letter spacing, rather than simply enlarging type. **Focus Mode** presents one line at a time and filters everything else off the page, which is a direct response to Qun Xiao describing words that move in his eyes. **Training Mode** carries game-based exercises: Schulte grids, stroke-order guidance, Chinese character puzzles. **Interest Mode** points attention outside books entirely, toward things in the world the child can look up and collect.

Training Mode is where the research mattered most. RAVE-O, the intervention model with the strongest evidence base, is a phonological programme built for English. Chinese dyslexia does not work the same way, so the exercises are rebuilt around orthography and stroke order rather than translated.

## Key decisions

**Emotional support sits alongside ability training, not underneath it.** The mind map has three branches and they carry equal weight: emotional support, assistive reading, ability training. This follows directly from the stigma finding. Mental Sandbox and Emotion Records exist to make a child's emotional state visible and recordable, not to drive engagement.

**Writing the negative result into the deliverable.** The panels say plainly that the evaluation came back saying I am not dyslexic. It would have been easy to leave that out and let the project read as first-person. Leaving it in is more accurate and, I think, a stronger reason to have made the thing.

<details>
<summary>Where this project falls short</summary>

**Nothing about the solution was validated.** The 27-child survey measured the problem and feature preference. It did not test this design. There is a prototype-testing photograph in the panels and I no longer have a record of what was tested, with how many people, or what came out of it. Compared with a project like Comgrand, where an elderly participant wore the physical prototype and told me the ring was the wrong width, this is a real gap and not a presentational one.

**AR hardware feasibility was never argued.** The users are eight to twelve. AR headsets available in 2023 were wrong for that group on weight, price, field of view and safe wear time. The panels acknowledge that devices could be refined and then move on, which is not the same as addressing it.

**Twenty features is scope failure.** Four modes times five features each, from one person in three months. Convergence should have happened after the mind map. It did not, and the result is a concept where nothing is developed far enough to be tested.

**Data sources.** Prevalence, sex ratio, comorbidity and intervention-age figures are secondary. The RAVE-O model and the WRMT-R Word Attack comparison are third-party research, credited on the panel to nidolearning.com/RAVE-O. The characterisation of dyslexia in the section above reflects published work in the field, including Maryanne Wolf's; the panels quote two researchers directly and those quotes are citations from published material, not interviews I conducted.

</details>

## Outcome

Six panels, a full research chain, a four-mode concept with AR prototypes and 3D models built in Reality Composer and Nomad. No validation, no deployment, never exhibited. It was made for a graduate application portfolio.

## Reflection

The part of this I would keep is the interview structure. Picking three people who were guaranteed to describe different problems, rather than three people in the same position, is what produced the finding the project rests on. Two dyslexic children would have told me the same thing twice.

The part I got wrong is that I treated the research phase as the hard part and the design phase as the reward. Once the stigma framing was in place, the correct next move was to pick one mode and take it far enough to put in front of a child. Instead I specified twenty features nobody has used.
