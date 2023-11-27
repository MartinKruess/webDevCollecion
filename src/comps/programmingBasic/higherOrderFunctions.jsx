export const HigherOrderFunctions = () => {
  return (
    <article>
      <h3 className="font-extrabold text-xl">Higher order Functions</h3>
      <p>
        Wir haben uns bisher mit den map- und filter Patterns beschäftigt. Das
        bedeutet wir haben eine Map und Filter Funktion selbst aufgebaut. Doch
        unter der Verwendung der Callback-Function können wir nun die map und
        filter Methode anwenden.
      </p>
      <pre>
        <p>Map Grundaufbau</p>
        <code>
          array.map((einzelnesElement, index) =&gt; Funktionskörper)
          array.map(elem =&gt; Funktionskörper) arr.map((elem, i, ) =&gt;
          Funktionskörper)
        </code>
      </pre>
      <pre>
        <code>
          const zahlen = [5.2, 3.6, 11.1, 17.0, 2.5]
          <br />
          <br />
          const arrX3 = zahlen.map(zahl =&gt; zahl *3)
          <br />
          const arrRound = zahlen.map((zahl) =&gt; Math.round(zahl))
          <br />
          <br />
          // Shorthand
          <br />
          const arrRoundX3 = zahlen.map(Math.round)
        </code>
      </pre>
    </article>
  );
};
