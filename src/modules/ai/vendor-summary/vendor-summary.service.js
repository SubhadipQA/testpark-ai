const { getVendorDailySummary, getAllZonesSummaryData } = require('./vendor-summary.repository')
const { buildSummaryPrompt } = require('./vendor-summary.prompt')
const { callClaude } = require('../core/ai.client')

async function generateVendorSummary(zoneId, language = 'english') {
  const data = await getVendorDailySummary(zoneId)
  const prompt = buildSummaryPrompt(data, language)
  const summary = await callClaude(prompt)

  return {
    zoneId,
    language,
    date: data.date,
    summary
  }
}


async function generateAllZonesSummary(ownerId, language = 'english') {
  const zonesData = await getAllZonesSummaryData(ownerId)
  
  // Call AI for each zone
  const summaries = await Promise.all(
    zonesData.map(async (zoneData) => {
      const prompt = buildSummaryPrompt(zoneData, language)
      const summary = await callClaude(prompt)
      return {
        zoneId: zoneData.zoneId,
        zoneName: zoneData.zoneName,
        totalRevenue: zoneData.totalRevenue,
        totalSessions: zoneData.totalSessions,
        unsettledSessions: zoneData.unsettledSessions,
        summary
      }
    })
  )

  // Overall total
  const overallRevenue = zonesData.reduce((sum, z) => sum + z.totalRevenue, 0)
  const overallSessions = zonesData.reduce((sum, z) => sum + z.totalSessions, 0)
  const overallUnsettled = zonesData.reduce((sum, z) => sum + z.unsettledSessions, 0)

  return {
    ownerId,
    language,
    date: zonesData[0].date,
    overall: {
      totalZones: zonesData.length,
      totalRevenue: overallRevenue,
      totalSessions: overallSessions,
      totalUnsettled: overallUnsettled
    },
    zones: summaries
  }
}

module.exports = { generateVendorSummary, generateAllZonesSummary }

