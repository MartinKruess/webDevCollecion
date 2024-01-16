export const Cookies = () => {
  return (
    <article>
      <div className='mt-5 relative'>
        <img src='./images/cookies.png' alt='' />
        <div className='bite biteZero text-slate-800'></div>
        <div className='bite biteOne text-slate-800'></div>
        <div className='bite biteTwo text-slate-800'></div>
        <div className='bite biteThree text-slate-800'></div>
        <div className='bite biteFour text-slate-800'></div>
      </div>
      <h2 className='font-bold text-2xl'>Cookies und Sessions</h2>
      <p className='p-2'>
        Cookies und Sessions sind zwei Möglichkeiten, um Daten
        zwischenzuspeichern. Cookies werden auf dem Client gespeichert und
        Sessions werden auf dem Server gespeichert. Cookies werden verwendet, um
        Informationen über den Benutzer zu speichern und diese Informationen bei
        jedem Seitenaufruf abzurufen. Dadurch kann der Server den Benutzer
        identifizieren und die Informationen, die der Benutzer beim letzten
        Besuch der Seite eingegeben hat, wiederherstellen.
      </p>
      <p className='p-2'>
        Eine Session ist die Lebensdauer einer Verbindung zwischen einem Client
        und einem Server. Eine Session wird erstellt, wenn ein Client eine
        Anfrage an den Server sendet, und bleibt bestehen, bis die Verbindung
        zwischen dem Client und dem Server beendet wird. Eine Session wird
        verwendet, um Informationen über mehrere Anfragen hinweg zu speichern.
      </p>

      <pre className='text-sm'>
        <code>
          app.post('/login', (req, res) =&gt; &#123;
          <br />
          &#9;const &#123; username, password &#125; = req.body;
          <br />
          &#9;if (username !== 'admin' || password !== 'admin') &#123;
          <br />
          &#9; &#9;return res.status(401).send('Invalid username or password');
          <br />
          &#9;&#125;
          <br />
          <br />
          &#9;const sessionId = randomUUID();
          <br />
          <br />
          &#9;sessions[sessionId] = &#123;userId: 1&#125;;
          <br />
          &#9;// Die Header 'set-cookie' sagt dem Browser, dass er "session=..."
          in einem Cookie speichern soll
          <br />
          &#9;// res.set('set-cookie', `session=$&#123;sessionId&#125;`);
          <br />
          &#9;res.cookie('session', sessionId);
          <br />
          &#9;res.send('ok');
          <br />
          &#125;)
          <br />
          <br />
          app.get('/todos', (req, res) =&gt; &#123;
          <br />
          &#9;console.log(req.headers);
          <br />
          <br />
          &#9;res.send('ok');
          <br />
          &#125;)
        </code>
      </pre>
      <pre>
        <code>
          import express from "express"
          <br />
          import session from "express-session"
          <br />
          import cookieParser from "cookie-parser"
          <br />
          <br />
          const app = express();
          <br />
          <br />
          // Middleware für Sessions
          <br />
          app.use(session(&#123;
          <br />
          &#9;secret: 'geheimesSchluesselwort',
          <br />
          &#9;resave: false,
          <br />
          &#9;saveUninitialized: true,
          <br />
          &#9;cookie: &#123; secure: true &#125;
          <br />
          &#125;));
          <br />
          <br />
          // Beispielroute zum Setzen eines Cookies
          <br />
          app.get('/set-cookie', (req, res) =&gt; &#123;
          <br />
          &#9;res.cookie('username', 'John Doe', &#123; maxAge: 900000,
          httpOnly: true &#125;);
          <br />
          &#9;res.send('Cookie gesetzt');
          <br />
          &#125;);
          <br />
          <br />
          // Beispielroute zum Lesen eines Cookies
          <br />
          app.get('/get-cookie', (req, res) =&gt; &#123;
          <br />
          &#9;const username = req.cookies.username;
          <br />
          &#9;res.send(`Benutzername: $&#123;username&#125;`);
          <br />
          &#125;);
          <br />
          <br />
          app.listen(5000, () =&gt; &#123;console.log(Server listening on
          localhost:5000)&#125;
          <br />
        </code>
      </pre>
    </article>
  );
};
