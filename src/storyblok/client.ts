import type { PageStory, SiteSettings } from './types'

const isEditor = typeof window !== 'undefined' &&
  window.location.search.includes('_storyblok')

/**
 * In production: import pre-built static JSON.
 * In editor mode: fetch draft content from Storyblok API via the bridge.
 * During development (no Storyblok): fall back to static JSON.
 */
export async function getPageContent(slug: string): Promise<PageStory> {
  if (isEditor) {
    // Editor mode — content comes via Storyblok bridge, handled by @storyblok/react
    // This path is only used for initial load; live updates come via the bridge
    const { getStoryblokApi } = await import('@storyblok/react')
    const storyblokApi = getStoryblokApi()
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: 'draft',
    })
    return data.story as PageStory
  }

  // Production + development: static JSON
  const mod = await import(`../../content/${slug}.json`)
  return mod.default as PageStory
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isEditor) {
    const { getStoryblokApi } = await import('@storyblok/react')
    const storyblokApi = getStoryblokApi()
    const { data } = await storyblokApi.get('cdn/stories/site-settings', {
      version: 'draft',
    })
    return data.story.content as SiteSettings
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — file is generated at build time by fetch-content script
  const mod = await import('../../content/settings.json')
  return mod.default as SiteSettings
}
