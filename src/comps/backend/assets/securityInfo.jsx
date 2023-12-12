export const SecurityInfo = () => {
  return (
    <>
      <h2 className='font-extrabold text-2xl'>Simple Security basics</h2>
      <p>
        Ein großer Punkt im Backend ist das Thema Sicherheit. Nicht nur vor hoch
        professionellen gezielten Hacker-Angriffen muss der Server durch diverse
        Techniken geschützt sein, nein auch durch Fehler im Nutzerverhalten
        treten oft Sicherheitslücken auf. Ein sehr gutes Beispiel für
        Sicherheitslücken, die durch Nutzerverhalten auftreten können sind
        gerade Molibe Endgeräte und Öffentliche Netzwerke wie beispielsweise
        Internet-Cafes. Gerade sensible Daten wie die Login-Daten für die
        Banking- oder Versicherungsapp unterliegen strengen
        Sicherheits-Standards um genau diese Fehler zu verhindern. Hier folgen
        ein paar gängige Szenarien, für Sicherheitsprobleme.
      </p>
      <p>
        Jeder kennt es, mal schnell ne Überweisung machen über das Handy und
        dann fragt ein Kollege ob er mal kurz dein Handy haben darf. Da viele
        Nutzer das Ausloggen vergessen oder für nicht wichtig halten, ist es
        unsere Aufgabe in dieser Situation für die Nutzer mitzudenken. Durch
        beispielweise zeitlich begrenzte Zugriffskeys können wir die Sicherheit
        trotz fehlendem Logout gewährleisten.
        <br /> Ein weiterer wichtiger Punkt, ist dass beispielweise für das
        Ändern von relevanten Userdaten (E-Mail, Passwort, Adresse...) eine
        Passwortabfrage benötigt wird. Natürlich ist die Abfrage des Passwortes
        ein Frontend-Feature, allerdings dürfen auch im Backend die Daten ersrt
        verändert werden nachdem sichergestellt ist, dass das Passwort korrekt
        ist.
        <br />
        Zum Thema Passwort, ist noch zu beachten, dass dieses niemals zurück an
        das Frontend gegeben wird. Ein wichtiger Grund ist, dass alle im
        Frontend vorliegenden Daten immer und überall auslesbar sind. ebenso in
        der Datenbank sollten niemals Passwörter in "Klartext" gespeichert
        werden. Genau für diese Szenarien schauen wir uns nun den heutigen
        Standard an.
      </p>
    </>
  );
};
