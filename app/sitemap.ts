import type { MetadataRoute } from 'next'
import { getPricingContent } from '@/lib/cms/reader'
import { siteUrl } from '@/lib/seo/site'

const staticRoutes = ['', '/faqs', '/install', '/databases'] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl
  const plans = await getPricingContent()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/faqs' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const planEntries: MetadataRoute.Sitemap = plans.map((plan) => ({
    url: `${baseUrl}/plans/${plan.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticEntries, ...planEntries]
}
