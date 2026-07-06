# Calls tab — RingCentral integration proposal

Date: 2026-07-06 · Status: proposed, awaiting one credential from the RingCentral admin

## The product in one paragraph

Every phone call to either shop becomes a record in the CRM within minutes — matched to an existing lead by phone number, or auto-created as a new lead if the caller is unknown. Missed calls and voicemails trigger an instant Telegram alert to the right shop chat (same routing as the website form), with the voicemail transcript and a link to the lead so staff can call back in one tap. Recordings and voicemails are archived to our own storage because RingCentral deletes recordings after 90 days and call logs after ~12 months. Later phases add a live "ringing now" banner with the caller's history and an analytics dashboard (missed-call rate, calls by hour, per-shop volume).

Why it matters: for a repair shop, a missed call is usually a lost job. Today those calls vanish. This turns them into a work queue.

## What we verified against the live API (2026-07-06)

Using the production app credentials (Client ID `f2trgvMRjnlamHOAgXObh0`, app "Car2Fix CRM"):

| OAuth flow | Status | Evidence |
|---|---|---|
| JWT Bearer | **Enabled** | Token endpoint parses assertions (OAU-331 on dummy JWT, not "unauthorized grant") |
| Authorization code | Enabled | OAU-109 redirect-URI mismatch (flow works, needs the registered redirect URI) |
| Password (ROPC) | Disabled | OAU-251 |
| Client credentials | Disabled | OAU-251 |
| Implicit | Disabled | OAU-152 |

The client secret authenticates successfully (all errors were grant-level, never `invalid_client`). **The path to production is the JWT Bearer flow**: a one-time JWT credential minted by an admin user gives the server durable, non-interactive access tokens forever.

## What the API gives us (verified against RingCentral's OpenAPI spec + guides)

| Data | Endpoint | Key fields | Scope |
|---|---|---|---|
| Company-wide call log | `GET /restapi/v1.0/account/~/call-log` | from/to number, caller-ID name + city/state, direction, result (Accepted/Missed/Voicemail/Busy/No Answer…), startTime, duration, recording link, telephonySessionId | `ReadCallLog` + admin user with FullCompanyCallLog |
| Incremental sync (ideal for cron) | `GET /restapi/v1.0/account/~/call-log-sync` | FSync once → ISync with syncToken; ≤250 records/response | `ReadCallLog` |
| Recording audio | `GET media.ringcentral.com/…/recording/{id}/content` | mp3/wav binary | `ReadCallRecording` |
| Voicemail + transcript | `GET /restapi/v1.0/account/~/extension/~/message-store?messageType=VoiceMail` | audio attachment + plain-text transcription attachment (`vmTranscriptionStatus`) | `ReadMessages` |
| SMS history | same message-store, `messageType=SMS` | from, to, text, direction, readStatus | `ReadMessages` |
| Real-time call events (webhooks) | `POST /restapi/v1.0/subscription`, filter `/account/~/telephony/sessions` | ringing / answered / disconnected, missedCall flag, caller number + name, per-party state | `CallControl` + `SubscriptionWebhook` |
| Voicemail / inbound-SMS events | filters `/extension/~/voicemail`, `/extension/~/message-store/instant?type=SMS` | payload includes transcript status / SMS text inline | `ReadMessages` |
| Call analytics | `POST /analytics/calls/v1/accounts/~/aggregation/fetch` + `timeline/fetch` | answered vs missed, durations, by user/queue, hourly granularity (184-day window) | `Analytics` |

Not worth it for v1: RingSense/ACE AI call summaries — paid per-seat add-on license plus a beta scope granted on request. Voicemail-to-text is included in all current RingEX tiers (must be switched on in the admin portal).

## Constraints that shaped the design

- **Call-data endpoints are in the "Heavy" throttle group: 10 requests/min.** Fine for a cron poller, useless for real-time → real-time comes from webhooks, polling stays the source of truth.
- **Call log lags 15–30 s behind call end**; sync endpoint errors if >250 changes accumulate → poll every ~5 min.
- **Retention forces archival**: recordings purged at 90 days (or 100k records), call logs ~12 months, voicemail capped at 200/box. We copy audio to the private Vercel Blob store (already used for referral invoices) and rows to Postgres.
- **Recordings under 30 s are never retained** by RingCentral (flag only).
- **Caller-ID name (CNAM) is best-effort** — often "WIRELESS CALLER" or a city/state. Phone number is the lead key; name is a hint.
- **Webhooks can be permanently blacklisted** if our endpoint misbehaves (no documented retries) → a reconciliation cron re-checks subscription health and the call-log sync backfills anything missed.
- **Two shop numbers map calls to shopType**: the dialed number ((973) 344-2573 mechanical / (908) 525-3681 body) routes the call record and the Telegram alert, mirroring the contact-form logic.

## Build plan

### Phase 1 — Call feed + lead matching (ship first)
- `Call` model in Prisma: rcCallId (unique), telephonySessionId, direction, fromNumber (E.164), fromName, fromLocation, toNumber, shopType, result, startTime, durationSec, recordingBlobUrl?, voicemailTranscript?, leadId?
- Vercel cron (every 5 min, guarded by CRON_SECRET like the weekly report) → call-log-sync ISync → upsert calls
- Normalize phones to E.164; match `Lead.phone`; unknown inbound caller → auto-create Lead (source `phone_call`, stage `new`, name from CNAM or "Unknown caller")
- Missed/voicemail → Telegram alert via `lib/telegram.js` to TELEGRAM_CHAT_ID_MECHANICAL / _BODYSHOP with CRM deep link
- New "Calls" tab in CrmNav: feed with filters (all/missed/voicemail/recorded, shop), metric cards; calls timeline on the lead detail page

### Phase 2 — Recordings + voicemail archive
- Copy recording/voicemail audio to the private Blob store at ingest; inline audio player; transcript shown in feed and in the Telegram alert

### Phase 3 — Real-time webhooks
- `/api/rc/webhook` route (Validation-Token echo, 200 within 3 s); account-wide telephony-sessions subscription (10-year expiresIn)
- Instant missed-call alerts; "ringing now" banner in the CRM showing the caller's lead history
- Subscription health check + renewal in the existing cron

### Phase 4 — Analytics
- Computed from our own Postgres (no 184-day API limit): answer rate, missed-by-hour heatmap, per-shop volume, callback conversion

## Env vars (following existing conventions)

```
RINGCENTRAL_SERVER_URL=https://platform.ringcentral.com
RINGCENTRAL_CLIENT_ID=…
RINGCENTRAL_CLIENT_SECRET=…
RINGCENTRAL_JWT=…            # the credential below
```

## What we need before building

1. **Mint a JWT credential** (the only blocker): log in at developers.ringcentral.com as a Car2Fix **admin** user → Credentials → "Create JWT" → production, "Only specific apps" → paste Client ID `f2trgvMRjnlamHOAgXObh0`. The authorizing user must be an admin so the company-wide call log is readable (FullCompanyCallLog permission).
2. **Confirm the app's scopes** in the developer console include: ReadCallLog, ReadCallRecording, ReadMessages, ReadPresence, SubscriptionWebhook, CallControl (Analytics optional, for later). Adding scopes to a production app may require re-approval — worth checking early.
3. **Enable Voicemail-to-Text** in the RingCentral admin portal (included in the plan, off by default on some accounts).
4. **Check the RingEX tier** for automatic call recording (Advanced/Ultra only; lower tiers are on-demand per call).
5. Recommended: **rotate the client secret** after go-live — it was shared in a Telegram chat.
