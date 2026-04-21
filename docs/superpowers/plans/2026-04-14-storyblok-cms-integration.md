# Storyblok CMS Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the entire La Barceloneta site editable via Storyblok visual CMS while keeping it pixel-perfect identical.

**Architecture:** Build-time fetch from Storyblok Content Delivery API writes static JSON. React block components consume JSON via a registry. `@storyblok/react` bridge enables real-time preview in Storyblok's visual editor. Production mode has zero runtime dependency on Storyblok.

**Tech Stack:** React 18, Vite 6, TypeScript, @storyblok/react, storyblok-js-client, Tailwind CSS v4, GSAP

**Spec:** `docs/superpowers/specs/2026-04-14-storyblok-cms-integration-design.md`

---

## File Map

### New files to create

```
src/storyblok/
  client.ts              — Storyblok API client (draft vs published)
  components.ts          — Registry mapping blok type names → React components
  types.ts               — TypeScript interfaces for all blok types
  image.ts               — Image helper (local dev vs Storyblok CDN)
  provider.tsx           — StoryblokProvider wrapper for App

src/blocks/
  BlockResolver.tsx      — Renders a blok array by looking up components
  HeroBlock.tsx          — Hero section
  ImageCarouselBlock.tsx — Auto-scrolling image carousel
  ComoGanoBlock.tsx      — "Cómo gano" section
  FraccionesBlock.tsx    — Fraction selector with interactive calculator
  ProyectoBlock.tsx      — "El proyecto" dark card
  RentaCardsBlock.tsx    — 3 expandable renta cards
  GaleriaBlock.tsx       — Tabbed amenities gallery
  AvanceObraBlock.tsx    — Construction timeline
  UbicacionBlock.tsx     — Location map + address
  BannerBlock.tsx        — Full-width image banner with overlay
  NeuquenBlock.tsx       — Neuquén expansion section
  ComoInvertirBlock.tsx  — 5-step investment guide (mobile + sticky desktop)
  TestimonialsBlock.tsx  — Infinite scrolling testimonial carousel
  PressBlock.tsx         — Press articles grid
  ContactFormBlock.tsx   — Contact form with webhook
  IntroBlock.tsx         — About: Grupo Marting intro
  HistoriaBlock.tsx      — About: company history
  ValoresBlock.tsx       — About: company values
  EquipoBlock.tsx        — About: team members
  FooterBlock.tsx        — Footer with nav, social, copyright

src/app/components/
  Page.tsx               — Generic page: fetches content, renders blocks

scripts/
  fetch-content.ts       — Build-time Storyblok fetcher → writes content/*.json

content/                 — (gitignored) Static JSON files
  home.json
  about.json
  settings.json
```

### Files to modify

```
package.json                   — Add @storyblok/react, storyblok-js-client
.gitignore                     — Add content/ directory
vite.config.ts                 — base '/' (for Vercel), env var passthrough
tsconfig.json                  — Include scripts/ in compilation
src/main.tsx                   — Wrap App with StoryblokProvider
src/app/routes.tsx             — Point routes to Page component
src/app/components/HomePage.tsx — Replace with Page slug="home"
src/app/components/AboutPage.tsx — Replace with Page slug="about"
```

### Files to delete (after all blocks migrated)

```
src/imports/Home.tsx           — Replaced by blocks + Page renderer
src/imports/About.tsx          — Replaced by blocks + Page renderer
```

### Files that do NOT change

```
src/components/Layout.tsx       — Wrapper (modified only for settings data)
src/components/HeroSection.tsx  — Video hero (absorbed into HeroBlock)
src/hooks/*                     — All GSAP hooks untouched
src/lib/gsap-setup.ts          — GSAP config untouched
src/imports/svg-*.ts            — SVG paths untouched
src/styles/*                    — All styles untouched
public/*                        — All assets stay (used as fallback)
```

---

## Task 1: Foundation — Dependencies, Types, and Infrastructure

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`
- Create: `src/storyblok/types.ts`
- Create: `src/storyblok/image.ts`
- Create: `src/storyblok/client.ts`
- Create: `src/storyblok/components.ts`
- Create: `src/storyblok/provider.tsx`
- Create: `src/blocks/BlockResolver.tsx`

- [ ] **Step 1: Install dependencies**

```bash
npm install @storyblok/react storyblok-js-client
```

- [ ] **Step 2: Add content/ to .gitignore**

Append to `.gitignore`:

```
content/
```

- [ ] **Step 3: Create TypeScript types for all bloks**

Create `src/storyblok/types.ts`. This defines the shape of every blok. All blok interfaces extend `SbBlokData` from `@storyblok/react`.

```ts
import type { SbBlokData } from '@storyblok/react'

// ── Asset ──
export interface StoryblokAsset {
  filename: string
  alt?: string
  title?: string
}

// ── Nested bloks ──

export interface CarouselImage extends SbBlokData {
  component: 'carouselImage'
  image: StoryblokAsset
  alt: string
}

export interface Tipologia extends SbBlokData {
  component: 'tipologia'
  name: string
  base_price: number
  image: StoryblokAsset
}

export interface FeatureItem extends SbBlokData {
  component: 'featureItem'
  text: string
}

export interface RentaCard extends SbBlokData {
  component: 'rentaCard'
  metric: string
  period: string
  title: string
  subtitle: string
  detail: string
  bg_color: string
}

export interface GaleriaTab extends SbBlokData {
  component: 'galeriaTab'
  label: string
  description: string
  image: StoryblokAsset
}

export interface ObraStep extends SbBlokData {
  component: 'obraStep'
  date: string
  percentage: number
  label: string
  description: string
}

export interface InvestStep extends SbBlokData {
  component: 'investStep'
  number: string
  title: string
  description: string
}

export interface Testimonial extends SbBlokData {
  component: 'testimonial'
  name: string
  subtitle: string
  quote: string
}

export interface PressArticle extends SbBlokData {
  component: 'pressArticle'
  media_name: string
  description: string
  image: StoryblokAsset
  link: string
}

export interface Valor extends SbBlokData {
  component: 'valor'
  name: string
  description: string
  icon: string
}

export interface TeamMember extends SbBlokData {
  component: 'teamMember'
  name: string
  role: string
  photo: StoryblokAsset
  linkedin: string
}

