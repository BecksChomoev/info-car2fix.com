import { NextResponse } from 'next/server'

// Next.js 16 renamed `middleware` -> `proxy` (export a `proxy` function and,
// for matching, a `config` object — NOT `proxyConfig`).
//
// This is a UX convenience ONLY: redirect visitors with no session cookie to the
// login page. It does a presence check, not signature verification. The real
// security boundary is requireCrmAuth() in lib/crm-auth.js, enforced in the
// protected layout, every protected page, and every server action.

const COOKIE_NAME = 'crm_session'

export function proxy(request) {
  const { pathname } = request.nextUrl

  // Safety net: only ever act on the CRM section. Even if the matcher below were
  // ignored, this guarantees the proxy can never redirect the public site.
  if (!pathname.startsWith('/crm')) return NextResponse.next()

  // Let the login page through so we don't create a redirect loop.
  if (pathname === '/crm/login' || pathname.startsWith('/crm/login/')) {
    return NextResponse.next()
  }

  if (!request.cookies.has(COOKIE_NAME)) {
    return NextResponse.redirect(new URL('/crm/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/crm', '/crm/:path*'],
}
