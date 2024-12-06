/**
 * Initializes and starts the Hangman game.
 * Handles dependency injection and sets up the initial game state.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 */

// Importera Claseer
import { Game } from './js/model/game.js'
import { View } from './js/view/view.js'
import { Controller } from './js/controler/controler.js'

/**
 * Initializes the Hangman game with dependency injection.
 *
 * @param {Function} GameClass - The Game class or a mock for testing.
 * @param {Function} ViewClass - The View class or a mock for testing.
 * @param {Function} ControllerClass - The Controller class or a mock for testing.
 * @param {string} word - The word to initialize the game with.
 * @returns {Object} - The initialized game, view, and controller instances.
 */
export function initializeGame (GameClass, ViewClass, ControllerClass, word = 'hangman') {
  const game = new GameClass(word)
  const view = new ViewClass()
  const controller = new ControllerClass(game, view)

  // Initiera spelets tillstånd.
  view.updateWordDisplay(game.getWordDisplay())
  view.updateraWrongGuesses([])
  view.drawHangman(0)

  return { game, view, controller } // Returnera instanser för testning...
}

// Kör när DOMContentLoaded har laddats klart.
document.addEventListener('DOMContentLoaded', () => {
  initializeGame(Game, View, Controller)
})
