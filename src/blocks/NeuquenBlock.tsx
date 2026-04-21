import { storyblokEditable } from '@storyblok/react'
import type { NeuquenBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'
import { LogoGm } from '../components/HeroSection'
import svgPaths from '../imports/svg-1a10080iez'
import imgNeuquenExpansion from 'figma:asset/lb-enandb.webp'

interface Props { blok: NeuquenBlok }

export default function NeuquenBlock({ blok }: Props) {
  const imageSrc = blok.image?.filename ? resolveImage(blok.image) : ''
  const logoSrc = blok.logo?.filename ? resolveImage(blok.logo) : ''

  return (
    <div
      {...storyblokEditable(blok)}
      id="neuquen"
      aria-label="Section 2 out of 6"
      className="relative shrink-0 w-full"
      data-name="Personality Section"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] lg:gap-[30px] items-start px-[16px] lg:px-[64px] xl:px-[120px] py-[40px] lg:py-[80px] relative w-full">
        <header className="content-stretch flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[24px] pb-[32px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
              <h2 data-gsap-title className="block leading-[1.2]">{blok.title}</h2>
            </div>
            <div className="flex flex-[1_0_0] h-full min-h-px min-w-px" />
          </div>
        </header>

        <div className="content-stretch flex flex-col h-[280px] sm:h-[400px] md:h-[550px] lg:h-[763px] items-start pb-0 lg:pb-[64px] relative shrink-0 w-full overflow-hidden" data-name="Portada / Neuquen">
          <div className="bg-[#1e3d59] flex-[1_0_0] min-h-px min-w-px relative w-full overflow-hidden lg:overflow-visible" data-gsap="scale-in" data-parallax="slow">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
            {imageSrc && (
              <div className="absolute aspect-[592/665] bottom-[20px] lg:bottom-[40px] mix-blend-screen right-[16px] lg:right-[62px] top-[60px] sm:top-[20px] lg:top-[35px] w-[50%] sm:w-auto animate-[float_7s_ease-in-out_infinite]">
                <img alt={blok.image.alt || 'Edificio La Barceloneta Neuquén'} loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imageSrc} />
              </div>
            )}
            <div className="hidden lg:flex absolute bg-[#040404] bottom-[-40px] content-stretch h-auto items-center p-[30px] right-[98px] w-[295px] z-10">
              <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[235px]">
                <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full">
                  <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[22px] lg:text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">{blok.project_name}</p>
                  <div className="h-0 relative shrink-0 w-full lg:w-[235px]">
                    <div className="absolute inset-[-0.5px_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 1">
                        <path d="M0 0.5H235" stroke="var(--stroke-0, white)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {blok.features.map((f) => (
                    <div key={f._uid} {...storyblokEditable(f)} className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <CheckIcon />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
                        <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-white tracking-[-0.15px] whitespace-pre-wrap">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {logoSrc && (
              <div className="absolute h-[50px] lg:h-[82px] left-[16px] lg:left-[72px] top-[16px] lg:top-[35px] w-[200px] lg:w-[334px]">
                <img alt={blok.logo.alt || 'La Barceloneta Neuquén'} loading="lazy" className="absolute inset-0 max-w-none object-contain object-left pointer-events-none size-full" src={logoSrc} />
              </div>
            )}
            <div className="absolute font-['Barlow_Condensed:Medium',sans-serif] leading-none left-[16px] lg:left-[72px] bottom-[16px] lg:bottom-auto lg:top-[40.04%] right-[16px] lg:right-auto not-italic text-[#7ecbe2] text-[24px] sm:text-[40px] lg:text-[101.098px] tracking-[-1px] sm:tracking-[-3px] lg:tracking-[-8.7698px] uppercase whitespace-pre-wrap">
              <p className="mb-0">La Barceloneta</p>
              <p>NEUQUÉN</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start py-[32px] relative shrink-0 w-full">
          <div className="w-full lg:w-[240px] lg:shrink-0 relative">
            <div className="flex flex-row lg:flex-col gap-[24px] lg:gap-[32px] flex-wrap">
              <InfoRow label="Entrega estimada" value="Segundo semestre 2026" />
              <InfoRow label="Ubicación" value="Neuquén Capital" />
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
                  <p className="leading-[1.2] font-bold whitespace-pre-wrap">Desarrolla</p>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[99.604px]">
                  <LogoGm />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex w-full lg:flex-1 lg:min-w-0 flex-col gap-[24px] lg:gap-[32px] items-start relative">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.3px]">
                <h3 className="font-bold block leading-[1.2] whitespace-pre-wrap">Lo que nació en Buenos Aires, ahora se expande al país</h3>
              </div>
            </div>
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] lg:text-[18px] tracking-[-0.18px] w-full">
              <p className="leading-[1.6] whitespace-pre-wrap">La Barceloneta llega a Neuquén con una torre de 17 pisos diseñada para el nuevo polo energético y corporativo de la región. Un proyecto que replica el modelo condo-hotel fraccionado con foco en hotelería, negocios y crecimiento federal.</p>
            </div>
            <div className="aspect-[860/500] relative shrink-0 w-full max-h-[400px] overflow-hidden rounded-[8px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="La Barceloneta Neuquén" loading="lazy" className="absolute inset-0 max-w-none object-cover size-full" src={imgNeuquenExpansion} />
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
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[15px] tracking-[-0.15px] w-full">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">{label}</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center relative shrink-0 text-[#575757] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">{value}</p>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p39131100} fill="var(--fill-0, white)" />
      </svg>
    </div>
  )
}
