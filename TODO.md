Jag har nu någon grund struktur och vet vad osv. nu ska jag bara går till de konkreta saker. Jag hade flest i huvudet, men är säkert att jag har missat någonting. och vet inte hur det blir med tex hantera error osv... 
## Game.js.

### Hantera hela spelets tilstånd.
 - Tracka spelets status (pågående, vinst, förlust).
 - Lägg till en metod för att avgöra om spelaren har vunnit (alla bokstäver är gissade).
 - Lägg till en metod för att avgöra om spelaren har förlorat (för många felaktiga gissningar).

 ### Implementera visning av ordet.
 - Skapa en metod som returnerar ordet som delvis avslöjat (med  "_" för ogissade bokstäver).

 ### Maximalt antal gisnigar.
 - Lägg till stöd för ett maximalt antal tillåtna felaktiga gissningar.

 ### Validera gissnigar.
 - Säkerställ att bara bokstäver accepteras som gissningar (dvs regulerar uttryckt.). Ignorerara ogiltiga tecken.
 - Informera användaren om vad som är tillåtet.

 ### Reset för ett nytt spel.
 - Lägg till en metod för att återställa spelet (nytt ord, tomma listor för gissningar).

 ## To-Do för Game.js.

### Implementerade metoder.
- [x] `isCorrectGuess`  
  - Kontrollerar om en gissad bokstav finns i ordet.
  - Spårar korrekta och felaktiga gissningar.

- [x] `isWin`  
  - Kontrollera om spelaren har gissat alla bokstäver i ordet.

- [x] `isGameOver`  
  - Kontrollera om spelet är över (vinst eller förlust).

- [x] `getWordDisplay`  
  - Returnera ordet som en sträng med `_` för ogissade bokstäver.  
    - Exempel: `"h _ n g m _ n"`

- [x] `reset`  
  - Återställ spelet med ett nytt ord.  
  - Nollställ listorna för korrekta och felaktiga gissningar.

  ### Metoder att implementera.

# View.js.

## Visa ordets nuvarande tillstånd.
- Visa korrekt gissade bokstäver och _ för ogissade.
- Uppdatera detta när användaren gissar.

## Visa lista över felaktiga gissningar.
- Visa alla felaktiga bokstaver.
- Updatera detta när nya felaktiga bokstäver läggs till.

## Hantera input från användare.
- Låt användaren skriva in en bokstav och klicka på Gissa.
- Skicka inputen till kontrollen.

## Animera hängande mannen.
- Rita hängande mannen stegvis för varje felaktig gissning.
- skapa en enkelt animation med HTML/CSS (det blir enklaste tror jag.)

## To-Do för View.js.

## Implementerade metoder.
- [x] `blindGuess(handler)`
    - Binder ett event för att hantera användarens gissningar.

- [x] `updateWordDisplay(wordDisplay)`
    - Updaterar visningen av ordet med korrect gissade bokstaver och _ för ogissande.

### Metoder att implementera.
- [ ] `updateraWrongGuesses(wrongGuesses)`
    - Uppdaterar listan över felaktiga gissningar.

- [ ] `drawHangman()`
    - Bygger stegvis upp en hängande man baserad på antalet felaktiga gissnigar (måste räkna hur många - viss nivå av spelet?)

# Controler.js.

## Hantera användarens gissnigar.
- Ta emot gissnigar från View.js
- Skicka gissnigen till Game.js - modelen och avgör om den är korredt eller felaktig.
- Informera View.js om att updatera visningen baserad på resultatet.

## Kontrolera spelets tillstånd.
- Kontrolera om spelet är över (vinst eller förlust).
- Informera View.js om att visa rätt medelande vid vinst eller förlust.

## Initiera och återställa spelet
- Sått upp spelet med ett nytt ord.
- Nollståll modellern och vyn när splelet startas om.

## To-Do för Controler.js.

## Implementerade metoder.
### Metoder att implementera.
- [ ] `handleGuess(letter)`
    - Tar emot användarens gissnig från View.js
    - Skickar gissnigen till Game.js- modellen och får tillbacka resultatet.
    - Uppdaterar View.js baserat på om gissningen var korrekt eller felaktig
- [ ] `checkGameState()`
    - Kontrollerar om spelet är Över.
    - Vid vinst/förlust informera View.js att vissa: "Victory"/ "Game Over"
- [ ] `restartGame(newWord)`
    - Återställer spelets tillstånd.
    - Initierar ett nytt spel med ett nytt ord och nollståller gissningar och animationtr.
- [ ] `a`

# Index.js 
- (den som är i src katalogen jag använer den som typ App.java som lite statsk som startar spelet andra index.js är bara för att importera saker...)

## Importera komponenter
- importera index.js från js mappen (som importerar andra undeligande index.js och de slutligen importerar game.js och view.js och controler.js)

## initiera spelet
- Skapa instanser av Game, View, och Controller.
- Länka View till Controller genom att använda bindGuess.

## Koppla till DOM.
- Säkerställ att spelet startar när DOMContentLoaded har laddats klart.

## Starta spelet
- sätt upp det initiala spelets tillstånd.
    - Visa ordet med _ för ogissade bokstäver.
    - Visa tomma listor för felaktiga gissnigar.
    - Förbered den hängande mannen för att börja hängas.

## To-Do för Index.js. (i src mapen!)

## Implementerade metoder.
### Metoder att implementera.(bara exempel...)
- [ ] `document.addEventListener('DOMContentLoaded', callback)`
    - Säkerställ att allt i DOM är redo innan spelet startas
    - {Event för att starta spelet}
#### Initiera instanser.
- [ ] `const game = new Game('hangman')`
- [ ] `const view = new View()`
- [ ] `const controller = new Controller(game, view)`
