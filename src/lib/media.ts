import fs from 'node:fs';
import path from 'node:path';

/**
 * Cover media switch.
 *
 * The tone plates stand in for loops and stills that do not exist yet: each
 * one is drawn at the right ratio and in the project's declared tone, so the
 * layout is already the layout the real media will land in. Set to false to
 * strip them out entirely — project rows and case study heads then render
 * text-only, with no gap where a plate would be.
 *
 * When the files each project declares in `cover.wide` are in public/media/,
 * CoverMedia is where they get rendered; this switch stays on.
 */
export const COVERS_ENABLED = true;

/**
 * A declared cover is not a shipped one. Every project names its artwork in
 * frontmatter and most of that artwork has not been made yet, so handing the
 * path straight to an `<img>` would put a broken image exactly where the tone
 * plate belongs. This returns the path only when the file is really in
 * public/, and `undefined` otherwise — which is what CoverMedia already reads
 * as "draw the plate".
 *
 * Build-time only, like the portrait check on the about page. Memoised because
 * the listing renders sixteen rows and the same paths come round again.
 */
const published = new Map<string, boolean>();

export function shippedMedia(src?: string): string | undefined {
  if (!src) return undefined;
  let exists = published.get(src);
  if (exists === undefined) {
    exists = fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
    published.set(src, exists);
  }
  return exists ? src : undefined;
}
