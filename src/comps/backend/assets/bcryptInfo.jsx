export const BcryptInfo = () => {
  return (
    <>
      <h3 className='font-extrabold text-xl'>Was ist 'bcrypt'?</h3>
      <pre className='mt-10'>
        <code>npm i bcrypt</code>
      </pre>
      <p className='mb-2'>
        bcrypt ist eine kryptografische Hashfunktion, die hauptsächlich für die
        sichere Speicherung von Passwörtern in Datenbanken verwendet wird. Der
        Name "bcrypt" steht für "bcrypt password hashing algorithm". Im
        Gegensatz zu einfachen Hashfunktionen wie MD5 oder SHA-1, die schnell
        berechnet werden können und daher anfällig für brute-force-Angriffe
        sind, ist bcrypt so konzipiert, dass es ressourcenintensiv ist und somit
        die Berechnung von Hashes langsamer macht.
      </p>
      <p className='pb-1'>
        Die Idee hinter bcrypt ist, dass es rechenintensive Operationen
        erfordert, wie zum Beispiel den Einsatz von sogenannten "Key Derivation
        Functions" (KDFs) und "Salts". Ein "Salt" ist eine zufällige
        Zeichenfolge, die jedem Passwort vor dem Hashen hinzugefügt wird. Dies
        macht es schwieriger, vorberechnete Tabellen (Rainbow Tables) für
        Angriffe wie Brute-Force oder Rainbow-Table-Angriffe zu verwenden.
      </p>
      <p className='pb-2'>
        Die Verwendung von bcrypt hilft, die Sicherheit von Passwörtern zu
        erhöhen, indem es den Angreifern erschwert, Passwörter zu erraten oder
        zu knacken. Es ist eine bewährte Methode für die sichere Speicherung von
        Passwörtern in vielen Anwendungen und Frameworks, insbesondere in der
        Webentwicklung.
      </p>
    </>
  );
};
