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
      <pre>
        Der setTimeout wird aufgerufen, der Callback springt zurück in den
        Hauptcode und der Timer läuft im Hintergrund weiter, bis dieser
        Ausgelöst wird.
        <br />
        <br />
        <code>
          console.log("Start")
          <br />
          <br />
          setTimeout(() =&gt; &#123;
          <br />
          &#9;console.log("Timer ist abgelaufen!")
          <br />
          &#125;, 2000);
          <br />
          <br />
          console.log("Ende")
          <br />
        </code>
      </pre>
      <div className='flex flex-wrap justify-around text-lg'>
        <a
          href='https://www.heise.de/hintergrund/Einfuehrung-in-die-asynchrone-JavaScript-Programmierung-2752531.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Asynchrone Programmierung (Simple)
        </a>
      </div>
      <h3 className='font-extrabold text-xl'>
        Besonderheiten von Asynchronem Code?
      </h3>
      <p>
        In Javascript befinden wir uns immer auf dem Main-Thread. Unter dem
        Begriff Thread versteht man einen Arbeitsprozess oder eine
        Verarbeitungs-Spur. Das bedeutet, dass Javascript, Prozesse nicht
        wirklich parallel verarbeitet. Oft wirkt es, als würde JS das
        Multithreading nutzen, allerdings ist JS im Gegensatz zu echten
        Multithread-Sprachen doch sehr begrenzt. Hier ist zeigen wir an dem
        obrigem Beispiel das JS zwar mit mehren Threads arbeitet, dein
        geschriebener Code jedoch immer nur auf dem Main-Thread läuft.
      </p>
      <pre>
        Beweis für den Main-Thread
        <br />
        <br />
        <code>
          console.log("Start")
          <br />
          <br />
          setTimeout(() =&gt; &#123;
          <br />
          &#9;console.log("Timer ist abgelaufen!")
          <br />
          &#125;, 20);
          <br />
          <br />
          console.log("Ende")
          <br />
          for (let i = 0; i &lt; 10000000; i++) &#123;
          <br />
          // Do nothing
          <br />
          &#125;
          <br />
        </code>
      </pre>
      <p>
        In diesem beispiel hat man sehr gut gesehen, dass der Timer zwar nach 20
        Millisekunden ausgelöst werden sollte, dies jedoch erst nach dem Beenden
        der Funktion geschah.
      </p>
      <h4 className='font-extrabold text-lg'>Doch warum ist das so?</h4>
      <p>
        Die Gründe hierfür sind:
        <br />
        1. Die Funktion (Bürger erster Klasse): Funktionen werden niemals für
        anderen Code unterbrochen, da diese als 'Bürger erster Klasse' behandelt
        werden und dadurch eine höhere Priorität genießen als nicht
        Funktioneller Code.
        <br />
        2. Der Main-Thread: Auf dem Main-Thread läuft aktuell diese Funktion und
        erst nach der Beendigung dieser, wird der Timer zum neuen Main-Thread.
        Auch wenn es oft so wirkt, als würde unser Code bestimmte Prozesse
        (Async) parallel verarbeiten ist dem nicht so. Der Grund hierfür ist der
        Callback. In diesem Fall wird der Timer gestarte und sofort über die
        Callback verlassen (Fire and Forget) ab jetzt kümmert sich die
        sogenannte Event Loop darum, dass der Code ausgeführt wird, sobald
        dieser ausgeführt werden kann.
        <br />
        3. Asynchoner Code wird automatisch in die Warteschlange gesetzt bis
        dieser ausgeben werden kann oder getriggert wird. Mit der Beendigung des
        Hauptcodes (Main-Thred) wird automatisch der getriggerte oder
        auszuführnde Code zum neuen Main Thread, während der nicht aufgerufene
        Code weiterehin in der Warteschange wartet. Asynchrone Beispiele die wir
        bisher kennen sind
        <span className={highlights.code}> setTimeout</span>,
        <span className={highlights.code}> addEventListener</span> und
        <span className={highlights.code}> Fetch</span>.
      </p>
      <p>
        <span className={highlights.errorCode}>
          Daher ist es wichtig zu wissen, dass die 20 Millisekunden des Timers
          nicht bedeutet, dieser wird nach 20 Millisekunden ausgeführt und
          beendet, sondern nach frühestens 20 Millisekunden kann der Timer
          ausgeführt und beendet werden!
        </span>
      </p>
      <h3 className='font-extrabold text-xl'>Was ist ein Promis?</h3>
      <p>
        Ein <span className={highlights.code}>Promise</span> wird immer dann
        erzeugt, wenn asynchroner Code verwendet wird. Das bedeutet es wird aus
        irgedneinem Grund auf die Antwort gewartet. Gründe hierfür können Ajax-
        oder Fetch-Abfragen, Timer (setTimeout..) oder Callbacks sein.
      </p>
      <p>
        Der Begriff <span className={highlights.code}>Promise</span> kann man
        sich im groben als ein Versprechen vorstellen. Das bedeutet wann immer
        etwas einen <span className={highlights.code}>Promise</span> zurück
        gibt, wird ein Versprechen gegeben, die Daten schnellstmöglich zu
        liefern. Da wir programmiertechnisch nichts mit einem Versprechen
        anfangen können ist es wichtig, dass dies als Asynchroner-Code behandelt
        wird, bis die Daten da sind.
      </p>
      <img src='' alt='' />
      <h3 className='font-extrabold text-xl'>
        Anwendungsbeispiel für Asynchronem-Code
      </h3>
      <p></p>
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
