import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist on iMD App PK.',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-[#f3f6fb]">
      <p className="text-[#0e3b77] font-display font-extrabold text-6xl sm:text-7xl">404</p>
      <h1 className="mt-4 text-xl sm:text-2xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-slate-500 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-sm font-semibold transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
