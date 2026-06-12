import Link from 'next/link'
import { whatsAppUrl } from '@/lib/contact'

const WHATSAPP_URL = whatsAppUrl(
  "Hi! I'd like to get the iMD App. Please share details and pricing.",
)

function WhatsAppGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

const trustItems = [
  { icon: '✅', label: '150k+ Students Subscribed' },
  { icon: '⚡', label: 'Activation within 2-3 Minutes' },
  { icon: '💬', label: '24/7 WhatsApp Support' },
  { icon: '💻', label: 'Access Anywhere, on Any Device' },
] as const

export default function Hero() {
  return (
    <section className="relative bg-[#0e3b77] text-white overflow-hidden">
      {/* Soft ambient glow for depth (decorative only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <div className="container-main relative">
        <div className="max-w-[760px] mx-auto pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 text-center">

          {/* Eyebrow — brand pill */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 text-[13px] sm:text-[14px] md:text-[15px] font-bold tracking-[0.14em] uppercase text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
              IMD App
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-4 sm:mt-5 font-display font-extrabold text-white leading-[1.12] tracking-tight text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px]">
            An Economical and Resourceful Alternative to UWorld &amp; Many
            Other Expensive Qbanks.
          </h1>

          {/* Description card — groups Body 1 + Body 2 for breathing room */}
          <div className="mt-7 sm:mt-9 mx-auto max-w-[640px] rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm px-5 sm:px-8 py-6 sm:py-7 text-left shadow-[0_6px_24px_rgba(0,0,0,0.18)]">
            <p className="text-[14px] sm:text-[15px] md:text-base text-blue-100/95 leading-relaxed">
              Get access to{' '}
              <strong className="font-bold text-white">
                45,000+ Medical Resources
              </strong>{' '}
              for{' '}
              <strong className="font-bold text-white">
                USMLE, PLAB, AMC, MCCQE, UKMLA, SMLE,
              </strong>{' '}
              and more.
            </p>

            <div
              aria-hidden="true"
              className="my-5 sm:my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <p className="text-[14px] sm:text-[15px] md:text-base text-blue-100/95 leading-relaxed">
              Includes{' '}
              <strong className="font-bold text-white">
                UWORLD Step 1, Step 2 CK &amp; Step 3, NBMEs, AMBOSS, MEHLMAN,
                AMEDEX, MPLUSX, CANADAQBANK
              </strong>
              , along with many other QBanks, lectures, and premium resources.
            </p>
          </div>

          {/* Activation tag */}
          <p className="mt-7 sm:mt-8 text-[14px] sm:text-[15px] md:text-base font-semibold text-white">
            <span aria-hidden="true">⚡ </span>
            Activation within just 2&ndash;3 Minutes
          </p>

          {/* CTA */}
          <div className="mt-5 sm:mt-6">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1a5298] hover:bg-[#1d5fae] text-white font-semibold text-[15px] sm:text-base px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-colors min-h-[52px]"
            >
              <WhatsAppGlyph size={20} />
              Get IMD App now
            </Link>
          </div>

          {/* Trust / Stats box */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-[480px] sm:max-w-[560px] rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-5 sm:px-7 py-5 sm:py-6 text-left">
            <ul className="flex flex-col gap-3 sm:gap-3.5">
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-[14px] sm:text-[15px] text-white/95"
                >
                  <span aria-hidden="true" className="text-base shrink-0 w-5 text-center">
                    {item.icon}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
