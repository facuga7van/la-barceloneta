import { storyblokEditable } from '@storyblok/react'
import type { RentaCardsBlok } from '../storyblok/types'
import RentaCards, { type RentaCardData } from '../components/RentaCards'

interface Props { blok: RentaCardsBlok }

export default function RentaCardsBlock({ blok }: Props) {
  const cards: RentaCardData[] = blok.cards.map((c) => ({
    metric: c.metric,
    period: c.period,
    title: c.title,
    subtitle: c.subtitle,
    detail: c.detail,
    bgColor: c.bg_color,
  }))

  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <RentaCards
        cards={cards}
        getCardProps={(_card, i) => storyblokEditable(blok.cards[i])}
      />
    </div>
  )
}
