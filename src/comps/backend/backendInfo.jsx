import { highlights } from "../../App";

export const BackendInfo = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Willkommen im Backend!</h2>
      <h3 className='font-extrabold text-xl'>
        Was ist das Backend im gegensatz zum Frontend?
      </h3>
      <p>
        Das Backend einer Softwareanwendung ist die unsichtbare, serverseitige
        Komponente, die sich auf die Verarbeitung und Verwaltung von Daten
        konzentriert. Es empfängt Anfragen vom Frontend, führt komplexe Logik
        aus und interagiert mit der Datenbank, um dauerhafte Daten zu speichern.
        Programme im Backend sind in Programmiersprachen wie NodeJS, Python,
        Java oder PHP geschrieben. Die Verantwortlichkeiten des Backends
        umfassen die Sicherheit der Anwendung, den Schutz vor Angriffen wie
        SQL-Injection und die Implementierung von Authentifizierung und
        Autorisierung. Im Gegensatz zum Frontend ist das Backend für den
        Benutzer unsichtbar und arbeitet im Hintergrund, um eine reibungslose
        Funktionalität der Anwendung sicherzustellen. Es verwaltet auch die
        Integrität und Sicherheit von Daten in zusammenarbeit mit Datenbanken.
        Sicherheitsüberlegungen im Backend sind von entscheidender Bedeutung, um
        Angriffe auf die Anwendung zu verhindern. Der Backend-Code kann auf
        Servern gehostet werden, was eine effiziente Datenverarbeitung und
        Skalierbarkeit ermöglicht. Insgesamt arbeitet das Backend eng mit dem
        Frontend zusammen, um eine vollständige, sichere und leistungsstarke
        Softwarelösung bereitzustellen.
      </p>
      <h3 className='font-extrabold text-xl'>
        Möglichkeiten ein Backend aufzubauen
      </h3>
      <p>
        Wie die Überschirft vermuten lässt gibt es verschiedene Wege ein Node
        Backend in ein Projekt ein zubauen. Wichtig zu wissen ist, dass ein
        Server (Backend) sogut wie immer Frontend unabhängig arbeitet. Ein
        Server selbst braucht das Frontend nicht um zu funktionieren, während
        das Frontend bestimmte Daten oder Funktionen nur mit Hilfe eines Servers
        zur Verfügung stellen kann.
      </p>
      <div className='flex'>
        <div className='w-1/3 h-88'>
          <img
            src='./images/frontBackStructure.PNG'
            alt=''
            className='h-full'
          />
        </div>
        <div className='w-2/3'>
          <p>
            Eine gängige Praxis um ein unabhängiges Backend aufzubauen ist die
            Verwendung eines gesonderten Repositorys. Anders als bei Frameworks
            ist das Backend, damit auch von mehreren Applications verwendbar.
          </p>
          <p>
            Oft werden Front- und Backend zusammen in einem Ordner/ in einer
            Organisation erstellt um die Zusammenarbeit und Zugehörigkeit zu
            demonstrieren. Hierbei ist jedem selbst überlassen ob man Front- und
            backend in einem VS-Code öffnet oder VS-Code mehrfach öffnet.
          </p>
        </div>
      </div>
      <p>
        Mittlerweile gibt es immer mehr Frontend-Frameworks die bereits ein
        rudimentäres Backend anbieten. Ein dafür bekanntes Framework ist das
        react-Framework NextJS, aber auch React/Vite selbst hat oder wird dieses
        implementieren. Allerdings sind diese Techniken, für die meisten
        Backends, noch nicht ausgereift genug. Frontend interne Backends sind
        oft nur darauf ausgelegt das nötigste zu können. Das nötigste bedeutet
        einfache API Abfragen, die Verwendung von zusatz Paketen wie Bcrypt, JWT
        oder Express. Allerdings benötigt man weitere Erweiterungen um
        Komplexere Backend aufzubauen.
      </p>
      <p>
        In NextJS ist die Ordnerstruktur vorgebene, das bedeute, dass das
        Routing sich an der Ordnerstruktur orientiert und es keinen extra Router
        gibt.
      </p>
      <h4 className='font-extrabold text-lg'>
        Ordnerstruktur: NextJS Frontend
      </h4>
      <pre className='text-sm'>
        <code>
          - pages
          <br />
          &#9;- index.js
          <br />
          &#9;- about.js
          <br />
          &#9;- contact.js
          <br />
          <span className={highlights.errorCode}>
            &#9;- api
            <br />
            &#9;&#9;- endpoint1.js
            <br />
            &#9;&#9;- endpoint2.js
          </span>
          <br />
          - public
          <br />
          &#9;- images
          <br />
          &#9;&#9;- logo.png
          <br />
          - styles
          <br />
          &#9;- main.css
          <br />
          - components
          <br />
          &#9;- Header.js
          <br />
          &#9;- Footer.js
          <br />
          <span className={highlights.errorCode}>
            - utils
            <br />
            &#9;- database.js
            <br />
          </span>
          - node_modules
          <br />
          - .next
          <br />
          - package.json
          <br />- next.config.js
          <span className={highlights.errorCode}>
            <br />- server.js
          </span>
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Warum lernen wir Node?</h3>
      <p>
        Node.js ist eine ideale Backend-Wahl für React-Frontends aus mehreren
        Gründen. Die gemeinsame Nutzung von JavaScript als Sprache in Front- und
        Backend fördert die Codekonsistenz und Codewiederverwendbarkeit. Die
        nicht blockierende Architektur (async) von Node.js ermöglicht eine
        effiziente Datenübertragung zwischen Front- und Backend, was zu einer
        reaktionsschnellen Benutzeroberfläche führt. Mit npm bietet Node.js eine
        umfangreiche Sammlung von Modulen, die nahtlos integriert werden können,
        und erleichtert so die Entwicklung und Erweiterung von Funktionen. Die
        Echtzeitfähigkeiten von Node.js passen gut zu React, besonders für
        interaktive Anwendungen. Die starke Entwicklergemeinschaft beider
        Technologien erleichtert den Zugriff auf Ressourcen, Tutorials und
        Unterstützung. Die Skalierbarkeit von Node.js passt zu wachsenden
        React-Anwendungen, und die Kombination ermöglicht ein schnelles
        Prototyping und die effiziente Zusammenarbeit zwischen Front- und
        Backend-Teams. Node.js bietet die Flexibilität für die Entwicklung von
        APIs, serverseitigen Anwendungen und Microservices, was den
        unterschiedlichen Anforderungen verschiedener Projekte gerecht wird.
      </p>
      <h3 className='font-extrabold text-xl'>Warum lernen wir Express?</h3>
      <p>
        Express ist ein Webanwendungs-Framework für Node.js, das die Entwicklung
        von Serveranwendungen und APIs erleichtert. Mit Express können Sie
        Routes für verschiedene HTTP-Anfragen definieren, Middleware für
        Anfragenverarbeitung (Authentifizierung) und Antwortverarbeitung nutzen,
        Template-Engines für die serverseitige Generierung von dynamischem HTML
        und statische Ressourcen einfach servieren. Es eignet sich besonders gut
        für die Erstellung von REST APIs und bietet erweiterbare
        Sicherheitsfunktionen. Express ist leicht zu erlernen und bietet dennoch
        genügend Flexibilität für eine breite Palette von Anwendungen.
      </p>
    </article>
  );
};
