// Vercel Serverless Function - Contact Form to Telegram
// This keeps your Bot Token secure on the server side

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { name, phone, carModel, issue, shopType } = req.body;

    // Validate required fields
    if (!name || !phone || !carModel || !issue) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Get environment variables
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Format the message for Telegram
    const shopEmoji = shopType === 'mechanical' ? '🔧' : '🎨';
    const shopName = shopType === 'mechanical' ? 'Mechanical Shop' : 'Body Shop';
    
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
    `.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResult.ok) {
      console.error('Telegram API error:', telegramResult);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    // Success
    return res.status(200).json({ 
      success: true, 
      message: 'Your request has been submitted successfully!' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