export interface MenuLink extends SbBlokData {
  component: 'menuLink'
  label: string
  anchor: string
}

export interface MenuCard extends SbBlokData {
  component: 'menuCard'
  label: string
  target: string
  bg_color: string
}

// ── Top-level bloks ──

export interface HeroBlok extends SbBlokData {
  component: 'heroBlock'
  headline_line1: string
  headline_line2: string
  subtitle: string
  cta_text: string
  cta_link: string
  background_video: StoryblokAsset
  background_image: StoryblokAsset
}

export interface ImageCarouselBlok extends SbBlokData {
  component: 'imageCarouselBlock'
  images: CarouselImage[]
  scroll_speed: number
}

export interface ComoGanoBlok extends SbBlokData {
  component: 'comoGanoBlock'
  title: string
  description: string
}

export interface FraccionesBlok extends SbBlokData {
  component: 'fraccionesBlock'
  title: string
  description: string
  tipologias: Tipologia[]
  renta_espera_pct: number
  renta_hotelera_pct: number
  renta_asegurada_pct: number
  disclaimer: string
}

export interface ProyectoBlok extends SbBlokData {
  component: 'proyectoBlock'
  title: string
  price_label: string
  price: string
  features: FeatureItem[]
  delivery_label: string
  delivery_date: string
  location_name: string
  location_city: string
  background_image: StoryblokAsset
}

export interface RentaCardsBlok extends SbBlokData {
  component: 'rentaCardsBlock'
  cards: RentaCard[]
}

export interface GaleriaBlok extends SbBlokData {
  component: 'galeriaBlock'
  title: string
  subtitle: string
  tabs: GaleriaTab[]
}

export interface AvanceObraBlok extends SbBlokData {
  component: 'avanceObraBlock'
  title: string
  subtitle: string
  active_step: number
  steps: ObraStep[]
  image: StoryblokAsset
}

export interface UbicacionBlok extends SbBlokData {
  component: 'ubicacionBlock'
  title: string
  subtitle: string
  address: string
  map_coordinates: string
  image: StoryblokAsset
}

export interface BannerBlok extends SbBlokData {
  component: 'bannerBlock'
  image: StoryblokAsset
  overlay_text: string
  link: string
}

export interface NeuquenBlok extends SbBlokData {
  component: 'neuquenBlock'
  title: string
  project_name: string
  features: FeatureItem[]
  image: StoryblokAsset
  logo: StoryblokAsset
}

export interface ComoInvertirBlok extends SbBlokData {
  component: 'comoInvertirBlock'
  title: string
  intro_subtitle: string
  steps: InvestStep[]
}

export interface TestimonialsBlok extends SbBlokData {
  component: 'testimonialsBlock'
  title: string
  description: string
  testimonials: Testimonial[]
}

export interface PressBlok extends SbBlokData {
  component: 'pressBlock'
  title: string
  description: string
  articles: PressArticle[]
}

export interface ContactFormBlok extends SbBlokData {
  component: 'contactFormBlock'
  title: string
  webhook_url: string
}

export interface IntroBlok extends SbBlokData {
  component: 'introBlock'
  logo: StoryblokAsset
  description: string
  external_link_text: string
  external_link_url: string
}

export interface HistoriaBlok extends SbBlokData {
  component: 'historiaBlock'
  title: string
  paragraphs: string[]
  image: StoryblokAsset
}

export interface ValoresBlok extends SbBlokData {
  component: 'valoresBlock'
  title: string
  valores: Valor[]
}

export interface EquipoBlok extends SbBlokData {
  component: 'equipoBlock'
  title: string
  members: TeamMember[]
}

export interface FooterBlok extends SbBlokData {
  component: 'footerBlock'
  logo: StoryblokAsset
  tagline: string
  copyright_text: string
  social_facebook: string
  social_instagram: string
  social_linkedin: string
  sections_links: MenuLink[]
  info_links: MenuLink[]
}

// ── Union of all top-level bloks ──
export type AnyBlok =
  | HeroBlok | ImageCarouselBlok | ComoGanoBlok | FraccionesBlok
  | ProyectoBlok | RentaCardsBlok | GaleriaBlok | AvanceObraBlok
  | UbicacionBlok | BannerBlok | NeuquenBlok | ComoInvertirBlok
  | TestimonialsBlok | PressBlok | ContactFormBlok | IntroBlok
  | HistoriaBlok | ValoresBlok | EquipoBlok | FooterBlok

// ── Page story ──
export interface PageStory {
  name: string
  slug: string
  content: {
    component: 'page'
    body: AnyBlok[]
  }
}

// ── Site settings ──
export interface SiteSettings {
  logo: StoryblokAsset
  logo_alt: StoryblokAsset
  whatsapp_number: string
  social_facebook: string
  social_instagram: string
  social_linkedin: string
  menu_links: MenuLink[]
  menu_cards: MenuCard[]
}
```

- [ ] **Step 4: Create image helper**

Create `src/storyblok/image.ts`:

```ts
import type { StoryblokAsset } from './types'

/**
 * Resolves an image source from a StoryblokAsset.
 * - Storyblok CDN URLs: appends transform suffix for responsive sizing
 * - Local paths (dev mode): returns as-is
 */
export function resolveImage(
  asset: StoryblokAsset | undefined,
  opts?: { width?: number; height?: number }
): string {
  if (!asset?.filename) return ''

  // Local dev images (start with / or relative path)
  if (!asset.filename.startsWith('https://a.storyblok.com')) {
    return asset.filename
  }

  // Storyblok CDN: append transforms
  const w = opts?.width ?? 0
  const h = opts?.height ?? 0
  return `${asset.filename}/m/${w}x${h}`
}

/**
 * Generate srcSet for responsive images from Storyblok CDN.
 * Falls back to single src for local images.
 */
