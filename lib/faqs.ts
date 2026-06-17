import { cache } from 'react'
import type { FaqEntry } from '@/lib/faq-answers'
import { getFaqContent } from '@/lib/cms/reader'

export const getFaqs = cache(async (): Promise<FaqEntry[]> => {
  const faqs = await getFaqContent()
  return [...faqs].sort((a, b) => a.order - b.order)
})

export function getSubscriptionFaqs(faqs: FaqEntry[]) {
  return faqs.filter((faq) => faq.category === 'subscription')
}

export function getAppFaqs(faqs: FaqEntry[]) {
  return faqs.filter((faq) => faq.category === 'app')
}
