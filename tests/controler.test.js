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
      jest.spyOn(game, 'getWordDisplay').mockReturnValue('h _ n g m _ n') // Mocka ordvisning.

      controller.handleGuess('h')

      expect(game.isCorrectGuess).toHaveBeenCalledWith('h') // Kontrollera att modellen uppdateras.
      expect(view.updateWordDisplay).toHaveBeenCalledWith('h _ n g m _ n') // Kontrollera att vyn uppdateras.
    })

    test('should not update the view on an incorrect guess', () => {
      game.isCorrectGuess = jest.fn(() => false) // Mocka felaktig gissning.

      controller.handleGuess('z') // Testa med en felaktig bokstav.

      expect(game.isCorrectGuess).toHaveBeenCalledWith('z') // Kontrollera att metoden anropas.
      expect(view.updateWordDisplay).not.toHaveBeenCalled() // Kontrollera att vyn inte uppdateras.
    })
  })

  describe('checkGameState', () => {
    test('should inform view of victory if player wins', () => {
      game.isWin = jest.fn(() => true) // Mocka att spelaren har vunnit.
      game.isGameOver = jest.fn(() => false) // Spelet är inte över pga förlust.

      jest.spyOn(view, 'showMessage') // Mocka View-metoden för att visa meddelande.

      controller.checkGameState()

      expect(game.isWin).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för vinst.
      expect(view.showMessage).toHaveBeenCalledWith('Victory!') // Kontrollera att rätt meddelande visas.
    })
  })

})
