/**
 * Tests for the View module.
 * Focuses on testing DOM interactions and UI updates for the Hangman game.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

import { View } from '../src/js/view/view.js'

describe('View', () => {
  let view

  beforeEach(() => {
    view = new View()
    document.body.innerHTML = ''
  })

  const setInnerHTML = (html) => {
    document.body.innerHTML = html
  }

  describe('bindGuess', () => {
    let inputElement, mockHandler

    beforeEach(() => {
      setInnerHTML(`
        <div>
          <input id="guess-input" type="text" />
        </div>
      `)
      inputElement = document.getElementById('guess-input')
      mockHandler = jest.fn()
    })

    test('should bind an event listener to the input field', () => {
      view.bindGuess(mockHandler)

      inputElement.value = 'a'
      inputElement.dispatchEvent(new Event('input'))

      expect(mockHandler).toHaveBeenCalledWith('a')
    })
  })

  describe('updateWordDisplay', () => {
    beforeEach(() => {
      setInnerHTML(`
        <div>
          <div id="word-display"></div>
        </div>
      `)
    })

    test('should update the word display in the DOM', () => {
      const wordDisplay = 'h _ n g m _ n'
      view.updateWordDisplay(wordDisplay)
      expect(document.getElementById('word-display').textContent).toBe(wordDisplay)
    })

    test('should handle case where wordDisplayElement is null', () => {
      setInnerHTML('')
      view.updateWordDisplay('h _ n g m _ n')
      expect(document.getElementById('word-display')).toBeNull()
    })
  })

  describe('updateraWrongGuesses', () => {
    beforeEach(() => {
      setInnerHTML(`
        <div>
          <div id="wrong-guesses"></div>
        </div>
      `)
    })

    test('should display a list of wrong guesses in the DOM', () => {
      const wrongGuesses = ['x', 'y', 'z']
      view.updateraWrongGuesses(wrongGuesses)
      expect(document.getElementById('wrong-guesses').textContent).toBe('x, y, z')
    })

    test('should display an empty string when no wrong guesses are present', () => {
      view.updateraWrongGuesses([])
      expect(document.getElementById('wrong-guesses').textContent).toBe('')
    })

    test('should handle case where wrongGuessesElement is null', () => {
      setInnerHTML('')
      view.updateraWrongGuesses(['x', 'y', 'z'])
      expect(document.getElementById('wrong-guesses')).toBeNull()
    })
  })

  describe('drawHangman', () => {
    let hangmanElement

    beforeEach(() => {
      setInnerHTML(`
        <div>
          <div id="hangman"></div>
        </div>
      `)
      hangmanElement = document.getElementById('hangman')
    })

    test('should draw the first part of the hangman for one wrong guess', () => {
      view.drawHangman(1)
      expect(hangmanElement.innerHTML).toContain('<svg')
    })

    test('should update the hangman for multiple wrong guesses', () => {
      view.drawHangman(3)
      expect(hangmanElement.innerHTML).toContain('<svg')
    })

    test('should clear the hangman if no wrong guesses are present', () => {
      view.drawHangman(0)
      expect(hangmanElement.innerHTML).toBe('')
    })

    test('should handle case where hangmanElement is null', () => {
      setInnerHTML('')
      view.drawHangman(1)
      expect(document.getElementById('hangman')).toBeNull()
    })

    test('should render nothing if step is invalid', () => {
      view.drawHangman(null)
      expect(hangmanElement.innerHTML).toBe('')
      view.drawHangman(undefined)
      expect(hangmanElement.innerHTML).toBe('')
      view.drawHangman('string')
      expect(hangmanElement.innerHTML).toBe('')
    })

    test('should use the last SVG step if step exceeds available steps', () => {
      const maxSteps = 5
      view.drawHangman(maxSteps + 1)
      expect(hangmanElement.innerHTML).toContain('<line x1="70" y1="40" x2="70" y2="70"')
    })
  })

  describe('showMessage', () => {
    beforeEach(() => {
      setInnerHTML(`
        <div>
          <div id="game-message"></div>
        </div>
      `)
    })

    test('should display the correct message in the DOM', () => {
      const message = 'Victory!'
      view.showMessage(message)
      expect(document.getElementById('game-message').textContent).toBe(message)
    })

    test('should handle case where message element is missing', () => {
      setInnerHTML('')
      view.showMessage('Victory!')
      expect(document.getElementById('game-message')).toBeNull()
    })
  })
})
