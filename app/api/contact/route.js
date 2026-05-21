import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, phone, carModel, issue, shopType } = await request.json()

    if (!name || !phone || !carModel || !issue) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID_MECHANICAL = process.env.TELEGRAM_CHAT_ID_MECHANICAL
    const TELEGRAM_CHAT_ID_BODYSHOP = process.env.TELEGRAM_CHAT_ID_BODYSHOP

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID_MECHANICAL || !TELEGRAM_CHAT_ID_BODYSHOP) {
      console.error('Missing Telegram environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const TELEGRAM_CHAT_ID =
      shopType === 'body' ? TELEGRAM_CHAT_ID_BODYSHOP : TELEGRAM_CHAT_ID_MECHANICAL

    const shopEmoji = shopType === 'mechanical' ? '🔧' : '🎨'
    const shopName = shopType === 'mechanical' ? 'Mechanical Shop' : 'Body Shop'

    const message = `
${shopEmoji} *NEW LEAD - ${shopName}*
━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📞 *Phone:* ${phone}
🚗 *Vehicle:* ${carModel}

📝 *Issue Description:*
${issue}

━━━━━━━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
    `.trim()

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    const telegramResult = await telegramResponse.json()

    if (!telegramResult.ok) {
      console.error('Telegram API error:', telegramResult)
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted successfully!',
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
