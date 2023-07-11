export const Ternary = () => {

  let price = 0

  return(
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Ternary</h2>
      <div className="py-4">
        Ein Ternary ist eine Art Kurzschreibweise einer if-else Anweisung. Wie das klassische if-else besteht ein Ternery ebenfalls aus <p className="code">condition ? value1 : value2</p> und gibt einen true/fals Wert zurück.
      </div>
      <h3>Anwendungsbeispiel in der Console</h3>
      <p className="py-4 code">
          const age = 13<br />
          let price = 0<br />
          age &gt;= 18 ? price = 12 : price = 18
      </p>
      <div className="py-10"></div>
      <h3>Anwendungsbeispiel in React</h3>
      <div className="py-4 code react">
        <pre>
            <code>
              let price = 0;<br />
              const age = 13;<br />
              <br />
              return(
                "price === 18"<br />
                &#9;? &lt;div&gt;
                    18 €
                    &lt;/div&gt;<br />
                &#9;: &lt;div&gt;
                    12 €
                  &lt;/div&gt;<br />
              )
            </code>
          </pre>
      </div>
    </article>
  )
}