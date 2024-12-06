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
    jest.spyOn(view, 'showMessage')
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

      controller.checkGameState()

      expect(game.isWin).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för vinst.
      expect(view.showMessage).toHaveBeenCalledWith('Victory!') // Kontrollera att rätt meddelande visas.
    })

    test('should inform view of "Game Over" if player loses', () => {
      game.isWin = jest.fn(() => false) // Mocka att spelaren inte har vunnit.
      game.isGameOver = jest.fn(() => true) // Mocka att spelet är över pga förlust.

      controller.checkGameState()

      expect(game.isWin).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för vinst.
      expect(game.isGameOver).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för förlust.
      expect(view.showMessage).toHaveBeenCalledWith('Game Over') // Kontrollera att rätt meddelande visas.
    })

    test('should not show any message if game is not over', () => {
      game.isWin = jest.fn(() => false) // Mocka att spelet inte har vunnits.
      game.isGameOver = jest.fn(() => false) // Mocka att spelet inte är över.

      controller.checkGameState()

      expect(game.isWin).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för vinst.
      expect(game.isGameOver).toHaveBeenCalled() // Kontrollera att spelet kontrolleras för förlust.
      expect(view.showMessage).not.toHaveBeenCalled() // Kontrollera att inget meddelande visas.
    })
  })

  describe('restartGame', () => {
    beforeEach(() => {
      jest.spyOn(game, 'reset')
      jest.spyOn(view, 'updateWordDisplay')
      jest.spyOn(view, 'updateraWrongGuesses')
      jest.spyOn(view, 'drawHangman')
    })
  
    test('should reset the game with a new word and clear the view', () => {
      const newWord = 'javascript'
  
      controller.restartGame(newWord)
  
      expect(game.reset).toHaveBeenCalledWith(newWord) // Kontrollera att spelet återställs med nytt ord.
      expect(view.updateWordDisplay).toHaveBeenCalledWith(game.getWordDisplay()) // Kontrollera att ordet uppdateras i vyn.
      expect(view.updateraWrongGuesses).toHaveBeenCalledWith([]) // Kontrollera att felaktiga gissningar rensas.
      expect(view.drawHangman).toHaveBeenCalledWith(0) // Kontrollera att hängande mannen återställs.
    })
  })
  
})
