import type { ComoGanoBlok } from '../storyblok/types'

interface Props { blok: ComoGanoBlok }

export default function ComoGanoBlock({ blok }: Props) {
  return (
    <section id="como-gano" className="relative shrink-0 w-full" data-name="Como gano">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] lg:pb-[40px] pt-[32px] lg:pt-[48px] px-[24px] lg:px-[80px] xl:px-[260px] relative w-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] items-start lg:items-center relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
          <div className="content-stretch flex items-end relative shrink-0 w-full lg:flex-1" data-name="Title">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
              <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">{blok.title}</h2>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[450px]" data-name="Content">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[16px] tracking-[-0.15px] w-full">
              <p className="leading-[1.4] whitespace-pre-wrap">{blok.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
