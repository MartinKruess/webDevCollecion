import { highlights } from "../../App";

export const Callback = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">Callback</h2>
      <p>
        Callbacks gehören zu den Higher Order Functions. Unter einer Higher
        Order Function versteht man eine Funktion, die eine oder mehrere
        Funktionen als Argutment annimmt, eine Funktion als Ergebnis zurück gibt
        oder beides. Callback nennt sich die Funktion, die an eine Higher Order
        Function als Argument übergeben wird.
      </p>
      <pre className="text-sm">
        <code>
          function greet(name) &#123;
          <br />
          &#9;return `Hello, $&#123;name&#125;!`;
          <br />
          &#125;
          <br />
          <br />
          function higherOrderFunction(greetFunction, name) &#123;
          <br />
          &#9;return greetFunction(name);
          <br />
          &#125;
          <br />
          <br />
          const result = higherOrderFunction(greet, 'Bob');
          <br />
          console.log(result); // Ausgabe: Hello, Bob!
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">
        Verschiedene Arten von Higher Order Functions
      </h3>
      <p>
        Beim Thema Higher Order Function, die eine Funktion als Ergebnis zurück
        gint, wird der Funktionsaufruf recht abenteuerlich. Die einfachere
        Schreibweise, die eventuell noch verständlich ist, ist die mit den
        Doppelten Klammern.
      </p>
      <pre className="text-sm">
        <code>
          function higherOrderFunction(
          <span className={highlights.directory}>parameterOuter</span>) &#123;
          <br />
          &#9;return function (
          <span className={highlights.file}>parameterInner</span>) &#123;
          <br />
          &#9;&#9;// do something...
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          higherOrderFunction(
          <span className={highlights.directory}>argumentOuter</span>)(
          <span className={highlights.file}>argumentInner</span>)
          <span className={highlights.directory}></span>
          <br />
          <br />
          //Alternative Schreibweise
          <br />
          // higherOrderFunction gibt eine Funktion zurück, diese wird in
          innerFunction gespeichert
          <br />
          const innerFunction = higherOrderFunction(
          <span className={highlights.directory}>argumentOuter</span>)
          <br />
          innerFunction(<span className={highlights.file}>argumentInner</span>)
        </code>
      </pre>
      <p>
        Ein großer Vorteil dieser Art von Funktion ist die Flexibilität. Die
        <span className={highlights.directory}> higherOrderFunction</span> kann
        jeden Wert von außen erhalten und ebenso kann{" "}
        <span className={highlights.file}> innerFunction</span> jeden beliebigen
        Wert erhalten.
      </p>
      <pre className="text-sm">
        <code>
          function higherOrderFunction(
          <span className={highlights.directory}>multiplier</span>) &#123;
          <br />
          &#9;return function (<span className={highlights.file}>value</span>)
          &#123;
          <br />
          &#9;&#9;return multiplier * value
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          higherOrderFunction(
          <span className={highlights.directory}>2</span>)(
          <span className={highlights.file}>5</span>)
          <span className={highlights.directory}></span>
          <br />
          <br />
          //Alternative Schreibweise
          <br />
          const double = func1(
          <span className={highlights.directory}>2</span>)
          <br />
          double(<span className={highlights.file}>5</span>)
        </code>
      </pre>
      <br />
      <pre className="text-sm">
        <code>
          function func1(
          <span className={highlights.directory}>multiplier</span>,{" "}
          <span className={highlights.file}>value</span>) &#123;
          <br />
          &#9;return function(value) &#123;
          <br />
          &#9;&#9;return multiplier * value
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          const double = func1(<span className={highlights.directory}>
            2
          </span>, <span className={highlights.file}>5</span>)
        </code>
      </pre>
      <p>
        Auf den ersten Blick, könnte man meinen, dass beide Funktionen exakt
        gleich funktionieren und das selbe tun, allerdings gibt es einen großen
        technischen Unterschied. Wie oben bereits erwähnt, ist die obere
        Funktion (egal mit welcher der beiden Schreibweisen) wesendlich
        Flexibler. Im oberen beispiel haben wir eine Funktion, die eine Zahl
        verdoppeln soll. Die 2 ist hierbei ein fixer Wert in der Variable
        double, allerdings ist die 5 jederzeit ersetzbar. In der unteren
        Funktion hingegen sind beide Zahlen feste Werte, daher erzeugt double
        immer das selbe ergebnis.
      </p>
      <pre className="text-sm">
        <code>
          // Obere Funktion kann so genutzt werden, die 2 ist immer vorbestimmt
          <br />
          double(5)
          <br />
          double(6)
          <br />
          double(127)
          <br />
          <br />
          // Untere Funktion hingegen muss so genutzt werden, beide Zahlen
          müssen immer wieder gesetzt werden
          <br />
          const sum1 = func1(2, 5)
          <br />
          sum1()
          <br />
          const sum2 = func1(2, 6)
          <br />
          sum2()
          <br />
          const sum2 = func1(2, 127)
          <br />
          sum3()
        </code>
      </pre>
      <p>
        Weniger wichtige Punkte wären, dass Function 2 mehr Speicher benötigt
        und die äußere Function keine Pure Function wäre. Diese Variante nennt
        sich Closure!
      </p>
      <h2 className="font-extrabold text-2xl">Callback</h2>
      <p>
        Wie bereits beschrieben ist eine Callback Function, die Funktion, die an
        eine andere Funktion als Argument übergeben wird. Diese kann dann
        innerhalb der Hauptfunktion aufgerufen werden. Benötigt werden Callbacks
        besonders bei asynchronen Operationen, wie beispielsweise dem
        Event-Handling, Array-Methoden und API-Abfragen. Die Vorteile von
        Callbacks sind, das Code nicht blockierend ausgeführt wird, dynamische
        Anpassung von Funktionen und sie steigern die Wiederverwendbarkeit von
        Funktionen.
      </p>
      <p>
        Diese funktion lässt sich durch die Verwendung verschiedener Callbacks
        entsprechend anpassen. greet1() für "Hallo" oder greet2() für "Hi"
      </p>
      <pre className="text-sm">
        <code>
          function createGreeting(
          <span className="text-blue-500">callback</span>,
          <span className="text-green-500"> name</span>) &#123;
          <br />
          &#9;<span className="text-blue-500">callback</span>(
          <span className="text-green-500">name</span>);
          <br />
          &#125;
          <br />
          <br />
          function <span className="text-blue-500">greet1</span>(
          <span className="text-green-500">name</span>) &#123;
          <br />
          &#9;console.log("Hallo, " +
          <span className="text-green-500"> name</span> + "!");
          <br />
          &#125;
          <br />
          <br />
          function <span className="text-blue-500">greet2</span>(
          <span className="text-green-500">name</span>) &#123;
          <br />
          &#9;console.log("Hi, " +<span className="text-green-500">
            {" "}
            name
          </span>{" "}
          + "!");
          <br />
          &#125;
          <br />
          <br />
          // Output: Hallo, Max!
          <br />
          createGreeting(<span className="text-blue-500">greet1</span>, "
          <span className="text-green-500">Max</span>");
          <br />
          <br />
          // Output: Hi, Lisa!
          <br />
          createGreeting(<span className="text-blue-500">greet2</span>, "
          <span className="text-green-500">Lisa</span>");
        </code>
      </pre>
      <p>
        Achtung: Es gibt die sogenannte Callback Hell. Die Callback Hell sollte
        tunlichst vermieden werden. Doch was genau ist die Callback Hell? Naja
        wir können Callbacks ineinerander verschachteln, wie bei normalen
        Funktionen, wird das recht schnell unübersichtlich. Allerdings ist das
        nicht der einzige Grund, weshalb wir dies vermeiden sollte. Auch laufen
        wir dadurch Gefahr, dass sich Code gegenseitig behindert, auch wenn
        Callbacks asynchrones Verhalten handhaben können, gibt es bei
        Asynchronem Code keine Garantie in welcher Reihenfolge dieser ausgeführt
        wird. Außerdem kommen wird hier auch wieder zum Punkt Callstack...
      </p>
      <h2 className="font-extrabold text-2xl">
        Array Methoden - Map, Filter, Reduce, Sort und Find
      </h2>
      <br />
      <ul>
        <li>
          Map, Filter und Sort geben immer ein neues Array zurück, erstellen
          also eine shellow copy.
        </li>
        <li>
          Während Filter, alle passenden Items in einem Array zurück gibt, gibt
          find nur das 1. gefundene Item zurück (von links nach rechts)
        </li>
        <li>
          reduce reduziert, wie der Name schon sagt, mehrere Werte auf einen
          Wert. Ein gutes Beispiel ist berechne die Quersumme, Summe, den
          Durchschnitt usw.
        </li>
        <br />
        <ul className="text-lg">
          <li>users.map( (user, i ) =&gt; ...)</li>
          <li>users.filter((user) =&gt; user.name === "Max")</li>
          <li>users.reduce( (accumulator, current ) =&gt; ...)</li>
          <li>users.find( (user) =&gt; user.name === "Max")</li>
          <li>users.sort( (a, b ) =&gt; a - b)</li>
        </ul>
      </ul>
      <br />
      <pre className="text sm">
        <code>
          // Die <span className={highlights.errorCode}>Klammern</span> sind
          wichtig, wenn mehr als ein Parameter vorhanden ist, bei genau einem
          Parameter ist sie optional.
          <br />
          // Dies gilt für aller der hier genannten Methoden! (nicht nur map)
          <br />
          // Diese Methoden unterliegen den Regeln der Arrow Function () =&gt;
          <br />
          // bei kurzer Logik, kann man die Klammern weglassen und Einzeiler
          sofort returnen
          <br />
          arr.map(<span className={highlights.errorCode}>(</span>user, index
          <span className={highlights.errorCode}>)</span> =&gt; &#123; &#125;)
          <br />
          arr.map(<span className={highlights.errorCode}>(</span>user
          <span className={highlights.errorCode}>)</span> =&gt; &#123; &#125;)
          <br />
          arr.map(user =&gt; &#123; &#125;)
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">MAP</h3>
      <p>
        Die Map Methode wird verwendet, wenn jedes Element eines Arrays auf die
        selbe Art verändert werden soll. Zum Beispiel soll jede zahl verdoppelt
        werden, jeder String mit einem * beginnen oder jedem Objekt ein neuer
        Key hinzugefügt werden. Dafür nutzen wir die Map Methode. Bisher haben
        wir die Map Methode immer selbst gebaut mit Hilfe einer klassischen For
        Loop.
      </p>
      <ul>
        <li className="text-lg">
          Map kann bis zu 3 festgelegte Parameter haben
        </li>
        <li className="text-lg">arr.map((elem, i, arr) =&gt;)</li>
        <li>
          <span className={highlights.errorCode}>
            element (das aktuell zu bearbeitende Item)
          </span>{" "}
          - Wird IMMER benötigt!
        </li>
        <li>
          <span className={highlights.file}>
            index (den Index des aktuellen Items)
          </span>{" "}
          - Wird gelegentlich benötigt!
        </li>
        <li>
          array (das von map aufgerufene Array) - Wird sogut wie nie benötigt!
        </li>
      </ul>
      <br />
      <pre className="text-sm">
        <code>
          // Map mit klassischer For Loop
          <br />
          const doubled = [];
          <br />
          for (let i = 0; i &lt; numbers.length; i++) &#123;
          <br />
          &#9;doubled.push(numbers[i] * 2);
          <br />
          &#125;
          <br />
          console.log(doubled); // [2, 4, 6, 8, 10]
          <br />
          <br />
          // Die .map() Methode
          <br />
          const numbers = [1, 2, 3, 4, 5];
          <br />
          const doubled = numbers.map(num =&gt; num * 2);
          <br />
          console.log(doubled);
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">Filter</h3>
      <p>
        Mit der Filter Methode erhalten wir ein neues Array mit nur den Daten,
        die den Bedingungen des Filters entsprechen. Dies benötigen wir sehr
        oft, als Beispiel bei Filtereinstellungen auf Webseiten. Zeige mir nur
        Hotels an zwischen Summe x und y.
      </p>
      <ul>
        <li className="text-lg">
          Filter kann bis zu 3 festgelegte Parameter haben
        </li>
        <li className="text-lg">arr.map((elem, i, arr) =&gt;)</li>
        <li>
          <span className={highlights.errorCode}>
            element (das aktuell zu bearbeitende Item)
          </span>{" "}
          - Wird IMMER benötigt!
        </li>
        <li>
          <span className={highlights.file}>
            index (den Index des aktuellen Items)
          </span>{" "}
          - Wird gelegentlich benötigt!
        </li>
        <li>
          array (das von map aufgerufene Array) - Wird sogut wie nie benötigt!
        </li>
      </ul>
      <br />
      <pre className="text-sm">
        <code>
          // Filter mit der klassischen For Loop
          <br />
          const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          <br />
          const filteredNums = [];
          <br />
          for (let i = 0; i &gt; numbers.length; i++) &#123;
          <br />
          &#9;if (numbers[i] % 2 === 0) &#123;
          <br />
          &#9;&#9;filteredNums.push(numbers[i]);
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          // Output: [2, 4, 6, 8, 10] console.log(evensLoop);
          <br />
          <br />
          // Die Filter Methode
          <br />
          const evens = numbers.filter(num =&gt; num % 2 === 0);
          <br />
          console.log(evens);
        </code>
      </pre>

      <h3 className="font-extrabold text-xl">Reduce</h3>
      <p>
        Reduce ist tatsächlich etwas schwieriger zu verstehen. Reduce selbst
        benötig IMMER den Accumulator und das CurrentItem. Hierbei wird im
        Accumulator immer das gespeichert, was gesucht wird zum Beispiel die
        bisher kleinste, größe Zahl oder die bisher berechnete Gesamtsumme,
        Durchschnitt oder Quersumme. In CurrentItem hingegen befindet sich das
        aktuelle Item, das überprüft werden soll.
      </p>
      <p>
        Als kleines Beispiel suchen wir die kleinste Zahl in einem Array. Dann
        wird im Accumulator, die bisher kleinste Zahl gespeichert und nur dann
        ersetzt, wenn eine kleinere gefunden wird. das currentItem wird
        überprüft, ob diese kleiner ist als die im Accumulator gespeicherte.
        <br />
        <span className={highlights.errorCode}>
          WICHTIG: der Accumulator (acc) MUSS jedesmal returned werden!
        </span>
      </p>
      <ul>
        <li className="text-lg">
          Reduce kann bis zu 3 festgelegte Parameter haben
        </li>
        <li className="text-lg">arr.map((acc, curr, i) =&gt;)</li>
        <li>
          <span className={highlights.errorCode}>
            accumulator (der akutelle Wert, der das bisherige Ergebnis ist)
          </span>{" "}
          - Wird IMMER benötigt!
        </li>
        <li>
          <span className={highlights.errorCode}>
            currentValue (der aktuelle Wert aus dem Array, der
            überprüft/bearbeitet werden soll)
          </span>{" "}
          - Wird IMMER benötigt!
        </li>
        <li>
          currentIndex (der index des aktuellen Werts, der überprüft/bearbeitet
          werden soll) - Wird sogut wie nie benötigt!
        </li>
      </ul>
      <br />
      <pre className="text-sm">
        <code>
          // Reduce mit klassichen For Loop
          <br />
          const numbers = [1, 2, 3, 4, 5]
          <br />
          let sum = 0;
          <br />
          for (let i = 0; i &lt; numbers.length; i++) &#123;
          <br />
          &#9; sum += numbers[i];
          <br />
          &#125;
          <br />
          // Summe = 15
          <br />
          console.log(sum);
          <br />
          <br />
          // Reduce Methode
          <br />
          const sum = numbers.reduce((acc, curr) =&gt; acc + curr, 0);
          <br />
          console.log(sum);
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">Find</h3>
      <p>
        Find durchläuft das Array bis der erste Wert gefunden wird, der der
        Bedingung entspricht und gibt diesen aus.
      </p>
      <pre className="text-sm">
        <code>
          // Find mit der klassichen For Loop und Break const numbers = [0, 4,
          3, 1, 2, 5]
          <br />
          let foundLoop = null;
          <br />
          for (let i = 0; i &lt; numbers.length; i++) &#123;
          <br />
          &#9;if (numbers[i] &gt; 3) &#123;
          <br />
          &#9;&#9; foundLoop = numbers[i];
          <br />
          &#9;&#9; break;
          <br />
          &#9; &#125;
          <br />
          &#125;
          <br />
          // Output ist 4, auch wenn die 5 ebenfalls größer ist (links nach
          rechts bis zum 1. Treffer)
          <br />
          console.log(foundLoop);
          <br />
          <br />
          // Find Methode
          <br />
          const found = numbers.find(num =&gt; num &gt; 3);
          <br />
          console.log(found);
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">Sort</h3>
      <p>
        Sort sortiert ein Array in dem es a und b mit einander vergleicht und
        gegebenenfalls deren position im Array tauscht.
      </p>
      <pre className="text-sm">
        <code>
          // Sortieralgorithmus mit einer klassischen For Loop
          <br />
          const sortedLoop = [32, 21, 45, 10, 50]
          <br />
          for (let i = 0; i &lt; sortedLoop.length; i++) &#123;
          <br />
          &#9;for (let j = 0; j &lt; sortedLoop.length - 1; j++) &#123;
          <br />
          &#9;&#9; if (sortedLoop[j] &gt; sortedLoop[j + 1]) &#123;
          <br />
          &#9;&#9;&#9; [sortedLoop[j], sortedLoop[j + 1]] = [sortedLoop[j + 1],
          sortedLoop[j]];
          <br />
          &#9;&#9; &#125;
          <br />
          &#9; &#125;
          <br />
          &#125;
          <br />
          console.log(sortedLoop); // [10, 21, 32, 45, 50]
          <br />
          <br />
          // Sort Methode
          <br />
          const unsortedArr = [10, 21, 32, 45, 50]
          <br />
          const sorted = unsortedArr.sort((a, b) =&lt; a - b);
          <br />
          console.log(sorted); // [10, 21, 32, 45, 50]
        </code>
      </pre>
    </article>
  );
};
