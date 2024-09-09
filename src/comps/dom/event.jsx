import { highlights } from "../../App";

export const EventHandler = () => {
  return (
    <article>
      <h2 className="font-extrabold text-xl">Was ist ein Event?</h2>
      <p>
        Ein Event ist eine Aktion, Interaktion oder ein Ereignis, im Browser,
        wie beispielsweise ein Mausklick (onclick), Keypress oder das Laden der
        Seite. Events sind ein wichtiger Teil des Webs, denn dadurch können User
        mit der Webseite interargieren und wir setzen diese Interaktionen in
        Reaktionen um, um die Seite dynamisch zu verändern/anzupassen.
      </p>
      <p>Ein simples Beispiel für ein Event ist ein Klick auf einen Butten.</p>
      <pre>
        <code>
          &lt;button onclick="alert('Button wurde geklickt!')"&gt;Klick
          mich!&lt;/button&gt;
        </code>
      </pre>
      <button
        className="px-4 py-2 my-2 bg-slate-400 border-l-fuchsia-900"
        onClick={() => alert("Button wurde geklickt!")}
      >
        Klick mich!
      </button>
      <h2 className="font-extrabold text-xl">Grundlagen des Event-Handling</h2>
      <p>
        Um mit Events vernünftig arbeiten zu können benötigen wir einen
        sogenannten EventHandler. Das ist in der Regel eine Function, die, bei
        einem oder mehreren Events, ausgeführt wird. Events lassen sich direkt
        im HTML, mit Keywords wie{" "}
        <span className={highlights.code}>onclick</span>, oder über Javascript
        hinzugefügt.
      </p>
      <pre>
        <code>
          &lt;!-- HTML --&gt;
          <br /> &lt;button class="myFirstBtn"&gt;Klick Mich&lt;button&gt;
          <br />
          <br />
          // Javascript <br />
          document.querySelector('.myFirstBtn').onclick = function() &#123;
          <br />
          &#9;console.log('Button wurde geklickt!');
          <br />
          &#125;
        </code>
      </pre>
    </article>
  );
};
