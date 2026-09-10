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
study asks whether LLMs make the same rhetorical choices as human authors when filling
the same citation position.

To make the experimental design easier to follow, I designed a three-stage visual
framework for our team&#8217;s method, keeping the human and LLM paths comparable from
reconstruction through bibliographic grounding.

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
    <p class="process-steps__note">Match each cited work to canonical bibliographic records in <em>Dimensions</em> for downstream analysis.</p>
  </li>
</ol>


## Rebuilding the framework after peer review

The submitted framework captured the full experimental pipeline, but that completeness
came at the cost of hierarchy. During peer review, one reviewer called out the problem
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

I rebuilt the figure without removing the methodological structure. The redesign
separated the three stages more clearly, strengthened the parallel human and LLM paths,
and reduced visual competition between primary steps and supporting detail. I also kept
the visual language deliberately restrained, prioritizing scientific clarity,
consistency, and publication-ready layout over decorative complexity.

After the review, the framework went through six rounds of team feedback before reaching
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



<!-- PARKED from the previous draft of this section. Not in the copy above and
     not published anywhere else on the page, so it is kept here rather than
     dropped. Delete once these facts have a home or have been ruled out.

     **Figure 1, the framework diagram.** Three stages, one citation slot
     travelling through all of them: the human original, the masked version,
     the model's replacement. The difficulty is not drawing boxes. It is that
     stages run in sequence while six models run in parallel inside stage one,
     and both have to be legible in one static frame.

     Density in a diagram is rarely a matter of too many elements. It is
     usually too few levels: everything competing at the same weight, so a
     reader has nowhere to start. That is why I restarted rather than
     adjusted. Hierarchy is the lowest-level decision in a layout, and local
     edits to an existing composition cannot move it.

     Every frame is still on the Figma canvas, before and after, from
     `plot_diagram 2` through `plot_diagram_update` and then six frames of
     `plot_diagram_better`.

     The reason this is worth more than the final figure alone: the critique
     came from an anonymous expert reviewing the work for publication, the
     response is traceable frame by frame, and the result cleared a
     main-conference review. Self-directed iteration is easy to claim. This is
     the other kind.
-->


## Grounding 132,913 citation slots

Before citation behavior could be compared, each reference had to be connected to a real
bibliographic record. Citation metadata was inconsistent, and an incorrect match could
distort every downstream attribute attached to that paper.

I built the final grounding pipeline used in the study. It first matched references by
DOI, then fell back to title matching when the DOI was missing or malformed. Successful
matches were replaced with canonical metadata from *Dimensions*, while unmatched
references were excluded from downstream analysis.

For the human-written baseline, the pipeline matched **115,278 of 132,913 citation slots
(86.7%)**, providing the bibliographic foundation for later analyses of publication year,
citation impact, team size, and author relationships.

<div class="stat-strip" data-cols="3">
  <div class="stat-strip__cell">
    <p class="stat-strip__value">132,913</p>
    <p class="stat-strip__label">Human citation slots</p>
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

This echoed a data challenge I had encountered in
[*Inside the Institution*](/work/inside-the-institution), where scholar identities also
had to be reconciled across inconsistent institutional and bibliographic records. In both
projects, reliable matching was a prerequisite for trustworthy downstream analysis.

<!-- PARKED from the previous draft of this section. None of it is in the copy
     above and none of it is published elsewhere on the page. Kept rather than
     dropped; delete once these facts have a home or have been ruled out.

     The engineering detail, which the section now leaves out on purpose:

     A four-tier match cascade ordered by cost. DOI, then arXiv DOI
     (`10.48550/arXiv.<ID>`), then PMID (skipped, the data had none), then
     fuzzy title-and-year search. Most references never reach the last tier.

     A similarity threshold instead of the top hit: normalised title
     comparison with a 0.85 floor, so a borderline case is dropped rather
     than guessed at. Under-matching is recoverable; a wrong match is not,
     because nothing downstream will flag it.

     A recorded `match_method` on every row, so the aggregate rate is
     auditable by tier.

     Deduplication before requesting, keyed on DOI then normalised arXiv ID
     then normalised title. Sample mode before full, with an on-disk HTTP
     cache. Request pacing at 0.11s across four worker threads under a global
     rate cap.

     Non-destructive corrections: fifteen citing papers had truncated arXiv
     identifiers, found by cross-comparing three datasets. The fix script
     writes a mapping table rather than editing the source files, and asserts
     that each corrected identifier starts with the truncated one it replaces.

     The model side of the match rate: the six models resolve at between 39.5
     and 81.9 percent, against 86.7 for the human baseline. An audit of a
     hundred unmatched titles per model puts the hallucination share at 79
     percent for one model and 97 percent for another. That comparison is only
     usable because both sides went through the same pipeline.

     The uploaded scripts are the OpenAlex version, an earlier attempt at
     200-paper scale with roughly 14,000 real and 9,500 model-generated
     references. The published results use Dimensions at the full 1,746-paper
     scale; the matching strategy is the same.
