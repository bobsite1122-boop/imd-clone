import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'
import SrOnlyBreadcrumb from '@/components/SrOnlyBreadcrumb'
import { getContactSettings } from '@/lib/contact'
import { mapFaqAnswer } from '@/lib/faq-answers'
import { getAppFaqs, getFaqs, getSubscriptionFaqs } from '@/lib/faqs'
import { breadcrumbSchema, faqPageSchema, webPageSchema } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'iMD App Subscription FAQs',
  description:
    'Find answers to common questions about iMD App Subscription, payments, activation, USMLE resources, AMC QBank access, and the iMD App for medical students in Pakistan.',
  path: '/faqs',
  keywords: [
    'iMD App Subscription FAQ',
    'iMD App PK',
    'Buy iMD App Subscription',
    'Medical Subscription Pakistan',
    'USMLE Resources',
    'AMC QBank',
  ],
})

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

  const subscriptionFaqs = getSubscriptionFaqs(faqs)
  const appFaqs = getAppFaqs(faqs)

  const subscriptionItems: FAQItem[] = subscriptionFaqs.map((faq) => ({
    slug: faq.slug,
    question: faq.question,
    answer: mapFaqAnswer(faq.slug, faq.answer, contact),
  }))

  const appItems: FAQItem[] = appFaqs.map((faq) => ({
    slug: faq.slug,
    question: faq.question,
    answer: mapFaqAnswer(faq.slug, faq.answer, contact),
  }))

  const allItems = [...subscriptionItems, ...appItems]

  const faqSchemaItems = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'FAQs', path: '/faqs' },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'iMD App Subscription FAQs',
            description:
              'Find answers to common questions about iMD App Subscription, payments, and the iMD App.',
            path: '/faqs',
          }),
          faqPageSchema(faqSchemaItems),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <SrOnlyBreadcrumb items={breadcrumbs} />

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
            <FAQAccordion items={allItems} startIndex={1} />
          </div>
        </section>
      </div>
    </>
  )
}
