import { storyblokEditable } from '@storyblok/react'
import type { HeroBlok } from '../storyblok/types'
import HeroSection from '../components/HeroSection'
import { resolveImage } from '../storyblok/image'

interface Props { blok: HeroBlok }

export default function HeroBlock({ blok }: Props) {
  const videoSrc = blok.background_video?.filename ? resolveImage(blok.background_video) : undefined
  const posterSrc = blok.background_image?.filename ? resolveImage(blok.background_image) : undefined

  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <HeroSection
        headline1={blok.headline_line1}
        headline2={blok.headline_line2}
        subtitle={blok.subtitle}
        ctaText={blok.cta_text}
        ctaLink={blok.cta_link}
        videoSrc={videoSrc}
        videoPoster={posterSrc}
      />
    </div>
  )
}
