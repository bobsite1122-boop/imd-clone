import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs | iMD Medical Resources',
  description: 'Everything you need to know about your iMD subscription, payments, and app usage.',
}

const subscriptionFAQs: FAQItem[] = [
  {
    question: 'What is the iMD subscription?',
    answer:
      'Full access to all premium medical databases, question banks, books, and video lectures inside the iMD app for your selected subscription duration.',
  },
  {
    question: 'How do I subscribe?',
    answer:
      "Simply click the 'Subscribe Now' button on any plan. It will open WhatsApp with a pre-filled message. Fill in the required details and our team will process your subscription within minutes.",
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept local bank transfers (Pakistan: JazzCash, Easypaisa, bank transfer), cryptocurrency (Bitcoin, USDT), and other local payment methods depending on your country. Contact us to confirm options for your region.',
  },
  {
    question: 'Can I extend my current subscription?',
    answer:
      "Yes! Click the 'Extend Now' button on any plan or contact us directly. Your remaining days carry over and we add your new duration on top.",
  },
  {
    question: 'Is there a refund policy?',
    answer:
      'We offer a 7-day satisfaction guarantee. If the app does not match its described features, contact our support team within 7 days of subscribing for a full refund.',
  },
  {
    question: 'Can I share my subscription with someone else?',
    answer:
      'Subscriptions are for individual use only. Sharing credentials is a violation of our terms and may result in account suspension without refund.',
  },
]

const appFAQs: FAQItem[] = [
  {
    question: 'Which devices are supported?',
    answer:
      'iMD App works on Android smartphones and tablets, iPhone and iPad (iOS), Windows PC and laptop, macOS (Apple Mac), and as a Chrome browser extension.',
  },
  {
    question: 'Does it work without internet?',
    answer:
      'Yes — most downloaded content works offline. You need internet for account activation, first-time login, syncing, and downloading new content.',
  },
  {
    question: 'How much storage space is needed?',
    answer:
      'The app itself is under 200MB. Downloaded databases and textbooks can require 5–25GB depending on which resources you download. External storage is supported on Android.',
  },
  {
    question: 'Can I use it on multiple devices simultaneously?',
    answer:
      'You can install the app on multiple devices, but only one device can be active at a time. Logging into a new device will log out the previous session.',
  },
  {
    question: 'How do I get my login credentials after subscribing?',
    answer:
      'After payment confirmation, we will email and/or WhatsApp you your username, password, and download link within 1–2 hours.',
  },
]

function CategoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 mb-6">
      <h2 className="text-lg font-bold text-slate-800 mb-1">{children}</h2>
      <div className="h-0.5 w-12 bg-brand" />
    </div>
  )
}

export default function FAQsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 text-center">
        <div className="container-main">
          <h1 className="font-display text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg mt-3">
            Everything you need to know about your iMD subscription
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <CategoryHeading>Subscription &amp; Payment</CategoryHeading>
        <FAQAccordion items={subscriptionFAQs} />

        <CategoryHeading>The iMD App</CategoryHeading>
        <FAQAccordion items={appFAQs} />

        {/* CTA */}
        <div className="text-center mt-16 p-10 bg-brand/5 rounded-2xl border border-brand/20">
          <p className="text-xl font-bold text-slate-800">Still have questions?</p>
          <p className="text-gray-500 mt-2">
            Our team is available 24/7 on WhatsApp and Telegram
          </p>
          <Link
            href="/#support"
            className="btn-primary inline-block mt-6 min-h-[44px] leading-[44px] px-8"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </>
  )
}
