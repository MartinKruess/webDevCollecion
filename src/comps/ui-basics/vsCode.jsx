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
      <div className="imgContainer md:imgCollection">
        <img
          className="my-3 w-full md:xsmall"
          src="./images/autoSave.png"
          alt="Github Extension preview"
        />
        <img
          className="my-3 w-full md:xsmall"
          src="./images/worldWrap.png"
          alt="Github Extension preview"
        />
        <img
          className="my-3 w-full md:xsmall"
          src="./images/prettierSimi.png"
          alt="Github Extension preview"
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
      <h3 className="font-extrabold text-xl">Github</h3>
      <p>
        Um die Arbeit mit Git und Github zu erleichtern gibt es etliche Tools,
        die einem versprechen, dass nun alles besser wird. Manche von ihnen sind
        kostenpflichtig, andere kostenlos. Doch was brauchen wir wirklich und
        was können wir sogar innerhalb von VS-Code nutzen? VS-Code bietet durch
        Extensions die Möglichkeit uns Tools direkt in die Entwicklungsumgebung
        zu holen.
      </p>
      <p>
        Die <span className={highlights.program}>Source-Controll</span> ist eine Möglichkeit,
        direkt in VS-Code mit Github zu arbeiten. Über das Symbol am linken Rand kannst du deinen Github Account mit deinem
        VS-Code verknüpfen.
      </p>
      {/* <div className="imgContainer">
        <img
          className="imgNormal small"
          src="./images/extension-signin.png"
          alt="Github Extension preview"
        />
      </div> */}
      <p>
        Nach dem Einloggen und Authorisieren von Github für VS-Code kannst du bequem git add, commit, push und pull über das vorhandene Interface verwenden. Ebenfalls lassen sich dadurch mit zwei Klicks neue Repos auf Github erstellen.
      </p>
      <h3 className="font-extrabold text-xl">HTML Tags</h3>
      <p>
        Es ist relativ leicht den überblick bei öffnenden und schließenden Tags
        zu verlieren. Daher arbeite ich ganz gerne mit der Extension <span  className={highlights.program}>color the tag name</span>. Das tolle an der Extensio ist, dass sie auch in React und Vue
        funktioniert.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/coloredTagName.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">CSS Frameworks</h3>
      <p>
        Spezielle CSS-Frameworks nutzen eigene Klassen und diese sind nicht in
        VS-Code abrufbar. Daher gibt es für Frameworks wie Bootstrap und
        Tailwind Extensions, die uns das Leben erleichtern.
      </p>
      <p>
        ACHTUNG: Der Übersichthalber sollten diese Extensions nur aktiv sein,
        wenn ihr mit einem der Frameworks in eurem Projekt arbeitet. Sollten
        beide Extensions aktiv sein, werden auch auch beide Optionen angezeigt,
        wodurch man leicht den Überblick verliert ob <span className={highlights.code}>flex oder d-flex</span> nun
        zum einen oder anderen Framework gehört.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/bootstrapAutocomplete.png"
          alt="Github Extension preview"
        />
      </div>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/tailwindCSS.png"
          alt="Github Extension preview"
        />
      </div>
      <p>
        Andere CSS-Varianten wie SASS/SCSS benötigen einen Compiler. Der <span className={highlights.program}>Live Sass Compiler</span> ist eine sehr zuverlässige Extension, die genau das
        bietet. Durch diese Extension wird der "watch sass" button im Footer von
        VS-Code hinzugefügt.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/liveSassCompiler.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">
        Rainbow Brackets (Light Version in VS-Code)
      </h3>
      <p>
        <span className={highlights.program}>Rainbow Brackets</span> sorgt dafür, dass deine &#123;(&lt;&gt;)&#125;
        unterschiedliche Farben bekommen, so erkennt man leicht ob die öffnende
        &#123; auch eine schließende &#125; hat. Dies ist leider oft ein Problem
        bei der Verschachtelung von Loops, Functions und mehr. Seit Anfang 2023
        hat VS-Code diese Funktion als Lightversion implementiert. Daher ist
        diese Extension nicht unbedingt nötig, aber wenn trotzdem ein paar mehr
        Farben haben möchte, kann diese Extension gerne verwenden.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/rainbowBrackets.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">Prettier</h3>
      <p>
        <span className={highlights.program}>Prettier</span> setzt standards für die Code Formatierung. Gerne wird Prettier
        verwendet um innerhalb eines größeren projektes Formatierungsfehler zu
        vermeiden. Bei git zählt jedes von dir nicht gesetzte Simicolon oder
        jedes nicht gemachte "Enter" in zum Beispiel einer CSS-Datei, dass ein
        Teammitglied aber gesetzt hat als 1 Merge-Conflict. Das kann schnell bei
        größeren projekten zu mehreren 1000. Fehlern führen, nur weil jede zeile
        code, css, html etwas fehlt. Daher ist es von Vorteil, sich auf eine
        Fotmatierungsart zu einigen. So sind schonmal Grundlegende Dinge wie
        "nur 1x Enter im css", ein Simicolon hinter jeder Zeile Code, alle
        Strings bekommen "" oder '' geklärt und erzeugen keine unnötigen
        Konflikte.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/prettier.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">Language Pack (Deutsch)</h3>
      <p>
        Mit dem Language Pack ist es möglich VS-Code auf deutsch umzustellen.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/languagePack.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">Quokka JS</h3>
      <p>
        Die Extension <span className={highlights.program}>Quokka</span> ist bietet eine Vorschau für Ausgaben via
        console.log, result und mehr. Für plane JS/TS ist diese Extension sehr
        nützlich, doch leider funktioniert die Erweitung in React nur in
        seltenen Fällen.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/quokka.png"
          alt="Github Extension preview"
        />
      </div>
    </article>
  );
};
