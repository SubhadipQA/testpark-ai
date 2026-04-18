const express = require('express')
const router = express.Router()
const { 
  getVendorSummary,
  getAllZonesSummary  // add this
} = require('./vendor-summary.controller')

router.post('/summary', getVendorSummary)
router.post('/all-zones-summary', getAllZonesSummary)  // add this

module.exports = router