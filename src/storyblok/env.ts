// Storyblok's visual editor opens the preview URL with `?_storyblok=...` in the
// query string. With hash routing, the query can end up in the hash instead
// (e.g. /#/about?_storyblok=1 during local testing), so check both locations.
export function isStoryblokEditor(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.search.includes('_storyblok') ||
    window.location.hash.includes('_storyblok')
}
