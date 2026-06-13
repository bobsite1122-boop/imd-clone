import type { Metadata } from 'next'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import { getContactSettings } from '@/lib/contact'
import { mapFaqAnswer } from '@/lib/faq-answers'
import { getAppFaqs, getFaqs, getSubscriptionFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'FAQs - iMD App PK',
  description:
    'Find answers to common questions about iMD Subscription, the iMD App, payments, and more.',
}

export const revalidate = 3600

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[#0e3b77] font-extrabold text-[22px] sm:text-[24px] mt-12 sm:mt-14 mb-5 sm:mb-6">
      {children}
    </h2>
  )
}

export default async function FAQsPage() {
  const [faqs, contact] = await Promise.all([getFaqs(), getContactSettings()])

  const subscriptionItems: FAQItem[] = getSubscriptionFaqs(faqs).map((faq) => ({
    question: faq.question,
    answer: mapFaqAnswer(faq.slug, faq.answer, contact),
  }))

  const appItems: FAQItem[] = getAppFaqs(faqs).map((faq) => ({
    question: faq.question,
    answer: mapFaqAnswer(faq.slug, faq.answer, contact),
  }))

  return (
    <div className="bg-[#f3f6fb]">
      <section className="bg-[#eaf2fb] py-10 sm:py-12 lg:py-14 text-center">
        <div className="container-main">
          <h1 className="font-display text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#0e3b77]">
            FAQs
          </h1>
        </div>
      </section>

      <section className="pt-10 sm:pt-14 pb-2">
        <div className="container-main text-center">
          <h2 className="font-display text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0e3b77] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-500 text-[13px] sm:text-sm max-w-[420px] mx-auto leading-relaxed">
            Find answers to common questions about iMD Subscription, the iMD
            App, payments, and more.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto px-6 sm:px-8 max-w-[720px] lg:max-w-[540px] lg:px-4">
          <SectionTitle>Subscription</SectionTitle>
          <FAQAccordion items={subscriptionItems} startIndex={1} />
          <SectionTitle>The App</SectionTitle>
          <FAQAccordion
            items={appItems}
            startIndex={subscriptionItems.length + 1}
          />
        </div>
      </section>
    </div>
  )
}
