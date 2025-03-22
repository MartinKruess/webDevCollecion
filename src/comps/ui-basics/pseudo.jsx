import { highlights } from "../../App";

export const Pseudo = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">
        Pseudoklassen und Pseudoelemente
      </h2>
      <h3 className="font-extrabold text-xl">Pseudoklassen</h3>
      <p className="pt-4 pb-2">
        Unter einer Pseudoklasse versteht man einen bestimmten Zustand, wie
        hover oder visited. Allerdings gibt es auch unter den Pseudoklassen
        immer Neuheiten zu entdecken. Die Pseudeklasse kann an jedes Element
        angehängt werde. Characteristisch für eine Pseudeklasse ist{" "}
        <span className={highlights.code}>p:hover</span>
      </p>
      <h4 className="font-extrabold text-lg">Dynamische Zustände</h4>
      <ul className="pt-4 pb-2">
        <li>
          <strong>:hover</strong> → Wird aktiv, wenn die Maus über das Element
          fährt.
        </li>
        <li>
          <strong>:focus</strong> → Wird aktiv, wenn das Element fokussiert wird
          (z. B. ein Input-Feld).
        </li>
        <li>
          <strong>:active</strong> → Wird aktiv, wenn das Element geklickt oder
          gedrückt wird.
        </li>
        <li>
          <strong>:visited</strong> → Gilt für bereits besuchte Links.
        </li>
      </ul>

      <h4 className="font-extrabold text-lg">Strukturbezogene Pseudoklassen</h4>
      <ul className="pt-4 pb-2">
        <li>
          <strong>:first-child</strong> → Wählt das erste Kind eines Elements
          aus.
        </li>
        <li>
          <strong>:last-child</strong> → Wählt das letzte Kind eines Elements
          aus.
        </li>
        <li>
          <strong>:nth-child(n)</strong> → Wählt das n-te Kind eines Elements
          aus.
        </li>
        <li>
          <strong>:nth-last-child(n)</strong> → Wählt das n-te Kind (vom Ende
          gezählt) aus.
        </li>
        <li>
          <strong>:only-child</strong> → Wählt Elemente aus, die das einzige
          Kind ihres Elternteils sind.
        </li>
      </ul>

      <h4 className="font-extrabold text-lg">Formularbezogene Pseudoklassen</h4>
      <ul className="pt-4 pb-2">
        <li>
          <strong>:checked</strong> → Wählt Checkboxen oder Radio-Buttons aus,
          die aktiviert sind.
        </li>
        <li>
          <strong>:disabled</strong> → Wählt deaktivierte Formularelemente aus.
        </li>
        <li>
          <strong>:enabled</strong> → Wählt aktivierbare Formularelemente aus.
        </li>
        <li>
          <strong>:required</strong> → Wählt Formularelemente aus, die als
          erforderlich markiert sind.
        </li>
        <li>
          <strong>:valid</strong> → Wählt Formularelemente aus, die gültige
          Werte haben.
        </li>
        <li>
          <strong>:invalid</strong> → Wählt Formularelemente aus, die ungültige
          Werte haben.
        </li>
      </ul>

      <h4 className="font-extrabold text-lg">
        Inhaltsbasierte Pseudoklassen (Neu seid 2023)
      </h4>
      <ul className="pt-4 pb-2">
        <li>
          <strong>:empty</strong> → Wählt Elemente ohne Inhalt aus.
        </li>
        <li>
          <strong>:not(selector)</strong> → Wählt alle Elemente aus, die nicht
          dem angegebenen Selektor entsprechen.
        </li>
        <li>
          <strong>:has(selector)</strong> → Wählt Elemente aus, die ein
          bestimmtes Unterelement enthalten.
        </li>
      </ul>
      <div className="linkContainer">
        <a
          href="https://css-tricks.com/snippets/css/complete-guide-grid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grid Guide
        </a>
        <a
          href="https://www.mediaevent.de/css/grid.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grid in vier Schritten
        </a>
        <a
          href="https://www.spacejam.com/1996/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veraltetes Tabellen-Layout (siehe DevTools)
        </a>
      </div>
    </article>
  );
};
