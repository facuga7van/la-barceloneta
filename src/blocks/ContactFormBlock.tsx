import { storyblokEditable } from '@storyblok/react'
import type { ContactFormBlok } from '../storyblok/types'
import ContactSection, { ContactHeader } from '../components/ContactForm'

interface Props { blok: ContactFormBlok }

export default function ContactFormBlock({ blok }: Props) {
  return (
    <div {...storyblokEditable(blok)} id="contacto" className="bg-white relative shrink-0 w-full" data-name="Form" data-gsap="scale-in">
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
          <ContactHeader />
          <ContactSection />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  )
}
