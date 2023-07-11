export const Loop = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Die verschiedenen Arten Schleifen</h2>
      <p className="pt-4 pb-2">
        Unter einer Schleife (Loop) versteht man eine abgeschlossene, sich selbst wiederholende Codeabfolge, die solange ausgeführt wird, bis die Bedingung nicht mehr "ture" ist.
      </p>
      <div className="code">
        <pre>
          <code>
            for(let i = 0; i &lt; 5; i++) &#123;<br />
            &#9;console.log("Do something", i+1, "times")<br />
            &#125;
          </code>
        </pre>
      </div>
      <p className="pt-2 pb-4">
        Wir unterscheiden zwischen drei verschiedenen Loops. Die wohl verbreiteste Schleife ist die "for-loop", wie im obrigen Beispiel. Eine ältere Alternative zur for-loop ist die while loop während die do-while loop sich gänzlich anders verhält.
      </p>
      <div className="pt-4 pb-2">
        <h2 className="font-extrabold text-2xl pt-8">Die verschiedenen Art von Loops:</h2>
        <h3 className="font-extrabold text-xl pt-8">for und while</h3>
        <div className="code">
          <div>
            <pre>
              <code>
                for(let i = 0; i &lt; 5; i++) &#123;<br />
                &#9;console.log(i, "ist kleiner als 5!")<br />
                &#125;
              </code>
            </pre>
          </div>
          <div>
            <pre>
              <code>
                while (let i = 0; i &lt; 5; i++) &#123;<br />
                &#9;console.log(i, "ist kleiner als 5!")<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
        <h3 className="font-extrabold text-xl pt-8">do-while</h3>
        <div className="code">
          
          <pre>
            <code>
              let i = 0<br />
              do &#123;<br />
              &#9;console.log(i, "ist kleiner als 5!")<br />
              &#125; while (i &lt; 5)<br />
            </code>
          </pre>
        </div>
      </div>
      <h3 className="font-extrabold text-xl pt-8">Nested Loops</h3>
      <div className="py-4 code">
        <pre>
          <code>
            const quote = "Thanks God it´s Friday!"<br />
            const vowels = "aeiou"<br /><br />
            for(let q = 0; q &lt; quote.lenght; q++)&#123;<br />
            &#32;let quoteLetter = quote[q]<br /><br />

            &#32;for(let v = 0; v &lt; vowels.lenght; v++)&#123;<br />
            &#9;let vowelsLetter = vowels[v]<br /><br />

            &#9;if(quoteLetter === vowelsLetter)&#123;<br />
            &#9;&#9;console.log(quoteLetter)<br />
              &#9;&#125;<br />
              &#32;&#125;<br />
            &#125;
          </code>
        </pre>
      </div>
      <p className="pt-4 pb-2">
        Gelegentlich kommt es vor, dass man einen Nested Loop aufbauen muss.
      </p>
    </article>
  )
}