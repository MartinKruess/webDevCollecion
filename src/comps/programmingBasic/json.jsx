import { useEffect, useRef } from "react";
import { highlights } from "../../App";
// // import Prism from "prismjs";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // Dark Theme für Highlight.js

export const JSON = () => {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, []);

  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">
        JSON - <span className={highlights.errorCode}>J</span>ava
        <span className={highlights.errorCode}>S</span>cript{" "}
        <span className={highlights.errorCode}>O</span>bject{" "}
        <span className={highlights.errorCode}>N</span>odation
      </h2>
      <p>
        JSON ist ein Datenformat, das oft für den Austausch von Daten zwischen
        einem Server und einem Webclient verwendet wird. Es basiert auf einer
        einfachen Textdarstellung, als String, von Datenstrukturen wie Objekten
        und Arrays, die leicht von Mensch und Maschine lesbar sind.
      </p>
      <h3 className="font-extrabold text-xl">Syntax</h3>
      <pre>
        <code ref={codeRef} className="json">
          {`{
  "title": "Jurassic Park",
  "director": "Steven Spielberg",
  "releaseYear": 1993,
  "genre": "Adventure, Sci-Fi",
  "cast": [
    "Sam Neill",
    "Laura Dern",
    "Jeff Goldblum",
    "Richard Attenborough",
    "Bob Peck",
    "BD Wong",
    "Samuel L. Jackson",
    "Wayne Knight"
  ],
  "duration": "127 minutes",
  "boxOffice": "$1.033 billion"
}`}
        </code>
      </pre>
      <p>
        Die JSON-Syntax ist wie der Name bereits verlauten lässt, der JS Obeject
        Syntax nachempfunden. Allerdings gibt es auch einige Unterschiede. Wie
        bei einem Object werden die Daten in Key-Value-Pairs
        (Schlüssel-Wert-Paaren) dargestellt, wobei in JSON der Key{" "}
        <span className={highlights.errorCode}>immer</span> in Anführungszeichen
        stehen muss.
      </p>
      <pre>
        <code ref={codeRef} className="json">
          "firstname": "Max"
        </code>
      </pre>
      <p>
        - Wie in JS Objekten können Werte verschiedene Typen beinhalten, dazu
        gehören Zeichenketten (Strings), Zahlen (Number), Arrays, Booleans
        (true/false), weitere Objekte oder null.
      </p>
      <p>
        Die größeren Unterschiede, dass in JSON{" "}
        <span className={highlights.errorCode}>KEINE</span> Kommentare erlaubt
        sind, wodurch der Code sofort Maschinenlesbar ist. Auch dürfen
        Nachstehende Kommatas nicht gesetzt werden.
      </p>
      <pre>
        <code ref={codeRef} className="json">
          JSON &#123; "firstname": "Max", "lastname": "Mustermann" &#125;
        </code>
        <br />
        <code ref={codeRef} className="js">
          JS &#123; firstname: "Max", lastname: "Mustermann", &#125;
        </code>
      </pre>
      <h3 className="font-extrabold text-xl">Die Verwendung von JSON</h3>
      <p>
        JSON ist ein sehr kompaktes Format wodurch es sich für die
        Datenübertragung eignet und das veraltete Format{" "}
        <span className={highlights.code}>XML</span> abgelöst hat. Da man
        jegliche Art von Daten in JSON übertragen kann, wird es häufig zum
        Austauschen von Clients und Servern verwendet. Dies gilt nicht nur für
        die Kommunikation zwischen Webanwendungen und Server, sondern ebenso für
        andere wie Beispielsweise für die Kommunikation zwischen einem Server
        und einem Game-Client Server und Unreal Engine/
      </p>
      <p>
        JSON wird häufig zum Austausch von Daten zwischen einem Client (wie
        einem Browser) und einem Server verwendet, insbesondere in
        Webanwendungen. Es kann auch zum Speichern von Konfigurationsdaten, für
        APIs und als Datenformat für viele Anwendungen verwendet werden.
      </p>
    </article>
  );
};
