import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlanCard from '@/components/PlanCard'
import JsonLd from '@/components/JsonLd'
import SrOnlyBreadcrumb from '@/components/SrOnlyBreadcrumb'
import { getPlans } from '@/lib/plans'
import {
  breadcrumbSchema,
  productOfferSchema,
  webPageSchema,
} from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { getPlanSeoConfig } from '@/lib/seo/plans'

export const revalidate = 3600

type PlanPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const plans = await getPlans()
  return plans.map((plan) => ({ slug: plan.slug }))
}

export async function generateMetadata({ params }: PlanPageProps): Promise<Metadata> {
  const { slug } = await params
  const seo = getPlanSeoConfig(slug)
  if (!seo) return {}

  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/plans/${slug}`,
    keywords: seo.keywords,
  })
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { slug } = await params
  const seo = getPlanSeoConfig(slug)
  const plans = await getPlans()
  const plan = plans.find((p) => p.slug === slug)

  if (!seo || !plan) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: seo.title, path: `/plans/${slug}` },
  ]

  const productDescription = `${seo.description} ${plan.features.join('. ')}.`

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: seo.title,
            description: seo.description,
            path: `/plans/${slug}`,
          }),
          productOfferSchema(plan, productDescription),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <SrOnlyBreadcrumb items={breadcrumbs} />

      <div className="bg-[#f3f6fb]">
        <section className="bg-[#eaf2fb] py-10 sm:py-12 lg:py-14 text-center">
          <div className="container-main">
            <h1 className="font-display text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#0e3b77]">
              {seo.h1}
            </h1>
          </div>
        </section>

        <section className="py-10 sm:py-14 md:py-20">
          <div className="container-main max-w-sm md:max-w-md">
            <PlanCard plan={plan} />
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-main text-center max-w-[720px] mx-auto">
            {seo.bodyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-3 sm:mt-4 text-slate-500 text-[13px] sm:text-sm leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-6 text-slate-500 text-[13px] sm:text-sm leading-relaxed">
              Explore our{' '}
              <Link href="/databases" className="text-[#0e3b77] underline underline-offset-2">
                medical resources and QBanks
              </Link>
              , learn how to{' '}
              <Link href="/install" className="text-[#0e3b77] underline underline-offset-2">
                download and install the iMD App
              </Link>
              , or read our{' '}
              <Link href="/faqs" className="text-[#0e3b77] underline underline-offset-2">
                subscription FAQs
              </Link>
              . Compare all plans on the{' '}
              <Link href="/#subscribenow" className="text-[#0e3b77] underline underline-offset-2">
                subscription page
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
