import { Suspense } from 'react'
import LoginForm from '@/components/admin/LoginForm'

export const metadata = {
  title: 'Admin Login - iMD CMS',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            iMD CMS
          </p>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">Admin Login</h1>
          <p className="text-sm text-gray-500 mt-2">
            Sign in to manage pricing, FAQ, and resources.
          </p>
        </div>
        <Suspense fallback={<p className="text-sm text-gray-500">Loading…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
