import AdminNav from '@/components/admin/AdminNav'

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-slate-200 bg-white p-4 md:p-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            iMD CMS
          </p>
          <h1 className="text-lg font-bold text-slate-900 mt-1">Content Admin</h1>
        </div>
        <AdminNav />
      </aside>
      <main className="flex-1 p-4 md:p-8 max-w-5xl">{children}</main>
    </div>
  )
}
