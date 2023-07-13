import { useEffect, useState } from "react";

export const VSCode = () => {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {}, [isWatched]);

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
      <h3 className="font-extrabold text-xl">Git und Github</h3>
      <p>
        Um die Arbeit mit Git und Github zu erleichtern gibt es etliche Tools,
        die einem versprechen, dass nun alles besser wird. Manche von ihnen sind
        Kostenpflichtig, andere Kostenlos. Doch was brauchen wir wirklich und
        was können wir sogar innerhalb von VS-Code nutzen? VS-Code bietet durch
        Extensions die Möglichkeit uns Tools direkt in die Entwicklungsumgebung
        zu holen.
      </p>

      <div className="imgContainer">
        {isWatched ? (
          <img
            className="imgHover"
            onClick={() => setIsWatched(!isWatched)}
            src="./images/ghExtension.png"
            alt="Github Extension big"
          />
        ) : (
          <img
            className="imgNormal"
            onClick={() => setIsWatched(!isWatched)}
            src="./images/ghExtension.png"
            alt="Github Extension preview"
          />
        )}
      </div>
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
