import { storyblokEditable } from '@storyblok/react'
import type { AvanceObraBlok } from '../storyblok/types'
import ConstructionTimeline, { type TimelineStep } from '../components/ConstructionTimeline'
import { resolveImage } from '../storyblok/image'

interface Props { blok: AvanceObraBlok }

export default function AvanceObraBlock({ blok }: Props) {
  const imgSrc = blok.image?.filename ? resolveImage(blok.image) : ''
  const steps: TimelineStep[] = (blok.steps ?? []).map((s) => ({
    date: s.date,
    pct: s.percentage,
    label: s.label,
    description: s.description,
  }))

  return (
    <section
      {...storyblokEditable(blok)}
      id="avance"
      className="bg-white content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center py-[40px] lg:py-[80px] relative shrink-0 w-full"
      data-name="Avance de obra"
      data-gsap="fade-right"
    >
      <div className="content-stretch flex flex-col lg:flex-row font-['Helvetica:Regular',sans-serif] gap-[12px] lg:gap-[32px] items-start lg:items-center leading-[0] not-italic relative shrink-0 w-full px-[16px] lg:px-[64px] xl:px-[120px]">
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
          <p className="leading-[1.2] whitespace-pre-wrap">{blok.title}</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px]">
          <p className="leading-[1.2] whitespace-pre-wrap">{blok.subtitle}</p>
        </div>
      </div>
      <div className="px-[16px] lg:px-[64px] xl:px-[120px] w-full">
        <ConstructionTimeline
          imageSrc={imgSrc}
          steps={steps.length > 0 ? steps : undefined}
          activeStep={blok.active_step}
          getStepProps={(_s, i) => (blok.steps?.[i] ? storyblokEditable(blok.steps[i]) : {})}
        />
      </div>
    </section>
  )
}
