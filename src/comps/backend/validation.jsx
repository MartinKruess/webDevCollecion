import { highlights } from "../../App";

export const Validation = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Express Validierung</h2>
      <p>
        Um die Daten, die wir von der Datenbank erhalten, zu validieren,
        verwenden wir das Paket
        <span className={highlights.code}> express-validator</span>. Dieses
        Paket bietet uns die Möglichkeit, die Daten, die wir von der Datenbank
        erhalten, zu validieren. Wir können damit aber auch die Daten, die wir
        an die Datenbank senden, validieren. Das Paket bietet uns eine Reihe von
        Funktionen, die wir verwenden können, um die Daten zu validieren. Wir
        können damit beispielsweise überprüfen, ob ein String ein String ist, ob
        der String leer oder zu kurz ist und vieles mehr.
      </p>
      <p>
        Die Funktionen, die das Paket uns zur Verfügung stellt, sind in der
        Dokumentation beschrieben. Wir können die Funktionen in einem Array an
        die Route übergeben, die wir validieren möchten. Bei der Überprüfung der
        Funktionen wird solange geprüft bis eine Überprüfung fehlschlägt.
        Sollten alle Funktionen erfolgreich ausgeführt wurden, wird die Route
        ausgeführt. Wenn eine Funktion fehlschlägt, wird eine Fehlermeldung als
        Array zurückgegeben. Jedes Element des Arrays enthält eine Fehlermeldung
        für die entsprechende Funktion. Die Fehlermeldung enthält den Namen der
        fehlgeschlagenden Funktion und die Nachricht, die wir der Funktion als
        Error übergeben haben.
      </p>
      <p className={highlights.errorCode}>
        Wichtig zu beachten ist, dass jede Abfrage der Validation-Funktionen
        einer Serveranfrage entspricht. Daher ist die Datenvalidierung oft eine
        Zusammenarbeit zwischen Frontend und Backend. Das Frontend überprüft die
        Daten bereits vor dem Senden an den Server. Der Server überprüft die
        Daten noch einmal, bevor er sie an die Datenbank sendet. Die Datenbank
        überprüft die Daten noch einmal, bevor sie sie in der Datenbank
        speichert.
      </p>
      <h2 className='font-extrabold text-2xl'>Frontend Validierung</h2>
      <p>
        Ein gängiges Beispiel die Zusammenarbeit ist, dass im Frontend bereits
        die Länge des Usernames und Passwortes, soewie das Format einer E-Mail
        Adresse überprüft wird. Im Backend wird dann noch einmal überprüft, ob
        der Username und das Passwort ankommen und ob die E-Mail Adresse auch
        wirklich eine E-Mail Adresse ist. Dadurch wird dem User bereits vor
        Abschicken des Formulares mitgeteilt, dass die Daten nicht korrekt sind.
        Der User muss nicht erst auf die Antwort des Servers warten, um zu
        erfahren, dass die Daten nicht korrekt sind.
      </p>
      <h2 className='font-extrabold text-2xl'>Datenbank Validierung</h2>
      <p>
        Die letzten Überprüfungen werden durch das Schema der Datenbank
        durchgeführt. Das Schema der Datenbank legt fest, welche Daten in
        welchem Format in der Datenbank gespeichert werden dürfen. Wenn die
        Daten nicht dem Schema entsprechen, werden sie nicht in der Datenbank
        gespeichert. Hierbei können wir auch überprüfen ob zum Beispiel die
        E-Mail Adresse bereits in der Datenbank vorhanden ist. Wenn die E-Mail
        Adresse bereits vorhanden ist, wird die E-Mail Adresse nicht in der
        Datenbank gespeichert.
      </p>
      <h2 className='font-extrabold text-2xl'>Installation und Anwendung</h2>
      <pre>
        <code>npm i express-validator</code>
      </pre>
      <h3 className='font-extrabold text-xl'>API</h3>
      <p>
        In der API wird die jeweilige Route angegeben und der jeweilige Router
        oder Controller aufgerufen.
      </p>
      <pre>
        <code>app.use("/articles", articleRouter)</code>
      </pre>
      <h3 className='font-extrabold text-xl'>Router</h3>
      <pre className='text-sm'>
        <code>
          import express from "express";
          <br />
          import &#123; getArticles, addArticle &#125; from
          "../controllers/articleController.js";
          <br />
          import articleValidation from "../validation/articleValidation.js";
          <br />
          <br />
          <span className={highlights.file}>
            // express router wird geladen
          </span>
          <br />
          const articleRouter = express.Router();
          <br />
          articleRouter
          <br />
          &#9;.route('/')
          <br />
          &#9;.get(getArticles)
          <br />
          <span className={highlights.file}>
            // (Middelware/Validation, Controller/Hauptfunktion)
          </span>
          <br />
          &#9;.post(articleValidation, addArticle);
          <br />
          <br />
          export &#123; articleRouter &#125;
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Validation</h3>
      <pre className='text-sm'>
        <code>
          import &#123; body &#125; from "express-validator";
          <br />
          <br />
          export const articleValidation = [<br />
          &#9;body("key1")
          <br />
          &#9;&#9;.notEmpty()
          <br />
          &#9;&#9;.isString()
          <br />
          &#9;&#9;.withMessage("vorname soll ein String sein.")
          <br />
          &#9;&#9;.isLength(&#123; min: 2, max: 20 &#125;)
          <br />
          &#9;&#9;.withMessage("person soll zwischen 2 und 15 Zeichen lang
          sein"),
          <br />
          <br />
          &#9;body("key2")
          <br />
          &#9;&#9;.optional()
          <br />
          &#9;&#9;.isLength(&#123; min: 5, max: 30 &#125;)
          <br />
          &#9;&#9;.withMessage("title ist zu kurz"),
          <br />
          &#9;&#9;...
          <br />
          &#9;.custom((value, &#123; req &#125;) =&gt; &#123;
          <br />
          &#9;&#9;if (req.body.startDate &gt; value) &#123;
          <br />
          &#9;&#9;&#9;throw new Error("Invalid Date");
          <br />
          &#9;&#9;&#125;
          <br />
          &#9;&#9;return true;
          <br />
          &#9;&#125;)
          <br />
          ];
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Controller</h3>
      <pre className='text-sm'>
        <code>
          import &#123; validationResult &#125; from "express-validator";
          <br />
          <br />
          const getData = (req, res) =&gt; &#123;
          <br />
          &#9;res.send(&#123;
          <br />
          &#9;&#9;articleData: [<br />
          &#9;&#9;&#9;&#123;
          <br />
          &#9;&#9;&#9;&#9;title: "Fluffy-Kitty",
          <br />
          &#9;&#9;&#9;&#9;producer: "Fluffy-Kitty-Productions",
          <br />
          &#9;&#9;&#9;&#9;releaseDate: "2023-11-21",
          <br />
          &#9;&#9;&#9;&#9;price: 27.95,
          <br />
          &#9;&#9;&#9;&#125;
          <br />
          &#9;&#9;],
          <br />
          &#9;&#125;)
          <br />
          &#125;
          <br />
          <br />
          const addData = (req, res) =&gt; &#123;
          <br />
          &#9;const validationErrors = validationResult(req);
          <br />
          <br />
          &#9;if (validationErrors.isEmpty()) &#123;
          <br />
          &#9;&#9;const &#123; title, producer, releaseDate, price &#125; =
          req.body;
          <br />
          &#9;&#9;const newArticle = &#123;
          <br />
          &#9;&#9;&#9;title,
          <br />
          &#9;&#9;&#9;producer,
          <br />
          &#9;&#9;&#9;releaseDate,
          <br />
          &#9;&#9;&#9;price,
          <br />
          &#9;&#9;&#125;;
          <br />
          &#9;&#9;return res.send(&#123; articleData: newArticle &#125;);
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          res.status(400).send(&#123; validationErrors: validationErrors.array()
          &#125;);
          <br />
          <br />
          export &#123; getDates, addDate &#125;;
        </code>
      </pre>
    </article>
  );
};
