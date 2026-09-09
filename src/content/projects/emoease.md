---
title: "EmoEase"
year: 2023
dates: "Oct 2023 – Nov 2023"
blurb: "A projection installation that turns the room's body language into emojis, using Kinect."
tags: ["interactive"]
tracks: ["design"]
archive: true
draft: false
stack: ["TouchDesigner", "Kinect", "Projection"]
links:
  demo: "https://www.youtube.com/watch?v=1XzRk-Fi_zc"
  poster: "/media/emoease/panels.pdf"
cover:
  wide: "/media/emoease/cover-wide.webp"
  square: "/media/emoease/cover-square.webp"
  tone: "dark"
  alt: "A dark room with a projected wall of emoji faces, a human silhouette picked out in dense yellow particles at the centre."
quickFacts:
  - label: "Role"
    value: "Solo Designer & Creative Technologist"
  - label: "Outcome"
    value: "A working projection installation with three interaction modes"
stats:
  - value: "106"
    label: "survey responses"
  - value: "85.7%"
    label: "do not verify trusted sources"
  - value: "3"
    label: "interaction modes"
  - value: "4.5"
    label: "hours on social media daily"
---

<!--
No `featured` key: archive list only, not a landing page row. It overlaps
MeloVision closely (same tutor, same panel series, both TouchDesigner) and
MeloVision covers more ground in one slot. The case study still renders and
is reachable from the archive row.

Before the media goes in:
- Panel 4-3: the captions for concept steps 2 through 5 are all the same
  sentence, left over from copy-paste. Rewrite all four before exporting the
  panels PDF.
- The YouTube URL printed on panels 4-0 and 4-5 is wrong in two different
  ways. Video IDs are case sensitive; the correct ID is 1XzRk-Fi_zc.
- On-site photos include visitors. Use silhouettes or the projection only.
- Third-party assets in the panels: platform marks, emoji artwork, stock
  imagery inside the mocked-up posts.
- The interviewee MBTI labels are not reproduced here on purpose. They
  carried no analysis and MBTI has no psychometric standing.
-->

I made this because social media was getting to me and I wanted to know whether that was just me.

## The problem

The thing worth designing for turned out not to be misinformation. It was not knowing.

I surveyed 106 people, mostly 18 to 30, averaging four and a half hours a day on social platforms. 72.6 percent said they had been disturbed by over-packaged content. The most common reaction was anxiety and confusion at 66 percent, and the most common effect they named was on their thinking, at 73.6 percent.

Then two numbers next to each other. Asked to rate their own ability to tell what is real, the group put itself at 6.18. Asked whether they actively check content from publishers they already trust, 85.7 percent said they do not.

So: people rate their own discernment fairly highly and switch it off for exactly the sources most likely to reach them. And the single most common coping strategy, at 90.1 percent, is avoiding controversial topics or believing only parts, which is avoidance rather than verification.

Six interviews filled in why nobody talks about it. Kevin, thirty, put it most directly: people do notice eventually, and they say nothing, because admitting it would embarrass them.

## Approach

That last point ruled out the obvious response. A fact-checking tool, a browser extension, a literacy app: all of them need you to already suspect something and choose to open them. The problem is happening below that threshold.

An installation does not need to be opened. You walk into a room and the room is already responding to you.

## What I built

A dark space, a Kinect, a projector, TouchDesigner in between. Two layers of generated imagery, composited together.

The first layer is the traffic: social platform icons moving in trails across the wall, the outside coming at you. The second layer is you. The Kinect picks out your body and the projection fills your silhouette with particles, then reads your facial expression and grows the corresponding emoji out of it. The two layers merge with a maximum operation, which means the external and internal parts of the image compete for visibility rather than sitting in separate zones.

The behaviour of the piece depends on how many people are in the space and whether they are engaging with each other. One person alone gets the first mode. Two people who are interacting get the second; two who are ignoring each other get the first. More than two who are interacting get the third.

That branching is the part of this I would defend hardest. The research finding was that people who realise they have been affected tell no one. So the installation is built so that having someone with you, and actually turning towards them, is the condition for the picture changing. Being alone in the room gets you the baseline.

Using emoji as the display unit for emotion, rather than colour fields or numbers, follows the same logic. Emoji are social media's own emotional vocabulary. Having the room read your face and answer in emoji puts the experience of being interpreted by a platform into the platform's language.

## Key decisions

**The subject is awareness, not accuracy.** Everything follows from framing the problem as unnoticed influence rather than false information. It is why this is a space and not a tool, why the output is emotional rather than informational, and why there is no correct or incorrect state to arrive at.

**Two layers rather than one composition.** Separating the incoming feed from the visitor's own reading keeps the argument legible: there is something coming at you, there is what it does to you, and on the wall they overlap.

**Presence as the input, not gesture.** No poses to learn, no menu. The sensor reads how many people are there and whether they are oriented towards each other. Nobody has to be taught how to use it, which matters for a piece about things happening without your involvement.

<details>
<summary>Where this project falls short</summary>

**The installation was never evaluated.** The 106 responses measured the problem. Nothing measured whether the piece did what it was built to do. There are photographs and video of visitors interacting, and no record of how many came through, what they said, or whether anyone left more aware of anything. The space has since been taken down, so this is a permanent gap rather than an outstanding task. Asked how I know it worked, the honest answer is that I do not.

**The three modes are not visible in the documentation.** The flowchart defines them and the site footage does not distinguish them. Claiming the branching as a design decision requires footage of all three, which I have not cut.

**The survey scales are unlabelled.** Authenticity 4.58, trustworthiness 4.55, discernment 6.18, self-comparison 5.01, with no stated maximum on the panels. A reader cannot tell whether 4.58 is low or high, and neither can I without the original instrument.

**Interviewee framing.** The panels tag each of the six interviewees with an MBTI type. It carried no analysis, and MBTI has no psychometric standing. Time spent on social media, ranging from one hour a day to eight, is the variable that actually separates what they said.

</details>

## Outcome

The piece was built and it ran, with people in the room. There is a public video of it. Beyond that: never exhibited publicly, no publication, no evaluation. It was made for a graduate application portfolio.

## Reflection

The best decision here was letting a research finding dictate an interaction rule rather than a visual. "People who notice don't tell anyone" could easily have become a caption on a wall. Turning it into the condition under which the room responds is the difference between illustrating a finding and building on one.

The thing I would do differently is trivially obvious in hindsight and I still did not do it: stand in the room for an afternoon and write down what people did. The instrumentation was already there. I built an installation about noticing things and did not think to watch.
