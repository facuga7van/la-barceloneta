import type { IntroBlok } from '../storyblok/types'

interface Props { blok: IntroBlok }

export default function IntroBlock({ blok: _blok }: Props) {
  // The intro section with LogoGm is embedded in About.tsx
  // Will be extracted when the Page renderer replaces About.tsx
  return null
}
