export const ArrayLoopExercise = () => {
  return(
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Bonis Übungen zum Thema Arrays und Loops</h2>
      <p className="pt-4 pb-2">
        Hier sind ein paar zusätzliche Übungsaufgaben. Erstelle einfach eine index.js/main.js und arbeite so viele Aufgaben durch, wie du magst. Ich nehme gerne Spiele als Beispiele, da in der Spiele Entwicklung sehr viele Sinnvolle Loops und Functions angewendet werden.
      </p>
      <div className="my-5 code">
        <h3 className="font-extrabold text-xl">Schere, Stein, Papier (readline-sync)</h3>
        <p>
          Versuche das Spiel Schere, Stein, Papier zu erstellen in dem ein Spieler gegen den Computer spielt. Der Spieler soll eine Eingabe machen können ob er Schere, Stein oder Papier eingibt. Groß- und Kleinschreibung sollte bei der Eingabe egal sein. nach der Auswertung, der Runde sollte der Spieler gefragt werden ob er noch einmal spielen mag. Dann sollte das Spiel automatisch weiter laufen ohne, dass es neugestartet werden muss.
        </p>
        <h3 className="font-extrabold text-xl">Advanced Upgrade!</h3>
        <p>
          Versuche die "weiter spielen" Option zu ändern. Der Spieler sollte eingeben können, dass er weiter Spielen möchte für x Runden.
        </p>
      </div>
      <div className="my-5 code">
        <h3 className="font-extrabold text-2xl">Pokemon Spiel (Console Game)</h3>
        <pre>
          <code>
            const pikachu = [12, 137]
            const pikachuSkills = ["Tackel", "Eisenschweif", "Donnerschock"]<br />
            const habitak = [13, 122]
            const habitakSkills = ["Tackel", "Flügelschlag"]
          </code>
        </pre>

        <p>
          Kopiere dir die 4 Arrays und versuche einen Pokemonkampf in der Konsole zu simulieren. Der erste Wert eines Pokemons ist das Level und der zweite Wert das Leben. Pikachu kann Aktuell nur die Angriffe Tackel und Eisenschweif anwenden.
          Sollte Pikachu diesen Kampf gewinnen, wird es am Ende des Kampfes Donnerschock lernen. Sollte ein Angriff ein kirtischer Treffer sein, macht der Angriff 20% mehr Schaden, verfehlt der Angriff, ist der Schaden 0.
        </p>
        <table>
          <tr>
            <th>Skill</th>
            <th>Schaden</th>
            <th>Chance auf miss</th>
            <th>Chance auf Kirt</th>
          </tr>
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
        </table>
      </div>
    </article>
  )
}