import Link from 'next/link'
import Image from 'next/image'
import { Check, Download } from 'lucide-react'

const NAVY = '#0d1b3e'

/* ---------- USMLE Emblem (stylised mark) ---------- */
function USMLEEmblem({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="1.5" />
      <path
        d="M16 1.5a14.5 14.5 0 1 0 0 29 7.25 7.25 0 1 1 0-14.5A7.25 7.25 0 1 0 16 1.5Z"
        fill="white"
      />
      <circle cx="16" cy="8.75" r="2" fill={NAVY} />
      <circle cx="16" cy="23.25" r="2" fill="white" />
    </svg>
  )
}

const platforms = [
  {
    id: 'android',
    label: 'Android',
    src: '/android.svg',
    invert: true,
  },
  {
    id: 'apple',
    label: 'Apple iOS',
    src: '/apple.svg',
    invert: true,
  },
  {
    id: 'macos',
    label: 'macOS',
    src: '/macos.svg',
    invert: false,
  },
  {
    id: 'windows',
    label: 'Windows',
    src: '/windows.svg',
    invert: true,
  },
] as const

const usmleBullets = [
  'UWorld, NBMEs, AMBOSS, MEHLMAN QBank & Other Leading QBanks',
  'Boards & Beyond, Pixorize, Sketchy & Premium Video Lectures',
  '45,000+ Medical Resources, Updated Regularly',
] as const

export default function DarkFeatureCards() {
  return (
    <section className="bg-[#e8ecf2] pb-12 md:pb-20">
      <div className="container-main">
        <div className="flex flex-col gap-4 md:gap-5 max-w-2xl mx-auto">

          {/* ── CARD 1 — USMLE ── */}
          <article
            className="relative isolate overflow-hidden rounded-2xl text-white px-6 sm:px-8 md:px-10 py-7 sm:py-9 text-center shadow-[0_8px_30px_rgba(15,23,42,0.18)]"
            style={{
              background:
                'linear-gradient(160deg, #1c2030 0%, #0e1424 60%, #050912 100%)',
            }}
          >
            {/* USMLE background image — full cover */}
            <Image
              src="/usmle-logo.png"
              alt=""
              fill
              priority={false}
              sizes="(min-width: 768px) 672px, 100vw"
              aria-hidden="true"
              className="pointer-events-none select-none object-cover object-center opacity-35 sm:opacity-40 -z-10"
            />
            {/* Dark gradient overlay for text contrast */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75"
            />
            {/* Soft inner vignette for premium depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]"
            />

            <div className="relative">
              {/* USMLE logo lockup */}
              <div className="flex items-center justify-center gap-2">
                <USMLEEmblem size={22} />
                <span className="font-display font-extrabold tracking-tight text-white text-[18px] sm:text-[20px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  USMLE
                </span>
              </div>

              <h3 className="mt-4 font-display font-extrabold leading-snug text-white text-[18px] sm:text-[22px] md:text-[24px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
                All Your USMLE Resources in One Platform
              </h3>

              <p className="mt-3 text-[12.5px] sm:text-[13.5px] text-gray-100 leading-relaxed max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                Get access to all USMLE resources&mdash;from high-yield QBanks
                and self-assessments to premium video lectures&mdash;all under a
                single subscription.
              </p>

              <ul className="mt-5 sm:mt-6 flex flex-col gap-2.5 max-w-md mx-auto text-left">
                {usmleBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] sm:text-[13.5px] text-gray-100 leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="shrink-0 mt-[2px] text-white"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ── CARD 2 — DEVICES ── */}
          <article
            className="rounded-2xl text-white px-6 sm:px-8 md:px-10 py-7 sm:py-9"
            style={{
              background: `linear-gradient(135deg, #2260b8 0%, #1749a0 45%, ${NAVY} 100%)`,
            }}
          >
            <h3 className="font-display font-extrabold leading-snug text-white text-[18px] sm:text-[22px] md:text-[24px]">
              Access iMD App on Any Device
            </h3>
            <p className="mt-2 text-[12.5px] sm:text-[13.5px] text-blue-100 leading-relaxed max-w-md">
              Use your account on any device and switch seamlessly between
              platforms.
            </p>

            {/* Platform badges */}
            <div className="mt-5 sm:mt-6 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              {platforms.map((p) => (
                <div
                  key={p.id}
                  aria-label={p.label}
                  role="img"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center"
                >
                  <Image
                    src={p.src}
                    alt=""
                    width={28}
                    height={28}
                    aria-hidden="true"
                    className={`w-7 h-7 object-contain ${
                      p.invert ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </article>

          {/* ── CARD 3 — ONE LOGIN ── */}
          <article
            className="rounded-2xl text-white px-6 sm:px-8 md:px-10 py-7 sm:py-9"
            style={{
              background: `linear-gradient(135deg, #0c1226 0%, ${NAVY} 55%, #1e4db0 100%)`,
            }}
          >
            <h3 className="font-display font-extrabold leading-snug text-white text-[18px] sm:text-[22px] md:text-[24px]">
              One Login For Unlimited Learning
            </h3>

            <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
              <Link
                href="#subscribenow"
                className="border border-white/60 text-white font-semibold px-6 sm:px-7 py-2.5 rounded-full text-[13px] sm:text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center justify-center"
              >
                Subscribe Now
              </Link>
              <Link
                href="/install"
                className="border border-white/60 text-white font-semibold px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center justify-center gap-2"
              >
                <Download size={16} aria-hidden="true" />
                How to Install
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
