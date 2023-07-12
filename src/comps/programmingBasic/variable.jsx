export const Variable = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">
        Variablen - Das Speichern von Werten unter einem Namen
      </h2>
      <p>
        Die Deklaration einer Variablen erfolgt durch die Verwendung eines
        Schlüsselworts wie "let" oder "const", gefolgt von einem Variablennamen.
        Mit der Deklaration teilen Sie dem JavaScript-Interpreter mit, dass Sie
        eine Variable mit einem bestimmten Namen verwenden möchten.
      </p>
      <p className="code">
        let y;
        <br />
        const z;
      </p>
      <p>
        Die Initialisierung einer Variablen erfolgt, indem Sie ihr einen Wert
        zuweisen. Nach der Deklaration können Sie einer Variablen einen
        Anfangswert zuweisen, damit sie einen Wert enthält, den Sie später
        verwenden können.
      </p>
      <p className="code">
        var x; // Deklaration
        <br />
        x = 10; // Initialisierung
        <br />
        <br />
        let y = "Hallo";
        <br />
        const z = true;
      </p>
      <p className="pt-4 pb-2">
        Variablen können verschiedene Arten von Werten speichern, wie Zahlen,
        Zeichenketten "", Booleans ture/false, Arrays [], Objekte {}. Sie dienen
        dazu, Daten während der Ausführung eines JavaScript-Programms zu
        speichern und zu verändern.
      </p>
      <div className="code">
        <pre>
          <code>
            const constantVariable = ""
            <br />
            let localVariable = ""
          </code>
        </pre>
      </div>
      <p>
        "const" ermöglicht die Deklaration von Variablen mit konstantem Wert.
        Sie haben auch einen Blockgültigkeitsbereich und können nicht erneut
        zugewiesen werden.
      </p>
      <p>
        Mit ES6 wurde "let" eingeführt. Variablen, die mit "let" deklariert
        werden, haben einen Blockgültigkeitsbereich und können nur einmal im
        selben Block deklariert werden.
      </p>
      <h2 className="font-extrabold text-2xl">Was vertseht man unter Scope</h2>
      <p>
        Der Begriff "Scope" steht für den Gültigkeitsbereich/Wirkbereich einer
        Variable. So ist eine Variable, die in einem If-Else, einer Loop oder
        einer Function deklariert wurde nur innerhalb dieser
        Gültig/abrufbar/ansprechbar.
      </p>
      <h2 className="font-extrabold text-2xl">ACHTUNG VERALTET!</h2>
      <p>
        Vor ES6 war "var" die übliche Art, Variablen zu deklarieren. Sie sind
        funktions- oder global-sichtbar und können mehrmals im selben
        Gültigkeitsbereich deklariert werden.
      </p>
    </article>
  );
};
