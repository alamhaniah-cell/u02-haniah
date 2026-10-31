# U02 – Dynamisk Portfolio

Det här är min portfolio som jag har vidareutvecklat från U01. I den här uppgiften har jag använt JavaScript för att göra sidan mer dynamisk och interaktiv.

## Funktioner

- CV med utbildningar och arbetslivserfarenheter som hämtas från en JSON-fil.
- Projekt som hämtas automatiskt från GitHub API.
- Dark mode och light mode.
- En knapp för att visa och dölja projekt.
- Responsiv design för mobil och desktop.

## Reflektion

Jag började med att använda min portfolio från U01 eftersom jag redan hade byggt upp strukturen med HTML och CSS. I U02 var målet att utveckla sidan med JavaScript och göra innehållet mer dynamiskt.

Jag valde att lägga mina utbildningar och arbetslivserfarenheter i en separat fil som heter `cv.json`. JavaScript använder `fetch()` för att hämta informationen och sedan visas den på hemsidan. Jag använde `forEach()` för att gå igenom utbildningarna och jobben och skapa HTML-element för varje del.

Jag har även använt GitHub API för att hämta mina offentliga projekt. Det fungerar genom att hemsidan skickar en förfrågan till GitHub och får tillbaka information i JSON-format. JavaScript använder sedan informationen för att visa projektens namn, beskrivningar och länkar. Skillnaden mellan mina två datakällor är att CV-informationen kommer från min egen JSON-fil medan projekten hämtas från en extern tjänst.

Jag har lärt mig mer om hur request och response fungerar. När jag använder `fetch()` skickas en förfrågan och jag behöver vänta på svaret innan informationen kan visas. Därför använder jag `async` och `await`.

Jag har också lagt till felhantering med `try` och `catch`. Om projekten inte kan hämtas visas ett felmeddelande på hemsidan. Det finns även ett laddningsmeddelande medan projekten hämtas och ett meddelande om det inte finns några projekt.

Jag använde JavaScript för att ändra innehållet på sidan genom DOM. Jag har bland annat använt `querySelector()`, `createElement()` och `appendChild()`. Jag har också använt `addEventListener()` för att knapparna ska reagera när användaren klickar.

En av funktionerna är att användaren kan växla mellan dark mode och light mode. Jag gjorde detta genom CSS-variabler och JavaScript som lägger till eller tar bort en klass på hemsidan. Jag har även gjort en knapp som visar och döljer mina projekt.

Jag har fortsatt använda semantisk HTML med bland annat `nav`, `section`, `header` och olika rubriknivåer. Det gör sidan mer strukturerad och lättare att förstå. Jag har också behållit min responsiva design från U01 med Flexbox, Grid och media queries.

Det svåraste med U02 var att förstå hur JavaScript och HTML fungerar tillsammans. I början var jag osäker på hur informationen från JSON skulle visas på hemsidan. Jag hade också problem med att få projektkorten att se rätt ut och med att få knappen för att dölja projekten att fungera. Jag löste problemen genom att testa koden, ändra CSS och kontrollera resultatet i webbläsaren.

Jag har testat hemsidan i Chrome med utvecklarverktygen och kontrollerat att den fungerar i både mobil- och desktopläge. Jag har även använt W3C Validator för att kontrollera HTML-koden.

Jag tycker att det som blev bäst är att mina projekt nu hämtas automatiskt från GitHub och att användaren kan byta mellan ljust och mörkt läge. Om jag hade mer tid skulle jag vilja förbättra designen på knapparna och göra mobilmenyn mer användarvänlig.

Jag har använt ChatGPT som stöd när jag har fastnat, framför allt för att förstå JavaScript, felsöka och få förklaringar av koden. Jag har testat förslagen själv och ibland behövt ändra dem när något inte fungerat. Det har hjälpt mig att förstå mer om hur JavaScript fungerar tillsammans med HTML och CSS.

## Länk till portfolio

Länk till den publicerade U02-portfolion läggs till här när sidan är publicerad.

