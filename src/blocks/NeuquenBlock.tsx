import type { NeuquenBlok } from '../storyblok/types'

interface Props { blok: NeuquenBlok }

export default function NeuquenBlock({ blok: _blok }: Props) {
  // The Neuquén section is embedded in Home.tsx
  // Will be extracted when the Page renderer replaces Home.tsx
  return null
}
