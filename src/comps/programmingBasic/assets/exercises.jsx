export const jsExercises = [
  {
    header: "Schere, Stein, Papier",
    tasks: [
      "Erstelle das Spiel Schere, Stein, Papier in dem ein Spieler gegen den Computer spielt. Der Spieler soll eine Eingabe machen können ob er Schere, Stein oder Papier eingibt. Groß- und Kleinschreibung sollte bei der Eingabe egal sein. Nach der Runde sollte der Spieler gefragt werden ob er noch einmal spielen möchte. Je nach Antwort sollte das Spiel automatisch weiter laufen ohne, dass es neugestartet werden muss oder das Spiel abgebrochen werden.",
    ],
    advancedHeader: "Advanced: Eingabe der Rundenanzahl",
    advancedTask:
      "Versuche die 'weiter spielen' Option zu ändern. Der Spieler sollte eingeben können, dass er weiter Spielen möchte für x Runden.",
    code: "",
    output: "",
    tools: ["readline-sync"],
    type: "loops",
  },
  {
    header: "Galgenmännchen",
    tasks: [
      "Die Aufgabe ist es das Spiel Galgenmännchen nachzubauen. Der Computer wählt sich ein Random Wort aus dem Array randomWords. Der Spieler kann dann via Terminaleingabe jede Runde einen Buchstaben eingeben. Der Computer schaut ob der Buchstabe im Wort enthalten ist. Sollte dieser enthalten sein, wird der Strich zu dem Buchstaben, wenn nicht wird der erste Buchstabe des loosterstrings ausgeben. Achtung, sorge dafür, dass Spielereingaben nur akzeptiert werden, wenn diese aus einem Buchstaben bestehen.",
    ],
    advancedHeader: "Advanced: Hardmode (9 Versuche statt 10)",
    advancedTask:
      "Versuche einen Hardmode einzubauen, den der Spieler auswählen kann. Im Hardmode hat der Spieler nur 9 Versuche.",
    code: [
      "const randomWords = ['importance', 'refrigerator', 'statement', 'conclusion','knowledge', 'opportunity', 'comparison','instruction', 'indication', 'criticism', 'consequence','contribution', 'childhood', 'president', 'difference','establishment', 'responsibility', 'reception', 'psychology','enthusiasm']",
      "Normalmode: const looserString = 'YOU FAILED!' //10 Versuche",
      "Hardmode: const looserString = 'YOU LOOSE!'",
    ],
    output:
      "Beispiel Ausgabe: <br />const word = 'interesse' <br />Start Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ _ _ _ <br />Erfolg Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ s s _",
    tools: ["readline-sync"],
    type: "loops",
  },
  {
    header: "Pokemon Kampf",
    tasks: [
      "Erstelle einen Pokemonkampf in der Konsole. Die Pokemons haben ein Level, Leben und Skills. Pikachu kann Aktuell nur die Angriffe Tackel und Eisenschweif anwenden. Sollte Pikachu diesen Kampf gewinnen, wird es am Ende des Kampfes Donnerschock lernen. Sollte ein Angriff ein kirtischer Treffer sein, macht der Angriff 20% mehr Schaden, verfehlt der Angriff, ist der Schaden 0. Tackel: Schaden: 17, Missing: 5%, Crit: 7% Eisenschweif: Schaden: 33, Missing: 15%, Crit: 12% Flügelschlag: Schaden: 27, Missing: 10%, Crit: 15%",
    ],
    advancedHeader: "Advanced: Hardmode (9 Versuche statt 10)",
    advancedTask:
      "Hin und wieder kommt es vor, dass ein wildes Pokemon die Flucht ergreift, wenn es weniger als 10% Leben hat. Wenn das wilde Pokemon flüchtet gib diese Nachricht aus, 'Habitak ist geflohen!' und beende den Kampf. (10% Wahrscheinlichkeit)",
    code: [
      "const pikachu = {level: 12, health: 137, skills: ['Tackel', 'Eisenschweif', 'Donnerschock']}",
      "const habitak = {level:13, health: 122,skills: ['Tackel', 'Flügelschlag']}",
    ],
    output:
      "Beispiel Ausgabe: <br />const word = 'interesse' <br />Start Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ _ _ _ <br />Erfolg Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ s s _ <br />",
    tools: ["readline-sync"],
    type: "objects",
  },
];
