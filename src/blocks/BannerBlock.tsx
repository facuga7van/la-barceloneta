import { storyblokEditable } from '@storyblok/react'
import type { BannerBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: BannerBlok }

export default function BannerBlock({ blok }: Props) {
  const imgSrc = resolveImage(blok.image)
  const hasOverlay = blok.overlay_text && blok.overlay_text.length > 0
  const hasLink = blok.link && blok.link.length > 0
  const editable = storyblokEditable(blok)

  const inner = (
    <div className="relative shrink-0 w-full" data-name="Banner" data-gsap="scale-in">
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] lg:p-[32px] relative w-full">
          <div className="aspect-[2320/264] relative shrink-0 w-full overflow-hidden rounded-[8px]">
            <img alt={blok.image.alt || ''} loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSrc} />
            {hasOverlay && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="font-['Helvetica:Bold',sans-serif] font-bold text-white text-[18px] sm:text-[24px] lg:text-[36px] tracking-[4px] lg:tracking-[8px] uppercase">{blok.overlay_text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (hasLink) {
    return (
      <a {...editable} href={blok.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer no-underline">
        {inner}
      </a>
    )
  }

  return <section {...editable}>{inner}</section>
}
