import { NextResponse } from 'next/server'
import { getWeekRange, buildWeeklyReport, formatWeeklyReportText } from '@/lib/referral-report'
import { sendTelegramMessage } from '@/lib/telegram'

// Vercel cron target (see vercel.json): every Monday morning, send last week's
// referral commission report to the owners' Telegram chat (Shukhrat, Dan,
// Ricardo, Becks). Vercel invokes the URL with `Authorization: Bearer
// $CRON_SECRET` when that env var is set — both it and
// TELEGRAM_CHAT_ID_REFERRALS must be configured for this to run.

export async function GET(request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const chatId = process.env.TELEGRAM_CHAT_ID_REFERRALS
  if (!chatId) {
    return NextResponse.json(
      { error: 'TELEGRAM_CHAT_ID_REFERRALS is not configured' },
      { status: 500 }
    )
  }

  // -1 = the week that just ended (Mon 00:00 – Mon 00:00 ET).
  const report = await buildWeeklyReport(getWeekRange(-1))
  const ok = await sendTelegramMessage(chatId, formatWeeklyReportText(report))

  if (!ok) {
    return NextResponse.json({ error: 'Telegram send failed' }, { status: 502 })
  }
  return NextResponse.json({ success: true, week: report.range.label })
}
