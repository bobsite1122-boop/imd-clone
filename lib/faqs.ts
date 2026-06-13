import { cache } from 'react'
import { reader } from '@/lib/reader'
import type { FaqEntry } from '@/lib/faq-answers'

export const getFaqs = cache(async (): Promise<FaqEntry[]> => {
  try {
    const entries = await reader.collections.faqs.all()
    if (entries.length === 0) return []

    return entries
      .map(({ slug, entry }) => ({
        slug,
        question: entry.question,
        answer: entry.answer,
        category: entry.category,
        order: entry.order ?? 0,
      }))
      .sort((a, b) => a.order - b.order)
  } catch {
    return []
  }
})

export function getSubscriptionFaqs(faqs: FaqEntry[]) {
  return faqs.filter((faq) => faq.category === 'subscription')
}

export function getAppFaqs(faqs: FaqEntry[]) {
  return faqs.filter((faq) => faq.category === 'app')
}
