import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { toE164 } from '@/lib/phone'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.car2fix.com'

export async function POST(request) {
  try {
    const { name, phone, carModel, issue, shopType } = await request.json()

    if (!name || !phone || !carModel || !issue) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const normalizedShopType = shopType === 'body' ? 'body' : 'mechanical'

    // 1) Persist the lead — this is the source of truth for the CRM. We attempt
    //    this first so a Telegram outage can never lose a lead.
    let lead = null
    try {
      lead = await prisma.lead.create({
        data: {
          name,
          phone,
          phoneE164: toE164(phone), // join key for matching RingCentral callers
          carModel,
          issue,
          shopType: normalizedShopType,
          source: 'website_form',
          stage: 'new',
        },
      })
    } catch (dbError) {
      console.error('Failed to persist lead:', dbError)
    }

    // 2) Notify Telegram (best-effort). Failure here must NOT fail the visitor's
    //    submission once the lead has been saved.
    const telegramOk = await sendTelegramNotification({
      name,
      phone,
      carModel,
      issue,
      shopType: normalizedShopType,
      leadId: lead?.id,
    })

    // Treat the submission as successful if the lead was captured anywhere.
    if (lead || telegramOk) {
      return NextResponse.json({
        success: true,
        message: 'Your request has been submitted successfully!',
      })
    }

    // Both the database write and Telegram failed — ask the visitor to retry.
    return NextResponse.json(
      { error: 'We could not submit your request. Please call us at (607) 251-1509.' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Sends the lead to the shop's Telegram chat. Returns true on success, false on
// any failure (missing config, network error, or Telegram API error) — never throws.
async function sendTelegramNotification({ name, phone, carModel, issue, shopType, leadId }) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID_MECHANICAL = process.env.TELEGRAM_CHAT_ID_MECHANICAL
  const TELEGRAM_CHAT_ID_BODYSHOP = process.env.TELEGRAM_CHAT_ID_BODYSHOP

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID_MECHANICAL || !TELEGRAM_CHAT_ID_BODYSHOP) {
    console.error('Missing Telegram environment variables')
    return false
  }

  const chatId = shopType === 'body' ? TELEGRAM_CHAT_ID_BODYSHOP : TELEGRAM_CHAT_ID_MECHANICAL
  const shopEmoji = shopType === 'mechanical' ? '🔧' : '🎨'
  const shopName = shopType === 'mechanical' ? 'Mechanical Shop' : 'Body Shop'
  const crmLine = leadId ? `\n🗂 Open in CRM: ${SITE_URL}/crm/leads/${leadId}` : ''

  const message = `
${shopEmoji} *NEW LEAD - ${shopName}*
━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📞 *Phone:* ${phone}
🚗 *Vehicle:* ${carModel}

📝 *Issue Description:*
${issue}

━━━━━━━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}${crmLine}
  `.trim()

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
      }
    )
    const telegramResult = await telegramResponse.json()
    if (!telegramResult.ok) {
      console.error('Telegram API error:', telegramResult)
      return false
    }
    return true
  } catch (error) {
    console.error('Telegram request failed:', error)
    return false
  }
}
