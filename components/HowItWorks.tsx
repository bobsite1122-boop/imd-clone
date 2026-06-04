import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Choose Your Plan',
    description: 'Select the subscription duration that fits your needs and budget.',
  },
  {
    number: '2',
    title: 'Contact & Pay',
    description: 'Message us on WhatsApp, confirm payment via your preferred method.',
  },
  {
    number: '3',
    title: 'Start Learning',
    description: 'Receive your login credentials and start accessing 45,000+ resources.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white section-pad">
      <div className="container-main">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-slate-900">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-gray-500 mt-2">
            Start learning within minutes of subscribing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row mt-12">
          {/* Connecting dashed line — desktop only */}
          <div className="absolute top-8 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-brand/30 hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex-1 flex flex-col items-center text-center px-6 mb-10 md:mb-0"
            >
              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-brand text-white font-display font-black text-2xl flex items-center justify-center mx-auto">
                {step.number}
              </div>

              <h3 className="font-bold text-lg text-slate-800 mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/#subscribenow"
            className="btn-primary inline-flex items-center gap-2 min-h-[44px]"
          >
            Subscribe Now
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}
