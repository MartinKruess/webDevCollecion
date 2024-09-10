import { highlights } from "../../App";
import { AsyncAwait } from "./assets/asyncAwait";
import { AsyncSpecial } from "./assets/asyncSpecial";
import { AsyncStart } from "./assets/asyncStart";

export const Async = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">
        Synchoner und Asynchroner Code (Promise, .then, .try, .catch mit und
        ohne async)
      </h2>
      <AsyncStart />
      <AsyncSpecial />
      <h3 className="font-extrabold text-xl">
        Wie wird .then, .try, .catch angewendet?
      </h3>
      <p>
        <span className={highlights.errorCode}>Text folgt in Kürze...</span>
      </p>
      <pre className="text-sm">
        <code>
          fetch('https://api.example.com/data')
          <br />
          &#9;.then(response =&gt; &#123;
          <br />
          <br />
          &#9;&#9;// Statuscode 200-299 is 'ok'
          <br />
          &#9;&#9;if (!response.ok) &#123;
          <br />
          &#9;&#9;&#9;return Promise.reject(`Fehler:
          &#36;&#123;response.status&#125; - &#36;&#123;
          response.statusText&#125;`);
          <br />
          &#9;&#9;&#125;
          <br />
          &#9;&#9;// Convert answer in JSON
          <br />
          &#9;&#9;return response.json();
          <br />
          &#9;&#125;)
          <br />
          &#9;.then(data =&gt; &#123;
          <br />
          &#9;&#9;dataContainer.innerHTML = `&lt;p&gt;Erhaltene Daten:
          &#36;&#123;JSON.stringify(data)&#125;&lt;/p&gt;`;
          <br />
          &#9;&#125;)
          <br />
          &#9;.catch(error =&gt; &#123; <br />
          &#9;&#9;// change Output by Error <br />
          &#9;&#9;dataContainer.innerHTML = `&lt;p style="color:red;"&gt;Daten
          konnten nicht geladen werden. Bitte versuchen Sie es später
          erneut.&lt;/p&gt;`; <br />
          &#9;&#125;); <br />
          &#125;
        </code>
      </pre>
      <AsyncAwait />
      <div className="linkContainer">
        <a
          href="https://www.heise.de/hintergrund/Einfuehrung-in-die-asynchrone-JavaScript-Programmierung-2752531.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asynchrone Programmierung (Simple)
        </a>
      </div>
    </article>
  );
};
