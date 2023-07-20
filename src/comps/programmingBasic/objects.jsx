export const Objects = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Objekte - Daten in Relation</h2>
      <div className="py-4">
        Allgemein gesprochen ist ein Object erstmal ein Datentyp, der entweder
        für das Object selbst spricht oder aber für ein Array. Objekte kann man
        sich in etwa wie eine Sammlung von Eigenschaften vorstellen. Objekte
        bestehen aus zwei Teilen, dem Key und dem Value. Den Key kann man als
        Adresse sehen und der value ist der Wert.
      </div>
      <p>
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
        gibt es den Key "price" über den man auf den Wert/Value zugreifen kann.
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
      <div className="imgContainer">
        <img
          className="small"
          src="./images/arrayRelation.png"
          alt="Github Extension preview"
        />
      </div>
      <h2 className="font-extrabold text-xl">Arbeiten mit Objects</h2>
      <p>
        Es gibt verschiedene Arten ein Objekt zu bearbeiten. Create, add,
        change, delete
      </p>
      <pre>
        <code>Create: const obj = {}</code>
        <br />
        <code>Add & Change: obj.key = newValue</code>
        <br />
        <code>Löschen: delete obj.key</code>
      </pre>
      <p>
        Der Value eines Objektes kann nicht nur ein fester Wert sondern auch
        eine Variable oder eine Funktion sein.
      </p>
      {/*
      Funktion im Object - Mit Function Expression (correct)
      ArrowFunctions machen Probleme!

      say: function(name){
        console.log(`Hallo ${name}`)
      }

      object.say('Lisa')
      
      Kurzschreibweise
      sayShort(name){
        console.log(`Hallo ${name}`)
      }
      object.sayShort('Paul')

      Nachteil: man muss den ObjektName kennen
      vorstellen(){
        consoloe.log(`Hallo ich heiße ${object.name}`)
      }
      Vorteil: Man muss den ObjektName nicht kennen Nachteil: Funktioniert nicht in ArrowFunction
      vorstellen(){
        consoloe.log(`Hallo ich heiße ${this.name}`)
      }

      Fehler: this bezieht sich auf global nicht auf das Objekt
      vorstellen() => {
        consoloe.log(`Hallo ich heiße ${this.name}`)
      }

      ----------------------------------

      function fullName () {
        console.log(`Guten Tag, mein Name ist ${this.vorname} ${this.nachname} und komme aus ${this.city}`)
      }

      object.fullName = fullName
      oder object.name = fullName

      ----------------------------------

      delete object.key
      */}
      <h2 className="font-extrabold text-xl">Ein Array of Objects</h2>
      <p>
        Wie bei Numbers, Stings und Boolians, kann man auch Objekte in einem
        Array speichern. Dies hat den Vorteil, dass man große Datenmengen des
        selben Typs strukturieren kann. Nehmen wir hierfür ein weiteres
        Beispiel: Tim und Lisa
      </p>
      <pre>
        <code>
          const children = [<br />
          &#9;&#123; <br />
          &#9;&#9;name: "Tim", <br />
          &#9;&#9;age: 14, <br />
          &#9;&#9;city: "Hamburg", <br />
          &#9;&#9;hobbies: ["Fussball", Schwimmen], <br />
          &#9;&#125;,
          <br /> &#9;&#123; <br />
          &#9;&#9;name: "Lisa", <br />
          &#9;&#9;age: "13", <br />
          &#9;&#9;city: "Berlin", <br />
          &#9;&#9;hobbies: ["Reiten", Schwimmen], <br />
          &#9;&#125;
          <br /> ]
        </code>
      </pre>
      <p>
        Nun haben wir das Array mit dem Namen children und inner dieses Arrays
        haben zwei childs Tim und Lisa, diese lassen sich, wie gewohnt, mit [i]
        ansprechen. Lasst uns dochmal den Satz bilden: "Tim kommt aus Hamburg."
      </p>
      <pre>
        <code>
          console.log(children[0].name, "kommt aus", children[0].city + ".")
        </code>
      </pre>
    </article>
  );
};
