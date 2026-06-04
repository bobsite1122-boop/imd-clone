import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#0e3b77] text-white overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center md:items-end">

          {/* ── LEFT COLUMN ── text below image on mobile, left col on md+ */}
          <div className="flex-1 pt-6 pb-10 md:pt-14 md:pb-16 order-2 md:order-1 pr-0 md:pr-8">
            <p className="text-lg sm:text-[22px] md:text-2xl font-bold text-white leading-tight mb-2">
              iMD App
            </p>
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-white leading-[1.15]">
              Your Ultimate Medical Life
              <br />
              Companion &amp; Learning Hub
            </h1>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-300 mt-4 md:mt-5 max-w-full md:max-w-[420px] leading-[1.75]">
              The only Biggest Medical Resources&apos; hub on Earth with more
              than 45,000 Medical and Pharmaceutical Resources &amp; Databases
              now available globally to our valued subscribers.
            </p>
          </div>

          {/* ── RIGHT COLUMN ── image on top on mobile, right col on md+ */}
          <div className="w-full md:w-auto md:flex-none flex justify-center md:justify-end order-1 md:order-2 pt-8 md:pt-0">
            <Image
              src="/woman.webp"
              alt="Smiling medical professional with crossed fingers"
              width={480}
              height={500}
              priority
              className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[440px] h-auto object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