export function responsiveSrcSet(
  asset: StoryblokAsset | undefined,
  widths: number[] = [400, 800, 1200]
): string {
  if (!asset?.filename) return ''
  if (!asset.filename.startsWith('https://a.storyblok.com')) return ''

  return widths
    .map((w) => `${asset.filename}/m/${w}x0 ${w}w`)
    .join(', ')
}
```

- [ ] **Step 5: Create Storyblok client**

Create `src/storyblok/client.ts`:

```ts
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
    const { storyblokApi } = await import('@storyblok/react')
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
    const { storyblokApi } = await import('@storyblok/react')
    const { data } = await storyblokApi.get('cdn/stories/site-settings', {
      version: 'draft',
    })
    return data.story.content as SiteSettings
  }

  const mod = await import('../../content/settings.json')
  return mod.default as SiteSettings
}
```

- [ ] **Step 6: Create component registry**

Create `src/storyblok/components.ts`:

```ts
// This file maps Storyblok blok component names to React components.
// Each block is lazy-loaded to preserve code splitting.
import { lazy } from 'react'

export const blockComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  heroBlock: lazy(() => import('../blocks/HeroBlock')),
  imageCarouselBlock: lazy(() => import('../blocks/ImageCarouselBlock')),
  comoGanoBlock: lazy(() => import('../blocks/ComoGanoBlock')),
  fraccionesBlock: lazy(() => import('../blocks/FraccionesBlock')),
  proyectoBlock: lazy(() => import('../blocks/ProyectoBlock')),
  rentaCardsBlock: lazy(() => import('../blocks/RentaCardsBlock')),
  galeriaBlock: lazy(() => import('../blocks/GaleriaBlock')),
  avanceObraBlock: lazy(() => import('../blocks/AvanceObraBlock')),
  ubicacionBlock: lazy(() => import('../blocks/UbicacionBlock')),
  bannerBlock: lazy(() => import('../blocks/BannerBlock')),
  neuquenBlock: lazy(() => import('../blocks/NeuquenBlock')),
  comoInvertirBlock: lazy(() => import('../blocks/ComoInvertirBlock')),
  testimonialsBlock: lazy(() => import('../blocks/TestimonialsBlock')),
  pressBlock: lazy(() => import('../blocks/PressBlock')),
  contactFormBlock: lazy(() => import('../blocks/ContactFormBlock')),
  introBlock: lazy(() => import('../blocks/IntroBlock')),
  historiaBlock: lazy(() => import('../blocks/HistoriaBlock')),
  valoresBlock: lazy(() => import('../blocks/ValoresBlock')),
  equipoBlock: lazy(() => import('../blocks/EquipoBlock')),
  footerBlock: lazy(() => import('../blocks/FooterBlock')),
}
```

- [ ] **Step 7: Create BlockResolver component**

Create `src/blocks/BlockResolver.tsx`:

```tsx
import { Suspense } from 'react'
import { storyblokEditable } from '@storyblok/react'
import { blockComponents } from '../storyblok/components'
import type { AnyBlok } from '../storyblok/types'

interface BlockResolverProps {
  bloks: AnyBlok[]
}

export default function BlockResolver({ bloks }: BlockResolverProps) {
  return (
    <>
      {bloks.map((blok) => {
        const Component = blockComponents[blok.component]
        if (!Component) {
          console.warn(`Unknown block type: ${blok.component}`)
          return null
        }
        return (
          <Suspense key={blok._uid} fallback={<div className="min-h-[200px]" />}>
            <Component blok={blok} {...storyblokEditable(blok)} />
          </Suspense>
        )
      })}
    </>
  )
}
```

- [ ] **Step 8: Create StoryblokProvider wrapper**

Create `src/storyblok/provider.tsx`:

```tsx
import { storyblokInit, apiPlugin } from '@storyblok/react'

