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
 * Filter categories are derived from the data, never hardcoded (SPEC §7).
 * Sorted alphabetically so the order is stable and needs no maintenance —
 * a hardcoded order silently mis-sorts the day a fifth tag is added.
 */
export function deriveTags(projects: Project[]): string[] {
  return [...new Set(projects.flatMap((project) => project.data.tags))].sort();
}

/** The schema keys links by kind; the UI wants an ordered list. */
export function projectLinks(project: Project): ProjectLink[] {
  return LINK_ORDER.flatMap((key) => {
    const href = project.data.links[key];
    return href ? [{ label: LINK_LABELS[key], href }] : [];
  });
}
