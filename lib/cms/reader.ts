import pricingFallback from '@/content/pricing.json'
import faqFallback from '@/content/faq.json'
import resourcesFallback from '@/content/resources.json'
import {
  type CmsContentId,
  type FaqContent,
  type PricingContent,
  type ResourcesContent,
  validateCmsContent,
} from '@/lib/cms/schemas'
import { createServiceRoleClient, isSupabaseConfigured } from '@/lib/supabase/server'

const fallbackMap = {
  pricing: pricingFallback,
  faq: faqFallback,
  resources: resourcesFallback,
} as const

function getFallback<T extends CmsContentId>(id: T): ReturnType<typeof validateCmsContent<T>> {
  return validateCmsContent(id, fallbackMap[id])
}

export async function getCmsContent<T extends CmsContentId>(
  id: T,
): Promise<ReturnType<typeof validateCmsContent<T>>> {
  if (!isSupabaseConfigured()) {
    return getFallback(id)
  }

  const supabase = createServiceRoleClient()
  if (!supabase) {
    return getFallback(id)
  }

  try {
    const { data, error } = await supabase
      .from('cms_content')
      .select('data')
      .eq('id', id)
      .maybeSingle()

    if (error || !data?.data) {
      return getFallback(id)
    }

    return validateCmsContent(id, data.data)
  } catch {
    return getFallback(id)
  }
}

export async function getPricingContent(): Promise<PricingContent> {
  return getCmsContent('pricing')
}

export async function getFaqContent(): Promise<FaqContent> {
  return getCmsContent('faq')
}

export async function getResourcesContent(): Promise<ResourcesContent> {
  return getCmsContent('resources')
}
