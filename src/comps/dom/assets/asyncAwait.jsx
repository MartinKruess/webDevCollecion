import { highlights } from "../../../App";

export const AsyncAwait = () => {
  return (
    <>
      <h3 className="font-extrabold text-xl">
        Anwendung der Keywords 'async' und 'await'
      </h3>
      <p>
        Die Keywords <span className={highlights.code}>async</span> und{" "}
        <span className={highlights.code}>await</span>
        werden verwendet um asynchrone Operationen auf eine übersichtliche Art
        zu handhaben, ohne dabei <span className={highlights.code}>
          .then
        </span>{" "}
        verwenden zu müssen. Das <span className={highlights.code}>async</span>{" "}
        Keyword steht hierbei in der Regel im Function-Header.
      </p>
      <pre>
        <code>
          const myFunction = <span className={highlights.errorCode}>async</span>{" "}
          () =&gt; &#123; <br />
          <span className={highlights.errorCode}>async</span> function
          myFunction () &#123;
        </code>
      </pre>
      <p>
        Mittlerweile ist es in NodeJS ebenfalls möglich ein await ohne ein
        vorangegangenes async auf toplevel zu verwenden, allerdings hat dies
        auch einige Nachteile, weswegen ich persönlich es nicht vewende. Einer
        der größten Nachteile hierbei ist, dass ein{" "}
        <span className={highlights.code}>toplevel await</span>, jeglichen
        wieteren Code innerhalb des Modules blockiert, da dadurch das komplette
        Module als Async angesehen wird. Oft kann dies zu Problemen führen.
      </p>
      <h4 className="font-extrabold text-lg">Verwendung von try...catch</h4>
      <p>
        Verwendet wird try catch um Fehler zu behandeln, die z.B. auftreten
        können bei der Arbeit mit Benutzereingaben, API- oder Netzwerkanfragen.
        Innerhalb des try-Blocks wird der Code ausgeführt, der zur Bearbeitung
        der erwarteten Daten Dient. Sollte hierbei ein Fehler auftreten wird
        dieser durch das catch abgefangen, der try-Block unterbricht, und es
        wird der Code innerhalb des catch-Blocks ausgeführt. Durch diese Art der
        Fehlerbehandlung (ErrorHandling) wird gewährleistet, dass ein Fehler
        nicht den gesamten Code unterbricht und das Programm/die Webseite
        funktioniert weiterhin.
      </p>
      <pre className="text-sm">
        // Das ist eine Async-Function
        <br />
        // Die ganze Funktion ist Asynchron wodurch der return dieser Funktion
        ein Promise ist
        <br />
        // async = Behandle diesen Code als Asynchron
        <br />
        // await = Warte bis der Promise erfüllt ist (bis die Daten da sind)
        <br />
        <br />
        <code>
          async function loadData() &#123;
          <br />
          &#9;const dataContainer = document.getElementById('data-container');
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;const response = await fetch('https://api.example.com/data');
          <br />
          <br />
          &#9;&#9;// Statuscode 200-299 means 'ok'
          <br />
          &#9;&#9;if (!response.ok) &#123;
          <br />
          &#9;&#9;&#9;throw new Error(`Fehler: &#36;&#123;response.status&#125;
          - &#36;&#123;response.statusText&#125;`);
          <br />
          &#9;&#9;&#125;
          <br />
          <br />
          &#9;&#9;// wait data as JSON (parsing)
          <br />
          &#9;&#9;const data = await response.json(); <br />
          &#9;&#9;dataContainer.innerHTML = `&lt;p&gt;Erhaltene Daten:
          &#36;&#123;JSON.stringify(data)&#125;&lt;/p&gt;`; <br />
          &#9;&#125; catch (error) &#123; <br />
          &#9;&#9;// Change Output by Error <br />
          &#9;&#9;dataContainer.innerHTML = `&lt;p style="color:red;"&gt;Daten
          konnten nicht geladen werden. Bitte versuchen Sie es später
          erneut.&lt;/p&gt;`; <br />
          &#9;&#125; <br />
          &#125;
        </code>
      </pre>
    </>
  );
};
