import { highlights } from "../../App";

export const Variable = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">
        Variablen - Das Speichern von Werten unter einem Namen
      </h2>
      <p>
        Die Deklaration einer Variablen erfolgt durch die Verwendung eines
        Schlüsselworts wie <span className={highlights.code}>let</span> oder{" "}
        <span className={highlights.code}>const</span>, gefolgt von einem
        Variablennamen. Mit der Deklaration teilen Sie dem
        JavaScript-Interpreter mit, dass Sie eine Variable mit einem bestimmten
        Namen verwenden möchten.
      </p>
      <pre>
        <code>
          let y;
          <br />
          const z;
        </code>
      </pre>
      <p>
        Die Initialisierung einer Variablen erfolgt, indem Sie ihr einen Wert
        zuweisen. Nach der Deklaration können Sie einer Variablen einen
        Anfangswert zuweisen, damit sie einen Wert enthält, den Sie später
        verwenden können.
      </p>
      <pre>
        <code>
          var x; // Deklaration
          <br />
          x = 10; // Initialisierung
          <br />
          <br />
          let y = "Hallo";
          <br />
          const z = true;
        </code>
      </pre>
      <p className="pt-4 pb-2">
        Variablen können verschiedene Arten von Werten speichern, wie Zahlen,
        Zeichenketten <span className={highlights.code}>""</span>, Booleans{" "}
        <span className={highlights.code}>true/false</span>, Arrays{" "}
        <span className={highlights.code}>[ ]</span>, Objekte{" "}
        <span className={highlights.code}>&#123; &#125;</span>. Sie dienen dazu,
        Daten während der Ausführung eines JavaScript-Programms zu speichern und
        zu verändern.
      </p>
      <pre>
        <code>
          const constantVariable = ""
          <br />
          let localVariable = ""
        </code>
      </pre>
      <p>
        <span className={highlights.code}>const</span> ermöglicht die
        Deklaration von Variablen mit konstantem Wert. Sie haben auch einen
        Blockgültigkeitsbereich und können nicht erneut zugewiesen werden.
      </p>
      <p>
        Mit ES6 wurde <span className={highlights.code}>let</span> eingeführt.
        Variablen, die mit "let" deklariert werden, haben einen
        Blockgültigkeitsbereich und können nur einmal im selben Block deklariert
        werden.
      </p>
      <h3 className="font-extrabold text-xl">ACHTUNG VERALTET!</h3>
      <p>
        Vor ES6 war <span className={highlights.code}>var</span> die übliche
        Art, Variablen zu deklarieren. Sie sind funktions- oder global-sichtbar
        und können mehrmals im selben Gültigkeitsbereich deklariert werden,
        sowie überall überschrieben werden.
      </p>
      <h2 className="font-extrabold text-2xl">Was vertseht man unter Scope</h2>
      <p>
        Der Begriff <span className={highlights.code}>Scope</span> steht für den
        Gültigkeitsbereich/Wirkbereich einer Variable. So ist eine Variable, die
        in einem If-Else, einer Loop oder einer Function deklariert wurde nur
        innerhalb dieser Gültig/abrufbar/ansprechbar.
      </p>
      <pre>
        <code>
          <pre className="bg-slate-800">
            Scope / Gültigkeitsbereich
            <br />
            &#123;
            <br />
            &#9;const myVariable = "Hallo"
            <br />
            // Innerhalb des Scopes -&gt; Zugriff
            <br />
            &#9;console.log(`Innerhalb der Klammern: $&#123;myVariable&#125;`)
            <br />
            &#125;
          </pre>
          // Außerhalb des Scopes -&gt; kein Zugriff
          <br />
          console.log(`Außerhalb der Klammern: $&#123;myVariable&#125;`)
          <br />
        </code>
      </pre>

      <h2 className="font-extrabold text-2xl">
        Was vertseht man unter Closure
      </h2>
      <p>Folgt...</p>
      <pre>
        <code>
          function createGreeting(greeting) &#123;
          <br />
          &#9;return function(name) &#123;
          <br />
          &#9;&#9;return `$&#123;greeting&#125;, $&#123;name&#125;!`
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          // create greetGerman wird aufgerufen und anschließend wird ein
          zweiter Wert (der Name) für die innere Function eingeben
          <br />
          const greetGerman = createGreeting("Hi")
          <br />
          console.log(greetGerman.toString())
          <br />
          console.log(greetGerman("Heinz")) // "Hi, Heinz!"
          <br />
          <br />
          // create greetFrench wird aufgerufen und anschließend wird ein
          zweiter Wert (der Name) für die innere Function eingeben
          <br />
          const greetFrench = createGreeting("Salut")
          <br />
          console.log(greetFrench.toString())
          <br />
          console.log(greetFrench("Nicole")) // "Satut, Nicole!"
          <br />
          <br />
          // Diese Art des Aufrufens ist möglich, aber unflexibel.
          <br />
          console.log(createGreeting("Hallo")("Jakob"))) // "Hallo, Jakob!"
        </code>
      </pre>
    </article>
  );
};
