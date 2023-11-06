import { CreateBrowserRoouter } from "./assets/createBrowserRouter";
import { Router6Main } from "./assets/router6Main";

export const RouterV6 = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>
        Router ab Version 6 - react-router-dom
      </h2>
      <pre>
        <code>npm i react-router-dom</code>
      </pre>
      <p>
        Der Hauptunterschied zwischen react-router Version 5 und Version 6 liegt
        in der Art und Weise, wie das Routing in React-Anwendungen verwaltet
        wird. In Version 6 wurde die API vereinfacht und verbessert, und die
        Verwendung von &lt;Route&gt;-Komponenten wurde entfernt. Stattdessen
        verwendet man Funktionen und Hooks wie useRoutes, useNavigate und
        andere, um das Routing zu definieren und zu steuern.
      </p>
      <p>
        Dennoch ist Version 5 immer noch relevant und wird in vielen bestehenden
        Projekten eingesetzt. Die Wahl zwischen Version 5 und 6 hängt von den
        Anforderungen des Projektes ab. Version 6 bietet Vorteile in Bezug auf
        die Leistung, die Bundle-Größe und die Entwicklerfreundlichkeit, während
        Version 5 weiterhin eine bewährte Lösung für bestehende Projekte
        darstellt. Beide Versionen haben ihre eigenen Anwendungsfälle.
      </p>
      <div className='grid grid-cols-12 gap-3 text-center'>
        <h3 className='font-extrabold text-xl col-span-full'>
          Was verändert dieses Router Update?
        </h3>
        <ul className='col-start-1 col-end-7'>
          <li className='my-3'>
            Die &lt;Route&gt;-Komponenten wurden entfernt. Stattdessen wird das
            Routing mithilfe von Funktionen und Hooks wie useRoutes,
            useNavigate, useMatch, usw. gesteuert.
          </li>
          <li className='my-3'>
            Das Verschachteln von Routes ist einfacher und intuitiver. Die
            Routes können hierbei in einer hierarchischen Struktur verschachtelt
            werden, ohne die Verwendung von Props oder React-Components, wie es
            in Version 5 der Fall war.
          </li>
          <li className='my-3'>
            Das Konzept von context, zur Veränderung des State und der
            Bearbeitung der Daten, wurde weitgehend durch die Verwendung von
            Functions und Hooks ersetzt.
          </li>
          <li className='my-3'>
            Durch die Verwendung von dynamische Imports der Routes, verbessert
            sich die Leistung und das Laden von Teilen der Anwendung nur dann,
            wenn sie benötigt werden.
          </li>
        </ul>
        <ul className='col-start-7 col-end-13'>
          <li className='my-3'>
            Durch eine kleinere Bundle-Größe im Vergleich zu Version 5, laufen
            Webanwendungen Effizeinter.
          </li>
          <li className='my-3'>
            Es können globale Seiteneffekte und Effekte auf Routebene erstellt
            werden, um beispielsweise Daten vor dem Rendern einer Seite zu
            laden.
          </li>
          <li className='my-3'>
            In Version 6 können benutzerdefinierte Routing-Strategien definiert
            werden, um das Verhalten des Routers weiter anzupassen.
          </li>
          <li className='my-3'>
            In Version 6 gibt es weniger Notwendigkeit für "prop drilling" (das
            Weiterreichen von Props durch mehrere Ebenen von Komponenten), da
            die Routes und Navigation einfacher zugänglich sind.
          </li>
        </ul>
        <p className='col-span-full'>
          Diese Änderungen sorgen dafür, dass Version 6 leistungsstärker,
          einfacher zu verwenden und besser für moderne React-Anwendungen
          geeignet ist. Natürlich ist Version 6 dadurch im Aufbau um einiges
          Komplexer, allerdings verbessert sich dadurch nicht nur das Route-,
          sondern ebenso das Data-Management.
        </p>
      </div>
      <CreateBrowserRoouter />
      <Router6Main />
    </article>
  );
};
