/**
 * Which list a reader opened a case study from, so its "Next project" can
 * hand on within that list: Selected Work on the homepage, the main list on
 * /work, or the archive. Browser only.
 *
 * View state, like the /work filter, so it lives in sessionStorage: one tab,
 * gone when the tab closes, never carried by a shared link. A case study
 * reached any other way (a shared link, the nav, a search result) uses the
 * loop of its own list, which is what the server renders.
 */

const KEY = 'work:loop';

export type StoredLoop = 'selected' | 'main' | 'archive';

let bound = false;

/** Record the loop of any case-study link clicked inside a `[data-loop]` list. */
export function rememberLoop(): void {
  if (bound) return;
  bound = true;
  // On the document, which survives client-side navigation, so one listener
  // serves every page that renders a `[data-loop]` list.
  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="/work/"]');
      const list = link?.closest<HTMLElement>('[data-loop]');
      if (!list?.dataset.loop) return;
      try {
        sessionStorage.setItem(KEY, list.dataset.loop);
      } catch {
        /* Private mode or a full quota: the page's own loop still works. */
      }
    },
    true
  );
}

/** The loop recorded for this tab, if any. */
export function storedLoop(): StoredLoop | null {
  try {
    const value = sessionStorage.getItem(KEY);
    return value === 'selected' || value === 'main' || value === 'archive' ? value : null;
  } catch {
    return null;
  }
}
