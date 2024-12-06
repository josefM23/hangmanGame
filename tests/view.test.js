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
    // Skapa en instans av View för varje test.
    view = new View()
  })

  describe('bindGuess', () => {
    let inputElement
    let mockHandler

    beforeEach(() => {
      document.body.innerHTML = `
        <div>
          <input id="guess-input" type="text" />
        </div>
      `
      inputElement = document.getElementById('guess-input')
      mockHandler = jest.fn() // Mock-funktion för att kontrollera om den anropas.
    })

    test('should bind an event listener to the input field', () => {
      view.bindGuess(mockHandler)

      // Simulera ett input-event.
      inputElement.value = 'a'
      const inputEvent = new Event('input')
      inputElement.dispatchEvent(inputEvent)

      expect(mockHandler).toHaveBeenCalledWith('a') // Kontrollera att mockHandler anropades med rätt värde.
    })
  })

  describe('updateWordDisplay', () => {
    let wordDisplayElement

    beforeEach(() => {
      document.body.innerHTML = `
        <div>
          <div id="word-display"></div>
        </div>
      `
      wordDisplayElement = document.getElementById('word-display')
    })

    test('should update the word display in the DOM', () => {
      const wordDisplay = 'h _ n g m _ n' // För ordet "hangman".
      view.updateWordDisplay(wordDisplay)

      expect(wordDisplayElement.textContent).toBe(wordDisplay) // Kontrollera att DOM uppdateras korrekt.
    })

    test('should handle case where wordDisplayElement is null', () => {
      document.body.innerHTML = `` // Ingen element med id "word-display".
      const wordDisplay = 'h _ n g m _ n'

      // Försök att kalla metoden.
      view.updateWordDisplay(wordDisplay)

      // Inget att förvänta sig i DOM eftersom elementet saknas.
      expect(document.getElementById('word-display')).toBeNull()
    })
  })
})
