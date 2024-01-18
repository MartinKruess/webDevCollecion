import { useEffect, useState } from "react";

export const FullstackApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  const clickHandler = (e) => {
    console.log(e);
    if (count < 29 && e.button === 0) {
      setCount(count + 1);
    } else if (count > 0 && e.button === 2) {
      setCount(count - 1);
    }
  };

  return (
    <article>
      <h2 className='font-bold text-2xl'>Fullstack WebDev</h2>
      <section
        className='livePreview'
        onMouseDown={(e) => clickHandler(e)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className='frontend'>
          <pre>
            // Allgemeiner GET Fetch
            <br />
            {count >= 10 && count < 29 && (
              <code>
                const fetchData = async () =&gt; &#123;
                <br />
                &#32;const response = await fetch("http://localhost:5000/");
                <br />
                &#32;const data = await response.json();
                <br />
                &#32;console.log(data); // "Im rdy!"
                <br />
                &#125;
                <br />
                <br />
              </code>
            )}
            // Userdata
            <br />
            {count >= 23 && count < 29 && (
              <code>
                const user = &#123;
                <br />
                &#32;username: "Testuser",
                <br />
                &#32;password: "Password123"
                <br />
                &#125;
                <br />
                <br />
              </code>
            )}
            // Login Fetch (POST)
            <br />
            {count >= 24 && count < 29 && (
              <code>
                const fetchData = async () =&gt; &#123;
                <br />
                &#32;const res = await fetch("http://localhost:5000/
                <span className='text-red-400'>user</span>
                <span className='text-yellow-400'>/login</span>", &#123;
                <br />
                &#9;<span className='text-violet-400'>methode: "POST"</span>,
                <br />
                &#125;);
                <br />
                &#32;const data = await res.json();
                <br />
                &#32;console.log(data); // Status 200 "ok" oder 404 "not found"
                <br />
                &#125;
                <br />
                <br />
              </code>
            )}
          </pre>
        </div>
        <div className='feDescription left-60'>
          {count === 11 && (
            <pre className='bg-green-800 text-blue-400 rounded-lg'>
              <code>
                <span>
                  Dies ist die erste simple Abfrage, des Frontends an den
                  Server.
                </span>
              </code>
            </pre>
          )}
          {count >= 25 && count < 27 && (
            <pre className='bg-green-800 text-blue-400 rounded-lg'>
              <code>
                <span className='text-red-400'>
                  Main Route: /user
                  <br />
                  Die Main Route ist die Basis für alle weiteren Routen in Bezug
                  auf den User.
                </span>
                <br />
                <br />
                <span className='text-yellow-400'>
                  Subroute: /login
                  <br />
                  Die Subroutes befinden sich in der userRoute. Siehe Backend!
                </span>
                <br />
                <br />
                <span className='text-violet-400'>
                  Methode: POST
                  <br />
                  Die default Methode ist GET, daher muss diese nicht angeben
                  werden. Um Daten zu senden, muss die Methode auf POST geändert
                  werden.
                </span>
              </code>
            </pre>
          )}
        </div>
        <div className='backend text-sm'>
          <pre>
            {count >= 1 && count < 29 && (
              <code>
                import express from 'express'
                <br />
                import mongoose from 'mongoose'
                <br />
                import cors from 'cors'
                <br />
                <br />
              </code>
            )}
            // Route Imports
            <br />
            {count >= 22 && count < 29 && (
              <code>
                import &#123;userRoute&#125; from './routes/userRoute.js'
                <br />
                <br />
              </code>
            )}
            // Instances
            <br />
            {count >= 2 && count < 29 && (
              <code>
                const server = express()
                <br />
                <br />
                // Middleware bei jeder Anfrage
                <br />
                server.use(express.json(&#123; limit: "1mb" &#125;))
                <br />
                server.use(cors())
                <br />
                <br />
              </code>
            )}
            // Endpoints / Routes / API´s
            <br />
            {count >= 4 && count < 29 && (
              <code>
                server.
                {count >= 5 && count < 7 && (
                  <span className='text-red-600'>get('/', </span>
                )}
                {count === 6 && (
                  <span className='text-orange-400'>
                    (req, res) =&gt; &#123;
                    <br />
                    &#9;res.send('Im rdy!')
                    <br />
                    &#125;)
                  </span>
                )}
                {count >= 7 && count < 29 && (
                  <span>
                    get('/', (req, res) =&gt; &#123;
                    <br />
                    &#9;res.send('Im rdy!')
                    <br />
                    &#125;)
                  </span>
                )}
                <br />
                <br />
              </code>
            )}
            {count >= 18 && count < 29 && (
              <code>
                server.
                {count >= 19 && count < 21 && (
                  <span className='text-red-600'>use('/user', </span>
                )}
                {count === 20 && (
                  <span className='text-orange-400'>userRoute)</span>
                )}
                {count >= 21 && <span>use('/user', userRoute)</span>}
                <br />
              </code>
            )}
            {count >= 26 && count < 29 && (
              <pre className='my-5'>
                // Ausgelagert in userRoute.js
                <br />
                <code>
                  import express from 'express'
                  <br />
                  <br />
                  const router = express.Router()
                  <br />
                  <br />
                  router
                  <br />
                  <span className='text-violet-400'>.post</span>('
                  <span className='text-yellow-400'>/login</span>', (req, res)
                  =&gt; &#123;
                  <br />
                  &#9;res.send('Login Succressfull!')
                  <br />
                  &#125;)
                  <br />
                  <span className='text-violet-400'>.post</span>('
                  <span className='text-yellow-400'>/register</span>', (req,
                  res) =&gt; &#123;
                  <br />
                  &#9;res.send('Register Succressfull!')
                  <br />
                  &#125;)
                  <br />
                  <br />
                  export default router
                </code>
              </pre>
            )}
            {count < 16 && (
              <span>
                // DB Connection
                <br />
              </span>
            )}
            {count >= 14 && count < 16 && (
              <code>
                <span className='text-red-500'>mongoose.connect</span>
                (mongodb+srv://
                <span className='text-yellow-500'>
                  $&#123;process.env.DB_OWNER&#125;
                </span>
                :
                <span className='text-yellow-500'>
                  $&#123;process.env.DB_PASSWORD&#125;
                </span>
                @cluster0 .zg8ms.mongodb.net/
                <span className='text-yellow-500'>$&#123;DB_NAME&#125;</span>
                ?retryWrites=true&w=majority),
                <span className='text-yellow-300'> &#123;</span>
                <br />
                &#32;<span className='text-orange-400'>
                  useNewURLParser:
                </span>{" "}
                true,
                <br />
                &#32;
                <span className='text-orange-400'>
                  useUnifiedTopology:
                </span>{" "}
                true
                <br />
                <span className='text-yellow-300'>&#125;</span>
                <span className='text-red-500'>)</span>
                <br />
                &#32;<span className='text-red-500'>.then(() =&gt; &#123;</span>
                <br />
                &#9;<span className='text-orange-400'>console.log(</span>"DB
                connection established!"
                <span className='text-orange-400'>)</span> &#125;)
                <br />
                &#32;
                <span className='text-red-500'>.catch((err) =&gt; &#123;</span>
                <br />
                &#9;<span className='text-orange-400'>console.log(</span>
                "DB-CONNECTION FAILED!", err message
                <span className='text-orange-400'>)</span>
                <br />
                &#32;<span className='text-red-500'>&#125;)</span>
                <br />
                <br />
              </code>
            )}
            {count > 15 && count < 29 && (
              <pre className='my-5'>
                // Ausgelagert in dbConection.js
                <br />
                <code>
                  mongoose.connect (mongodb+srv://
                  $&#123;process.env.DB_OWNER&#125;:$&#123;process.env.DB_PASSWORD&#125;@cluster0.zg8ms.mongodb.net/$&#123;DB_NAME&#125;
                  ?retryWrites=true&w=majority), &#123;
                  <br />
                  &#32; useNewURLParser: true,
                  <br />
                  &#32; useUnifiedTopology: true
                  <br />
                  &#125; )
                  <br />
                  &#32; .then(() =&gt; &#123;
                  <br />
                  &#9;console.log("DB connection established!" )
                  <br />
                  &#32;&#125;)
                  <br />
                  &#32; .catch((err) =&gt; &#123;
                  <br />
                  &#9;console.log( "DB-CONNECTION FAILED!", err message )
                  <br />
                  &#32;&#125;)
                  <br />
                </code>
              </pre>
            )}
            // Webserver
            <br />
            {count >= 8 && count < 29 && (
              <code>
                server.listen(process.env.PORT, () =&gt; &#123;
                console.log(`Webserver:
                $&#123;process.env.BASE_URL&#125;:$&#123;process.env.PORT&#125;`)
                &#125;)
                <br />
                <br />
              </code>
            )}
          </pre>
        </div>
        <div className='beDescription right-4'>
          {count >= 2 && count < 3 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                <span>
                  Hier wird express, cors und die express Methode .json()
                  verwendet. Daraus werden neue Instanzen erstellt.
                </span>
              </code>
            </pre>
          )}
          {count >= 3 && count < 4 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                <span>
                  Mit der Option &#123; limit: "1mb" &#125; wird die
                  Größe/Anfrage der Daten begrenzt.
                </span>
              </code>
            </pre>
          )}
          {count === 5 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                <span>
                  Das ist die sogenannte Route. Hier wird die Methode .get() von
                  express verwendet.
                </span>
              </code>
            </pre>
          )}
          {(count === 6 || count === 20) && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                <span>Das ist die Logic des Controllers.</span>
              </code>
            </pre>
          )}
          {count === 9 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                <span>
                  Der Server ist nun soweit einsatz bereit, dass im Browser oder
                  mit dem Thunder-Client bereits 'Im rdy!' ausgegeben werden
                  kann.
                </span>
              </code>
            </pre>
          )}
          {count === 15 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                // .env Datei
                <br />
                <span>
                  DB_OWNER=yourName
                  <br />
                  DB_PASSWORD=yourPassword
                  <br />
                  DB_NAME=yourDBName
                </span>
              </code>
            </pre>
          )}
          {count === 17 && (
            <pre className='bg-red-800 text-yellow-400 rounded-lg'>
              <code>
                // dbConection.js
                <br />
                <span>
                  Die connection kann man auslagern in eine eigene Datei. Es ist
                  nur wichtig, dass die Verbindung irgendwo im Backend passiert,
                  wo ist egal.
                </span>
                <br />
                <br />
              </code>
            </pre>
          )}
        </div>
      </section>
    </article>
  );
};
