import Link from 'next/link'
import type { ReactNode } from 'react'
import FAQContactLinks from '@/components/FAQContactLinks'
import type { ContactSettings } from '@/lib/contact'

export type FaqEntry = {
  slug: string
  question: string
  answer: string
  category: 'subscription' | 'app'
  order: number
}

export function mapFaqAnswer(
  slug: string,
  answer: string,
  contact: ContactSettings,
): ReactNode {
  if (slug === 'what-is-the-imd-subscription') {
    return (
      <>
        <p>{answer}</p>
        <Link
          href="/databases"
          className="mt-3 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-[13px] sm:text-[14px] font-semibold transition-colors"
        >
          View Resources
        </Link>
      </>
    )
  }

  if (slug === 'how-do-i-purchase-an-imd-subscription') {
    const paragraphs = answer.split(/\n\s*\n/)
    return (
      <>
        <p className="font-semibold text-slate-700">{paragraphs[0]}</p>
        {paragraphs[1] ? <p>{paragraphs[1]}</p> : null}
        <FAQContactLinks contact={contact} />
      </>
    )
  }

  return answer
}
