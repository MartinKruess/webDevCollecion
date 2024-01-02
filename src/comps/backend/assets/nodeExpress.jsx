import { highlights } from "../../../App";

export const NodeExpress = () => {
  return (
    <>
      <h2 className='font-extrabold text-xl py-2 my-2'>
        Pure Node vs Node Express
      </h2>
      <p>
        Express erleichtert uns den Umgang mit NodeJS.
        <br />
        <br />
        In pure NodeJS muss das http Modul importiert werden ohne es6 Module
        wird require dafür verwendet
        <br />
        const http = require('http');
        <br />
        <br />
        Mit es6 Modulen wird import verwendet
        <br />
        import express from 'express';
      </p>
      <pre className='text-sm flex justify-between'>
        <code>
          <h3 className='font-extrabold text-lg py-2 my-2'>Pure NodeJS</h3>
          const http = require('http');
          <br />
          const port = 3000;
          <br />
          <br />
          &#32;const responseData = &#123;
          <br />
          &#32;&#32;message: 'Hallo, dies ist eine einfache API!',
          <br />
          &#32;&#32;timestamp: new Date().toISOString()
          <br />
          &#32;&#125;;
          <br />
          <span className={highlights.code}>
            const app = http.createServer((req, res) =&gt; &#123;
            <br />
            &#32;res.writeHead(200, &#123;'Content-Type':
            'application/json'&#125;);
            <br />
            &#32;res.end(JSON.stringify(responseData));
            <br />
            &#125;);
          </span>
          <br />
          <br />
          app.listen(port, () =&gt; &#123;
          <br />
          &#32;console.log(`Server läuft auf
          http://localhost:$&#123;port&#125;`);
          <br />
          &#125;);
        </code>
        <code>
          <h3 className='font-extrabold text-lg py-2 my-2'>NodeJS + Express</h3>
          import express from 'express';
          <br />
          <br />
          const app = express();
          <br />
          const port = 3000;
          <br />
          <br />
          app.use(express.json());
          <br />
          <br />
          &#32;const responseData = &#123;
          <br />
          &#32;&#32;message: 'Hallo, dies ist eine einfache API!',
          <br />
          &#32;&#32;timestamp: new Date().toISOString()
          <br />
          &#32;&#125;;
          <br />
          <br />
          <span className={highlights.code}>
            app.get('/api/hello', (req, res) =&gt; &#123;
            <br />
            &#32;res.json(responseData);
            <br />
            &#125;);
          </span>
          <br />
          <br />
          app.listen(port, () =&gt; &#123;
          <br />
          &#32;console.log(`Server läuft auf
          http://localhost:$&#123;port&#125;`);
          <br />
          &#125;);
        </code>
      </pre>
      <p>
        Wie man sehr schön am oberen Code sieht erspart uns die Verwendung von
        Express(), den direkten Aufbau von API´s und mehr via NodeJS. Viele
        nützliche Node Funktionen sind bereits vorbereitet und verstecken sich
        hinter express().use(), express().get(), express().post() und mehr. Um
        das ganze noch leichter zu machen wird express() oft in der Variable app
        oder server gespeichert. (app.get ...)
      </p>
    </>
  );
};
