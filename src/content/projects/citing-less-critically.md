---
title: "Citing Less Critically"
year: 2026
dates: "Nov 2025 – Aug 2026"
blurb: "An EMNLP 2026 study of how LLMs reshape scientific citation. I designed two of its figures and built its bibliographic matching pipeline."
tags: ["networks"]
tracks: ["design", "engineering"]
featured: 2
draft: false
stack: ["Figma", "Python", "pandas", "Dimensions"]
links:
  paper:
    href: "https://arxiv.org/abs/2609.01432"
    label: "Preprint"
  code: "https://github.com/liu-yi-xuan/llm_citation_intent/"
cover:
  wide: "/media/citing-less-critically/cover-wide.webp"
  # Generated opener, not the project's own artwork: nothing to enlarge.
  zoom: false
  tone: "neutral"
  alt: "A human hand and a robot hand each holding out a reference card toward the same empty citation bracket on a page of text, between stacks of books labelled HUMAN and LLM."
quickFacts:
  - label: "Role"
    value: "Scientific Figure Designer & Research Contributor"
  - label: "Outcome"
    value: "Accepted to the EMNLP 2026 Main Conference (third author)"
---

<!--
Attribution must stay visible in the row blurb, not only here. I am the third
author of five; the equal-contribution asterisks belong to the first two
authors and not to me. The research question, the masked-citation design, the
LLM-as-judge procedure and the coauthorship-network analysis are other
people's work. My contributions are the two figures named below, the
citation-matching pipeline, and one of three human annotation passes.

Cover must be a redrawn version of Figure 1 or Figure 4a, not the typeset
version lifted from the PDF.
-->

## Explaining the research framework

Scientific citations can support, contrast with, or simply mention prior research. This
study asks whether LLMs make the same citation choices as human authors when filling the
same citation position.

To make the experimental design easier to follow, I designed a three-stage visual
framework for our team&#8217;s method, keeping the human and LLM paths easy to compare
from reconstruction to bibliographic matching.

<ol class="process-steps">
  <li>
    <p class="process-steps__num">01</p>
    <p class="process-steps__name">Reconstruct</p>
    <p class="process-steps__note">Mask the original citation sentence and ask an LLM to reconstruct it with the same number of citations.</p>
  </li>

  <li>
    <p class="process-steps__num">02</p>
    <p class="process-steps__name">Classify</p>
    <p class="process-steps__note">Label the original and LLM-generated citations as supporting, contrasting, or mentioning.</p>
  </li>

  <li>
    <p class="process-steps__num">03</p>
    <p class="process-steps__name">Ground</p>
    <p class="process-steps__note">Match each cited work to a canonical record in <em>Dimensions</em> so its metadata can be analyzed.</p>
  </li>
</ol>


## Rebuilding the framework after peer review

The submitted framework included the full experimental pipeline, but that completeness
made the figure harder to scan. During peer review, one reviewer called out the problem
directly: **&#8220;Figure 1 is too visually dense.&#8221;**

<figure>
  <img
    src="/media/citing-less-critically/submitted-figure-1.webp"
    alt="The submitted framework figure: three sentence panels across the top, a judging row beneath them and a Dimensions row below that, with the stages, the arrows and the supporting detail all drawn at the same weight."
    width="1024"
    height="548"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Submitted version.</strong> Framework submitted for peer review.</figcaption>
</figure>

I rebuilt the figure without stripping away the research logic. I separated the three
stages, clarified the parallel human and LLM paths, and simplified the visual hierarchy so
the main steps remained clear within a restrained, publication-ready layout.

After peer review, the framework went through six rounds of team feedback before reaching
the final version.

<figure>
  <img
    src="/media/citing-less-critically/final-figure-1.webp"
    alt="The published framework figure. Stage 1 puts the original citation sentence, the masked version and the LLM-generated version side by side with their reference lists. Stage 2 sends both the original and generated sentences to an LLM judge, which returns supporting, contrasting or mentioning. Stage 3 matches both sets of references in Dimensions and carries team size, publication year and citation impact into the three research questions."
    width="3200"
    height="2333"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Final version.</strong> Framework after peer review and six rounds of team feedback.</figcaption>
</figure>


## Matching citations to reliable records

Before the team could compare what humans and LLMs cited, each reference had to be
matched to a reliable bibliographic record. I built the pipeline that connected citation
data to canonical records in *Dimensions*, giving the team consistent metadata for later
analysis.

For the human-written baseline, the pipeline matched **115,278 of 132,913 citation
positions (86.7%)**.

<div class="stat-strip" data-cols="3">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">132,913</p>
    <p class="stat-strip__label">Human citation positions</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">115,278</p>
    <p class="stat-strip__label">Matched to Dimensions</p>
  </div>

  <div class="stat-strip__cell">
    <p class="stat-strip__value">86.7%</p>
    <p class="stat-strip__label">Match rate</p>
  </div>
</div>

This echoed a challenge in
[*Inside the Institution*](/work/inside-the-institution), where I reconciled scholar
identities across inconsistent data sources. In both projects, reliable matching had to
come before reliable analysis.

<details>
<summary>How the matching pipeline worked</summary>

