import Link from 'next/link'
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[radial-gradient(ellipse_at_top_left,_#eff0ff_0%,_transparent_60%)]
        py-20 md:py-28
      "
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col">

            {/* Badge */}
            <span className="inline-flex items-center self-start bg-blue-50 text-brand text-xs font-semibold px-3 py-1 rounded-pill border border-blue-100 mb-4">
              🏆 Pakistan&apos;s #1 Medical Resource Hub
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              iMD App —{' '}
              <span className="text-brand">Your Ultimate Medical Life</span>{' '}
              Companion &amp; Learning Hub
            </h1>

            {/* Sub-paragraph */}
            <p className="text-lg text-gray-500 mt-4 max-w-lg leading-relaxed">
              The only biggest medical resources hub on Earth with more than
              45,000 Medical and Pharmaceutical Resources &amp; Databases, now
              available globally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/#subscribenow"
                className="btn-primary inline-flex items-center justify-center min-h-[44px]"
              >
                Subscribe Now
              </Link>
              <Link
                href="/databases"
                className="btn-outline inline-flex items-center justify-center min-h-[44px]"
              >
                View Resources
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400 mt-4">
              ✓ Trusted by thousands of medical students across Pakistan
            </p>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex-1 flex justify-center w-full">
            <HeroImage />
          </div>

        </div>
      </div>
    </section>
  )
}
