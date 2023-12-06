import { highlights } from "../../App";
import { ImportRequire } from "./assets/importRequire";
import { NodeExpress } from "./assets/nodeExpress";

export const Express = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Express</h2>
      <p>
        Express ist ein Webanwendungs-Framework für Node.js, das die Entwicklung
        von serverseitigen Anwendungen und API's vereinfacht. Es baut auf den
        Funktionen von Node.js auf und bietet eine leichtgewichtige und flexible
        Struktur für die Erstellung von Webanwendungen.
      </p>
      <pre>
        <code>npm i express</code>
      </pre>
      <ul>
        <li>
          <h3 className='text-lg'>Erweiterbarkeit:</h3> Express ist modular und
          erweiterbar. Sie können zusätzliche Middleware von Drittanbietern
          verwenden, um Funktionalitäten wie Sessions, Authentifizierung oder
          Caching hinzuzufügen.
        </li>
        <li>
          <h3 className='text-lg'>Routing:</h3> Express erleichtert das
          Definieren von Routen für Ihre Anwendung. Sie können bestimmte
          HTTP-Anfragen (GET, POST, etc.) auf bestimmte Endpunkte (URIs) mappen
          und festlegen, welche Funktionen zur Verarbeitung dieser Anfragen
          ausgeführt werden sollen.
        </li>
        <li>
          <h3 className='text-lg'>REST API'S:</h3> Express ist gut geeignet für
          die Erstellung von REST API'S. Durch die Definition von Routen und
          Middleware können Sie leicht Endpunkte erstellen, um Daten abzurufen,
          zu erstellen, zu aktualisieren oder zu löschen.
        </li>
        <li>
          <h3 className='text-lg'>Request und Response Objekte:</h3> Express
          erweitert die Request- und Response-Objekte von Node.js und bietet
          zusätzliche Funktionen und Methoden, um den Umgang mit Anfragen und
          Antworten zu erleichtern.
        </li>
        <li>
          <h3 className='text-lg'>Middleware:</h3> Express verwendet Middleware,
          um den Anfrage- und Antwortzyklus zu beeinflussen.
          Middleware-Funktionen können zwischen dem Empfang der Anfrage und dem
          Senden der Antwort verschiedene Aufgaben erledigen, wie z.B.
          Authentifizierung, Protokollierung oder das Verarbeiten von
          Anfrageparametern.
        </li>
        <li>
          <h3 className='text-lg'>Sicherheit:</h3> Express beinhaltet einige
          Sicherheitsfunktionen, die automatisch bestimmte Arten von Angriffen,
          wie z.B. Cross-Site Scripting (XSS) oder Cross-Site Request Forgery
          (CSRF), abmildern können.
        </li>
        <li>
          <h3 className='text-lg'>Template-Engines: (Serverside Rendering)</h3>{" "}
          Express unterstützt die Verwendung von Template-Engines wie EJS
          (Spezielle Programmiersprache) oder Pug, um dynamische HTML-Seiten zu
          generieren. Dies ermöglicht das serverside Rendering von Webseiten,
          was besonders nützlich ist, wenn Sie Webseiten mit variablen Inhalten
          erstellen möchten. Serverside rendering wird heutzutage allerdings
          immer weniger verwendet, da die meisten Frameworks mittlerweile
          schnell genug sind um in 90% der Fällen mithalten zu können.
        </li>
        <li>
          <h3 className='text-lg'>Statische Daten:</h3> Sie können Express so
          konfigurieren, dass es statische Ressourcen wie CSS-Dateien, Bilder
          oder JavaScript-Dateien direkt an den Client sendet, ohne dass
          spezielle Routen dafür definiert werden müssen.
        </li>
        <li>
          <h3 className='text-lg'>Fazit:</h3> Express bietet eine einfache, aber
          leistungsstarke Grundlage für die Entwicklung von Webanwendungen und
          API's mit Node.js. Es ist besonders beliebt, da es leicht zu erlernen
          ist und genügend Flexibilität für unterschiedlichste
          Anwendungsanforderungen bietet.
        </li>
      </ul>
      <h2 className='font-extrabold text-xl'>Node und Express</h2>
      <NodeExpress />
    </article>
  );
};
