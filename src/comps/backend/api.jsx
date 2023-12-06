import { highlights } from "../../App";

export const API = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Was ist eine API?</h2>
      <p>
        Eien API (Application Programming Interface) ist eine
        programmübergreifende Schnittstelle um Daten mit standartisierten
        Datenstrukturen (Beispiel: xml, json) zwischen verschiedenen Systemen zu
        kommunizieren. Allerdings gibt es auch weitere Aufgaben, die eine API
        erfüllt. Neben der Kommunikation gibt es auch Sicherhitsvorkehrungen und
        Logic, die über einen sogeannte Middleware in eine API eingebaut werden
        können.
      </p>
      <h3 className='font-extrabold text-lg'>Grundaufbau einer API</h3>
      <p>Die simpelste Form einer API</p>
      <pre className='text-sm'>
        <code>
          const app = express()
          <br />
          <br />
          app.get('/getEndpoint', (req, res) =&gt; &#123;
          <br />
          &#9;res.send("Get Data from API")
          <br />
          &#125;)
          <br />
          <br />
          app.post('/postEndpoint', (req, res)
          <br />
          &#9;if(req.body.data.firstname === "Alex")&#123;
          <br />
          &#9;&#9;res.send("Hallo Welt!")
          <br />
          &#9;&#125;
          <br />
          <br />
          &#125;))
        </code>
      </pre>
      <p>
        Die Grundstruktur einer einfachen API besteht aus vier Teilen.
        <br />
        1. Der Server, der verwendet werden soll (in unserem Fall
        <span className={highlights.code}> app</span>)<br />
        2. Die Methode:
        <br />
        <span className={highlights.code}>GET</span>: Zum Abrufen von Daten von
        einem Server.
        <br />
        <span className={highlights.code}>POST</span>: Zum Senden von Daten an
        einen Server, um Ressourcen zu erstellen.
        <br />
        <span className={highlights.code}>PUT</span>: Zum Aktualisieren von
        Ressourcen auf dem Server.
        <br />
        <span className={highlights.code}>DELETE</span>: Zum Löschen von
        Ressourcen auf dem Server.
        <br />
        3. Der Pfad oder auch Endpoint als String ('employees')
        <br />
        4. Die Annahme und Verarbeitung der Client-Anfrage (Request), sowie die
        Antwort des Servers (Pesponse)
        <br />
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
      <h2 className='font-extrabold text-xl'>
        Step by Step: Aufbau einer API ink. Fake User Validierung (ohne DB)
      </h2>
    </article>
  );
};
