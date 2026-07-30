// Thin RingCentral Platform API client (server-only). Auth is the JWT Bearer
// flow: RINGCENTRAL_JWT is a long-lived credential minted by a Car2Fix admin at
// developers.ringcentral.com, exchanged here for ~1h access tokens. The token
// cache lives at module scope — Fluid Compute reuses instances, so most
// requests skip the exchange.
//
// Rate-limit note: every call-data endpoint we use is in RingCentral's "Heavy"
// usage group (10 requests/min per user by default). The sync cron budgets its
// media downloads accordingly — keep it that way when extending this file.

const DEFAULT_SERVER = 'https://platform.ringcentral.com'

function serverUrl() {
  return process.env.RINGCENTRAL_SERVER_URL || DEFAULT_SERVER
}

export function isRingCentralConfigured() {
  return Boolean(
    process.env.RINGCENTRAL_CLIENT_ID &&
      process.env.RINGCENTRAL_CLIENT_SECRET &&
      process.env.RINGCENTRAL_JWT
  )
}

let tokenCache = null // { accessToken, expiresAt (ms epoch) }

async function getAccessToken() {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken
  }

  const clientId = process.env.RINGCENTRAL_CLIENT_ID
  const clientSecret = process.env.RINGCENTRAL_CLIENT_SECRET
  const jwt = process.env.RINGCENTRAL_JWT
  if (!clientId || !clientSecret || !jwt) {
    throw new Error('RingCentral credentials are not configured')
  }

  const res = await fetch(`${serverUrl()}/restapi/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`RingCentral token exchange failed (${res.status}): ${body.slice(0, 300)}`)
  }

  const data = await res.json()
  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  }
  return tokenCache.accessToken
}

// Absolute URLs come from data we stored (call-log records embed full URIs).
// Never send our bearer token anywhere but RingCentral, even if a stored URI
// were somehow tampered with.
function assertRingCentralHost(url) {
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.ringcentral.com')) {
    throw new Error(`Refusing non-RingCentral URL: ${url.hostname}`)
  }
}

// JSON request against the platform API. `path` may be a path ('/restapi/...')
// or an absolute RingCentral URL (call-log records embed full URIs).
export async function rcRequest(method, path, { params, body } = {}) {
  const token = await getAccessToken()
  const url = new URL(path.startsWith('http') ? path : `${serverUrl()}${path}`)
  assertRingCentralHost(url)
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value != null) url.searchParams.set(key, String(value))
  }

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (res.status === 401) {
    // Token revoked mid-flight (e.g. JWT rotated) — refresh once and give up
    // on a second 401 so a bad credential can't loop.
    tokenCache = null
    const retryToken = await getAccessToken()
    const retry = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${retryToken}`,
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    return handleRcResponse(retry, url)
  }

  return handleRcResponse(res, url)
}

async function handleRcResponse(res, url) {
  if (res.status === 204) return null
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    const err = new Error(
      `RingCentral ${res.status} on ${url.pathname}: ${text.slice(0, 300)}`
    )
    err.status = res.status
    err.retryAfter = res.headers.get('retry-after')
    throw err
  }
  return res.json()
}

// Binary download (recording audio, voicemail attachments). RingCentral serves
// media from media.ringcentral.com; the bearer token works there too.
export async function rcDownload(url) {
  assertRingCentralHost(new URL(url))
  const token = await getAccessToken()
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) {
    const err = new Error(`RingCentral media download failed (${res.status})`)
    err.status = res.status
    throw err
  }
  return {
    buffer: Buffer.from(await res.arrayBuffer()),
    contentType: res.headers.get('content-type') || 'application/octet-stream',
    stream: null,
  }
}

// Streaming variant for proxying audio to the browser without buffering.
export async function rcOpenStream(url) {
  assertRingCentralHost(new URL(url))
  const token = await getAccessToken()
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok || !res.body) {
    const err = new Error(`RingCentral media stream failed (${res.status})`)
    err.status = res.status
    throw err
  }
  return {
    stream: res.body,
    contentType: res.headers.get('content-type') || 'application/octet-stream',
  }
}

// How much history the first sync pulls in. RingCentral caps one call-log-sync
// response at 250 records, and the FSync returns the NEWEST ones — so if the
// window holds more than that, the oldest calls are silently dropped. The
// response's syncInfo.olderRecordsExist says when that happened; the sync route
// surfaces it so a truncated backfill can't be mistaken for a complete one.
// Deeper history than one page needs the paginated /call-log endpoint instead.
const SEED_DAYS = 30
const MAX_RECORDS = 250

// One page of the call-log sync feed. First run: FSync seeded with the last
// SEED_DAYS. After that: ISync with the stored token returns only changes. If
// more than 250 changes accumulate between runs RingCentral rejects the ISync —
// callers catch that and fall back to a fresh FSync.
//
// The company-wide feed needs the ReadCompanyCallLog permission, which only
// admin users hold. Our JWT is minted by a regular user, so RingCentral answers
// 403 CMN-408 and we fall back to that user's own extension feed: fewer calls
// (only what reaches this extension), but the Calls tab works. Swap in a JWT
// minted by an admin and the company feed starts answering on its own — no code
// change needed. `scope` on the result says which feed actually served it.
const COMPANY_FEED = '/restapi/v1.0/account/~/call-log-sync'
const EXTENSION_FEED = '/restapi/v1.0/account/~/extension/~/call-log-sync'

export async function syncCallLog(syncToken) {
  const params = syncToken
    ? { syncType: 'ISync', syncToken }
    : {
        syncType: 'FSync',
        recordCount: MAX_RECORDS,
        dateFrom: new Date(Date.now() - SEED_DAYS * 24 * 60 * 60 * 1000).toISOString(),
      }

  try {
    const data = await rcRequest('GET', COMPANY_FEED, { params })
    return { ...data, scope: 'company' }
  } catch (error) {
    if (error.status !== 403) throw error
    // Sync tokens are per-feed. Reusing a company token here is harmless — the
    // extension feed rejects it with a 400 and the caller restarts with FSync.
    const data = await rcRequest('GET', EXTENSION_FEED, { params })
    return { ...data, scope: 'extension' }
  }
}
