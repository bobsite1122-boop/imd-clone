import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import DarkFeatureCards from '@/components/DarkFeatureCards'
import JsonLd from '@/components/JsonLd'
import { getPlans } from '@/lib/plans'
import {
  itemListProductsSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { longTailKeywords, primaryKeywords, siteShortDescription } from '@/lib/seo/site'

export const metadata = buildPageMetadata({
  title: 'Buy iMD App Subscription in Pakistan',
  description: siteShortDescription,
  path: '/',
  keywords: [
    'Buy iMD App Subscription',
    'Buy iMD App Subscription in Pakistan',
    'iMD App PK',
    ...primaryKeywords.slice(0, 10),
    ...longTailKeywords.slice(0, 5),
  ],
})

export const revalidate = 3600

export default async function HomePage() {
  const plans = await getPlans()

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          webPageSchema({
            name: 'Buy iMD App Subscription in Pakistan | iMD App PK',
            description: siteShortDescription,
            path: '/',
          }),
          serviceSchema(),
          itemListProductsSchema(plans),
        ]}
      />
      <Hero />
      <PricingSection />
      <DarkFeatureCards />
    </>
  )
}
