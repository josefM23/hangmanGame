/**
 * Represents the logic for the Hangman game.
 * This module handles word validation and guesses.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

export class Game {
    constructor(word) {
      this.word = word.toLowerCase() // detta blir spel fpr min 5 åring dotter...
      this.guessedLetters = [] // Håller reda på gissade bokstäver..
    }
  
    /**
     * Checks if a guessed letter is part of the word.
     * Ignores duplicate guesses.
     *
     * @param {string} letter - The letter to check.
     * @returns {boolean} - True if the letter is in the word, false otherwise.
     */
    isCorrectGuess(letter) {
      letter = letter.toLowerCase()
  
      // Ignorera om bokstaven redan har gissats..
      if (this.guessedLetters.includes(letter)) {
        return this.word.includes(letter)
      }
  
      // Lägg till bokstaven i listan..
      this.guessedLetters.push(letter)
      return this.word.includes(letter)
    }
  }
  