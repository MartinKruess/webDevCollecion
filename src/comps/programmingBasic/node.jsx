export const NodeInstaller = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>NodeJS</h2>
      <p>
        Node.js ist eine plattformübergreifende Open - Source- Serverumgebung,
        die unter Windows, Linux, Unix, macOS und mehr ausgeführt werden kann.
        Node.js ist eine Backend-JavaScript-Laufzeitumgebung, die auf der V8-
        JavaScript-Engine läuft und JavaScript-Code außerhalb eines Webbrowsers
        ausführt.
      </p>
      <div>
        <h3 className='font-extrabold text-xl'>Node Version überprüfen</h3>
        <pre>
          <code>node -v</code>
          <br />
          <code>node --version</code>
        </pre>
        <h4 className='font-extrabold text-lg'>Node Version Updaten auf LTS</h4>
        <p>
          Bei vorhandener Node Version, lässt sich diese einfach auf die
          aktuellest LTS-Version (LongTimeSupport) Updaten.
        </p>
        <pre>
          <code>npm i -g n lts</code>
        </pre>
      </div>
      <p>
        Das Ausführen, der Comandozeile startet den "Liveserver" für die
        JS-Datei, die ausgeführt werden soll. Hierdurch lassen sich Webseiten
        lokal ausführen und anzeigen. Bei der Installation von Node sollte
        stehts darauf geachtet werden die LTS (LongTimeSupport) Version zu
        nutzen.
      </p>
      <div>
        <h4 className='font-extrabold text-lg'>Datei mit Node ausführen</h4>
        <pre>
          <code>node index.js</code>
        </pre>
      </div>
      <h2 className='font-extrabold text-2xl'>Node Version Manager (nvm)</h2>
      <p>
        Der nvm ist ein hilfreiches Tool, womit du in der Lage bist verschiedene
        Node Versionen Lokal für verschiedene Projekte zu installieren. Oft
        brauchen ältere Libaries oder Projekte eine ältere oder sogar eine
        bestimmte Node Version um fehlerfrei zu funtionieren. Hierbei hilft nvm.
        Wahrend global auf deinem System die neuste LTS-Version läuft, so kann
        durch die Verwendung von nvm Zeitgelich in verschiedenen Projekten mit
        verschiedenen anderen Versionen gearbeitet werden.
      </p>
      <div className='linkContainer'>
        <a
          href='https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/'
          target='_blanc'
        >
          Download Guide
        </a>
      </div>
      <div>
        <p>Installation </p>
        <pre>
          <code>
            curl -o-
            https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh |
            bash
            <br />
            oder
            <br />
            wget -qO-
            https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh |
            bash
          </code>
        </pre>
      </div>
      <div className='linkContainer'>
        <a
          href='https://nodejs.org/en/download'
          target='_blanc'
          className='px-3'
        >
          Node
        </a>
        <a
          href='https://github.com/coreybutler/nvm-windows#readme'
          target='_blanc'
          className='px-3'
        >
          Node Version Manager
        </a>
      </div>
    </article>
  );
};
