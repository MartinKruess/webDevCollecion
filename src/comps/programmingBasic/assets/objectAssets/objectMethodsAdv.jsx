import { highlights } from "../../../../App";

export const ObjectMethodsAdv = () => {
  return (
    <article>
      <h2 className="font-extrabold text-xl">Advanced Object Methoden</h2>
      <div className="grid grid-cols-10">
        <p className="col-start-2 col-end-10">Allgemeiner Text</p>
        <p className="col-start-1 col-end-3">
          <span className={highlights.code}>Object.values(obj)</span>
        </p>
        <p className="col-start-4 col-end-11">Text zu values</p>
        <p className="col-start-1 col-end-3">
          <span className={highlights.code}>Object.keys(obj)</span>
        </p>
        <p className="col-start-4 col-end-11">Text zu keys</p>
        <p className="col-start-1 col-end-3">
          <span className={highlights.code}>Object.entries(obj)</span>
        </p>
        <p className="col-start-4 col-end-11">Text zu Entries</p>
        <p className="col-start-1 col-end-3">
          <span className={highlights.code}>Object.assign(obj)</span>
        </p>
        <p className="col-start-4 col-end-11">Text zu assign</p>
        <pre className="col-span-5 mr-3">
          Bei der Zusammenführung mehrer Objekte ist der return Wert optional,
          da dieser die selben Daten enthält, wie das erste Objekt.
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