// Initialize Storyblok — must run before any component renders.
// In production, the token is only needed for editor preview.
// In dev without Storyblok, this still initializes the bridge hooks (they just no-op).
storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN || 'placeholder-for-dev',
  use: [apiPlugin],
  bridge: typeof window !== 'undefined' && window.location.search.includes('_storyblok'),
})
```

- [ ] **Step 9: Wire provider into main.tsx**

Modify `src/main.tsx` — add the Storyblok init import at the top (before App):

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./storyblok/provider";  // ← ADD: initialize Storyblok before anything renders
import "./styles/index.css";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 10: Run typecheck**

```bash
npx tsc --noEmit
```

Expected: Errors about missing block component files (they don't exist yet). The `src/storyblok/` files themselves should have zero type errors. Ignore errors about missing `../blocks/*` imports in `components.ts` — those will be created in subsequent tasks.

- [ ] **Step 11: Commit**

```bash
git add src/storyblok/ src/blocks/BlockResolver.tsx src/main.tsx package.json package-lock.json .gitignore
git commit -m "feat: add Storyblok foundation — types, client, registry, block resolver"
```

---

## Task 2: Extract Home Page Content to Static JSON

**Files:**
- Create: `content/home.json`

**Context:** Read `src/imports/Home.tsx` (3405 lines) and extract ALL hardcoded content into a JSON file matching the Storyblok blok structure. The JSON must follow the `PageStory` type from `src/storyblok/types.ts`.

**Image paths:** For each image imported as `figma:asset/FILENAME.webp`, the JSON should store `{ "filename": "/la-barceloneta/images/FILENAME.webp" }`. The Vite base path is `/la-barceloneta/`.

- [ ] **Step 1: Create content directory**

```bash
mkdir -p content
```

- [ ] **Step 2: Create content/home.json**

Read `src/imports/Home.tsx` thoroughly. Extract all content into this structure. Every text string, every data array, every image path must be captured. Key source locations:

| Blok | Source in Home.tsx | What to extract |
|------|-------------------|----------------|
| heroBlock | `HeroSection.tsx:25-60` (imported component) | headline lines, subtitle, CTA text, CTA link, background assets |
| imageCarouselBlock | `Home.tsx:37-46` (GRID_IMAGES) | images array with src→filename, alt |
| comoGanoBlock | `Home.tsx:~228-245` (Banner function and ComoGano) | title "¿Cómo gano con este modelo?", description paragraph |
| rentaCardsBlock | `RentaCards.tsx:3-28` (CARD_DATA) | 3 cards with metric, period, title, subtitle, detail, bgColor |
| fraccionesBlock | `Home.tsx:~270-290` (StrategySection) + interactive calculator | title, description, tipologias, renta percentages, disclaimer |
| proyectoBlock | `Home.tsx:~704-900` (ValueSection) | title, price, features, delivery date, location, bg image |
| galeriaBlock | `Home.tsx:1295-1301` (GALLERY_TABS) | 5 tabs with label, desc, image |
| avanceObraBlock | `ConstructionTimeline.tsx:3-10` (STEPS) + active_step | 6 steps, active_step=2, title, subtitle, image |
| ubicacionBlock | `Home.tsx:~1830-1870` | title, subtitle, address, image |
| bannerBlock | `Home.tsx:1898-1916` (Banner1) | image, overlay "Próximamente" |
| neuquenBlock | `Home.tsx:1918-2060` | title, project_name, features, image, logo |
| comoInvertirBlock | `Home.tsx:3008-3033` (COMO_INVERTIR_STEPS) | title, 5 steps |
| testimonialsBlock | `Home.tsx:2304-2340` (TESTIMONIALS_DATA) | 7 testimonials |
| pressBlock | `PressSection.tsx:6-127` | title, description, 3 articles |
| contactFormBlock | `ContactForm.tsx:9-49` | title, webhook URL |
| footerBlock | `Home.tsx:3106-3341` (Container13) | logo, tagline, social links, nav links |

The JSON structure must be:

```json
{
  "name": "Home",
  "slug": "home",
  "content": {
    "component": "page",
    "body": [
      {
        "_uid": "hero-1",
        "component": "heroBlock",
        "headline_line1": "No vendemos metros",
        "headline_line2": "____ CREAMOS RENTABILIDAD",
        "subtitle": "El real estate volvió a ser negocio.",
        "cta_text": "Quiero invertir",
        "cta_link": "https://wa.me/5491173646541",
        "background_video": { "filename": "/la-barceloneta/videos/hero.mp4" },
        "background_image": { "filename": "" }
      },
      {
        "_uid": "carousel-1",
        "component": "imageCarouselBlock",
        "scroll_speed": 0.6,
        "images": [
          { "_uid": "ci-1", "component": "carouselImage", "image": { "filename": "/la-barceloneta/images/e7b02b83f7d79cd443a54c11301740ab75dd548e.webp" }, "alt": "Interior lounge" },
          "... (extract all 8 from GRID_IMAGES)"
        ]
      },
      "... (continue for ALL bloks in exact section order from Main1 function)"
    ]
  }
}
```

**CRITICAL:** The order of bloks in the `body` array MUST match the render order in `Main1()` at Home.tsx:3079-3103:
1. heroBlock
2. imageCarouselBlock
3. bannerBlock (the "Como gano" intro banner — `<Banner />` at line 3082)
4. comoGanoBlock
5. rentaCardsBlock
6. fraccionesBlock
7. proyectoBlock (ValueSection)
8. galeriaBlock + avanceObraBlock + ubicacionBlock (inside PersonalitySection)
9. bannerBlock (Neuquén "Próximamente" — Banner1)
10. neuquenBlock (PersonalitySection1)
11. comoInvertirBlock
12. testimonialsBlock
13. pressBlock
14. contactFormBlock
15. footerBlock

Extract every text value exactly as it appears in the source code. Do not paraphrase or modify any content.

- [ ] **Step 3: Verify JSON is valid**

```bash
node -e "JSON.parse(require('fs').readFileSync('content/home.json','utf8')); console.log('Valid JSON')"
```

Expected: `Valid JSON`

- [ ] **Step 4: Commit**

```bash
git add content/home.json
git commit -m "feat: extract Home page content to static JSON"
```

---

## Task 3: Extract About Page + Site Settings to Static JSON

**Files:**
- Create: `content/about.json`
- Create: `content/settings.json`

- [ ] **Step 1: Create content/about.json**

Read `src/imports/About.tsx` (1051 lines). Extract content following the same pattern as home.json.

Source locations in About.tsx:
- introBlock: lines 69-138 (LogoGm, Frame15, IntroSection)
- historiaBlock: lines 140-197 (Text, Title, StrategySection)
- valoresBlock: lines 304-796 (StrategySection2 — extensive, with values list)
- equipoBlock: lines 798-1037 (StrategySection3 — team members with photos)

The body array order matches the render order in the `About()` export at line 1039.

- [ ] **Step 2: Create content/settings.json**

Extract from `src/components/Layout.tsx:12-28` (MENU_LINKS, MENU_CARDS) and `Home.tsx:3197-3211` (social links):

```json
{
  "logo": { "filename": "/la-barceloneta/images/LB BS AS FEEL FREE - ROSA.svg" },
  "logo_alt": { "filename": "/la-barceloneta/images/LB LOGO.svg" },
  "whatsapp_number": "5491173646541",
  "social_facebook": "https://www.facebook.com/labarcelonetafeelfree",
  "social_instagram": "https://www.instagram.com/labarceloneta.bsas/",
  "social_linkedin": "https://www.linkedin.com/company/la-barceloneta-feel-free/",
  "menu_links": [
    { "_uid": "ml-1", "component": "menuLink", "label": "Inicio", "anchor": "inicio" },
    { "_uid": "ml-2", "component": "menuLink", "label": "¿Cómo gano?", "anchor": "como-gano" },
    { "_uid": "ml-3", "component": "menuLink", "label": "Elegí tu fracción", "anchor": "fracciones" },
    { "_uid": "ml-4", "component": "menuLink", "label": "El proyecto (Buenos Aires)", "anchor": "proyecto" },
    { "_uid": "ml-5", "component": "menuLink", "label": "Avance de obra", "anchor": "avance" },
    { "_uid": "ml-6", "component": "menuLink", "label": "El próximo capítulo (Neuquén)", "anchor": "neuquen" },
    { "_uid": "ml-7", "component": "menuLink", "label": "¿Cómo invertir?", "anchor": "como-invertir" },
    { "_uid": "ml-8", "component": "menuLink", "label": "Testimonios", "anchor": "testimonios" },
    { "_uid": "ml-9", "component": "menuLink", "label": "Prensa", "anchor": "prensa" }
  ],
  "menu_cards": [
    { "_uid": "mc-1", "component": "menuCard", "label": "Nosotros", "target": "/about", "bg_color": "#3d5a80" },
    { "_uid": "mc-2", "component": "menuCard", "label": "Agendá una reunión", "target": "contacto", "bg_color": "#5c7a99" },
    { "_uid": "mc-3", "component": "menuCard", "label": "Contactános", "target": "https://wa.me/5491173646541", "bg_color": "#f45f00" }
  ]
}
```

- [ ] **Step 3: Verify both JSON files**

```bash
node -e "JSON.parse(require('fs').readFileSync('content/about.json','utf8')); console.log('about.json OK')"
node -e "JSON.parse(require('fs').readFileSync('content/settings.json','utf8')); console.log('settings.json OK')"
```

- [ ] **Step 4: Commit**

```bash
git add content/
git commit -m "feat: extract About page and site settings to static JSON"
```

---

## Task 4: Migrate Simple Blocks — ComoGano, Banner, Ubicacion

**Files:**
- Create: `src/blocks/ComoGanoBlock.tsx`
- Create: `src/blocks/BannerBlock.tsx`
- Create: `src/blocks/UbicacionBlock.tsx`

These are the simplest blocks: just title + description + image with no interactivity. They establish the pattern for all other blocks.

- [ ] **Step 1: Create ComoGanoBlock**

Create `src/blocks/ComoGanoBlock.tsx`. Copy the JSX from `Home.tsx` Banner function (~lines 220-255) and ComoGano section. Replace hardcoded text with `blok.title` and `blok.description`:

```tsx
import { storyblokEditable } from '@storyblok/react'
import type { ComoGanoBlok } from '../storyblok/types'

interface Props {
  blok: ComoGanoBlok
}

export default function ComoGanoBlock({ blok }: Props) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="como-gano"
      className="relative shrink-0 w-full"
      data-name="Como gano"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
          <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">{blok.title}</h2>
        </div>
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full lg:w-[530px]">
          <p className="leading-[1.4] whitespace-pre-wrap">{blok.description}</p>
        </div>
      </div>
    </section>
  )
}
```

**Pattern:** Every block component follows this structure:
1. Import `storyblokEditable` and the blok type
2. Destructure `blok` from props
3. Spread `{...storyblokEditable(blok)}` on the outermost element
4. Replace hardcoded strings with `blok.field`
5. Export as default

- [ ] **Step 2: Create BannerBlock**

Create `src/blocks/BannerBlock.tsx`. Source: `Home.tsx:1898-1916` (Banner1 function). Replace hardcoded image and text:

```tsx
import { storyblokEditable } from '@storyblok/react'
import { resolveImage } from '../storyblok/image'
import type { BannerBlok } from '../storyblok/types'

interface Props {
  blok: BannerBlok
}

export default function BannerBlock({ blok }: Props) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="banner"
      className="relative shrink-0 w-full"
      data-name="Banner"
      data-gsap="scale-in"
    >
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] lg:p-[32px] relative w-full">
          <div className="aspect-[2320/264] relative shrink-0 w-full overflow-hidden rounded-[8px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt={blok.overlay_text}
                loading="lazy"
                className="absolute h-[341.63%] left-[-3.84%] max-w-none top-[-119.94%] w-[131.21%]"
                src={resolveImage(blok.image)}
              />
            </div>
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="font-['Helvetica:Bold',sans-serif] font-bold text-white text-[18px] sm:text-[24px] lg:text-[36px] tracking-[4px] lg:tracking-[8px] uppercase">
                {blok.overlay_text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create UbicacionBlock**

Create `src/blocks/UbicacionBlock.tsx`. Source: the Ubicación section inside PersonalitySection at `Home.tsx:1889-1892` and its sub-components (Header13, Container8, Map, Container9). Copy the full JSX tree for the location section, replacing hardcoded text with blok fields.

This block contains a map image and address text. The JSX is substantial — copy it exactly from the source, only swapping hardcoded strings for `blok.*` fields.

- [ ] **Step 4: Verify on localhost**

These blocks are not wired into the page yet (that happens in Task 9), but verify they compile:

```bash
npx tsc --noEmit 2>&1 | grep -c "error"
```

Expected: Only errors from blocks not yet created (referenced in components.ts). Zero errors from the 3 blocks created in this task.

- [ ] **Step 5: Commit**

```bash
git add src/blocks/ComoGanoBlock.tsx src/blocks/BannerBlock.tsx src/blocks/UbicacionBlock.tsx
git commit -m "feat: migrate ComoGano, Banner, Ubicacion blocks"
```

---

## Task 5: Migrate Array Blocks — RentaCards, Testimonials, ComoInvertir, Press

**Files:**
- Create: `src/blocks/RentaCardsBlock.tsx`
- Create: `src/blocks/TestimonialsBlock.tsx`
- Create: `src/blocks/ComoInvertirBlock.tsx`
- Create: `src/blocks/PressBlock.tsx`

These blocks iterate over arrays of nested bloks. The pattern: `blok.items.map()` instead of `HARDCODED_ARRAY.map()`.

- [ ] **Step 1: Create RentaCardsBlock**

Source: `src/components/RentaCards.tsx` (entire file). Copy all JSX. Replace `CARD_DATA` with `blok.cards`. Replace `card.bgColor` with `card.bg_color`. Keep all state logic (activeCard, glowPos, mouse handlers) identical.

```tsx
import { useState, useCallback } from 'react'
import { storyblokEditable } from '@storyblok/react'
import type { RentaCardsBlok } from '../storyblok/types'

interface Props {
  blok: RentaCardsBlok
}

export default function RentaCardsBlock({ blok }: Props) {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null)

  const onCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div {...storyblokEditable(blok)} className="content-stretch flex flex-col lg:flex-row items-stretch relative shrink-0 w-full" data-name="Cards">
      {blok.cards.map((card, i) => {
        const isActive = activeCard === i
        return (
          <div
            {...storyblokEditable(card)}
            key={card._uid}
            data-name={`Card${i + 1}`}
            data-gsap="fade-up"
            className={`cursor-pointer flex-[1_0_0] min-h-[400px] lg:min-h-[540px] min-w-0 lg:min-w-[340px] relative transition-all duration-300 overflow-hidden border-t border-b border-[rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none ${i < blok.cards.length - 1 ? "lg:border-r border-[rgba(0,0,0,0.1)]" : ""}`}
            style={{ backgroundColor: isActive ? card.bg_color : undefined }}
            onClick={() => setActiveCard(isActive ? null : i)}
            onMouseMove={onCardMouseMove}
            onMouseLeave={() => setGlowPos(null)}
          >
            {/* Copy remaining JSX from RentaCards.tsx exactly,
                replacing card.metric, card.title, card.subtitle, card.detail, card.period
                with the same field names from the blok type */}
          </div>
        )
      })}
    </div>
  )
}
```

**IMPORTANT:** Copy the FULL inner JSX from `RentaCards.tsx` lines 45-95. The comment above is a placeholder for the plan — the actual implementation must include all the card content markup (glow effect, metric display, title, subtitle, expandable detail, etc.).

- [ ] **Step 2: Create TestimonialsBlock**

Source: `Home.tsx:2304-2536`. Copy `TESTIMONIALS_DATA` type, `TestimonialCard` component, `InfiniteTestimonialCarousel`, `Header15`, and `StrategySection1`. Replace `TESTIMONIALS_DATA` with `blok.testimonials`. Keep all scroll/drag/animation logic.

- [ ] **Step 3: Create ComoInvertirBlock**

Source: `Home.tsx:3008-3074` (COMO_INVERTIR_STEPS + Frame59 mobile layout) and `Home.tsx:2618-3005` (PersonalitySection2-6 for desktop sticky scroll layout). This is the most complex block because it has separate mobile (stacked) and desktop (sticky scroll) layouts.

Replace `COMO_INVERTIR_STEPS` with `blok.steps`. Keep both mobile and desktop renderers.

- [ ] **Step 4: Create PressBlock**

Source: `src/components/PressSection.tsx` (entire file). Copy all JSX including the GSAP scroll animations. Replace hardcoded article data with `blok.articles` array. Replace hardcoded media images with `resolveImage(article.image)`.

- [ ] **Step 5: Verify compilation**

```bash
npx tsc --noEmit 2>&1 | grep -E "RentaCards|Testimonials|ComoInvertir|Press" | head -5
```

Expected: Zero errors from these 4 block files.

- [ ] **Step 6: Commit**

```bash
git add src/blocks/RentaCardsBlock.tsx src/blocks/TestimonialsBlock.tsx src/blocks/ComoInvertirBlock.tsx src/blocks/PressBlock.tsx
git commit -m "feat: migrate RentaCards, Testimonials, ComoInvertir, Press blocks"
```

---

## Task 6: Migrate Complex Blocks — Hero, Carousel, Fracciones, Proyecto, Galeria, AvanceObra

**Files:**
- Create: `src/blocks/HeroBlock.tsx`
- Create: `src/blocks/ImageCarouselBlock.tsx`
- Create: `src/blocks/FraccionesBlock.tsx`
- Create: `src/blocks/ProyectoBlock.tsx`
- Create: `src/blocks/GaleriaBlock.tsx`
- Create: `src/blocks/AvanceObraBlock.tsx`

- [ ] **Step 1: Create HeroBlock**

Source: `src/components/HeroSection.tsx` (entire file). This component has video background, GSAP hero animations via `useHeroAnimations()` hook, magnetic button effect, and the IntroSection with CTA.

Copy the full component. Replace:
- Headline text (lines 28-29) → `blok.headline_line1`, `blok.headline_line2`
- Subtitle (line 39) → `blok.subtitle`
- CTA text and link (line 55-57) → `blok.cta_text`, `blok.cta_link`
- Video source → `resolveImage(blok.background_video)`

Keep: `useHeroAnimations()` hook, `MagneticWrap`, all SVG decorative elements, all animation attributes.

- [ ] **Step 2: Create ImageCarouselBlock**

Source: `Home.tsx:37-165` (GRID_IMAGES + Images function). Copy the infinite scroll carousel with drag handlers. Replace `GRID_IMAGES` with `blok.images`. Replace `item.src` with `resolveImage(item.image)`.

- [ ] **Step 3: Create FraccionesBlock**

Source: `Home.tsx:297-695` (StrategySection + FractionViewerInteractive). This includes the interactive fraction calculator with slider, dynamic USD formatting, and three renta rows.

Replace:
- Section title/description → `blok.title`, `blok.description`
- Tipología names → `blok.tipologias[n].name`
- Base price 22500 → `blok.tipologias[0].base_price`
- Renta percentages → `blok.renta_espera_pct`, etc.
- Disclaimer text → `blok.disclaimer`

Keep: All interactive calculator logic (useState for fractions, USD formatting, slider).

- [ ] **Step 4: Create ProyectoBlock**

Source: `Home.tsx:704-960` (ValueSection). The dark card with project details, features list, delivery date, LB logo SVG.

Replace text content with blok fields. Features become `blok.features.map()`. Keep SVG decorative elements (LB logo paths from svgPaths).

- [ ] **Step 5: Create GaleriaBlock**

Source: `Home.tsx:1293-1364` (Container4 — tabbed gallery). Replace `GALLERY_TABS` with `blok.tabs`. Replace `current.image` with `resolveImage(current.image)`. Keep tab navigation, arrow buttons, dot indicators, fade animation.

- [ ] **Step 6: Create AvanceObraBlock**

Source: `src/components/ConstructionTimeline.tsx` (entire file). Replace `STEPS` array with `blok.steps`. Replace `ACTIVE_STEP` with `blok.active_step`. Replace image prop with `resolveImage(blok.image)`.

- [ ] **Step 7: Commit**

```bash
git add src/blocks/HeroBlock.tsx src/blocks/ImageCarouselBlock.tsx src/blocks/FraccionesBlock.tsx src/blocks/ProyectoBlock.tsx src/blocks/GaleriaBlock.tsx src/blocks/AvanceObraBlock.tsx
git commit -m "feat: migrate Hero, Carousel, Fracciones, Proyecto, Galeria, AvanceObra blocks"
```

---

## Task 7: Migrate Neuquen + About Page Blocks

**Files:**
- Create: `src/blocks/NeuquenBlock.tsx`
- Create: `src/blocks/IntroBlock.tsx`
- Create: `src/blocks/HistoriaBlock.tsx`
- Create: `src/blocks/ValoresBlock.tsx`
- Create: `src/blocks/EquipoBlock.tsx`

- [ ] **Step 1: Create NeuquenBlock**

Source: `Home.tsx:1918-2272` (PersonalitySection1 — the Neuquén expansion section). Replace:
- Title → `blok.title`
- "Energy & Business Tower" → `blok.project_name`
- Feature items → `blok.features.map()`
- Images/logo → `resolveImage(blok.image)`, `resolveImage(blok.logo)`

- [ ] **Step 2: Create IntroBlock**

Source: `About.tsx:69-138` (IntroSection). Logo SVG of Grupo Marting, description paragraphs, external link.

- [ ] **Step 3: Create HistoriaBlock**

Source: `About.tsx:140-302` (Text, Title, StrategySection). History paragraphs and image.

- [ ] **Step 4: Create ValoresBlock**

Source: `About.tsx:304-796` (StrategySection2). This is extensive — contains a list of company values with descriptions. Each value becomes a nested `valor` blok.

- [ ] **Step 5: Create EquipoBlock**

Source: `About.tsx:798-1037` (StrategySection3). Team members with photos, names, roles, LinkedIn links.

- [ ] **Step 6: Commit**

```bash
git add src/blocks/NeuquenBlock.tsx src/blocks/IntroBlock.tsx src/blocks/HistoriaBlock.tsx src/blocks/ValoresBlock.tsx src/blocks/EquipoBlock.tsx
git commit -m "feat: migrate Neuquen and About page blocks"
```

---

## Task 8: Migrate ContactForm + Footer Blocks

**Files:**
- Create: `src/blocks/ContactFormBlock.tsx`
- Create: `src/blocks/FooterBlock.tsx`

- [ ] **Step 1: Create ContactFormBlock**

Source: `src/components/ContactForm.tsx` (entire file). Copy the form with all field types, validation, submission logic. Replace:
- Title "Calcula tu inversión" → `blok.title`
- Webhook URL → `blok.webhook_url`

Keep: All form state, handleSubmit logic, success/error states, field styling.

- [ ] **Step 2: Create FooterBlock**

Source: `Home.tsx:3106-3341` (Container13 — footer). Replace:
- Logo → `resolveImage(blok.logo)`
- Tagline text → `blok.tagline`
- Social links → `blok.social_facebook`, etc.
- Section nav links → `blok.sections_links.map()`
- Info nav links → `blok.info_links.map()`
- Copyright → `blok.copyright_text`

- [ ] **Step 3: Commit**

```bash
git add src/blocks/ContactFormBlock.tsx src/blocks/FooterBlock.tsx
git commit -m "feat: migrate ContactForm and Footer blocks"
```

---

## Task 9: Wire Up Page Renderer — Replace Home.tsx and About.tsx

**Files:**
- Create: `src/app/components/Page.tsx`
- Modify: `src/app/components/HomePage.tsx`
- Modify: `src/app/components/AboutPage.tsx`
- Modify: `src/components/Layout.tsx`

This is the critical task that swaps the old monolithic page components for the new dynamic block-based renderer.

- [ ] **Step 1: Create Page component**

Create `src/app/components/Page.tsx`:

```tsx
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
```

- [ ] **Step 2: Update HomePage**

Modify `src/app/components/HomePage.tsx`:

```tsx
import Page from './Page'

