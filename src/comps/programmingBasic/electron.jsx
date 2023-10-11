import { highlights } from "../../App";

export const Electron = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Electron</h2>
      <p>
        ElectronJS ist eine Platform übergreifende Lösung zum erstellen von
        Desktopanwendungen für Windows, MacOS und Linux. Im Hintergrund der
        Desktopanwendung werden die chromium Engine sowie NodeJS verwendet,
        wodurch man normales HTML, CSS und Javascript nutzen kann. Natürlich ist
        es ebenfalls möglich CSS-Frameworks wie SCSS, Tailwind, Bootstrap,
        MaterialIO... und JS-Frameworks wie React, Vite, Vue... zu verwenden.
      </p>
      <h3 className='font-extrabold text-xl'>
        Variante 1: Wir installieren ElectronJS global
      </h3>
      <pre>
        <code>npm i -g electron</code>
      </pre>
      <p>
        Nun kann ElectronJS immer und überall für eine spezifische Datei
        ausgeführt werden.
      </p>
      <pre>
        <code>electron index.js</code>
      </pre>

      <h3 className='font-extrabold text-xl'>
        Variante 2: ElectronJS in einem Projekt verwenden (JS)
      </h3>
      <p>
        Mit dem Befehl <span className={highlights.code}>npx</span> wird wie bei
        dem Befehl <span className={highlights.code}>npm</span> das
        entsprechende Package installiert. Zusätzlich wird dieses nach der
        Installation sofort ausgeführt.
      </p>
      <pre>
        <p className='p-0'>Installiere in Verzeichnis "my-app"</p>
        <code>npx create-electron-app my-app</code>
        <br />
        <br />
        <p className='p-0'>Installiere im aktuellen Verzeichnis</p>
        <code>npx create-electron-app .</code>
      </pre>
      <p></p>
      <pre>
        <code>electron index.js</code>
      </pre>
      <div className='img'>
        <img src='./electron_js' alt='' />
      </div>
      <div className='linkContainer'>
        <a
          href='https://www.electronjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Electron
        </a>
      </div>
    </article>
  );
};
