import Link from 'next/link'
import Image from 'next/image'

const NAVY = '#1a2a5e'

export default function DarkFeatureCards() {
  return (
    <section className="bg-[#d0d3da] py-10 md:py-14">
      <div className="container-main max-w-3xl">
        <div className="flex flex-col gap-6">

          {/* ── CARD 1 — USMLE (glasses girl background) ── */}
          <article className="relative overflow-hidden rounded-2xl text-white min-h-[240px] flex items-stretch">
            {/* Background image fills the full card */}
            <Image
              src="/glasses-girl.jpeg"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
            {/* Dark gradient overlay: strong on left, fades right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.82) 50%, rgba(10,14,30,0.45) 100%)',
              }}
              aria-hidden="true"
            />
            {/* Text content */}
            <div className="relative z-10 p-8 md:p-10 max-w-[70%]">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                Everything You Need To Ace USMLE in One Platform
              </h3>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                Gain Access to all USMLE resources our platform provides from
                lectures to QBanks and self Assessments in single subscription.
              </p>
            </div>
          </article>

          {/* ── CARD 2 — DEVICES ── */}
          <article
            className="rounded-2xl text-white p-8 md:p-10 min-h-[200px] text-center flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, #2a5faa 0%, #1b3e85 50%, ${NAVY} 100%)`,
            }}
          >
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
              Access iMD App on any of your Device
            </h3>
            <p className="text-sm text-gray-200 mt-3 leading-relaxed max-w-xl mx-auto">
              Use your account and switch between devices seamlessly. After
              subscribing you will be emailed installation link and guide to use.
            </p>

            {/* Platform logos row */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-6">
              <span className="text-xs text-gray-300 mr-1">Fully supported on</span>

              {/* Android */}
              <div className="flex items-center gap-1.5">
                <Image src="/android.png" alt="Android" width={24} height={24} className="object-contain" />
              </div>

              {/* iOS */}
              <div className="flex items-center">
                <Image src="/ios.png" alt="iOS" width={48} height={24} className="object-contain brightness-0 invert" />
              </div>

              {/* macOS */}
              <div className="flex items-center">
                <Image src="/macos.png" alt="macOS" width={72} height={18} className="object-contain brightness-0 invert" />
              </div>

              {/* Windows */}
              <div className="flex items-center">
                <Image src="/windows.png" alt="Windows" width={24} height={24} className="object-contain" />
              </div>

              {/* Chrome */}
              <div className="flex items-center">
                <Image src="/chrome.png" alt="Chrome Browser" width={28} height={28} className="object-contain" />
              </div>
            </div>
          </article>

          {/* ── CARD 3 — ONE LOGIN ── */}
          <article
            className="rounded-2xl text-white p-8 md:p-10 min-h-[200px] flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, #0f1428 0%, ${NAVY} 55%, #2557c7 100%)`,
            }}
          >
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight max-w-md">
              One Login For Unlimited Learning with iMD Resources
            </h3>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                href="/#subscribenow"
                className="bg-transparent border border-white/60 text-white font-semibold px-7 py-2.5 rounded-pill text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center"
              >
                Subscribe
              </Link>
              <Link
                href="/install"
                className="bg-transparent border border-white/60 text-white font-semibold px-7 py-2.5 rounded-pill text-sm hover:bg-white/10 transition min-h-[44px] inline-flex items-center"
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
