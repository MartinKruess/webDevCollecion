export const Frameworks = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl my-5">
        Bootstrap und Tailwind die CSS-Frameworks
      </h2>
      <p>
        Ein CSS-Framework ist eine vorgefertigte Sammlung an vorgefertigten
        Klassen, Gestaltungselementen und anderen Hilfsmittlen für ein
        standardisiertes Webdesign mit CSS. Die mietsen CSS-Frameworks basieren
        auf einem Grid-System. Größere Frameworks bieten zudem noch
        JavaScript-basierte Funktionen, welche die Gestaltungselemente optional
        mit Zusatzfunktionen auszustatten.
      </p>
      <ul>
        <li>basiert of auf einem Grid oder Grid-ähnlichem System</li>
        <li>vordefinierte Breakpoints für leichtere Responsive</li>
        <li>Standardisierte Layout</li>
        <li>ähnlich wie ein Baukastensytsem</li>
        <li>schnelleres Prototyping</li>
      </ul>
      <h3 className="font-extrabold text-xl my-5">Bootstrap Framework</h3>
      <div>
        <p>
          Es gibt verschiedene Wege mit Bootstrap zu arbeiten. Neben der NPM
          Methode gibt es eine CLI (arbeiten via Link), github repo zum
        </p>
        <pre>
          <code>npm i bootstrap</code>
        </pre>
        <pre>
          <code>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
          </code>
        </pre>
        <pre>
          <code>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
          </code>
        </pre>
      </div>
      <h3 className="font-extrabold text-xl my-5">Tailwind Framework</h3>
      <div></div>
    </article>
  );
};
