import { useEffect, useState } from "react";

export const VSCode = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">VS Code - Tipps und Tricks</h2>
      <p className="pt-4 pb-2">
        Unser Haupttool ist VS-Code und daher sollten wir unsere
        Entwicklungsumgebung auf unsere Bedürfnisse Anpassen. Es gibt einige
        Extensions, die wir im Laufe der Zeit benötigen und aus denen wir
        rauswachsen werden.
      </p>
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
        Die "GitHub Pull request and Issues" Extension ist eine erweiterung, die
        das Arbeiten mit Github direkt in VS-Code möglich macht. Über das Github
        Symbol am linken Rand kannst du nun deinen Github Account mit deinem
        VS-Code verknüpfen.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal small"
          src="./images/extension-signin.png"
          alt="Github Extension preview"
        />
      </div>
      <p>
        Nach dem Einloggen und Authorisieren von Github für VS-Code kannst du
        über diese Extension bequem git add, commit, push und pull verwenden.
        Ebenfalls lassen sich dadurch mit zwei Klicks neue Repos auf Github
        erstellen.
      </p>
      <p>
        Ergänzend dazu könnte man noch folgende Extension nutzen. Genaues über
        diese Extension weiß ich leider aktuell nicht.
      </p>
      <div className="imgContainer">
        <img
          className="imgNormal"
          src="./images/ghExtension.png"
          alt="Github Extension preview"
        />
      </div>
      <h3 className="font-extrabold text-xl">HTML Tags</h3>
      <h3 className="font-extrabold text-xl">
        Curly Brackets/Geschweifte Klammern
      </h3>
      <h3 className="font-extrabold text-xl">Github</h3>

      <div className="code">
        <pre>
          <code>
            for(let i = 0; i &lt; 5; i++) &#123;
            <br />
            &#9;console.log("Do something", i+1, "times")
            <br />
            &#125;
          </code>
        </pre>
      </div>
    </article>
  );
};
