import Link from 'next/link'
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

/* ---------- Platform logos (all rendered in equal 24px boxes) ---------- */
function AndroidLogo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#3DDC84"
        d="M17.523 15.341c-.51 0-.927-.417-.927-.927 0-.51.417-.927.927-.927.51 0 .927.417.927.927 0 .51-.417.927-.927.927Zm-11.046 0c-.51 0-.927-.417-.927-.927 0-.51.417-.927.927-.927.51 0 .927.417.927.927 0 .51-.417.927-.927.927Zm11.378-6.027 1.852-3.207a.385.385 0 0 0-.667-.385l-1.876 3.249a11.55 11.55 0 0 0-9.328 0L5.96 5.722a.385.385 0 0 0-.667.385l1.852 3.207C3.95 10.92 1.99 13.836 1.665 17.276H22.335c-.325-3.44-2.285-6.355-5.48-7.962Z"
      />
    </svg>
  )
}

function AppleLogo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#ffffff"
        d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.736.94-1.984 1.67-3.116 1.61-.143-1.13.405-2.31 1.13-3.04.81-.85 2.18-1.5 3.163-1.65.013.13.013.26.013.39ZM20.88 17.36c-.62 1.37-1.35 2.66-2.42 3.55-.92.78-1.83 1.58-3.31 1.61-1.45.03-1.94-.86-3.61-.86-1.67 0-2.21.83-3.6.89-1.5.06-2.65-.96-3.59-1.91-1.93-1.93-3.41-5.45-1.42-7.85.93-1.13 2.42-1.85 4.04-1.88 1.43-.03 2.78.96 3.61.96.83 0 2.49-1.18 4.2-1.01.71.03 2.7.29 3.97 2.16-.1.07-2.37 1.39-2.34 4.13.03 3.27 2.86 4.36 2.91 4.38-.02.07-.45 1.55-1.5 3.13Z"
      />
    </svg>
  )
}

function MacOSGlyph({ size = 26 }: { size?: number }) {
  return (
    <div
      role="img"
      aria-label="macOS"
      style={{ width: size, height: size }}
      className="flex flex-col items-center justify-center text-white leading-none"
    >
      <span className="text-[6.5px] font-semibold tracking-tight -mb-[1px]">
        mac
      </span>
      <span className="text-[10px] font-bold tracking-tight">OS</span>
    </div>
  )
}

function WindowsLogo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="#ffffff" d="M3 5.5 11 4.4v7.6H3V5.5Zm0 13L11 19.6V12H3v6.5Zm9-14.7L21.5 3v9H12V3.8Zm0 17 9.5 1.2V12H12v8.8Z" />
    </svg>
  )
}

const platforms = [
  { id: 'android', label: 'Android', node: <AndroidLogo /> },
  { id: 'apple', label: 'Apple iOS', node: <AppleLogo /> },
  { id: 'macos', label: 'macOS', node: <MacOSGlyph /> },
  { id: 'windows', label: 'Windows', node: <WindowsLogo /> },
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
            className="rounded-2xl text-white px-6 sm:px-8 md:px-10 py-7 sm:py-9 text-center"
            style={{
              background:
                'linear-gradient(160deg, #1c2030 0%, #0e1424 60%, #050912 100%)',
            }}
          >
            {/* USMLE logo lockup */}
            <div className="flex items-center justify-center gap-2">
              <USMLEEmblem size={22} />
              <span className="font-display font-extrabold tracking-tight text-white text-[18px] sm:text-[20px]">
                USMLE
              </span>
            </div>

            <h3 className="mt-4 font-display font-extrabold leading-snug text-white text-[18px] sm:text-[22px] md:text-[24px]">
              All Your USMLE Resources in One Platform
            </h3>

            <p className="mt-3 text-[12.5px] sm:text-[13.5px] text-gray-300 leading-relaxed max-w-md mx-auto">
              Get access to all USMLE resources&mdash;from high-yield QBanks
              and self-assessments to premium video lectures&mdash;all under a
              single subscription.
            </p>

            <ul className="mt-5 sm:mt-6 flex flex-col gap-2.5 max-w-md mx-auto text-left">
              {usmleBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[12.5px] sm:text-[13.5px] text-gray-200 leading-snug"
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
          </article>

          {/* ── CARD 2 — DEVICES ── */}
          <article
            className="rounded-2xl text-white px-6 sm:px-8 md:px-10 py-7 sm:py-9"
            style={{
              background: `linear-gradient(135deg, #2260b8 0%, #1749a0 45%, ${NAVY} 100%)`,
            }}
          >
            <h3 className="font-display font-extrabold leading-snug text-white text-[18px] sm:text-[22px] md:text-[24px]">
              Access IMD App on Any Device
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
                  {p.node}
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
