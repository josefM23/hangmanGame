/**
 * Tests for the index.js file.
 * Ensures the game initializes correctly.
 *
 * @author Josef Matyasek
 * @version 1.0.0
 */

import { initializeGame } from '../src/index.js'
import { Game } from '../src/js/model/game.js'
import { View } from '../src/js/view/view.js'
import { Controller } from '../src/js/controler/controler.js'

// Mock dependencies
jest.mock('../src/js/model/game.js')
jest.mock('../src/js/view/view.js')
jest.mock('../src/js/controler/controler.js')

describe('Index.js', () => {
  const mockWord = 'hangman'
  const mockWordElement = { textContent: '' }
  const wordDisplayId = 'word-display'

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(document, 'getElementById').mockReturnValue(mockWordElement)
  })

  test('should initialize Game, View, and Controller with dependency injection', () => {
    initializeGame(Game, View, Controller, mockWord, wordDisplayId)

    expect(Game).toHaveBeenCalledWith(mockWord)
    expect(View).toHaveBeenCalled()
    expect(Controller).toHaveBeenCalledWith(expect.any(Game), expect.any(View))
  })

  test('should initialize the game with correct wrong guesses count', () => {
    const { game, view } = initializeGame(Game, View, Controller, mockWord, wordDisplayId)

    expect(view.updateraWrongGuesses).toHaveBeenCalledWith(game.wrongGuesses)
    expect(view.updateraWrongGuesses).toHaveBeenCalledTimes(1)
  })

  test('should update DOM element with the word display', () => {
    const { game } = initializeGame(Game, View, Controller, mockWord, wordDisplayId)

    expect(mockWordElement.textContent).toBe(game.getWordDisplay())
  })
})
