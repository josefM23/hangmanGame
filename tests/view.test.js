/**
 * Tests for the View module.
 * Focuses on testing DOM interactions and UI updates for the Hangman game.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */


// bindGuess(handler) test
describe('View - bindGuess', () => {
  let view
  let inputElement
  let mockHandler

  beforeEach(() => {
    // Skapa en DOM-struktur för testen
    document.body.innerHTML = `
      <div>
        <input id="guess-input" type="text" />
      </div>
    `

    inputElement = document.getElementById('guess-input')
    mockHandler = jest.fn() // Mock-funktion för att kontrollera om den anropas.

    // Skapa en instans av View
    view = new View()
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
