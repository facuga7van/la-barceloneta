# Storyblok CMS Integration — La Barceloneta

**Date:** 2026-04-14
**Status:** Approved
**Goal:** Make the entire site editable via Storyblok visual editor while keeping it pixel-perfect identical to the current version.

## Architecture

- **CMS:** Storyblok (free tier, 1 user)
- **Framework:** React 18 + Vite (unchanged)
- **Deploy:** Migrate from GitHub Pages to Vercel (free tier)
- **Data flow:** Build-time fetch from Storyblok Content Delivery API → static JSON → React components import JSON
- **Editor mode:** `@storyblok/react` bridge enables real-time preview in Storyblok's visual editor
- **Production mode:** Static SPA, zero runtime dependency on Storyblok

Two rebuild triggers:
1. Push to master (code changes)
2. Storyblok webhook on publish (content changes)

## Repo Structure

```
la-barceloneta/
├── .storyblok/                # Storyblok CLI config
├── src/
│   ├── storyblok/
│   │   ├── client.ts          # Storyblok client (API token)
│   │   ├── components.ts      # Registry: blok name → React component
│   │   └── types.ts           # TypeScript types from Storyblok
│   ├── blocks/                # Blok components (1:1 with Storyblok bloks)
│   │   ├── HeroBlock.tsx
│   │   ├── RentaCardsBlock.tsx
│   │   ├── TestimonialsBlock.tsx
│   │   └── ...
│   ├── components/            # Existing UI components (refactored)
│   ├── hooks/                 # GSAP hooks (untouched)
│   └── app/
├── scripts/
│   └── fetch-content.ts       # Build-time content fetcher
└── content/                   # Generated JSON (gitignored)
```

## Content Model

### Content Type: Page

- `slug` — text
- `seo` — SEO plugin (title, description, og_image)
- `body` — blocks field (array of bloks, drag-and-drop reorderable)

### Bloks — Home (14 types)

| Blok | Key Fields |
|------|------------|
| `heroBlock` | headline_line1, headline_line2, subtitle, cta_text, cta_link, background_video, background_image |
| `imageCarouselBlock` | images[] (image, alt), scroll_speed |
| `comoGanoBlock` | title, description |
| `fraccionesBlock` | title, description, tipologias[] (name, base_price, image), renta_%s, disclaimer |
| `proyectoBlock` | title, price_label, price, features[] (text), delivery_label, delivery_date, location_name, location_city, background_image |
| `rentaCardsBlock` | cards[] (metric, period, title, subtitle, detail, bg_color) |
| `galeriaBlock` | title, subtitle, tabs[] (label, images[]) |
| `avanceObraBlock` | title, subtitle, active_step, steps[] (date, percentage, label, description), image |
| `ubicacionBlock` | title, subtitle, address, map_coordinates, image |
| `bannerBlock` | image, overlay_text, link |
| `neuquenBlock` | title, project_name, features[] (text), image, logo |
| `comoInvertirBlock` | title, intro_subtitle, steps[] (number, title, description) |
| `testimonialsBlock` | title, description, testimonials[] (name, subtitle, quote) |
| `pressBlock` | title, description, articles[] (media_name, description, image, link) |

### Bloks — About (4 types)

| Blok | Key Fields |
|------|------------|
| `introBlock` | logo, description (richtext), external_link_text, external_link_url |
| `historiaBlock` | title, content (richtext), image |
| `valoresBlock` | title, valores[] (name, description, icon) |
| `equipoBlock` | title, members[] (name, role, photo, linkedin) |

### Shared Blok

| Blok | Key Fields |
|------|------------|
| `contactFormBlock` | title, webhook_url, configurable form fields |

### Singleton: Site Settings

- logo, logo_alt (assets)
- whatsapp_number
- social links (facebook, instagram, linkedin)
- footer_text
- menu_links[] (label, anchor)
- menu_cards[] (label, target, bg_color)

## Component Bridge Pattern

Each blok component:
1. Receives `blok` prop with Storyblok data
2. Spreads `{...storyblokEditable(blok)}` on the root element (enables visual editor click-to-edit)
3. Renders the same JSX/Tailwind/GSAP as the original component
4. Only the data source changes (blok fields instead of hardcoded constants)

Images use Storyblok CDN with responsive transforms:
```
${blok.image.filename}/m/800x0  (width 800, auto height)
```

## What Does NOT Change

- All JSX structure and Tailwind classes
- GSAP animations and scroll triggers
- Responsive breakpoints and mobile layouts
- Hash routing
- Contact form webhook (n8n)
- SVG decorative paths (svg-*.ts files)

## Deploy Pipeline

- Remove `.github/workflows/deploy.yml`
- Vercel project linked to GitHub repo
- Build command: `node scripts/fetch-content.ts && vite build`
- Vite base path changes from `/la-barceloneta/` to `/`
- Environment variables in Vercel: `STORYBLOK_TOKEN`, `STORYBLOK_SPACE_ID`
- Storyblok webhook configured to hit Vercel deploy hook on publish

## Migration Strategy

1. Create all bloks in Storyblok matching current content
2. Populate with exact current content (text, images)
3. Build block components that consume Storyblok data
4. Each block is migrated independently — site works with a mix of old/new during development
5. Visual diff testing: screenshot before/after each block migration
