import { useState } from 'react'
import { storyblokEditable } from '@storyblok/react'
import type { GaleriaBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: GaleriaBlok }

export default function GaleriaBlock({ blok }: Props) {
  const [tab, setTab] = useState(0)
  const tabs = blok.tabs ?? []
  const total = tabs.length
  const current = tabs[tab] ?? tabs[0]

  if (!current) return null

  const currentImage = current.image?.filename ? resolveImage(current.image) : ''

  return (
    <section
      {...storyblokEditable(blok)}
      className="content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center px-[16px] lg:px-[64px] xl:px-[120px] py-[40px] lg:py-[80px] relative shrink-0 w-full"
      data-name="Galería de fotos"
      data-gsap="fade-left"
    >
      <div className="content-stretch flex gap-0 items-start relative shrink-0 w-full" data-name="Title and subtitle">
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[30px] text-black tracking-[-0.6px]">
          <p className="leading-[1.2] whitespace-normal">{blok.title}</p>
        </div>
        {blok.subtitle ? (
          <div className="ml-[24px] flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[#575757] tracking-[-0.15px]">
            <p className="leading-[1.4]">{blok.subtitle}</p>
          </div>
        ) : null}
      </div>

      <div className="content-stretch flex flex-col-reverse lg:flex-row gap-[24px] lg:gap-[32px] h-auto lg:h-[552px] items-center relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex w-full flex-none lg:flex-[1_0_0] flex-col h-[200px] lg:h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
          <div className="relative lg:absolute bottom-auto lg:bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <button
                type="button"
                onClick={() => setTab((t) => (t - 1 + total) % total)}
                className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Anterior"
              >
                <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                  <path d="M31.6667 20H8.33337M8.33337 20L18.3334 10M8.33337 20L18.3334 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setTab((t) => (t + 1) % total)}
                className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Siguiente"
              >
                <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                  <path d="M8.33337 20H31.6667M31.6667 20L21.6667 10M31.6667 20L21.6667 30" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
              <div className="flex gap-[6px] items-center">
                {tabs.map((t, i) => (
                  <button
                    key={t._uid}
                    type="button"
                    onClick={() => setTab(i)}
                    className={`rounded-full transition-all duration-200 cursor-pointer p-[10px] -m-[10px] box-content bg-clip-content ${i === tab ? 'w-[20px] h-[8px] bg-black' : 'size-[8px] bg-[#c4c4c4]'}`}
                    aria-label={t.label}
                  />
                ))}
              </div>
              <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full max-w-[207px] whitespace-pre-wrap">{current.description}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[24px] lg:gap-[100px] items-start justify-center not-italic relative shrink-0 text-black w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[15px] tracking-[-0.15px]">
              <span className="leading-[1.2]">{String(tab + 1).padStart(2, '0')}</span>
              <span className="leading-[1.2] text-[#575757]">/{String(total).padStart(2, '0')}</span>
            </p>
            <p key={tab} {...storyblokEditable(current)} className="leading-[1.1] min-w-full relative shrink-0 text-[36px] lg:text-[60px] text-left lg:text-right tracking-[-0.6px] w-[min-content] whitespace-pre-wrap animate-[fadeSlideIn_0.4s_ease-out]">{current.label}</p>
          </div>
        </div>
        <div aria-hidden="true" className="w-full h-[300px] lg:h-[552px] flex-none lg:flex-[1_0_0] min-h-px min-w-px relative overflow-hidden" data-name="Image" role="presentation">
          {currentImage && (
            <img key={tab} alt={current.image.alt || current.label} loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full animate-[fadeSlideIn_0.5s_ease-out]" src={currentImage} />
          )}
        </div>
      </div>
    </section>
  )
}
