import { cache } from 'react'
import { reader } from '@/lib/reader'
import { buildWhatsAppUrl, getContactSettings } from '@/lib/contact'

export type Plan = {
  slug: string
  name: string
  price: string
  days: string
  isPopular: boolean
  features: readonly string[]
  subscribeWhatsappUrl: string
  extendWhatsappUrl: string
}

const PLAN_SLUG_ORDER = [
  '6-months-subscription',
  '1-year-subscription',
  '2-year-subscription',
] as const

const FALLBACK_PLANS: Plan[] = [
  {
    slug: '6-months-subscription',
    name: '6 Months Subscription',
    price: '$50',
    days: '180 Days',
    isPopular: false,
    features: [
      'Full Access For 180 Days',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources',
    ],
    subscribeWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      "Hi! I'm interested in the iMD App subscription. Could you please share the details?",
    ),
    extendWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      'Hi! I already have an iMD App subscription and would like to extend my subscription. Could you please guide me through the renewal process?',
    ),
  },
  {
    slug: '1-year-subscription',
    name: '1-Year Subscription',
    price: '$75',
    days: '365 Days',
    isPopular: false,
    features: [
      'Full Access For 365 Days',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources',
    ],
    subscribeWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      "Hi! I'm interested in the iMD App subscription. Could you please share the details?",
    ),
    extendWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      'Hi! I already have an iMD App subscription and would like to extend my subscription. Could you please guide me through the renewal process?',
    ),
  },
  {
    slug: '2-year-subscription',
    name: '2-Year Subscription',
    price: '$150',
    days: '730 Days',
    isPopular: false,
    features: [
      'Full Access For 730 Days',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources',
    ],
    subscribeWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      "Hi! I'm interested in the iMD App subscription. Could you please share the details?",
    ),
    extendWhatsappUrl: buildWhatsAppUrl(
      '923329722201',
      'Hi! I already have an iMD App subscription and would like to extend my subscription. Could you please guide me through the renewal process?',
    ),
  },
]

function sortPlans(plans: Plan[]) {
  return [...plans].sort((a, b) => {
    const aIndex = PLAN_SLUG_ORDER.indexOf(
      a.slug as (typeof PLAN_SLUG_ORDER)[number],
    )
    const bIndex = PLAN_SLUG_ORDER.indexOf(
      b.slug as (typeof PLAN_SLUG_ORDER)[number],
    )
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex)
  })
}

export const getPlans = cache(async (): Promise<Plan[]> => {
  try {
    const contact = await getContactSettings()
    const entries = await reader.collections.plans.all()
    if (entries.length === 0) return FALLBACK_PLANS

    const plans = entries.map(({ slug, entry }) => ({
      slug,
      name: entry.name,
      price: entry.price,
      days: entry.days,
      isPopular: entry.isPopular,
      features: entry.features,
      subscribeWhatsappUrl: buildWhatsAppUrl(
        contact.whatsappNumber,
        entry.subscribeWhatsappText,
      ),
      extendWhatsappUrl: buildWhatsAppUrl(
        contact.whatsappNumber,
        entry.extendWhatsappText,
      ),
    }))

    return sortPlans(plans)
  } catch {
    return FALLBACK_PLANS
  }
})
