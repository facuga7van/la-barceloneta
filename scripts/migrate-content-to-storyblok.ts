/**
 * Uploads local static JSON (content/home.json, about.json, settings.json) to the
 * Storyblok space as stories, so the visual editor serves real `_editable`-tagged
 * content and the block system becomes live-editable.
 *
 * Idempotent: creates the story if missing, updates it if it already exists.
 * Runs against the space referenced by STORYBLOK_SPACE_ID in .env.local.
 *
 * Usage:
 *   npx tsx scripts/migrate-content-to-storyblok.ts --dry-run   # print plan, no writes
 *   npx tsx scripts/migrate-content-to-storyblok.ts             # perform migration
 *   npx tsx scripts/migrate-content-to-storyblok.ts --publish   # also publish stories
 */

import { config } from 'dotenv'
import { readFileSync } from 'fs'
import { resolve } from 'path'

config({ path: '.env.local' })

const TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN
const SPACE_ID = process.env.STORYBLOK_SPACE_ID

if (!TOKEN || !SPACE_ID) {
  console.error('Missing STORYBLOK_MANAGEMENT_TOKEN or STORYBLOK_SPACE_ID in .env.local')
  process.exit(1)
}

const DRY_RUN = process.argv.includes('--dry-run')
const PUBLISH = process.argv.includes('--publish')

const API = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`

async function api(path: string, method: string, body?: unknown) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: TOKEN!,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  const data = text ? JSON.parse(text) : {}
  if (!res.ok) {
    throw new Error(`${method} ${path} → ${res.status}: ${text}`)
  }
  return data
}

interface StoryPayload {
  name: string
  slug: string
  content: Record<string, unknown>
}

async function findStoryIdBySlug(slug: string): Promise<number | null> {
  const { stories } = await api(`/stories?with_slug=${encodeURIComponent(slug)}`, 'GET')
  const match = Array.isArray(stories) ? stories.find((s: { full_slug: string }) => s.full_slug === slug) : null
  return match ? match.id : null
}

async function upsertStory(payload: StoryPayload) {
  const existingId = await findStoryIdBySlug(payload.slug)

  if (DRY_RUN) {
    console.log(`  [dry] ${existingId ? 'UPDATE' : 'CREATE'} "${payload.slug}" (${payload.name}) — content.component: ${payload.content.component}`)
    return
  }

  if (existingId) {
    await api(`/stories/${existingId}`, 'PUT', {
      story: { name: payload.name, slug: payload.slug, content: payload.content },
      ...(PUBLISH && { publish: 1 }),
    })
    console.log(`  ✓ updated "${payload.slug}" (id ${existingId})`)
  } else {
    const result = await api('/stories', 'POST', {
      story: { name: payload.name, slug: payload.slug, content: payload.content },
      ...(PUBLISH && { publish: 1 }),
    })
    console.log(`  ✓ created "${payload.slug}" (id ${result.story?.id})`)
  }
}

function readJson<T>(relPath: string): T {
  const abs = resolve(process.cwd(), relPath)
  return JSON.parse(readFileSync(abs, 'utf-8')) as T
}

interface PageFile {
  name: string
  slug: string
  content: Record<string, unknown>
}

async function main() {
  console.log(`Migrating content to Storyblok space ${SPACE_ID}${DRY_RUN ? ' (dry run)' : ''}${PUBLISH ? ' (will publish)' : ''}\n`)

  const home = readJson<PageFile>('content/home.json')
  const about = readJson<PageFile>('content/about.json')
  const settings = readJson<Record<string, unknown>>('content/settings.json')

  console.log('Pages:')
  await upsertStory({ name: home.name, slug: home.slug, content: home.content })
  await upsertStory({ name: about.name, slug: about.slug, content: about.content })

  console.log('\nSite settings:')
  await upsertStory({
    name: 'Site Settings',
    slug: 'site-settings',
    content: { component: 'siteSettings', ...settings },
  })

  console.log('\n✓ Migration complete.')
  if (DRY_RUN) {
    console.log('\nThis was a dry run — no writes were sent. Re-run without --dry-run to apply.')
  } else {
    console.log('\nNext steps:')
    console.log('  1. Flip EDITOR_USES_SPACE_CONTENT = true in src/storyblok/client.ts')
    console.log('  2. Open the Storyblok visual editor — blocks should now have edit pencils')
  }
}

main().catch((err) => {
  console.error('Migration failed:', err.message)
  process.exit(1)
})