// Thumbnails for the menu (same images as original)
import imgArrowRight4 from "figma:asset/ee42972642d8fa9e5f8cda6dbdda134bd59958d1.webp"
import imgArrowRight3 from "figma:asset/4f6aa36958afd713bc1c8acb59b4994a3636420d.webp"
import imgArrowRight5 from "figma:asset/e7b02b83f7d79cd443a54c11301740ab75dd548e.webp"

export default function HomePage() {
  return <Page slug="home" menuThumbnails={[imgArrowRight4, imgArrowRight3, imgArrowRight5]} />
}
```

- [ ] **Step 3: Update AboutPage**

Modify `src/app/components/AboutPage.tsx`:

```tsx
import Page from './Page'

export default function AboutPage() {
  return <Page slug="about" />
}
```

- [ ] **Step 4: Update Layout to accept settings prop**

Modify `src/components/Layout.tsx` to accept an optional `settings` prop for menu links, social links, etc. The Layout currently has `MENU_LINKS` and `MENU_CARDS` hardcoded at lines 12-28. Add a `settings` prop and fall back to the hardcoded values if not provided (so the Layout works both old and new way during migration):

```tsx
interface LayoutProps {
  children: ReactNode
  menuThumbnails?: string[]
  settings?: SiteSettings
  dataName?: string
}

