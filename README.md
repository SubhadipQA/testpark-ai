# TestPark AI

AI-powered parking zone summary generator that provides intelligent daily business insights for parking vendors in multiple Indian languages.

## Features

- **AI-Powered Summaries** - Generates conversational business insights using LLM
- **Multi-Zone Support** - Get summaries for single zone or all zones at once
- **Multi-Language** - Supports English, Hindi, Bengali, Marathi, Tamil, Telugu
- **Revenue Analytics** - Tracks cash, UPI, and unsettled payments
- **Vehicle Analytics** - Two-wheeler and four-wheeler breakdown
- **Peak Hour Detection** - Identifies busiest hours

## Tech Stack

- **Runtime:** Node.js v20+
- **Framework:** Express.js 5
- **AI Provider:** Groq (LLaMA 3.3 70B) - *easily swappable*
- **Dev Tools:** Nodemon

## Project Structure

```
testpark-ai/
├── app.js                          # Entry point
├── package.json
├── .env                            # Environment variables
└── src/
    └── modules/
        └── ai/
            ├── ai.routes.js        # Main AI routes
            ├── core/
            │   ├── ai.client.js    # AI provider client
            │   ├── ai.errors.js    # Error handlers
            │   └── ai.language.js  # Language utilities
            └── vendor-summary/
                ├── vendor-summary.routes.js
                ├── vendor-summary.controller.js
                ├── vendor-summary.service.js
                ├── vendor-summary.repository.js
                └── vendor-summary.prompt.js
```

## Installation

```bash
# Clone the repository
git clone https://github.com/SubhadipQA/testpark-ai.git
cd testpark-ai

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
GROQ_API_KEY=your_groq_api_key_here
```

## Running the App

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```
Server runs at: `http://localhost:3000`

## API Endpoints

### Health Check
```
GET /
```

### Single Zone Summary
```
POST /api/ai/summary
Content-Type: application/json

{
  "zoneId": 1,
  "language": "english"   // optional: english, hindi, bengali, marathi, tamil, telugu
}
```

### All Zones Summary
```
POST /api/ai/all-zones-summary
Content-Type: application/json

{
  "ownerId": 100,
  "language": "hindi"     // optional
}
```

### Sample Response (Single Zone)
```json
{
  "success": true,
  "data": {
    "zoneId": 1,
    "language": "english",
    "date": "2026-04-18",
    "summary": "Today at Park Street Zone A, you had 47 vehicles..."
  }
}
```

---

## Switching AI Providers

The AI client is modular. To switch providers, update `src/modules/ai/core/ai.client.js`:

### Current: Groq (LLaMA 3.3)
```javascript
const Groq = require('groq-sdk')
const client = new Groq({ apiKey: process.env.GROQ_API_KEY })

async function callClaude(prompt) {
  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1024
  })
  return response.choices[0].message.content
}
```

### Option: Anthropic Claude
```bash
npm install @anthropic-ai/sdk
```
```javascript
const Anthropic = require('@anthropic-ai/sdk')
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function callClaude(prompt) {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }]
  })
  return response.content[0].text
}
```
Add to `.env`:
```env
ANTHROPIC_API_KEY=your_anthropic_key
```

### Option: Google Gemini
```bash
npm install @google/generative-ai
```
```javascript
const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function callClaude(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const result = await model.generateContent(prompt)
  return result.response.text()
}
```
Add to `.env`:
```env
GEMINI_API_KEY=your_gemini_key
```

### Option: OpenAI
```bash
npm install openai
```
```javascript
const OpenAI = require('openai')
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function callClaude(prompt) {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1024
  })
  return response.choices[0].message.content
}
```
Add to `.env`:
```env
OPENAI_API_KEY=your_openai_key
```

---

## Supported Languages

| Code     | Language |
|----------|----------|
| english  | English  |
| hindi    | Hindi    |
| bengali  | Bengali  |
| marathi  | Marathi  |
| tamil    | Tamil    |
| telugu   | Telugu   |

## Testing with cURL

```bash
# Single zone summary
curl -X POST http://localhost:3000/api/ai/summary \
  -H "Content-Type: application/json" \
  -d '{"zoneId": 1, "language": "english"}'

# All zones summary
curl -X POST http://localhost:3000/api/ai/all-zones-summary \
  -H "Content-Type: application/json" \
  -d '{"ownerId": 100, "language": "hindi"}'
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

ISC

---
