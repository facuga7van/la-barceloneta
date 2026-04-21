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
  display_line1?: string
  display_line2?: string
  section_title?: string
  section_description?: string
  section_image?: StoryblokAsset
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
  display_line1?: string
  display_line2?: string
  delivery_label?: string
  delivery_date?: string
  location_label?: string
  location_value?: string
  expansion_title?: string
  expansion_description?: string
  expansion_image?: StoryblokAsset
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
  hero_image?: StoryblokAsset
}

export interface StatItem extends SbBlokData {
  component: 'statItem'
  value: string
  label: string
}

export interface HistoriaBlok extends SbBlokData {
  component: 'historiaBlock'
  title: string
  paragraphs: string[] | string
  image: StoryblokAsset
  image_secondary?: StoryblokAsset
  stats_heading?: string
  stats?: StatItem[]
}

export interface ValoresBlok extends SbBlokData {
  component: 'valoresBlock'
  title: string
  description?: string
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