-->


## Making social distance visible

Social distance was one of the study&#8217;s more abstract measures. For each
citing&#8211;cited paper pair, the analysis considers the first and last authors of both
papers, producing four author-pair distances through the coauthorship network.

I designed Figure 4a as a worked example rather than a purely conceptual diagram. By
showing each of the four shortest paths and how they combine into a single average
distance, the figure makes the metric directly inspectable before readers encounter the
results.

<!-- FIGURE 4A — waiting on one file. The paragraphs above describe the worked
     example; the example itself is the piece that is missing, and the section
     reads without it.

     figure-4a.png in media-src/citing-less-critically/, exported from the
     source artwork rather than screenshotted from the paper. Export at
     2400-3200px wide, as the framework figures are: the author nodes, the path
     lengths and the averaging all have to stay legible in the viewer.

<figure>
  <img
    src="/media/citing-less-critically/figure-4a.webp"
    alt="Two named papers with their first and last authors, and the four shortest paths drawn between those author pairs through the coauthorship network, with the four lengths averaged into one distance."
    loading="lazy"
    decoding="async"
  />
  <figcaption>Figure 4a. A worked example of the social-distance measure. The four author-pair shortest paths are 2, 2, 2, and 3, producing an average distance of 2.25.</figcaption>
</figure>
-->

<!-- PARKED from the previous draft of this section. Not in the copy above and
     not published elsewhere on the page. Delete once these facts have a home
     or have been ruled out.

     Figure 4a took one pass and one round of minor type-size adjustment. Put
     next to Figure 1 that contrast says the useful thing: the difficulty is
     not in the drawing, it is in how many levels of structure the subject
     has. One abstract measure needs one worked example. A three-stage
     pipeline with parallel branches inside one stage needs its hierarchy
     sorted out before it can be read at all.

     It is the only purely explanatory figure in the paper; everything else
     plots results.

     Explain one abstraction rather than illustrate the whole method. Figure
     4a exists because the coauthorship-distance metric is the one definition
     in the paper a reader is most likely to skip. Spending a figure on a
     single idea beats spreading it thin.
-->


## Validating citation intent with humans

**The annotation rubric, and one of three annotation passes.** The three intent definitions the whole study runs on, supporting, contrasting and mentioning, were settled by the first three authors together, adapted from an existing citation-classification scheme. I then labelled a stratified sample of ninety citation sentences blind to the model labels and to the cited papers, as one of three annotators.

That validation set is load-bearing. It answers the most obvious objection to the paper, which is that an LLM judge might simply read LLM-written prose as warmer. The warming appears in all three humans' labels too, in the same direction, so it is a property of the rewritten sentences rather than a judge preference.


## Outcome and takeaway

Accepted at EMNLP 2026, main conference. Preprint and code are public.

I am the third of five authors, and Human annotator 3 in the paper's validation table. The equal-contribution marks belong to the first two. The research question, the masked-citation design, the judging procedure and the 20.3-million-edge coauthorship analysis are not mine, and I would rather say so than let a reader assume otherwise. What is mine is above.

The useful thing I learned is that in a pipeline feeding a published claim, the failure modes are not symmetric. Recall problems announce themselves as a number somebody will ask about. Precision problems do not announce themselves at all: a wrong match becomes a real-looking row in a real-looking table, and the person who eventually notices is a reader, after publication. Designing for the loud failure over the quiet one is not caution, it is the only version that survives review.

The figures taught me something narrower. Reviewers of a methods paper read for whether the method is sound, not for whether the diagram is handsome, and a framework figure earns its space by making one thing checkable. The density note was the most useful piece of design feedback I have had, because it came from someone with no stake in the diagram and every stake in understanding the method.

Figure 4a is the one I would show if asked for a single example of information design: a definition nobody would read, turned into something a reader gets in one pass. It needed one revision. Figure 1 needed nine, which is the more honest number.
