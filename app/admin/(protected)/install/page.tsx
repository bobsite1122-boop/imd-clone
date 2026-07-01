import InstallEditor from '@/components/admin/InstallEditor'
import { getInstallContent } from '@/lib/cms/reader'

export const metadata = {
  title: 'Install - iMD CMS',
}

export default async function AdminInstallPage() {
  const settings = await getInstallContent()
  return <InstallEditor initialSettings={settings} />
}
