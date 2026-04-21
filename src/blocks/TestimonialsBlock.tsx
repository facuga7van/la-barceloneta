import { useCallback, useEffect, useRef, useState } from 'react'
import { storyblokEditable } from '@storyblok/react'
import type { TestimonialsBlok } from '../storyblok/types'

interface Props { blok: TestimonialsBlok }

export default function TestimonialsBlock({ blok }: Props) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="testimonios"
      className="relative shrink-0 w-full"
      data-name="Strategy section"
      data-gsap="scale-in"
    >
      <div className="content-stretch flex flex-col items-start pl-[16px] pr-[16px] lg:pl-[32px] lg:pr-0 pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-[80px] relative w-full overflow-hidden">
        <header className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px] w-full lg:w-[454px]">
              <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">{blok.title}</h2>
            </div>
          </div>
          <div className="hidden lg:block flex-[1_0_0] min-h-px min-w-px" />
        </header>
        {blok.description ? (
          <p className="mt-[16px] font-['Helvetica:Regular',sans-serif] leading-[1.5] text-[15px] text-[#575757] tracking-[-0.15px] max-w-[700px]">{blok.description}</p>
        ) : null}
        <div className="relative w-[calc(100%+16px)] lg:w-full -mr-[16px] lg:mr-0">
          <InfiniteTestimonialCarousel testimonials={blok.testimonials} />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </section>
  )
}

interface CarouselProps {
  testimonials: TestimonialsBlok['testimonials']
}

function InfiniteTestimonialCarousel({ testimonials }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number>()
  const scrollPos = useRef(0)
  const speed = 0.5
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollStart = useRef(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const halfWidth = el.scrollWidth / 2
    const animate = () => {
      if (!isPaused && !isDragging.current) {
        scrollPos.current += speed
        if (scrollPos.current >= halfWidth) scrollPos.current -= halfWidth
        el.scrollLeft = scrollPos.current
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPaused])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStartX.current = e.pageX
      dragScrollStart.current = el.scrollLeft
      el.style.cursor = 'grabbing'
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const dx = e.pageX - dragStartX.current
      const newScroll = dragScrollStart.current - dx
      el.scrollLeft = newScroll
      scrollPos.current = newScroll
    }
    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      el.style.cursor = 'grab'
      scrollPos.current = el.scrollLeft
    }
    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      dragStartX.current = e.touches[0].pageX
      dragScrollStart.current = el.scrollLeft
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      const dx = e.touches[0].pageX - dragStartX.current
      const newScroll = dragScrollStart.current - dx
      el.scrollLeft = newScroll
      scrollPos.current = newScroll
    }
    const onTouchEnd = () => {
      isDragging.current = false
      scrollPos.current = el.scrollLeft
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  const items = [...testimonials, ...testimonials]

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const el = scrollRef.current
    if (!el) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      el.scrollLeft -= 300
      scrollPos.current = el.scrollLeft
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      el.scrollLeft += 300
      scrollPos.current = el.scrollLeft
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonios de inversores"
      className="mt-[32px] lg:mt-[48px] flex gap-[16px] overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full cursor-grab focus:outline-none select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); isDragging.current = false }}
      onKeyDown={handleKeyDown}
    >
      {items.map((t, i) => (
        <TestimonialCard key={`${t._uid}-${i}`} testimonial={t} isDuplicate={i >= testimonials.length} />
      ))}
    </div>
  )
}

interface CardProps {
  testimonial: TestimonialsBlok['testimonials'][number]
  isDuplicate: boolean
}

function TestimonialCard({ testimonial, isDuplicate }: CardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const editable = isDuplicate ? {} : storyblokEditable(testimonial)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
  }, [])

  const onMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }, [])

  return (
    <article
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...editable}
      className="flex flex-col gap-[6px] shrink-0 w-[220px] sm:w-[240px] lg:w-[280px] snap-start relative pr-[16px] transition-transform duration-300 ease-out cursor-default"
    >
      <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]" />
      <p className="font-['Helvetica:Bold',sans-serif] font-bold text-[16px] lg:text-[20px] text-[#141414] tracking-[-0.3px] leading-[1.2]">{testimonial.name}</p>
      <span className="font-['Helvetica:Regular',sans-serif] text-[12px] lg:text-[13px] text-[#575757] tracking-[-0.13px] leading-[1.4]">{testimonial.subtitle}</span>
      <p className="font-['Helvetica:Regular',sans-serif] text-[14px] lg:text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.5] mt-[8px]">"{testimonial.quote}"</p>
    </article>
  )
}
