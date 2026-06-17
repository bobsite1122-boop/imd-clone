import { cache } from 'react'
import { buildWhatsAppUrl, getContactSettings } from '@/lib/contact'
import { getPricingContent } from '@/lib/cms/reader'
import type { PlanContent } from '@/lib/cms/schemas'

export type Plan = PlanContent & {
  subscribeWhatsappUrl: string
  extendWhatsappUrl: string
}

function enrichPlan(plan: PlanContent, contact: Awaited<ReturnType<typeof getContactSettings>>): Plan {
  return {
    ...plan,
    subscribeWhatsappUrl: buildWhatsAppUrl(
      contact.whatsappNumber,
      contact.whatsappDefaultMessage,
    ),
    extendWhatsappUrl: buildWhatsAppUrl(
      contact.whatsappNumber,
      contact.whatsappExtendMessage,
    ),
  }
}

export const getPlans = cache(async (): Promise<Plan[]> => {
  const [plans, contact] = await Promise.all([getPricingContent(), getContactSettings()])
  return plans.map((plan) => enrichPlan(plan, contact))
})
