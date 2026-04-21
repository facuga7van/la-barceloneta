import { useEffect } from 'react'
import { blockComponents } from '../storyblok/components'
import type { AnyBlok } from '../storyblok/types'

interface BlockResolverProps {
  bloks: AnyBlok[]
}

export default function BlockResolver({ bloks }: BlockResolverProps) {
  // After blocks mount, tell GSAP/ScrollTrigger to re-scan the DOM
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      import('../lib/gsap-setup').then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh()
      })
    })
    return () => cancelAnimationFrame(id)
  }, [bloks])

  return (
    <>
      {bloks.map((blok) => {
        const Component = blockComponents[blok.component]
        if (!Component) {
          console.warn(`Unknown block type: ${blok.component}`)
          return null
        }
        return <Component key={blok._uid} blok={blok} />
      })}
    </>
  )
}
