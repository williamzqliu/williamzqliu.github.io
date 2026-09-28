import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Track = 'design' | 'engineering';

/**
 * The one publication rule. Every query below reads the collection through
 * this, so a card and a case study route can never disagree about whether a
 * project is public: there is no second place to forget.
 *
 * `published` defaults to false in the schema, so a project reaches the
 * deployed site only when its frontmatter says so outright. `draft` is the
 * older, blunter flag — a file that should not build at all — and it still
 * applies.
 *
 * Publication is an editorial decision, not something derived: nothing here
 * looks at media-src/, at file dates, at whether a cover exists, or at how
 * long the body is.
 *
 * `astro dev` is the exception, and it has to be: a project cannot be edited
 * against its own card and case study page if the flag that hides it from the
 * deployed site also hides it from the person writing it. So the dev server
 * shows everything and the build shows only what is published. `import.meta
 * .env.DEV` is false in `astro build`, which is what deploys, so nothing
 * unpublished can reach the site through this.
 *
 * `npm run preview` serves the build, so it shows the deployed set. That is
 * the one to check before flipping a flag.
 */
export const isPublic = (entry: Project): boolean =>
  !entry.data.draft && (entry.data.published || import.meta.env.DEV);

export interface ProjectLink {
  label: string;
  href: string;
}

// Fixed order, because SPEC §9 wants the demo first. This is presentation
// order, not a category list — deriving it from the data would be wrong.
const LINK_ORDER = ['demo', 'thesis', 'paper', 'poster', 'spotlight', 'code'] as const;

/**
 * Repositories are parked until the code is ready to be read, and readiness
 * turned out to be per repository rather than per site: one of the four is a
 * collaborator's, one 404s, and the rest are at different stages of being
 * worth opening. So the switch is a set of slugs instead of a boolean, and a
 * repository joins it the day someone has actually read it through.
 *
 * The hrefs stay in frontmatter either way. A project not named here keeps its
 * `code:` line and simply does not show it, which is what makes the URL
 * survive until the repository is ready.
 *
 * It covers the listing rows as well as the case study pages — hiding the
 * link on the page while leaving it on the card that opens the page would not
 * hide anything.
 */
const CODE_LINKS_ENABLED = new Set<string>(['tod-boston', 'ripples-into-silence']);

/** The default name for a kind. Frontmatter overrides it where the link is a
    named thing rather than an instance of a kind. */
const LINK_LABELS: Record<(typeof LINK_ORDER)[number], string> = {
  demo: 'Live Demo',
  thesis: 'Full Thesis',
  paper: 'Paper',
  poster: 'Poster',
  spotlight: 'Feature',
  code: 'Source',
};

/**
 * The public categories on /work, in the order the filter row shows them. One
 * per main project (`category` in frontmatter); the archive is a status, not a
 * category, and has none.
 */
export const CATEGORIES = [
  { value: 'data-research', label: 'Data & research' },
  { value: 'interfaces-experiences', label: 'Interfaces & experiences' },
  { value: 'visual-storytelling', label: 'Visual storytelling' },
] as const;

export type Category = (typeof CATEGORIES)[number]['value'];

/** The schema keys links by kind; the UI wants an ordered list. */
function build(project: Project, kinds: readonly (typeof LINK_ORDER)[number][]): ProjectLink[] {
  return kinds.flatMap((key) => {
    if (key === 'code' && !CODE_LINKS_ENABLED.has(project.id)) return [];
    const value = project.data.links[key];
    if (!value) return [];
    return typeof value === 'string'
      ? [{ label: LINK_LABELS[key], href: value }]
      : [{ label: value.label, href: value.href }];
  });
}

/** Everything a project points at, in presentation order. The case study. */
export function projectLinks(project: Project): ProjectLink[] {
  return build(project, LINK_ORDER);
}

/**
 * One destination on a listing row, not a menu of them. Which one is decided
 * by the same presentation order the case study uses, so a project with a
 * demo shows the demo and a project whose only artifact is a paper or a
 * poster still shows that.
 *
 * A row is already a link to the case study, and the case study is where
 * there is room to say what a thesis or a write-up actually is. Four arrows
 * under a blurb read as a pile and push the next project down the page.
 *
 * Same frontmatter either way — this is a slice, not a second list.
 */
