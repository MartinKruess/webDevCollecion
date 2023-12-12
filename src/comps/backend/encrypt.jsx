import { highlights } from "../../App";

export const Encrypt = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Bcrypt</h2>
      <p>
        Wie unter dem Punkt Security bereits steht ist Bcrypt eine
        kryptografische Hashfunktion, das bedeutet es macht aus "Klartext" einen
        Hash ($2a$10$yLzIcyjhZhDsOOMzHDWicuHSuroqJsnJvMouE2adn/j7MNYtvtiHK) um
        die Sicherheit des Passwortes zu steigern. Das bedeutet, das swir auch
        in Datenbanken keine Klartext Passwörter speichern, sondern lediglich
        den Hash. Ein kleiner Nachteil daran ist, dass ein Benutzer, der sein
        Passwort vergessen hat, ein neues Passwort anlegen muss, da dieser Hash
        nie wieder zu einem Klartext-Passwort umgewandelt werden kann. Früher
        wurden Techniken wie MD5 verwendet, welche sich nach dem encrypt auch
        wieder decrypten ließen, wodurch man bei der Verwendung der "Passwort
        vergessen" Funktion, sein Passwort per Mail bekommen hat. Doch das ist
        heutzutage zu unsicher. Sollte ein Hacker an die Verschlüsselten
        Passwörter im MD5-Format kommen, ließen sich diese ganz leicht
        entschlüsseln. Beispielsweise mit dem unten stehenden Tool (eines von
        sehr vielen).
      </p>
      <a href='https://10015.io/tools/md5-encrypt-decrypt'>MD5-Tool</a>
      <p>
        Natürlich gibt es solche Bcrypt-Tools ebenfalls, allerdings hat Bcrypt
        mehrere Mechanismen, die Verhindern, dass der Decrypt Vorgang unendlich
        Schnell durchgeführt werden kann. Dadurch ist es mit Bcrypt möglich ein
        Passwort unter gewissen Einstellungen wirklich sicher zu machen.
      </p>
      <a href='https://bcrypt-generator.com/'>Bcrypt-Tool</a>
      <h3 className='font-extrabold text-lg'>Schritt 1: Passwort Sicherheit</h3>
      <p>
        es werden gerne Passwörter gewählt, die Kurz, Prgnant und eingängig
        sind. So werden gerne die Namen/Geburtsdaten der Kinder, des Haustieres
        oder andere leicht zu merkende Dinge verwendet. Doch genau das ist ein
        Problem, ein passwort wie: "Bello2012" ist nicht wirklich sicher.
        Heutztage gibt es strenge Vorschriften zum Thema Passwort-Sicherheit.
      </p>
      <div className='flex gap-5'>
        <div className='w-1/2'>
          <p>
            Die Mindestlänge eines Passwortes hängt stark von der Komplexität
            ab. Wie im unteren Bild leicht ersichtlich ist ein Passwort mit 12
            Zahlen nicht so sicher wie ein Passwort, dass eine Länge von 7 hat,
            allerdings Klein- und Großbuchstaben, sowie Sonderzeichen und Zahlen
            enthält. Daher sollte es stehts mehr Vorgaben, für ein sicheres
            Passwort, geben.
          </p>
          <ul className='w-1/2'>
            <li className='font-extrabold'>Mindest Passwortbedingungen</li>
            <li>- Mindestens 1 Nummer</li>
            <li>- Mindestlänge: 14+ (ideal 16+)</li>
            <li>- Groß- und Kleinschreibung</li>
            <li>- Mindestens 1 Sonderzeichen</li>
            <li>
              Durch eine Mindestpasswortlänge von 16+ wird sogar ein Passwort
              wie:
              <span className={highlights.errorCode}> SuperSavePasswort </span>
              recht sicher.
            </li>
          </ul>
        </div>
        <div className='w-1/2'>
          <img src='./images/bf-table.jpg' alt='' />
        </div>
      </div>
      <h3 className='font-extrabold text-lg'>Bruteforce</h3>
    </article>
  );
};
