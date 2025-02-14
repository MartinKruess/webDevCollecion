export const jsExercises = [
  {
    header: "Schere, Stein, Papier",
    tasks: [
      "Erstelle das Spiel Schere, Stein, Papier in dem ein Spieler gegen den Computer spielt. Der Spieler soll eine Eingabe machen können ob er Schere, Stein oder Papier eingibt. Groß- und Kleinschreibung sollte bei der Eingabe egal sein. Nach der Runde sollte der Spieler gefragt werden ob er noch einmal spielen möchte. Je nach Antwort sollte das Spiel automatisch weiter laufen ohne, dass es neugestartet werden muss oder das Spiel abgebrochen werden.",
    ],
    code: [],
    data: "",
    tools: ["readline-sync"],
    type: "loops",
    solution: "https://github.com/MartinKruess/schereSteinPapier",
  },
  {
    header: "Galgenmännchen/Hangman",
    tasks: [
      "Die Aufgabe ist es das Spiel Galgenmännchen nachzubauen. Der Computer wählt sich ein Random Wort aus dem Array randomWords. Der Spieler kann dann via Terminaleingabe jede Runde einen Buchstaben eingeben. Der Computer schaut ob der Buchstabe im Wort enthalten ist. Sollte dieser enthalten sein, wird der Strich zu dem Buchstaben, wenn nicht wird der erste Buchstabe des loosterstrings ausgeben. Achtung, sorge dafür, dass Spielereingaben nur akzeptiert werden, wenn diese aus einem Buchstaben bestehen.",
    ],
    code: [
      "const randomWords = ['importance', 'refrigerator', 'statement', 'conclusion','knowledge', 'opportunity', 'comparison','instruction', 'indication', 'criticism', 'consequence','contribution', 'childhood', 'president', 'difference','establishment', 'responsibility', 'reception', 'psychology','enthusiasm']",
      "const looserString = 'YOU FAILED!' //10 Versuche",
      "Beispiel Ausgabe:",
      "const word = 'interesse'",
      "Ausgabe Wenn ein Buchstabe erraten wurde:",
      "Das Geheime Wort ist: _ _ _ _ _ _ s s _",
    ],
    data: "",
    tools: ["readline-sync"],
    type: "loops",
    solution: "https://github.com/MartinKruess/hangman",
  },
  {
    header: "Pokemon Kampf",
    tasks: [
      "Erstelle einen Pokemonkampf in der Konsole. Die Pokemon haben ein Level, Leben und Skills. Pikachu kann Aktuell nur die Angriffe Tackel und Eisenschweif anwenden. Sollte Pikachu diesen Kampf gewinnen, wird es am Ende des Kampfes Donnerschock lernen. Der Spieler kann wählen welchen Angriff Pikachu machen soll, Habitaks Angriff wird mit random ausgewürfelt. Ebenso wird random ausgwürfelt wer anfängt.",
    ],
    code: [
      "const pikachu = {level: 12, health: 107, skills: [ {name: 'Tackel', dmg: 17}, {name: 'Eisenschweif', dmg: 33}]}",
      "const habitak = {level:13, health: 157,skills: [{name: 'Tackel', dmg: 17}, {name: 'Flügelschlag', dmg: 27}]}",
    ],
    data: "",
    tools: ["readline-sync"],
    type: "objects",
    solution: "",
  },
  {
    header: "Loop mit Array of Objects + ein bischen Filter",
    tasks: [
      "Lege ein Array of Objects (min. 3 Objekte) an. Die Objekte sollen Personen aus der Klasse sein und folgendes beinhalten: firstname, age, city. Füge jedem Objekt den Key learn: javascript hinzu. Nutze eine Loop um den Namen und Learn Key jedes Objektes auszugeben, von den Personen, die in Berlin leben.",
    ],
    code: ["console.log('Hans lernt gerade javascript!')"],
    data: "",
    tools: ["readline-sync"],
    type: "objects",
    solution: "https://github.com/MartinKruess/classmates",
  },
  {
    header: "Datamanagement für einen Onlineshop",
    tasks: [
      "Lade die Datei harddrives.js herunter. Führe die unten stehenden Befehle aus und kopiere den import Befehl in deiner index.js. Teste ob du mit console.log(ArrayOfObjects) eine Ausgabe erhälst.",
      "Füge jedem Objekt einen neuen key hinzu namens 'articleName' und den String 'company + size + type'. Erstelle einen Filter der ein Array erzeugt, dass nur Festplatten beinhaltet, die kleiner als 1TB sein. Gebe dieses Array mit Console.log aus. Am Ende füge den Artikel 'Kingston 2TB SSD' hinzu.",
    ],
    code: [
      "// Schritt 1 - npm initialisieren",
      "npm init",
      "// Schritt 2 - Anpassen der package.json",
      "{ 'type': module' }",
      "// Schritt 3 - importieren der heruntergaldenen Daten",
      "import { ArrayOfObjects } from './arrayOfObjects.js';",
    ],
    data: "https://drive.google.com/file/d/1MWYrLxLaxNcP410uqWCTiBnex8jU30TW/view?usp=drive_link",
    tools: ["readline-sync"],
    type: "higher order functions",
    solution: "",
  },
  {
    header: "Datamanagement mit typeOf",
    tasks: [
      "Du erhälst den Auftrag die Daten eines Unternehmens zu sortieren. Sie haben über Jahre hinweg all ihre Daten in einer Datenbank gespeichert ohne darauf zu achten ob diese Daten zusammen passen. Erstelle neue Arrays für bestimmte Datentypen und andere Unterschiede",
    ],
    code: [
      "const data = ['Nico', 2,'Adam', true, 17, 231, 'Heinrich', false, '10', {name: Fritz, age: 37,}, 'der Arzt', 'müde', 'Peter', 'traurig', 'der Klemptner', {name: Tina, age: 22,}, 'die Lehrerin', 'hungrig']",
    ],
    data: "",
    tools: [],
    type: "array",
    solution: "https://github.com/MartinKruess/sortByType",
  },
  {
    header: "Sortieren von Mitarbeitern nach Abteilungen",
    tasks: [
      "Der Chef möchte wissen wie viele und welche Mitarbeiter zu welcher Abteilung gehören. Gib die Anzahl der Mitarbeiter pro Abteilung aus und die Namen der Mitarbeiter. Nutze die unter Download verlinkten Daten.",
    ],
    code: [],
    data: "https://drive.google.com/file/d/1_eB4Ji_zFTqY0Ev1DjrbZOUK2Ars9h4o/view?usp=drive_link",
    tools: ["readline-sync"],
    type: "array",
    solution: "",
  },
  {
    header: "Währungsrechner",
    tasks: [
      "Erstelle einen Währungsrechner, der Euro in Dollar umrechnet. Nutze eindeutige Variablennamen und gebe das Ergebnis in der Konsole aus. Recherchiere den aktuellen Wechselkurs.",
    ],
    code: [],
    data: "",
    tools: [""],
    type: "math",
    solution: "",
  },
  {
    header: "Wächselgeld ausgeben",
    tasks: [
      "Erstelle eine Variable mit dem Einkaufswert von 13,50 €. Der Kunde gibt einen 20 € Schein. Gib in der Konsole aus wie viel Wechselgeld der Kunde erhält. Wenn der Kunde nur einen 10 € Schein gibt, überprüfe ob das geld für den Einkaufswert ausreicht.",
    ],
    code: [],
    data: "",
    tools: [""],
    type: "math",
    solution: "",
  },
  {
    header: "Item Verbesserung in einem Game",
    tasks: [
      "Ein Spieler hat ein tolles neues Schwert und möchte dieses von Level 1 auf Level 2 verbessern. Da die Schmeide in dieser Stadt leider nicht besonders gut ist, gibt es eine 30% Chance, dass die Verbesserung fehlschlägt. Nutze Math.random() um eine Zahl zwischen 1 und 10 zu generieren. Überprüfe ob die Generierte Zahl über 30% (3) liegt, dann klappt die Verbesserung, andernfalls schlägt sie fehl. Gib das Ergebnis in der Console aus.",
    ],
    code: [],
    data: "",
    tools: [""],
    type: "math",
    solution: "",
  },
  {
    header: "Random Picker",
    tasks: [
      "Nutzen das unten stehende Code-Beispiel. Baue einen Random Picker, der aus einer Liste von 10 Namen einen zufälligen Namen auswählt und in der Konsole ausgibt.",
    ],
    code: [
      'const classmates = ["Hans Müller", "Peter Schmidt", "Klaus Meier", "Karl-Heinz", "Hans-Peter", "Peter-Klaus", "Klaus-Hans", "Karl-Peter", "Hans-Klaus", "Peter-Hans"]',
    ],
    data: "",
    tools: [""],
    type: "math",
    solution: "",
  },
  {
    header: "Mit einer Loop identische Strings finden",
    tasks: [
      "Nutzen das unten stehende Code-Beispiel. Baue eine Schleife, die herausfindet welche der Namen 'Peter' beinhalten. Speichere alle die den String 'Peter' beinhalten in einem neuen Array und gib das neue Array und die Anzahl gezählten Peters aus.",
    ],
    code: [
      'const classmates = ["Hans Müller", "Peter Schmidt", "Klaus Meier", "Karl-Heinz", "Hans-Peter", "Peter-Klaus", "Klaus-Hans", "Karl-Peter", "Hans-Klaus", "Peter-Hans"]',
    ],
    data: "",
    tools: [""],
    type: "loops",
    solution: "",
  },
  {
    header: "Verwaltungsprogramm für die Bücherhalle",
    tasks: [
      "Du benötigst ein Array of Objects, jedes Objekt entspricht einem Buch (title, autor, genre, borrowed Boolian, returned: Datum, 3 Tage nach dem Ausleihen). Es gibt 3 verschiedene Optionen: 1. Alle Bücher anzeigen, hierbei sollen zwei Listen angezeigt werden, die Bücher, die verfügbar sind und die bücher, die ausgeliehen sind. 2. Ein Buch ausleihen mit einer überpürfung ob dies verfügbar ist, wenn ja setze borrowed auf true und das returned Datum. 3. Die Rückgabe eines geliehenen Buches, dabei wird das returned Datum gelöscht und borrowed auf false zurück gesetzt.",
    ],
    code: [],
    data: "",
    tools: [""],
    type: "higher order functions",
    solution: "",
  },
  {
    header: "Urlaubsplaner für Mitarbeiter",
    tasks: [
      "Du benötigst ein Array of Objects, jedes Objekt entspricht einem Mitarbeiter (id, firstname, lastname, holidayStart, holidayEnd). Nun möchtest du Urlaub einreichen. Überprüfe ob in der zeit, in der du Urlaub haben möchtest bereits wer anders im Urlaub ist. Es kann immer nur eine Mitarbeiter zur Zeit Urlaub haben. Tipp: Es gibt es mit dem Date() Objekt, da kann man Daten voneinander abziehen.",
    ],
    code: [
      "holidayStart: 13.01.2025",
      "holidayEnd: 15.01.2025",
      "newHolidayStart: 14.01.2025",
      "newHolidayEnd: 16.01.2025",
      "In dem Zeitraum ist Urlaub leider nicht möglich!",
      "holidayEnd - holidayStart",
    ],
    data: "",
    tools: [""],
    type: "higher order functions",
    solution: "https://github.com/MartinKruess/holidaySolution",
  },
];
