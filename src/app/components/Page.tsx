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

  useEffect(() => {
    window.scrollTo(0, 0)
    getPageContent(slug).then(setStory)
    getSiteSettings().then(setSettings)
  }, [slug])

  // Enable Storyblok bridge for live editing
  const liveStory = useStoryblokState(story as any)
  const activeStory = (liveStory ?? story) as PageStory | null

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
