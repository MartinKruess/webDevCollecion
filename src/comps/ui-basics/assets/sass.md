# Grundwissen über SCSS/SASS ?

SCSS kann als erweitertes CSS beschrieben werden, womit das Aussehen von Websites beeinflusst wird. Ein mit SCSS verwandter Begriff ist SASS. Während die ***SASS-Syntax*** mit ***Einrückungen*** und ohne die im CSS üblichen geschweiften Klammern und Semikolons auskommt, ist die Syntax von SCSS der von CSS ähnlich. SCSS wird gerne als die modernere Syntax bezeichnet.

Damit SASS von einem Browser verstanden wird, muss der Code zuerst in CSS konvertiert werden. Deshalb wird SASS als ***Präprozessor*** bezeichnet.

SASS bietet im Gegensatz zu CSS verschiedene Funktionen, die das Schreiben von CSS-Anweisungen erleichtern.

Duch die Entwicklung von SASS ist auch die Verwendug von SCSS möglich. Die verwendete Syntax wird automatisch erkennt.
```
npm i sass
```

## Functions

**Variablen:** SASS ermöglicht es Informationen in Variablen zu Speichern und an verschiedenen Stellen wiederzuverwenden. Variablen sind nützlich um zum Beispiel Schriftarten, -grössen, Farben und andere Werte über die ganze Website konsistent einzusetzen.

**Verschachtelung:** SASS erlaubt das Verschachteln von Klassen und Pseudoklassen, was Redundanz verringert und weniger Schreibaufwand bedeutet. Ferner wird dabei auch die BEM-Methodik1 unterstützt.

**Arithmetische Operationen:** In SASS lassen sich einfache Berechnungen wie +, -, * und / durchführen.

**Flusskontrolle:** SASS kennt Schleifen und Fallunterscheidungen womit sich Wiederholungen und Wenn-/Dann-Regeln umsetzen lassen.

**Funktionen, Mixins und Extend:** Eine @function kann mit Werten gefüttert werden, die sie verarbeitet und schliesslich das Resultat zurückgibt. Ein @mixin funktioniert ähnlich wie eine @function, unterscheidet sich aber dadurch, dass es CSS statt einem Wert zurückliefert. @extend ermöglicht es verschiedenen CSS-Klassen Eigenschaften miteinander zu teilen.

**Imports:** Die SASS-Befehle @import und @use erlauben es, den Code in Teildateien aufzuteilen, womit sich der Code besser strukturieren und in anderen Zusammenhängen wiederverwenden lässt. Im Gegensatz zum CSS-Import Befehl wird beim Seitenaufruf kein zusätzlicher HTTP-Request erzeugt.

**Vorteile von SCSS/Sass gegenüber CSS**
- zusätzliche Funktionen
- reduzierung von Redundanz (vermeidet doppelten Code)
- hohe Modularität (Wiederverwendbarkeit)

---
## Unterschiede zwischen SCSS und SASS

### SCSS - Sassy CSS

- neuere Syntax
- ähnlich der CSS Syntax
- Standard

```
.container{
  float: left;
  width: 100%;

  p{
    color: #111;
  }
}
```

### SASS - Syntactically Awesome Style-Sheets

- original Syntax
- kürzere Syntax

SASS example:

```
.container
  float: left
  width: 100%

  p 
    color: #111
```

---

### CSS / SCSS / SASS - Snytax und Funktionen

| CSS | SCSS | SASS |
|---|---|---|
| geschweifte Klammern & Semikoline | geschweifte Klammern & Semikoline | Einrückung |
| Leertasten werden ignoriert | Leertasten werden ignoriert | Strikte Regeln was Leerzeichen angeht |
| x | @example-mixin | =example-mixin |
| x | @include example-mixin | +example-mixin |
| x | @import foo | @import foo (same) |
| x | @extend foo | @extend foo (same) |


---

### Mixin - Wie funktioniert es?

Im gegensatz zu Variablen, die global arbeiten sind Mixins eine Art vordefiniertes und wiederverwenbares Pattern an CSS Attributen, das ähnlich einer Funktion diese via ```@include``` ausgibt. 

```
@mixin flex{
    display: flex;
  }
```

---

## Wie funktioniert es mit SCSS/SASS ?

1. Als erstes initialisieren wir git

```
  git init
```

2. SASS und SCSS Installation
```
  npm i sass
```

3. Unser erstes einfaches Mixin

```
@mixin flex{
    display: flex;
    flex-wrap: wrap;
  }
```

4. Wir erstellen globale Variablen
```
//CSS
--primary-CSS: #08061c;
  --secondary-CSS: #ededed;
  --third-CSS: #7a0202;
  --highlight-CSS: #d15305;
  --smallspace-CSS: 0.5rem;
  --mediumspace-CSS: 1rem;
  --largespace-CSS: 1.5rem;

//SCSS
  $primary-SCSS: #08061c;
  $secondary-SCSS: #ededed;
  $third-SCSS: #7a0202;
  $highlight-SCSS: #d15305;
  $smallspace-SCSS: 0.5rem;
  $mediumspace-SCSS: 1rem;
  $largespace-SCSS: 1.5rem;
```
5. Was sind Partials und wie werden diese genutzt?
Partials sind Dateien, die vom Compiler ignoriert werden, bis diese in eine CompolierbareDatei importiert werden.
**Wichtig:** Um das Compelieren von Partials zu verhindern benötgt man einen Präfix vor dem eigentlihen Dateinamen. *_name* durch den *_* wird diei Datei ignoriert.


```
@mixin border{
    border: solid 0.2rem $highlight-SCSS;
    border-radius: 1rem;
  }

// Dynamic borders by setting parameters
@mixin borderWithParameters($width: 0.5rem, $color: $highlight-SCSS){
  border-width: $width;
  border-style: solid;
  border-color: $color;
  border-radius: 5rem;
}
```

```
@import "./partials/mixin";
```
6. Style die Buttons und den Paragraphen mit Hilfe eines Mixins innerhalb der ***main.scss***.
Nutze die globalen Variablen um padding und margin zu setzen.

7. Nun versuche das fertige Mixin nach ***_mixin.scss*** auszulagern und importiere das Mixin in die *main.scss*.

8. Erstelle ein media querry mixin.

```
@mixin breakpoints ($medium) {
    @if $medium == desktop {
      @media (min-width: 1024px) {
        @content;
      }
    }
  ...
  }
```

---

Quellen:

https://www.npmjs.com/package/sass (Dokumentation)

https://www.youtube.com/watch?v=3wXqwX4nu8I (Englisch)

https://www.youtube.com/watch?v=Vyp3Nh0QvSk&list=PLNmsVeXQZj7oopYYGy5hX-Y6b07_3DPp5 (Deutsch)