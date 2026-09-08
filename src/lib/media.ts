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
