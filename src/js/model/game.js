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
   * Checks if a guessed letter is part of the word.
   * Tracks wrong guesses separately.
   *
   * @param {string} letter - The letter to check.
   * @returns {boolean} - True if the letter is in the word, false otherwise.
   */
  isCorrectGuess (letter) {
    letter = letter.toLowerCase()

    // Ignore the guess if the letter has already been guessed.
    if (this.guessedLetters.includes(letter)) {
      return this.word.includes(letter)
    }

    // Add the guessed letter to the guessed letters list.
    this.guessedLetters.push(letter)

    // Add to wrong guesses if the letter is not in the word.
    if (!this.word.includes(letter)) {
      this.wrongGuesses.push(letter)
    }

    return this.word.includes(letter)
  }
}
