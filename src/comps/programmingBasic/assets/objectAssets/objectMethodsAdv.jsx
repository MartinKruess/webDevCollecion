import { highlights } from "../../../../App";

export const ObjectMethodsAdv = () => {
  return (
    <article>
      <h2 className="font-extrabold text-xl">Advanced Object Methoden</h2>
      <div className="grid grid-cols-12">
        <p className="col-start-2 col-end-12">Allgemeiner Text</p>
        <p className="col-span-2">
          <span className={highlights.code}>Object.values(obj)</span>
        </p>
        <pre className="col-span-3">
          <code>
            const obj = &#123;
            <br />
            &#9;firstName:&#9;<span className={highlights.code}>"Sarah"</span>,
            <br />
            &#9;lastName:&#9;<span className={highlights.code}>"Müller"</span>,
            <br />
            &#9;age:&#9;&#9;<span className={highlights.code}>"26"</span>,
            <br />
            &#125;
          </code>
        </pre>
        <p className="col-span-6 px-5 border">Mit der Objekt-Methode Object.values(obj) wird ein Array erstellt, dass die Values des übergebenen Objektes als Werte beinhaltet.</p>
        <p className="col-span-2">
          <span className={highlights.code}>Object.keys(obj)</span>
        </p>
        <pre className="col-span-3">
          <code>
            const obj = &#123;
            <br />
            &#9;<span className={highlights.code}>firstName</span>&#9;: "Sarah",
            <br />
            &#9;<span className={highlights.code}>lastName</span>&#9;: "Müller",
            <br />
            &#9;<span className={highlights.code}>age</span>&#9;&#9;&#9;: 26,
            <br />
            &#125;
          </code>
        </pre>
        <p className="col-span-6 px-5 border">Mit der Objekt-Methode Object.keys(obj) wird ein Array erstellt, dass die Keys des übergebenen Objektes als Werte beinhaltet.</p>
        <p className="col-span-2">
          <span className={highlights.code}>Object.entries(obj)</span>
        </p>
        <p className="col-span-10 px-5">Mit der Objekt-Methode Object.entries(obj) wird ein Array erstellt, dass alle Entries (Keys u. Values) des übergebenen Objektes als Werte beinhaltet.</p>
        <p className="col-span-2">
          <span className={highlights.code}>Object.assign(obj)</span>
        </p>
        <p className="col-span-10 mr-2">
          Die asign Methode ist eine Methode um mehrere Objekte zusammen zu führen. Etwas Zweckentfremdet kann man mit dieser Methode eine Kopie eines Objektes erzeugen, da diese methode einen Return Value ausgibt, das unabhäng vom originalen Objekt existiert.
        </p>
        <pre className="col-start-3 col-end-8 mr-2">
          Bei der Zusammenführung mehrer Objekte ist der return Wert optional,
          da dieser die selben Daten enthält, wie das erste Objekt nach der Zusammenführung.
          <br />
          <code>
            <span className={highlights.blinc}>const returnObj = </span>
            Object.assign(obj1, obj2, ...)
          </code>
        </pre>
        <pre className="col-span-5 ml-3">
          Bei der Kopie von Objekten ist der return Wert wichtig, da die Daten
          im empty Object &#123; &#125; gesammelt werden und das Objekt über den
          return Wert erzeugt wird.
          <br />
          <code>
            <span className={highlights.code}>const returnObj = </span>
            Object.assign(&#123; &#125;, obj2, ...)
          </code>
        </pre>
      </div>
    </article>
  );
};
