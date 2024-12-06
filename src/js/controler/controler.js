/**
 * Handles the logic between the Game model and the View.
 * Coordinates user interactions and updates the game state and UI.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

import { Game } from '../model/game.js'
import { View } from '../view/view.js'

/**
 * The Controller class acts as the intermediary between the Game model and the View.
 * It listens to user interactions, updates the game state via the model,
 * and ensures the UI is synchronized with the game's state.
 */
export class Controller {
  /**
   * Creates an instance of the Controller.
   *
   * @param {Game} game - The game model instance.
   * @param {View} view - The view instance.
   */
  constructor (game, view) {
    this.game = game
    this.view = view
  }

  /**
   * Handles a guess from the user.
   *
   * @param {string} letter - The guessed letter.
   */
  handleGuess (letter) {
    if (this.game.isCorrectGuess(letter)) {
      this.view.updateWordDisplay(this.game.getWordDisplay())
    }
  }

  /**
   * Checks the current state of the game and updates the view accordingly.
   */
  checkGameState () {
    if (this.game.isWin()) {
      this.view.showMessage('Victory!')
    } else if (this.game.isGameOver()) {
      this.view.showMessage('Game Over')
    }
  }
}
