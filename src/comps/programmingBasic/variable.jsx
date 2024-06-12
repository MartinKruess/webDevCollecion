import { highlights } from '../../App';

export const Variable = () => {
  return (
    <article className='p-4'>
      <h2 className='font-extrabold text-2xl'>
        Variablen - Das Speichern von Werten unter einem Namen
      </h2>

      <h3 className='font-extrabold text-xl'>
        <span class={highlights.directory}>
          Die Deklaration einer Variable (Die Bennenung!)
        </span>
      </h3>
      <p>
        Die Deklaration einer Variablen erfolgt durch die Verwendung eines
        Schlüsselworts wie <span className={highlights.code}>let</span> oder
        <span className={highlights.code}> const</span>, gefolgt von einem
        Variablennamen. Mit der Deklaration wird dem JavaScript-Interpreter
        mitgeteilt, dass eine Variable mit einem bestimmten Namen verwendet
        werden soll.
      </p>
      <pre>
        <code>
          let y
          <br />
          const z
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>
        <span class={highlights.directory}>
          Die Initialisierung einer Variable (Zuweisung des Wertes!)
        </span>
      </h3>
      <p>
        Die Initialisierung einer Variablen erfolgt, indem ihr ein Wert
        zugeweisen wird. Nach der Deklaration kann einer Variablen ein
        Anfangswert zugeweisen werden, damit sie einen Wert enthält, der später
        verwendet werden kann.
      </p>
      <pre className='text-sm'>
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
      <p className='pt-4 pb-2'>
        Variablen können verschiedene Arten von Werten speichern, wie Zahlen 1 2
        3, Zeichenketten <span className={highlights.code}>"" "A" "ABC"</span>,
        Booleans <span className={highlights.code}>true/false</span>, Arrays{' '}
        <span className={highlights.code}>[ ]</span>, Objekte
        <span className={highlights.code}> &#123; &#125;</span> und einige mehr.
        Sie dienen dazu, Daten während der Ausführung eines JavaScript-Programms
        zu speichern und zu verändern.
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
      <h3 className='font-extrabold text-xl'>ACHTUNG VERALTET!</h3>
      <p>
        Vor ES6 war <span className={highlights.code}>var</span> die übliche
        Art, Variablen zu deklarieren. Sie sind funktions- oder global-sichtbar
        und können mehrmals im selben Gültigkeitsbereich deklariert werden,
        sowie überall überschrieben werden.{' '}
        <span className={highlights.code}>var </span>hat einige seltsame
        Eigenheiten, weshalb es empfohlen wird, stattdessen{' '}
        <span className={highlights.code}>let</span> oder{' '}
        <span className={highlights.code}>const</span> zu verwenden. Als
        beispiel ist var nicht Scopegebunden sondern global gültig!
      </p>
      <h2 className='font-extrabold text-2xl'>Scope Einfach!</h2>
      <p>
        Denke an den Scope als den Bereich, in dem eine Variable sichtbar ist.
        Wir kenne ein ähnliches Verhalten bereits aus CSS. Hierbei werden
        bestimmte Properties wie beispielsweise color oder font-size an
        Kindelemente vererbt und andere nicht.
      </p>
      <pre className='text-sm'>
        <code>
          .container &#123;
          <br />
          &nbsp;&nbsp;color: red;
          <br />
          &nbsp;&nbsp;border: solid 1px;
          <br />
          &#125;
          <br />
        </code>
      </pre>
      <p>
        In Javascript ist verhalten sich Variablen wie die color Property.
        Variablen sind von da aus wo sie deklariert wurden, in allen unteren
        Scopes sichtbar. Das bedeutet, dass eine Variable die in Zeile 1
        (Global) erstellt wurde auch in anderen Scopes, die unter ihrem
        Gültigkeitsbereich liegen sichtbar ist.
      </p>
      <p>
        Die border Property in CSS verhält sich wie eine Variable, die in einem
        Scope deklariert wurde. Diese ist nur in diesem Scope sichtbar und kann
        nicht von anderen Scopes aufgerufen werden.
      </p>
      <h2 className='font-extrabold text-2xl'>Was vertseht man unter Scope</h2>
      <p>
        Der Begriff <span className={highlights.code}>Scope</span> steht für den
        Gültigkeitsbereich/Wirkbereich einer Variable. So ist eine Variable, die
        in einem If-Else, einer Loop oder einer Function deklariert wurde nur
        innerhalb dieser Gültig/abrufbar/ansprechbar.
      </p>
      <p>
        Generell unterscheidet man zwischen globalen und lokalen Variablen.
        Globale Variablen sind überall gültig, während lokale Variablen nur eine
        lokale Gültigkeit haben zum Beispiel innerhalb einer Funktion oder eines
        If-Statements. Da in den Code Beispielen immer nur Teil-Codes zu sehen
        sind, reden wir der Einfachheithalber von übergeordneten Variablen.
      </p>
      <pre className='text-sm'>
        <code>
          // Diese übergeordnete Variable ist in untergeordneten Scopes
          aufrufbar
          <br /> const firstName = 'Otto'
          <pre className='bg-slate-800'>
            Scope / Gültigkeitsbereich
            <br />
            &#123;
            <br />
            // Dies ist eine lokale Variable, die nur innerhalb des
            vordefinierten Scopes &#123; &#125; gültig ist. &#9;const myVariable
            = "Hallo" + ' ' + firstName
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

      <h2 className='font-extrabold text-2xl'>
        Was vertseht man unter Closure
      </h2>
      <p>Folgt...</p>
      <pre className='text-sm'>
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
