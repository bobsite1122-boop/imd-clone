import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import FAQContactLinks from '@/components/FAQContactLinks'

export const metadata: Metadata = {
  title: 'FAQs - iMD App PK',
  description:
    'Find answers to common questions about iMD Subscription, the iMD App, payments, and more.',
}

const subscriptionFAQs: FAQItem[] = [
  {
    question: 'What is the iMD Subscription?',
    answer: (
      <>
        <p>
          An iMD Subscription gives you full access to all premium medical
          resources, including premium question banks, clinical references,
          books, lectures, and many more, for your selected subscription period
          (6 months, 1 year, or 2 years).
        </p>
        <Link
          href="/databases"
          className="mt-3 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-[13px] sm:text-[14px] font-semibold transition-colors"
        >
          View Resources
        </Link>
      </>
    ),
  },
  {
    question: 'How do I purchase an iMD Subscription?',
    answer: (
      <>
        <p className="font-semibold text-slate-700">
          Getting an iMD subscription is simple.
        </p>
        <p>
          Contact us through{' '}
          <strong className="font-semibold text-slate-700">
            WhatsApp, Instagram, Email, or Telegram
          </strong>
          , and our team will guide you through the activation process.
        </p>
        <FAQContactLinks />
      </>
    ),
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept international cards, local transfers in supported countries, and digital wallets. Contact us and tell us your country name and we’ll provide you with a suitable payment method.',
  },
  {
    question: 'Can I extend or renew my iMD Subscription?',
    answer:
      'Yes. You can renew anytime before or after your subscription expires — all your notes and bookmarks remain synced when you reactivate your account. Contact us now to extend your existing subscription via WhatsApp.',
  },
  {
    question: 'Does the iMD Subscription include updates?',
    answer:
      'Yes, all active subscribers automatically receive database and content updates without extra charges during their subscription period.',
  },
  {
    question: 'How do I transfer my subscription to another device?',
    answer:
      'Enter your Username/Password on the new device to login, but your data will not be transferred. Use the backup feature to copy your progress. Backup the data in previous device, install the same QBank or database on the new device, and manually restore the backup by entering a specific code or selecting a recent backup from the list to restore progress, highlights and favorites.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'We currently don’t offer a free trial. You can ask anything by getting in touch via WhatsApp, Instagram, Telegram, or Email.',
  },
  {
    question: 'What happens when my iMD Subscription expires?',
    answer:
      'Once expired, access pauses until renewal. Your account data remains saved for 30 days after expiration.',
  },
  {
    question: 'Can I share my iMD Subscription with others?',
    answer:
      'No, sharing accounts violates our usage policy. Repeated violations may result in temporary or permanent bans.',
  },
]

const appFAQs: FAQItem[] = [
  {
    question: 'What is the iMD App?',
    answer:
      'The iMD App is an all-in-one digital platform providing premium medical databases, question banks, and textbooks for medical students and professionals. Made for exams like USMLE, AMC, PLAB, SMLE, etc.',
  },
  {
    question: 'How do I download the iMD App?',
    answer:
      'Follow the steps on the installation page to install the app.',
  },
  {
    question: 'On which devices/platforms is iMD App Available?',
    answer:
      'iOS, MacOS, Windows, and Android. Check the installation instructions on the download page.',
  },
  {
    question: 'Can I use the iMD App on multiple devices?',
    answer:
      'Your subscription is linked to one primary device. Logging in elsewhere will log out the first device.',
  },
  {
    question: 'How much space does the iMD App require?',
    answer:
      'The app is lightweight (<200 MB). Databases and textbooks can require 5–25 GB.',
  },
  {
    question: 'What content is available inside the iMD App?',
    answer:
      'Verified medical databases, question banks (QBanks), video lectures, and PDF textbooks covering all major subjects. Check Resources Page for full list.',
  },
  {
    question: 'Is an internet connection required to use the iMD App?',
    answer:
      'Most features work offline. Internet is only needed for activation, syncing, and updates.',
  },
  {
    question: 'How often is the iMD App updated?',
    answer:
      'We release regular updates. Notifications appear inside the app when updates are available.',
  },
  {
    question: 'I’m facing an issue with the app — what should I do?',
    answer:
      'Contact the iMD Help team via WhatsApp, Instagram, Telegram, or Email. Include your OS, error message, and screenshot. We will reply asap.',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[#0e3b77] font-extrabold text-[22px] sm:text-[24px] mt-12 sm:mt-14 mb-5 sm:mb-6">
      {children}
    </h2>
  )
}

export default function FAQsPage() {
  return (
    <div className="bg-[#f3f6fb]">
      {/* Top Banner */}
      <section className="bg-[#eaf2fb] py-10 sm:py-12 lg:py-14 text-center">
        <div className="container-main">
          <h1 className="font-display text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#0e3b77]">
            FAQs
          </h1>
        </div>
      </section>

      {/* Page Title */}
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

      {/* FAQ Lists */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto px-6 sm:px-8 max-w-[720px] lg:max-w-[540px] lg:px-4">
          <SectionTitle>Subscription</SectionTitle>
          <FAQAccordion
            items={[...subscriptionFAQs, ...appFAQs]}
            startIndex={1}
          />
        </div>
      </section>
    </div>
  )
}
