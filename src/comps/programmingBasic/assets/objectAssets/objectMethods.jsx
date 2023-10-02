import { highlights } from "../../../../App";

export const ObjectMethods = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Arbeiten mit Objekt-Methoden</h2>
      <p>
        Der Value eines Objektes kann nicht nur ein fester Wert sondern auch
        eine Variable oder eine Funktion sein. Es gibt allerindgs ein paar
        Besonderheiten bei der Verwendung von Funktionen in einem Objekt.
      </p>
      <p>
        Innerhalb von Objekten können nur basic Functions verwendet werden, da
        Arrow-Functions nicht mit <span className={highlights.code}>this</span>{" "}
        arbeiten können. Innerhalb von Arrow-Functions entspricht{" "}
        <span className={highlights.code}>this -&gt; undefined</span>.
      </p>
      <p>
        Doch was genau ist eigl dieses 'this'?{" "}
        <span className={highlights.code}>this</span> ist ein Verweis auf das
        Objekt, das die aktuelle Javascript-Funktion aufgerufen hat. 'this' ist
        ein Segen für die Flexiblität und ein sprudelnder Quell für
        Trugschlüsse. Jede Javascript-Funktion hat ein verstecktes Argument
        namens 'this'.
      </p>

      <pre className='text-sm'>
        <code>
          const graka = &#123; <br />
          &#9;name: "RTX 3060", <br />
          &#9;company: "Gigabyte", <br />
          &#9;title: function()&#123;
          <br />
          &#9;&#9;return `$&#123;this.company&#125; $&#123;this.name&#125;`
          <br />
          &#9;&#125;
          <br />
          &#9;storage: "GDDR6 12", <br />
          &#9;price: "299", <br />
          &#9;description: "Bla bla bla", <br />
          &#125;
          <br />
          <br />
          console.log(graka.title())
          <br />
          <br />
          <h3 className='font-extrabold text-xl'>
            Kurzschreibweise einer Function in einem Object
          </h3>
          <br />
          Der Nachteil an dieser Version, ist dass man das Objekt kennen muss.
          <br />
          <br />
          title: function()&#123;
          <br />
          &#9;return `$&#123;graka.company&#125; $&#123;graka.name&#125;`
          <br />
          &#125;`
          <br />
          <br />
          Alternativlösung mit this (für unbekannte Objekte)
          <br />
          Vorteil: Man muss den ObjektName nicht kennen
          <br />
          Nachteil: Funktioniert nicht in ArrowFunction
          <br />
          <br />
          title: function()&#123;
          <br />
          &#9;return `$&#123;this.company&#125; $&#123;this.name&#125;`
          <br />
          &#125;
          <br />
        </code>
      </pre>
      <p>
        Funktionen, die innerhalb von Objekten aufgebaut werden, werden auch
        Methoden genannt. Wie beispielsweise Math.random(). Hier ist random()
        eine Function innerhalb des Math-Objektes. Wir haben bisher eine
        Methoden (String und Array Methoden) kennengelernt.
      </p>
      <p>
        'this' wird verwendet um in externen Methoden jedes Objekt ansprechen zu
        können. Wobei sich 'this' immer auf das aktuell zu bearbeitende Objekt
        bezieht. Da 'this' etwas kompliziert ist um es einfach so zu begreifen,
        hier ein kleines Beispiel.
      </p>
      <p>
        Die externe Methode (Funktion) wird in 5 verschiedenen Objekte
        eingebunden und soll in jedem Objekt den Vor- und Nachnamen als fullname
        ausgeben. Hierbei kommt 'this' zum einsatz. Sollten wir nun den fullname
        von Objekt 3 auslesen wollen, startet die Function und 'this' wird zu
        'object3' und erstellt den Fullname aus 'objekt3.firstname' und
        'objekt3.lastname'.
      </p>
      <p>
        Für alle Pokemonfans unter uns habe ich ein sehr bildliches Beispiel:
        Stell dir vor du hast einen Pokeball mit einem Ditto drin. Der Pokeball
        ist deine Funktion und das Ditto ist 'this'. Nun rufst du: "Los
        Pikachu!", das ist dein Objekt und Ditto nimmt die Form von Pikachu an,
        beim nächsten mal sagst du: "Los Taubsi!" und 'this' nimmt die
        Eigenschaften des Taubsi-Objektes an.
      </p>
      <h3 className='font-extrabold text-xl'>
        Beispiel mit Arrow-Function (funktioniert nicht!)
      </h3>
      <pre className='text-sm'>
        <code>
          Fehler: this bezieht sich auf global nicht auf das Objekt (zum Testen)
          <br />
          objKey: arrowTest = () =&gt; &#123;
          <br />
          &#9;consoloe.log(this.name) // Ausgabe: undefined!
          <br />
          &#125;
        </code>
      </pre>
    </article>
  );
};
