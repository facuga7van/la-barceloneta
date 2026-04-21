import type { AnyBlok, PageStory, SiteSettings } from './types'

const isEditor = typeof window !== 'undefined' &&
  window.location.search.includes('_storyblok')

// Flip to true once the Storyblok space has canonical content matching our schema.
// Until then, editor mode renders the static JSON so the block system is visible
// for visual editing while space content is still being migrated.
const EDITOR_USES_SPACE_CONTENT = false

const KNOWN_COMPONENTS = new Set([
  'heroBlock', 'imageCarouselBlock', 'comoGanoBlock', 'fraccionesBlock', 'proyectoBlock',
  'rentaCardsBlock', 'galeriaBlock', 'avanceObraBlock', 'ubicacionBlock', 'bannerBlock',
  'neuquenBlock', 'comoInvertirBlock', 'testimonialsBlock', 'pressBlock', 'contactFormBlock',
  'introBlock', 'historiaBlock', 'valoresBlock', 'equipoBlock', 'footerBlock',
])

function hasKnownComponents(body?: AnyBlok[]): boolean {
  return Array.isArray(body) && body.some(b => KNOWN_COMPONENTS.has(b.component))
}

async function loadStaticPage(slug: string): Promise<PageStory> {
  const mod = await import(`../../content/${slug}.json`)
  return mod.default as PageStory
}

async function loadStaticSettings(): Promise<SiteSettings> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — file is generated at build time by fetch-content script
  const mod = await import('../../content/settings.json')
  return mod.default as SiteSettings
}

/**
 * In production: pre-built static JSON.
 * In editor mode: tries the Storyblok draft API, but falls back to static JSON if
 * the space story is missing or still has only default components (teaser/grid).
 * This keeps the editor usable while the space is being populated.
 */
export async function getPageContent(slug: string): Promise<PageStory> {
  if (isEditor && EDITOR_USES_SPACE_CONTENT) {
    try {
      const { getStoryblokApi } = await import('@storyblok/react')
      const storyblokApi = getStoryblokApi()
      const { data } = await storyblokApi.get(`cdn/stories/${slug}`, { version: 'draft' })
      const story = data.story as PageStory
      if (hasKnownComponents(story.content.body)) return story
      console.warn(`[Storyblok] Draft "${slug}" has no known components, using static JSON.`)
      return loadStaticPage(slug)
    } catch (err) {
      console.warn(`[Storyblok] Draft "${slug}" unavailable, using static JSON.`, err)
      return loadStaticPage(slug)
    }
  }
  return loadStaticPage(slug)
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isEditor && EDITOR_USES_SPACE_CONTENT) {
    try {
      const { getStoryblokApi } = await import('@storyblok/react')
      const storyblokApi = getStoryblokApi()
      const { data } = await storyblokApi.get('cdn/stories/site-settings', { version: 'draft' })
      return data.story.content as SiteSettings
    } catch (err) {
      console.warn('[Storyblok] Draft site-settings unavailable, using static JSON.', err)
      return loadStaticSettings()
    }
  }
  return loadStaticSettings()
}
