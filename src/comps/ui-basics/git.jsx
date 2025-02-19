import { highlights } from "../../App";
import { GitList } from "./assets/gitList";

export const GitFlow = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">
        Der Workflow mit Git und Github
      </h2>
      <h3 className="font-extrabold text-xl">Was ist Git?</h3>
      <p>
        Git ist ein Programm zur Überwachung eines Projektes und Einführung
        einer Versionskontrolle. Das bedeutet, mit Git lassen sich sogannte
        Branches erstellen. Ein Branch ist eine imaginäre Kopie deiner
        bisherigen Dateien. Alle Änderungen auf dem Branch werden zwar von Git
        gespeichert, verändern allerdings nicht die original Dateien. Der
        Vorteil daran ist, dass auf dem Branch an einem Feature gearbeitet
        werden kann ohne die original Dateien dabei zu beschädigen. Sollte ein
        Fehler auf einem Branch auftreten, kann dieser jederzeit gelöscht werden
        und von der original Datei eine neue Kopie erstellt werden um neu zu
        beginnen.
      </p>
      <p></p>
      <h3 className="font-extrabold text-xl">Git Commands</h3>
      <br />
      <GitList />
      <p>
        Weitere git Befehle sind{" "}
        <span className={highlights.code}>git stash</span>,{" "}
        <span className={highlights.code}>git log</span>,{" "}
        <span className={highlights.code}>git shortlog</span>,{" "}
        <span className={highlights.code}>git fetch</span> und viele viele mehr.
      </p>
    </article>
  );
};