**Matching strategy.** The final pipeline first matched references by DOI, then fell back
to title matching when the DOI was missing or malformed. Successful matches were replaced
with canonical *Dimensions* metadata; unmatched references were excluded from downstream
analysis. The matching logic favored conservative resolution because a false positive
would attach the wrong metadata to every downstream analysis.

**Why matching quality mattered.** Human-written citations reached an 86.7% match rate,
while the six LLMs ranged from 39.5% to 81.9%. To understand what lay behind unmatched
outputs, the study manually audited 100 unmatched titles from *GPT-5.1* and 100 from
*Claude-3.5-Haiku*. Of these, 79% and 97%, respectively, were classified as hallucinated,
including both fabricated works and real works with substantially garbled titles.

An earlier development version of the pipeline ran against *OpenAlex* at a smaller scale.
That was an exploratory build, not the pipeline reported in the paper.

</details>


## Making social distance visible

To compare how socially close cited authors were to the authors citing them, the study
measured paths through a coauthorship network. I designed Figure 4a to turn that abstract
metric into a worked comparison between an original citation and an LLM-generated
replacement.

Instead of presenting the final score on its own, the figure traces the paths that produce
it, so readers can see how the measure is built before they interpret the results.

<figure>
  <img
    src="/media/citing-less-critically/final-figure-4a.webp"
    alt="Two worked rows. In each, a citing paper and a cited paper are shown with their first and last authors, the four shortest paths between those author pairs are traced through the coauthorship network, and the four lengths are averaged. The original row averages 2.25; the LLM-generated row averages 3."
    width="2374"
    height="1431"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Figure 4a.</strong> Worked comparison of the social-distance measure for an original citation and an LLM-generated replacement.</figcaption>
</figure>

<details>
<summary>How social distance is calculated</summary>

Each citation links two papers. The measure takes the first and last author of the citing
paper and the first and last author of the cited paper, giving four author pairs, then
finds the shortest path between each pair in the coauthorship network. Averaging those
four path lengths produces one score for the paper pair.

In the worked examples above, the original citation averages to &#10216;d&#10217; =
2.25, while the LLM-generated replacement averages to &#10216;d&#10217; = 3.

</details>


## Validating citation intent with human readers

Because the study used an LLM to classify citation intent, the team also needed a human
check. I helped define the three annotation categories and served as one of three
independent human annotators.

<ul class="process-steps">
  <li>
    <p class="process-steps__name">Supporting</p>
    <p class="process-steps__note">Builds on prior work as evidence, method, or aligned findings.</p>
  </li>

  <li>
    <p class="process-steps__name">Contrasting</p>
    <p class="process-steps__note">Positions prior work as a competing approach, disagreement, or baseline.</p>
  </li>

  <li>
    <p class="process-steps__name">Mentioning</p>
    <p class="process-steps__note">Uses prior work for background, definitions, or general acknowledgment.</p>
  </li>
</ul>

Across a 90-position validation set, the human labels moved in the same direction, with
fewer citations classified as contrasting. The primary LLM judge agreed with the
human-majority label in **73% of cases**, giving the team an independent check on the
automated classification.

<details>
<summary>Validation details</summary>

The three categories were settled by the first three authors together, adapted from an
existing citation-classification scheme. The validation set was a stratified sample of
ninety citation positions, and each of the three annotators labelled it independently,
without seeing the automated labels or the identities of the cited papers.

Agreement between the annotators was Cohen&#8217;s &#954; = 0.60. The corresponding
*GPT-5.1* reconstruction labeling was used as a further independent check on the automated
classification.

</details>

<!-- PARKED from the previous draft of this section. Not in the copy above and
     not published elsewhere on the page. Delete once these facts have a home
     or have been ruled out.

     That validation set is load-bearing. It answers the most obvious
     objection to the paper, which is that an LLM judge might simply read
     LLM-written prose as warmer. The warming appears in all three humans'
     labels too, in the same direction, so it is a property of the rewritten
     sentences rather than a judge preference.
-->


## Outcome and takeaway

Accepted at EMNLP 2026, main conference. Preprint and code are public.

I am the third of five authors, and Human annotator 3 in the paper's validation table. The equal-contribution marks belong to the first two. The research question, the masked-citation design, the judging procedure and the 20.3-million-edge coauthorship analysis are not mine, and I would rather say so than let a reader assume otherwise. What is mine is above.

The useful thing I learned is that in a pipeline feeding a published claim, the failure modes are not symmetric. Recall problems announce themselves as a number somebody will ask about. Precision problems do not announce themselves at all: a wrong match becomes a real-looking row in a real-looking table, and the person who eventually notices is a reader, after publication. Designing for the loud failure over the quiet one is not caution, it is the only version that survives review.

The figures taught me something narrower. Reviewers of a methods paper read for whether the method is sound, not for whether the diagram is handsome, and a framework figure earns its space by making one thing checkable. The density note was the most useful piece of design feedback I have had, because it came from someone with no stake in the diagram and every stake in understanding the method.

Figure 4a is the one I would show if asked for a single example of information design: a definition nobody would read, turned into something a reader gets in one pass. It needed one revision. Figure 1 needed nine, which is the more honest number.
