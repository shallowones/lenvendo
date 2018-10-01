import { SYMBOLS } from './constants'

/**
 * Getting random integer
 * @param min
 * @param max
 * @returns {number}
 */
const getRandom = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Generating text of random symbols and length
 * @returns {string}
 */
export default function generateRandomText () {
  let text = ''

  for (let i = 0; i < getRandom(); i++) {
    text += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length))
  }

  return text
}
