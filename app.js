require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const aiRoutes = require('./src/modules/ai/ai.routes')
app.use('/api/ai', aiRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'TestPark AI Module Running' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`TestPark AI running on port ${PORT}`)
})