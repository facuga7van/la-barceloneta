import { storyblokEditable } from '@storyblok/react'
import type { RentaCardsBlok } from '../storyblok/types'
import RentaCards from '../components/RentaCards'

interface Props { blok: RentaCardsBlok }

export default function RentaCardsBlock({ blok }: Props) {
  // TODO: pass blok.cards as prop to RentaCards when refactored
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <RentaCards />
    </div>
  )
}
