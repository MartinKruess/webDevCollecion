import { highlights } from "../../App";
import { ObjectMethodsAdv } from "./assets/objectAssets/ObjectMethodsAdv";

export const ObjectsAdv = () => {
  return (
    <article className="p-4">
      <ObjectMethodsAdv />
      <h3 className="font-extrabold text-xl">Spread und Rest Operatoren</h3>
      <div className="grid grid-cols-10 gap-y-10">
        <p className="col-start-2 col-end-10">
          ALLGEMEIN: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque soluta, ab vitae aliquam tenetur minus fugit officiis suscipit
          quaerat accusamus cupiditate aperiam nesciunt qui sequi natus
          voluptatum saepe praesentium esse?
        </p>
        <h3 className="font-extrabold text-xl col-start-1 col-end-12">
          Verwenden des <span className={highlights.code}>...Spread</span>
          -Operator
        </h3>
        <p className="col-start-1 col-end-11">
          Der Spread-Operator ist ein mächtiges Tool.
        </p>
        <pre className="col-start-1 col-end-8">
          <p>Rest Operator auf ein Objekt bezogen</p>
          <code>
            const securitySusi = &#123;
            <br />
            &#9;firstName: "Susi",
            <br />
            &#9;lastName: "Sorglos",
            <br />
            &#9;department: "Security",
            <br />
            &#9;age: 33, &#9;
            <br />
            &#9;adress: "Köln", &#125;;
            <br />
            <br />
            const &#123; firstName, department, ...restOfSusi &#125; =
            securitySusi
          </code>
        </pre>
        <h3 className="font-extrabold text-xl col-start-1 col-end-12">
          Destructuring mit <span className={highlights.code}>...Rest</span>
          -Operator
        </h3>
        <p className="col-start-1 col-end-11">
          Der Rest-Operator wird verwendet um die Struktur von Arrays und
          Objekten aufzulösen. Mit dem Rest-Operator ist es also möglich
          gewollte Werte in Variablen und den Rest in einem Arrays zu speichern.
          Hierbei ist es wichtig, für Objekte die{" "}
          <span className={highlights.code}>&#123; &#125;</span> und für Arrays
          die <span className={highlights.code}>[ ]</span> Klammern zu
          verwenden.
        </p>
        <pre className="col-start-1 col-end-8">
          <p>Rest Operator auf ein Array bezogen</p>
          <code>
            const allEmployees = [<br />
            &#9;&#123; firstName: "Thomas", lastName: "Tiger", department: "HR"
            &#125;,
            <br />
            &#9;&#123; firstName: "Michael", lastName: "Meyer", department:
            "Secretary" &#125;,
            <br />
            &#9;&#123; firstName: "Kathrin", lastName: "Kramer", department:
            "Procution" &#125;,
            <br />
            &#9;&#123; firstName: "Jeff", lastName: "James", department:
            "Procution" &#125;,
            <br />
            &#9;&#123; firstName: "Cindy", lastName: "Clap", department:
            "Procution" &#125;
            <br />
            &#9;&#123; firstName: "Rainer", lastName: "Zufall", department:
            "Procution" &#125;
            <br />
            ];
            <br />
            <br />
            const [hr, secretary, ...prodEmployees] = employees
          </code>
        </pre>
        <p className="col-start-8 col-end-12 px-8">Description</p>
        <pre className="col-start-1 col-end-8">
          <p>Rest Operator auf ein Objekt bezogen</p>
          <code>
            const securitySusi = &#123;
            <br />
            &#9;firstName: "Susi",
            <br />
            &#9;lastName: "Sorglos",
            <br />
            &#9;department: "Security",
            <br />
            &#9;age: 33, &#9;
            <br />
            &#9;adress: "Köln", &#125;;
            <br />
            <br />
            const &#123; firstName, department, ...restOfSusi &#125; =
            securitySusi
          </code>
        </pre>
        <p className="col-start-8 col-end-12 px-8">Description</p>
      </div>
      {/* 
        - POINTER
        - JSON
      */}
      <a
        href="https://www.mediaevent.de/javascript/this.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        this (gut erklärt)
      </a>
    </article>
  );
};
