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

// Timing-safe-ish comparison of two password strings.
function passwordsMatch(input, expected) {
  if (typeof input !== 'string' || typeof expected !== 'string') return false
  if (input.length !== expected.length) return false
  let mismatch = 0
  for (let i = 0; i < expected.length; i++) {
    mismatch |= input.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return mismatch === 0
}

export function verifyPassword(input) {
  const expected = process.env.CRM_PASSWORD
  if (!expected) throw new Error('CRM_PASSWORD is not set')
  return passwordsMatch(input, expected)
}

// Maps a submitted password to a session role, or null when it matches neither.
// CRM_ADMIN_PASSWORD (optional) unlocks the referral approve/reject controls —
// the gate on cash going out the door. The shared CRM_PASSWORD stays the
// everyday team login.
export function resolveLoginRole(input) {
  const adminPassword = process.env.CRM_ADMIN_PASSWORD
  if (adminPassword && passwordsMatch(input, adminPassword)) return 'admin'
  if (verifyPassword(input)) return 'crm'
  return null
}

// Until CRM_ADMIN_PASSWORD is configured every team session counts as admin, so
// the referral workflow is usable out of the box on the single shared password.
export function isAdminSession(session) {
  if (!session) return false
  if (!process.env.CRM_ADMIN_PASSWORD) return true
  return session.role === 'admin'
}

// Create and set the session cookie. Only valid inside a Server Action or Route
// Handler (writing cookies during a render is not allowed).
export async function startSession(role = 'crm') {
  const token = await new SignJWT({ role })
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
// Admin-only server actions additionally check isAdminSession() and return an
// { error } to the form — throwing here would get the message redacted by
// Next.js in production.
export async function requireCrmAuth() {
  const session = await getSession()
  if (!session) redirect('/crm/login')
  return session
}
