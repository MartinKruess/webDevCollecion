import { highlights } from "../../App";

export const MongoSchemas = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Mongoose Schemas</h2>
      <p>
        In Mongoose werden Schemas verwendet, um die Struktur der Daten in der
        MongoDB-Datenbank zu definieren. Schemas werden verwendet, um die
        Eigenschaften der Daten zu definieren, die in der MongoDB-Datenbank
        gespeichert werden sollen. Ein Schema kann Eigenschaften wie den
        Datentyp, die Standardwerte, Validierungsregeln und mehr definieren.
      </p>
      <h3 className='font-extrabold text-lg'>Schemas Syntax</h3>
      <p>
        Um ein Schema in Mongoose zu definieren, musst du die Schema-Klasse
        verwenden. Die Schema-Klasse wird verwendet, um ein neues Schema zu
        erstellen. Die Schema-Klasse wird aus dem mongoose-Modul importiert.
      </p>
      <pre className='text-sm'>
        <code>
          import mongoose from "mongoose";
          <br />
          <br />
          const userSchema = mongoose.Schema(&#123;
          <br />
          &#9;// Schema-Definition hier
          <br />
          &#125;);
        </code>
      </pre>
      <p>
        Hierbei ist es egal welche der beiden Varianten du verwendest. Die erste
        Variante ist die Kurzform und es gibt keine technischen Unterschiede zu
        der zweiten Variante. Die zweite Variante ist die Langform und wird
        verwendet, um mehrere Schemas in einer Datei zu definieren. Die Kurzform
        wird verwendet, wenn nur ein Schema in einer Datei definiert wird.
      </p>
      <pre className='text-sm'>
        <code>
          import mongoose from "mongoose";
          <br />
          <br />
          const Schema = mongoose.Schema;
          <br />
          <br />
          const userSchema = new Schema(&#123;
          <br />
          &#9;// Schema-Definition hier
          <br />
          &#125;);
        </code>
      </pre>
      <p>
        Hier ist ein komplettes Beispiel wie ein Schema in Mongoose definiert
        wird.
      </p>
      <pre className='text-sm'>
        <code>
          import mongoose from "mongoose";
          <br />
          <br />
          // Wiederverwendbares Pattern innerhalb des Schemas
          <br />
          const reqStr = &#123;
          <br />
          &#9;&#9;type: String,
          <br />
          &#9;&#9;required: true,
          <br />
          &#9;&#125;
          <br />
          <br />
          const userSchema = mongoose.Schema(&#123;
          <br />
          &#9;name: &#123;
          <br />
          &#9;&#9;type: String,
          <br />
          &#9;&#9;required: true,
          <br />
          &#9;&#125;,
          <br />
          &#9;email: reqStr,
          <br />
          &#9;password: reqStr,
          <br />
          &#9;date: &#123;
          <br />
          &#9;&#9;type: Date,
          <br />
          &#9;&#9;default: Date.now,
          <br />
          &#9;&#125;,
          <br />
          &#125;), &#123;collection: "user"&#125;;
          <br />
          <br />
          // "users" ist der Name der Collection
          <br />
          // userSchema ist das Schema
          <br />
          export const UserModel = mongoose.model("users", userSchema);
        </code>
      </pre>
      <p>
        Ein wichtiger Hinweis ist, dass die Collections in der MongoDB immer im
        Plural geschrieben werden. Wenn du also eine Collection mit dem Namen
        "user" erstellen möchtest, musst du in Mongoose den Namen "users"
        verwenden. Wenn du den Namen "user" verwendest, wird Mongoose
        automatisch den Namen in "users" umwandeln. Dadurch kann es zu
        Fehlermeldungen kommen, wenn du versuchst Daten mit einer Collection mit
        dem Namen "user" zu speichern.
      </p>
      <h3 className='font-extrabold text-lg'>Schemas Validierung</h3>
      <p>
        Die Schema-Validierung in Mongoose ermöglicht es, die Daten, die in
        deine MongoDB-Datenbank geschrieben werden, zu überprüfen und
        sicherzustellen, dass sie den definierten Regeln entsprechen. Dies hilft
        dabei, die Datenintegrität zu gewährleisten und sicherzustellen, dass
        nur gültige Daten in die Datenbank gelangen.
      </p>
      <p>
        In Mongoose werden Validierungsregeln direkt in das Schema integriert.
        Verschiedene Arten von Validierungsregeln sind definierbar, um
        sicherzustellen, dass die Daten bestimmten Kriterien entsprechen. Wenn
        die Daten nicht den Validierungsregeln entsprechen, wird eine
        Fehlermeldung zurückgegeben und die Daten werden nicht in die Datenbank
        geschrieben.
      </p>
      <h3 className='font-extrabold text-lg'>Schema Hook/Schema Middelware</h3>
      <p>
        Als Hook im Bezug auf den Umgang mit Schemas bezeichnet man Middelware
        die vor oder nach einem Ereignis ausgeführt wird. In Mongoose gibt es
        verschiedene Arten von Hooks, die verwendet werden können, um Middelware
        zu definieren.
      </p>
      <pre className='text-sm'>
        <code>
          const mySchema = new Schema(&#123;
          <br />
          &#9;name: String,
          <br />
          &#9;age: Number
          <br />
          &#125;);
          <br />
          <br />
          // Vor dem Speichern eines Dokuments
          <br />
          mySchema.pre('save', function(next) &#123;
          <br />
          &#9;// Logik, die vor dem Speichern ausgeführt werden soll
          <br />
          &#9;console.log('Vor dem Speichern');
          <br />
          &#9;next();
          <br />
          &#125;);
          <br />
          <br />
          // Nach dem Speichern eines Dokuments
          <br />
          mySchema.post('save', function(doc) &#123;
          <br />
          &#9;// Logik, die nach dem Speichern ausgeführt werden soll
          <br />
          &#9;console.log('Nach dem Speichern', doc);
          <br />
          &#125;);
          <br />
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>Schema Subdocuments</h3>
      <p>
        In Mongoose können Subdokumente verwendet werden, um Daten in einem
        Schema zu verschachteln. Zur Anwendung kommt dies, wenn sich
        wiederholende Daten in verschiedene Schematas ausgelagert werden sollen.
      </p>
      <p>
        Ein gutes Beispiel für Subdocuments sind Artikel wie beispielsweise CPU,
        Grafikkarte, Mainboard usw. Diese Artikel haben alle gemeinsame
        Eigenschaften wie beispielsweise den Hersteller, den Preis usw. Diese
        Eigenschaften können in einem Subdokument definiert werden und dann in
        den verschiedenen Schematas verwendet werden.
      </p>
      <p>
        Vorab noch eine kleine Info zu den Schema Settings (type: string usw.).
        Auch hierbei lassen sich die Settings in einer eigenen Datei auslagern
        und dann in den Schemas importieren. Dadurch wird der Code
        übersichtlicher und einfacher zu lesen. Die Settings werden (im
        Beispiel) in einer Datei "schemaSettings.js" definiert und dann in den
        Schemas importiert.
      </p>
      <div className='flex flex-wrap'>
        <pre className='text-sm w-4/12'>
          <code>
            export const schemaSettings = &#123;
            <br />
            &#9;reqString: &#123;
            <br />
            &#9;&#9;type: String,
            <br />
            &#9;&#9;required: true,
            <br />
            &#9;&#125;,
            <br />
            &#9;string: &#123;
            <br />
            &#9;&#9;type: String,
            <br />
            &#9;&#125;,
            <br />
            &#9;reqNumber: &#123;
            <br />
            &#9;&#9;type: Number,
            <br />
            &#9;&#9;required: true,
            <br />
            &#9;&#125;,
            <br />
            &#9;number: &#123;
            <br />
            &#9;&#9;type: Number,
            <br />
            &#9;&#125;,
            <br />
            &#9;bool: &#123;
            <br />
            &#9;&#9;type: Boolean,
            <br />
            &#9;&#125;,
            <br />
            &#9;array: &#123;
            <br />
            &#9;&#9;type: Array,
            <br />
            &#9;&#125;
            <br />
            &#125;;
          </code>
        </pre>
        <div className='w-1/12'></div>
        <div className='text-sm w-7/12'>
          <pre>
            <code>
              export const reusableArticleData = mongoose.Schema(&#123;
              <br />
              &#9;articleNr: schemaSettings.reqNumber,
              <br />
              &#9;type: schemaSettings.string,
              <br />
              &#9;producerNr: schemaSettings.string,
              <br />
              &#9;priceEK: schemaSettings.number,
              <br />
              &#9;priceVK: schemaSettings.number,
              <br />
              &#9;stock: schemaSettings.reqNumber,
              <br />
              &#9;comments: schemaSettings.array,
              <br />
              &#125;);
            </code>
          </pre>
          <pre className='mt-5'>
            <code>
              import mongoose from 'mongoose';
              <br />
              import &#123; reusableArticleData &#125; from
              './reusableArticleData.js';
              <br />
              import &#123; schemaSettings &#125; from './schemaSettings.js';
              <br />
              <br />
              export const cpuSchema = mongoose.Schema(&#123;
              <br />
              <span className={highlights.code}>
                &#9;// Einbinden der Allgemeinen Eigenschaften
                <br />
                &#9;baseData: reusableArticleData,
              </span>
              <br />
              &#9;cpuTyp: schemaSettings.string,
              <br />
              &#9;form: schemaSettings.string,
              <br />
              &#9;socket: schemaSettings.number,
              <br />
              &#9;... weitere Eigenschaften
              <br />
              &#125;);
            </code>
          </pre>
        </div>
      </div>
      <h3 className='font-extrabold text-lg mb-4'>
        Weitere Themen zum Anschauen
      </h3>
      <div className='flex flex-wrap'>
        <div className='w-2/5'>
          <h4 className='border-b-2'>Schema Indexes</h4>
          <p>
            Indexes (Indizes): Sie können Indizes auf Feldern in Ihrem Schema
            erstellen, um die Abfrageleistung zu verbessern. Dies ist besonders
            nützlich, wenn Sie häufig auf bestimmte Felder abfragen.
          </p>
        </div>
        <div className='w-1/5'></div>
        <div className='w-2/5'>
          <h4 className='border-b-2'>Schema Methods</h4>
          <p>
            Methoden: Sie können benutzerdefinierte Methoden für Dokumente
            erstellen. Diese Methoden können auf bestimmten Dokumenten
            aufgerufen werden und ermöglichen es Ihnen, benutzerdefinierte Logik
            für diese Dokumente auszuführen.
          </p>
        </div>
        <div className='w-2/5'>
          <h4 className='border-b-2'>Schema Plugins</h4>
          <p>
            Plugins: Mongoose ermöglicht die Verwendung von Plugins, um
            wiederverwendbare Funktionen und Erweiterungen für Ihre Schemas
            hinzuzufügen. Ein Plugin ist im Wesentlichen eine Funktion, die
            zusätzliche Felder, Methoden oder Middleware zu Ihrem Schema
            hinzufügen kann.
          </p>
        </div>
        <div className='w-1/5'></div>
        <div className='w-2/5'>
          <h4 className='border-b-2'>Schema Queries</h4>
          <p>
            Query Helpers: Sie können benutzerdefinierte Funktionen erstellen,
            die als "Query Helpers" bekannt sind. Diese Funktionen erleichtern
            das Schreiben von Abfragen, indem sie spezifische Logik oder Filter
            auf Abfrageergebnisse anwenden.
          </p>
        </div>
      </div>
    </article>
  );
};
