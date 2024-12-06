/**
 * Tests for the Controller module.
 * Handles interactions between Game and View.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

import { Controller } from '../src/js/controler/controler.js'
import { Game } from '../src/js/model/game.js'
import { View } from '../src/js/view/view.js'

describe('Controller', () => {
  let controller, game, view

  beforeEach(() => {
    game = new Game('hangman') // Startar spelet med ett ord.
    view = new View()
    controller = new Controller(game, view)

    // Mocka View-metoderna för att undvika direkt DOM-manipulation.
    jest.spyOn(view, 'updateWordDisplay')
    jest.spyOn(view, 'updateraWrongGuesses')
    jest.spyOn(view, 'drawHangman')
  })

  describe('handleGuess', () => {
    test('should update the game and view on a correct guess', () => {
      game.isCorrectGuess = jest.fn(() => true) // Mocka korrekt gissning.

      controller.handleGuess('h')

      expect(game.isCorrectGuess).toHaveBeenCalledWith('h') // Kontrollera att modellen uppdateras.
      expect(view.updateWordDisplay).toHaveBeenCalledWith(game.getWordDisplay()) // Kontrollera att vyn uppdateras.
    })
  })
})
