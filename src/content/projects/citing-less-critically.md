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

To make the experimental design easier to follow, I translated the method into a
three-stage framework that keeps the human and LLM paths comparable from reconstruction
through bibliographic grounding.

<ol class="process-steps">
  <li>
    <p class="process-steps__num">01</p>
    <p class="process-steps__name">Reconstruct</p>
    <p class="process-steps__note">Mask the original citation sentence and ask an LLM to reconstruct it with the same number of references.</p>
  </li>

  <li>
    <p class="process-steps__num">02</p>
    <p class="process-steps__name">Classify</p>
    <p class="process-steps__note">Label both human and LLM citations by rhetorical intent: supporting, contrasting, or mentioning.</p>
  </li>

  <li>
    <p class="process-steps__num">03</p>
    <p class="process-steps__name">Ground</p>
    <p class="process-steps__note">Match the cited works to bibliographic metadata for downstream analysis.</p>
  </li>
</ol>


## Rebuilding the framework after peer review

The submitted framework captured the full experimental pipeline, but that completeness
came at the cost of hierarchy. During peer review, one reviewer called out the problem
directly: **&#8220;Figure 1 is too visually dense.&#8221;**

<!-- SUBMITTED VERSION — waiting on one file. The paragraph above names the
     problem and the one below answers it; the picture of the problem is the
     piece that is missing, and the section still reads without it.

     figure-1-submitted.webp — the version that went to review, exported from
     the source artwork rather than screenshotted from the submission PDF.
     Export at 2400-3200px wide, as the final one is.

<figure>
  <img
    src="/media/citing-less-critically/figure-1-submitted.webp"
    alt="The submitted framework figure, with the stages and their supporting detail competing at the same visual weight."
    loading="lazy"
    decoding="async"
  />
  <figcaption><strong>Submitted version.</strong> Framework submitted for peer review.</figcaption>
</figure>
-->

I rebuilt the figure without removing the methodological structure. The redesign
separated the three stages more clearly, strengthened the parallel human and LLM paths,
and reduced visual competition between primary steps and supporting detail. After the
review, the framework went through six rounds of team feedback before reaching the final
version.

<figure>
  <img
    src="/media/citing-less-critically/figure-1.webp"
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


## Grounding 132,913 citations

The study needed three things that are easy to state and hard to build: a way to compare human and model citation behaviour at the same position in the same sentence, a way to label what a citation is rhetorically doing, and a way to look up what each cited paper actually is.

I worked on the third, and on explaining the first.

The lookup problem is where the paper's central inference lives. Across 1,746 conference papers there are 132,913 citation slots, each naming a work that has to be resolved to a real record before anything can be said about how old it is, how cited it is, or who wrote it. Models produce references that are sometimes real, sometimes real but garbled, and sometimes invented. If the matching layer is inconsistent, every downstream number is unreadable.

**A four-tier match cascade, ordered by cost.** DOI lookup first, then arXiv DOI (`10.48550/arXiv.<ID>`), then PMID (skipped, the data had none), then fuzzy title-and-year search. Cheap and exact before expensive and probabilistic. Most references never reach the last tier.

**A similarity threshold instead of taking the top hit.** A bibliographic search endpoint will happily return a related but different paper. Accepting the first result silently injects wrong matches that look like successful ones. Normalised title comparison with a 0.85 floor means the pipeline drops a borderline case rather than guessing at it. Under-matching is recoverable; a wrong match is not, because nothing downstream will flag it.

**A recorded `match_method` on every row.** The output says whether a citation resolved by DOI, by arXiv ID, or by title. That turns a single aggregate match rate into something auditable by tier, which matters when a reviewer asks how much of the matching rests on fuzzy comparison.

**Deduplicate before requesting.** The same cited work appears many times across tens of thousands of citations. Keying on DOI, falling back to normalised arXiv ID, falling back to normalised title, collapses those into one request each. The script reports how many API calls that saved.

**Sample mode, then full, with an on-disk HTTP cache.** Validate on fifty rows before spending hours of requests, and make the full re-run free so that fixing one line does not mean re-fetching everything.

