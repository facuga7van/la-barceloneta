import type { TestimonialsBlok } from '../storyblok/types'

interface Props { blok: TestimonialsBlok }

export default function TestimonialsBlock({ blok: _blok }: Props) {
  // The full testimonials carousel is still rendered from Home.tsx
  // This block will be wired up when the Page renderer replaces Home.tsx
  return null
}
