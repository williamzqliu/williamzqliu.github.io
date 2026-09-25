---
title: "Citing Less Critically"
year: 2026
dates: "Nov 2025 – Aug 2026"
# One blurb for the head and both cards. The detail of what I did is carried
# by the opening of Section 01.
blurb: "Scientific figure design and citation matching for an EMNLP 2026 study of human and LLM citation behavior."
tags: ["networks"]
tracks: ["design", "engineering"]
category: data-research
published: true
draft: false
stack:
  - Figma
  - Python
  - pandas
  - Dimensions
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
    value: "Scientific figure design, citation matching & annotation review"
  - label: "Outcome"
    value: "Accepted to the EMNLP 2026 Main Conference (third author)"
# Order is the editorial decision here, not an alphabet. Network analysis is
# deliberately absent from skills: the coauthorship analysis was not mine.
credits:
  skills:
    - Scientific figure design
    - Information design
    - Bibliographic data matching
    - Research annotation
  tools:
    - Figma
    - Python
    - pandas
    - Dimensions
  # Three rows in total, so there is nothing worth putting behind a control.
  collapse: false
  # Who I worked with, not the paper's author line. No per-person roles: we
  # have no verified role attribution for the others.
  team:
    - people:
        - Yixuan Liu
        - Lin Chen
        - Zhuoqi Liu
        - Jianglin Lu
        - Dakota Murray
---

<!--
I am the third author of five, and Human annotator 3 in the paper's Table 7.
Yixuan Liu and Lin Chen contributed equally; that marker is theirs and not
mine, and it is kept here rather than on the page. The research question, the
masked-citation design, the LLM-as-judge procedure and the coauthorship-network
analysis are other people's work. Yixuan Liu made the submitted Figure 1. My
contributions are the post-review rebuild of Figure 1, Figure 5a, the
citation-matching pipeline, taking part in the unmatched-title review, and one
of three human annotation passes.

The cover is a rendered scene, not a redrawn figure. Figures 1 and 5a ship as
their own exports; neither is a screenshot of the PDF.
-->

## Rebuilding the research framework

Our team studied whether LLMs preserve human citation choices and intent when
reconstructing a masked citation sentence. In this controlled task, the models produced
fewer contrasting citations than the human-written baseline.

I designed the final framework figure to explain how the study reconstructs citation
sentences, classifies their intent, and matches references to bibliographic records.
Blue and red labels identify the human and LLM-generated material throughout the three
stages.

<figure>
  <img
    src="/media/citing-less-critically/final-figure-1.webp"
    alt="Final framework redesigned by Zhuoqi Liu. Three vertically stacked stages show citation masking and reconstruction, parallel intent labeling of original and LLM-generated sentences, and Dimensions matching followed by downstream analysis."
    width="3200"
    height="2333"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Final framework redesigned by me (Figure 1).</strong> Read from top to bottom: citation reconstruction, intent labeling, and bibliographic matching.</figcaption>
</figure>

### Earlier version and redesign

The earlier version below was created by Yixuan Liu. A reviewer described it as “too
visually dense.” I rebuilt the figure through six rounds of team feedback, producing the
final version shown above for the paper’s final manuscript.

<figure>
  <img
    src="/media/citing-less-critically/submitted-figure-1.webp"
    alt="Earlier framework created by Yixuan Liu, before Zhuoqi Liu’s redesign, with original, masked, and generated sentence panels across the top and long connectors leading to intent labeling and Dimensions matching below."
    width="1024"
    height="548"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Earlier framework by Yixuan Liu.</strong> Before my redesign. Trace the connectors between reconstruction, intent labeling, and bibliographic matching.</figcaption>
</figure>

I organized the method into three horizontal bands, giving each stage a heading and a
consistent top-to-bottom reading order. Within the labeling stage, I kept the original
and generated sentences on separate, parallel paths so readers could follow both through
the same judging procedure.

I also reduced the emphasis on surrounding text while retaining the citation sentences
and reference lists needed to understand the example. In the final stage, I condensed
the branching analysis details into a single row linking matched records, metadata, and
the three research questions.

<details>
<summary>Framework iteration</summary>

My first substantial redesign separated the method into three stages, with intent
labeling and bibliographic matching placed side by side beneath reconstruction. I later
stacked all three stages vertically and simplified the final analysis row, keeping the
reading direction consistent.

