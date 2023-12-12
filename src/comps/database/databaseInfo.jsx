export const DatabaseInfo = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Database Einleitung</h2>
      <h2 className='font-extrabold text-xl'>Was ist eine Datenbank?</h2>
      <p>
        Eine Datenbank ist eine strukturierte Sammlung von Daten. Die Struktur
        einer Datenbank sorgt für ein effizientes Abrufen, Verwalten und
        Aktualisieren der einzelnen Datensätze. Die wohl bekannteste
        Datenbankstruktur, ist die der Tabelle.
      </p>
      <p>
        Es gibt verschiedene Arten von Datenbanken, darunter relationale
        Datenbanken, objektorientierte Datenbanken, NoSQL-Datenbanken und viele
        mehr. Die am häufigsten verwendete Art ist die relationale Datenbank,
        bei der Daten in Tabellen organisiert sind, und Beziehungen zwischen den
        Tabellen durch Keys hergestellt werden.
      </p>
      <p>
        Datenbanken dienen dazu, große Mengen von Informationen effizient zu
        speichern, zu organisieren und abzurufen. Sie sind in vielen Anwendungen
        weit verbreitet, darunter Unternehmenssysteme, Webanwendungen, mobile
        Apps und mehr.
      </p>
      <p>
        Datenbankmanagementsysteme (DBMS) sind Softwareanwendungen, die
        entwickelt wurden, um den Zugriff auf die Datenbank zu erleichtern und
        die Integrität der Daten zu gewährleisten.
      </p>
      <h2 className='font-extrabold text-xl'>MongoDB</h2>
      <p>
        MongoDB ist eine NoSQL-Datenbank, die sich darauf spezialisiert hat,
        dokumentenorientiert zu sein. Das bedeutet, dass Daten in MongoDB in
        Form von Dokumenten gespeichert werden, typischerweise im BSON-Format
        (Binary JSON). BSON ist eine binäre Repräsentation von JSON-Dokumenten,
        wodurch MongoDB eine gute Wahl für (Web-)Anwendungen ist, die flexible
        und skalierbare Datenmodelle erfordern.
      </p>
      <ul>
        <li>
          Dokumentenorientiert: Daten werden in BSON-Dokumenten gespeichert, die
          JSON-ähnlich strukturiert sind. Ein Dokument enthält Felder und Werte,
          ähnlich wie in einem JSON-Objekt.
        </li>
        <li>
          Flexibles Schema: Im Gegensatz zu relationalen Datenbanken erfordert
          MongoDB kein vordefiniertes Schema. Jedes Dokument in einer Sammlung
          kann unterschiedliche Felder haben, was Flexibilität in der
          Datenmodellierung ermöglicht.
        </li>
        <li>
          Skalierbarkeit: MongoDB wurde entwickelt, um horizontal skalierbar zu
          sein, was bedeutet, dass Sie die Kapazität Ihrer Datenbank durch
          Hinzufügen von Servern in einem Cluster erhöhen können.
        </li>
        <li>
          MongoDB unterstützt leistungsfähige Abfragen, Indizes und
          Aggregationen, um Daten auf flexible Weise abzurufen und zu
          verarbeiten.
        </li>
        <li>
          Automatische Sharding: MongoDB nutzt integriertes automatisches
          Sharding, was die Datenbank besser im Umgang mit großen Datenmengen
          und deren Verteilung über mehrere Server hinweg macht.
        </li>
      </ul>
      <p>
        MongoDB wird häufig in Anwendungen eingesetzt, die große Mengen
        unstrukturierter oder semi-strukturierter Daten speichern müssen. Es ist
        besonders gut geeignet für Projekte mit sich ändernden Anforderungen und
        einem Bedarf an hoher Skalierbarkeit.
      </p>
      <h2 className='font-extrabold text-xl'>MySQL</h2>
      <p>
        MySQL ist ein relationales Datenbankmanagementsystem (RDBMS), das auf
        SQL (Structured Query Language) basiert. Es ist eine der am häufigsten
        verwendeten Datenbanken weltweit und wird für eine Vielzahl von
        Anwendungen eingesetzt, von einfachen Websites bis hin zu komplexen
        Unternehmenssystemen.
      </p>

      <ul>
        <li>
          Relationale Datenbank: MySQL organisiert Daten in Tabellen mit Zeilen
          und Spalten. Beziehungen zwischen den Tabellen können durch Primär-
          und Fremdschlüssel definiert werden, um die Datenintegrität
          sicherzustellen.
        </li>
        <li>
          SQL-Sprache: MySQL verwendet SQL als Abfragesprache, um Daten
          abzurufen, zu aktualisieren, einzufügen und zu löschen. SQL ermöglicht
          eine klare und standardisierte Kommunikation mit der Datenbank.
        </li>
        <li>
          Plattformunabhängigkeit: MySQL ist plattformunabhängig und kann auf
          verschiedenen Betriebssystemen wie Windows, Linux und macOS
          installiert werden.
        </li>
        <li>
          Skalierbarkeit: MySQL unterstützt sowohl vertikale als auch
          horizontale Skalierung. Vertikale Skalierung bezieht sich auf das
          Erhöhen der Hardware-Ressourcen auf einem einzelnen Server, während
          horizontale Skalierung das Hinzufügen von weiteren Servern in einem
          Cluster bedeutet.
        </li>
      </ul>
      <p>
        MySQL wird oft in Kombination mit Webanwendungen und
        Content-Management-Systemen eingesetzt. Es ist eine beliebte Wahl für
        kleine bis mittelgroße Datenbankanforderungen. Lange Zeit war MySQl
        unangefochten an der Spitze, daher wird es von älteren Unternehmen wie
        Facebook, Twitter, und YouTube verwendet, um nur einige zu nennen.
      </p>
    </article>
  );
};
