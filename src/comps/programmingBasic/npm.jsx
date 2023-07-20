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
          du bereits den "Node Version Manager" installiert haben kannst du
          damit Probelmlos NPM installieren.
        </p>
        <pre>
          <code>npm -v</code>
        </pre>
        <p>FOLGT...</p>
      </div>
      <h3 className="font-extrabold text-xl my-5">
        Die Verwendung von NPM-Packages
      </h3>
      <div className="flex gap-10">
        <img className="xsmall" src="./images/npmInfos.png" alt="" />
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
      <a className="p-5" href="https://www.npmjs.com/">
        NPM
      </a>{" "}
      <a
        className="p-5"
        href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
      >
        NPM & Node Install
      </a>
    </article>
  );
};
