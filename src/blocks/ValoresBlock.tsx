import { storyblokEditable } from '@storyblok/react'
import type { ValoresBlok } from '../storyblok/types'

interface Props { blok: ValoresBlok }

const CARD_BORDERS = [
  'border-b border-r border-solid border-t',
  'border-b border-solid border-t',
  'border-b border-r border-solid',
  'border-b border-solid',
]

export default function ValoresBlock({ blok }: Props) {
  return (
    <>
      <section
        {...storyblokEditable(blok)}
        id="valores"
        className="relative shrink-0 w-full"
        data-name="Strategy section"
      >
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-[32px] lg:pb-[60px] pt-[40px] lg:pt-[80px] px-[16px] lg:px-[32px] relative w-full">
          <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-[16px] lg:gap-0 relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
            <div className="content-stretch flex items-end relative shrink-0 w-full lg:w-[562px]" data-name="Title">
              <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[36px] lg:text-[60px] text-black tracking-[-0.6px]">
                <h2 data-gsap-title className="block leading-[1.1] whitespace-pre-wrap">{blok.title}</h2>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-[265px]" data-name="Content">
              <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
                <p className="leading-[1.2] whitespace-pre-wrap">Creando espacios visionarios con precisión y arte. Eleva tu arquitectura con diseño y innovación de vanguardia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-start flex flex-col lg:flex-row lg:flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="Cards" data-gsap="scale-in">
        {blok.valores.map((v, i) => (
          <ValorCard key={v._uid} valor={v} borderClass={CARD_BORDERS[i] ?? CARD_BORDERS[CARD_BORDERS.length - 1]} showTopSpacer={i > 0} />
        ))}
      </div>
    </>
  )
}

interface ValorCardProps {
  valor: ValoresBlok['valores'][number]
  borderClass: string
  showTopSpacer: boolean
}

function ValorCard({ valor, borderClass, showTopSpacer }: ValorCardProps) {
  return (
    <div className={`bg-white h-auto min-h-[300px] lg:h-[426px] min-w-0 lg:min-w-[340px] relative shrink-0 w-full lg:w-[612px]`} {...storyblokEditable(valor)}>
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[24px] lg:p-[40px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Content">
          <CrossIcon />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
            {showTopSpacer && <div className="shrink-0 size-[100px]" />}
            <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[36px] lg:text-[60px] tracking-[-0.6px]">{valor.name}</p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full whitespace-pre-wrap">{valor.description}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute ${borderClass} border-[rgba(0,0,0,0.1)] inset-0 pointer-events-none`} />
    </div>
  )
}

function CrossIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-10 place-items-start relative shrink-0" data-name="Icon">
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Icon">
        <div className="bg-[#48749e] col-1 h-[80px] ml-[34.67px] mt-0 row-1 w-[10.667px]" />
        <div className="col-1 flex items-center justify-center ml-[7.94px] mt-[7.95px] relative row-1 size-[64.111px]">
          <div className="flex-none rotate-45">
            <div className="bg-[#48749e] h-[80px] w-[10.667px]" />
          </div>
        </div>
        <div className="col-1 flex h-[10.667px] items-center justify-center ml-0 mt-[34.67px] relative row-1 w-[80px]">
          <div className="flex-none rotate-90">
            <div className="bg-[#48749e] h-[80px] w-[10.667px]" />
          </div>
        </div>
        <div className="col-1 flex items-center justify-center ml-[7.95px] mt-[7.95px] relative row-1 size-[64.111px]">
          <div className="flex-none rotate-[135deg]">
            <div className="bg-[#48749e] h-[80px] w-[10.667px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
