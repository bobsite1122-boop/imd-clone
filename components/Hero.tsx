import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#1a1a2e] text-white overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center md:items-end">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 pt-14 pb-14 md:pb-16 order-2 md:order-1 pr-0 md:pr-8">
            <p className="text-[22px] md:text-2xl font-bold text-white leading-tight mb-2">
              iMD App
            </p>
            <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-white leading-[1.15]">
              Your Ultimate Medical Life
              <br />
              Companion &amp; Learning Hub
            </h1>
            <p className="text-[14px] md:text-[15px] text-gray-300 mt-5 max-w-[420px] leading-[1.75]">
              The only Biggest Medical Resources&apos; hub on Earth with more
              than 45,000 Medical and Pharmaceutical Resources &amp; Databases
              now available globally to our valued subscribers.
            </p>
          </div>

          {/* ── RIGHT COLUMN ── */}
          {/* Image is flush to the right, extends to bottom edge, no padding below */}
          <div className="w-full md:w-auto md:flex-none flex justify-center md:justify-end order-1 md:order-2 pt-10 md:pt-0">
            <Image
              src="/woman.webp"
              alt="Smiling medical professional with crossed fingers"
              width={480}
              height={500}
              priority
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
