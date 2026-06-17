import FaqEditor from '@/components/admin/FaqEditor'
import { getFaqContent } from '@/lib/cms/reader'

export const metadata = {
  title: 'FAQ - iMD CMS',
}

export default async function AdminFaqsPage() {
  const faqs = await getFaqContent()
  return <FaqEditor initialFaqs={faqs} />
}
