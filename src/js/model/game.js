/**
 * Represents the logic for the Hangman game.
 * This module handles word validation and guesses.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

export class Game {
    /**
     * Creates an instance of the game with the given words.
     * @param {string} word - The word to guess in the game.
     */
    constructor(word) {
      this.word = word.toLowerCase() // ordet att gissa.
    }
  
    /**
     * Checks if a guessed letter is part of the word.
     * @param {string} letter - The letter to check.
     * @returns {boolean} - True if the letter is in the word, false otherwise.
     */
    isCorrectGuess(letter) {
        
      return this.word.includes(letter.toLowerCase())
    }
  }
  