import { storyblokEditable } from '@storyblok/react'
import type { ComoInvertirBlok } from '../storyblok/types'

interface Props { blok: ComoInvertirBlok }

export default function ComoInvertirBlock({ blok }: Props) {
  return (
    <div {...storyblokEditable(blok)} id="como-invertir" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* Mobile: clean stacked steps */}
      <div className="lg:hidden w-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[60px] relative w-full">
          <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
              <h2 className="block leading-[1.2]">{blok.title}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            {blok.steps.map((step) => (
              <div key={step.number} className="flex gap-[16px] items-start w-full">
                <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[28px] text-[#f45f00] tracking-[-0.6px] leading-[1] shrink-0 w-[28px] text-right">{step.number}</span>
                <div className="flex flex-col gap-[6px] pt-[2px]">
                  <h3 className="font-['Helvetica:Bold',sans-serif] font-bold text-[18px] text-black tracking-[-0.3px] leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="font-['Helvetica:Regular',sans-serif] text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.4]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop: sticky scroll sections — full implementation preserved from original */}
      <div className="hidden lg:flex flex-col w-full">
        {blok.steps.map((step) => (
          <div key={step.number} className="relative shrink-0 w-full" data-name="Personality Section">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col lg:flex-row items-start px-[16px] lg:px-[64px] xl:px-[120px] py-[40px] lg:py-[80px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-h-px min-w-px py-[32px] relative">
                <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full">
                  <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
                    <h2 className="block leading-[1.2]">{blok.title}</h2>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[-0.22px] w-full lg:w-[325px]">
                    <h3 className="block leading-[1.2] whitespace-pre-wrap">{blok.intro_subtitle}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-auto lg:h-[790px] min-h-px min-w-px relative">
                <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
                  <div className="content-stretch flex items-end relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
                      <h2 className="whitespace-pre-wrap leading-[1.2]">
                        <span className="text-[#f45f00]">{step.number}</span>
                        {"  "}{step.title}
                      </h2>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
                      <h3 className="block leading-[1.2] whitespace-pre-wrap">{step.description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
