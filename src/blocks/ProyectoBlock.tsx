import { storyblokEditable } from '@storyblok/react'
import type { ProyectoBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'
import svgPaths from '../imports/svg-1a10080iez'
import imgLogoFeelFree from 'figma:asset/LB BS AS FEEL FREE - ROSA.svg'
import imgSeccionOctavos from 'figma:asset/SECCION-MOSTRANDO-OCTAVOS.webp'

interface Props { blok: ProyectoBlok }

export default function ProyectoBlock({ blok }: Props) {
  const bgSrc = blok.background_image?.filename ? resolveImage(blok.background_image) : ''
  const displayLine1 = blok.display_line1 || 'La Barceloneta'
  const displayLine2 = blok.display_line2 || blok.location_city || 'buenos aires'
  const sectionTitle = blok.section_title || 'Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado'
  const sectionDescription = blok.section_description || 'La Barceloneta Buenos Aires es un desarrollo donde cada unidad se divide en 8 fracciones (1/8), permitiendo invertir desde USD 22.500 con escritura pública y rentabilidad en dólares. Somos la única empresa en CABA que comercializa departamentos fraccionados bajo este formato.'
  const sectionImgSrc = blok.section_image?.filename ? resolveImage(blok.section_image) : imgSeccionOctavos

  return (
    <div
      {...storyblokEditable(blok)}
      aria-label="Section 2 out of 6"
      className="relative shrink-0 w-full"
      data-name="Personality Section"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[16px] lg:px-[64px] xl:px-[120px] py-[40px] lg:py-[80px] relative w-full">
        <header className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-gsap="fade-up">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px] whitespace-nowrap">
              <h2 data-gsap-title className="block leading-[1.2]">{blok.title}</h2>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
              <div className="flex-[1_0_0] h-full min-h-px min-w-px" />
            </div>
          </div>
        </header>

        <div className="content-stretch flex flex-col h-[280px] sm:h-[400px] md:h-[550px] lg:h-[763px] items-start pb-0 lg:pb-[64px] relative shrink-0 w-full overflow-hidden" data-name="Portada / Bs As">
          <div className="bg-[#0d3477] flex-[1_0_0] min-h-px min-w-px relative w-full overflow-visible" data-gsap="scale-in" data-parallax="slow">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
            {bgSrc && (
              <div className="absolute aspect-[592/665] bottom-[20px] lg:bottom-[40px] mix-blend-screen opacity-84 right-[16px] lg:right-[62px] top-[60px] sm:top-[20px] lg:top-[35px] w-[50%] sm:w-auto animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt={blok.background_image.alt || 'Edificio La Barceloneta'} loading="lazy" className="absolute h-[114.29%] left-[-0.05%] max-w-none top-[-14.29%] w-[100.11%]" src={bgSrc} />
                </div>
              </div>
            )}
            <div className="hidden lg:flex absolute bg-[#ff5a63] bottom-[-40px] content-stretch h-auto items-center p-[30px] right-[98px] w-[295px] z-10">
              <div className="content-stretch flex flex-col gap-[24px] lg:gap-[59px] items-start relative shrink-0 w-full lg:w-[235px]">
                <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[18px] lg:text-[22px] text-white tracking-[-0.22px] w-[min-content] whitespace-pre-wrap">{blok.price_label}</p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[22px] lg:text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">{blok.price}</p>
                  <div className="h-0 relative shrink-0 w-full lg:w-[235px]">
                    <div className="absolute inset-[-0.5px_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 1">
                        <path d="M0 0.5H235" stroke="var(--stroke-0, white)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  {blok.features.map((f) => (
                    <div key={f._uid} {...storyblokEditable(f)} className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <CheckIcon />
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px]">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute h-[50px] lg:h-[82px] left-[16px] lg:left-[72px] top-[16px] lg:top-[35px] w-[200px] lg:w-[334px]">
              <img alt="La Barceloneta Feel Free" loading="lazy" className="absolute inset-0 max-w-none object-contain object-left pointer-events-none size-full" src={imgLogoFeelFree} />
            </div>
            <div className="absolute font-['Barlow_Condensed:Medium',sans-serif] left-[16px] lg:left-[5.84%] bottom-[16px] lg:bottom-auto lg:top-[40.04%] right-[40%] sm:right-[16px] lg:right-[12.41%] leading-none not-italic text-[#ff5a63] text-[24px] sm:text-[40px] lg:text-[101.098px] tracking-[-1px] sm:tracking-[-3px] lg:tracking-[-8.7698px] uppercase whitespace-pre-wrap z-10">
              <p className="mb-0">{displayLine1}</p>
              <p>{displayLine2}</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col md:flex-row gap-[32px] items-start py-[24px] relative shrink-0 w-full" data-gsap="fade-up">
          <div className="w-full md:w-[240px] md:shrink-0 relative">
            <div className="flex flex-row md:flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] flex-wrap">
              <InfoRow label={blok.delivery_label} value={blok.delivery_date} />
              <InfoRow label="Ubicación" value={blok.location_name} />
            </div>
          </div>
          <div className="content-stretch flex w-full md:flex-1 md:min-w-0 flex-col gap-[24px] md:gap-[32px] items-start relative">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] text-black tracking-[-0.22px]">
                <h3 className="block leading-[1.2] whitespace-pre-wrap">{sectionTitle}</h3>
              </div>
            </div>
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] md:text-[18px] tracking-[-0.15px] w-full">
              <p className="leading-[1.6] whitespace-pre-wrap">{sectionDescription}</p>
            </div>
            <div className="hidden md:block aspect-[860/400] relative shrink-0 w-full max-h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-[8px] pointer-events-none">
                <img alt={blok.section_image?.alt || 'Sección mostrando octavos'} loading="lazy" className="absolute inset-0 max-w-none object-cover size-full" src={sectionImgSrc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">{label}</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[#575757] tracking-[-0.15px]">
        <p className="leading-[1.2] whitespace-pre-wrap">{value}</p>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p39131100} fill="var(--fill-0, white)" />
      </svg>
    </div>
  )
}
