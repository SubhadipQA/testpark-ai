const { generateVendorSummary, generateAllZonesSummary } = require('./vendor-summary.service')

async function getVendorSummary(req, res) {
  try {
    const { zoneId, language } = req.body

    if (!zoneId) {
      return res.status(400).json({
        success: false,
        message: 'zoneId is required'
      })
    }

    const result = await generateVendorSummary(
      zoneId,
      language || 'english'
    )

    return res.status(200).json({
      success: true,
      data: result
    })

  } catch (error) {
    console.error('Vendor Summary Error:', error.message)
    return res.status(500).json({
      success: false,
      message: 'Failed to generate summary'
    })
  }
}

async function getAllZonesSummary(req, res) {
  try {
    const { ownerId, language } = req.body

    if (!ownerId) {
      return res.status(400).json({
        success: false,
        message: 'ownerId is required'
      })
    }

    const result = await generateAllZonesSummary(
      ownerId,
      language || 'english'
    )

    return res.status(200).json({
      success: true,
      data: result
    })

  } catch (error) {
    console.error('All Zones Summary Error:', error.message)
    return res.status(500).json({
      success: false,
      message: 'Failed to generate summary'
    })
  }
}

module.exports = { getVendorSummary, getAllZonesSummary }