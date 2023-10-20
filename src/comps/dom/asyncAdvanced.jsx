import { highlights } from "../../App";

export const AsyncAdv = () => {
  const HE = highlights.errorCode;

  return (
    <article>
      <h2 className='font-extrabold text-2xl'>
        Hintergrundwissen über die Arbeitsweise von Javascript in Bezug auf die
        Verarbeitung von Asynchronen Ereignissen
      </h2>
      <p className='text-lg'>
        <span className={HE}>
          <strong className='pr-3'>WARNHINWEIS:</strong>
        </span>
        Diese Themen sind absolut Advanced und nicht Teil des Curriculums.
        Sollte man diese Themen nicht behandeln/verstehen, ist das überhaupt
        nicht schlimm. Dieser kleine Ausblick soll zeigen, dass hinter JS viel
        mehr steckt als man auf Anhieb sieht und bietet einen wesendlich
        tieferen Einblick in die Verarbeitung von Asynchronen Ereignissen. Die
        Erläuterungen sind sehr technisch, trocken und nicht relevant um ein
        guter Programmierer zu sein. Dennoch ist es ein interesantes Thema für
        alle, die ein tieferes Verständnis für JS erlangen wollen.
      </p>
      <p className='text-lg'>
        <span className={HE}>
          <strong className='pr-3'>Das Hauptthema ist Event-Loop:</strong>
        </span>
        Um die Event-Loop richtig verstehen zu können ist es wichtig vorab etwas
        über die Arbeitsweise von Javascript zu verstehen.
      </p>
      <hr />
      <h3 className='font-extrabold text-xl'>Was ist ein Thread?</h3>
      <p>
        JavaScript ist eine Single-Thread-Sprache, was bedeutet, dass sie
        standardmäßig nur in einem einzigen Thread (dem sogenannten Hauptthread
        oder Haupt-Event-Loop) arbeitet. Dies bedeutet, dass
        JavaScript-Anweisungen sequenziell ausgeführt werden und wenn eine
        Operation blockiert, kann dies die gesamte Ausführung verlangsamen oder
        stoppen. JavaScript bietet jedoch Mechanismen, um mit nebenläufigen
        Aufgaben und Threads umzugehen.
      </p>
      <p>
        Web Workers sind eine Möglichkeit, JavaScript-Code in separaten Threads
        auszuführen. Sie ermöglichen es, rechenintensive oder lang laufende
        Aufgaben im Hintergrund auszuführen, ohne den Hauptthread zu blockieren.
        Web Workers haben jedoch keinen Zugriff auf das DOM und kommunizieren
        mit dem Hauptthread über asynchrone Nachrichten.
      </p>
      <p>
        JavaScript verwendet häufig asynchrone Funktionen und Callbacks, um
        Aufgaben auszulagern und den Hauptthread nicht zu blockieren. Dies
        umfasst AJAX-Anfragen, Timer (z.B. setTimeout) und Promises. Diese
        Mechanismen ermöglichen es, Aufgaben in den Hintergrund zu verschieben
        und den Hauptthread für andere Aufgaben verfügbar zu halten.
      </p>
      <p>
        Service Workers sind spezielle Web Workers, die in modernen
        Webanwendungen häufig für die Hintergrundverarbeitung und das Caching
        von Ressourcen verwendet werden. Sie können Netzwerkanfragen abfangen
        und verarbeiten, um Offline-Funktionalität und bessere Leistung zu
        bieten.
      </p>
      <p>
        Insgesamt ist JavaScript selbst single-threaded, aber es gibt
        Möglichkeiten, um nebenläufige Aufgaben auszuführen und die Leistung zu
        verbessern, ohne den Hauptthread zu blockieren. Dies ist besonders
        wichtig in modernen Webanwendungen, um reaktive Benutzererfahrungen und
        eine effiziente Verarbeitung von Aufgaben zu gewährleisten.
      </p>
      <h2 className='font-extrabold text-lg'>
        Der Umgang mit Asynchronam Code
      </h2>
      <p>
        Asynchroner Code in JavaScript wird in der Regel nicht in Event-Loops
        verschoben, sondern er wird innerhalb des Haupt-Event-Loops des
        JavaScript-Runtimes ausgeführt. Der Haupt-Event-Loop ist der zentrale
        Mechanismus, der in einer JavaScript-Umgebung dafür verantwortlich ist,
        asynchrone Aufgaben zu verwalten und zu koordinieren. Dieser Event-Loop
        ist kein Web Worker, sondern ein integraler Bestandteil der
        JavaScript-Laufzeitumgebung, sei es im Browser oder auf dem Server (z.
        B. mit Node.js).
      </p>
      <ul>
        <li>
          Zuerst wird der synchronen Code in der Reihenfolge ausgeführt, in der
          er im Programm erscheint.
        </li>
        <li>
          Wenn asynchroner Code auftritt, wird er in eine Warteschlange für den
          Haupt-Event-Loop verschoben. Dieser Code kann in Form von
          Callback-Funktionen, Promises oder async/await-Ausdrücken vorliegen.
        </li>
        <li>
          Der Haupt-Event-Loop wartet darauf, dass der aktuelle synchron
          ausführbare Code abgeschlossen ist. Wenn dieser abgeschlossen ist,
          wird der asynchrone Code aus der Warteschlange abgerufen und
          ausgeführt.
        </li>
        <li>
          Nach Ausführung des asynchronen Codes wird der Haupt-Event-Loop zurück
          zur Warteschlange gehen, um auf das nächste asynchrone Ereignis oder
          die nächste Aufgabe zu warten.
        </li>
      </ul>
      <h2 className='font-extrabold text-lg'>Was ist der Event-Loop?</h2>
      <p>
        Der Event-Loop ist ein wichtiger Teil vieler Software-Systeme,
        insbesondere in Anwendungen mit grafischer Benutzeroberfläche (GUI) und
        in serverseitigen Anwendungen. Er dient dazu, auf Ereignisse zu
        reagieren und Aufgaben in einer nicht-blockierenden Art und Weise
        auszuführen, um die Effizienz und die Benutzerfreundlichkeit einer
        Anwendung zu verbessern.
      </p>
      <ul>
        <p>Im Wesentlichen funktioniert ein Event-Loop folgendermaßen:</p>
        <li>
          Der Event-Loop wartet auf das Auftreten von Ereignissen, wie
          Benutzereingaben, Netzwerknachrichten oder Timer-Events.
        </li>
        <li>
          Sobald ein Ereignis auftritt, wird der entsprechende Event Handler
          aufgerufen. Dieser enthält den Code, der in Reaktion auf das Ereignis
          ausgeführt werden soll.
        </li>
        <li>
          Während der Event-Loop auf Ereignisse wartet und Ereignisse
          verarbeitet, wird die Ausführung des Hauptprogramms nicht blockiert.
          Dies ermöglicht eine reaktive und flüssige Benutzererfahrung.
        </li>
        <li>
          Nachdem das Ereignis verarbeitet wurde, kehrt der Event-Loop zur
          Warteschleife zurück und wartet auf das nächste Ereignis.
        </li>
      </ul>
      <p>
        Der Event-Loop ist ein zentrales Konzept in vielen Programmierumgebungen
        und Frameworks. Zum Beispiel verwenden Webbrowser Event-Loops, um auf
        Benutzerinteraktionen wie Mausklicks und Tastatureingaben zu reagieren.
        Auch in vielen serverseitigen Anwendungen, insbesondere in Node.js, wird
        eine Event-Loop-Architektur verwendet, um auf asynchrone Operationen wie
        Dateizugriffe oder Netzwerkkommunikation zu reagieren.
      </p>
      <h2 className='font-extrabold text-lg'>Zusammenfassung</h2>
      <p>
        In JavaScript läuft synchroner Code und asynchroner Code auf demselben
        Haupt-Event-Loop. Der Haupt-Event-Loop ist ein Single-Thread-System, was
        bedeutet, dass alle JavaScript-Anweisungen und -Operationen, sowohl
        synchron als auch asynchron, auf diesem einen Thread ausgeführt werden.
        Die Trennung zwischen synchronem und asynchronem Code ist in der Art und
        Weise, wie JavaScript asynchrone Aufgaben behandelt. Wenn asynchroner
        Code auftritt, wird er in eine Warteschlange des Haupt-Event-Loops
        verschoben. Dies bedeutet, dass asynchroner Code nicht sofort ausgeführt
        wird, sondern darauf wartet, dass der Haupt-Event-Loop frei ist. Wenn
        der Haupt-Event-Loop keine anderen synchronen Aufgaben ausführt und
        keine blockierenden Operationen durchführt, wird der asynchrone Code aus
        der Warteschlange abgerufen und ausgeführt. Dies ermöglicht es, auf
        asynchrone Aufgaben wie Netzwerkanfragen oder Timer-Ereignisse zu
        reagieren, ohne den Haupt-Thread zu blockieren. Dadurch wird verhindert,
        dass die Benutzeroberfläche einfriert oder Verzögerungen auftreten, da
        andere Aufgaben im Haupt-Event-Loop weiterhin bearbeitet werden können.
        Der Haupt-Event-Loop ist also der zentrale Ort, an dem sowohl synchroner
        als auch asynchroner Code in JavaScript ausgeführt wird. Die Trennung
        besteht darin, wie asynchroner Code verwaltet wird und darauf wartet,
        dass er ausgeführt wird, während synchroner Code sequenziell und ohne
        Unterbrechungen im Haupt-Event-Loop ausgeführt wird.
      </p>
      <div className='w-2/3 m-auto'>
        <img
          src='./images/eventLoop_async.png'
          alt='Example for async Code in Event Loop'
          className='w-full'
        />
      </div>
      <div className='linkContainer'>
        <a
          href='https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick'
          target='_blank'
          rel='noopener noreferrer'
        >
          Event Loop
        </a>
      </div>
    </article>
  );
};
