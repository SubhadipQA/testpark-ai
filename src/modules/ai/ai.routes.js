const express = require('express')
const router = express.Router()

const vendorSummaryRoutes = require('./vendor-summary/vendor-summary.routes')
router.use('/vendor', vendorSummaryRoutes)

// Uncomment later when you build these:
// const parkingSearchRoutes = require('./parking-search/parking-search.routes')
// const entryAssistantRoutes = require('./entry-assistant/entry-assistant.routes')
// router.use('/search', parkingSearchRoutes)
// router.use('/entry', entryAssistantRoutes)

module.exports = router