export const TestQuestions = [
  {
    question: "Was versteht man unter dem Begriff 'Scope'?",
    description: "Nenne ein anderes Wort für 'Scope'.",
    answer: [
      "gültigkeitsbereich",
      "wirkungsbereich",
      "gültig",
      "ansprech",
      "aufruf",
    ],
    correct:
      "Der Begriff Scope bezeichnet den Gültigkeitsbereich von JS Objekten.\n",
  },
  {
    question: "Was ist ein Pointer?",
    description: "Wie wird ein Pointer noch genannt?",
    answer: ["zeiger", "verweis", "verlinkung", "verknüpfung"],
    correct:
      "Ein Pointer ist der 'Zeiger' zwischen dem gespeicherten Namen und dem Wert/Value.\n",
  },
  {
    question:
      "Wie nennt sich die Property links, vom Doppelpunkt, innerhalb eines Objektes? ",
    description: "name : 'Michael'",
    answer: ["key", "property-key"],
    correct:
      "Der Aufbau eines Objektes wird als 'Key : Value Pair' bezeichnet.\n",
  },
  {
    question:
      "Mit welcher Methode kann man das letzte Element eines Arrays löschen?",
    description: "",
    answer: ["pop", "pop()"],
    correct: "Die Methode zum löschen des letzten Elementes heißt 'pop()'.\n",
  },
  {
    question:
      "Mit welcher Methode kann man das erste Element eines Arrays löschen?",
    description: "",
    answer: ["shift", "shift()"],
    correct: "Die Methode zum löschen des ersten Elementes heißt 'shift()'.\n",
  },
  {
    question: "Was passiert hier?",
    description: "'Hallo'.slice(1)",
    answer: ["bis ende", "1 bis ende", "1 - ende", "1-ende", "allo"],
    correct: "Es wird von Index '1 bis Ende' des Strings kopiert.\n",
  },
  {
    question: "Was passiert hier?",
    description: "arr.splice(3, 1)",
    answer: [
      "element 4 wird gelöscht",
      "index 3 wird gelöscht",
      "3. wird gelöscht",
      "3 wird gelöscht",
      "entfernt",
    ],
    correct: "Element 4 mit dem Index 3 wird aus dem Array entfernt.\n",
  },
  {
    question:
      "Welchen Wert musst du einsetzen um den letzten Buchstaben eines Strings zu erhalten?",
    description: "Gib den fehlenden Wert an. string.slice(?)",
    answer: ["-1"],
    correct:
      "Der letzte Buchstabe eines Strings kann mit '-1' angesprochen werden.\n",
  },
  {
    question: "Welcher Datentype wird hier überprüft?",
    description: "if(!toggle)",
    answer: ["bool", "boolian", "false"],
    correct: "Der überprüfte Datentype ist ein Boolian (false).\n",
  },
  {
    question:
      "Wende die Syntax (Code) der map Methode auf das Array an. (nur den Anfang)",
    description: "const users = [...]",
    answer: ["users.map((user) =>)", "users.map(user =>)"],
    correct:
      "Die map Syntax (Code) lautet: users.map((user) =>) oder users.map(user =>).\n",
  },
  {
    question:
      "Welche Methode kann man verwenden um ein einziges gesuchtes Element aus einem Array zu bekommen.",
    description: "Wie findet man ein Element in einem Array?",
    answer: ["find", "find()"],
    correct:
      "Um nur ein Element in einem Array zu erhalten finden wird die 'find()' Methode verwendet.\n",
  },
  {
    question: "Nenne den richtigen Namen, der angezeigt wird bei array[3]",
    description: "const array = ['Lisa', 'Johnas', 'Nicole', 'Tobias']",
    answer: ["Tobias"],
    correct:
      "Da Arrays bei Index 0 beginnen, wird das 4. Element 'Tobias' ausgegeben.\n",
  },
  {
    question:
      "Welche Methode wird verwendet um einen String in ein Arrays umzuwandeln",
    description: "Nicole Lisa Anna Tobias Jakob",
    answer: ["split", "split()"],
    correct:
      "Einen String kannman mit der Methode 'split(\" \")' zu einem Array umwandeln.\n",
  },
  {
    question: "Wie nennt sich diese Syntax (Code)?",
    description: "condition ? do something... : do something different...",
    answer: ["ternary"],
    correct: "Die Syntax (Code) wird Terary genannt.\n",
  },
  {
    question: "Wie erzeuge ich eine Zufallszahl zwischen 0 und 10?",
    description: "Schreibe nur die Syntax (Code) auf.",
    answer: ["Math.floor(Math.random()*10)", "Math.floor(Math.random() * 10)"],
    correct:
      "Mit Math.floor(Math.random() * 10) erzeugen wir eine abgerundete Zufallszahl ZWISCHEN 0 und 10.\n",
  },
  {
    question:
      "Wie ist die alternative Schreibweise um einen String zu erzeugen?",
    description: "firstname + ' ' + lastName",
    answer: ["${firstName} ${lastName}"],
    correct: "Strings erzeugt man seit ES6 mit `${firstName} ${lastName}`.\n",
  },
  {
    question: "Wie schreibt man dieses Beispiel mit der Bracketnotation?",
    description: "object.price",
    answer: ["object['price']"],
    correct: "Die Bracketnotation lautet object['price'].\n",
  },
  {
    question:
      "Um in einer externen Funktion mehrere Objekten verwenden zu können wird welches Keyword verwendet?",
    description: "",
    answer: ["this"],
    correct: "'this' ist das gesuchte Wort.\n",
  },
  {
    question:
      "Wie erzeugt man ein Array, das nur aus den Werten eines Objektes besteht?",
    description: "cons arr = {obj}",
    answer: ["Object.values(obj)"],
    correct:
      "Mit der Object Methode Object.values(obj) erhält man ein Array mit den Values.\n",
  },
  {
    question: "Wie heißt die Methode um einen Deep-Clone zu erstellen?",
    description: "",
    answer: ["structuredClone()", "structuredClone"],
    correct: "'structuredClone()' ist die Methode für eine Deep-Copy.\n",
  },
  {
    question:
      "Wie kann eine Funktion eine beliebe Anzahl an Argumenten annehmen?",
    description: "Schreibe den Code auf und nutze als Parameternamen: 'args'!",
    answer: ["(...args)", "...args"],
    correct:
      "Mit dem Rest-Operator als function Parameter '(...args)' ist die Funktion in der Lage beliebig viele Argumente Anzunehmen.\n",
  },
  {
    question: "Wie nennt sich folende Syntax (Code)?",
    description: "const {firstName, lastName, ...data} = obj1",
    answer: ["rest", "rest-operator"],
    correct: "Diese Syntax nennt sich rest Operator.\n",
  },
  {
    question: "Was vergleicht ===, das == nicht vergleicht?",
    description: "'1' === 1",
    answer: ["type", "datentypen"],
    correct:
      "Mit dem === Vergleich wird ebenfalls auf den 'datentype' geprüft, wodurch 'true' === true false ergibt.\n",
  },
  {
    question: "Worauf bezieht sich diese Schreibweise?",
    description: "arr.lenght -1 oder string.lenght -1",
    answer: ["index"],
    correct:
      "Die lenght zählt die elemente von 1 an, der 'Index' begint allerdings bei 0.\n",
  },
  {
    question: "Warum ist folgendes Ergebnis 'undefined'?",
    description: `
      const func1 = (num) => {sum = num + num;}
      console.log(func1(7))
      `,
    answer: ["return", "klammern", "brackets"],
    correct: "Die Function hat keinen return.\n",
  },
  {
    question:
      "Wende die Syntax (Code) der filter Methode auf das Array an. (nur den Anfang)",
    description: "const users = [...]",
    answer: ["users.filter((user) =>)", "users.filter(user =>)"],
    correct:
      "Die filter Syntax (Code) lautet: users.filter((user) =>) oder users.filter(user =>).\n",
  },
  {
    question:
      "Wie legt man ein neues Key-Value Pair im Objekt products, mit dem Namen firstName: 'Michael', an?",
    description: "",
    answer: ["products.firstName = 'Michael'", "products.firstName='Michael'"],
    correct:
      "Einen neues key-value pair legt man wie folgt an: products.firstName = 'Michael'\n",
  },
  {
    question: "Was ist vereinfacht gesagt eine class in JS?",
    description: "class car...",
    answer: [
      "blueprint",
      "blaupause",
      "bauplan",
      "schablone",
      "vorlage",
      "vordruck",
    ],
    correct: "Mit class baut man eine Art 'Blueprint' für Objekte auf.\n",
  },
  {
    question: "Was returned die map und filter Methode immer?",
    description: "Welchen Datentype returnen die oben genannten Methoden?",
    answer: ["array", "neues array"],
    correct: "Der return von map und filter ist immer ein 'neues Array'.\n",
  },
  {
    question: "Wo liegt der Fehler in dieser Klasse?",
    description:
      "class Car {constructor(firstName, lastname){firstName = firstname;lastName = lastName;}}",
    answer: ["this"],
    correct:
      "Im Construtor muss 'this' verwendet werden um die Keys der Objekte zu erzeugen.\n",
  },
  {
    question: "Schreibe die erste Zeile einer For Schleife '< arr'.",
    description: "const arr = []",
    answer: [
      "for(let i = 0; i < arr.length; i++)",
      "for (let i = 0; i < arr.length; i++)",
    ],
    correct: "for(let i = 0; i < arr.length; i++)\n",
  },
  {
    question: "Welches Keyword erzeugt eine neue Instanz aus einer Klasse?",
    description: "class Car = {...}",
    answer: ["new"],
    correct:
      "Mit dem Keyword 'new' wird eine neue Instanz aus einer Klasse erzeugt.\n",
  },
  {
    question: "Welcher Teil ist die 'Initialisierung' bei einer Variable?",
    description: "const variable1 = 'Mein Wert'",
    answer: ["const", "const variable1", "variable1"],
    correct:
      "Die Initialisierung einer Variable ist const variable1. Die Zuweisung ist = und die Variablendeklaration ist 'Mein Wert'.\n",
  },
  {
    question: "Wie convertiert man den String zu einer Nummer?",
    description: "'15'",
    answer: [
      "number",
      "number()",
      "number('15')",
      "parseInt",
      "parseInt()",
      "parseInt('15')",
      "parseFloat",
      "parseFloat('15')",
      "+'15'",
    ],
    correct:
      "Um einen String zu einer Number zu convertieren gibt es verschiedene Wege. Number(), parseInt() oder parseFloat() sind die gängisten.\n",
  },
  {
    question:
      "Welche Methode wird verwendet ein Array als String folgendermaßen auszugeben?",
    description: "['Anton', 'Berta', 'Christina'] -> 'Anton Berta Christian'",
    answer: ["join", "join()", "join(' ')"],
    correct:
      "Beim Umwandeln eines Arrays in einen String werden die Array typischen Kommatas mit der join() Methode ersetzt.\n",
  },
  {
    question: "Wie werden Funktionen innerhalb von Objekten genannt?",
    description: "",
    answer: ["methode", "methods", "methoden"],
    correct:
      "Funktionen, die sich innerhalb von Objekten befinden nennt man Methoden.\n",
  },
  {
    question: "Welchen Boolian erhalten wir bei folgendem Code?",
    description: "{name: 'Günther', age: 63} === {name: 'Günther', age: '63}",
    answer: ["false", "falsch"],
    correct:
      "Objekte können identische Werte haben und sind dennoch unterschiedliche Objekte.\n",
  },
  {
    question: "Welchen Boolian erzeugt diese Aussage?",
    description: "' '",
    answer: ["true", "wahr"],
    correct:
      "Auch ein Leerzeichen zählt als ein zeichen und damit handelt es sich nicht länger um einen EmptyString.\n",
  },
  {
    question: "Wann wird counter +1 gerechnet?",
    description: "toggle && counter++",
    answer: ["true", "wahr"],
    correct:
      "Ähnlich einer If Bedingung kann durch diese Syntax die Bedingung toggle gesetzt werden.\n",
  },
  {
    question: "Was kommt hier raus?",
    description: "Number('3:13')",
    answer: ["NaN", "not a number", "no number", "keine nummer"],
    correct: "Das Ergebnis hier ist NaN.\n",
  },
  {
    question: "Wodurch wurde ${code} eingeführt?",
    description: "",
    answer: ["ES6", "Ecmascript6", "Ecmascript 6", "Ecma script 6"],
    correct:
      "Mit der Einführung von ES6 wurden Template literals eingeführt.\n",
  },
  {
    question: "Was gibt dieser Code aus?.",
    description: "console.log(new Date().toLocaleDateString('de-DE'))",
    answer: [
      "das Datum von heute",
      "heute",
      "datum heute",
      "datum des Tages",
      "aktuelles Datum",
    ],
    correct: "In der Konsole wird heutige Datum ausgeben.\n",
  },
  {
    question: "Welche Array Methode würde sich hierfür anbieten?.",
    description: "const arr = [1, 3, 5] Ausgabe: [2, 4, 6]",
    answer: ["map", "reduce", "map()"],
    correct:
      "Um jedes Element in einem Array zu bearbeiten, bietet sich die Verwendung von map() an. Map verändert nicht die Anzahl sondern nur die Elemente selbst.\n",
  },
  // {
  //   question:
  //     "Welche Methode wird verwendet ein Array als String folgendermaßen auszugeben?.",
  //   description: "['Anton', 'Berta', 'Christina'] -> 'Anton Berta Christian'",
  //   answer: ["join", "join()", "join(' ')"],
  //   correct:
  //     "Beim Umwandeln eines Arrays in einen String werden die Array typischen Kommatas mit der join() Methode ersetzt.\n",
  // },
];
