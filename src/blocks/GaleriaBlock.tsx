import type { GaleriaBlok } from '../storyblok/types'

interface Props { blok: GaleriaBlok }

export default function GaleriaBlock({ blok: _blok }: Props) {
  // The gallery tabs viewer is embedded in Home.tsx
  // Will be extracted when the Page renderer replaces Home.tsx
  return null
}
