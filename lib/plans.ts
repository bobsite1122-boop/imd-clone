import { cache } from 'react'
import { buildWhatsAppUrl } from '@/lib/contact'

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

const PLANS: Plan[] = [
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

export const getPlans = cache(async (): Promise<Plan[]> => PLANS)
