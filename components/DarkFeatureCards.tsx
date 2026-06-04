import Link from 'next/link'

const NAVY = '#1a2a5e'

export default function DarkFeatureCards() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <div className="flex flex-col gap-6">

          {/* ── CARD 1 — USMLE ── */}
          <article
            className="relative overflow-hidden rounded-2xl text-white p-8 md:p-10 min-h-[220px] flex"
            style={{ backgroundColor: '#0f1428' }}
          >
            <div className="relative z-10 max-w-[60%]">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight">
                Everything You Need To Ace USMLE in One Platform
              </h3>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed max-w-md">
                Gain access to all USMLE resources our platform provides — from
                lectures to QBanks and self-assessments in a single subscription.
              </p>
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60 mix-blend-luminosity"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, transparent, rgba(15,20,40,0.5)), url(/woman.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                backgroundRepeat: 'no-repeat',
              }}
              aria-hidden="true"
            />
          </article>

          {/* ── CARD 2 — DEVICES ── */}
          <article
            className="rounded-2xl text-white p-8 md:p-10 min-h-[220px] text-center flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, #2c5b9c 0%, #1f4477 100%)`,
            }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight">
              Access iMD App on any of your Device
            </h3>
            <p className="text-sm text-gray-100 mt-4 leading-relaxed max-w-xl mx-auto">
              Use your account and switch between devices seamlessly. After
              subscribing, you will be emailed your installation link and guide
              to use.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mt-6">
              <span className="text-sm text-gray-100">Fully supported on</span>
              <DeviceIcon emoji="🤖" label="Android" />
              <DeviceIcon emoji="" label="iOS" />
              <DeviceIcon emoji="" label="macOS" />
              <DeviceIcon emoji="🪟" label="Windows" />
              <DeviceIcon emoji="🌐" label="Chrome" />
            </div>
          </article>

          {/* ── CARD 3 — ONE LOGIN ── */}
          <article
            className="rounded-2xl text-white p-8 md:p-10 min-h-[220px] flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, #0f1428 0%, ${NAVY} 60%, #2a6dd6 100%)`,
            }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight max-w-md">
              One Login For Unlimited Learning with iMD Resources
            </h3>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/#subscribenow"
                className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-6 py-2.5 rounded-pill text-sm transition min-h-[44px] inline-flex items-center"
              >
                Subscribe
              </Link>
              <Link
                href="/install"
                className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-6 py-2.5 rounded-pill text-sm transition min-h-[44px] inline-flex items-center"
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

function DeviceIcon({ emoji, label }: { emoji: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {label}
    </span>
  )
}
