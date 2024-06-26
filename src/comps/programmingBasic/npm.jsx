import { highlights } from '../../App';

export const NPM = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl my-5'>
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
      <h3 className='font-extrabold text-xl my-5'>NPM die Installation</h3>
      <div>
        <p>
          Um NPM nutzen zu können solltest du es global installieren. Solltest
          du bereits den{' '}
          <span className='text-green-200'>Node Version Manager</span>{' '}
          installiert haben kannst du damit Probelmlos NPM installieren.
        </p>
        <pre>
          <code>npm -v</code>
        </pre>
        <p>
          Sollte dir die Version angezeigt werden, ist NPM bereits installiert.
          Als nächstes kannst du mit dem Befehl{' '}
          <span className={highlights.code}>npm init</span> ein neues Projekt
          anlegen. Npm init initialisiert ein neues Projekt und erstellt eine
          package.json, sowie die node_modules.
        </p>
        <pre>
          <code>npm init</code>
        </pre>
        <p>
          In der package.json werden alle Informationen über das Projekt und die
          verwendeten Packages gespeichert. Das bedeutet unser Projekt hat
          bestimmte Abhängigkeiten und diese Abhängigkeiten sind in der
          package.json hinterlegt. Diese Abhängigkeiten sind bisher zwar
          hinterlegt, aber noch nicht installiert. Um die Abhängigkeiten zu
          installieren verwenden wir den Befehl{' '}
          <span className={highlights.code}>npm install</span>.
        </p>
        <pre>
          <code>
            npm i <br />
            npm install
          </code>
        </pre>
      </div>
      <div>
        <h2 className='font-extrabold text-xl my-5'>
          Die Package JSON und package-lock.json
        </h2>
        <p>
          Die Package JSON Datei ist eine JSON Datei, doch wofür steht JSON
          eigentlich? Die Dateiendung
          <span className={highlights.code}> JSON</span> steht für
          <span className={highlights.code}> JavaScript Object Notation</span>.
          Schauen wir uns einfach mal ein Beispiel an.
        </p>
        <pre className='flex'>
          <code>
            &#123;
            <br />
            &#9;"name": "webdevcollecion",
            <br />
            &#9;"private": true,
            <br />
            &#9;"version": "0.0.0",
            <br />
            &#9;"type": "module",
            <br />
            &#9;"scripts": &#123;
            <br />
            &#9;&#9;"dev": "node index.js",
            <br />
            &#9;&#125;,
            <br />
            &#9;"dependencies": &#123;
            <br />
            &#9;&#9;"readlineSync": "1.4.10",
            <br />
            &#9;&#125;,
            <br />
            &#9;"devDependencies": &#123;
            <br />
            &#9;&#9;"autoprefixer": "^10.4.14",
            <br />
            &#9;&#9;"eslint": "^8.38.0",
            <br />
            &#9;&#9;"postcss": "^8.4.24",
            <br />
            &#9;&#9;"tailwindcss": "^3.3.2",
            <br />
            &#9;&#125;,
            <br />
            &#125;,
          </code>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam pariatur iste incidunt autem eligendi veniam, doloribus
              laudantium totam nobis quam? Accusantium molestiae eius iste porro
              praesentium consectetur ratione non officia.
            </p>
          </span>
        </pre>
      </div>
      <h3 className='font-extrabold text-xl my-5'>
        Die Verwendung von NPM-Packages
      </h3>
      <div className='flex flex-wrap md:flex-nowrap gap-10'>
        <img className='md:xsmall' src='./images/npmInfos.png' alt='' />
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
      <div className='flex gap-5 pb-10 pt-5'>
        <a href='https://www.npmjs.com/'>NPM</a>{' '}
        <a href='https://docs.npmjs.com/downloading-and-installing-node-js-and-npm'>
          NPM & Node Install
        </a>
      </div>
    </article>
  );
};
