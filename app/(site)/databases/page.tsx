import type { Metadata } from 'next'
import Link from 'next/link'
import { getResources } from '@/lib/resources'
import type { ResourceCategory } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'iMD App QBanks, Databases and Resources - iMD App PK',
  description:
    '45,000+ premium medical resources including QBanks, clinical references, drug references, video lectures, and books — all in a single iMD App subscription.',
}

export const revalidate = 3600

const COLORS = {
  hero: '#0e3b77',
  primary: '#020048',
  tertiary: '#ebebf8',
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] md:text-[15px] leading-7">
      <span
        aria-hidden="true"
        className="mt-[10px] inline-block w-4 shrink-0 text-center text-emerald-500"
      >
        ✅
      </span>
      <span>{children}</span>
    </li>
  )
}

function CategoryCard({ category }: { category: ResourceCategory }) {
  return (
    <article
      className="rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: COLORS.tertiary, color: COLORS.primary }}
    >
      <h2 className="font-display font-extrabold text-[20px] md:text-[22px] leading-snug flex items-center gap-2 mb-4">
        <span aria-hidden="true">{category.emoji}</span>
        <span>{category.title}</span>
      </h2>

      <ul className="space-y-0.5">
        {category.items.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
        {category.more && (
          <li className="ml-7 mt-2 text-[14px] md:text-[15px] font-bold">
            &amp; Many More!
          </li>
        )}
      </ul>
    </article>
  )
}

function BooksBody({ body }: { body: string }) {
  const parts = body.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)

  return (
    <p className="text-[14px] md:text-[15px] leading-7">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </p>
  )
}

export default async function DatabasesPage() {
  const { categories, booksSection } = await getResources()
  const [qbanks, clinical, drugs, videos] = categories

  return (
    <section style={{ backgroundColor: COLORS.hero }}>
      <div className="container-main py-12 md:py-16 lg:py-20 text-white">

        {/* ── HERO ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display font-extrabold text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.1]">
            iMD App
          </h1>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base md:text-lg text-blue-100 leading-relaxed">
            <span aria-hidden="true">🚀</span> The best fit for all the{' '}
            <strong className="font-semibold text-white">
              USMLE, PLAB, AMC, MCCQE, UKMLA, and SMLE
            </strong>{' '}
            Aspirants.
          </p>
          <p className="mt-6 sm:mt-7 font-display font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white">
            45000+ Premium Resources Including but Not Limited To
          </p>
        </div>

        {/* ── CATEGORY GRID ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12 max-w-5xl mx-auto">
          <CategoryCard category={qbanks} />
          <div className="flex flex-col gap-5 md:gap-6">
            <CategoryCard category={clinical} />
            <CategoryCard category={drugs} />
          </div>
        </div>

        {/* Videos — full width row */}
        <div className="mt-5 md:mt-6 max-w-5xl mx-auto">
          <CategoryCard category={videos} />
        </div>

        {/* Books — full width row */}
        <div className="mt-5 md:mt-6 max-w-5xl mx-auto">
          <article
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: COLORS.tertiary, color: COLORS.primary }}
          >
            <h2 className="font-display font-extrabold text-[20px] md:text-[22px] leading-snug flex items-center gap-2 mb-4">
              <span aria-hidden="true">{booksSection.emoji}</span>
              <span>{booksSection.title}</span>
            </h2>
            <BooksBody body={booksSection.body} />
          </article>
        </div>

        {/* ── CLOSING CTA ──────────────────────────────── */}
        <div className="text-center mt-12 md:mt-16 max-w-3xl mx-auto">
          <p className="font-display font-extrabold text-[18px] sm:text-[20px] md:text-[24px] leading-snug">
            <span aria-hidden="true">🔥</span> Get All Premium Resources in a
            Single Subscription.
          </p>
          <p className="mt-3 text-[15px] sm:text-base md:text-lg text-blue-100">
            iMD &mdash; Your Smart Study Partner!
          </p>

          <Link
            href="/#subscribenow"
            className="inline-flex items-center justify-center mt-7 sm:mt-8 bg-white text-[#0e3b77] hover:bg-blue-50 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full min-h-[48px] shadow-md transition-colors"
          >
            Subscribe Now
          </Link>
        </div>

      </div>
    </section>
  )
}
