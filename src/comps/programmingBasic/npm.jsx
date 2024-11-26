import { highlights } from "../../App";

export const NPM = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl my-5">
        NPM - Der Node package Manager
      </h2>
      <p>
        NPM ist die weltweit größte Software-Datenbank. Open-Source-Entwickler
        auf allen Kontinenten nutzen npm um Sofwarepakete wie zum Beispiel
        Bootstrap zur Verfügung zu stellen und zu nutzen. Viele Organisationen
        nutzen npm auch zur Verwaltung privater Entwicklungen.
      </p>
      <p>
        Wie NPM funktioniert ist eigl ganz einfach an dem Beispiel Bootstrap zu
        erklären. Jemand hat Bootstrap aufgebaut und alle Dateien auf NPM
        hochgeladen.
      </p>
      <h3 className="font-extrabold text-xl my-5">NPM die Installation</h3>
      <div>
        <p>
          Um NPM nutzen zu können solltest du es global installieren. Solltest
          du bereits den{" "}
          <span className="text-green-200">Node Version Manager</span>{" "}
          installiert haben kannst du damit Probelmlos NPM installieren.
        </p>
        <pre>
          <code>npm -v</code>
        </pre>
        <p>
          Sollte dir die Version angezeigt werden, ist NPM bereits installiert.
          Als nächstes kannst du mit dem Befehl{" "}
          <span className={highlights.code}>npm init</span> ein neues Projekt
          anlegen. Npm init initialisiert ein neues Projekt und erstellt eine
          <span className={highlights.directory}>package.json</span>, sowie die{" "}
          <span className={highlights.file}>node_modules</span>.
        </p>
        <pre>
          <code>npm init</code>
        </pre>
        <p>
          In der <span className={highlights.directory}>package.json </span>
          werden alle Informationen über das Projekt und die verwendeten
          Packages gespeichert. Das bedeutet unser Projekt hat bestimmte
          Abhängigkeiten und diese Abhängigkeiten sind in der
          <span className={highlights.directory}>package.json</span> hinterlegt.
          Diese Abhängigkeiten sind bisher zwar hinterlegt, aber noch nicht
          installiert. Um die Abhängigkeiten zu installieren verwenden wir den
          Befehl <span className={highlights.code}>npm install</span>.
        </p>
        <pre>
          <code>
            npm i <br />
            npm install
          </code>
        </pre>
      </div>
      <div>
        <h2 className="font-extrabold text-xl my-5">
          Die Package JSON und package-lock.json
        </h2>
        <p>
          Die Package JSON Datei ist eine JSON Datei, doch wofür steht JSON
          eigentlich? Die Dateiendung
          <span className={highlights.code}> JSON</span> steht für{" "}
          <span className={highlights.code}>
            <a
              href="https://de.wikipedia.org/wiki/JavaScript_Object_Notation"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Object Notation
            </a>
          </span>
          .
          <br />
          Es gibt ein paar Dinge, die bei der JSON-Syntax beachtet werden
          müssen. Der Key und Value müssen immer in Anführungszeichen sein:
          <br />
          <span className={highlights.code}>"key":"value"</span>
          <br />
          Einzelne Zeilen werden durch Kommatas getrennt, allerdings darf der
          letzte Eintrag kein nachstehendes Komma haben.
        </p>
        <pre className="flex text-sm">
          <code>
            &#123;
            <br />
            <span className={highlights.directory}>
              /* Allgemeine Informationen zum Projekt */
              <br />
              // Beispiele: Name, Version, Autor, Beschreibung ...
            </span>
            <br />
            &#9;"name": "webdevcollecion",
            <br />
            &#9;"private": true,
            <br />
            &#9;"version": "0.0.0",
            <br />
            &#9;"type": "module",
            <br />
            <br />
            <span className={highlights.directory}>
              /* Ausführbare Scripts */
              <br />
              // Aufbau: "KEY": "VALUE"
              <br />
              // Key = der Name, den wir aufrufen um den Befehl auszuführen
              <br />
              // Value = Das ist der Befehl, der ausgeführt wird
              <br />
              // "starteLiveServer": "node index.js"
              <br />
              // Terminal Befehl: npm run starteLiveServer
            </span>
            <br />
            &#9;"scripts": &#123;
            <br />
            <span className={highlights.directory}>
              &#9;&#9;/* Starte den Liveserver: "npm run dev" */
            </span>
            <br />
            &#9;&#9;"dev": "node index.js",
            <br />
            <span className={highlights.directory}>
              &#9;&#9;/* Starte den Übersetzer: "npm run watch" */
            </span>
            <br />
            &#9;&#9;"watch":"npx tailwindcss -i ./style.css -o ./dist/style.css
            --watch",
            <br />
            <span className={highlights.directory}>
              &#9;&#9;/* Starte den Build-Process: "npm run build" */
            </span>
            <br />
            &#9;&#9;"build": "hier kommt der build command"
            <br />
            &#9;&#125;,
            <br />
            <br />
            <span className={highlights.directory}>
              /* Liste installierter Programme, die für die Webseite wichtig
              sind */
              <br />
              // Beispiele: ChartJS, Paypal, React, MySQL, MongoDB ...
            </span>
            <br />
            &#9;"dependencies": &#123;
            <br />
            &#9;&#9;"readlineSync": "1.4.10"
            <br />
            &#9;&#125;,
            <br />
            <br />
            <span className={highlights.directory}>
              /* Liste installierter Programme, die nur für die Entwicklung
              wichtig sind */
              <br />
              // Beispiele: Tailwind, Bootstrap, Programm zum testen des Codes
              ...
            </span>
            <br />
            &#9;"devDependencies": &#123;
            <br />
            &#9;&#9;"autoprefixer": "^10.4.14",
            <br />
            &#9;&#9;"eslint": "^8.38.0",
            <br />
            &#9;&#9;"postcss": "^8.4.24",
            <br />
            &#9;&#9;"tailwindcss": "^3.3.2"
            <br />
            &#9;&#125;
            <br />
            &#125;
          </code>
        </pre>
      </div>
      <h3 className="font-extrabold text-xl my-5">
        Die Verwendung von NPM-Packages
      </h3>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <img className="md:xsmall" src="/images/npmInfos.png" alt="" />
        <div>
          <p>
            Möchtest du das Bootstrap Paket herunterladen und verwenden,
            funktioniert dies auf verschiedenen Wegen, NPM ist einer davon.
            Google dafür nach "npm bootstrap"
          </p>
          <pre>
            <code>npm install bootstrap oder npm i bootstrap</code>
          </pre>
          <p>
            Das Bild links zeigt wichtige Informationen über das Package an.
            Unteranderem sieht man die wöchentliche Downloads, welche Art von
            Lizenz und den Zeitraum des letzten Updates.
          </p>
          <p>
            In manchen Dokumentationen sieht man ebenfalls, wenn eine spezielle
            Nodeversion oder andere Packages benötigt werden um speziellere
            Funktionen nutzen zu können.
          </p>
        </div>
      </div>
      <div className="flex gap-5 pb-10 pt-5">
        <a href="https://www.npmjs.com/">NPM</a>{" "}
        <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">
          NPM & Node Install
        </a>
      </div>
    </article>
  );
};
