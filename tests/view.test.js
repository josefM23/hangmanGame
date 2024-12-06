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
  })

  const setInnerHTML = (html) => {
    document.body.innerHTML = html
  }

  describe('bindGuess', () => {
    let inputElement
    let mockHandler

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
      const inputEvent = new Event('input')
      inputElement.dispatchEvent(inputEvent)

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

      const wordDisplayElement = document.getElementById('word-display')
      expect(wordDisplayElement.textContent).toBe(wordDisplay)
    })

    test('should handle case where wordDisplayElement is null', () => {
      setInnerHTML('')
      const wordDisplay = 'h _ n g m _ n'

      view.updateWordDisplay(wordDisplay)

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

      const wrongGuessesElement = document.getElementById('wrong-guesses')
      expect(wrongGuessesElement.textContent).toBe('x, y, z')
    })

    test('should display an empty string when no wrong guesses are present', () => {
      view.updateraWrongGuesses([])

      const wrongGuessesElement = document.getElementById('wrong-guesses')
      expect(wrongGuessesElement.textContent).toBe('')
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
  })
})
