import { highlights } from "../../App";

export const VSCode = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">VS Code - Tipps und Tricks</h2>
      <p className="pt-4 pb-2">
        Unser Haupttool ist VS-Code und daher sollten wir unsere
        Entwicklungsumgebung auf unsere Bedürfnisse Anpassen. Es gibt einige
        Extensions und Settings, die wir im Laufe der Zeit benötigen und aus
        denen wir rauswachsen werden.
      </p>
      <h3 className="font-extrabold text-xl">Settings</h3>
      <div>
        Zu erst befassen wir uns mit den grundlegenden Settings, die VS-Code mit
        sich bringt. Die allgemeinen Settings ruft man sp auf:
        <p className={highlights.file}>File -&gt; Preferences -&gt; Settings</p>
      </div>
      <div className="lg:flex">
        <img
          className="my-3 w-full md:xsmall lg:w-2/6 md:mx-3"
          src="/images/autoSave.png"
          // src="./images/autoSave.png"
          alt="VS-Code AutoSave onFocusChange"
        />
        <img
          className="my-3 w-full md:xsmall lg:w-2/6 md:mx-3"
          src="/images/worldWrap.png"
          alt="VS-Code worldWrap"
        />
        <img
          className="my-3 w-full md:xsmall lg:w-2/6 md:mx-3"
          src="/images/prettierSimi.png"
          alt="Prettier automatisch Semikol"
        />
      </div>
      <ul>
        <h3 className="font-extrabold text-xl">Vorteile</h3>
        <li>- keine extra Programme</li>
        <li>
          - keine Universaltools, die alles ein bischen aber nichts richtig
          können
        </li>
        <li>
          - keine Übersetzungs- oder Kommunikationsprobleme zwischen
          unterschiedlichen Programmen
        </li>
        <li>- alles leicht vom selben Fenster aus zu bedienen</li>
      </ul>
      <h3 className="font-extrabold text-xl pt-10">
        Source-Controll mit Github
      </h3>
      <p>
        Um die Arbeit mit Git und Github zu erleichtern gibt es etliche Tools,
        die einem versprechen, dass nun alles besser wird. Manche von ihnen sind
        kostenpflichtig, andere kostenlos. Doch was brauchen wir wirklich und
        was können wir sogar innerhalb von VS-Code nutzen? VS-Code bietet durch
        Extensions die Möglichkeit uns Tools direkt in die Entwicklungsumgebung
        zu holen.
      </p>
      <p>
        Die <span className={highlights.program}>Source-Controll</span> ist eine
        Möglichkeit, direkt in VS-Code mit Github zu arbeiten. Über das Symbol
        am linken Rand kannst du deinen Github Account mit deinem VS-Code
        verknüpfen.
      </p>
      <div className="flex justify-between">
        <img
          className="w-2/5"
          src="/images/extension-signin.png"
          alt="Github Extension preview"
        />
        <p className="w-2/5">
          Nach dem Einloggen und Authorisieren von Github für VS-Code kannst du
          bequem git add, commit, push und pull über das vorhandene Interface
          verwenden. Ebenfalls lassen sich dadurch mit zwei Klicks neue Repos
          auf Github erstellen.
        </p>
      </div>
      <h3 className="font-extrabold text-xl pt-10">Erweiterung: HTML Tags</h3>
      <div className="flex justify-between">
        <p className="w-5/12">
          Es ist relativ leicht den überblick bei öffnenden und schließenden
          Tags zu verlieren. Daher arbeite ich ganz gerne mit der Extension{" "}
          <span className={highlights.program}>color the tag name</span>. Das
          tolle an der Extensio ist, dass sie auch in React und Vue
          funktioniert.
        </p>
        <img
          className="w-6/12"
          src="/images/coloredTagName.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: CSS Frameworks
      </h3>
      <div className="flex flex-wrap justify-between">
        <img
          className="w-3/12"
          src="/images/tailwindCSS.png"
          alt="Github Extension preview"
        />
        <p className="w-4/12 py-0">
          Spezielle CSS-Frameworks nutzen eigene Klassen, diese sind nicht in
          VS-Code abrufbar. Daher gibt es für Frameworks wie Bootstrap und
          Tailwind Extensions, die uns das Leben erleichtern.
        </p>
        <img
          className="w-3/12"
          src="/images/bootstrapAutocomplete.png"
          alt="Github Extension preview"
        />
        <p>
          ACHTUNG: Der Übersichthalber sollten diese Extensions nur aktiv sein,
          wenn ihr mit einem der Frameworks in eurem Projekt arbeitet. Sollten
          beide Extensions aktiv sein, werden auch auch beide Optionen
          angezeigt, wodurch man leicht den Überblick verliert ob
          <span className={highlights.code}> flex oder d-flex</span> zum einen
          oder anderen Framework gehört.
        </p>
      </div>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Live SASS Compiler
      </h3>
      <div className="flex justify-between">
        <p className="w-3/6">
          Andere CSS-Varianten wie SASS/SCSS benötigen einen Compiler. Der
          <span className={highlights.program}> Live Sass Compiler</span> ist
          eine sehr zuverlässige Extension, die genau das bietet. Durch diese
          Extension wird der "watch sass" button im Footer von VS-Code
          hinzugefügt.
        </p>
        <img
          className="w-2/6"
          src="/images/liveSassCompiler.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Prettier für einheitliche Formatierung (Single/Group)
      </h3>
      <p>
        <span className={highlights.program}>Prettier</span> setzt standards für
        die Code Formatierung. Gerne wird Prettier verwendet um innerhalb eines
        größeren projektes Formatierungsfehler zu vermeiden. Bei git zählt jedes
        von dir nicht gesetzte Simicolon oder jedes nicht gemachte "Enter" in
        zum Beispiel einer CSS-Datei, dass ein Teammitglied aber gesetzt hat als
        1 Merge-Conflict. Das kann schnell bei größeren projekten zu mehreren
        1000. Fehlern führen, nur weil jede zeile code, css, html etwas fehlt.
        Daher ist es von Vorteil, sich auf eine Fotmatierungsart zu einigen. So
        sind schonmal Grundlegende Dinge wie "nur 1x Enter im css", ein
        Simicolon hinter jeder Zeile Code, alle Strings bekommen "" oder ''
        geklärt und erzeugen keine unnötigen Konflikte.
      </p>
      <img
        className="w-1/3"
        src="/images/prettier.png"
        alt="Github Extension preview"
      />
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Lorem Picsum (Lade random Bilder)
      </h3>
      <div className="flex gap-5">
        <p className="w-8/12">
          Die Extension
          <span className={highlights.program}> Lorem Picsum </span>
          ist eine sehr nützliche Extension, die es ermöglicht, random Bilder in
          VS-Code zu laden. Die Bilder können direkt in VS-Code eingefügt werden
          und sind somit auch offline verfügbar.
        </p>
        <img
          className="w-4/12"
          src="/images/loremPicsum.png"
          alt="Preview of the Lorem Picsum extension"
        />
      </div>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Thunder Client (Postman Alternative zum testen von API´s)
      </h3>
      <div className="flex gap-5">
        <p>
          Die Extension
          <span className={highlights.program}> Thunder Client </span>ist eine
          Postman Alternative, die direkt in VS-Code integriert ist. Mit Thunder
          Client lassen sich API´s testen und die Ergebnisse direkt in VS-Code
          anzeigen.
        </p>
        <img
          className="w-1/3"
          src="/images/thunderClient.png"
          alt="Thunder Client preview"
        />
      </div>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Draw IO (Flowchart, UML, etc. direkt in VS-Code erstellen)
      </h3>
      <p>
        Mit der Extension <span className={highlights.program}> Draw IO </span>
        lassen sich Wireframes, Flowcharts, UML-Diagramme und mehr direkt in
        VS-Code erstellen. Die Extension bietet eine Vorschau und eine
        Bearbeitungsmöglichkeit direkt in VS-Code.
      </p>
      <div className="flex justify-between p-5">
        <img
          className="w-1/3"
          src="/images/drawioIntegration.png"
          alt="Draw IO integration preview"
        />
        <img
          className="w-1/3"
          src="/images/drawioPreview.png"
          alt="Draw IO preview image"
        />
      </div>
      <figure className="w-1/2 m-auto">
        <img
          className="hover:scale-150 duration-500"
          src="/images/drawioExample.png"
          alt="Draw IO example preview"
        />
        <figcaption>Beispiel eines Logikplanes mit DrawIO</figcaption>
      </figure>
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Language Pack (Deutsch)
      </h3>
      <p>
        Mit dem Language Pack ist es möglich weitere Funktionen in VS-Code auf
        deutsch umzustellen.
      </p>
      <img
        className="w-1/3"
        src="/images/languagePack.png"
        alt="Github Extension preview"
      />
      <h3 className="font-extrabold text-xl pt-10">
        Erweiterung: Quokka JS (nicht react compatible)
      </h3>
      <p>
        Die Extension <span className={highlights.program}>Quokka</span> ist
        bietet eine Vorschau für Ausgaben via console.log, result und mehr. Für
        plane JS/TS ist diese Extension sehr nützlich, doch leider funktioniert
        die Erweitung in React nur in seltenen Fällen.
      </p>
      <img
        className="w-1/3"
        src="/images/quokka.png"
        alt="Github Extension preview"
      />
    </article>
  );
};
