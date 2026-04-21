import { storyblokEditable } from '@storyblok/react'
import type { EquipoBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'
import svgPaths from '../imports/svg-36x96stg2x'

interface Props { blok: EquipoBlok }

export default function EquipoBlock({ blok }: Props) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="equipo"
      className="relative shrink-0 w-full"
      data-name="Strategy section"
      data-gsap="fade-left"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Title">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full lg:w-[487px]">
              <p className="leading-[1.2] whitespace-pre-wrap">{blok.title}</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
              <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#555] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">
                Apostamos al talento, la formación constante y la innovación.
                <br aria-hidden="true" />
                {` Nuestros talleres internos forman a los agentes en inversión, comunicación y tecnología, creando una comunidad profesional que comparte propósito y resultados.`}
              </p>
            </div>
          </div>
          <div className="content-start flex flex-col sm:flex-row sm:flex-wrap gap-[24px] sm:gap-[48px_34px] items-start relative shrink-0 w-full lg:w-[657px]" data-name="Peoples">
            {blok.members.map((m) => (
              <MemberCard key={m._uid} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface MemberCardProps {
  member: EquipoBlok['members'][number]
}

function MemberCard({ member }: MemberCardProps) {
  const photoSrc = member.photo?.filename ? resolveImage(member.photo) : ''
  return (
    <div
      {...storyblokEditable(member)}
      className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative"
      data-name="Card"
    >
      <div className="bg-[#c4c4c4] h-[351px] overflow-clip relative shrink-0 w-full" data-name="Image">
        {photoSrc && (
          <div className="absolute inset-[-3px_-22.5px_0_-22px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt={member.photo.alt || member.name} className="absolute h-[144.92%] left-[-57.87%] max-w-none top-[-15.48%] w-[215.73%]" src={photoSrc} loading="lazy" />
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[3px] items-start leading-[1.2] not-italic relative shrink-0 text-[#141414]" data-name="Name">
          <p className="relative shrink-0 text-[22px] lg:text-[30px] tracking-[-0.6px]">{member.name}</p>
          <p className="opacity-80 relative shrink-0 text-[13px] tracking-[-0.13px]">{member.role}</p>
        </div>
        {member.linkedin ? (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} en LinkedIn`} className="relative shrink-0 size-[30px]">
            <LinkedinIcon />
          </a>
        ) : null}
      </div>
    </div>
  )
}

function LinkedinIcon() {
  return (
    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
      <path clipRule="evenodd" d={svgPaths.p39987880} fill="var(--fill-0, #141414)" fillRule="evenodd" />
    </svg>
  )
}
