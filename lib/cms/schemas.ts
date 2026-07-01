import { z } from 'zod'

export const cmsContentIdSchema = z.enum(['pricing', 'faq', 'resources', 'install'])
export type CmsContentId = z.infer<typeof cmsContentIdSchema>

export const planSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens'),
  name: z.string().min(1).max(200),
  price: z.string().min(1).max(50),
  days: z.string().min(1).max(50),
  isPopular: z.boolean(),
  features: z.array(z.string().min(1).max(500)).min(1).max(20),
})

export const pricingSchema = z.array(planSchema).min(1).max(10)

export const faqEntrySchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(150)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens'),
  question: z.string().min(1).max(500),
  answer: z.string().min(1).max(5000),
  category: z.enum(['subscription', 'app']),
  order: z.number().int().min(1).max(999),
})

export const faqSchema = z.array(faqEntrySchema).min(1).max(100)

export const resourceCategorySchema = z.object({
  emoji: z.string().min(1).max(10),
  title: z.string().min(1).max(200),
  more: z.boolean().optional(),
  items: z.array(z.string().min(1).max(300)).min(1).max(100),
})

export const booksSectionSchema = z.object({
  emoji: z.string().min(1).max(10),
  title: z.string().min(1).max(200),
  body: z.string().min(1).max(2000),
})

export const resourcesSchema = z.object({
  categories: z.array(resourceCategorySchema).min(1).max(20),
  booksSection: booksSectionSchema,
})

export type PlanContent = z.infer<typeof planSchema>
export type PricingContent = z.infer<typeof pricingSchema>
export type FaqEntryContent = z.infer<typeof faqEntrySchema>
export type FaqContent = z.infer<typeof faqSchema>
export type ResourceCategoryContent = z.infer<typeof resourceCategorySchema>
export type BooksSectionContent = z.infer<typeof booksSectionSchema>
export type ResourcesContent = z.infer<typeof resourcesSchema>

export const installSchema = z.object({
  downloadApkUrl: z.string().url(),
})

export type InstallContent = z.infer<typeof installSchema>

export const SPECIAL_FAQ_SLUGS = [
  'what-is-the-imd-subscription',
  'how-do-i-purchase-an-imd-subscription',
] as const

const schemaMap = {
  pricing: pricingSchema,
  faq: faqSchema,
  resources: resourcesSchema,
  install: installSchema,
} as const

export function validateCmsContent<T extends CmsContentId>(
  id: T,
  data: unknown,
): z.infer<(typeof schemaMap)[T]> {
  return schemaMap[id].parse(data) as z.infer<(typeof schemaMap)[T]>
}

export function safeValidateCmsContent<T extends CmsContentId>(
  id: T,
  data: unknown,
): { success: true; data: z.infer<(typeof schemaMap)[T]> } | { success: false; error: string } {
  const result = schemaMap[id].safeParse(data)
  if (result.success) {
    return { success: true, data: result.data as z.infer<(typeof schemaMap)[T]> }
  }
  const messages = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')
  return { success: false, error: messages }
}
