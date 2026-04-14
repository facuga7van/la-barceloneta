import type { HeroBlok } from '../storyblok/types'
import HeroSection from '../components/HeroSection'

interface Props { blok: HeroBlok }

export default function HeroBlock({ blok: _blok }: Props) {
  // HeroSection has its own hardcoded content for now
  // Will be refactored to accept props later
  return <HeroSection />
}
