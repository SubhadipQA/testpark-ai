class AIError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AIError'
  }
}

module.exports = { AIError }