/**
 * Tests for the Game module.
 * This test file focuses on the general functionality of the Hangman game logic.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

import { Game } from '../src/js/model/game.js'

// Testing av rätta svaret.
describe("Game", () => {
    test("should return true for a correct guess", () => {
        const game = new Game("hangman")
        expect(game.isCorrectGuess("h")).toBe(true)
    })
    // Testing av fell svaret.
    test("should return false for an incorrect guess", () => {
        const game = new Game("hangman");
        expect(game.isCorrectGuess("x")).toBe(false);
      })
})
// Testing av dublla bokstaver.(ignorera andra försåkt)
describe("Game", () => {
    test("should ignore duplicate guesses", () => {
      const game = new Game("hangman")
      game.isCorrectGuess("h"); // Första gissningen.
      game.isCorrectGuess("h"); // Dubblett.
      expect(game.guessedLetters).toEqual(["h"]) // Endast en "h" i listan.
    })
  })
  // Testing av felaktiga gissningar.
describe("Game", () => {
    test("should track wrong guesses separately", () => {
        const game = new Game("hangman")
        game.isCorrectGuess("x") // Felaktig gissning.
        game.isCorrectGuess("y") // Felaktig gissning.
        expect(game.wrongGuesses).toEqual(["x", "y"]) // Felaktiga bokstäver i lista.
    })
})