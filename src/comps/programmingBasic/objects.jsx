import { highlights } from "../../App";

export const Objects = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Objekte - Daten in Relation</h2>
      <div className="py-4">
        Allgemein gesprochen ist ein Object erstmal ein Datentyp, der entweder
        für das Object selbst spricht oder aber für ein Array. Objekte kann man
        sich in etwa wie eine Sammlung von Eigenschaften vorstellen. Objekte
        bestehen aus zwei Teilen, dem Key und dem Value. Den Key kann man als
        Adresse sehen und der value ist der Wert.
      </div>
      <p className="pt-4 pb-2">
        Erstellen wir mal ein Objekt zum Thema Grafikkarte. Hierfür stellen wir
        uns als erstes die Frage, was die Eckpunkte einer Grafikkarte sind.
        Beispiel: Chipsatz, Anschlüsse, länge, breite und vieles mehr.
      </p>
      <pre>
        <code>
          const graka = &#123; <br />
          &#9;name: "RTX 3060", <br />
          &#9;company: "Gigabyte", <br />
          &#9;storage: "GDDR6 12", <br />
          &#9;price: "299", <br />
          &#9;description: "Bla bla bla", <br />
          &#125;
        </code>
      </pre>
      <p>
        Wie man sieht ist ein Object eine Möglichkeit Daten in Relation
        zueinander aufzubauen. Alle Daten im obrigen Object haben einen Bezug
        zum Hauptthema des Objektes. Die Keys sind Eigenschaften, die jede
        Grafikkarte hat, die Werte hingegen beziehen sich auf eine spezifische
        Grafikkarte.
      </p>
      <p>
        Das Object besteht aus sogenannten Key-Value Paaren. Im obrigen Beispiel
        gibt es den Key <span className={highlights.code}>price</span> über den man auf den Wert/Value zugreifen kann.
      </p>
      <pre>
        <code>Dotnotation - console.log(graka.price)</code>
        <br />
        <code>Bracketnotation - console.log(graka['price'])</code>
      </pre>
      <p>
        Wenn man nun versuchen würde Daten aus Arrays miteinander zu verknüpfen
        würde das ganze in etwa so aussehen. Da ist es doch um einiges schöner,
        dass es Objekte gibt, die eine gewisse Datenstruktur bereits mitbringen.
      </p>
      <div className="imgContainer">
        <img
          className="small"
          src="./images/arrayRelation.png"
          alt="Github Extension preview"
        />
      </div>
      <h2 className="font-extrabold text-xl">Arbeiten mit Objekten</h2>
      <pre>
        <code>
          const graka = &#123; <br />
          &#9;name: "RTX 3060", <br />
          &#9;company: "Gigabyte", <br />
          &#9;storage: "GDDR6 12", <br />
          &#9;price: "299", <br />
          &#9;description: "Bla bla bla", <br />
          &#125;
        </code>
      </pre>
      <p>
        Es gibt verschiedene Arten ein Objekt zu bearbeiten. Create, add,
        change, delete und die Anwndung von Methoden.
      </p>
      <pre>
        <code>Create: const obj = {}</code>
        <br />
        <code>Add: graka.title = ""</code>
        <br />
        <code>Change: graka.company = "Asus"</code>
        <br />
        <code>Löschen: delete graka.description</code>
      </pre>
      <h2 className="font-extrabold text-xl">Arbeiten mit Objektenmethoden</h2>
      <p>
        Der Value eines Objektes kann nicht nur ein fester Wert sondern auch
        eine Variable oder eine Funktion sein. Es gibt allerindgs ein paar Besonderheiten bei der Verwendung von Funktionen in einem Objekt.
      </p>
      <p>
        Innerhalb von Objekten können nur basic Functions verwendet werden, da Arrow-Functions nicht mit <span className={highlights.code}>this</span> arbeiten können. Innerhalb von Arrow-Functions entspricht <span className={highlights.code}>this -&gt; undefined</span>.
      </p>
      <p>
        Doch was genau ist eigl dieses 'this'? <span className={highlights.code}>this</span> ist ein Verweis auf das Objekt, das die aktuelle Javascript-Funktion aufgerufen hat. 'this' ist ein Segen für die Flexiblität und ein sprudelnder Quell für Trugschlüsse. Jede Javascript-Funktion hat ein verstecktes Argument namens 'this'.
      </p>
          
          <pre>
            <code>
            const graka = &#123; <br />
            &#9;name: "RTX 3060", <br />
            &#9;company: "Gigabyte", <br />
            &#9;title: function()&#123;<br />
            &#9;&#9;return `$&#123;this.company&#125; $&#123;this.name&#125;`<br />
            &#9;&#125;<br />
            &#9;storage: "GDDR6 12", <br />
            &#9;price: "299", <br />
            &#9;description: "Bla bla bla", <br />
            &#125;<br /><br />
            console.log(graka.title())<br /><br />

            <h3 className="font-extrabold text-xl">
              Kurzschreibweise einer Function in einem Object
            </h3>
            <br />
            Der Nachteil an dieser Version, ist dass man das Objekt kennen muss.<br /><br />
            title: function()&#123;<br />
            &#9;return `$&#123;graka.company&#125; $&#123;graka.name&#125;`<br />
            &#125;`<br /><br />
            Alternativlösung mit this (für unbekannte Objekte)<br />
            Vorteil: Man muss den ObjektName nicht kennen<br />
            Nachteil: Funktioniert nicht in ArrowFunction<br /><br />
            title: function()&#123;<br />
            &#9;return `$&#123;this.company&#125; $&#123;this.name&#125;`<br />
            &#125;<br />
            </code>
          </pre>
          <p>
            Funktionen, die innerhalb von Objekten aufgebaut werden, werden auch Methoden genannt. Wie beispielsweise Math.random(). Hier ist random() eine Function innerhalb des Math-Objektes. Wir haben bisher eine Methoden (String und Array Methoden) kennengelernt.
          </p>
          <p>
            'this' wird verwendet um in externen Methoden jedes Objekt ansprechen zu können. Wobei sich 'this' immer auf das aktuell zu bearbeitende Objekt bezieht. Da 'this' etwas kompliziert ist um es einfach so zu begreifen, hier ein kleines Beispiel.
          </p>
          <p>
            Die externe Methode (Funktion) wird in 5 verschiedenen Objekte eingebunden und soll in jedem Objekt den Vor- und Nachnamen als fullname ausgeben. Hierbei kommt 'this' zum einsatz. Sollten wir nun den fullname von Objekt 3 auslesen wollen, startet die Function und 'this' wird zu 'object3' und erstellt den Fullname aus 'objekt3.firstname' und 'objekt3.lastname'.
          </p>
          <p>
            Für alle Pokemonfans unter uns habe ich ein sehr bildliches Beispiel: Stell dir vor du hast einen Pokeball mit einem Ditto drin. Der Pokeball ist deine Funktion und das Ditto ist 'this'. Nun rufst du: "Los Pikachu!", das ist dein Objekt und Ditto nimmt die Form von Pikachu an, beim nächsten mal sagst du: "Los Taubsi!" und 'this' nimmt die Eigenschaften des Taubsi-Objektes an.
          </p>
          <h3 className="font-extrabold text-xl">
              Beispiel mit Arrow-Function (funktioniert nicht!)
            </h3>
          <pre>
            <code>
              Fehler: this bezieht sich auf global nicht auf das Objekt (zum Testen)
              arrowTest() =&gt; &#123;<br />
              &#9;consoloe.log(this.name) // Ausgabe: undefined!<br />
              &#125;
            </code>
          </pre>
      <h2 className="font-extrabold text-xl">Ein Array of Objects</h2>
      <p>
        Wie bei Numbers, Stings und Boolians, kann man auch Objekte in einem
        Array speichern. Dies hat den Vorteil, dass man große Datenmengen des
        selben Typs strukturieren kann. Nehmen wir hierfür ein weiteres
        Beispiel: Tim und Lisa
      </p>
      <pre>
        <code>
          const children = [<br />
          &#9;&#123; <br />
          &#9;&#9;name: "Tim", <br />
          &#9;&#9;age: 14, <br />
          &#9;&#9;city: "Hamburg", <br />
          &#9;&#9;hobbies: ["Fussball", Schwimmen], <br />
          &#9;&#125;,
          <br /> &#9;&#123; <br />
          &#9;&#9;name: "Lisa", <br />
          &#9;&#9;age: "13", <br />
          &#9;&#9;city: "Berlin", <br />
          &#9;&#9;hobbies: ["Reiten", Schwimmen], <br />
          &#9;&#125;
          <br /> ]
        </code>
      </pre>
      <p>
        Nun haben wir das Array mit dem Namen children und innerhalb dieses Arrays
        haben zwei childs Tim und Lisa, diese lassen sich, wie gewohnt, mit [i]
        ansprechen. Lasst uns dochmal den Satz bilden: "Tim kommt aus Hamburg."
      </p>
      <pre>
        <code>
          console.log(children[0].name, "kommt aus", children[0].city + ".")
        </code>
      </pre>
      <h2 className="font-extrabold text-xl">Advanced Object Methoden</h2>
      <a href="https://www.mediaevent.de/javascript/this.html" target="_blank" rel="noopener noreferrer">this (gut erklärt)</a>
    </article>
  );
};
