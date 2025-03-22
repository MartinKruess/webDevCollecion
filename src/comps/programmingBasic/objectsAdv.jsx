import { highlights } from "../../App";
import { ObjectMethodsAdv } from "./assets/objectAssets/objectMethodsAdvanced";

export const ObjectsAdv = () => {
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  let x = sum(4, 9, 5, 2, 10, 6, 7);
  console.log(x);

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
        <p className="col-start-1 col-end-12">
          Der spread-Operator wandelt alles, was iterierbar ist, in ein Array:
          Strings, Map, Set und kombiniert Objekte und Arrays. Spread ist eine
          schnelle Syntax, die ein Element in ein Array einfügt, Arrays oder
          Objekte miteinander kombiniert und die Elemente eines Arrays auf die
          Argumente einer Funktion verteilt.
        </p>
        <pre className="col-start-1 col-end-12 text-sm">
          <p>Spread Operator auf ein Objekt bezogen</p>
          <code>
            const baseArticleData = &#123;
            <br />
            &#9;articleTitle: "TestTitle",
            <br />
            &#9;articleDescription: "TestDescription",
            <br />
            &#9;stock: 0,
            <br />
            &#9;articlePriceIn: 16,43, &#9;articlePriceOut: ,
            <br />
            &#125;;
            <br />
            <br />
            const userData = &#123;
            <br />
            &#9;...baseArticleData,
            <br />
            &#9;fullName: "Daniel Düsentrieb",
            <br />
            &#9;department: "Developer",
            <br />
            &#125;
          </code>
        </pre>
        <pre className="col-start-1 col-end-12 text-sm">
          <p>
            Spread Operator angewendet auf ein Array, das in einzel Argumenten
            an eine Funktion übergeben wird.
          </p>
          <code>
            let args = [17, 4];
            <br />
            function sum (a, b) &#123;
            <br />
            &#9;return a + b;
            <br />
            &#125;
            <br />
            <br />
            console.log("Sum ohne Spread:", sum (args)); // undefined
            <br />
            console.log ("Sum mit Spread:", sum (...args)); // 17
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
        <pre className="col-start-1 col-end-12 text-sm">
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
            const [hr, secretary, ...prodEmployees] = allEmployees
          </code>
        </pre>
        <pre className="col-start-1 col-end-12 text-sm">
          Im Parameter bewirkt der ...Rest-Operator, dass eine Funktion beliebig
          viele Argumente annehmen kann und diese in Form eines Arrays innerhalb
          der Funktion verwendet werden können.
          <br />
          <br />
          <code>
            function sum(...args) &#123;
            <br />
            &#9;let sum = 0;
            <br />
            &#9;for (let arg of args) sum += arg;
            <br />
            &#9;return sum;
            <br />
            &#125;
            <br />
            <br />
            let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
          </code>
        </pre>
        <pre className="col-start-1 col-end-12 text-sm">
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
          Deep-Copy mit{" "}
          <span className={highlights.code}>structuredClone()</span>
          -Operator
        </h3>
        <p className="col-start-1 col-end-12">
          Während der Spread-Operator nur in der Lage ist eine oberflächliche
          Kopie eines Arrays zu machen (first layer) ist structuredClone() seit
          2021 eine sehr nützliche Funktion um eine Deep-Copy einer Array
          und/oder Objektstruktur zu machen. Wo man zuvor den genauen Aufbau
          einer Datenstruktur kennen musste um durch die verschiedenen Layer mit
          diversen For-Loops loopen zu könenn, bietet structuredClone() eine
          einfache Lösung.
        </p>
        <pre className="col-start-1 col-end-12 text-sm">
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
            &#9;&#123; firstName: "Cindy", lastName: "Clap", department:
            "Procution" &#125;
            <br />
            &#9;&#123; firstName: "Rainer", lastName: "Zufall", department:
            "Procution" &#125;
            <br />
            ];
          </code>
        </pre>
        <pre className="col-start-1 col-end-12 text-sm">
          <p>structuredClone auf ein Array angewendet</p>
          <code>const arrDeepCopy = structuredClone(allEmployees)</code>
        </pre>
        <pre className="col-start-1 col-end-12 text-sm mb-6">
          <p>structuredClone auf ein Object angewendet</p>
          <code>const objDeepCopy = structuredClone(employee)</code>
        </pre>
      </div>
    </article>
  );
};
