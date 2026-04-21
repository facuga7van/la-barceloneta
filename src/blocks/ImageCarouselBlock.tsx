import { useCallback, useEffect, useRef, useState } from 'react'
import { storyblokEditable } from '@storyblok/react'
import type { ImageCarouselBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: ImageCarouselBlok }

export default function ImageCarouselBlock({ blok }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number>()
  const scrollPos = useRef(0)
  const speed = blok.scroll_speed || 0.6
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollStart = useRef(0)

  useEffect(() => {
    const el = trackRef.current
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
  }, [isPaused, speed])

  useEffect(() => {
    const el = trackRef.current
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
    const el = trackRef.current
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

  const items = [...blok.images, ...blok.images]

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const el = trackRef.current
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
      {...storyblokEditable(blok)}
      className="w-full overflow-hidden bg-black shrink-0 relative"
      data-name="Images"
    >
      <div
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galería de imágenes del proyecto"
        className="flex gap-[16px] p-[16px] overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab focus:outline-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); isDragging.current = false }}
        onKeyDown={handleKeyDown}
      >
        {items.map((img, i) => {
          const isDuplicate = i >= blok.images.length
          const editable = isDuplicate ? {} : storyblokEditable(img)
          const src = img.image?.filename ? resolveImage(img.image) : ''
          if (!src) return null
          return (
            <div
              key={`${img._uid}-${i}`}
              {...editable}
              className="flex-none w-[305px] h-[410px] overflow-hidden group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const imgEl = e.currentTarget.querySelector('img')
                if (!imgEl) return
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * -10
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
                imgEl.style.transform = `scale(1.08) translate(${x}px, ${y}px)`
              }}
              onMouseLeave={(e) => {
                const imgEl = e.currentTarget.querySelector('img')
                if (imgEl) imgEl.style.transform = ''
              }}
            >
              <img
                src={src}
                alt={img.alt || img.image.alt || ''}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out pointer-events-none"
              />
            </div>
          )
        })}
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-black/60 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-black/60 to-transparent z-10" />
    </div>
  )
}
