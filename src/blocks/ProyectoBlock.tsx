import type { ProyectoBlok } from '../storyblok/types'

interface Props { blok: ProyectoBlok }

export default function ProyectoBlock({ blok: _blok }: Props) {
  // The proyecto portada section is embedded in Home.tsx PersonalitySection
  // Will be extracted when the Page renderer replaces Home.tsx
  return null
}
