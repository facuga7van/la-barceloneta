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
