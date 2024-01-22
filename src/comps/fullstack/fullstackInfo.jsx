export const FullstackInfo = () => {
  return (
    <article>
      <h2 className='font-bold text-2xl'>Fullstack WebDev</h2>
      <p>
        Unter Fullstack versteht man die Kombination aus Frontend und Backend.
        Das bedeutet alles bisher gelerntes wird nun in einem Projekt
        zusammengeführt. Das Frontend wird mit React erstellt und das Backend
        mit Node.js und Express. Als Datenbank wird MongoDB verwendet.
      </p>
      <p>
        Doch dafür ist es wichtig nun die Einzelteile zusammenzufügen. Um das
        ganze verdutlichen zu können, gibt es das Beispiel Preview (Fullstack).
        In diesem Beispiel wird Schritt für Schritt mit kleinen Kommentaren
        gezeigt wie die Verbindung von Front- und Backend funktioniert.
      </p>
      <h3 className='font-bold text-xl'>Aufbau und Bedienung</h3>
      <ul>
        <li>
          Diese Vorschau geht nicht detailliert auf tiefergehende Techniken wie
          beispielsweise Controller, Middleware oder Bcrypt ein. Es geht
          lediglich um den einfachen Aufbau eines Servers und die Kommunikation
          zwischen Front- und Backend. Daher liegt das Hauptaugenmerk auf Fetch
          und API.
        </li>
        <li>
          Es wird in diesem Fall mit der "Codierung" des Backends begonnen.
        </li>
        <li>
          Der Start zeigt erstmal nur die Kommentare der folgenden Schritt
        </li>
        <li>
          In diesem Beispiel ist das Frontend links und das Bakcend rechts
        </li>
        <li>
          <strong className='text-green-500'>Links Klick</strong>: Mit einem
          Linksklick auf den Container wird der nächste Schritt ausgeführt
        </li>
        <li>
          <strong className='text-red-500'>Rechts Klick</strong>: Mit einem
          Rechtsklick auf den Container wird zum vorherigen Schritt gewechselt
        </li>
      </ul>
      <br />
      <br />
    </article>
  );
};
