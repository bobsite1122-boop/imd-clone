import type { Metadata } from 'next'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs - iMD Medical Resources',
  description:
    'Find answers to common questions about IMD Subscription, the IMD App, payments, and more.',
}

const subscriptionFAQs: FAQItem[] = [
  {
    question: 'What is the IMD Subscription?',
    answer:
      'An IMD Subscription gives you full access to all premium medical databases, question banks, books, and lectures inside the IMD App for a selected duration (6 months, 1 year, or 2 years). It includes the following resources: View Resources.',
  },
  {
    question: 'How do I purchase an IMD Subscription?',
    answer:
      'You can contact us via any of these platforms to get your subscription activated: WhatsApp, Telegram, or Email. Payments are accepted worldwide.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept international cards, local transfers in supported countries, and digital wallets. Contact us and tell us your country name and we’ll provide you with a suitable payment method.',
  },
  {
    question: 'Can I extend or renew my IMD Subscription?',
    answer:
      'Yes. You can renew anytime before or after your subscription expires — all your notes and bookmarks remain synced when you reactivate your account. Contact us now to extend your existing subscription via WhatsApp.',
  },
  {
    question: 'Is the IMD Subscription refundable?',
    answer:
      'There is a 7-day money back guarantee if the app is not as described. Contact our support team via WhatsApp for a refund.',
  },
  {
    question: 'Does the IMD Subscription include updates?',
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
      'We currently don’t offer a free trial. You can ask anything by getting in touch via WhatsApp, Telegram, or Email.',
  },
  {
    question: 'What happens when my IMD Subscription expires?',
    answer:
      'Once expired, access pauses until renewal. Your account data remains saved for 30 days after expiration.',
  },
  {
    question: 'Can I share my IMD Subscription with others?',
    answer:
      'No, sharing accounts violates our usage policy. Repeated violations may result in temporary or permanent bans.',
  },
]

const appFAQs: FAQItem[] = [
  {
    question: 'What is the IMD App?',
    answer:
      'The IMD App is an all-in-one digital platform providing premium medical databases, question banks, and textbooks for medical students and professionals. Made for exams like USMLE, AMC, PLAB, SMLE, etc.',
  },
  {
    question: 'How do I download the IMD App?',
    answer:
      'Follow the steps on the installation page to install the app.',
  },
  {
    question: 'On which devices/platforms is IMD App Available?',
    answer:
      'iOS, MacOS, Windows, and Android. Check the installation instructions on the download page.',
  },
  {
    question: 'Can I use the IMD App on multiple devices?',
    answer:
      'Your subscription is linked to one primary device. Logging in elsewhere will log out the first device.',
  },
  {
    question: 'How much space does the IMD App require?',
    answer:
      'The app is lightweight (<200 MB). Databases and textbooks can require 5–25 GB.',
  },
  {
    question: 'What content is available inside the IMD App?',
    answer:
      'Verified medical databases, question banks (QBanks), video lectures, and PDF textbooks covering all major subjects. Check Resources Page for full list.',
  },
  {
    question: 'Is an internet connection required to use the IMD App?',
    answer:
      'Most features work offline. Internet is only needed for activation, syncing, and updates.',
  },
  {
    question: 'How often is the IMD App updated?',
    answer:
      'We release regular updates. Notifications appear inside the app when updates are available.',
  },
  {
    question: 'I’m facing an issue with the app — what should I do?',
    answer:
      'Contact the IMD Help team via WhatsApp, Telegram, or Email. Include your OS, error message, and screenshot. We will reply asap.',
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
            Find answers to common questions about IMD Subscription, the IMD
            App, payments, and more.
          </p>
        </div>
      </section>

      {/* FAQ Lists */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto px-6 sm:px-8 max-w-[720px] lg:max-w-[540px] lg:px-4">
          <SectionTitle>Subscription</SectionTitle>
          <FAQAccordion items={subscriptionFAQs} startIndex={1} />

          <SectionTitle>IMD App</SectionTitle>
          <FAQAccordion items={appFAQs} startIndex={11} />
        </div>
      </section>
    </div>
  )
}
