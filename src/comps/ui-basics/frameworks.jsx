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
          Methode gibt es auch die Möglichkeit die CDN zu verwenden.
        </p>
        <pre className="w-10/12 m-auto">
          <code>npm i bootstrap</code>
        </pre>
        <p>
          Bei der CDN muss man einen &lt;Link&gt; und ein &lt;Script&gt; in den
          &lt;Head&gt; einbinden.
        </p>
        <pre className="w-10/12 m-auto">
          <code>
            &lt;link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"&gt;
          </code>
        </pre>
        <pre className="w-10/12 m-auto">
          <code>
            &lt;script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossorigin="anonymous" &gt;&lt;/script&gt;
          </code>
        </pre>
        <a href="https://getbootstrap.com/">Bootstrap</a>
      </div>
      <h2 className="font-extrabold text-2xl my-5">Tailwind Framework</h2>
      <div>
        <p>
          Tailwind ist ein Utility-First-CSS-Framework, das seinen Nutzern
          Utility Klassen bereitstellt. Durch die Verwendung dieser Klassen
          lassen sich schnell und einfach eigene, einzigartige Designs
          erstellen. Für die Gestaltung von Webseiten enthält Tailwind die
          Grundlagen, wie z.B. Farben, Größen, Ränder, Positionierungen usw.
          Komponenten müssen von Nutzern selbst erstellt werden. Damit
          unterscheidet es sich von anderen CSS Frameworks wie z.B. Bootstrap
          und Bulma, die vorgefertigte UI Komponenten anbieten. Komponenten
          lassen sich in Tailwind inline stylen, weshalb es nicht mehr nötig
          ist, eine separate CSS Datei anzulegen.
        </p>
        <h3 className="font-extrabold text-xl my-5">
          Die Vorteile von Tailwind
        </h3>
        <p>
          Tailwind bringt einige Vorteile mit sich, so ist es zum Beispiel super
          anpassbar. Es gibt eine Standardkonfiguration, die sich einfach mit
          einer tailwind.config.js Datei überschreiben lässt. Mit dieser Datei
          lässt sich alles ganz einfach anpassen. Mit der Konfigurationsdatei
          gibt es außerdem noch ein Entwurfssystem, mit dem sich alle wichtigen
          Werte im Voraus konfigurieren lassen.
        </p>
        <p>
          Durch die von Tailwind bereitgestellten Hilfsklassen spart man sich
          das Benennen von Klassen, was die Arbeit erleichtert. Außerdem wird
          die Arbeit dadurch erleichtert, dass das Framework fast alles, was
          benötigt wird, von sich aus mitbringt. Diese Konsistenz sorgt dafür,
          dass man sich ohne große Probleme in neue Tailwind-Projekte
          einarbeiten kann.
        </p>
        <h3 className="font-extrabold text-xl my-5">Tailwind Installation</h3>
        <p>
          Dieses beispiel bezieht sich auf die Einbindung von Tailwind in ein
          bestehendes Vite Vanilla oder Vite React Projekt. Nach der Erstellung
          eines solchen Projektes (siehe Javascript - Vite) führen wir folgende
          Befehle im Terminal aus.
        </p>
        <div className="grid grid-cols-12 md:gap-10">
          <p className="col-start-1 col-end-8 md:col-end-6">
            Installiere tailwindcss und erzeuge die Abhängigkeiten innerhalb des
            Projektes. Generiere die "tailwind.config.js" "postcss.config.js"
            Dateien.
          </p>
          <pre className="col-start-1 md:col-start-6 col-end-12">
            <code>
              npm install -D tailwindcss postcss autoprefixer <br />
              npx tailwindcss init -p
            </code>
          </pre>
          <p className="col-start-1 col-end-8 md:col-end-6">
            Die Konfiguration der "tailwind.config.js", ist die Anpassung des
            Contents an das bestehende Projekt.
          </p>
          <pre className="col-start-1 md:col-start-6 col-end-12">
            <code>
              /** @type {import("tailwindcss").Config} */ <br />
              export default &#123; <br />
              content: [ <br />
              "./index.html", <br />
              "./src/**/*.&#123;js,ts,jsx,tsx&#125;", <br />
              ], <br />
              theme: &#123; <br />
              extend: &#123;&#125;, <br />
              &#125;, <br />
              plugins: [], <br />
              &#125;
            </code>
          </pre>
          <p className="col-start-1 col-end-8 md:col-end-6">
            Die Tailwind Dateien müssen der CSS Datei (index.css) hinzefügt
            werden.
          </p>
          <pre className="col-start-1 md:col-start-6 col-end-12">
            <code>
              @tailwind base; <br />
              @tailwind components; <br />
              @tailwind utilities;
            </code>
          </pre>
          <p className="col-start-1 col-end-8 md:col-end-6">
            WICHTIG: Abschließend muss der terminal neu gestarten werden.
          </p>
          <pre className="col-start-1 md:col-start-6 col-end-12">
            <code>npm run dev</code>
          </pre>
        </div>
        <a href="https://tailwindcss.com/docs/guides/vite">Tailwind</a>
        <a href="https://nerdcave.com/tailwind-cheat-sheet">
          Tailwind Cheat Sheet
        </a>
      </div>
    </article>
  );
};
