import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isKeystaticRoute(pathname: string) {
  return (
    pathname.startsWith('/keystatic') ||
    pathname.startsWith('/api/keystatic')
  )
}

function unauthorized() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Keystatic Admin"' },
  })
}

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl
  if (!isKeystaticRoute(pathname)) {
    return NextResponse.next()
  }

  const password = process.env.KEYSTATIC_ADMIN_PASSWORD
  if (!password) {
    return new NextResponse('Not Found', { status: 404 })
  }

  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Basic ')) {
    return unauthorized()
  }

  const encoded = authHeader.slice('Basic '.length)
  let decoded = ''
  try {
    decoded = atob(encoded)
  } catch {
    return unauthorized()
  }

  const separatorIndex = decoded.indexOf(':')
  const passwordAttempt =
    separatorIndex === -1 ? decoded : decoded.slice(separatorIndex + 1)

  if (passwordAttempt !== password) {
    return unauthorized()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/keystatic/:path*', '/api/keystatic/:path*'],
}
