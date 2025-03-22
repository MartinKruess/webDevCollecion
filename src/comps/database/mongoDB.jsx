export const MongoDB = () => {
  return (
    <article className="w-full h-full">
      <h3 className="text-lg text-center">Node mit Mongo verbinden</h3>
      <p>
        Um eine Verbindung zwischen Node und der Datenbank herzustellen musst
        Mongoose importiert werden und Methode connect() aufgerufen werden.
        Innerhalb der Methode connect() wird der Pfad zur Datenbank angegeben.
        Dieser Pfad besteht aus dem Protokoll, der Adresse des Servers, dem
        Usernamen und dem Passwort. Die Methode connect() gibt ein Promise
        zurück, welches mit then() oder try() und catch() abgefangen werden
        kann. In then() wird eine Funktion ausgeführt, wenn die Verbindung zur
        Datenbank erfolgreich hergestellt wurde. In catch() wird eine Funktion
        ausgeführt, wenn die Verbindung zur Datenbank fehlgeschlagen ist.
      </p>
      <p>
        Häufig wird die komplette Mongoose Konfiguration in einer seperaten
        Datei ausgelagert. Das ist der ganze Zauber, der hinter der Verbindung
        zwischen Node und der Datenbank steckt.
      </p>
      <pre className="text-sm">
        <code>
          import mongoose from "mongoose"
          <br />
          <br />
          // DB Authorization
          <br />
          const mongoPath =
          `mongodb+srv://$&#123;process.env.DB_OWNER&#125;:$&#123;process.env.DB_PASSWORD&#125;@twitchapp.zg8ms.mongodb.net/twitchappdb?retryWrites=true&w=majority`
          <br />
          <br />
          // 1. DB connection and dataLoad
          <br />
          mongoose.connect(mongoPath, &#123;
          <br />
          &#9;useNewURLParser: true,
          <br />
          &#9;useUnifiedTopology: true
          <br />
          &#125;)
          <br />
          &#9;.then(() =&gt; &#123;
          <br />
          &#9;&#9;console.log("DB connection established!")
          <br />
          &#9;&#9;console.log("Connecting to userDB ...")
          <br />
          &#9;&#125;)
          <br />
          &#9;.catch((err) =&gt; &#123;
          <br />
          &#9;&#9;console.log("DB connection failed!", err.message, "ERROR END")
          <br />
          &#9;&#125;)
        </code>
      </pre>
    </article>
  );
};
