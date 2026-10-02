/**
 * Italics in a one-line frontmatter string, which Astro prints as plain text.
 *
 * A blurb is a sentence, not a Markdown document, so this reads one thing
 * only: a title wrapped in single asterisks, the same mark the case study
 * body uses for it. Nothing else is parsed. A string with no asterisks comes
 * back as a single plain part, so a blurb that names no work renders exactly
 * as it did before.
 */
export interface EmphasisPart {
  text: string;
  em: boolean;
}

const MARK = /\*([^*\n]+)\*/g;

export function emphasisParts(text: string): EmphasisPart[] {
  const parts: EmphasisPart[] = [];
  let last = 0;
  for (const match of text.matchAll(MARK)) {
    const at = match.index ?? 0;
    if (at > last) parts.push({ text: text.slice(last, at), em: false });
    parts.push({ text: match[1], em: true });
    last = at + match[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), em: false });
  return parts;
}

/** The same string for places that only take plain text: the meta
    description, which search results and link previews show unformatted. */
export function plainText(text: string): string {
  return text.replace(MARK, '$1');
}