export function cardLinks(project: Project): ProjectLink[] {
  return projectLinks(project).slice(0, 1);
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
 * Newest first, to the month, and the id breaks exact ties: a comparator has
 * to be total, and two archive projects can finish in the same month.
 */
function byRecency(a: Project, b: Project): number {
  return endStamp(b) - endStamp(a) || a.id.localeCompare(b.id);
}

/** Everything publishable, newest first. */
export async function allProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', isPublic);
  return entries.sort(byRecency);
}

/**
 * Where the curated projects sit, written out: these are presentation
 * decisions, not facts about the work, so they live here and not in the
 * content files. Selected Work is the homepage; the main order is /work's.
 * The two differ on purpose (Barvision comes before Citing Less Critically on
 * the homepage and after it on /work), so one number per project could not
 * hold both.
 *
 * A published project missing from a list is not dropped: it follows the
 * listed ones, newest first, so adding a project never makes it vanish.
 */
const SELECTED_ORDER = [
  'inside-the-institution',
  'barboard',
  'barvision',
  'citing-less-critically',
];

const MAIN_ORDER = [
  'inside-the-institution',
  'barboard',
  'citing-less-critically',
  'barvision',
  'ai-ethics-network',
  'ripples-into-silence',
  'tod-boston',
  'comgrand',
  'melovision',
  'whats-going-on-in-there',
];

// Newest first, except where two pairs are swapped by hand.
const ARCHIVE_ORDER = [
  'not-always-more-for-more',
  'dont-skip-this-major',
  'dui-invisible-bill',
  'witness',
  'emoease',
  'lumitex',
  'nightmare-of-moonglade',
];

function byOrder(order: string[]) {
  const rank = (project: Project) => {
    const index = order.indexOf(project.id);
    return index === -1 ? order.length : index;
  };
  return (a: Project, b: Project) => rank(a) - rank(b) || byRecency(a, b);
}

/** Selected Work on the homepage: the listed projects only, in that order. */
export async function selectedProjects(): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    (entry) => isPublic(entry) && !entry.data.archive && SELECTED_ORDER.includes(entry.id)
  );
  return entries.sort(byOrder(SELECTED_ORDER));
}

/** The main list on /work: everything not archived, in the main order. */
export async function curatedProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', (entry) => isPublic(entry) && !entry.data.archive);
  return entries.sort(byOrder(MAIN_ORDER));
}

/**
 * The archive: `archive: true`. A status, not a category: these never appear
 * under All work. In the archive order.
 */
export async function archiveProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', (entry) => isPublic(entry) && entry.data.archive);
  return entries.sort(byOrder(ARCHIVE_ORDER));
}

/**
 * The three loops a case study can hand on to, one per list a reader can have
 * come from. Selected Work loops within itself, the main list within its ten,
 * and the archive within its own; each wraps from its last project to its
 * first. A project in Selected Work is also in the main list, so its page
 * carries both hand-offs and the one for the list the reader came from is
 * shown (see `[...slug].astro`); every other page has one.
 */
export type Loop = 'selected' | 'main' | 'archive';

export type NextStep =
  | { kind: 'project'; label: string; project: Project }
  | { kind: 'all-work' };

export async function nextStep(current: Project, loop: Loop): Promise<NextStep> {
  const lists = {
    selected: selectedProjects,
    main: curatedProjects,
    archive: archiveProjects,
  };
  const members = (await lists[loop]()).filter(hasCaseStudy);
  const index = members.findIndex((entry) => entry.id === current.id);
  if (index === -1 || members.length < 2) return { kind: 'all-work' };
  return {
    kind: 'project',
    label: loop === 'archive' ? 'Next in archive' : 'Next project',
    project: members[(index + 1) % members.length],
  };
}

/** The loop a project belongs to when there is no list to have come from. */
export function homeLoop(project: Project): Loop {
  return project.data.archive ? 'archive' : 'main';
}

/** Whether a project is on the homepage, and so can be reached from it. */
export function isSelected(project: Project): boolean {
  return !project.data.archive && SELECTED_ORDER.includes(project.id);
}
