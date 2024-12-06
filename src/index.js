// just "half manual test."
import { View } from './js/index.js'
// , Controller, Game

document.addEventListener('DOMContentLoaded', () => {
  const view = new View()

  // Testa updateraWrongGuesses.
  const wrongGuesses = ['x', 'y', 'z']
  view.updateraWrongGuesses(wrongGuesses)
})
