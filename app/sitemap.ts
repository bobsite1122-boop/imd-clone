import type { MetadataRoute } from 'next'

const routes = ['', '/faqs', '/install', '/databases'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imd-clone.vercel.app'

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/faqs' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
