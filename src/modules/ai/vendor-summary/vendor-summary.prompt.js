const languageMap = {
  english: 'English',
  hindi: 'Hindi',
  bengali: 'Bengali',
  marathi: 'Marathi',
  tamil: 'Tamil',
  telugu: 'Telugu'
}

function buildSummaryPrompt(data, language = 'english') {
  const lang = languageMap[language] || 'English'

  return `
You are a smart parking business assistant for TestPark, an Indian smart testing data platform.

A parking zone owner wants to understand how their zone performed today.
Respond ONLY in ${lang} language.
Be conversational, friendly, and helpful like a business advisor.
Cover ALL data points in your response. No bullet points. No headers. Just plain flowing sentences. Maximum 8 lines.Highlight anything unusual like unsettled payments or high pass usage.

Here is today's data for zone: ${data.zoneName}
Date: ${data.date}

- Total vehicles parked: ${data.totalSessions}
- Currently active sessions: ${data.activeSessions}
- Completed sessions: ${data.completedSessions}
- Walk-in customers: ${data.walkInSessions}
- Monthly pass holders: ${data.passSessions}
- Total revenue collected: ₹${data.totalRevenue}
- Cash collected: ₹${data.paymentBreakdown.cash}
- UPI collected: ₹${data.paymentBreakdown.upi}
- Unsettled sessions: ${data.unsettledSessions} worth ₹${data.unsettledAmount}
- Peak hour today: ${data.peakHour}
- Two wheelers: ${data.vehicleBreakdown.twoWheeler}
- Four wheelers: ${data.vehicleBreakdown.fourWheeler}

Now summarize this for the zone owner in ${lang}.
  `
}

module.exports = { buildSummaryPrompt }