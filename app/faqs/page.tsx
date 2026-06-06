import type { Metadata } from 'next'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs | iMD Medical Resources',
  description:
    'Find answers to common questions about iMD Subscription, the iMD App, payments, and more.',
}

const subscriptionFAQs: FAQItem[] = [
  {
    question: 'What is the iMD Subscription?',
    answer:
      'The iMD Subscription gives you full premium access to every database, question bank, textbook, and video lecture inside the iMD App for the duration of your selected plan.',
  },
  {
    question: 'How do I purchase an iMD Subscription?',
    answer:
      "Choose a plan and click 'Subscribe Now'. WhatsApp will open with a pre-filled message — share the required details, complete the payment, and our team will activate your subscription within minutes.",
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept local bank transfers, JazzCash, Easypaisa, debit/credit cards, and cryptocurrency (Bitcoin, USDT). International users can ask our team to confirm payment options for their region.',
  },
  {
    question: 'Can I extend or renew my iMD Subscription?',
    answer:
      "Yes. Click 'Extend Now' on any plan or message us directly. Any remaining days from your current plan are carried over and your new duration is added on top.",
  },
  {
    question: 'Is the iMD Subscription refundable?',
    answer:
      'We offer a 7-day satisfaction guarantee. If the app does not match its described features, contact our support team within 7 days of subscribing for a full refund.',
  },
  {
    question: 'Does the iMD Subscription include updates?',
    answer:
      'Yes. All app updates and newly added databases, books, and question banks released during your subscription window are included at no extra cost.',
  },
  {
    question: 'How do I transfer my subscription to another device?',
    answer:
      'Simply log out from your current device and log in on the new one with the same credentials. Your account, downloads, and progress remain tied to your username — no transfer fee required.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'We do not offer an automatic free trial, but our team can walk you through a live demo on WhatsApp so you can preview the content library before subscribing.',
  },
  {
    question: 'What happens when my iMD Subscription expires?',
    answer:
      'Once the subscription ends, premium content inside the app is locked. You can renew at any time and immediately regain full access — your downloads and bookmarks are preserved.',
  },
  {
    question: 'Can I share my iMD Subscription with others?',
    answer:
      'Subscriptions are for individual use only. Sharing your credentials is a violation of our terms and may result in account suspension without a refund.',
  },
]

const appFAQs: FAQItem[] = [
  {
    question: 'What is the iMD App?',
    answer:
      'The iMD App is an all-in-one medical learning platform with 45,000+ resources — databases, question banks, textbooks, and video lectures — designed for medical students and clinicians.',
  },
  {
    question: 'How do I download the iMD App?',
    answer:
      'After subscribing, you will receive a personalised download link and credentials via WhatsApp/Email. Detailed step-by-step instructions for every platform are available on our Download/Install page.',
  },
  {
    question: 'On which devices/platforms is iMD App Available?',
    answer:
      'iMD App runs on Android phones and tablets, iPhone and iPad (iOS), Windows PCs/laptops, macOS (Apple Mac), and as a Chrome browser extension.',
  },
  {
    question: 'Can I use the iMD App on multiple devices?',
    answer:
      'Yes — install the app on as many devices as you like. Only one device can be actively logged in at a time; signing in on a new device automatically signs you out of the previous one.',
  },
  {
    question: 'How much space does the iMD App require?',
    answer:
      'The app itself is under 200MB. Downloaded databases and textbooks can range from 5GB to 25GB depending on the resources you choose. External storage is supported on Android.',
  },
  {
    question: 'What content is available inside the iMD App?',
    answer:
      'You get access to leading medical databases, USMLE/PLAB/NEET-PG question banks, classic and modern textbooks, video lectures, clinical references, and continually updated study resources.',
  },
  {
    question: 'Is an internet connection required to use the iMD App?',
    answer:
      'You only need internet for the first-time activation, login, syncing, and downloading new content. Once a resource is downloaded, you can study it fully offline.',
  },
  {
    question: 'How often is the iMD App updated?',
    answer:
      'The app and its content libraries are updated regularly — usually every few weeks — with new editions, new question banks, bug fixes, and performance improvements.',
  },
  {
    question: 'I’m facing an issue with the app — what should I do?',
    answer:
      'Reach out to our support team 24/7 on WhatsApp, Telegram, or email at support@imdresources.com. Most issues are resolved within minutes.',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[#0e3b77] font-bold text-xl sm:text-2xl mt-12 sm:mt-14 mb-5 sm:mb-6">
      {children}
    </h2>
  )
}

export default function FAQsPage() {
  return (
    <>
      {/* Top Banner */}
      <section className="bg-[#eaf2fb] py-10 sm:py-14 text-center">
        <div className="container-main">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0e3b77]">
            FAQs
          </h1>
        </div>
      </section>

      {/* Page Title */}
      <section className="pt-10 sm:pt-14 pb-2">
        <div className="container-main text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0e3b77] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about iMD Subscription, the iMD
            App, payments, and more.
          </p>
        </div>
      </section>

      {/* FAQ Lists */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-[640px] mx-auto px-4">
          <SectionTitle>Subscription</SectionTitle>
          <FAQAccordion items={subscriptionFAQs} startIndex={1} />

          <SectionTitle>iMD App</SectionTitle>
          <FAQAccordion items={appFAQs} startIndex={11} />
        </div>
      </section>
    </>
  )
}
