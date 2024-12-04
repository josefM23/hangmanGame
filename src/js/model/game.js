/**
 * Represents the logic for the Hangman game.
 * This module handles word validation and guesses.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the Hangman game.
 */
export class Game {
  /**
   * Creates an instance of the Hangman game.
   *
   * @param {string} word - The word to guess.
   */
  constructor (word) {
    this.word = word.toLowerCase() // Converts the word to lowercase for consistency.
    this.guessedLetters = [] // Tracks correctly guessed letters.
    this.wrongGuesses = [] // Tracks incorrectly guessed letters.
  }

  /**
   * Sanitizes input to ensure it is a single lowercase letter.
   *
   * @param {string} letter - The input to sanitize.
   * @returns {string} - The sanitized letter.
   * @throws {Error} - If the input is invalid.
   */
  sanitizeLetter (letter) {
    const sanitized = letter.toLowerCase()
    if (!/^[a-z]$/.test(sanitized)) {
      throw new Error('Invalid input. Please enter a single letter (a-z).')
    }
    return sanitized
  }

  /**
   * Checks if a guessed letter is valid and updates game state.
   *
   * @param {string} letter - The letter to check.
   * @returns {boolean} - True if the letter is in the word, false otherwise.
   */
  isCorrectGuess (letter) {
    try {
      const sanitizedLetter = this.sanitizeLetter(letter)

      // Ignore the guess if the letter has already been guessed.
      if (this.guessedLetters.includes(sanitizedLetter)) {
        return this.word.includes(sanitizedLetter)
      }

      // Add the guessed letter to the guessed letters list.
      this.guessedLetters.push(sanitizedLetter)

      // Add to wrong guesses if the letter is not in the word.
      if (!this.word.includes(sanitizedLetter)) {
        this.wrongGuesses.push(sanitizedLetter)
        return false
      }

      return true
    } catch (error) {
      // Ignore invalid input.
      return false
    }
  }

  /**
   * Determines if the player has won the game.
   *
   * @returns {boolean} - True if all letters in the word have been guessed, false otherwise.
   */
  isWin () {
    return this.word.split('').every(letter => this.guessedLetters.includes(letter))
  }

  /**
   * Determines if the game is over.
   * The game is over if the player has won or the number of wrong guesses exceeds the maximum allowed.
   *
   * @returns {boolean} - True if the game is over, false otherwise.
   */
  isGameOver () {
    const MAX_WRONG_GUESSES = 5 // Maximum allowed incorrect guesses(It will be more in a future..)
    return this.isWin() || this.wrongGuesses.length > MAX_WRONG_GUESSES
  }
}
