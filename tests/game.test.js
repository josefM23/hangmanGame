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
  
  describe('Input validation', () => {
    test('should accept valid letters (a-z)', () => {
      expect(game.isCorrectGuess('a')).toBe(true)
      expect(game.isCorrectGuess('H')).toBe(true) // Should handle case insensitivity.
    })

    test('should ignore invalid input (numbers, symbols, empty string)', () => {
      expect(game.isCorrectGuess('1')).toBe(false)
      expect(game.isCorrectGuess('@')).toBe(false)
      expect(game.isCorrectGuess('')).toBe(false)

      // Ensure no updates to guessedLetters or wrongGuesses.
      expect(game.guessedLetters).toEqual([])
      expect(game.wrongGuesses).toEqual([])
    })

    test('should not modify guessedLetters or wrongGuesses for invalid input', () => {
      game.isCorrectGuess('1') // Invalid input.
      game.isCorrectGuess('@') // Invalid input.

      expect(game.guessedLetters).toEqual([]) // Nothing should be added.
      expect(game.wrongGuesses).toEqual([]) // Nothing should be added.
    })
  })

  describe('Validating correct and incorrect guesses', () => {
    test('should return true for a correct guess', () => {
      expect(game.isCorrectGuess('h')).toBe(true)
    })

    test('should return false for an incorrect guess', () => {
      expect(game.isCorrectGuess('x')).toBe(false)
    })
  })

  describe('Handling and tracking duplicate and incorrect guesses', () => {
    test('should ignore duplicate guesses', () => {
      game.isCorrectGuess('h') // First guess.
      game.isCorrectGuess('h') // Duplicate guess.
      expect(game.guessedLetters).toEqual(['h']) // Only one 'h' in the list.
    })

    test('should track wrong guesses separately', () => {
      game.isCorrectGuess('x') // Incorrect guess.
      game.isCorrectGuess('y') // Another incorrect guess.
      expect(game.wrongGuesses).toEqual(['x', 'y']) // Both incorrect guesses in the list.
    })
  })

  describe('isWin method', () => {
    test('should return true when all letters are guessed', () => {
      game.isCorrectGuess('h')
      game.isCorrectGuess('a')
      game.isCorrectGuess('n')
      game.isCorrectGuess('g')
      game.isCorrectGuess('m')

      expect(game.isWin()).toBe(true)
    })

    test('should return false when there are unguessed letters', () => {
      game.isCorrectGuess('h')
      game.isCorrectGuess('a')

      expect(game.isWin()).toBe(false)
    })

    test('should return true even with duplicate guesses', () => {
      game.isCorrectGuess('h')
      game.isCorrectGuess('h') // Duplicate guess.
      game.isCorrectGuess('a')
      game.isCorrectGuess('n')
      game.isCorrectGuess('g')
      game.isCorrectGuess('m')

      expect(game.isWin()).toBe(true)
    })
  })
})
