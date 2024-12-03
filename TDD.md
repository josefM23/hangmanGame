# TODO för tester: 

## Testa Game.js:

    Testa 'isCorrectGuess' med giltiga och ogiltiga gissningar.
    Testa 'isWin' när alla bokstäver är gissade.
    Testa 'isGameOver' för vinst och förlust.
    Testa 'reset' med ett nytt ord.

## Testa View.js:

    Testa att 'updateWordDisplay' uppdaterar ordet korrekt.
    Testa att 'updateWrongGuesses' uppdaterar listan med felaktiga gissningar.
    Testa att 'drawHangman' ritar rätt steg.

## Testa Controller.js:

    Testa att:
       - 'handleGuess' hanterar både korrekta och felaktiga gissningar.
       -  'checkGameState' upptäcker vinst och förlust.
       - 'restartGame' återställer spelets tillstånd korrekt.

## Testa Index.js

###  Initialization och instansering.
 Testa att:
    - Game-instansen skapas med rätt ord.
    - View-instansen skapas korrekt.
    - Controller-instansen skapas med både Game och View som argument.

### Event-binding
Testa att:
    - DOMContentLoaded triggar applikationens initialisering.
    - View korrekt kopplas till Controller via bindGuess.

### Helhetsfunktionalitet

Testa att:
    - Spelet startar med rätt initialt tillstånd (t.ex. korrekt visning av _ för ogissade bokstäver).
    - Ingen oväntad felhantering uppstår vid initiering.
