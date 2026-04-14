import { Suspense } from 'react'
import { storyblokEditable } from '@storyblok/react'
import { blockComponents } from '../storyblok/components'
import type { AnyBlok } from '../storyblok/types'

interface BlockResolverProps {
  bloks: AnyBlok[]
}

export default function BlockResolver({ bloks }: BlockResolverProps) {
  return (
    <>
      {bloks.map((blok) => {
        const Component = blockComponents[blok.component]
        if (!Component) {
          console.warn(`Unknown block type: ${blok.component}`)
          return null
        }
        return (
          <Suspense key={blok._uid} fallback={<div className="min-h-[200px]" />}>
            <Component blok={blok} {...storyblokEditable(blok)} />
          </Suspense>
        )
      })}
    </>
  )
}
