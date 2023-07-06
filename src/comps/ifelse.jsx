export const IfElse = () => {

  return(
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Condiuional Statement (If-Else)</h2>
      <p className="pt-4 pb-2">
        Das klassische If (wenn -> dann) ist ein logischer Operator bestehend aus:
      </p>
      <p className="code">
        <pre>
          <code>
            if(condition)&#123;<br />
              console.log("Do something")<br />
            &#125;
          </code>
        </pre>
      </p>
      <p className="pt-2 pb-4">
        Wobei die Condition einen true/fals Wert zurück gibt. Sollte die Condition den Boolian true zurück geben wird der Code im inneren des if ausgeführt.
      </p>
      <p className="pt-4 pb-2">
        Das Gegenstück zum if (wenn) ist das else (sonst). Während man das if auch ohne ein else Anwenden kann, so kann das else nur zusammen mit einem if verwendet werden. Der else Fall hat hierbei keine condition.
        <p className="code">
          <pre>
            <code>
              if(condition)&#123;<br />
                console.log("Do something")<br />
              &#125; else &#123;<br />
                console.log("Do something different")<br />
              &#125;
            </code>
          </pre>
        </p>
      </p>
      <h3 className="font-extrabold text-xl pt-8">Anwendungsbeispiel von If und If-Else</h3>
      <p className="pt-4 pb-2">
        In diesem Fall wird geprüft ob du müde bist, wenn das zutrifft (true), dann kommt die Nachricht, "Go to bed!" Hier wird nur auf true geprüft, weshalb es keinen else-Fall gibt.
      </p>
      <p className="py-4 code">
        <pre>
          <code>
            if(tired)&#123;<br />
              console.log("Go to bed!")<br />
            &#125;
          </code>
        </pre>
      </p>
      <p className="pt-4 pb-2">
        Anders sieht das ganze bei Vergleichen aus. Bist du älter als ich? Ist dein Haus größer als meins? Hast du das schnellere Auto? Hierbei gibt es immer einen true und einen false Fall. Je nach Rückgabewert wird ein anderer Fall verwendet.
      </p>
      <p className="py-4 code">
        <pre>
          <code>
            if(yourAge > myAge)&#123;<br />
              console.log("You are older than me.")<br />
            &#125; else &#123;<br />
              console.log("You are younger than me.")<br />
            &#125;
          </code>
        </pre>
      </p>
      <h3 className="font-extrabold text-xl pt-8">If-Else Nesting (Verschachtelung)</h3>
      <p className="pt-4 pb-2">
        Das Verschachteln von If-Abfragen wird verwendet um Mehrfachabfragen umzusetzen, wie im nächsten Beispiel.<br />
        Frage: Ist gerade Sommer, Winter, Frühling oder Herbst?<br />
        Ausgaben:<br />
        "Wollen wir ein Eis essen?"(Sommer),<br />
        "Wollen wir einen Glühwein trinken?"(Winter),<br />
        "Ostern steht vor der Tür."(Frühling),<br />
        "Happy Halloween!"(Herbst)
      </p>
      <p className="py-4 code">
        <pre>
          <code>
            if(jahreszeit === "Sommer")&#123;<br />
              console.log("Wollen wir ein Eis essen?")<br />
            &#125; else &#123;<br />
              if(jahreszeit === "Winter")&#123;<br />
                console.log("Wollen wir Glühwein trinken?")<br />
              &#125; else &#123;<br />
              if(jahreszeit === "Herbst")&#123;<br />
              console.log("Happy Halloween!.")<br />
            &#125; else &#123;<br />
              console.log("Ostern steht vor der Tür.")<br />
            &#125;
            &#125;
            &#125;
          </code>
        </pre>
      </p>
      <p className="pt-2 pb-4">
        Wie man an diesem Beispiel leicht sieht, werden nested If-Abfragen je nach Komplexität sehr unübersichtlich. Daher sollte man diese möglichst vermeiden. 
      </p>
      <p className="pt-4 pb-2">
        Vermeiden lassen sidh nested If-Abfragen oft durch die Verwendung einer speziellen Syntax
      </p>
      <p className="py-4 code">
        <pre>
          <code>
            if(jahreszeit === "Sommer")&#123;<br />
              console.log("Wollen wir ein Eis essen?")<br />
            &#125; else if(jahreszeit === "Winter") &#123;<br />
                console.log("Wollen wir Glühwein trinken?")<br />
            &#125; else if(jahreszeit === "Herbst") &#123;<br />
              console.log("Happy Halloween!.")<br />
            &#125; else &#123;<br />
              console.log("Ostern steht vor der Tür.")<br />
            &#125;
          </code>
        </pre>
      </p>
      <p className="pt-2 pb-4">
        Durch die Verwendung von "else if" spart man sich das Nesting und sorgt dadurch für eine größere Übersichtlichkeit.
      </p>
      <img src="./images/ifElse.png" alt="Image about if and nested if´s" />
    </article>
  )
}


