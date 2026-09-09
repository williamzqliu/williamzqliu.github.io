import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Track = 'design' | 'engineering';

export interface ProjectLink {
  label: string;
  href: string;
}

// Fixed order, because SPEC §9 wants the demo first. This is presentation
// order, not a category list — deriving it from the data would be wrong.
const LINK_ORDER = ['demo', 'code', 'paper', 'poster'] as const;

const LINK_LABELS: Record<(typeof LINK_ORDER)[number], string> = {
  demo: 'Live demo',
  code: 'Source',
  paper: 'Paper',
  poster: 'Poster',
};

/**
 * Landing page membership (SPEC §1): `tracks` includes design OR engineering,
 * sorted by `featured`. The union is computed from the data rather than kept as
 * a hand-written list. Callers apply the slice.
 */
export async function landingProjects(): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    ({ data }) =>
      !data.draft &&
      data.featured !== undefined &&
      (data.tracks.includes('design') || data.tracks.includes('engineering'))
  );
  return entries.sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0));
}

/**
 * Featured projects for one track, in `featured` order (SPEC §7).
 * `featured` present = landing page. Absent = archive only.
 * `draft: true` never reaches a build.
 */
export async function featuredProjects(track: Track): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    ({ data }) => !data.draft && data.tracks.includes(track) && data.featured !== undefined
  );
  return entries.sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0));
}

/**
 * Reading order for the filter row, most central subject first. The *set* of
 * filters is still derived from the data (SPEC §7) — this only decides the
 * order, and any tag missing from here lands after the known ones,
 * alphabetically, rather than disappearing.
 */
const TAG_ORDER = ['networks', 'interactive', 'narrative', 'information-design'] as const;

/**
 * Filter categories are derived from the data, never hardcoded (SPEC §7): a
 * tag added in frontmatter shows up in the filter row on the next build.
 */
export function deriveTags(projects: Project[]): string[] {
  const present = [...new Set(projects.flatMap((project) => project.data.tags))];
  const rank = (tag: string) => {
    const index = TAG_ORDER.indexOf(tag as (typeof TAG_ORDER)[number]);
    return index === -1 ? TAG_ORDER.length : index;
  };
  return present.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

/** The schema keys links by kind; the UI wants an ordered list. */
export function projectLinks(project: Project): ProjectLink[] {
  return LINK_ORDER.flatMap((key) => {
    const href = project.data.links[key];
    return href ? [{ label: LINK_LABELS[key], href }] : [];
  });
}

/**
 * SPEC §7 — body content is optional, and a project without one renders as a
 * row with links but no case study page. So the link only exists when the
 * page does.
 *
 * Comments do not count. The archive-only projects carry their reasons for
 * having no page as an HTML comment in the body, and a comment is still
 * characters to `.trim()` — which built each of them an article with a title,
 * a hero and nothing under it.
 */
export function hasCaseStudy(project: Project): boolean {
  const prose = (project.body ?? '').replace(/<!--[\s\S]*?-->/g, '');
  return prose.trim().length > 0;
}

export function caseStudyHref(project: Project): string | undefined {
  return hasCaseStudy(project) ? `/work/${project.id}` : undefined;
}

/**
 * Sort key precise to the month a project finished, read from `dates` rather
 * than from a new field: `year` alone puts four 2026 projects in an arbitrary
 * order. The string is display copy ("Jul 2025 – May 2026", or a single
 * "Sep 2024"), so only its last month is parsed, and anything unparseable
 * falls back to December of `year` — the old behaviour, where the year was
 * the whole key.
 */
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function endStamp(project: Project): number {
  const last = (project.data.dates ?? '').split(/[‐-―-]/).pop()?.trim() ?? '';
  const parts = /^([A-Za-z]{3,9})\.?\s+(\d{4})$/.exec(last);
  if (parts) {
    const month = MONTHS.indexOf(parts[1].slice(0, 3).toLowerCase());
    if (month !== -1) return Number(parts[2]) * 12 + month;
  }
  return project.data.year * 12 + 11;
}

/**
 * Newest first, to the month. `featured` only breaks exact ties, and the id
 * breaks the rest — a comparator has to be total, and two archive projects
 * that finished in the same month have no `featured` between them.
 */
function byRecency(a: Project, b: Project): number {
  const rank = (project: Project) => project.data.featured ?? Number.MAX_SAFE_INTEGER;
  return endStamp(b) - endStamp(a) || rank(a) - rank(b) || a.id.localeCompare(b.id);
}

/** Everything publishable, newest first. */
export async function allProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft);
  return entries.sort(byRecency);
}

