import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { SignJWT, jwtVerify } from 'jose'

// Shared-password CRM auth (v1). A single password gates the whole team; the
// session is a signed JWT in an httpOnly cookie. Individual accounts + per-user
// lead ownership are a planned fast-follow (v1.1).
//
// This module is the REAL authorization boundary: requireCrmAuth() must be called
// in every protected layout, page, and server action. proxy.js only does a
// best-effort redirect for UX and must not be relied on for security.

const COOKIE_NAME = 'crm_session'
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

function getSecret() {
  const secret = process.env.CRM_SESSION_SECRET
  if (!secret) throw new Error('CRM_SESSION_SECRET is not set')
  return new TextEncoder().encode(secret)
}

// Timing-safe-ish comparison of the submitted password against CRM_PASSWORD.
export function verifyPassword(input) {
  const expected = process.env.CRM_PASSWORD
  if (!expected) throw new Error('CRM_PASSWORD is not set')
  if (typeof input !== 'string' || input.length !== expected.length) return false
  let mismatch = 0
  for (let i = 0; i < expected.length; i++) {
    mismatch |= input.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return mismatch === 0
}

// Create and set the session cookie. Only valid inside a Server Action or Route
// Handler (writing cookies during a render is not allowed).
export async function startSession() {
  const token = await new SignJWT({ role: 'crm' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getSecret())

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // omit on http://localhost
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  })
}

export async function endSession() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

// Returns the verified JWT payload, or null if absent/invalid/expired.
export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch {
    return null
  }
}

// DAL guard: redirects to the login page when there is no valid session.
// Call at the top of every protected layout, page, and mutating server action.
export async function requireCrmAuth() {
  const session = await getSession()
  if (!session) redirect('/crm/login')
  return session
}
