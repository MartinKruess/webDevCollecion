export const Ternary = () => {
  let price = 0;

  return (
    <article className='py-4'>
      <h2 className='font-extrabold text-2xl'>Ternary</h2>
      <div className='py-2'>
        <p>
          Ein Ternary ist eine Art Kurzschreibweise einer if-else Anweisung. Wie
          das klassische if-else besteht ein Ternery ebenfalls aus
        </p>
        <pre>
          <code>condition ? value1 : value2</code>
        </pre>
        und gibt einen true/fals Wert zurück.
      </div>
      <h3 className='font-extrabold text-xl'>
        Anwendungsbeispiel in der Console
      </h3>
      <pre>
        <code>
          const age = 13
          <br />
          let price = 0<br />
          age &gt;= 18 ? price = 12 : price = 18
        </code>
      </pre>
      <div className='py-2'></div>
      <h3 className='font-extrabold text-xl'>Anwendungsbeispiel in React</h3>
      <pre className='react text-sm'>
        <code>
          let price = 0;
          <br />
          const age = 13;
          <br />
          <br />
          return( "price === 18"
          <br />
          &#9;? &lt;div&gt; 18 € &lt;/div&gt;
          <br />
          &#9;: &lt;div&gt; 12 € &lt;/div&gt;
          <br />)
        </code>
      </pre>
    </article>
  );
};
