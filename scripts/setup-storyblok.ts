/**
 * One-time setup script: creates all blok schemas in Storyblok via Management API.
 * Run: npx tsx scripts/setup-storyblok.ts
 *
 * Requires STORYBLOK_MANAGEMENT_TOKEN and STORYBLOK_SPACE_ID in .env.local
 */

import { config } from 'dotenv'
config({ path: '.env.local' })

const TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN
const SPACE_ID = process.env.STORYBLOK_SPACE_ID

if (!TOKEN || !SPACE_ID) {
  console.error('Missing STORYBLOK_MANAGEMENT_TOKEN or STORYBLOK_SPACE_ID in .env.local')
  process.exit(1)
}

const API = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`

// ── Helpers ──

async function api(path: string, method: string, body?: unknown) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: TOKEN!,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(`${method} ${path} → ${res.status}: ${JSON.stringify(data)}`)
  }
  return data
}

function text(pos: number, display_name?: string) {
  return { type: 'text' as const, pos, ...(display_name && { display_name }) }
}

function textarea(pos: number, display_name?: string) {
  return { type: 'textarea' as const, pos, ...(display_name && { display_name }) }
}

function number(pos: number, display_name?: string) {
  return { type: 'number' as const, pos, ...(display_name && { display_name }) }
}

function asset(pos: number, display_name?: string) {
  return { type: 'asset' as const, pos, filetypes: ['images'], ...(display_name && { display_name }) }
}

function assetAny(pos: number, display_name?: string) {
  return { type: 'asset' as const, pos, ...(display_name && { display_name }) }
}

function bloks(pos: number, whitelist: string[], display_name?: string) {
  return {
    type: 'bloks' as const,
    pos,
    restrict_type: 'only' as const,
    restrict_components: true,
    component_whitelist: whitelist,
    ...(display_name && { display_name }),
  }
}

interface ComponentDef {
  name: string
  display_name: string
  is_root?: boolean
  is_nestable?: boolean
  schema: Record<string, unknown>
}

const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

let componentsCache: { id: number; name: string }[] | null = null

async function listComponents(): Promise<{ id: number; name: string }[]> {
  if (componentsCache) return componentsCache
  const { components } = await api('/components', 'GET')
  componentsCache = components as { id: number; name: string }[]
  return componentsCache
}

async function createComponent(def: ComponentDef, retries = 2): Promise<any> {
  try {
    const existing = (await listComponents()).find(c => c.name === def.name)
    if (existing) {
      const result = await api(`/components/${existing.id}`, 'PUT', { component: { ...def, id: existing.id } })
      console.log(`  ↻ ${def.name} (updated)`)
      return result
    }
    const result = await api('/components', 'POST', { component: def })
    console.log(`  ✓ ${def.name} (created)`)
    componentsCache = null // invalidate so subsequent upserts see the new id
    return result
  } catch (err: any) {
    if (err.message?.includes('429') && retries > 0) {
      await delay(1500)
      return createComponent(def, retries - 1)
    }
    console.error(`  ✗ ${def.name}: ${err.message}`)
  }
}

// ── Component Definitions ──

// Phase 1: Nested sub-blocks (no dependencies)
const nestedBlocks: ComponentDef[] = [
  {
    name: 'carouselImage',
    display_name: 'Carousel Image',
    is_nestable: true,
    schema: {
      image: asset(0, 'Image'),
      alt: text(1, 'Alt Text'),
    },
  },
  {
    name: 'tipologia',
    display_name: 'Tipología',
    is_nestable: true,
    schema: {
      name: text(0, 'Name'),
      base_price: number(1, 'Base Price (USD)'),
      image: asset(2, 'Image'),
    },
  },
  {
    name: 'featureItem',
    display_name: 'Feature Item',
    is_nestable: true,
    schema: {
      text: text(0, 'Text'),
    },
  },
  {
    name: 'rentaCard',
    display_name: 'Renta Card',
    is_nestable: true,
    schema: {
      metric: text(0, 'Metric'),
      period: text(1, 'Period'),
      title: text(2, 'Title'),
      subtitle: text(3, 'Subtitle'),
      detail: text(4, 'Detail'),
      bg_color: text(5, 'Background Color'),
    },
  },
  {
    name: 'galeriaTab',
    display_name: 'Gallery Tab',
    is_nestable: true,
    schema: {
      label: text(0, 'Label'),
      description: text(1, 'Description'),
      image: asset(2, 'Image'),
    },
  },
  {
    name: 'obraStep',
    display_name: 'Construction Step',
    is_nestable: true,
    schema: {
      date: text(0, 'Date'),
      percentage: number(1, 'Percentage'),
      label: text(2, 'Label'),
      description: text(3, 'Description'),
    },
  },
  {
    name: 'investStep',
    display_name: 'Investment Step',
    is_nestable: true,
    schema: {
      number: text(0, 'Step Number'),
      title: text(1, 'Title'),
      description: textarea(2, 'Description'),
    },
  },
  {
    name: 'testimonial',
    display_name: 'Testimonial',
    is_nestable: true,
    schema: {
      name: text(0, 'Name'),
      subtitle: text(1, 'Subtitle'),
      quote: textarea(2, 'Quote'),
    },
  },
  {
    name: 'pressArticle',
    display_name: 'Press Article',
    is_nestable: true,
    schema: {
      media_name: text(0, 'Media Name'),
      description: text(1, 'Description'),
      image: asset(2, 'Image'),
      link: text(3, 'Link URL'),
    },
  },
  {
    name: 'valor',
    display_name: 'Value',
    is_nestable: true,
    schema: {
      name: text(0, 'Name'),
      description: text(1, 'Description'),
      icon: text(2, 'Icon'),
    },
  },
  {
    name: 'teamMember',
    display_name: 'Team Member',
    is_nestable: true,
    schema: {
      name: text(0, 'Name'),
      role: text(1, 'Role'),
      photo: asset(2, 'Photo'),
      linkedin: text(3, 'LinkedIn URL'),
    },
  },
  {
    name: 'menuLink',
    display_name: 'Menu Link',
    is_nestable: true,
    schema: {
      label: text(0, 'Label'),
      anchor: text(1, 'Anchor ID'),
    },
  },
  {
    name: 'menuCard',
    display_name: 'Menu Card',
    is_nestable: true,
    schema: {
      label: text(0, 'Label'),
      target: text(1, 'Target (URL, /route, or anchor)'),
      bg_color: text(2, 'Background Color (hex)'),
    },
  },
  {
    name: 'statItem',
    display_name: 'Stat Item',
    is_nestable: true,
    schema: {
      value: text(0, 'Value'),
      label: text(1, 'Label'),
    },
  },
]

// Phase 2: Top-level section blocks (depend on nested blocks)
const sectionBlocks: ComponentDef[] = [
  {
    name: 'heroBlock',
    display_name: 'Hero',
    is_nestable: true,
    schema: {
      headline_line1: text(0, 'Headline Line 1'),
      headline_line2: text(1, 'Headline Line 2'),
      subtitle: text(2, 'Subtitle'),
      cta_text: text(3, 'CTA Text'),
      cta_link: text(4, 'CTA Link'),
      background_video: assetAny(5, 'Background Video'),
      background_image: asset(6, 'Background Image'),
    },
  },
  {
    name: 'imageCarouselBlock',
    display_name: 'Image Carousel',
    is_nestable: true,
    schema: {
      images: bloks(0, ['carouselImage'], 'Images'),
      scroll_speed: number(1, 'Scroll Speed'),
    },
  },
  {
    name: 'comoGanoBlock',
    display_name: '¿Cómo gano?',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      description: textarea(1, 'Description'),
    },
  },
  {
    name: 'fraccionesBlock',
    display_name: 'Fracciones',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      description: textarea(1, 'Description'),
      tipologias: bloks(2, ['tipologia'], 'Tipologías'),
      renta_espera_pct: number(3, 'Renta Espera %'),
      renta_hotelera_pct: number(4, 'Renta Hotelera %'),
      renta_asegurada_pct: number(5, 'Renta Asegurada %'),
      disclaimer: textarea(6, 'Disclaimer'),
    },
  },
  {
    name: 'proyectoBlock',
    display_name: 'El Proyecto',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      price_label: text(1, 'Price Label'),
      price: text(2, 'Price'),
      features: bloks(3, ['featureItem'], 'Features'),
      delivery_label: text(4, 'Delivery Label'),
      delivery_date: text(5, 'Delivery Date'),
      location_name: text(6, 'Location Name'),
      location_city: text(7, 'Location City'),
      background_image: asset(8, 'Background Image'),
      display_line1: text(9, 'Display Line 1'),
      display_line2: text(10, 'Display Line 2'),
      section_title: text(11, 'Section Title'),
      section_description: textarea(12, 'Section Description'),
      section_image: asset(13, 'Section Image'),
    },
  },
  {
    name: 'rentaCardsBlock',
    display_name: 'Renta Cards',
    is_nestable: true,
    schema: {
      cards: bloks(0, ['rentaCard'], 'Cards'),
    },
  },
  {
    name: 'galeriaBlock',
    display_name: 'Galería',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      subtitle: text(1, 'Subtitle'),
      tabs: bloks(2, ['galeriaTab'], 'Tabs'),
    },
  },
  {
    name: 'avanceObraBlock',
    display_name: 'Avance de Obra',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      subtitle: text(1, 'Subtitle'),
      active_step: number(2, 'Active Step'),
      steps: bloks(3, ['obraStep'], 'Steps'),
      image: asset(4, 'Image'),
    },
  },
  {
    name: 'ubicacionBlock',
    display_name: 'Ubicación',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      subtitle: text(1, 'Subtitle'),
      address: textarea(2, 'Address'),
      map_coordinates: text(3, 'Map Coordinates'),
      image: asset(4, 'Map Image'),
    },
  },
  {
    name: 'bannerBlock',
    display_name: 'Banner',
    is_nestable: true,
    schema: {
      image: asset(0, 'Image'),
      overlay_text: text(1, 'Overlay Text'),
      link: text(2, 'Link URL'),
    },
  },
  {
    name: 'neuquenBlock',
    display_name: 'Neuquén',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      project_name: text(1, 'Project Name'),
      features: bloks(2, ['featureItem'], 'Features'),
      image: asset(3, 'Image'),
      logo: asset(4, 'Logo'),
      display_line1: text(5, 'Display Line 1'),
      display_line2: text(6, 'Display Line 2'),
      delivery_label: text(7, 'Delivery Label'),
      delivery_date: text(8, 'Delivery Date'),
      location_label: text(9, 'Location Label'),
      location_value: text(10, 'Location Value'),
      expansion_title: text(11, 'Expansion Title'),
      expansion_description: textarea(12, 'Expansion Description'),
      expansion_image: asset(13, 'Expansion Image'),
    },
  },
  {
    name: 'comoInvertirBlock',
    display_name: '¿Cómo invertir?',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      intro_subtitle: text(1, 'Intro Subtitle'),
      steps: bloks(2, ['investStep'], 'Steps'),
    },
  },
  {
    name: 'testimonialsBlock',
    display_name: 'Testimonios',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      description: textarea(1, 'Description'),
      testimonials: bloks(2, ['testimonial'], 'Testimonials'),
    },
  },
  {
    name: 'pressBlock',
    display_name: 'Prensa',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      description: textarea(1, 'Description'),
      articles: bloks(2, ['pressArticle'], 'Articles'),
    },
  },
  {
    name: 'contactFormBlock',
    display_name: 'Contact Form',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      webhook_url: text(1, 'Webhook URL'),
    },
  },
  {
    name: 'introBlock',
    display_name: 'Intro (About)',
    is_nestable: true,
    schema: {
      logo: asset(0, 'Logo'),
      description: textarea(1, 'Description'),
      external_link_text: text(2, 'External Link Text'),
      external_link_url: text(3, 'External Link URL'),
      hero_image: asset(4, 'Hero Image (right side)'),
    },
  },
  {
    name: 'historiaBlock',
    display_name: 'Historia (About)',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      paragraphs: textarea(1, 'Paragraphs (one per line)'),
      image: asset(2, 'Image (left)'),
      image_secondary: asset(3, 'Image (right)'),
      stats_heading: text(4, 'Stats Heading'),
      stats: bloks(5, ['statItem'], 'Stats'),
    },
  },
  {
    name: 'valoresBlock',
    display_name: 'Valores (About)',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      description: textarea(1, 'Description'),
      valores: bloks(2, ['valor'], 'Values'),
    },
  },
  {
    name: 'equipoBlock',
    display_name: 'Equipo (About)',
    is_nestable: true,
    schema: {
      title: text(0, 'Title'),
      members: bloks(1, ['teamMember'], 'Members'),
    },
  },
  {
    name: 'footerBlock',
    display_name: 'Footer',
    is_nestable: true,
    schema: {
      logo: asset(0, 'Logo'),
      tagline: textarea(1, 'Tagline'),
      copyright_text: text(2, 'Copyright Text'),
      social_facebook: text(3, 'Facebook URL'),
      social_instagram: text(4, 'Instagram URL'),
      social_linkedin: text(5, 'LinkedIn URL'),
      sections_links: bloks(6, ['menuLink'], 'Sections Links'),
      info_links: bloks(7, ['menuLink'], 'Info Links'),
    },
  },
]

// Phase 3: Content types (root)
const allBlockNames = sectionBlocks.map(b => b.name)

const contentTypes: ComponentDef[] = [
  {
    name: 'page',
    display_name: 'Page',
    is_root: true,
    schema: {
      body: bloks(0, allBlockNames, 'Body'),
    },
  },
  {
    name: 'siteSettings',
    display_name: 'Site Settings',
    is_root: true,
    schema: {
      logo: asset(0, 'Logo'),
      logo_alt: asset(1, 'Logo Alt'),
      whatsapp_number: text(2, 'WhatsApp Number'),
      social_facebook: text(3, 'Facebook URL'),
      social_instagram: text(4, 'Instagram URL'),
      social_linkedin: text(5, 'LinkedIn URL'),
      menu_links: bloks(6, ['menuLink'], 'Menu Links'),
      menu_cards: bloks(7, ['menuCard'], 'Menu Cards'),
    },
  },
]

// ── Main ──

async function main() {
  console.log(`Setting up Storyblok space ${SPACE_ID}...\n`)

  console.log('Phase 1: Creating nested sub-blocks...')
  for (const def of nestedBlocks) {
    await createComponent(def)
    await delay(200)
  }

  console.log('\nPhase 2: Creating section blocks...')
  for (const def of sectionBlocks) {
    await createComponent(def)
    await delay(200)
  }

  console.log('\nPhase 3: Creating content types...')
  for (const def of contentTypes) {
    await createComponent(def)
    await delay(200)
  }

  console.log('\n✓ Storyblok setup complete!')
  console.log('\nNext steps:')
  console.log('  1. Go to Storyblok dashboard → Content')
  console.log('  2. Create "Home" story (content type: page, slug: home)')
  console.log('  3. Create "About" story (content type: page, slug: about)')
  console.log('  4. Populate content from content/home.json and content/about.json')
}

main().catch((err) => {
  console.error('Setup failed:', err.message)
  process.exit(1)
})
