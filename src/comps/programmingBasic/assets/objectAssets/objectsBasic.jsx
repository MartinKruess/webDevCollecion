export const ObjectBasic = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Arbeiten mit Objekten</h2>
      <pre className='text-sm'>
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
        Es gibt verschiedene Arten ein Objekt zu bearbeiten. Create, add,
        change, delete und die Anwndung von Methoden.
      </p>
      <pre className='text-sm'>
        <code>Create: const obj = &#123; &#125;</code>
        <br />
        <code>Add: graka.title = ""</code>
        <br />
        <code>Change: graka.company = "Asus"</code>
        <br />
        <code>Löschen: delete graka.description</code>
      </pre>
    </article>
  );
};