// Inside the component, replace:
// MENU_LINKS → settings?.menu_links ?? MENU_LINKS
// MENU_CARDS → settings?.menu_cards ?? MENU_CARDS
```

- [ ] **Step 5: Verify on localhost**

Start the dev server and verify both pages render correctly:

```bash
npx vite --port 5174
```

Open http://localhost:5174/la-barceloneta/ and http://localhost:5174/la-barceloneta/#/about

Verify:
- All sections render in correct order
- All text matches the original
- All images load
- GSAP animations work (scroll triggers, fade-ins)
- Responsive: check at mobile width (375px) and desktop (1440px)
- Interactive elements work: fraction calculator, gallery tabs, testimonial carousel, renta cards expand/collapse, construction timeline, contact form

- [ ] **Step 6: Delete old monolithic files**

Once verified, delete:
- `src/imports/Home.tsx`
- `src/imports/About.tsx`

Also delete any now-unused imports from these files (SVG path files are still used by blocks that import them directly).

- [ ] **Step 7: Run typecheck**

```bash
npx tsc --noEmit
```

Expected: ZERO errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: wire up Page renderer, replace monolithic Home/About with block-based rendering"
```

---

## Task 10: Set Up Storyblok Space

**Files:** None (Storyblok dashboard + CLI work)

