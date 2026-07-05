// Minimal Telegram sender for internal notifications (weekly referral report).
// Plain text on purpose: partner/customer names with Markdown characters must
// never break delivery. Returns true/false, never throws — callers decide how
// to surface a failure.

export async function sendTelegramMessage(chatId, text) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  if (!token || !chatId) {
    console.error('sendTelegramMessage: missing TELEGRAM_BOT_TOKEN or chat id')
    return false
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })
    const result = await res.json()
    if (!result.ok) {
      console.error('Telegram API error:', result)
      return false
    }
    return true
  } catch (error) {
    console.error('Telegram request failed:', error)
    return false
  }
}
