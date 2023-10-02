export const ArrayOfObjects = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Ein Array of Objects</h2>
      <p>
        Wie bei Numbers, Stings und Boolians, kann man auch Objekte in einem
        Array speichern. Dies hat den Vorteil, dass man große Datenmengen des
        selben Typs strukturieren kann. Nehmen wir hierfür ein weiteres
        Beispiel: Tim und Lisa
      </p>
      <pre className='text-sm'>
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
        Nun haben wir das Array mit dem Namen children und innerhalb dieses
        Arrays haben zwei childs Tim und Lisa, diese lassen sich, wie gewohnt,
        mit [i] ansprechen. Lasst uns dochmal den Satz bilden: "Tim kommt aus
        Hamburg."
      </p>
      <pre>
        <code>
          console.log(children[0].name, "kommt aus", children[0].city + ".")
        </code>
      </pre>
    </article>
  );
};
