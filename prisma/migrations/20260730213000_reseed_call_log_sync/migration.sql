-- Force the next sync to re-seed from scratch.
--
-- The seed window in lib/ringcentral.js widened from 7 days to 30, but that
-- only applies to an FSync — and an FSync only happens when there is no stored
-- sync token. With a token present the sync keeps doing ISyncs, which return
-- just the changes since the last run, so the extra 23 days of history would
-- never arrive.
--
-- Clearing the token makes the next run do a fresh 30-day FSync. Re-ingesting
-- is safe: calls upsert on rcCallId so nothing duplicates, and anything older
-- than the two-hour alert window neither creates leads nor sends Telegram
-- alerts (see ALERT_WINDOW_MS in lib/call-ingest.js).

UPDATE "RcSyncState" SET "syncToken" = NULL WHERE "id" = 'singleton';
