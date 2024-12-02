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
})