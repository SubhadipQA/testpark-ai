const languageMap = {
  english: 'English',
  hindi: 'Hindi',
  bengali: 'Bengali',
  marathi: 'Marathi',
  tamil: 'Tamil',
  telugu: 'Telugu'
}

function getLanguage(lang) {
  return languageMap[lang] || 'English'
}

module.exports = { languageMap, getLanguage }