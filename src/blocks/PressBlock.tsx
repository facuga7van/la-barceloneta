import { storyblokEditable } from '@storyblok/react'
import type { PressBlok } from '../storyblok/types'
import PressSection, { type PressArticleData } from '../components/PressSection'
import { resolveImage } from '../storyblok/image'

interface Props { blok: PressBlok }

export default function PressBlock({ blok }: Props) {
  const articles: PressArticleData[] = blok.articles.map((a) => ({
    mediaName: a.media_name,
    description: a.description,
    imageSrc: a.image?.filename ? resolveImage(a.image) : undefined,
    imageAlt: a.image?.alt,
    link: a.link,
    editableProps: storyblokEditable(a),
  }))

  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <PressSection title={blok.title} description={blok.description} articles={articles} />
    </div>
  )
}