/**
 * A deliberate exception to the chronology: /work opens with these, in this
 * order, whenever they finished. Kept here rather than in the content files
 * because it is a presentation decision, not a fact about the work.
 */
const PINNED = ['inside-the-institution'];

function pinRank(project: Project): number {
  const index = PINNED.indexOf(project.id);
  return index === -1 ? PINNED.length : index;
}

/**
 * The primary list: everything not marked `archive`, newest first after the
 * pins. /work is a browse view, so it is chronological in every filter —
 * `featured` only ranks the homepage. Ordering is by end month, so projects
 * that share a year still read in the order they finished.
 */
export async function curatedProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft && !data.archive);
  return entries.sort((a, b) => pinRank(a) - pinRank(b) || byRecency(a, b));
}

/**
 * The archive: `archive: true`. A status, not a subject — these never appear
 * under `all`. Newest first, because there is no curation to respect.
 */
export async function archiveProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft && data.archive);
  return entries.sort(byRecency);
}

/**
 * Editorial order for the six Selected Work projects, written out rather than
 * derived. Reading one flagship project leads to the next flagship project,
 * and the last one leads out of the sequence instead of looping — so this is a
 * list someone decided, not a consequence of dates or file order.
 */
const FEATURED_SEQUENCE = [
  'inside-the-institution',
  'citing-less-critically',
  'polygraphs',
  'barvision',
  'ripples-into-silence',
  'whats-going-on-in-there',
];

/**
 * What comes after a case study. `all-work` is the end of the featured
 * sequence: it hands the reader to /work rather than dropping them into the
 * archive or starting the sequence over.
 */
export type NextStep =
  | { kind: 'project'; label: string; project: Project }
  | { kind: 'all-work' };

/**
 * The recommendation respects the three tiers rather than the array order.
 * Featured follows the curated sequence; archive stays inside the archive; a
 * primary project goes to the most recent non-archive project it shares a
 * subject with. Nothing outside the archive can ever recommend an archive
 * project, and only pages that exist are offered.
 */
export async function nextStep(current: Project): Promise<NextStep> {
  const entries = (await getCollection('projects', ({ data }) => !data.draft)).filter(hasCaseStudy);
  const byId = new Map(entries.map((entry) => [entry.id, entry]));

  const seat = FEATURED_SEQUENCE.indexOf(current.id);
  if (seat !== -1) {
    const following = FEATURED_SEQUENCE.slice(seat + 1)
      .map((id) => byId.get(id))
      .find((entry): entry is Project => entry !== undefined);
    return following
      ? { kind: 'project', label: 'Next project', project: following }
      : { kind: 'all-work' };
  }

  if (current.data.archive) {
    // A loop of its own, so the archive never spills into the main work.
    const loop = entries.filter((entry) => entry.data.archive).sort(byRecency);
    const index = loop.findIndex((entry) => entry.id === current.id);
    if (loop.length < 2 || index === -1) return { kind: 'all-work' };
    return { kind: 'project', label: 'Next in archive', project: loop[(index + 1) % loop.length] };
  }

  const primary = entries
    .filter((entry) => !entry.data.archive && entry.id !== current.id)
    .sort(byRecency);
  const related = primary.find((entry) =>
    entry.data.tags.some((tag) => current.data.tags.includes(tag))
  );
  const following = related ?? primary[0];
  return following
    ? { kind: 'project', label: 'Next project', project: following }
    : { kind: 'all-work' };
}