**Non-destructive corrections.** Fifteen citing papers had truncated arXiv identifiers, found by cross-comparing three datasets. The fix script looks each one up by conference DOI with three fallback paths, then falls back again to a title search, and writes a mapping table rather than editing the source files. It also asserts that each corrected identifier starts with the truncated one it replaces, so a bad lookup fails loudly instead of overwriting good data.

**The matching pipeline.** Human citations resolve at 86.7 percent. The six models resolve at between 39.5 and 81.9 percent.

That spread is the paper's evidence for hallucination, and it is only usable because both sides go through the same pipeline. Since human references match at a high rate, the gap is attributable to what the models produced rather than to how the matching worked. An audit of a hundred unmatched titles per model then puts the hallucination share at 79 percent for one model and 97 percent for another. None of that reads as a finding if the matching layer is doing something different for the two sides.

**Under-match rather than mis-match.** Everything about the pipeline follows from this. The threshold, the cost-ordered cascade, the recorded method, the assertion in the correction script. A missing match shows up as a lower rate and gets discussed. A wrong match is invisible and contaminates a published number.

<details>
<summary>Pipeline notes</summary>

Python with pandas and requests, using an HTTPAdapter with urllib3 retry. Request pacing at 0.11 seconds, roughly nine requests per second against a polite-pool ceiling of ten, with four worker threads sharing a global rate cap. Responses cached to JSON on disk.

The uploaded scripts are the OpenAlex version, an earlier attempt at 200-paper scale with roughly 14,000 real and 9,500 model-generated references. The published results use Dimensions at the full 1,746-paper scale; the matching strategy is the same.

Match reporting is per-tier, so the contribution of exact versus fuzzy matching is visible rather than pooled.

</details>


## Making social distance visible

**Figure 4a, the distance schematic.** The paper measures social distance as the mean shortest path across four author-role pairs between the citing and cited papers. As a formula nobody reads it. As a picture of two named papers with four paths drawn between their first and last authors, and the four numbers averaged, a reader sees where a value of 2.25 comes from. It is the only purely explanatory figure in the paper; everything else plots results.

**Explain one abstraction rather than illustrate the whole method.** Figure 4a exists because the coauthorship-distance metric is the one definition in the paper a reader is most likely to skip. Spending a figure on a single idea beats spreading it thin.

Figure 4a took one pass and one round of minor type-size adjustment. Put next to Figure 1 that contrast says the useful thing: the difficulty is not in the drawing, it is in how many levels of structure the subject has. One abstract measure needs one worked example. A three-stage pipeline with parallel branches inside one stage needs its hierarchy sorted out before it can be read at all.


## Validating citation intent with humans

**The annotation rubric, and one of three annotation passes.** The three intent definitions the whole study runs on, supporting, contrasting and mentioning, were settled by the first three authors together, adapted from an existing citation-classification scheme. I then labelled a stratified sample of ninety citation sentences blind to the model labels and to the cited papers, as one of three annotators.

That validation set is load-bearing. It answers the most obvious objection to the paper, which is that an LLM judge might simply read LLM-written prose as warmer. The warming appears in all three humans' labels too, in the same direction, so it is a property of the rewritten sentences rather than a judge preference.


## Outcome and takeaway

Accepted at EMNLP 2026, main conference. Preprint and code are public.

I am the third of five authors, and Human annotator 3 in the paper's validation table. The equal-contribution marks belong to the first two. The research question, the masked-citation design, the judging procedure and the 20.3-million-edge coauthorship analysis are not mine, and I would rather say so than let a reader assume otherwise. What is mine is above.

The useful thing I learned is that in a pipeline feeding a published claim, the failure modes are not symmetric. Recall problems announce themselves as a number somebody will ask about. Precision problems do not announce themselves at all: a wrong match becomes a real-looking row in a real-looking table, and the person who eventually notices is a reader, after publication. Designing for the loud failure over the quiet one is not caution, it is the only version that survives review.

The figures taught me something narrower. Reviewers of a methods paper read for whether the method is sound, not for whether the diagram is handsome, and a framework figure earns its space by making one thing checkable. The density note was the most useful piece of design feedback I have had, because it came from someone with no stake in the diagram and every stake in understanding the method.

Figure 4a is the one I would show if asked for a single example of information design: a definition nobody would read, turned into something a reader gets in one pass. It needed one revision. Figure 1 needed nine, which is the more honest number.
