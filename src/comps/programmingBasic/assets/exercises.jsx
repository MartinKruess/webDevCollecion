export const jsExercises = [
  {
    header: 'Schere, Stein, Papier',
    tasks: [
      'Erstelle das Spiel Schere, Stein, Papier in dem ein Spieler gegen den Computer spielt. Der Spieler soll eine Eingabe machen können ob er Schere, Stein oder Papier eingibt. Groß- und Kleinschreibung sollte bei der Eingabe egal sein. Nach der Runde sollte der Spieler gefragt werden ob er noch einmal spielen möchte. Je nach Antwort sollte das Spiel automatisch weiter laufen ohne, dass es neugestartet werden muss oder das Spiel abgebrochen werden.',
    ],
    advancedHeader: 'Advanced: Eingabe der Rundenanzahl',
    advancedTask:
      "Versuche die 'weiter spielen' Option zu ändern. Der Spieler sollte eingeben können, dass er weiter Spielen möchte für x Runden.",
    code: '',
    output: '',
    tools: ['readline-sync'],
    type: 'loops',
  },
  {
    header: 'Galgenmännchen',
    tasks: [
      'Die Aufgabe ist es das Spiel Galgenmännchen nachzubauen. Der Computer wählt sich ein Random Wort aus dem Array randomWords. Der Spieler kann dann via Terminaleingabe jede Runde einen Buchstaben eingeben. Der Computer schaut ob der Buchstabe im Wort enthalten ist. Sollte dieser enthalten sein, wird der Strich zu dem Buchstaben, wenn nicht wird der erste Buchstabe des loosterstrings ausgeben. Achtung, sorge dafür, dass Spielereingaben nur akzeptiert werden, wenn diese aus einem Buchstaben bestehen.',
    ],
    advancedHeader: 'Advanced: Hardmode (9 Versuche statt 10)',
    advancedTask:
      'Versuche einen Hardmode einzubauen, den der Spieler auswählen kann. Im Hardmode hat der Spieler nur 9 Versuche.',
    code: [
      "const randomWords = ['importance', 'refrigerator', 'statement', 'conclusion','knowledge', 'opportunity', 'comparison','instruction', 'indication', 'criticism', 'consequence','contribution', 'childhood', 'president', 'difference','establishment', 'responsibility', 'reception', 'psychology','enthusiasm']",
      "Normalmode: const looserString = 'YOU FAILED!' //10 Versuche",
      "Hardmode: const looserString = 'YOU LOOSE!'",
      "Beispiel Ausgabe: <br />const word = 'interesse' <br />Start Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ _ _ _ <br />Erfolg Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ s s _",
    ],
    output: '',
    tools: ['readline-sync'],
    type: 'loops',
  },
  {
    header: 'Pokemon Kampf',
    tasks: [
      'Erstelle einen Pokemonkampf in der Konsole. Die Pokemons haben ein Level, Leben und Skills. Pikachu kann Aktuell nur die Angriffe Tackel und Eisenschweif anwenden. Sollte Pikachu diesen Kampf gewinnen, wird es am Ende des Kampfes Donnerschock lernen. Sollte ein Angriff ein kirtischer Treffer sein, macht der Angriff 20% mehr Schaden, verfehlt der Angriff, ist der Schaden 0. Tackel: Schaden: 17, Missing: 5%, Crit: 7% Eisenschweif: Schaden: 33, Missing: 15%, Crit: 12% Flügelschlag: Schaden: 27, Missing: 10%, Crit: 15%',
    ],
    advancedHeader: 'Advanced: Hardmode (9 Versuche statt 10)',
    advancedTask:
      "Hin und wieder kommt es vor, dass ein wildes Pokemon die Flucht ergreift, wenn es weniger als 10% Leben hat. Wenn das wilde Pokemon flüchtet gib diese Nachricht aus, 'Habitak ist geflohen!' und beende den Kampf. (10% Wahrscheinlichkeit)",
    code: [
      "const pikachu = {level: 12, health: 137, skills: ['Tackel', 'Eisenschweif', 'Donnerschock']}",
      "const habitak = {level:13, health: 122,skills: ['Tackel', 'Flügelschlag']}",
    ],
    output: '',
    tools: ['readline-sync'],
    type: 'objects',
  },
  {
    header: 'Object Basics',
    tasks: [
      'Die Aufgabe ist es mehrere Objekte anzulegen von zwei Mitstudenten und eines von dir selbst. Die zu speichernden Daten sind: name, alter, stadt, gesprochene Sprachen. Finde heraus welche Mitstudenten aus Berlin kommen und gib aus:',
    ],
    advancedHeader: '',
    advancedTask:
      'Überprüfe abschließend wer die Sprache Spanisch kann und gibt diese Person aus, wenn keiner Spanisch spricht, gib aus.',
    code: [
      "console.log('Hans kommt aus Berlin!')",
      "console.log('Niemand spricht Spanisch.')",
    ],
    output: '',
    tools: ['readline-sync'],
    type: 'objects',
  },
  {
    header: 'Filter ein ArrayOfObjets',
    tasks: [
      "Für diese Aufgabe müssen wir ein paar kleine Vorbereitungen treffen. Der erste Schritt ist, dass wir einen Ordner anlegen mit einer index.js. Das Zweite ist das herunterladen der Datei harddrives.js mit den Daten. Anschließend füge diese Datei im Projekt hinzu. Nun kommen wir zu den unten stehenden Befehlen. Das installieren von es6 erlaubt uns die Benutzung von Modulen. Um den import Befehl nutzen zu können muss nun die package.json anpassen werden, indem 'type': 'module' eintragen wird. Abschließend kopiere den import befehl in deiner index.js und teste ob du mit console.log(ArrayOfObjects) eine Ausgabe erhälst.",
      "Füge jedem Objekt einen neuen key hinzu namens 'articleName' und den String 'company + size + type'. Erstelle einen Filter der ein Array erzeugt, dass nur Festplatten beinhaltet, die kleiner als 1TB sein. Gebe dieses Array mit Console.log aus. Am Ende füge den Artikel 'Kingston 2TB SSD' hinzu.",
    ],
    advancedHeader: 'Filter Article (filter Methode)',
    advancedTask:
      "Nutze die Filtermethode für dieses Ergebnis. Filtere mit der Bedingung company entweder nach 'Seagate' oder nach 'Western Digital'",
    code: [
      'npm i es6',
      "{ 'type': module', 'dependencies': {'es6': '^0.0.7'}}",
      "import { ArrayOfObjects } from './arrayOfObjects.js';",
    ],
    output:
      'https://drive.google.com/file/d/1MWYrLxLaxNcP410uqWCTiBnex8jU30TW/view?usp=drive_link',
    tools: ['readline-sync'],
    type: 'objects',
  },
  {
    header: 'Datamanagement',
    tasks: [
      'Du erhälst den Auftrag die Daten eines Unternehmens zu sprtieren. Sie haben über Jahre hinweg all ihre Daten in einer Datenbank gespeichert ohne darauf zu achten ob diese Daten zusammen passen. Erstelle neue Arrays für bestimmte Datentypen und andere Unterschiede',
    ],
    advancedHeader: 'Filter Article (filter Methode)',
    advancedTask: '',
    code: [
      "const data = ['Nico', 2,'Adam', true, 17, 231, 'Heinrich', false, '10', {name: Fritz, age: 37,}, 'der Arzt', 'müde', 'Peter', 'traurig', 'der Klemptner', {name: Tina, age: 22,}, 'die Lehrerin', 'hungrig']",
      '',
      '',
    ],
    output: '',
    tools: ['readline-sync'],
    type: 'array',
  },
  {
    header: 'Company',
    tasks: [
      'Der Chef möchte wissen wie viele und welche Mitarbeiter zu welcher Abteilung gehören. Nutze die unter Download verlinkten Daten um dies herauszufinden. Gib die Anzahl der Mitarbeiter pro Abteilung aus und die Namen der Mitarbeiter.',
    ],
    advancedHeader: 'Verbesserte Übersicht',
    advancedTask: 'Erzeuge für jede Abteilung ein neues Array',
    code: '',
    output:
      'https://drive.google.com/file/d/1_eB4Ji_zFTqY0Ev1DjrbZOUK2Ars9h4o/view?usp=drive_link',
    tools: ['readline-sync'],
    type: 'array',
  },
  {
    header: 'Währungsrechner',
    tasks: [
      'Erstelle einen Währungsrechner, der Euro in Dollar umrechnet. Nutze eindeutuge Variablennamen und gebe das Ergebnis in der Konsole aus. Recherchiere den aktuellen Wechselkurs.',
    ],
    advancedHeader: 'Mehrfachumrechnung',
    advancedTask:
      'Erstelle eine weitere Variable mit einem weiteren Wechselkurs für Dollar in Bitcoins. Finde heraus wie viel Bitcoins 10 € sind.',
    code: '',
    output: '',
    tools: [''],
    type: 'math',
  },
  {
    header: 'Wächselgeld ausgeben',
    tasks: [
      'Erstelle eine Variable mit dem Einkaufswert von 13,50 €. Der Kunde gibt 20 €. Gib in der Konsole aus wie viel Wechselgeld der Kunde erhält.',
    ],
    advancedHeader: 'Wechselgeld Analyse',
    advancedTask:
      'Versuche nun das Wechselgeld in Scheine und Münzen aufzuteilen. Gib aus wie viele 10€, 5€, 2€, 1€, 50ct, 20ct, 10ct, 5ct und 1ct der Kunde erhält.',
    code: '',
    output: '',
    tools: [''],
    type: 'math',
  },
  {
    header: 'Item Verbesserung in einem Game',
    tasks: [
      'Ein SPieler hat ein tolles neues Schwert und möchte dieses von Level 1 auf Level 2 verbessern. Da die Schmeide in dieser Stadt leider nicht besonders gut sind, gibt es eine 70% Chance, dass das Schwert verbessert wird. Nutze Math.random() um die Chance zu berechnen. Eine Verbesserung findet immer dann statt, wenn die Zahl größer als die angegebene Chance des Items ist.',
    ],
    advancedHeader: 'Bessere Schmiede, höhere Chance',
    advancedTask:
      'Der Spieler hat eine bessere Schmiede gefunden, die eine 90% Chance auf Verbesserung hat. Berechne die Chance und gib aus ob das Schwert verbessert wurde. Achte darauf, dass bei einer Erhöhung der ItemChance die Wahrscheinlichkeit sink, dass das Schwert verbessert wird, da ein Upgrade nur noch bei einer Zahl größer als 0.9 stattfindet.',
    code: '',
    output: '',
    tools: [''],
    type: 'math',
  },
];
