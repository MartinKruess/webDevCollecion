import { highlights } from "../../App";

export const ReactStart = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Wir starten mit React</h2>
      <h3 className='font-extrabold text-xl'>Was ist ein Framework?</h3>
      <p>
        Ein <strong>Framework</strong> ist eine strukturierte, vordefinierte
        Sammlung von Programmiertechniken, Bibliotheken und Werkzeugen, die dazu
        verwendet werden, die Entwicklung von Softwareanwendungen zu
        erleichtern. Es stellt eine architektonische Grundlage (Rahmen) bereit,
        auf dem Entwickler aufbauen können, um bestimmte Aufgaben zu erleichtern
        oder um eine bestimmte Art von Anwendung zu erstellen.
      </p>
      <ul>
        <li className='pb-2'>
          Ein Framework bietet eine organisatorische Struktur, die es
          Entwicklern ermöglicht, ihre Arbeit zu organisieren und sich auf die
          Lösung von spezifischen Problemen zu konzentrieren, anstatt
          grundlegende architektonische Entscheidungen zu treffen.
        </li>
        <li className='pb-2'>
          Frameworks enthalten oft wiederverwendbare Codekomponenten (wie
          Bibliotheken oder Module), die Entwickler verwenden können, um
          wiederkehrende Aufgaben zu automatisieren oder zu vereinfachen. Dies
          fördert die Effizienz und Konsistenz bei der Entwicklung.
        </li>
        <li className='pb-2'>
          Frameworks abstrahieren komplexe Aufgaben oder Prozesse, indem sie
          eine Schnittstelle zwischen dem Entwickler und der zugrunde liegenden
          Technologie bereitstellen. Dies ermöglicht es Entwicklern, sich auf
          höhere Ebenen der Anwendungslogik zu konzentrieren, anstatt sich mit
          technischen Details auseinandersetzen zu müssen.
        </li>
        <li className='pb-2'>
          Frameworks können bewährte Entwicklungspraktiken und Designmuster
          fördern, da sie oft auf bewährten Prinzipien und Standards basieren.
          Dies trägt dazu bei, qualitativ hochwertigen Code zu produzieren und
          die Wartbarkeit zu verbessern.
        </li>
        <li>
          Entwickler können Frameworks erweitern oder anpassen, um ihren
          speziellen Anforderungen gerecht zu werden, ohne von Grund auf neu
          beginnen zu müssen.
        </li>
      </ul>
      <p>
        Es gibt Frameworks für verschiedene Anwendungsdomänen:
        <br />
        Webentwicklung (Ruby on Rails oder Angular...)
        <br />
        Mobile App-Entwicklung (Android oder das iOS...)
        <br />
        Desktop-Anwendungen (.NET oder Electron...)
      </p>
      <h3 className='font-extrabold text-xl'>Was ist React?</h3>
      <p>
        React, oder auch <strong>ReactJS</strong>, ist eine populäre
        <span className={highlights.code}> JavaScript-Bibliothek</span>, die von
        Facebook entwickelt wurde und zur Entwicklung von Benutzeroberflächen
        für Webanwendungen und mobile Anwendungen verwendet wird. React wurde
        erstmals 2013 veröffentlicht und hat sich seitdem zu einem wichtigen
        Werkzeug in der Webentwicklung entwickelt.
      </p>
      <ul>
        <li className='pb-3'>
          React basiert auf dem Konzept von wiederverwendbaren Komponenten
          (Module). Entwickler können Benutzeroberflächen in einzelne
          Komponenten aufteilen. Dies fördert die Wiederverwendbarkeit.
        </li>
        <li className='pb-3'>
          React verwendet einen Virtual DOM (Virtual Document Object Model), um
          die Leistung zu optimieren. Anstatt das tatsächliche DOM direkt zu
          manipulieren, erstellt React eine virtuelle Repräsentation des
          DOM-Baums und aktualisiert sie effizient, wenn Änderungen auftreten.
          Dies minimiert teure (zeitaufwendige) DOM-Manipulationen und führt zu
          schnelleren Anwendungen.
        </li>
        <li className='pb-3'>
          React fördert einen Einweg-Datenfluss (One-Way Data Binding). Daten
          fließen von übergeordneten Komponenten zu untergeordneten Komponenten,
          wodurch eine klare und vorhersehbare Datenflussrichtung entsteht. Dies
          erleichtert das Debuggen und das Verstehen der Anwendung.
        </li>
        <li>
          React ist sehr erweiterbar und kann mit anderen Bibliotheken und
          Frameworks kombiniert werden. Es ist nicht auf bestimmte Tools oder
          Technologien beschränkt, was es Entwicklern ermöglicht, es in
          verschiedenen Umgebungen und mit verschiedenen Technologien zu
          verwenden.
        </li>
      </ul>
      <p>
        React wird häufig in Kombination mit anderen Technologien verwendet. Es
        wird für die Entwicklung von Webanwendungen, mobilen Apps und sogar
        Desktop-Anwendungen eingesetzt und hat eine große und aktive
        Entwicklergemeinschaft.
      </p>

      <h3 className='font-extrabold text-xl'>React Behind the Sceens</h3>
      <p>
        React verwendet JSX (JavaScript Syntax Extension), um
        Benutzeroberflächenelemente in JavaScript-Code einzufügen. JSX
        ermöglicht eine deklarative Beschreibung von
        Benutzeroberflächenkomponenten und erleichtert das Lesen und Schreiben
        von React-Code. Unter der Haube wird JSX von Babel übersetzt.
      </p>
      <a
        href='https://babeljs.io/repl'
        target='_blank'
        rel='noopener noreferrer'
      >
        Babel - Next Generation JS Compiler
      </a>
      <pre className="text-sm">
        <code>
          // JSX Syntax
          <br />
          const App = () =&gt; &#123;
          <br />
          &#9;&lt;div&gt;
          <br /> &#9;&#9;&lt;div&gt;Hello World!&lt;/div&gt;
          <br />
          &#9;&#9;&lt;div&gt;Hallo Welt!&lt;/div&gt;
          <br /> &#9;&lt;/div&gt;
          <br />
          &#125;
          <br />
          <br />
          import &#123; jsx as _jsx &#125; from "react/jsx-runtime";<br />
          import &#123; jsxs as _jsxs &#125; from "react/jsx-runtime";<br /><br />
          const App = () =&gt; &#123;<br />
          &#9;return /*#__PURE__*/_jsxs("main", &#123;<br />
          &#9;&#9;children: [/*#__PURE__*/_jsx("div", &#123;<br />
          &#9;&#9;&#9;children: "Hello World!"<br />
          &#9;&#9;&#9;&#125;), /*#__PURE__*/_jsx("div", &#123;<br />
          &#9;&#9;&#9;children: "Hallo Welt!"<br />
          &#9;&#9;&#125;)]<br />
          &#9;&#125;);<br />
          &#125;;
          <br />
          <br />
          // Classic Syntax
          <br />
          const App = () =&gt; &#123;
          <br />
          &#9;/*#__PURE__*/React.createElement("div", null,
          <br />
          &#9;&#9;/*#__PURE__*/React.createElement("div", null, "Hello World!"),
          <br />
          &#9;&#9;/*#__PURE__*/React.createElement("div", null, "Hallo Welt!"));
          <br />
          &#125;
        </code>
      </pre>

      <h3 className='font-extrabold text-xl'>
        Das erste React-Projekt - npm create-react-app VS npm create vite
      </h3>
      <div class='grid grid-cols-2 gap-4'>
        <div class='border p-4'>
          <h4 class='text-lg font-semibold'>Build-Tool</h4>
          <h5>
            <strong>create-react-app</strong>
          </h5>
          <p>
            Verwendet standardmäßig Webpack als Build-Tool. Webpack ist ein
            leistungsfähiges Tool zur Modulbündelung und Konfiguration von
            Entwicklungs- und Produktionsbuilds.
          </p>
          <h5>
            <strong>create-vite</strong>
          </h5>
          <p>
            Verwendet Vite, was sich von Webpack unterscheidet. Vite ist ein
            Build-Tool, das auf ESM (ECMAScript Modules) und modernen
            Browserfunktionen basiert. Es ist bekannt für seine schnellen
            Build-Zeiten während der Entwicklung.
          </p>
        </div>

        <div class='border p-4'>
          <h4 class='text-lg font-semibold'>Schnelligkeit</h4>
          <h5>
            <strong>create-react-app</strong>
          </h5>
          <p>
            Kann in Bezug auf die Build-Zeiten etwas langsamer sein,
            insbesondere in größeren Projekten.
          </p>
          <h5>
            <strong>create-vite</strong>
          </h5>
          <p>
            Ist in der Regel schneller beim Erstellen von Projekten und beim
            Aktualisieren von Änderungen während der Entwicklung. Dies ist auf
            die Verwendung von ESM und inkrementelles Bündeln zurückzuführen.
          </p>
        </div>
      </div>
      <pre>
        <code>npm create-react-app myProject</code>
      </pre>

      <h3 className='font-extrabold text-xl'>Vite</h3>

      <h3 className='font-extrabold text-xl'>Worauf sollte man achten?</h3>
    </article>
  );
};