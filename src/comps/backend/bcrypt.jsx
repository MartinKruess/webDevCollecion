import { highlights } from "../../App";

export const Bcrypt = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Bcrypt</h2>
      <h3 className='font-extrabold text-lg'>Bcrypt Rounds</h3>
      <p>
        Die "rounds" bei bcrypt sind ein Parameter, der die Anzahl der
        Iterationen angibt, die bcrypt verwendet, um den Hash zu berechnen. Je
        höher die Anzahl der Runden, desto sicherer ist der generierte Hash,
        aber auch langsamer ist die Berechnung. Es ist wichtig, eine ausgewogene
        Anzahl von Runden zu wählen, um sowohl Sicherheit als auch Leistung zu
        gewährleisten. Da es keine Voreinstellung gibt, ist es wichtig, eine
        angemessene Anzahl von Runden zu wählen, um die Sicherheit zu
        gewährleisten, aber auch die Leistung nicht zu beeinträchtigen. Eine
        gute Anzahl an Runden ist 12-14.
      </p>
      <p>
        Einen hash mit bcrypt zu erzeugen dauert seine Zeit, daher ist bcrypt
        eigentlich eine Art asynchroner Code. Allerdings gibt es auch eine
        Schreibweise um bcrypt synchron zu nutzen. Dazu wird einfach das "Sync"
        an den Funktionsnamen angehängt. Das ist aber nicht zu empfehlen, da es
        die Performance stark beeinträchtigt.
      </p>
      <pre className='text-sm'>
        <code>
          const passwordFromFrontend = 'password123';
          <br />
          <br />
          // Wie viele Runden sollen durchlaufen werden const saltRounds = 12;
          <br />
          <br />
          // Generate salt
          <br />
          const salt = bcrypt.genSalt
          <span className={highlights.code}>Sync</span>(saltRounds);
          <br />
          <br />
          // Hash the password
          <br />
          const hashedPassword = bcrypt.hash
          <span className={highlights.code}>Sync</span>(password, salt);
          <br />
          <br />
          // Compare passwords
          <br />
          const isMatch = bcrypt.compare
          <span className={highlights.code}>Sync</span>(password,
          hashedPassword);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>Bcrypt Salt</h3>
      <p>
        Bei bcrypt ist der Salt ein zufällig generierter Wert, der zusammen mit
        dem Passwort verwendet wird, um den Hash zu erstellen. Der Salt wird
        verwendet, um den Hash jedes Passworts einzigartig zu machen, selbst
        wenn die Passwörter gleich sind. Dadurch wird die Sicherheit erhöht, da
        es schwieriger wird, vorberechnete Hash-Tabellen (Rainbow Tables) zu
        verwenden, um den Hash zurückzuführen und das ursprüngliche Passwort zu
        ermitteln. Der Salt wird in der Regel zusammen mit dem Hash gespeichert,
        damit er bei der Überprüfung des Passworts verwendet werden kann. Der
        Salt wird bei jedem Durchlauf (round) der Hash-Berechnung neu generiert,
        um sicherzustellen, dass der Hash jedes Mal unterschiedlich ist.
      </p>
      <h3 className='font-extrabold text-lg'>Bcrypt Hash</h3>
      <p>
        In bcrypt, der Hash ist der verschlüsselte Wert, der aus dem Passwort
        und dem Salt generiert wird. Der Hash dient dazu, das Passwort zu
        schützen und sicher zu speichern. Es ist nicht möglich, den Hash zu
        entschlüsseln, um das Klartextpasswort wiederherzustellen. Der Hash ist
        eine Einwegfunktion, die das Passwort in eine eindeutige Zeichenfolge
        umwandelt. Diese Zeichenfolge kann nicht zurück in das ursprüngliche
        Passwort umgewandelt werden. Beim Vergleichen von Passwörtern wird der
        eingegebene Text gehasht und mit dem gespeicherten Hash verglichen, um
        festzustellen, ob sie übereinstimmen. Dies macht den Hash zu einer
        sichereren Methode zur Speicherung von Passwörtern. Da der Hash nicht
        wieder auflösbar ist, ist es nicht möglich, ein vergessenes Passwort
        wiederherzustellen. Stattdessen muss ein neues Passwort erstellt werden.
      </p>
      <h3 className='font-extrabold text-lg'>Bcrypt Compare</h3>
      <p>
        Die compare-Funktion in bcrypt wird verwendet, um ein eingegebenes
        Passwort mit einem gespeicherten Hash zu vergleichen. Sie akzeptiert
        zwei Parameter: das eingegebene Passwort und den gespeicherten Hash. Die
        Funktion führt eine interne Hash-Berechnung mit dem eingegebenen
        Passwort und dem Salt durch und vergleicht dann den generierten Hash mit
        dem gespeicherten Hash. Wenn die beiden Hashes übereinstimmen, gibt die
        compare-Funktion true zurück, andernfalls false. Dies ermöglicht die
        Überprüfung, ob das eingegebene Passwort korrekt ist, ohne den
        gespeicherten Hash zu entschlüsseln.
      </p>
      <h3 className='font-extrabold text-lg'>Bcrypt Besonderheiten</h3>
      <div className='grid columns-12'>
        <p classname='col-start-1 col-end-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequatur nisi iste, facere autem laboriosam pariatur nobis vero
          deserunt nostrum voluptatum! Aliquam provident eum impedit hic libero
          dolor sit repellendus!
        </p>
        <p classname='col-start-2 col-end-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          accusantium quod voluptate quis asperiores, nisi libero fugit quo
          itaque quaerat dignissimos temporibus repellendus praesentium culpa
          eos aut sint adipisci rem?
        </p>
      </div>
      <h3 className='font-extrabold text-lg'>Bcrypt Register</h3>

      <pre className='text-sm'>
        <code>
          export const register = async (req, res) =&gt; &#123;
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;let dataOfUser = &#123;&#125;
          <br />
          &#9;&#9;const hashedRegisterPassword = await
          bcrypt.hash(req.body.password, saltRounds)
          <br />
          <br />
          &#9;&#9;dataOfUser = &#123;
          <br />
          &#9;&#9;&#9;mail: req.body.email,
          <br />
          &#9;&#9;&#9;username: req.body.username,
          <br />
          &#9;&#9;&#9;password: hashedRegisterPassword,
          <br />
          &#9;&#9;&#125;,
          <br />
          <br />
          &#9;&#9;//SAVE: userData to userDB
          <br />
          &#9;&#9;UserDataModel(dataOfUser).save()
          <br />
          &#9;&#9;res.send('Successfull registrated!')
          <br />
          <br />
          &#9;&#123; catch (error) &#123;
          <br />
          &#9;&#9;console.log("ERROR:", error, "Error by registration!")
          <br />
          &#9;&#125;
          <br />
          &#125;;
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>Time/hash</h3>
    </article>
  );
};
