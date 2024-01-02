import { highlights } from "../../App";

export const Middleware = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl py-2 my-2'>Middleware</h2>
      <h3 className='font-extrabold text-lg py-2 my-2'>Was ist Middleware?</h3>
      <p>
        Eine Middelware kann man sich wie eine Art "Zwischenfunktion"
        (Türsteher) vorstellen. Diese Zwischenfunktion wird aufgerufen, bevor
        die eigentliche Funktion aufgerufen wird um die Anfrage zum Beispiel zu
        überprüfen, bevor sie an die eigentliche Hauptfunktion ausgeführt wird.
        Beispiele für Middleware sind: Authentifizierung, Validierung,
        Restructuring, Komprimierung, etc.
      </p>
      <h3 className='font-extrabold text-lg py-2 my-2'>Express Middleware</h3>
      <p>
        Express Middleware sind Funktionen, die eine Anfrage- und Antwortobjekte
        (req, res) erhalten und entweder eine Antwort senden oder die Anfrage an
        eine andere Funktion weiterleiten. Express Middleware kann auf
        Anwendungsebene oder auf Route-Ebene verwendet werden. Die Middleware
        auf Anwendungsebene wird auf jede Anfrage angewendet, die an die
        Anwendung gesendet wird, während die Middleware auf Routenebene nur auf
        Anfragen angewendet wird, die an die angegebene Route gesendet werden.
      </p>
      <h3 className='font-extrabold text-lg py-2 my-2'>
        Express Middleware Beispiel
      </h3>
      <p>
        Im folgenden Beispiel wird eine Middleware-Funktion ausgelagert diese
        kann entweder auf der Anwendungsebene oder auf der Routenlayer verwendet
        werden.
      </p>
      <pre className='text-sm grid columns-4 gap-12'>
        <code className='col-start-1 col-end-2'>
          <h4 className='font-extrabold text-md py-2 my-2'>Middleware</h4>
          const logger = (req, res, next) =&gt; &#123;
          <br />
          &#32;console.log("Do something...");
          <br />
          &#32;<span classname={highlights.code}>next()</span>;
          <br />
          &#125;;
        </code>
        <code className='col-start-2 col-end-3'>
          <h4 className='font-extrabold text-md py-2 my-2'>
            Routelayer - Nur in dieser Route aufgerufen
          </h4>
          app.get('/', <span className={highlights.code}>logger</span>, (req,
          res) =&gt; &#123;
          <br />
          &#32;res.send('Hello World!');
          <br />
          &#125;);
        </code>
        <code className='col-start-3 col-end-4'>
          <h4 className='font-extrabold text-md py-2 my-2'>
            Anwendungsebene - Automatsich in jeder Route aufgerufen
          </h4>
          app.use(<span className={highlights.code}>logger</span>);
        </code>
      </pre>
      <div className='mt-4 w-3/4 m-auto'>
        <img src='./images/nextInMiddleware.png' alt='' />
      </div>
      <h3 className='font-extrabold text-lg py-2 my-2'>
        Express Middleware - <span className={highlights.code}>next()</span>
      </h3>
      <p>
        <span className={highlights.code}>next()</span> wird in
        Express-Middleware-Funktionen verwendet, um die Kontrolle an die nächste
        Middleware in der Kette weiterzugeben. Wenn{" "}
        <span className={highlights.code}>next()</span> ohne Argumente
        aufgerufen wird, geht die Kontrolle zur nächsten Middleware über. Dies
        ist der normale Ablauf für Middleware.
      </p>
      <p>
        Zu beachten ist, dass wenn
        <span className={highlights.code}> next()</span> mit einem Argument
        aufgerufen wird, die Kontrolle an die nächste
        Fehlerbehandlungsmiddleware übergeben wird. Wenn eine
        Middleware-Funktion also vier Argumente hat, wird Express davon
        ausgehen, dass es sich um eine Fehlerbehandlungsmiddleware handelt,
        selbst wenn sie nicht als solche gekennzeichnet ist. Die Signatur für
        Fehlerbehandlungsmiddleware ist (err, req, res, next).
      </p>
      <pre>
        <code>
          app.use((req, res, <span className={highlights.code}>next</span>)
          =&gt; &#123;
          <br />
          &#9;// Annahme: Hier wird ein Fehler festgestellt
          <br />
          &#9;const <span className={highlights.errorCode}>error</span> = new
          Error('Ein Fehler ist aufgetreten');
          <br />
          &#9;// Hier wird der Fehler an die Fehlerbehandlung weitergegeben
          <br />
          &#9;
          <span className={highlights.code}>
            next(
            <span className={highlights.errorCode}>error</span>)
          </span>
          <br />
          &#125;);
          <br />
          <br />
          // Fehlerbehandlungsmiddleware
          <br />
          app.use((<span className={highlights.errorCode}>err</span>, req, res,
          <span className={highlights.code}>next</span>) =&gt; &#123;
          <br />
          &#9;res.status(500).json(&#123; error:
          <span className={highlights.errorCode}> err</span>.message &#125;);
          <br />
          &#125;);
        </code>
      </pre>
    </article>
  );
};
