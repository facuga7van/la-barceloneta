import { storyblokEditable } from '@storyblok/react'
import type { AvanceObraBlok } from '../storyblok/types'
import ConstructionTimeline from '../components/ConstructionTimeline'
import { resolveImage } from '../storyblok/image'

interface Props { blok: AvanceObraBlok }

export default function AvanceObraBlock({ blok }: Props) {
  const imgSrc = resolveImage(blok.image)
  // ConstructionTimeline has its own hardcoded data for now
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <ConstructionTimeline imageSrc={imgSrc} />
    </div>
  )
}
