import { absoluteUrl, siteAlternateName, siteDescription, siteName, siteUrl } from '@/lib/seo/site'
import { parsePlanPrice } from '@/lib/seo/plans'
import type { Plan } from '@/lib/plans'

type JsonLdObject = Record<string, unknown>

export function organizationSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    alternateName: siteAlternateName,
    url: siteUrl,
    logo: absoluteUrl('/logo.png'),
    description: siteDescription,
    email: 'support@imdapp.com.pk',
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    sameAs: [
      'https://www.instagram.com/imd_app_pk',
      'https://t.me/imd_app_pk',
      'https://youtube.com/@imdapppk',
      'https://www.facebook.com/iMDAppPak',
    ],
  }
}

export function websiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: siteAlternateName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en-PK',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl('/faqs')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: 'en-PK',
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function productOfferSchema(plan: Plan, description: string): JsonLdObject {
  const price = parsePlanPrice(plan.price)

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plan.name,
    description,
    image: absoluteUrl(`/${plan.slug}.png`),
    brand: {
      '@type': 'Brand',
      name: siteAlternateName,
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/plans/${plan.slug}`),
      priceCurrency: 'USD',
      price: price.toFixed(2),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
      },
    },
  }
}

export function itemListProductsSchema(plans: Plan[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'iMD App Subscription Plans',
    itemListElement: plans.map((plan, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: productOfferSchema(
        plan,
        `${plan.name} — ${plan.features.join('. ')}`,
      ),
    })),
  }
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[],
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function serviceSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'iMD App Subscription',
    description: siteDescription,
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    serviceType: 'Medical Education Subscription',
    url: absoluteUrl('/#subscribenow'),
  }
}
