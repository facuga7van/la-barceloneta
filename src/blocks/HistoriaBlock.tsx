import type { HistoriaBlok } from '../storyblok/types'

interface Props { blok: HistoriaBlok }

export default function HistoriaBlock({ blok: _blok }: Props) {
  // The historia section is embedded in About.tsx
  // Will be extracted when the Page renderer replaces About.tsx
  return null
}
