import { highlights } from "../../App";

export const Loop = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">
        Die verschiedenen Arten Schleifen
      </h2>
      <p className="pt-4 pb-2">
        Unter einer Schleife (Loop) versteht man eine abgeschlossene, sich
        selbst wiederholende Codeabfolge, die solange ausgeführt wird, bis die
        Bedingung nicht mehr <span className={highlights.code}>true</span> ist.
      </p>
      <pre>
        <code>
          for(let i = 0; i &lt; 5; i++) &#123;
          <br />
          &#9;console.log("Do something", i+1, "times")
          <br />
          &#125;
        </code>
      </pre>
      <p className="pt-2 pb-4">
        Wir unterscheiden zwischen drei verschiedenen Loops. Die wohl
        verbreiteste Schleife ist die <span className={highlights.code}>for-loop</span>, wie im obrigen Beispiel. Eine
        ältere Alternative zur for-loop ist die while loop während die do-while
        loop sich gänzlich anders verhält.
      </p>
      <div className="pt-4 pb-2">
        <h2 className="font-extrabold text-2xl pt-8">
          Die verschiedenen Art von Loops:
        </h2>
        <h3 className="font-extrabold text-xl pt-8">for und while</h3>
        <pre>
          <code>
            for(let i = 0; i &lt; 5; i++) &#123;
            <br />
            &#9;console.log(i, "ist kleiner als 5!")
            <br />
            &#125;
          </code>
        </pre>
        <pre>
          <code>
            while (let i = 0; i &lt; 5; i++) &#123;
            <br />
            &#9;console.log(i, "ist kleiner als 5!")
            <br />
            &#125;
          </code>
        </pre>
        <h3 className="font-extrabold text-xl pt-8">do-while</h3>
        <pre>
          <code>
            let i = 0<br />
            do &#123;
            <br />
            &#9;console.log(i, "ist kleiner als 5!")
            <br />
            &#125; while (i &lt; 5)
            <br />
          </code>
        </pre>
      </div>
      <h3 className="font-extrabold text-xl pt-8">Nested Loops</h3>
      <p className="pt-4 pb-2">
        Gelegentlich kommt es vor, dass man einen Nested Loop aufbauen muss.
      </p>
      <pre>
        <code>
          const quote = "Thanks God it´s Friday!"
          <br />
          const vowels = "aeiou"
          <br />
          <br />
          for(let q = 0; q &lt; quote.lenght; q++)&#123;
          <br />
          &#32;let quoteLetter = quote[q]
          <br />
          <br />
          &#32;for(let v = 0; v &lt; vowels.lenght; v++)&#123;
          <br />
          &#9;let vowelsLetter = vowels[v]
          <br />
          <br />
          &#9;if(quoteLetter === vowelsLetter)&#123;
          <br />
          &#9;&#9;console.log(quoteLetter)
          <br />
          &#9;&#125;
          <br />
          &#32;&#125;
          <br />
          &#125;
        </code>
      </pre>
      <h3 className="font-extrabold text-xl pt-8">ForIn und ForOf Loops (Objects)</h3>
      <p className="pt-4 pb-2">
        Die grundlegendste Art der Iterationsmethode in JavaScript ist die <span className={highlights.code}>for-Schleife</span>. Es sind drei Ausdrücke erforderlich; eine Variablendeklaration, eine Bedingung, die vor jeder Iteration ausgewertet wird, und eine Art Counter. Zusätzlich zu der normalen <span className={highlights.code}>for-Schleife</span> gibt es zwei weitere Arten von for-Iterationsmethoden, die wir verwenden können: <span className={highlights.code}>for-in</span> und <span className={highlights.code}>for-of</span>
      </p>
      <p>
        Die <span className={highlights.code}>for-in Loop</span> achtet auf alle aufzählbaren Eigenschaften bei Objekten und Arrays. Eine aufzählbare Eigenschaft eines Arrays sind die Adressen (der Index). So kann ein <span className={highlights.code}>for-in Loop</span> über den Index eines Arrays laufen und die dazugehörigen Werte ausgeben oder bearbeiten.
      </p>
      <pre>
        <code>
          const array = ['a', 'b', 'c', 'd'];<br /><br />

          for (const i in array) &#123;<br />
          &#9;console.log(array[i])<br />
          &#125;<br /><br />

          // Result: a, b, c, d
        </code>
      </pre>
      <p>
        Ebenfalls kann ein <span className={highlights.code}>for-in Loop</span> auf ein Object angewendet werden, da ein Objet ebenfalls einzigartige aufzählbare Adressen besitzt, diese nennen sich Key. Vor ES5 war die <span className={highlights.code}>for-in Loop</span> die einzige Möglichkeit ein Object mit einer for-loop zu durchlaufen. Dieses wurde mit ES5 durch die Objectmethode <span className={highlights.code}>Object.keys(objName)</span> abgelöst.
      </p>
      <pre>
        <code>
          const obj = &#123;firstName: "Tina", age: 21, job: "Bäckerin"&#125;<br /><br />

          for (const key in obj) &#123;<br />
          &#9;console.log(key, obj[key])<br />
          &#125;<br /><br />

          /*<br />
            &#9;Result:<br />
            &#9;firstName Tina<br />
            &#9;age 21<br />
            &#9;job Bäckerin<br />
          */
        </code>
      </pre>
      <p>
        Die <span className={highlights.code}>for-of Loop</span> verhält sich hierbei etwas anders. Die <span className={highlights.code}>for-of Loop</span> lässt sich, anders als die <span className={highlights.code}>for-in Loop</span> nur auf Arrays nicht auf Objects anwenden. Außerdem durchläuft die <span className={highlights.code}>for-of Loop</span> die Values eines Arrays und nicht die Adressen.
      </p>
      <pre>
        <code>
          const arr = ["Tina", "Jan", "Nina"]<br /><br />

          for (const arrValue of arr) &#123;<br />
          &#9;console.log(arrValue)<br />
          &#125;<br /><br />

          /*<br />
            &#9;Result:<br />
            &#9;Tina<br />
            &#9;Jan<br />
            &#9;Nina<br />
          */
        </code>
      </pre>
      <p>
        Bei der Anwendung auf ein Object muss man daher ein wenig Tricksen. Zu erst muss das Object zu einem Array umgewandetl werden. Hierfür eignen sich die ObjectMethoden: <span className={highlights.errorCode}>Object.keys(objName), Object.values(objName), Object.entries(objName)</span>
      </p>
      <pre>
        <code>
          const obj = &#123;firstName: "Jan", age: 28, job: "Hausmeister"&#125;<br />
          const valueArrFromObj = Object.values(obj)<br /><br />

          for (const value of valueArrFromObj) &#123;<br />
          &#9;console.log(value)<br />
          &#125;<br /><br />

          /*<br />
            &#9;Result:<br />
            &#9;Jan<br />
            &#9;28<br />
            &#9;Hausmeister<br />
          */
        </code>
      </pre>
      <p>
        Die Object.values() Methode generiert ein Array mit den einzelnen Values des Objects. Auf dieses lassen sich anschließend die <span className={highlights.code}>For-Of und For-In Loop</span> problemlos anwenden. Näheres hierzu findest du unter <span className={highlights.directory}>Objects -&gt; Advanced Object Methoden</span>
      </p>
      <div className="flex gap-5 pb-10 pt-5">
        <a href="https://bitsofco.de/for-in-vs-for-of/" className="px-3">
          For-In VS For-Of
        </a>
        <a
          href="https://stackabuse.com/how-to-loop-and-enumerate-javascript-object-properties/"
          className="px-3"
        >
          All about Loops
        </a>
      </div>
    </article>
  );
};
