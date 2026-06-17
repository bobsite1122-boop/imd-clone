import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { pathname } = req.nextUrl
  const isLoginPage = pathname === '/admin/login'
  const isProtectedApi =
    pathname.startsWith('/api/update-') || pathname.startsWith('/api/admin/')
  const isAdminPage = pathname.startsWith('/admin')

  if (isLoginPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
    return NextResponse.next()
  }

  if (isAdminPage || isProtectedApi) {
    if (!isLoggedIn) {
      if (isProtectedApi) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const loginUrl = new URL('/admin/login', req.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/admin/:path*', '/api/update-:path*', '/api/admin/:path*'],
}
