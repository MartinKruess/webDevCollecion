import { highlights } from "../../App";

export const Callstack = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">Der Callstack</h2>
      <p class="text-lg">
        Der sogenannte Callstack ist ein Stapel an aufgerufenen Funktionen und
        anderen Anweisungen und deren Reihenfolge der Bearbeitung. Zur
        veranschaulichung stellen wir uns einen Stapel Notizzettel vor, die nach
        und nach Abgearbeitet werden.
      </p>
      <pre>
        <code>
          function func1() &#123;
          <br />
          &#9;console.log("Funktion 1 gestartet!")
          <br />
          &#9;<span className={highlights.errorCode}>func2()</span>
          <br />
          &#9;console.log("Funktion 1 beendet!")
          <br /> &#125;
          <br />
          <br />
          function func2() &#123;
          <br />
          &#9;console.log("Funktion 2 gestartet!")
          <br />
          &#9;<span className={highlights.errorCode}>func3()</span>
          <br />
          &#9;console.log("Funktion 2 beendet!")
          <br />
          &#125;
          <br />
          <br />
          function func3() &#123;
          <br />
          &#9;console.log("Funktion 3 gestartet!")
          <br />
          &#9;console.log("Funktion 3 beendet!")
          <br />
          &#125;
        </code>
      </pre>
      <p className="text-lg">
        In diesem Beispiel wird in der Console zuerst Funktion1 gestartet,
        anschließend Funktion2 und Funktion3, bevor diese in der umgekehrten
        Reihenfolge wieder beendet werden. Das ist der Callstack. Beim bauen von
        verschachtelten Logiken ist es sehr wichtig, den Callstack im Auge zu
        behalten, denn innereinader verschaltete Funktionen sind unter Umständen
        nicht performant.
      </p>
      <h3 className="font-extrabold text-xl">
        Hier ein weiteres kleines Beispiel zur Verdeutlichung des Problems.
      </h3>
      <pre>
        <code>
          function printSum() &#123;
          <br />
          &#9;const numbers = [0,1,2,3,4... 100400, 100401..., 10000000000]
          <br />
          &#9;let sum = 0
          <br />
          <span className={highlights.directory}>
            &#9;function addOneToEach() &#123;
            <br />
            <span className={highlights.file}>
              &#9;&#9;for (let i = 0; i &lt; numbers.length; i++) &#123;
              <br />
              &#9;&#9;&#9;sum += numbers[i] + 1
              <br />
              &#9;&#9;&#125;
            </span>
            <br />
            &#9;&#125;
          </span>
          <br />
          <span className={highlights.errorCode}>&#9;console.log(sum)</span>
          <br />
          &#125;
        </code>
      </pre>
      <p className="text-lg">
        In der ersten Funktion steht ein großes Array mit Zahlen von
        0-10.000.000.000 und die Funktion printSum ruft eine weitere Funktion
        addOneToEach auf. Innerhalb von addOneToEach ist eine sehr aufwenige
        Aufgabe, diese Funktion muss nun 10mrd mal etwas berechnen, das dauert
        Zeit. Eine CPU schafft ungefähr 3mrd Berechnungen in einer Sekunde, das
        bedeutet unsere addOneToEach Funktion benötigt rund 3 Sekunden, bis sie
        fertig ist. Das Probelm dabei ist folgendes, die Funktion printSum
        wartet so lange bis die innere Funktion fertig ist, das bedeutet, erst
        wenn die orange for loop und damit die gelbe Funktion fertig ist, wird
        das rote console.log ausgeführt. Auf einer Webseite können 3 Sekunden
        Wartezeit für einen Benutzer sehr sehr lang sein, wenn dieser auf ein
        Ergebnis wartet oder gar darauf, dass die Seite weiter aufgebaut wird.
      </p>
      <h3 className="font-extrabold text-xl">Fazit</h3>
      <p>
        Der Callstack besagt, die Funktion, die als letztes aufgerufen wurde,
        wird als erstes wieder geschlossen. Achte also darauf, Funktionen nicht
        zu sehr zu verschachteln und rechenintensive oder zeitlich aufwendige
        Aufgaben, erst dann auszuführen, wenn Zeit dafür ist und diese dringend
        benötigt werden! (Notwenigkeit geht vor!)
      </p>
    </article>
  );
};
