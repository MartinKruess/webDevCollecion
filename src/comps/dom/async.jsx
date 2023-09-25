import { highlights } from "../../App";

export const Async = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>
        Synchoner und Asynchroner Code (Promis, .then, .try, .catch mit und ohne
        Aysnc)
      </h2>
      <h3 className='font-extrabold text-xl'>
        Wo ist der Unterschied zwischen Synchoner und Asynchroner Code?
      </h3>
      <p>
        Asynchrone Programmierung ist ein Begriff aus der Webprogrammierung. Die
        asynchrone Programmierung, die durch Sprachen wie etwa Vue.js oder
        Angular möglich ist, erlaubt es, Programme zu schreiben, bei denen die
        einzelnen Aufgaben nicht mehr hintereinander, sondern parallel gelöst
        werden. Während sich eine Aufgabe in Bearbeitung befindet, laufen
        bereits Prozesse an einer anderen. Somit muss nicht abgewartet werden,
        bis eine Aufgabe erledigt ist, um mit einer neuen Aufgabe zu beginnen.
        Das Programm wechselt zwischen den Aufgaben, bis alle beendet sind.
      </p>
      <p>
        Das ist echtes Multitasking und bietet eine enorme Zeitersparnis! Die
        asynchrone Programmierung setzt auf das Multithreading, dem
        gleichzeitigen Abarbeiten mit mehreren Threads. Dabei werden die
        unterschiedlichen Aufgaben des Programms auf verschiedene Threads
        verteilt, die die Programmierer zuvor definiert haben. Diese Threads
        arbeiten gemeinsam an der Aufgabe.
      </p>
      <p>
        Beispielsweise wenn ein Programm geschrieben wird, bei dem mit einer
        grafischen Oberfläche eine Datenbank verwaltet werden kann. Dafür
        schafft der Programmierer nun Threads: einen für das Interface und einen
        für die Database (Speicherung der Daten). Insbesondere bei der
        professionellen Webentwicklung bzw. der Entwicklung von Onlinesoftware
        ist dies bei synchroner Programmierung nicht möglich. Die asynchrone
        Programmierung hat insofern den entscheidenden Vorteil, dass die
        Ladezeit der Webapplikationen stark verringert werden und die Programme
        oder Webseiten nicht mehr so leicht abstürzen.
      </p>
      <div className='flex flex-wrap justify-around text-lg'>
        <a
          href='https://www.heise.de/hintergrund/Einfuehrung-in-die-asynchrone-JavaScript-Programmierung-2752531.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Asynchrone Programmierung (Simple)
        </a>
        <a
          href='https://www.heise.de/hintergrund/Einfuehrung-in-die-asynchrone-JavaScript-Programmierung-2752531.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          ...
        </a>
      </div>
      <h3 className='font-extrabold text-xl'>Was ist ein Promis?</h3>
      <p>
        Ein <span className={highlights.code}>Promise</span> wird immer dann
        erzeugt, wenn
      </p>
      <p>
        Der Begriff <span className={highlights.code}>Promise</span> kann man
        sich im groben als ein Versprechen vorstellen. Das bedeutet wann immer
        etwas einen <span className={highlights.code}>promise</span> zurück
        gibt, wird ein Versprechen gegeben, die Daten schnellstmöglich zu
        liefern. Da wir programmiertechnisch nichts mit einem Versprechen
        anfangen können ist es wichtig, dass dies als Asynchroner-Code behandelt
        wird, bis die Daten da sind.
      </p>
      <img src='' alt='' />
      <h3 className='font-extrabold text-xl'>
        Wie wird .then, .try, .catch angewendet?
      </h3>
      <p>.then ist ...</p>
      <h3 className='font-extrabold text-xl'>Anwendung der Keywords 'async'</h3>
      <pre>
        <code>
          const myFunction = async () =&gt; "Das ist eine Async-Function"
        </code>
      </pre>
    </article>
  );
};
