export const TestQuestions = [
  {
    question: "Was versteht man unter dem Begriff 'Scope'?",
    description: "Nenne ein anderes Wort für 'Scope'.",
    answer: ["gültigkeitsbereich", "wirkungsbereich"],
    correct:
      "Der Begriff Scope bezeichnet den Gültigkeitsbereich von JS Objekten.",
  },
  {
    question: "Was ist ein Pointer?",
    description: "Blub",
    answer: ["zeiger", "verweis"],
    correct:
      "Ein Pointer ist der 'Zeiger' zwischen dem gespeicherten Namen und dem Wert/Value.",
  },
  {
    question: "Wie wird der Aufbau eines Objektes genannt?",
    description: "Aus was besteht ein Objekt?",
    answer: ["key/value", "key value", "key-value"],
    correct: "Der Aufbau eines Objektes wird als 'Key-Value Pair' bezeichnet.",
  },
  {
    question:
      "Mit welcher Methode kann man das letzte Element eines Arrays löschen?",
    description: "",
    answer: ["pop"],
    correct: "Die Methode zum löschen des letzten Elementes heißt 'pop()'.",
  },
  {
    question:
      "Mit welcher Methode kann man das erste Element eines Arrays löschen?",
    description: "",
    answer: ["shift"],
    correct: "Die Methode zum löschen des ersten Elementes heißt 'shift()'.",
  },
  {
    question: "Was passiert hier?",
    description: "string.slice(1)",
    answer: ["bis ende", "1 bis ende", "1 - ende", "1-ende"],
    correct: "Es wird von Buchstabe-Index '1 bis Ende' des Strings kopiert.",
  },
  {
    question:
      "Welchen Wert musst du einsetzen um den letzten Buchstaben eines Strings zu erhalten?",
    description: "Gib den fehlenden Wert an. string.slice(?)",
    answer: ["-1"],
    correct:
      "Der letzte Buchstabe eines Strings kann mit '-1' angesprochen werden.",
  },
  {
    question: "Welcher Datentype wird hier überprüft?",
    description: "if(toggle)",
    answer: ["bool", "boolian"],
    correct: "Der überprüfte Datentype ist ein Boolian.",
  },
  {
    question:
      "Wende die Syntax der map Methode auf das Array an. (nur den Anfang)",
    description: "const user = [...]",
    answer: ["user.map((user) =>)", "user.map(user =>)"],
    correct:
      "Die map Syntax lautet: user.map((user) =>) oder user.map(user =>).",
  },
  {
    question:
      "Welche Methode kann man verwenden um ein einziges gesuchtes Element auf einem Array zu bekommen.",
    description: "",
    answer: ["find"],
    correct:
      "Um nur ein Element in einem Array zu erhalten finden wird die 'find' Methode verwendet.",
  },
  {
    question: "Nenne den richtigen Namen, der angezeigt wird bei array[3]",
    description: "const array = ['Lisa', 'Johnas', 'Nicole', 'Tobias']",
    answer: ["Tobias"],
    correct:
      "Da Arrays bei Index 0 beginnen, wird das 4. Element 'Tobias' ausgegeben.",
  },
  {
    question:
      "Welche Methode wird verwendet um einen String in ein Arrays umzuwandeln",
    description: "Nicole Lisa Anna Tobias Jakob",
    answer: ["split"],
    correct:
      "Einen String kannman mit der Methode 'split' zu einem Array umwandeln.",
  },
  {
    question: "Wie nennt sich diese Syntax?",
    description: "condition ? do something... : do something different...",
    answer: ["ternary"],
    correct: "Die Syntax wird Terary genannt.",
  },
  {
    question: "Wie erzeuge ich eine Zufallszahl zwischen 0 und 30?",
    description: "Schreibe nur die Syntax auf.",
    answer: [
      "Math.floor(Math.random()*30)",
      "Math.floor(Math.random() * 30)",
      "Math.floor(Math.random()*31)",
      "Math.floor(Math.random() * 31)",
    ],
    correct:
      "Mit Math.floor(Math.random()*30) erzeugen wir eine abgerundete Zufallszahl ZWISCHEN 0 und 30.",
  },
  {
    question:
      "Wie ist die alternative Schreibweise um einen String zu erzeugen?",
    description: "firstname + ' ' + lastName",
    answer: ["${firstName} ${lastName}"],
    correct: "Strings erzeugt man seit ES6 mit `${firstName} ${lastName}`.",
  },
  {
    question: "Wie schreibt man dieses Beispiel in der Bracketnotation?",
    description: "object.price",
    answer: ["object['price']"],
    correct: "Die Bracketnotation lautet object['price'].",
  },
  {
    question:
      "Um eine externe Funktion in mehreren Objekten verwenden zu können wird welches Keyword verwendet?",
    description: "",
    answer: ["this"],
    correct: "'this' ist das gesuchte Wort.",
  },
  {
    question:
      "Wie erzeugt man ein Array, das nur aus den Werten eines Objektes besteht?",
    description: "cons obj = {...}",
    answer: ["Object.values(obj)"],
    correct:
      "Mit der Object Methode Object.values(obj) erhält man ein Array mit den Values.",
  },
  {
    question: "Wie heißt die Methode um einen Deep-Clone zu erstellen?",
    description: "",
    answer: ["structuredClone()"],
    correct: "'structuredClone()' ist die Methode für eine Deep-Copy.",
  },
  {
    question:
      "Wie kann eine Funktion eine beliebe Anzahl an Argumenten annehmen?",
    description: "Als Name nutze: 'args'!",
    answer: ["(...args)", "...args"],
    correct:
      "Mit dem Rest-Operator als function Parameter '(...args)' ist die Funktion in der Lage beliebig viele Argumente Anzunehmen.",
  },
  {
    question: "Wie nennt sich folende Syntax?",
    description: "const {firstName, lastName, ...data} = obj1",
    answer: ["rest", "rest-operator"],
    correct: "",
  },
  {
    question: "Was vergleicht ===, das == nicht vergleicht?",
    description: "",
    answer: ["type"],
    correct:
      "Mit dem === Vergleich wird ebenfalls auf den 'type' geprüft, wodurch 'true' === true false ergibt.",
  },
  {
    question: "Warum schreibt man folgende oft so?",
    description: "arr.lenght -1 oder string.lenght -1",
    answer: ["index"],
    correct:
      "Die lenght zählt die elemente von 1 an, der Index begint allerdings bei 0.",
  },
  {
    question: "Warum ergibt folgendes Ergebnis 'undefined'?",
    description:
      "const func1 = (num) => {<br />sum = num + num;<br />}<br /><br />console.log(func1(7))",
    answer: ["return"],
    correct: "Die Function hat keinen return.",
  },
  {
    question:
      "Wende die Syntax der filter Methode auf das Array an. (nur den Anfang)",
    description: "const user = [...]",
    answer: ["user.filter((user) =>)", "user.filter(user =>)"],
    correct:
      "Die map Syntax lautet: user.filter((user) =>) oder user.filter(user =>).",
  },
  {
    question:
      "Wie legt man ein neues Key-Value Pair im Objekt products, mit dem Namen newkey: 'newvalue', an?",
    description: "",
    answer: ["products.newkey = 'newvalue'", "products.newkey='newvalue'"],
    correct:
      "Einen neues key-value pair legt man wie folgt an: products.newkey = 'newvalue'",
  },
  {
    question: "Was ist vereinfacht gesagt eine class in JS?",
    description: "class car...",
    answer: ["blueprint", "blaupause", "schablone", "vorlage", "vordruck"],
    correct: "Mit class baut man eine Art 'Blueprint' für Objekte auf.",
  },
  {
    question: "Was returned map, filter, reducer immer?",
    description: "Welchen Datentype returnen die oben genannten methoden?",
    answer: ["array", "neues array"],
    correct:
      "Der return von map, filter und reducer ist immer ein 'neues Array'.",
  },
  {
    question: "Was ist die Aufgabe des Construtors in classes?",
    description: "",
    answer: ["daten", "value", "wert"],
    correct:
      "Der Construtor sorgt für die richtige Zuweisung der 'Daten/Values/Werte' zu dem passenden Key.",
  },
  {
    question: "Will follow in a view Days",
    description: "",
    answer: ["placeholder"],
    correct: "",
  },
];
