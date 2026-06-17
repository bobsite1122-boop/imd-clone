import AdminShell from '@/components/admin/AdminShell'

export const metadata = {
  title: 'Admin - iMD CMS',
  robots: { index: false, follow: false },
}

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminShell>{children}</AdminShell>
}
