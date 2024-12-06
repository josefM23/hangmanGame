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
}
