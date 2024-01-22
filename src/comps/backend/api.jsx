import { highlights } from "../../App";
import React, { useState } from "react";

export const API = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Was ist eine API?</h2>
      <p>
        Eine API (Application Programming Interface) ist eine
        programmübergreifende Schnittstelle um Daten mit standartisierten
        Datenstrukturen (Beispiel: xml, json) zwischen verschiedenen Systemen zu
        kommunizieren. Allerdings gibt es auch weitere Aufgaben, die eine API
        erfüllt. Neben der Kommunikation gibt es auch Sicherhitsvorkehrungen und
        Logic, die über einen sogeannte Middleware in eine API eingebaut werden
        können.
      </p>
      <h3 className='font-extrabold text-lg'>
        Die Grundstruktur einer
        <span className={highlights.code}> GET-API</span> besteht aus vier
        Teilen.
      </h3>
      <pre className='text-sm'>
        <code>
          // 1. Der Server, der verwendet werden soll (in unserem Fall
          <span className={highlights.errorCode}> app</span>)<br />
          const <span className={highlights.errorCode}> app</span> = express();
          <br />
          <br />
          // 2. Die Methode:<span className={highlights.code}> GET</span>: Zum
          Abrufen von Daten von einem Server.
          <br />
          // 3. Der Pfad oder auch Endpoint als String (
          <span className={highlights.file}>'/endpoint'</span>)
          <br />
          <span className={highlights.errorCode}>app</span>.
          <span className={highlights.code}>get</span>(
          <span className={highlights.file}>'/getEndpoint'</span>, (req, res)
          =&gt; &#123;
          <br />
          <br />
          // 4. Die Annahme und Verarbeitung der Client-Anfrage (
          <span className={highlights.directory}>Request</span>), sowie die
          Antwort des Servers (
          <span className={highlights.directory}>Pesponse</span>)<br />
          &#9;
          <span className={highlights.directory}>
            res.send("Get Data from API")
          </span>
          ;
          <br />
          &#125;);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>
        Die Grundstruktur einer
        <span className={highlights.code}> POST-API</span> besteht aus vier
        Teilen.
      </h3>
      <pre>
        <code>
          // 2. Die Methode:<span className={highlights.code}> POST</span>: Zum
          Senden von Daten an einen Server, um Ressourcen zu erstellen.
          <br />
          <span className={highlights.errorCode}>app</span>.
          <span className={highlights.code}>post</span>(
          <span className={highlights.file}>'/postEndpoint'</span>, (req, res)
          =&gt; &#123;
          <br />
          <br />
          // 4. Die Annahme und Verarbeitung der Client-Anfrage (
          <span className={highlights.directory}>Request</span>), sowie die
          Antwort des Servers (
          <span className={highlights.directory}>Pesponse</span>)
          <br />
          &#9;if (
          <span className={highlights.directory}>
            req.body.data.firstname === "Alex"
          </span>
          ) &#123;
          <br />
          &#9;&#9;
          <span className={highlights.directory}>res.send("Hallo Welt!")</span>;
          <br />
          &#9;&#125;
          <br />
          &#125;);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>
        Die Grundstruktur einer
        <span className={highlights.code}> PUT-API</span> besteht aus vier
        Teilen.
      </h3>
      <pre>
        <code>
          // 2. Die Methode:<span className={highlights.code}> PUT</span>: Wird
          verwendet, um eine vollständige Ressource an der angegebenen URI zu
          erstellen oder zu aktualisieren. Wenn Sie eine PUT-Anfrage senden,
          wird erwartet, dass Sie die gesamte Ressource mit den neuen Daten
          bereitstellen.
          <br />
          <span className={highlights.errorCode}>app</span>.
          <span className={highlights.code}>put</span>(
          <span className={highlights.file}>'/putEndpoint/:id'</span>, (req,
          res) =&gt; &#123;
          <br />
          <br />
          &#9;
          <span className={highlights.directory}>
            res.send('PUT-Anfrage verarbeitet');
          </span>
          ;
          <br />
          &#125;);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>
        Die Grundstruktur einer
        <span className={highlights.code}> PATCH-API</span> besteht aus vier
        Teilen.
      </h3>
      <pre>
        <code>
          // 2. Die Methode:<span className={highlights.code}> PATCH</span>:
          Wird verwendet, um Teile einer Ressource zu aktualisieren. Im
          Gegensatz zu PUT müssen bei PATCH-Anfragen nicht alle Daten der
          Ressource übermittelt werden, sondern nur diejenigen, die aktualisiert
          werden sollen.
          <br />
          <span className={highlights.errorCode}>app</span>.
          <span className={highlights.code}>patch</span>(
          <span className={highlights.file}>'/patchEndpoint/:id'</span>, (req,
          res) =&gt; &#123;
          <br />
          <br />
          &#9;
          <span className={highlights.directory}>
            res.send('PATCH-Anfrage verarbeitet');
          </span>
          ;
          <br />
          &#125;);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>
        Die Grundstruktur einer
        <span className={highlights.code}> DELETE-API</span> besteht aus vier
        Teilen.
      </h3>
      <pre>
        <code>
          // 2. Die Methode:<span className={highlights.code}> DELETE</span>:
          Zum Löschen von Ressourcen auf dem Server.
          <br />
          <span className={highlights.errorCode}>app</span>.
          <span className={highlights.code}>delete</span>(
          <span className={highlights.file}>'/putEndpoint/:id'</span>, (req,
          res) =&gt; &#123;
          <br />
          <br />
          &#9;
          <span className={highlights.directory}>
            res.send('PATCH-Anfrage verarbeitet');
          </span>
          ;
          <br />
          &#125;);
        </code>
      </pre>
      <p className='text-sm'>
        Die API kann nun mit einem Client (z.B. React) verbunden werden. Dafür
        wird die API in einem Terminal gestartet und der Client in einem
        anderen. Die Kommunikation zwischen beiden erfolgt über den
        <span className={highlights.code}> fetch</span> Befehl.
      </p>
      <h3 className='font-extrabold text-lg'>Warum nutzen wir REST-API?</h3>
      <p className='text-sm'>
        REST steht für Representational State Transfer und ist ein
        Architekturstil für die Entwicklung von Netzwerkanwendungen. Eine
        RESTful API (Application Programming Interface) basiert auf den
        Prinzipien von REST und ermöglicht die Kommunikation zwischen
        verschiedenen Systemen über das HTTP-Protokoll. Hier sind einige
        grundlegende Prinzipien von RESTful APIs:
        <br />
        <br />
        Alles in einer RESTful API wird als Ressource betrachtet, sei es ein
        Dokument, ein Bild oder eine Dienstleistung. Ressourcen werden durch
        eindeutige URIs (Uniform Resource Identifiers) identifiziert.
        <br />
        <br />
        Ressourcen können in verschiedenen Darstellungen (Repräsentationen)
        existieren, z. B. als XML, JSON oder HTML. Der Client kann die
        bevorzugte Darstellung in den Anfragen und Antworten spezifizieren. In
        den meisten Fällen wird JSON (JavaScript Object Notation) verwendet.
        <br />
        <br />
        Jede Anfrage vom Client an den Server muss alle erforderlichen
        Informationen enthalten, um die Anfrage zu verstehen und zu verarbeiten.
        Der Server speichert keinen Zustand über den Client.
        <br />
        <br />
        Clients interagieren mit der API durch die Manipulation von Ressourcen.
        Operationen sind ressourcenorientiert und nicht aktionsorientiert.
        <br />
        <br />
        Die Einhaltung dieser Prinzipien ermöglicht eine einfache und
        skalierbare Architektur für verteilte Systeme. RESTful APIs sind weit
        verbreitet, insbesondere im Web, und werden oft in Kombination mit dem
        HTTP-Protokoll verwendet. Sie sind jedoch nicht auf HTTP beschränkt und
        können auch mit anderen Protokollen wie SMTP (Simple Mail Transfer
        Protocol) oder XMPP (Extensible Messaging and Presence Protocol)
        verwendet werden.
      </p>
      <h2 className='font-extrabold text-xl'>Was ist die Middleware?</h2>
      <p>
        Die Middelware ist eine Logik Function, die sich zwischen dem Client und
        der eigentlichen API befindet. Es gibt verschiedene Bereiche, für die
        eine Middelware verwendet wird. Einige dieser Bereiche sind: -
        Kommunikation zwischen Anwendungen mit unterschiedlichen
        Programmiersprachen. Hierbei arbeitet die Middelware als ne Art
        übersetzer. - Security um zu überprüfen ob der Zugriff auf Daten für den
        anfragenden Client zur Verfügung steht. (Validation und Authenfication )
        - Integration ist ebenfalls ein wichtiges Thema um verschiedene
        Dateiformate aneinander anzupassen.
      </p>
      <h3 className='font-extrabold text-lg'>Wie arbeitet Middelware?</h3>
      <div className='flex gap-5'>
        <div className='w-1/2 text-sm'>
          <pre>
            <code>
              export const authEmployee = (req, res, next) =&gt; &#123;
              <br />
              &#9;const user = users.find(user =&gt; &#123;
              <br />
              &#9;&#9;user.username === req.body.user.username &&
              <br />
              &#9;&#9;user.password === req.body.user.password
              <br />
              &#9;&#125;)
              <br /> &#9;next()
              <br />
              &#125;
            </code>
          </pre>
          <pre className='my-3'>
            <code>
              app.use.(authEmployee)
              <br />
              app.get("employees", authEmployee (req, res) =&gt; &#123;
              <br />
              &#9;res.send("You are welcome, employee 'Jack'")
              <br />
              &#125;)
            </code>
          </pre>
        </div>
        <div className='w-1/2'>
          <img src='./images/apiMiddelwareFetch.png' alt='' />
        </div>
      </div>
    </article>
  );
};
