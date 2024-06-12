import { highlights } from '../../App';

export const Datentypen = () => {
  return (
    <article className='p-4'>
      <h2 className='font-extrabold text-2xl'>
        Die unterschiedlichen Datentypen in JS
      </h2>
      <p>
        Bei der Deklaration und Definition von Variablen wurden bereits
        verschiedene Daten­typen vorgestellt, ebenso wie mit{' '}
        <span className={highlights.code}>typeof</span> der Typ des Wertes einer
        Variable ermittelt werden kann. Im Gegensatz zu einer Programmiersprache
        wie C, geht JavaScript recht locker mit den unterschiedlichen Datentypen
        um. So erfolgt die Zuweisung eines Datentyps bei der Initialisierung
        einer Variablen automatisch bzw. wird durch die Syntax vorgeben.
        Weiterhin kann der Datentyp des Wertes einer Variablen relativ leicht
        verändert werden, insofern es die Abarbeitung eines Scripts oder die
        Programmausführung verlangt.
      </p>
      <p>
        Je nach Einteilung wird zwischen primitiven Datentypen und
        referenzierten Daten­typen unterschieden, wobei sich die Einteilungen
        etwas unterscheiden. So erfolgt im MSDN (Microsoft Developer Network)
        zum Beispiel eine Unterteilung der primitiven Datentypen in primäre und
        spezielle Datentypen, wobei zu letzten die Datentypen Null und Undefined
        gezählt werden.
      </p>
      <h3 className='font-extrabold text-xl'>Primitive Datentypen</h3>
      <p>
        Zu den primitiven Datentypen gehört einfache Typen wie Zeichenketten
        (String), Zahlen (Number), Wahrheitswerte (Boolean), Null (null) und
        Undefined (undefined). Diese Datentypen sind unveränderlich und werden
        als Werttypen bezeichnet. Das bedeutet, dass die Werte dieser Datentypen
        direkt im Speicher abgelegt werden.
      </p>
      <pre>
        <code>
          const myString = 'Hello World';
          <br />
          const myNumber = 123;
          <br />
          const myBoolean = true;
          <br />
          const myNull = null;
          <br />
          // Don't do this 😟
          <br />
          const myUndefined = undefined;
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Referenzierte Datentypen</h3>
      <p>
        Zu den referenzierten Datentypen gehören komplexe Typen wie Objekte,
        Arrays, Funktionen und Reguläre Ausdrücke. Diese Datentypen sind
        veränderlich und werden als Referenztypen bezeichnet. Das bedeutet, dass
        die Werte dieser Datentypen als Referenz im Speicher abgelegt werden.
      </p>
      <pre>
        <code>
          const myObject = &#123; name: 'Max', age: 30 &#125;;
          <br />
          const myArray = [1, 2, 3];
          <br />
          const myFunction = function() &#123; return 'Hello World'; &#125;;
          <br />
        </code>
      </pre>
      <h2 className='font-extrabold text-2xl'>Pointer</h2>
      <p>
        Zu den primitiven Datentypen gehören string, number, boolean, null und
        undefined.
      </p>
      <h3 className='font-extrabold text-xl'>Was ist ein Pointer?</h3>
      <p>
        Ein Pointer ist eine Variable, die die Speicheradresse eines anderen
        Objekts oder einer anderen Variable enthält. In JavaScript gibt es keine
        expliziten Pointer wie in C oder C++, aber die Referenz auf ein Objekt
        ist ein Pointer.
      </p>
      <ul>
        <li>
          1. Im unteren Beispiel sieht man wie die
          <span className={highlights.file}> Variable firstPerson </span> auf
          den im Speicher hinterlegten
          <span className={highlights.directory}> Wert "Lisa" </span> vom
          <span className={highlights.errorCode}> Type String </span> verweist.
        </li>
        <li>
          2. Die
          <span className={highlights.file}> Variable secondPerson </span> zeigt
          auf <span className={highlights.file}> firstPerson </span> und hat
          somit den gleichen Wert.
          <br />
          <span className={highlights.errorCode}>
            WICHTIG: Da der Wert bereits im Speicher angelegt wurde, wird dieser
            nicht erneut angelegt!
          </span>
        </li>
        <li>
          3. Nun verändern wir den Wert von{' '}
          <span className={highlights.file}>secondPerson</span> auf
          <span className={highlights.directory}> "Jacob"</span>. Für diesen
          Wert wird ein neuer Speicherplatz angelegt.
        </li>
      </ul>

      <div className='imgContainer p-0 my-3'>
        <img
          className='imgHeight'
          onClick={() => setIsWatched('variable')}
          src='./images/variablePointer.png'
          alt='Image about if and nested if´s'
        />
      </div>
      <h3 className='font-extrabold text-xl'>Pointer auf Objekte</h3>
      <p>
        Zu den referenzierten Datentypen gehören komplexe Typen wie Objekte,
        Arrays, Funktionen und Reguläre Ausdrücke. Diese Datentypen sind
        veränderlich und werden als Referenztypen bezeichnet. Das bedeutet, dass
        die Werte dieser Datentypen als Referenz im Speicher abgelegt werden.
      </p>
      <ul>
        <li>
          1. Im unteren Beispiel sehen wir verschiedene Objekte.
          <span className={highlights.file}> Objekt userObj </span>
          zeigt auf das im Speicher hinterlegte
          <span className={highlights.directory}> Objekt </span> mit den einigen
          Eigenschaften.
        </li>
        <li>
          2. Das zweite
          <span className={highlights.file}> Objekt userObj2 </span> zeigt auf{' '}
          <span className={highlights.file}> userObj </span> und hat somit das
          gleiche Objekt als Wert.
          <br />
          <span className={highlights.errorCode}>
            WICHTIG: Hierbei wird wirklich das selbe Objekt referenziert und
            nicht ein neues Objekt angelegt! Das bedeutet, dass wenn wir das
            Objekt verändern, die Änderungen in beiden Variablen sichtbar sind.
          </span>
        </li>
        <li>
          3. Nun verändern wir den Wert von
          <span className={highlights.file}> userObj2 </span> auf ein neues
          Objekt mi den selben Werten wie das Objekt von userObj1. Obwohl die
          Werte im inneren des Objektes gleich sind, wird ein neues Objekt im
          Speicher angelegt.
        </li>
        <li>
          <span className={highlights.errorCode}>
            WICHTIG: Auch wenn beide Objekte die gleichen Werte beinhalten, sind
            es voneinander unabhänge Objekte. Das bedeutet, dass Änderungen in
            einem Objekt keine Auswirkungen auf das andere Objekt haben!
          </span>
        </li>
      </ul>
      <div className='heightContainer p-0 my-3'>
        <img
          className='imgHeight'
          onClick={() => setIsWatched('object')}
          src='./images/objectPointer.png'
          alt='Image about if and nested if´s'
        />
      </div>
      <h3 className='font-extrabold text-xl'>Lösung durch Spread-Operator</h3>
      <div className='imgContainer p-0 my-2'>
        <img
          className='imgHeight'
          onClick={() => setIsWatched('copy')}
          src='./images/objectCopyPointer.png'
          alt='Image about if and nested if´s'
        />
      </div>
    </article>
  );
};
