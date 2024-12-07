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

// Mocka de beroende klasserna
jest.mock('../src/js/model/game.js')
jest.mock('../src/js/view/view.js')
jest.mock('../src/js/controler/controler.js')

describe('Index.js', () => {
  beforeEach(() => {
    jest.clearAllMocks() // Rensa alla tidigare mock-anrop
  })

  test('should initialize Game, View, and Controller with dependency injection', () => {
    // Kör initializeGame med mock-klasser
    const mockWord = 'hangman'
    initializeGame(Game, View, Controller, mockWord)

    // Kontrollera att klasserna instansierades korrekt
    expect(Game).toHaveBeenCalledWith(mockWord)
    expect(View).toHaveBeenCalled()
    expect(Controller).toHaveBeenCalledWith(expect.any(Game), expect.any(View))
  })
  test('should initialize the game with correct wrong guesses count', () => {
    // Kör initializeGame med mock-klasser
    const mockWord = 'hangman'
    const { game, view } = initializeGame(Game, View, Controller, mockWord)
  
    // Kontrollera att updateraWrongGuesses anropas med en tom lista
    expect(view.updateraWrongGuesses).toHaveBeenCalledWith(game.wrongGuesses)
    expect(view.updateraWrongGuesses).toHaveBeenCalledTimes(1)
  })
})