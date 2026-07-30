-- One-time data fix for calls ingested before the body-shop correction.
--
-- CALL_SHOP_TYPE in lib/call-ingest.js used to be 'mechanical', on the
-- assumption that a single advertised line meant calls could not be attributed
-- to a shop. In practice the RingCentral feed we can read belongs to the Body
-- Shop user's extension (we lack ReadCompanyCallLog, so syncCallLog falls back
-- to the per-extension feed), which means every call ingested so far is a
-- body-shop call. New calls are written correctly at ingest; this repairs the
-- rows already stored.
--
-- The call-log sync only replays records that changed, so these rows would
-- otherwise keep their wrong shop indefinitely.

UPDATE "Call" SET "shopType" = 'body' WHERE "shopType" = 'mechanical';

-- Leads auto-created from those calls inherited the same wrong shop. Scope this
-- to source='phone_call': those are the only leads call ingestion creates.
-- Website-form leads carry the shop their form was submitted from and must not
-- be touched.
UPDATE "Lead" SET "shopType" = 'body'
WHERE "source" = 'phone_call' AND "shopType" = 'mechanical';
