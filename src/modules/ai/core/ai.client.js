const Groq = require('groq-sdk')

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

async function callClaude(prompt) {
  try {
    const response = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1024
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error('Groq API Error:', error.message)
    throw new Error('AI service failed')
  }
}

module.exports = { callClaude }