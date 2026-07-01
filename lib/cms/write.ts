import 'server-only'
import pricingSeed from '@/content/pricing.json'
import faqSeed from '@/content/faq.json'
import resourcesSeed from '@/content/resources.json'
import installSeed from '@/content/install.json'
import {
  type CmsContentId,
  validateCmsContent,
} from '@/lib/cms/schemas'
import { createServiceRoleClient, isSupabaseConfigured } from '@/lib/supabase/server'

const seedMap = {
  pricing: pricingSeed,
  faq: faqSeed,
  resources: resourcesSeed,
  install: installSeed,
} as const

export async function writeCmsContent<T extends CmsContentId>(
  id: T,
  data: unknown,
): Promise<ReturnType<typeof validateCmsContent<T>>> {
  const validated = validateCmsContent(id, data)

  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.')
  }

  const supabase = createServiceRoleClient()
  if (!supabase) {
    throw new Error('Failed to create Supabase client.')
  }

  const { error } = await supabase.from('cms_content').upsert(
    {
      id,
      data: validated,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'id' },
  )

  if (error) {
    throw new Error(`Failed to save CMS content: ${error.message}`)
  }

  return validated
}

export async function seedCmsContentIfEmpty(): Promise<{ seeded: CmsContentId[] }> {
  if (!isSupabaseConfigured()) {
    return { seeded: [] }
  }

  const supabase = createServiceRoleClient()
  if (!supabase) {
    return { seeded: [] }
  }

  const seeded: CmsContentId[] = []
  const ids: CmsContentId[] = ['pricing', 'faq', 'resources', 'install']

  for (const id of ids) {
    const { data: existing } = await supabase
      .from('cms_content')
      .select('id')
      .eq('id', id)
      .maybeSingle()

    if (!existing) {
      const validated = validateCmsContent(id, seedMap[id])
      const { error } = await supabase.from('cms_content').insert({
        id,
        data: validated,
      })
      if (!error) {
        seeded.push(id)
      }
    }
  }

  return { seeded }
}