This task creates the Storyblok space and populates it with all blok schemas and content.

- [ ] **Step 1: Create Storyblok account and space**

Go to https://app.storyblok.com and create a free account. Create a new space named "La Barceloneta".

Note the **Space ID** and **Preview Token** (Settings → API Keys).

- [ ] **Step 2: Create .env.local with tokens**

Create `.env.local` (already gitignored by `*.local` in .gitignore):

```
VITE_STORYBLOK_TOKEN=your-preview-token-here
```

- [ ] **Step 3: Create all blok schemas in Storyblok**

In Storyblok dashboard (Block Library), create each blok with its fields as defined in `src/storyblok/types.ts`. For each blok:
- Component name matches the `component` field exactly (e.g., `heroBlock`)
- Field types: `text`, `number`, `asset`, `bloks` (for nested arrays), `textarea`, `richtext`
- Mark content type "Nestable" for all bloks (they nest inside Page body)

Create the `page` content type with:
- `body` field of type `Blocks` (allows all bloks)

Create `siteSettings` as a content type for the settings singleton.

- [ ] **Step 4: Create stories with current content**

In Storyblok Content section:
1. Create story "Home" (slug: `home`, content type: `page`)
2. Add all blocks in order, populating each field with the content from `content/home.json`
3. Upload all images from `public/images/` to Storyblok's asset library
4. Replace local image paths with Storyblok CDN URLs in each blok's image fields
5. Repeat for "About" page
6. Create "Site Settings" story (content type: `siteSettings`)

