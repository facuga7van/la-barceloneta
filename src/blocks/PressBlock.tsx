import type { PressBlok } from '../storyblok/types'
import PressSection from '../components/PressSection'

interface Props { blok: PressBlok }

export default function PressBlock({ blok: _blok }: Props) {
  // TODO: pass blok.articles as props to PressSection when refactored
  return <PressSection />
}
