/**
 * Handles the User Interface (UI) for the Hangman game.
 * Manages user interactions, displays the game state, and updates the DOM.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the View component of the Hangman game.
 */
export class View {
  /**
   * Creates an instance of the View.
   */
  constructor () {
    // TODO..
  }

  /**
   * Binds a handler function to the guess input field.
   *
   * @param {Function} handler - The function to handle user input.
   */
  bindGuess (handler) {
    const inputElement = document.getElementById('guess-input')
    inputElement.addEventListener('input', event => {
      const letter = event.target.value.trim()
      handler(letter)
    })
  }

  /**
   * Updates the word display in the DOM.
   *
   * @param {string} wordDisplay - The current state of the word to display.
   */
  updateWordDisplay (wordDisplay) {
    const wordDisplayElement = document.getElementById('word-display')
    if (wordDisplayElement) {
      wordDisplayElement.textContent = wordDisplay
    }
  }

  /**
   * Updates the DOM to display a list of wrong guesses.
   *
   * @param {string[]} wrongGuesses - Array of wrong guesses.
   */
  updateraWrongGuesses (wrongGuesses) {
    const wrongGuessesElement = document.getElementById('wrong-guesses')
    if (wrongGuessesElement) {
      wrongGuessesElement.textContent = wrongGuesses.join(', ') // Visa som lista med komma emelan.
    }
  }

  /**
   * Draws the Hangman figure in the hangman container.
   *
   * @param {number} step - The step of the hangman drawing to display (based on wrong guesses).
   */
  drawHangman (step) {
    const hangmanContainer = document.getElementById('hangman')

    if (!hangmanContainer) {
      return
    } // Hantera om elementet inte finns.

    if (typeof step !== 'number' || step <= 0 || isNaN(step)) {
      // Rensa innehållet om inga felaktiga gissningar finns.
      hangmanContainer.innerHTML = ''
      return
    }

    const svgSteps = [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <line x1="10" y1="90" x2="90" y2="90" stroke="black" />
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <line x1="10" y1="90" x2="90" y2="90" stroke="black" />
        <line x1="30" y1="90" x2="30" y2="10" stroke="black" />
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <line x1="10" y1="90" x2="90" y2="90" stroke="black" />
        <line x1="30" y1="90" x2="30" y2="10" stroke="black" />
        <line x1="30" y1="10" x2="70" y2="10" stroke="black" />
        <line x1="70" y1="10" x2="70" y2="20" stroke="black" />
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <line x1="10" y1="90" x2="90" y2="90" stroke="black" />
        <line x1="30" y1="90" x2="30" y2="10" stroke="black" />
        <line x1="30" y1="10" x2="70" y2="10" stroke="black" />
        <line x1="70" y1="10" x2="70" y2="20" stroke="black" />
        <circle cx="70" cy="30" r="10" stroke="black" fill="none" />
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <line x1="10" y1="90" x2="90" y2="90" stroke="black" />
        <line x1="30" y1="90" x2="30" y2="10" stroke="black" />
        <line x1="30" y1="10" x2="70" y2="10" stroke="black" />
        <line x1="70" y1="10" x2="70" y2="20" stroke="black" />
        <circle cx="70" cy="30" r="10" stroke="black" fill="none" />
        <line x1="70" y1="40" x2="70" y2="70" stroke="black" />
      </svg>`
    ]

    hangmanContainer.innerHTML = svgSteps[Math.min(step, svgSteps.length - 1)] || ''
  }
}
