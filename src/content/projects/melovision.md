---
title: MeloVision
year: 2023
dates: Jul 2023 – Oct 2023
blurb: A music discovery concept that renders each song as a generative form driven by its own audio.
tags: [interactive]
tracks: [design]
featured: 10
stack:
  - TouchDesigner
  - Figma
links:
  demo: https://www.youtube.com/watch?v=Pem2er8I3Mc
cover:
  wide: /media/melovision/cover-wide.webp
  tone: dark
  alt: A generative sphere in teal and violet, its surface warped and striped by the audio of a single song.
quickFacts:
  - label: "Role"
    value: "Designer & Researcher"
  - label: "Outcome"
    value: "Visual system, app, brand identity, and print"
---

## The question

Streaming was supposed to solve music discovery. Everything ever recorded, one search
away, and an algorithm that learns what you like. And yet finding a song that actually
matches your taste feels harder than it did when you had to buy albums.

The question I started from was whether the recommendation mechanism is the cause
rather than the cure. Does it widen what you hear, or narrow it?

## Three answers that all contradict each other

I surveyed 105 people, 90.5% of them between 18 and 30, and interviewed six across
three groups I chose specifically because they should disagree.

**Listeners** said the recommendations are too samey. One put it plainly: there are so
many homogeneous types of song coming through that it gets boring.

**Independent musicians** said the mechanism is not neutral. Platforms will let indie
artists pay to promote toward unfamiliar listeners, and an indie artist has no budget
to do that. So the recommendation surface is partly an advertising surface, and the
people who cannot buy it are invisible on it.

**Algorithm engineers** described the same system from inside and did not disagree with
either complaint. One said the mechanism resolves differences in individual preference
into paradigms, forming a fixed preference chain preset. That is a description of
exactly what the listeners were complaining about, offered as how the thing works.

Three groups, three positions, all internally consistent and mutually incompatible.
That is what made this a design problem rather than a complaint. Nobody is doing
anything wrong; the structure produces the outcome.

## What the survey actually said

The numbers pointed somewhere more specific than "recommendations are bad".

People rated the mechanism 6.13 out of 10 for convenience and 5.30 for satisfaction
with what it pushed them. So it saves effort and fails at accuracy, and those are not
the same problem.

The expectations data confirmed it. 66.7% wanted the mechanism to detect changes in
their preferences more sensitively. 55.2% wanted to try diverse genres and escape the
cocoon. 51.4% wanted to spend less time auditioning songs to find out whether they
liked them.

Read together: people do not want more recommendations. They want their own
preferences to become visible and adjustable, and they want to know what a song is
like before spending three minutes finding out.

That reframing is what the design is for. Not a better recommender. A way of showing
a song that lets you decide about it in a second.

## Cymatics

Cymatics is the phenomenon where sound vibration passing through a medium forms
visible geometric patterns. It gave me two things at once.

Physically, it justifies the whole premise: a form generated from a song's own audio is
not an illustration of the song, it is a consequence of it. The mapping can be
principled rather than decorative.

Metaphorically, cymatic patterns look like threads wound into a shell, which is what an
information cocoon looks like if you had to draw one. The concept the research
identified and the visual language the design uses come from the same image, which is
also why the logo is a sound wave, a set of cocoon threads, and a music ball combined.

## The encoding system

Each song becomes one form, and three independent layers decide what it looks like.

**Shape carries genre.** Eight geometries for eight genres: pop, R&B, Latin, country,
indie, electric and dance, rock and metal, rap and hip hop. Shape is the coarsest
signal and the one you read first from across a room.

**Colour carries emotion.** An emotion wheel of roughly forty terms organised into
eight sectors, from irate and distraught through to calm and pleased. Colour is where a
listener's own associations do the work, so this layer is deliberately the one they can
also control by hand.

**Texture carries the spectrum.** The audio drives it directly. Spectral centroid maps
to the mood tone. Low frequencies map to depth, middle frequencies to vertical
texture, high frequencies to horizontal texture.

Those frequency assignments are the part I would defend hardest. They are not
arbitrary pairings: bass is felt as weight and depth, so it displaces the surface;
midrange carries the vocal and melodic body, so it runs vertically through the form;
treble is detail and edge, so it scratches across it. Each mapping has a reason you can
state, which is the difference between an encoding system and a look.

Because the layers are independent, two pop songs share a shape and diverge completely
in colour and surface. Nine real tracks were rendered through the full pipeline, from
Anti-Hero to HUMBLE. to Roman Holiday, which is how I checked the system produced
distinguishable results rather than nine variations of the same object.

## Giving the controls back

The interface is the part that answers the research directly.

The Explore panel puts three handles in front of the listener at once: pick a genre,
pick a mood from the colour wheel, add or remove tags. If the song that comes back is
wrong, there is a refresh next to it.

That is a deliberate inversion. The complaint the research surfaced was not that the
machine chooses badly, it was that the machine chooses invisibly and you cannot argue
with it. So the design makes the preference model into a control surface rather than a
black box, and treats rejecting a suggestion as a normal thing to do rather than a
signal to be silently absorbed.

The project extended past the app into a promotion site and printed invitation cards,
and then into a room. I generated the song forms as video in TouchDesigner and
projected them into a darkened space, to find out what a music ball is like at room
scale instead of on a phone.

Worth being precise about what that was: a projection. Nothing in the room responded
to anyone. The panel I made at the time labelled it an interactive space, which
overstates it, and the honest description is that it was a spatial test of the concept.

It was still the most useful hour of the project. On a phone a generated form reads as
album art, which is a thing you glance at. At three metres across in a dark room it
reads as an object, which is a thing two people stand in front of and argue about. The
research had found that listening became a private feed; seeing the difference between
those two scales is what convinced me the form had to exist somewhere other than
inside the app.

## What this does not prove

The 105 responses and six interviews establish that the problem is real and describe
its shape. They say nothing about whether my solution works.

Nobody tested MeloVision. There is no study asking whether a listener can actually
read genre off a shape, whether the emotion colours match anyone's associations but
mine, or whether choosing music by looking at forms is faster than listening to
thirty-second previews. The whole premise rests on an assumption I did not check.

I would run that study before building any more of it, and I would expect it to break
at least one of the three layers. My guess is colour survives, because people have
strong existing associations, and shape does not, because eight abstract geometries have
no inherent connection to eight genres and would have to be learned. Learning eight
arbitrary symbols is a cost, and the whole point was to reduce cost.

That is the thing I would want to find out, and it is why the project is a concept
rather than a proposal.
