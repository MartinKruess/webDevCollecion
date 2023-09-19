# Import und Export

Import und Eport ES6 2015
vorher require (readline-sync)

## Welche Vorteile bietet das Arbeiten mit import/export

|| Vorteile | Beschreibung |
|---|---|---|
|Auslagern von Funktionen|reusability / Wiederverwendbarkeit| Ein wichtiger Punkt in der Programmierung ist die reusability. Gerade funktionen bieten hierfür einen guten Ansatz. Durch das Auslagern von Funktionen können diese probelmlos wiederverwendet werden, ohne dass hierfür doppelter Code benötigt wird. |
| Auslagern von Daten | clean Code, übersichlicher | Da Daten gewöhnlich Array of Objects sind, können diese Daten schnell einige hundert zeilen Code beinhalten. Durch das Auslagern dieser Daten wird für eine bessere Übersichtlichkeit des logischen Codes gesorgt. |
| import VS require | asynchrones Arbeiten | require ist ein synchroner Vorgang und blockiert die Ausführung des Skripts, bis das Modul geladen und einsatzbereit ist. import hingegen ist ein asynchroner Vorgang, sodass das Skript nicht blockiert wird, während das Modul geladen wird |

## Wofür verwendet man import/export?

Nicht nur in Frameworks, auch in normalen JS-Datein bietet ein strukturierter Aufbau enorme Vorteile. Daher ist das Auslagern von Daten und Funktionen in sogenannte Komponenten/Module eine gänge praxis um einen strukturierten Aufbau gewähleisten zu können. Ebenfalls verringert die Auslagerung, die Komplexität des Codes.


## Anwendung von import und export

### Default Export

```
const myFunction = () => {
    // do something...
}

export default myFunction;

import myFunction from "./components/myfunction.js"
```

Beim 'export default' wird die gesamte Datei exportiert, daher ist es hierbei wichtig darauf zu achten, dass ein Module nur aus einer Funktion besteht.

### Exportieren von mehreren Funktionen (Variante 1)

```
const randomNumber = () => Math.floor(Math.random() * 6)
const exponantial = (num) => num ** 2

export { randomNumber, exponantial };

import { randomNumber, exponantial } from "./components/calculations.js"
import { exponantial } from "./components/calculations.js"
```

Bei dieser Variante ist es möglich einzelne Funktionen oder sogar Teilfunktionen zu ex- und importieren. Dadurch ist es möglich artverwandte Funktionen wie im Beispiel 'calculations' in einer Datei zu sammeln und dennoch jede Funktion individuell anzuwenden. 


### Exportieren von mehreren Funktionen (Variante 2)

```
export const users = [
    {...}
];

export const clickHandler = (counter) => counter + 1;

import { randomNumber, exponantial } from "./components/calculations.js"
import { exponantial } from "./components/calculations.js"
```

Wie auch in Variante 1 ist es möglich einzelne Funktionen, Daten oder Teile dieser zu exportieren. Ich persönlich finde diese Variante sehr übersichtlich und bevorzuge diese.