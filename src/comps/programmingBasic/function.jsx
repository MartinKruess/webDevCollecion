export const Function = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Function in Javascript</h2>
      <p className="pt-4 pb-2">
        Unter einer Funktion kann man sich einen Bereich vorstellen, in dem der
        Code ignoriert wird bis diese Funktion aufgerufen wird.
      </p>
      <div className="pt-4 pb-2">
        Es gibt Funktionen, die Eingabewerte, auch Parameter genannt, benötigen
        wie <span className="code">arr.slice(parameter1, parameter2)</span>{" "}
        wiederum andere Funktionen benötigen keine Parameter wie in diesem
        Beispiel: <span className="code">arr.pop()</span>
        Wir haben bereits einige Funktionen kennengelernt, die zu diesen Gruppen
        gehören.
        <ul>
          <li>string.includes()</li>
        </ul>
      </div>
      <div className="pt-4 pb-2">
        Nicht jede Funktion braucht Parameter, oft ist eine Funktion nur ein
        Ausgelagerter Code, der nur in bestimmten Situationen angewendet werden
        soll. So eine Situation kann ein click, hover oder eine Eingabe sein.
      </div>
      <h3 className="mt-8 font-extrabold text-xl">Function Declaration</h3>
      <p>
        Die klassischen Functions werden zum Beispiel in Verbindung mit Klassen
        (classes) verwendet. Hierbei wird die Function als ConstructorClass zum
        Beispiel mit dem Keyword 'super' verwendet. Siehe unter 'Klassen'! Auch
        ist die Verwendung von arguments und this in normalen Functions möglich.
      </p>
      <div className="code">
        <pre>
          <code>
            function getRandomNumber () &#123;
            <br />
            &#9;const randomNumber = Math.floor(Math.random() * 9)
            <br />
            &#9;return randomNumber
            <br />
            &#125;
            <br />
            <br />
            function calcSum (p1, p2) &#123;
            <br />
            &#9;const sum = p1 * p2
            <br />
            &#9;return sum <br />
            &#125;
            <br />
            <br />
            const nextNumer = calcSum(2, 3) + getRandomNumber()
            <br />
            console.log(nextNumber)
          </code>
        </pre>
      </div>
      <h3 className="mt-8 font-extrabold text-xl">Function Expression</h3>
      <p>
        Seit ES6 gab es auch bei den Funktionen eine Veränderung. Die Klassische
        Funktion wurde an die Vorgaben von ES6 angepasst und es entspand eine
        spezielle Art der Funktion, die Arrow-Function.
      </p>
      <div className="code">
        <pre>
          <code>
            const myFunction = function (p3) &#123;
            <br />
            &#9;return = Number(p3) <br />
            &#125;
          </code>
        </pre>
      </div>
      <h3 className="mt-8 font-extrabold text-xl">Arrow Function</h3>
      <p>
        Die Arrow-Function ist die beliebteste Art eine Funtion zu schreiben.
        Arrow-Function bieten eine kompakte Syntax und eine Kurzschreibweise
        (Einzeiler), die das Schreiben von Funktionen vereinfacht.
      </p>
      <p className="code">
        const arrow = () =&gt; true ? 'true' : 'false'
      </p>
      <p>
        Callbacks Ein weiterer Vorteil ist die automatische Bindung des
        'this'-Wertes, wodurch der Wert nicht durch den Kontext der Funktion
        geändert wird.
      </p>
      <div className="code">
        <pre>
          <code>
            const myFunction = (p3) =&gt; &#123;
            <br />
            &#9;return = Number(p3) <br />
            &#125;
          </code>
        </pre>
      </div>
      <h3 className="mt-8 font-extrabold text-xl">
        Die Wiederverwendbarkeit von Code
      </h3>
      <p>
        Eine gute Praxis ist es Code so wiederverwendbar wie möglich aufzubauen.
        Functions sind eine gute Variante um dies umzusetzen. Eine Function
        sollte daher so simpel wie möglich aufgebaut sein und es sollte nach
        Möglichkeit nur ein Feature in einer Function sein.
      </p>
      <div className="code">
        <pre>
          <code>
            const string = "abcdefghijklmnopqrstuvwxyz"
            <br />
            <br />
            const getRandomNumber = (multiplicator) =&gt; &#123;
            <br />
            &#9;return = Math.floor(Math.round() * multiplicator) <br />
            &#125;
            <br />
            <br />
            const getRandomLetter = (index) =&gt; &#123;
            <br />
            &#9;return = string[index] <br />
            &#125;
            <br />
            // get the Indexes of the chars of the string
            <br />
            const randomNumber = getRandomNumber(string.lengh-1)
            <br />
            const randomLetter = getRandomLetter(randomNumber)
            <br />
            console.log(randomLetter)
          </code>
        </pre>
      </div>
      <p>
        Natürlich kann man sich die getRandomNumber Function auch sparen und die
        eine Zeile Code innerhalb der getRandomLetter Function schreiben. Der
        Vorteil an der Aufteilung, des Codes auf 2 Functions, ist die
        Wiederverwendbarkeit. Dadurch kann ich die getRandomNumber nicht nur für
        die getRandomLetter Function sondenr auch für andere Functions,
        Variablen oder Loops verwenden.
      </p>
    </article>
  );
};
