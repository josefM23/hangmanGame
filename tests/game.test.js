/**
 * Tests for the Game module.
 * This test file focuses on the general functionality of the Hangman game logic.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

import { Game } from '../src/js/model/game.js'

describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game('hangman')
  })
  
  

  describe('Correct and incorrect guesses', () => {
    // Testing av rätta svaret.
    test('should return true for a correct guess', () => {
      expect(game.isCorrectGuess('h')).toBe(true)
    })

    // Testing av fell svaret.
    test('should return false for an incorrect guess', () => {
      expect(game.isCorrectGuess('x')).toBe(false)
    })
  })

    // Testing av dublla bokstaver.(ignorera andra försåkt).
  describe('Tracking guesses', () => {
    test('should ignore duplicate guesses', () => {
      game.isCorrectGuess('h') // First guess.
      game.isCorrectGuess('h') // Duplicate guess.
      expect(game.guessedLetters).toEqual(['h']) // Only one 'h' in the list.
    })

    // Testing av felaktiga gissningar.
    test('should track wrong guesses separately', () => {
      game.isCorrectGuess('x') // Incorrect guess.
      game.isCorrectGuess('y') // Another incorrect guess.
      expect(game.wrongGuesses).toEqual(['x', 'y']) // Both incorrect guesses in the list.
    })
  })
})
