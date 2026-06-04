import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#1a1a2e] text-white">
      <div className="container-main py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 order-2 md:order-1">
            <p className="font-display text-2xl md:text-3xl font-extrabold mb-2">
              iMD App
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight">
              Your Ultimate Medical Life
              <br className="hidden md:block" /> Companion &amp; Learning Hub
            </h1>
            <p className="text-base md:text-[15px] text-gray-300 mt-5 max-w-xl leading-relaxed">
              The only Biggest Medical Resources&apos; hub on Earth with more than
              45,000 Medical and Pharmaceutical Resources &amp; Databases now
              available globally to our valued subscribers.
            </p>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex-1 flex justify-center w-full order-1 md:order-2">
            <div className="relative w-full max-w-[420px]">
              {/* Green organic blob */}
              <div
                className="absolute inset-0 -z-0 bg-[#bfe2a8] opacity-90"
                style={{
                  borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                  transform: 'rotate(8deg) scale(0.95)',
                }}
                aria-hidden="true"
              />
              <Image
                src="/woman.webp"
                alt="Smiling medical professional in scrubs"
                width={480}
                height={520}
                priority
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
