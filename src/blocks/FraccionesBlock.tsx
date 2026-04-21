import { useRef, useState } from 'react'
import { storyblokEditable } from '@storyblok/react'
import type { FraccionesBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: FraccionesBlok }

const TOTAL_FRACTIONS = 8
const TOTAL_DOTS = TOTAL_FRACTIONS + 1

export default function FraccionesBlock({ blok }: Props) {
  const tipologias = blok.tipologias ?? []
  const [activeIdx, setActiveIdx] = useState(0)
  const [activeDot, setActiveDot] = useState(1)
  const active = tipologias[activeIdx] ?? tipologias[0]
  const base = active?.base_price ?? 0
  const fractions = activeDot
  const investment = base * fractions

  const pct = (v: number) => (v || 0) / 100
  const rentaEspera = fractions > 0 ? Math.round((investment * pct(blok.renta_espera_pct)) / 12) : 0
  const rentaHotelera = fractions > 0 ? Math.round((investment * pct(blok.renta_hotelera_pct)) / 12) : 0
  const rentaAsegurada = fractions > 0 ? Math.round((investment * pct(blok.renta_asegurada_pct)) / 12) : 0

  const fmt = (n: number) => n.toLocaleString('es-AR')
  const planSrc = active?.image?.filename ? resolveImage(active.image) : ''

  return (
    <section
      {...storyblokEditable(blok)}
      id="fracciones"
      className="relative shrink-0 w-full"
      data-name="Strategy section"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] lg:pb-[40px] pt-[32px] lg:pt-[48px] px-[24px] lg:px-[80px] xl:px-[260px] relative w-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] items-start lg:items-center relative shrink-0 w-full" data-gsap="fade-up">
          <div className="content-stretch flex items-end relative shrink-0 w-full lg:flex-1">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
              <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">{blok.title}</h2>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[450px]">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[16px] tracking-[-0.15px] w-full">
              <p className="leading-[1.4] whitespace-pre-wrap">{blok.description}</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start pt-[32px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] isolate items-center relative shrink-0 w-full lg:w-[713px] overflow-hidden" data-gsap="fade-left">
            <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative rounded-[99px] shrink-0 w-full max-w-[542px] z-[3]">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
              {tipologias.map((t, i) => {
                const selected = i === activeIdx
                return (
                  <button
                    key={t._uid}
                    type="button"
                    {...storyblokEditable(t)}
                    onClick={() => setActiveIdx(i)}
                    className={`flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[40px] cursor-pointer transition-colors duration-200 ${selected ? 'bg-[#040404]' : ''}`}
                  >
                    <div className="flex items-center justify-center size-full">
                      <span className={`font-['Helvetica:Regular',sans-serif] text-[15px] text-center tracking-[-0.15px] whitespace-nowrap transition-colors duration-200 ${selected ? 'text-white' : 'text-[#040404]'}`}>
                        {t.name}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            <FloorPlan planSrc={planSrc} altText={active?.image?.alt} fraction={activeDot} totalFractions={TOTAL_DOTS} onFractionChange={setActiveDot} />

            <div className="content-stretch flex isolate items-center relative shrink-0 w-full z-[1] px-[8px] mb-8">
              {Array.from({ length: TOTAL_DOTS }).flatMap((_, i) => {
                const isSelected = i === activeDot
                const isBefore = i <= activeDot
                const items: React.ReactElement[] = []
                if (i > 0) {
                  items.push(
                    <div key={`d-${i}`} className={`flex-[1_0_0] h-[2px] min-h-px min-w-px transition-colors duration-300 ${isBefore ? 'bg-[#040404]' : 'bg-[#c4c4c4]'}`} />
                  )
                }
                items.push(
                  <button
                    key={`b-${i}`}
                    type="button"
                    onClick={() => setActiveDot(i)}
                    className="relative cursor-pointer flex items-center justify-center shrink-0 p-[4px]"
                    aria-label={`${i}/${TOTAL_FRACTIONS} fracciones`}
                  >
                    {isSelected ? (
                      <div className="bg-[#040404] rounded-[9999px] size-[14px] relative transition-transform duration-300 scale-100">
                        <p className="absolute font-['Helvetica:Bold',sans-serif] font-bold text-[#040404] text-[16px] tracking-[-0.16px] leading-[1.2] top-[20px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                          {`${i}/${TOTAL_FRACTIONS}`}
                        </p>
                      </div>
                    ) : (
                      <div className={`rounded-[9999px] size-[14px] border-2 transition-all duration-300 ${isBefore ? 'bg-[#040404] border-[#040404]' : 'bg-white border-[#c4c4c4]'}`} />
                    )}
                  </button>
                )
                return items
              })}
            </div>
          </div>

          <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.2] min-h-px lg:min-w-px not-italic py-[20px] lg:py-[40px] relative border-t border-[rgba(0,0,0,0.1)] lg:border-none lg:self-stretch" data-gsap="fade-right">
            <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] w-full">
              <p className="relative shrink-0">TU INVERSIÓN</p>
              <p key={investment} className="relative shrink-0 text-right animate-[numberPop_0.3s_ease-out]">U$D {fmt(investment)}</p>
            </div>
            <RentaRow label="RENTA DE ESPERA" rate={blok.renta_espera_pct} value={rentaEspera} fmt={fmt} />
            <RentaRow label="RENTA HOTELERA" rate={blok.renta_hotelera_pct} value={rentaHotelera} fmt={fmt} />
            <RentaRow label="RENTA ASEGURADA" rate={blok.renta_asegurada_pct} value={rentaAsegurada} fmt={fmt} />
            {blok.disclaimer ? (
              <p className="font-['Helvetica:Regular',sans-serif] opacity-70 text-[#040404] text-[12px] lg:text-[13px] tracking-[-0.13px] w-full lg:w-[393px] whitespace-pre-wrap">{blok.disclaimer}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

function RentaRow({ label, rate, value, fmt }: { label: string; rate: number; value: number; fmt: (n: number) => string }) {
  return (
    <div className="content-stretch flex items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
      <div className="flex flex-[1_0_0] flex-col items-start justify-center min-w-0">
        <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[14px] lg:text-[22px] tracking-[-0.22px]">{label}</p>
        <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] lg:text-[15px] tracking-[-0.15px] opacity-70">({rate}% anual)</p>
      </div>
      <div className="flex items-end justify-end shrink-0">
        <p key={value} className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] animate-[numberPop_0.3s_ease-out]">+U$D {fmt(value)}</p>
        <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[11px] lg:text-[13px] tracking-[-0.13px]">/MES</p>
      </div>
    </div>
  )
}

interface FloorPlanProps {
  planSrc: string
  altText?: string
  fraction: number
  totalFractions: number
  onFractionChange: (f: number) => void
}

function FloorPlan({ planSrc, altText, fraction, totalFractions, onFractionChange }: FloorPlanProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const getFraction = (clientX: number) => {
    if (!containerRef.current) return fraction
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return Math.round((x / rect.width) * (totalFractions - 1))
  }
  const overlayPct = (fraction / (totalFractions - 1)) * 100

  return (
    <div
      ref={containerRef}
      className="content-stretch flex shrink-0 isolate items-center justify-center h-[220px] sm:h-[280px] md:h-[350px] lg:h-[422px] relative w-full z-[2] select-none cursor-ew-resize"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        onFractionChange(getFraction(e.clientX))
      }}
      onPointerMove={(e) => {
        if (e.buttons === 0) return
        onFractionChange(getFraction(e.clientX))
      }}
    >
      <div className="relative h-[200px] sm:h-[260px] md:h-[330px] lg:h-[422px] shrink-0 w-full max-w-[597.609px] z-[1]">
        {planSrc && (
          <img
            alt={altText || 'Plano del departamento'}
            loading="lazy"
            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
            src={planSrc}
          />
        )}
      </div>
      <div
        className="absolute top-0 left-0 h-full bg-[rgba(0,0,0,0.08)] z-[2] pointer-events-none"
        style={{ width: `${overlayPct}%`, transition: 'width 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#040404]" />
      </div>
    </div>
  )
}
