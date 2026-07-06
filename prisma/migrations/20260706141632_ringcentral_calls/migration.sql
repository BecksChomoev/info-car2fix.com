-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "phoneE164" TEXT;

-- CreateTable
CREATE TABLE "Call" (
    "id" TEXT NOT NULL,
    "rcCallId" TEXT NOT NULL,
    "sessionId" TEXT,
    "telephonySessionId" TEXT,
    "direction" TEXT NOT NULL,
    "fromNumber" TEXT,
    "fromName" TEXT,
    "fromLocation" TEXT,
    "toNumber" TEXT,
    "shopType" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "action" TEXT,
    "transport" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "durationSec" INTEGER NOT NULL DEFAULT 0,
    "recordingRcId" TEXT,
    "recordingContentUri" TEXT,
    "recordingBlobUrl" TEXT,
    "recordingContentType" TEXT,
    "recordingError" TEXT,
    "vmMessageUri" TEXT,
    "vmStatus" TEXT,
    "vmTranscript" TEXT,
    "vmAudioBlobUrl" TEXT,
    "vmAudioContentType" TEXT,
    "leadId" TEXT,
    "leadAutoCreated" BOOLEAN NOT NULL DEFAULT false,
    "alertedAt" TIMESTAMP(3),
    "vmAlertedAt" TIMESTAMP(3),
    "rcRaw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Call_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RcSyncState" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "syncToken" TEXT,
    "lastSyncAt" TIMESTAMP(3),
    "lastError" TEXT,
    "lockedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RcSyncState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Call_rcCallId_key" ON "Call"("rcCallId");

-- CreateIndex
CREATE INDEX "Call_startTime_idx" ON "Call"("startTime");

-- CreateIndex
CREATE INDEX "Call_leadId_idx" ON "Call"("leadId");

-- CreateIndex
CREATE INDEX "Call_shopType_idx" ON "Call"("shopType");

-- CreateIndex
CREATE INDEX "Call_result_idx" ON "Call"("result");

-- CreateIndex
CREATE INDEX "Call_telephonySessionId_idx" ON "Call"("telephonySessionId");

-- CreateIndex
CREATE INDEX "Lead_phoneE164_idx" ON "Lead"("phoneE164");

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Backfill Lead.phoneE164 from the free-form phone strings the contact form
-- collected (US numbers: 10 digits, or 11 starting with 1).
UPDATE "Lead" SET "phoneE164" =
  CASE
    WHEN length(regexp_replace("phone", '\D', '', 'g')) = 10
      THEN '+1' || regexp_replace("phone", '\D', '', 'g')
    WHEN length(regexp_replace("phone", '\D', '', 'g')) = 11
     AND left(regexp_replace("phone", '\D', '', 'g'), 1) = '1'
      THEN '+' || regexp_replace("phone", '\D', '', 'g')
    ELSE NULL
  END
WHERE "phoneE164" IS NULL;
