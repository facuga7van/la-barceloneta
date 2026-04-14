import type { EquipoBlok } from '../storyblok/types'

interface Props { blok: EquipoBlok }

export default function EquipoBlock({ blok: _blok }: Props) {
  // The equipo section is embedded in About.tsx
  // Will be extracted when the Page renderer replaces About.tsx
  return null
}
