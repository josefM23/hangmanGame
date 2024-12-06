/**
 * Tests for the Game module.
 * This test file focuses on the general functionality of the Hangman game logic.
 *
 * @author Josef Matyasek
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
      ['a', 'H'].forEach(input => {
        expect(game.isCorrectGuess(input)).toBe(true)
      })
    })

    test('should ignore invalid input (numbers, symbols, empty string)', () => {
      ['1', '@', ''].forEach(input => {
        expect(game.isCorrectGuess(input)).toBe(false)
      })

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

  describe('Handling guesses', () => {
    test('should ignore duplicate guesses', () => {
      game.isCorrectGuess('h')
      game.isCorrectGuess('h') // Duplicate guess.
      expect(game.guessedLetters).toEqual(['h'])
    })

    test('should track wrong guesses separately', () => {
      ['x', 'y'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.wrongGuesses).toEqual(['x', 'y'])
    })
  })

  describe('Winning condition (isWin)', () => {
    test('should return true when all letters are guessed', () => {
      ['h', 'a', 'n', 'g', 'm'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.isWin()).toBe(true)
    })

    test('should return false when there are unguessed letters', () => {
      game.isCorrectGuess('h')
      game.isCorrectGuess('a')
      expect(game.isWin()).toBe(false)
    })

    test('should return true even with duplicate guesses', () => {
      ['h', 'h', 'a', 'n', 'g', 'm'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.isWin()).toBe(true)
    })
  })

  describe('Game over condition (isGameOver)', () => {
    test('should return true when the player has won', () => {
      ['h', 'a', 'n', 'g', 'm'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.isGameOver()).toBe(true)
    })
  
    test('should return true when the player has lost', () => {
      const wrongGuesses = ['x', 'y', 'z', 'q', 'w', 'e', 'r'] // 6 felaktiga gissningar
      wrongGuesses.forEach(guess => game.isCorrectGuess(guess))
      expect(game.isGameOver()).toBe(true) // Kontrollera att spelet är över
    })
  
    test('should return false when the game is still ongoing', () => {
      game.isCorrectGuess('h') // Rätt gissning
      game.isCorrectGuess('x') // En felaktig gissning
      expect(game.isGameOver()).toBe(false) // Kontrollera att spelet fortsätter
    })
  })
  

  describe('getWordDisplay method', () => {
    test('should return only underscores when no letters are guessed', () => {
      expect(game.getWordDisplay()).toBe('_ _ _ _ _ _ _') // For "hangman".
    })

    test('should return correct letters and underscores for guessed letters', () => {
      ['h', 'a'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.getWordDisplay()).toBe('h a _ _ _ a _')
    })

    test('should return the full word when all letters are guessed', () => {
      ['h', 'a', 'n', 'g', 'm'].forEach(guess => game.isCorrectGuess(guess))
      expect(game.getWordDisplay()).toBe('h a n g m a n')
    })
  })

  describe('reset method', () => {
    test('should reset the game state with a new word', () => {
      game.isCorrectGuess('h') // Make some guesses.
      game.isCorrectGuess('x')
  
      game.reset('newword') // Reset the game with a new word.
  
      // Ensure guessed letters and wrong guesses are cleared.
      expect(game.guessedLetters).toEqual([])
      expect(game.wrongGuesses).toEqual([])
  
      // Ensure the new word is set.
      expect(game.word).toBe('newword')
    })
  
    test('should allow the game to function correctly after reset', () => {
      game.isCorrectGuess('h') // Make some guesses.
      game.isCorrectGuess('x')
  
      game.reset('resetword') // Reset the game with a new word.
  
      expect(game.isCorrectGuess('r')).toBe(true) // Test functionality with the new word.
      expect(game.isCorrectGuess('z')).toBe(false)
    })
  })
})
