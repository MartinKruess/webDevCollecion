export const domExercises = [
  {
    id: 100,
    header: "Rezeptseite mit Funktionen",
    description:
      "Im HTML & CSS Modul hast du eine Rezeptseite aufgebaut, du kannst diese verwenden oder zur Übung eine neue Rezeptseite aufbauen. In diesem Projekt geht es zwar nicht in erster Linie um das Styling, dennoch kann eine kleine Auffrischung nicht schaden. Das Ziel dieser Aufgabe ist eine Rezeptseite aufzubauen, die mit dynamischen Daten gefüllt ist und auf Userinteraktionen reagiert.",
    tasks: [
      "PLANUNGSPHASE",
      "1. Plane dein Vorgehen grob",
      "2. Lege einen Branch mit deinem Namen an, pushe regelmäßig und erzeuge einen Pull Request",
      "3. Suche dir 5-10 Rezepte raus",
      "VORBEREITUNGEN",
      "1. Lege die rezeptDaten als Array of Objekts an",
      "2. Lege die userDaten als Array of Objekts an (userName, password und 1-3 Lieblingsrezepte)",
      "3. Daten sollten Ausgelagert werden (ES6 Modules) import/export",
      "CODING",
      "1. Gib alle Rezepte in Rezeptkarten aus",
      "2. Baue ein Login Formular auf",
      "3. Style die Rezeptkarten und das Formular",
      "4. Werte die Login-Daten (userName und password) aus (Lokal im Frontend)",
      "5. Wenn der User sich eingeloggt hat, gebe seinen userName auf der Seite aus",
      "6. Klickt der User auf Logout, soll er ausgeloggt werden. Ein erneuter Login sollte weiterhin möglich sein",
      "7. Ist der user eingeloggt sollten seine Lieblingsrezepte angezeigt werden",
      "BONUS",
      "1. Der eingeloggte User sollte weitere Rezepte zu seinen Favoriten hinzufügen können",
    ],
    commands:
      "Benötigte Skills: HTML, CSS, Map/Filter, Umgang mit Arrays of Objekten, querySelector, innerHTML, Events",
    img: "",
    time: 2,
    urlText: "",
    url: "https://github.com/MartinKruess/domExercise.git",
    download: "",
    type: "dom",
  },
  {
    id: 200,
    header: "Meine Wetter-App",
    description:
      "Das Zeil dieser Übung ist es eine Webseite zu erstellen, die Daten aus einer Wetter API holt und diese auf der Seite ausgibt. Wichige Informationen auf der Seite sind: 'Wetter Heute' und 'Wetter der Woche'. Die Daten sollten auch etwas gestylt werden.",
    tasks: [
      "PLANUNGSPHASE",
      "1. Aufbau der Webseite",
      "2. Optische Highlights",
      "VORBEREITUNGEN",
      "1. Hole die Daten von der API und überprüfe sie",
      "CODING",
      "1. Lege eine Absicherung (catch) an, ausgebene wird, wenn das Abrufen der Daten nicht funktioniert",
      "2. Verschiebe den Fetch in ein Modul",
      "3. Baue ein Formular um das Wetter in verschiedenen Städten überprüfen zu können und passe den Fetch an",
    ],
    commands: "Benötigte Skills: HTML, CSS, Map/Filter, Events, Fetch",
    img: "",
    time: 2,
    urlText: "Zur Wetter API",
    url: "https://openweathermap.org/",
    download: "",
    type: "fetch",
  },
  {
    id: 300,
    header: "Create a Game",
    description:
      "Für diese Aufgabe ist ein Backend vorhanden mit einigen API´s. Diese können individuell angesprochen werden um die verschiedenen Daten zu erhalten. Ziel der Übung ist es aus den vorhandenen Daten ein Spiel zu erstellen. Wie die grafische Oberfläche ist, ist dabei dir überlassen. Natürlich lässt sich mit den Daten auch in der Console arbeiten.",
    tasks: [
      "CODING",
      "1. Fetche die benötigten Daten aus den API´s (siehe Link)",
      "2. Überprüfe mit Console.log ob die Daten vollständig geladen wurden",
      "3. Um die Ladezeiten der Daten zu verringern überlege dir eine Struktur für die Fetches",
      "4. Baue einen Login für den Spieler und teste ihn mit den vorhandene Userdaten",
      "DAS SIND NUR VORSCHLÄGE",
      "1. Erzeuge eine Character-/Klassesuswahl",
      "2. Erstelle eine Wahrscheinlichkeit auf Monster zu treffen",
      "3. Erstelle eine Wahrscheinlichkeit, dass besiegte Monster EQ droppen",
      "4. Erzeuge Keybindings für Bewegungen, Angriffe usw. key ==== 'w' => gehe hoch, key === 's' => gehe runter",
      "5. Erstelle verschiedene UI Elemente wie zum Beispiel ein Inventar, Questfenster, CharacterStats mit Keybinding,",
      "6. ...",
    ],
    commands:
      "Benötigte Skills: HTML, CSS, Map/Filter, Umgang mit Arrays of Objekten, Events, Async, DOM oder Electron",
    img: "",
    time: 2,
    urlText: "Zu den API´s",
    url: "https://createagame.onrender.com/",
    download: "",
    type: "fetch",
  },
  {
    id: 400,
    header: "Arbeiten mit Components und Props (Simple)",
    description:
      "Dies ist eine simple Übung um erstmal zu verstehen wie man Daten auslagert und damit arbeiten kann.",
    tasks: [
      "CODING",
      "1. Erstelle ein neues Vite Projekt",
      "2. Lösche alle CSS-Settings in main.css und app.css",
      "3. Lösche den Beispielcode in der App.jsx (nur den Code innerhalb der App Funktion)",
      "4. Erstelle einen Ordner für deine Components (innerhalb des src Ordners)",
      "5. Erzeuge eine Datei (home.jsx) im Components-Ordner",
      "6. Die home.jsx sollte erstmal eine h1 zurückgeben und al component in der app.jsx geladen werden",
      "7. Erstelle in der home.jsx ein Array (employees) mit 5 Objekten, in jedem Objekt soll ein firstname und ein lastname sein.",
      "8. Erstelle eine Funktion, die das Array (employees) als Argument annimmt.",
      "9. Mappe innerhalb der Funktion über das Array und erzeuge ein Array, dass den first- und lastname als String beinhaltet.",
      "10. Gebe die Daten des Arrays auf der Webseite aus.",
      "11. Lagere die Funktion und das Array (employees) in eine Extradatei mit dem Namen createFullname aus.",
      "12. Fixe die Dabei auftretenden Fehler und Kontrolliere die Ausgabe.",
      "13. Lagere nun das Array in eine Datei data.jsx aus und fixe die dabei entstandenen Fehler.",
      "14. Kopiere in der app.jsx die Componente <createFullname /> und übergebe diesesmal die Daten als Props.",
      "15. Versuche die dabei auftretenden Fehler zu fixen.",
    ],
    commands:
      "Benötigte Skills: Map, Umgang mit Arrays of Objects, import/export, react, Components, Props",
    img: "",
    time: 2,
    urlText: "",
    url: "",
    download: "",
    type: "react",
  },
];
