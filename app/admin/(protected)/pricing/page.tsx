import PricingEditor from '@/components/admin/PricingEditor'
import { getPricingContent } from '@/lib/cms/reader'

export const metadata = {
  title: 'Pricing - iMD CMS',
}

export default async function AdminPricingPage() {
  const plans = await getPricingContent()
  return <PricingEditor initialPlans={plans} />
}
