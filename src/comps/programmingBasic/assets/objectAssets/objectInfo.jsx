import { highlights } from "../../../../App";

export const ObjectInfo = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">Objekte - Daten in Relation</h2>
      <div className="py-4">
        Allgemein gesprochen ist ein Object erstmal ein Datentyp, der entweder
        für das Object selbst spricht oder aber für ein Array. Objekte kann man
        sich in etwa wie eine Sammlung von Eigenschaften vorstellen. Objekte
        bestehen aus zwei Teilen, dem Key und dem Value. Den Key kann man als
        Adresse sehen und der value ist der Wert.
      </div>
      <p className="pt-4 pb-2">
        Erstellen wir mal ein Objekt zum Thema Grafikkarte. Hierfür stellen wir
        uns als erstes die Frage, was die Eckpunkte einer Grafikkarte sind.
        Beispiel: Chipsatz, Anschlüsse, länge, breite und vieles mehr.
      </p>
      <pre>
        <code>
          const graka = &#123; <br />
          &#9;name: "RTX 3060", <br />
          &#9;company: "Gigabyte", <br />
          &#9;storage: "GDDR6 12", <br />
          &#9;price: "299", <br />
          &#9;description: "Bla bla bla", <br />
          &#125;
        </code>
      </pre>
      <p>
        Wie man sieht ist ein Object eine Möglichkeit Daten in Relation
        zueinander aufzubauen. Alle Daten im obrigen Object haben einen Bezug
        zum Hauptthema des Objektes. Die Keys sind Eigenschaften, die jede
        Grafikkarte hat, die Werte hingegen beziehen sich auf eine spezifische
        Grafikkarte.
      </p>
      <p>
        Das Object besteht aus sogenannten Key-Value Paaren. Im obrigen Beispiel
        gibt es den Key <span className={highlights.code}>price</span> über den
        man auf den Wert/Value zugreifen kann.
      </p>
      <pre>
        <code>Dotnotation - console.log(graka.price)</code>
        <br />
        <code>Bracketnotation - console.log(graka['price'])</code>
      </pre>
      <p>
        Wenn man nun versuchen würde Daten aus Arrays miteinander zu verknüpfen
        würde das ganze in etwa so aussehen. Da ist es doch um einiges schöner,
        dass es Objekte gibt, die eine gewisse Datenstruktur bereits mitbringen.
      </p>
      <div className="imgContainer flex items-center justify-center p-0 h-36 2xl:h-48">
        <img
          className="w-full md:w-8/12 lg:w-6/12"
          src="./images/arrayRelation.png"
          alt="Github Extension preview"
        />
      </div>
    </article>
  );
};
