import { useEffect, useState } from "react";
import { jsExercises } from "./assets/exercises";

export const JSExercises = () => {
  const [type, setType] = useState("default");

  const getTypeTarget = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Bonus Übungen</h2>
      <p className="pt-4 pb-2">
        Hier sind ein paar zusätzliche Übungsaufgaben. Erstelle einfach eine
        index.js/main.js und arbeite so viele Aufgaben durch, wie du magst. Ich
        nehme gerne Spiele als Beispiele, da in der Spiele Entwicklung sehr
        viele Sinnvolle Loops und Functions angewendet werden.
      </p>
      <select
        className="px-6 py-2 rounded-xl"
        name="exercises"
        id="exercises"
        onChange={(e) => getTypeTarget(e)}
      >
        <option value="default">Alle</option>
        <option value="array">Array</option>
        <option value="loops">Loop</option>
        <option value="objects">Object</option>
        <option value="arrayHigh">Array 2</option>
      </select>
      {jsExercises.map((exercise, i) => (
        <div className="mt-5 p-5 bg-slate-800 border" key={i}>
          <h3 className="font-extrabold text-xl">{exercise.header}</h3>
          <p>{exercise.tasks[0]}</p>
          {exercise.code && (
            <pre>
              <code>{exercise.code[0]}</code>
              <br />
              <code>{exercise.code[1]}</code>
              <br />
              <code>{exercise.code[2]}</code>
            </pre>
          )}
          <h3 className="font-extrabold text-xl">{exercise.advancedHeader}</h3>
          <p>{exercise.advancedTask}</p>
        </div>
      ))}
      <div className="mt-5 p-5 bg-slate-800 border">
        <h3 className="font-extrabold text-xl">Objekte </h3>
        <p>
          Die Aufgabe ist es mehrere Objekte anzulegen von zwei Mitstudenten und
          eines von dir selbst. Die zu speichernden Daten sind: name, alter,
          stadt, gesprochene Sprachen
        </p>
        <p>
          Finde heraus welche Mitstudenten aus Berlin kommen und gib aus:
          .log("Hans kommt aus Berlin!")
        </p>
        <p>
          Überprüfe abschließend wer die Sprache Spanisch kann und gibt diese
          Person aus, wenn keiner Spanisch spricht, gibt "Niemand spricht
          Spanisch." aus.
        </p>
      </div>
    </article>
  );
};