<figure>
  <img
    src="/media/citing-less-critically/revised-figure-1.webp"
    alt="Intermediate framework redesign by Zhuoqi Liu, with reconstruction across the top and two separately bounded stages for intent labeling and bibliographic matching side by side below."
    width="3200"
    height="1675"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Intermediate redesign by me.</strong> The stages are separated, but the reading direction still shifts from downward to sideways.</figcaption>
</figure>

The final figure retains a worked citation example alongside the method. This preserves
the detail needed to inspect the experiment, although the sentence-level text still
requires enlargement at smaller display sizes.

</details>

## Explaining social distance

The study also compares how closely citing and cited authors are connected through
coauthorship. I designed Figure 5a to show how the distance measure is calculated.

I arranged each example from left to right: identify the first and last authors, trace
the four author-pair paths through the network, then average their lengths. Repeating
this structure for an original citation and an LLM-generated replacement lets readers
compare the calculation step by step.

<figure>
  <img
    src="/media/citing-less-critically/final-figure-5a.webp"
    alt="Social-distance diagram designed by Zhuoqi Liu. Two rows compare an original citation with an LLM-generated replacement. Each row identifies first and last authors, traces four coauthorship paths, and averages their lengths, yielding illustrative distances of 2.25 and 3."
    width="2576"
    height="1536"
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Social-distance diagram designed by me (Figure 5a).</strong> Four author-pair path lengths produce each average; 2.25 and 3 are illustrative values, not study-wide results.</figcaption>
</figure>

<details>
<summary>Distance calculation</summary>

The first and last authors of the citing paper are paired with the first and last
authors of the cited paper, giving four author pairs. The measure averages the shortest
coauthorship-path lengths between those pairs.

The diagram explains this calculation. The network analysis was conducted by the
research team; my contribution was its visual explanation. Coauthorship distance
describes connections in the recorded network and does not directly measure personal
familiarity or favoritism.

</details>

## Matching citation records

I built the pipeline that linked human and LLM-generated references to Dimensions
records for downstream analysis. It matched references by DOI first, then used
normalized titles when DOI matching failed.

For the human baseline, **115,278 of 132,913 citation slots matched a Dimensions
record**, a coverage rate of 86.7%. Each slot represents one cited work at a citation
position, so repeated citations to the same paper are counted separately. Unmatched
references were excluded from downstream analysis.

I also participated in reviewing 200 unmatched titles and calibrating the pipeline. The
review distinguished missed matches, real works with inaccurate titles, and fabricated
references, helping separate matching failures from problems in the generated
citations.

<details>
<summary>Matching and unmatched references</summary>

The title fallback used exact matching after normalization. Successful matches supplied
canonical metadata from Dimensions; author names were not used as matching keys because
of formatting variation. The reported match rate measures coverage, not the accuracy of
every matched record.

For the unmatched-reference review reported in Appendix E, the team sampled 100 titles
from GPT-5.1 and 100 from Claude-3.5-Haiku. I participated in the human review and
pipeline calibration; the audit also used Claude Opus 4.8 with web search.

The review separated three outcomes: a real record the pipeline had missed, a real work
with a substantially inaccurate title, and a fabricated reference. The paper groups the
latter two as hallucinations. These categories describe the sampled unmatched titles,
not all citations generated by either model.

</details>

## Checking citation intent

I helped refine the annotation definitions and served as one of three independent human
annotators, labeling citations as supporting, contrasting, or mentioning. We worked
without seeing the automated labels or cited-paper identities.

This check examined whether the shift toward fewer contrasting citations also appeared
in human judgments. It did in the evaluated GPT-5.1 pairs, providing supporting evidence
beyond the automated labels within this validation sample.

<details>
<summary>Human validation</summary>

The validation set contained 90 original citation sentences, stratified across the three
intent categories. On these sentences, the primary LLM judge agreed with the
human-majority label in 73% of cases, with Cohen’s κ = 0.60.

The before-and-after comparison used the 77 of those 90 positions for which GPT-5.1
returned a citation sentence. Each human annotator classified a smaller share of the
reconstructed sentences as contrasting than of the originals.

These are two related checks with different denominators: agreement on the 90 original
sentences, and change in intent across 77 original–reconstructed pairs. The sample does
not establish labeling accuracy across the full corpus or every model.

</details>
