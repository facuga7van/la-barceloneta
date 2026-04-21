import { storyblokEditable } from '@storyblok/react'
import type { HistoriaBlok, StatItem } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'
import imgImage5474 from 'figma:asset/28f87cdf85d8b9d691305432cfcd710646570202.webp'
import imgImage29 from 'figma:asset/88f2a57d9ab1cb3b48181d8cec2a6a175d8ed5e1.webp'

interface Props { blok: HistoriaBlok }

export default function HistoriaBlock({ blok }: Props) {
  const paragraphs = Array.isArray(blok.paragraphs)
    ? blok.paragraphs
    : typeof blok.paragraphs === 'string'
      ? String(blok.paragraphs).split(/\n+/).filter(Boolean)
      : []

  const primaryImg = blok.image?.filename ? resolveImage(blok.image) : imgImage5474
  const primaryAlt = blok.image?.alt || 'Detalle del proyecto'
  const secondaryImg = blok.image_secondary?.filename ? resolveImage(blok.image_secondary) : imgImage29
  const secondaryAlt = blok.image_secondary?.alt || 'Vista del emprendimiento'
  const statsHeading = blok.stats_heading || 'Nuestras estadísticas destacadas en 2025'
  const stats = Array.isArray(blok.stats) && blok.stats.length > 0 ? blok.stats : DEFAULT_STATS

  return (
    <section
      {...storyblokEditable(blok)}
      id="historia"
      className="relative shrink-0 w-full"
      data-name="Strategy section"
      data-gsap="fade-right"
    >
      <div className="content-stretch flex flex-col items-start pb-[32px] lg:pb-[60px] pt-[40px] lg:pt-[80px] px-[16px] lg:px-[32px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col lg:flex-row font-['Helvetica:Regular',sans-serif] items-start gap-[16px] lg:gap-[48px] not-italic relative shrink-0 w-full max-w-[1100px] mx-auto" data-name="Title">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[36px] lg:text-[60px] text-black tracking-[-0.6px]">
              <p className="leading-[1.1]">{blok.title}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[30px] items-start leading-[1.2] relative shrink-0 text-[#555] text-[15px] tracking-[-0.15px] w-full lg:w-[600px] whitespace-pre-wrap" data-name="Text">
              {paragraphs.map((p, i) => (
                <p key={i} className="relative shrink-0 w-full">{p}</p>
              ))}
            </div>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row h-auto lg:h-[500px] items-start gap-[16px] lg:gap-[24px] relative shrink-0 w-full max-w-[1100px] mx-auto">
            <div className="h-[300px] lg:h-[500px] overflow-clip relative shrink-0 w-full lg:flex-1" data-name="Image">
              <div className="-translate-x-1/2 absolute aspect-[1148/1526] bottom-0 left-[calc(50%+0.37px)] top-0">
                <img alt={primaryAlt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={primaryImg} loading="lazy" />
              </div>
            </div>
            <div className="h-[300px] lg:h-[500px] overflow-clip relative shrink-0 w-full lg:flex-[1.5]" data-name="Image">
              <div className="absolute bottom-0 h-[489px] right-0 w-[734px]">
                <img alt={secondaryAlt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={secondaryImg} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatsStrip heading={statsHeading} stats={stats} />
    </section>
  )
}

const DEFAULT_STATS: StatItem[] = [
  { _uid: 'default-stat-1', component: 'statItem', value: '94%', label: 'Reseñas positivas' },
  { _uid: 'default-stat-2', component: 'statItem', value: '+300', label: 'Clientes satisfechos' },
  { _uid: 'default-stat-3', component: 'statItem', value: '+25', label: 'Agentes expertos' },
  { _uid: 'default-stat-4', component: 'statItem', value: '25+', label: 'Años de trayectoria' },
]

function StatsStrip({ heading, stats }: { heading: string; stats: StatItem[] }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Strategy section" data-gsap="scale-in">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-[24px] items-start lg:items-center relative shrink-0 w-full">
            <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px] w-full lg:w-[220px] whitespace-pre-wrap">{heading}</p>
            <div className="h-[81px] relative shrink-0 w-0">
              <div className="absolute inset-[0_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 81">
                  <path d="M0.5 0V81" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-wrap flex-[1_0_0] items-center justify-center gap-[16px] lg:gap-0 min-h-px min-w-px relative">
              {stats.map((s) => (
                <div key={s._uid} {...storyblokEditable(s)} className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#040404]">
                    <p className="relative shrink-0 text-[22px] lg:text-[30px] tracking-[-0.6px]">{s.value}</p>
                    <p className="opacity-60 relative shrink-0 text-[15px] tracking-[-0.15px]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
