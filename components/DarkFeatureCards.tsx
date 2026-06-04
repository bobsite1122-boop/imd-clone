import Link from 'next/link'
import Image from 'next/image'

const NAVY = '#0d1b3e'

export default function DarkFeatureCards() {
  return (
    <section className="bg-[#e8ecf2] pb-12 md:pb-20">
      <div className="container-main">
        <div className="flex flex-col gap-4 md:gap-5 max-w-2xl mx-auto">

          {/* ── CARD 1 — USMLE (glasses girl background) ── */}
          <article className="relative overflow-hidden rounded-2xl text-white min-h-[200px] sm:min-h-[220px] flex items-stretch">
            <Image
              src="/glasses-girl.jpeg"
              alt=""
              fill
              className="object-cover object-[center_20%]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(5,10,28,0.93) 0%, rgba(5,10,28,0.80) 45%, rgba(5,10,28,0.35) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-6 sm:p-7 md:p-9 max-w-[80%] sm:max-w-[72%]">
              <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-snug">
                Everything You Need To Ace USMLE in One Platform
              </h3>
              <p className="text-[12px] sm:text-[13px] text-gray-300 mt-2 sm:mt-3 leading-relaxed">
                Gain Access to all USMLE resources our platform provides from
                lectures to QBanks and self Assessments in single subscription.
              </p>
            </div>
          </article>

          {/* ── CARD 2 — DEVICES ── */}
          <article
            className="rounded-2xl text-white px-6 sm:px-8 py-7 sm:py-9 md:px-10 flex flex-col items-center text-center"
            style={{
              background: `linear-gradient(135deg, #2260b8 0%, #1749a0 40%, ${NAVY} 100%)`,
            }}
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-snug">
              Access iMD App on any of your Device
            </h3>
            <p className="text-[12px] sm:text-[13px] text-blue-100 mt-2 sm:mt-3 leading-relaxed max-w-xs sm:max-w-sm">
              Use your account and switch between devices seamlessly. After
              subscribing you will be emailed installation link and guide to use.
            </p>

            {/* Platform logos */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-6">
              <span className="w-full text-[11px] text-blue-200 mb-1">Fully supported on</span>

              <Image src="/android.png" alt="Android" width={22} height={22} className="object-contain" />
              <Image src="/ios.png" alt="iOS" width={42} height={20} className="object-contain brightness-0 invert" />
              <Image src="/macos.png" alt="macOS" width={64} height={16} className="object-contain brightness-0 invert" />
              <Image src="/windows.png" alt="Windows" width={22} height={22} className="object-contain" />
              <Image src="/chrome.png" alt="Chrome" width={26} height={26} className="object-contain" />
            </div>
          </article>

          {/* ── CARD 3 — ONE LOGIN ── */}
          <article
            className="rounded-2xl text-white px-6 sm:px-8 py-7 sm:py-9 md:px-10 flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, #0c1226 0%, ${NAVY} 55%, #1e4db0 100%)`,
            }}
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-snug max-w-xs">
              One Login For Unlimited Learning with iMD Resources
            </h3>
            <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
              <Link
                href="#subscribenow"
                className="border border-white/50 text-white font-semibold px-6 sm:px-7 py-2.5 rounded-full text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center"
              >
                Subscribe
              </Link>
              <Link
                href="/install"
                className="border border-white/50 text-white font-semibold px-6 sm:px-7 py-2.5 rounded-full text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center"
              >
                Install
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
