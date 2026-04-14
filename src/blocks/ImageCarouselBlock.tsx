import type { ImageCarouselBlok } from '../storyblok/types'

interface Props { blok: ImageCarouselBlok }

export default function ImageCarouselBlock({ blok: _blok }: Props) {
  // The carousel is currently embedded in Home.tsx
  // Will be extracted when the Page renderer replaces Home.tsx
  return null
}
