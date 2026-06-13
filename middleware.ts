import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isKeystaticRoute(pathname: string) {
  return (
    pathname.startsWith('/keystatic') ||
    pathname.startsWith('/api/keystatic')
  )
}

function isKeystaticConfigured() {
  return Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
      process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
      process.env.KEYSTATIC_SECRET &&
      process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG,
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!isKeystaticRoute(pathname)) {
    return NextResponse.next()
  }

  if (process.env.NODE_ENV === 'production' && !isKeystaticConfigured()) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/keystatic/:path*', '/api/keystatic/:path*'],
}
