export const JSExercises = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Bonus Übungen</h2>
      <p className="pt-4 pb-2">
        Hier sind ein paar zusätzliche Übungsaufgaben. Erstelle einfach eine
        index.js/main.js und arbeite so viele Aufgaben durch, wie du magst. Ich
        nehme gerne Spiele als Beispiele, da in der Spiele Entwicklung sehr
        viele Sinnvolle Loops und Functions angewendet werden.
      </p>
      <div className="mt-5 p-5 bg-slate-800 border">
        <h3 className="font-extrabold text-xl">
          Schere, Stein, Papier (readline-sync)
        </h3>
        <p>
          Versuche das Spiel Schere, Stein, Papier zu erstellen in dem ein
          Spieler gegen den Computer spielt. Der Spieler soll eine Eingabe
          machen können ob er Schere, Stein oder Papier eingibt. Groß- und
          Kleinschreibung sollte bei der Eingabe egal sein. nach der Auswertung,
          der Runde sollte der Spieler gefragt werden ob er noch einmal spielen
          mag. Dann sollte das Spiel automatisch weiter laufen ohne, dass es
          neugestartet werden muss.
        </p>
        <h3 className="font-extrabold text-xl">Advanced Upgrade!</h3>
        <p>
          Versuche die "weiter spielen" Option zu ändern. Der Spieler sollte
          eingeben können, dass er weiter Spielen möchte für x Runden.
        </p>
      </div>
      <div className="mt-5 p-5 bg-slate-800 border">
        <h3 className="font-extrabold text-xl">Pokemon Spiel (Console Game)</h3>
        <pre>
          <code>
            const pikachu = [12, 137] <br />
            const pikachuSkills = ["Tackel",
            "Eisenschweif", "Donnerschock"]
            <br />
            const habitak = [13, 122] <br />
            const habitakSkills = ["Tackel",
            "Flügelschlag"]
          </code>
        </pre>
        <p>
          Kopiere dir die 4 Arrays und versuche einen Pokemonkampf in der
          Konsole zu simulieren. Der erste Wert eines Pokemons ist das Level und
          der zweite Wert das Leben. Pikachu kann Aktuell nur die Angriffe
          Tackel und Eisenschweif anwenden. Sollte Pikachu diesen Kampf
          gewinnen, wird es am Ende des Kampfes Donnerschock lernen. Sollte ein
          Angriff ein kirtischer Treffer sein, macht der Angriff 20% mehr
          Schaden, verfehlt der Angriff, ist der Schaden 0.
        </p>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Schaden</th>
              <th>Missing</th>
              <th>Krit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tackel</td>
              <td>17</td>
              <td>5%</td>
              <td>7%</td>
            </tr>
            <tr>
              <td>Eisenschweif</td>
              <td>33</td>
              <td>15%</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>Flügelschlag</td>
              <td>27</td>
              <td>10%</td>
              <td>17%</td>
            </tr>
          </tbody>
        </table>
        <h3 className="mt-8 font-extrabold text-xl">Advanced Upgrade!</h3>
        <p>
          Hin und wieder kommt es vor, dass ein Wildes Pokemon die Flucht
          ergreift, wenn es weniger als 10% Leben hat. Wenn das wilde Pokemon
          flüchtet gib dir Nachricht, "Habitak ist geflohen!" aus und beende den
          Kampf.
        </p>
      </div>
      <div className="mt-5 p-5 bg-slate-800 border">
        <h3 className="font-extrabold text-xl">
          Galgenmännchen (readline-sync)
        </h3>
        <p>
          Die Aufgabe ist es das Spiel Galgenmännchen nachzubauen. Der Computer picked sich ein Random Wort aus dem Array randomWords. Der Spieler kann dann via Terminaleingabe jede Runde einen Buchstaben eingeben. Der Computer schaut ob der Buchstabe im Wort enthalten ist. Sollte dieser enthalten sein, wird der Strich zu dem Buchstaben, wenn nicht wird der erste Buchstabe des loosterstrings ausgeben.
          Achtung, sorge dafür, dass Spielereingaben nur akzeptiert werden, wenn diese aus einem Buchstaben bestehen.
        </p>
        <pre>
          <code>
            Beispiel Ausgabe: <br />
            const word = "interesse" <br />
            Start Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ _ _ _ <br />
            Erfolg Ausgabe: Das Geheime Wort ist: _ _ _ _ _ _ s s _ <br />
          </code>
        </pre>
        <pre>
          <code>
            const randomWords = ["importance", "refrigerator", "statement", "conclusion","knowledge", "opportunity", "comparison", "instruction", "indication", "criticism", "consequence", "contribution", "childhood", "president", "difference", "establishment", "responsibility", "reception", "psychology", "enthusiasm"] <br />
            Normalmode: const looserString = "YOU FAILED!" //10 Versuche
          </code>
        </pre>
        <h3 className="font-extrabold text-xl">Advanced Upgrade!</h3>
        <p>
          Versuche einen Hardmode einzubauen, den der Spieler auswählen kann. Im Hardmode hat der Spieler nur 9 Versuche.
          <pre>
            <code>
              Hardmode: const looserString = "YOU LOOSE!" // 9 Versuche
            </code>
          </pre>
        </p>
      </div>
    </article>
  );
};
