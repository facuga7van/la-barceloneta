import StoryblokClient from 'storyblok-js-client'
import { writeFileSync, mkdirSync } from 'fs'

const token = process.env.STORYBLOK_TOKEN || process.env.VITE_STORYBLOK_TOKEN

if (!token) {
  console.warn('No STORYBLOK_TOKEN found. Using existing content/ files.')
  process.exit(0)
}

const client = new StoryblokClient({ accessToken: token })

async function fetchAll() {
  mkdirSync('content', { recursive: true })

  // Fetch all pages
  const { data: { stories } } = await client.get('cdn/stories', {
    version: 'published',
    content_type: 'page',
  })

  for (const story of stories) {
    const filename = story.slug === 'home' ? 'home' : story.slug
    writeFileSync(
      `content/${filename}.json`,
      JSON.stringify(story, null, 2)
    )
    console.log(`Wrote content/${filename}.json`)
  }

  // Fetch site settings
  try {
    const { data: { story: settings } } = await client.get(
      'cdn/stories/site-settings',
      { version: 'published' }
    )
    writeFileSync('content/settings.json', JSON.stringify(settings.content, null, 2))
    console.log('Wrote content/settings.json')
  } catch {
    console.warn('site-settings story not found, skipping')
  }
}

fetchAll().catch((err) => {
  console.error('Failed to fetch content:', err.message)
  process.exit(1)
})
