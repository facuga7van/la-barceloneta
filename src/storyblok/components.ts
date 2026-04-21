// This file maps Storyblok blok component names to React components.
import HeroBlock from '../blocks/HeroBlock'
import ImageCarouselBlock from '../blocks/ImageCarouselBlock'
import ComoGanoBlock from '../blocks/ComoGanoBlock'
import FraccionesBlock from '../blocks/FraccionesBlock'
import ProyectoBlock from '../blocks/ProyectoBlock'
import RentaCardsBlock from '../blocks/RentaCardsBlock'
import GaleriaBlock from '../blocks/GaleriaBlock'
import AvanceObraBlock from '../blocks/AvanceObraBlock'
import UbicacionBlock from '../blocks/UbicacionBlock'
import BannerBlock from '../blocks/BannerBlock'
import NeuquenBlock from '../blocks/NeuquenBlock'
import ComoInvertirBlock from '../blocks/ComoInvertirBlock'
import TestimonialsBlock from '../blocks/TestimonialsBlock'
import PressBlock from '../blocks/PressBlock'
import ContactFormBlock from '../blocks/ContactFormBlock'
import IntroBlock from '../blocks/IntroBlock'
import HistoriaBlock from '../blocks/HistoriaBlock'
import ValoresBlock from '../blocks/ValoresBlock'
import EquipoBlock from '../blocks/EquipoBlock'
import FooterBlock from '../blocks/FooterBlock'

export const blockComponents: Record<string, React.ComponentType<any>> = {
  heroBlock: HeroBlock,
  imageCarouselBlock: ImageCarouselBlock,
  comoGanoBlock: ComoGanoBlock,
  fraccionesBlock: FraccionesBlock,
  proyectoBlock: ProyectoBlock,
  rentaCardsBlock: RentaCardsBlock,
  galeriaBlock: GaleriaBlock,
  avanceObraBlock: AvanceObraBlock,
  ubicacionBlock: UbicacionBlock,
  bannerBlock: BannerBlock,
  neuquenBlock: NeuquenBlock,
  comoInvertirBlock: ComoInvertirBlock,
  testimonialsBlock: TestimonialsBlock,
  pressBlock: PressBlock,
  contactFormBlock: ContactFormBlock,
  introBlock: IntroBlock,
  historiaBlock: HistoriaBlock,
  valoresBlock: ValoresBlock,
  equipoBlock: EquipoBlock,
  footerBlock: FooterBlock,
}
