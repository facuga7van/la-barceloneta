import { storyblokEditable } from '@storyblok/react'
import type { IntroBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'
import svgPaths from '../imports/svg-36x96stg2x'
import imgImage5475 from 'figma:asset/a8c798b5c8be4c06e14d3f2ec3849a7ee96cbec3.webp'

interface Props { blok: IntroBlok }

export default function IntroBlock({ blok }: Props) {
  const hasLogo = !!blok.logo?.filename
  const hasLink = !!(blok.external_link_text && blok.external_link_url)
  const heroImageSrc = blok.hero_image?.filename ? resolveImage(blok.hero_image) : imgImage5475
  const heroImageAlt = blok.hero_image?.alt || 'Edificio La Barceloneta exterior'

  return (
    <section
      {...storyblokEditable(blok)}
      id="nosotros"
      className="relative shrink-0 w-full"
      data-name="Intro section"
      data-gsap="fade-left"
    >
      <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[30px] items-start pb-[40px] lg:pb-[80px] pt-[24px] lg:pt-[32px] px-[16px] lg:px-[64px] xl:px-[120px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] lg:gap-[120px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Content">
          {hasLogo ? (
            <div className="h-[160px] lg:h-[233px] overflow-clip relative shrink-0 w-full max-w-[414.424px]">
              <img alt={blok.logo.alt || 'Logo'} className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={resolveImage(blok.logo)} />
            </div>
          ) : (
            <LogoGrupoMarting />
          )}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[415px]">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full lg:w-[372px]">
              <p className="leading-[1.2] whitespace-pre-wrap">{blok.description}</p>
            </div>
            {hasLink && (
              <a
                href={blok.external_link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch flex gap-[4px] items-center relative shrink-0 no-underline cursor-pointer group"
                data-name="Link Buton"
              >
                <span className="[text-decoration-skip-ink:none] decoration-solid font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f45f00] text-[15px] tracking-[-0.3px] underline group-hover:text-[#d04e00] transition-colors">
                  {blok.external_link_text}
                </span>
                <ArrowInsertIcon />
              </a>
            )}
          </div>
        </div>
        <div className="bg-white h-[350px] lg:h-[690px] overflow-clip relative shrink-0 w-full lg:w-[600px]" data-name="Image">
          <div className="-translate-y-1/2 absolute aspect-[581/765] left-0 right-px top-[calc(50%+83px)]" data-name="image 5475">
            <img alt={heroImageAlt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={heroImageSrc} />
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoGrupoMarting() {
  return (
    <div className="h-[160px] lg:h-[233px] overflow-clip relative shrink-0 w-full max-w-[414.424px]" data-name="logo gm 1">
      <div className="absolute inset-[8.93%_3.73%_20.52%_6.92%]" data-name="Group">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.302 164.391">
          <g id="Group">
            <path d={svgPaths.p1645adf0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p17731d40} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2d5cc700} fill="var(--fill-0, black)" />
            <path d={svgPaths.pa0bca00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3fe79300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35baa700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p18d5d400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p6800800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p7826d80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p9852180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p317d1780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1e557500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3fb63200} fill="var(--fill-0, #DF9F2A)" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[86.5%_14.02%_8.37%_17.34%]" data-name="Group">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284.469 11.9405">
          <g id="Group">
            <path d={svgPaths.p3ae2b5f2} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p1fa29a80} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p1b759080} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p17f91800} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p12114900} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p1f107480} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p696ef80} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p8ef2300} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p1f9be8d0} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p15d5a31} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.pdf34800} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p19db4d00} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p16bd0700} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p3427ef00} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p654bf80} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p2c02f800} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p4630500} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p2474d480} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p3e9a3280} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.pedffd00} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p2c2d0e80} fill="var(--fill-0, #1D1D1B)" />
            <path d={svgPaths.p255c0100} fill="var(--fill-0, #1D1D1B)" />
          </g>
        </svg>
      </div>
    </div>
  )
}

function ArrowInsertIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:arrow-insert">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p390f1e00} fill="var(--fill-0, #F45F00)" />
      </svg>
    </div>
  )
}
