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

    // Mocka vanliga metoder
    jest.spyOn(view, 'updateWordDisplay')
    jest.spyOn(view, 'updateraWrongGuesses')
    jest.spyOn(view, 'drawHangman')
    jest.spyOn(view, 'showMessage')
    jest.spyOn(game, 'reset')
  })

  describe('handleGuess', () => {
    test('should update the game and view on a correct guess', () => {
      game.isCorrectGuess = jest.fn(() => true)
      jest.spyOn(game, 'getWordDisplay').mockReturnValue('h _ n g m _ n')

      controller.handleGuess('h')

      expect(game.isCorrectGuess).toHaveBeenCalledWith('h')
      expect(view.updateWordDisplay).toHaveBeenCalledWith('h _ n g m _ n')
    })

    test('should not update the view on an incorrect guess', () => {
      game.isCorrectGuess = jest.fn(() => false)

      controller.handleGuess('z')

      expect(game.isCorrectGuess).toHaveBeenCalledWith('z')
      expect(view.updateWordDisplay).not.toHaveBeenCalled()
    })
  })

  describe('checkGameState', () => {
    test('should inform view of victory if player wins', () => {
      game.isWin = jest.fn(() => true)

      controller.checkGameState()

      expect(view.showMessage).toHaveBeenCalledWith('Victory!')
    })

    test('should inform view of "Game Over" if player loses', () => {
      game.isWin = jest.fn(() => false)
      game.isGameOver = jest.fn(() => true)

      controller.checkGameState()

      expect(view.showMessage).toHaveBeenCalledWith('Game Over')
    })
  })

  describe('restartGame', () => {
    test('should reset the game with a new word and clear the view', () => {
      const newWord = 'javascript'

      controller.restartGame(newWord)

      expect(game.reset).toHaveBeenCalledWith(newWord)
      expect(view.updateWordDisplay).toHaveBeenCalledWith(game.getWordDisplay())
      expect(view.updateraWrongGuesses).toHaveBeenCalledWith([])
      expect(view.drawHangman).toHaveBeenCalledWith(0)
    })
  })
})
