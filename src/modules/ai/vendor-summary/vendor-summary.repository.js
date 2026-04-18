async function getVendorDailySummary(zoneId) {
  return {
    zoneId: zoneId,
    zoneName: 'Park Street Zone A',
    date: new Date().toISOString().split('T')[0],
    totalSessions: 47,
    completedSessions: 44,
    activeSessions: 3,
    walkInSessions: 35,
    passSessions: 12,
    totalRevenue: 3200,
    unsettledSessions: 3,
    unsettledAmount: 450,
    paymentBreakdown: {
      cash: 1800,
      upi: 1400
    },
    peakHour: '10:00 - 11:00',
    vehicleBreakdown: {
      twoWheeler: 28,
      fourWheeler: 19
    }
  }
}

async function getAllZonesSummaryData(ownerId) {
  // Mock data — 3 zones for same owner
  return [
    {
      zoneId: 1,
      zoneName: 'Park Street Zone A',
      date: new Date().toISOString().split('T')[0],
      totalSessions: 47,
      completedSessions: 44,
      activeSessions: 3,
      walkInSessions: 35,
      passSessions: 12,
      totalRevenue: 3200,
      unsettledSessions: 3,
      unsettledAmount: 450,
      paymentBreakdown: { cash: 1800, upi: 1400 },
      peakHour: '10:00 - 11:00',
      vehicleBreakdown: { twoWheeler: 28, fourWheeler: 19 }
    },
    {
      zoneId: 2,
      zoneName: 'Salt Lake Sector V Parking',
      date: new Date().toISOString().split('T')[0],
      totalSessions: 31,
      completedSessions: 31,
      activeSessions: 0,
      walkInSessions: 31,
      passSessions: 0,
      totalRevenue: 1850,
      unsettledSessions: 0,
      unsettledAmount: 0,
      paymentBreakdown: { cash: 900, upi: 950 },
      peakHour: '09:00 - 10:00',
      vehicleBreakdown: { twoWheeler: 15, fourWheeler: 16 }
    },
    {
      zoneId: 3,
      zoneName: 'New Town Action Area Parking',
      date: new Date().toISOString().split('T')[0],
      totalSessions: 62,
      completedSessions: 58,
      activeSessions: 4,
      walkInSessions: 45,
      passSessions: 17,
      totalRevenue: 4100,
      unsettledSessions: 6,
      unsettledAmount: 780,
      paymentBreakdown: { cash: 2200, upi: 1900 },
      peakHour: '11:00 - 12:00',
      vehicleBreakdown: { twoWheeler: 30, fourWheeler: 32 }
    }
  ]
}

module.exports = { getVendorDailySummary, getAllZonesSummaryData }