import type { Metadata } from 'next'
import { absoluteUrl, siteLocale, siteName, themeColor } from '@/lib/seo/site'

type BuildPageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = 'website',
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  const ogImage = absoluteUrl('/opengraph-image')

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: ogType,
      locale: siteLocale,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteName} — Medical Education Subscription`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export { themeColor }
