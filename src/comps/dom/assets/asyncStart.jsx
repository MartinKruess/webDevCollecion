export const AsyncStart = () => {
  return (
    <>
      <h3 className="font-extrabold text-xl">
        Wo ist der Unterschied zwischen Synchoner und Asynchroner Code?
      </h3>
      <p>
        Asynchrone Programmierung ist ein Begriff aus der Webprogrammierung. Die
        asynchrone Programmierung, die durch Sprachen wie etwa Javascript oder
        Typescript möglich ist, erlaubt es, Programme zu schreiben, bei denen
        die einzelnen Aufgaben nicht mehr hintereinander, sondern parallel
        gelöst werden. Während sich eine Aufgabe in Bearbeitung befindet, laufen
        bereits Prozesse an einer anderen. Somit muss nicht abgewartet werden,
        bis eine Aufgabe erledigt ist, um mit einer neuen Aufgabe zu beginnen.
        Das Programm wechselt zwischen den Aufgaben, bis alle beendet sind.
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
    </>
  );
};
