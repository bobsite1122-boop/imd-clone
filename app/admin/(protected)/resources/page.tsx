import ResourcesEditor from '@/components/admin/ResourcesEditor'
import { getResourcesContent } from '@/lib/cms/reader'

export const metadata = {
  title: 'Resources - iMD CMS',
}

export default async function AdminResourcesPage() {
  const resources = await getResourcesContent()
  return <ResourcesEditor initialResources={resources} />
}
