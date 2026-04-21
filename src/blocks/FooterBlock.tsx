import { Facebook as FbIcon, Instagram as IgIcon, Linkedin as LiIcon } from 'lucide-react'
import { storyblokEditable } from '@storyblok/react'
import type { FooterBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: FooterBlok }

export default function FooterBlock({ blok }: Props) {
  const logoSrc = resolveImage(blok.logo)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors text-inherit cursor-pointer text-left bg-transparent border-none p-0"

  return (
    <footer {...storyblokEditable(blok)} className="bg-[#040404] relative shrink-0 w-full" data-name="Container" data-gsap="fade-up">
      <div aria-hidden="true" className="absolute border-[#575757] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[40px] px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-0 items-start justify-between w-full">
          <div className="flex flex-col gap-[24px]">
            <div className="h-[98.092px] relative shrink-0 w-[205.243px]">
              <img alt={blok.logo.alt || 'Logo'} loading="lazy" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={logoSrc} />
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#575757] text-[14px] tracking-[-0.14px] leading-[1.5] max-w-[300px]">
              {blok.tagline}
            </p>
          </div>
          <div className="content-stretch flex flex-row flex-wrap gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-auto">
            {blok.sections_links.length > 0 && (
              <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[calc(50%-12px)] sm:w-[160px]">
                <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full">
                  <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
                    <p className="leading-[1.2]">Secciones</p>
                  </div>
                </div>
                {blok.sections_links.map(link => (
                  <div key={link._uid} className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
                    <button type="button" onClick={() => scrollTo(link.anchor)} className={linkCls}>{link.label}</button>
                  </div>
                ))}
              </nav>
            )}
            {blok.info_links.length > 0 && (
              <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[calc(50%-12px)] sm:w-[160px]">
                <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full">
                  <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
                    <p className="leading-[1.2]">Info</p>
                  </div>
                </div>
                {blok.info_links.map(link => (
                  <div key={link._uid} className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
                    <button type="button" onClick={() => scrollTo(link.anchor)} className={linkCls}>{link.label}</button>
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[24px] border-t border-[#1a1a1a] pt-[24px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-[257px]">
            <div className="flex gap-[32px] items-center w-full">
              {blok.social_facebook && (
                <a href={blok.social_facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                  <FbIcon size={24} strokeWidth={1.5} />
                </a>
              )}
              {blok.social_instagram && (
                <a href={blok.social_instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                  <IgIcon size={24} strokeWidth={1.5} />
                </a>
              )}
              {blok.social_linkedin && (
                <a href={blok.social_linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                  <LiIcon size={24} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
          <p className="font-['Helvetica:Regular',sans-serif] text-[#575757] text-[13px] tracking-[-0.13px]">
            © {new Date().getFullYear()} {blok.copyright_text}
          </p>
        </div>
      </div>
    </footer>
  )
}
