import type { ValoresBlok } from '../storyblok/types'

interface Props { blok: ValoresBlok }

export default function ValoresBlock({ blok: _blok }: Props) {
  // The valores section is embedded in About.tsx
  // Will be extracted when the Page renderer replaces About.tsx
  return null
}
