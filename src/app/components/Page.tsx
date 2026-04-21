import { useState, useEffect } from 'react'
import { useStoryblokState } from '@storyblok/react'
import Layout from '../../components/Layout'
import BlockResolver from '../../blocks/BlockResolver'
import { getPageContent, getSiteSettings } from '../../storyblok/client'
import type { PageStory, SiteSettings } from '../../storyblok/types'

interface PageProps {
  slug: string
  menuThumbnails?: string[]
}

export default function Page({ slug, menuThumbnails }: PageProps) {
  const [story, setStory] = useState<PageStory | null>(null)
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    getPageContent(slug)
      .then(setStory)
      .catch((err) => {
        console.error(`Failed to load page "${slug}":`, err)
        setError(`No se pudo cargar la página "${slug}"`)
      })
    getSiteSettings()
      .then(setSettings)
      .catch((err) => console.error('Failed to load site settings:', err))
  }, [slug])

  // TODO: useStoryblokState expects ISbStoryData — cast needed until PageStory extends it
  const liveStory = useStoryblokState(story as any)
  const activeStory = (liveStory ?? story) as PageStory | null

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>
  }

  if (!activeStory || !settings) {
    return <div className="min-h-screen" />
  }

  return (
    <Layout menuThumbnails={menuThumbnails} settings={settings} dataName={activeStory.name}>
      <main id="main" className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Main" tabIndex={-1}>
        <BlockResolver bloks={activeStory.content.body} />
      </main>
    </Layout>
  )
}