- [ ] **Step 5: Publish all stories**

Click Publish on Home, About, and Site Settings.

- [ ] **Step 6: Document tokens**

Add to the project's `.env.local`:

```
VITE_STORYBLOK_TOKEN=<preview-token>
STORYBLOK_SPACE_ID=<space-id>
```

---

## Task 11: Connect Storyblok API — Build-Time Fetcher + Editor Bridge

**Files:**
- Create: `scripts/fetch-content.ts`
- Modify: `package.json` (add build script)
- Modify: `vite.config.ts` (env var passthrough)

- [ ] **Step 1: Create build-time fetcher**

Create `scripts/fetch-content.ts`:

```ts
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
```

- [ ] **Step 2: Update package.json build script**

```json
{
  "scripts": {
    "dev": "npx vite",
    "fetch-content": "node --loader ts-node/esm scripts/fetch-content.ts",
    "build": "npm run fetch-content && vite build",
    "typecheck": "tsc --noEmit",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

Also add `ts-node` as a dev dependency:

```bash
npm install -D ts-node
```

- [ ] **Step 3: Update vite.config.ts**

Add env var passthrough so the Storyblok token is available in the browser (for editor mode):

```ts
export default defineConfig({
  base: '/la-barceloneta/',  // Will change to '/' for Vercel in Task 12
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset': path.resolve(__dirname, './public/images'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  // Allow importing JSON from content/ directory
  json: {
    stringify: false,
  },
})
```

- [ ] **Step 4: Test the fetch script**

```bash
VITE_STORYBLOK_TOKEN=your-token npm run fetch-content
```

Expected: JSON files in `content/` updated with Storyblok CDN image URLs.

- [ ] **Step 5: Verify the site uses Storyblok content**

```bash
npx vite --port 5174
```

Open localhost. All content should now come from Storyblok (via the fetched JSON files). Images should load from Storyblok CDN.

- [ ] **Step 6: Test visual editor**

In Storyblok dashboard → Settings → Visual Editor, set the preview URL to:
```
http://localhost:5174/la-barceloneta/
```

Open the Visual Editor. The site should render in the iframe. Clicking on sections should highlight them and open the field editor in the sidebar.

- [ ] **Step 7: Commit**

```bash
git add scripts/ package.json vite.config.ts
git commit -m "feat: add Storyblok build-time fetcher and editor bridge"
```

---

## Task 12: Migrate to Vercel + Final Cleanup

**Files:**
- Modify: `vite.config.ts` (base path)
- Modify: `src/app/routes.tsx` (if needed)
- Delete: `.github/workflows/deploy.yml`

- [ ] **Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

- [ ] **Step 2: Link project to Vercel**

```bash
vercel link
```

Follow prompts: select the GitHub repo, set framework to "Vite".

- [ ] **Step 3: Configure Vercel environment variables**

```bash
vercel env add VITE_STORYBLOK_TOKEN
vercel env add STORYBLOK_TOKEN
```

Both should contain the Storyblok preview token.

- [ ] **Step 4: Change Vite base path**

Modify `vite.config.ts`:

```ts
base: '/',  // was '/la-barceloneta/'
```

Update any hardcoded references to `/la-barceloneta/` in the content JSON files and components. The hash router should work without changes since it's path-independent.

- [ ] **Step 5: Configure Vercel build**

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The rewrite ensures the SPA works for any route (though with hash routing this is less critical).

- [ ] **Step 6: Deploy to Vercel**

```bash
vercel --prod
```

Note the production URL.

- [ ] **Step 7: Configure Storyblok webhook**

In Vercel dashboard → Settings → Git → Deploy Hooks, create a hook named "Storyblok Publish". Copy the URL.

In Storyblok dashboard → Settings → Webhooks, create a webhook:
- URL: the Vercel deploy hook URL
- Trigger: Story published, Story unpublished, Story deleted

- [ ] **Step 8: Update Storyblok Visual Editor URL**

In Storyblok → Settings → Visual Editor, update the preview URL to the Vercel production URL.

- [ ] **Step 9: Delete GitHub Actions workflow**

```bash
rm .github/workflows/deploy.yml
```

If `.github/` is now empty, delete it too.

- [ ] **Step 10: Final verification**

1. Open the Vercel production URL — site should look identical to the original
2. In Storyblok, edit a text field → publish → wait for Vercel rebuild (~30s) → verify change is live
3. Test the Visual Editor — site should render in iframe with click-to-edit working
4. Test mobile viewport in Visual Editor
5. Test all interactive elements on production URL

- [ ] **Step 11: Commit and push**

```bash
git add -A
git commit -m "feat: migrate to Vercel, configure Storyblok webhook, remove GitHub Pages"
git push origin cms/storyblok-integration
```

---

## Post-Implementation Notes

- **Image migration:** All images from `public/images/` should be uploaded to Storyblok's asset library. The `content/*.json` files should then reference Storyblok CDN URLs instead of local paths. This can be done incrementally.
- **DNS:** If the client has a custom domain, update DNS to point to Vercel (CNAME to `cname.vercel-dns.com`).
- **Client onboarding:** Walk the client through Storyblok Studio: how to edit text, upload images, reorder sections, preview, and publish.
- **Storyblok roles:** Set up the client as an "Editor" role (can edit/publish content but not modify schemas).
