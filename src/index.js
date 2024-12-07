/**
 * Initializes and starts the Hangman game.
 * Handles dependency injection and sets up the initial game state.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 */

import { Game } from './js/model/game.js'
import { View } from './js/view/view.js'
import { Controller } from './js/controler/controler.js'

/**
 * Updates a DOM element with the word display.
 *
 * @param {string} elementId - The ID of the DOM element to update.
 * @param {string} content - The content to set in the element.
 */
function updateWordDisplay(elementId, content) {
  const element = document.getElementById(elementId)
  if (element) {
    element.textContent = content
  }
}

/**
 * Initializes the Hangman game with dependency injection.
 *
 * @param {Function} GameClass - The Game class or a mock for testing.
 * @param {Function} ViewClass - The View class or a mock for testing.
 * @param {Function} ControllerClass - The Controller class or a mock for testing.
 * @param {string} word - The word to initialize the game with.
 * @param {string} wordDisplayId - The ID of the DOM element for the word display.
 * @returns {object} - The initialized game, view, and controller instances.
 */
export function initializeGame (
  GameClass,
  ViewClass,
  ControllerClass,
  word = 'hangman',
  wordDisplayId = 'word-display'
) {
  const game = new GameClass(word)
  const view = new ViewClass()
  const controller = new ControllerClass(game, view)

  // Update the word display DOM element
  updateWordDisplay(wordDisplayId, game.getWordDisplay())

  // Initialize the game state
  view.updateWordDisplay(game.getWordDisplay())
  view.updateraWrongGuesses(game.wrongGuesses)
  view.drawHangman(0)

  return { game, view, controller }
}

// Initialize the game on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initializeGame(Game, View, Controller)
})
