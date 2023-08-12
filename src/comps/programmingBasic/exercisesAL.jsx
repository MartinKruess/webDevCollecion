import { useEffect, useState } from "react";
import { jsExercises } from "./assets/exercises";
// import { arrayOfObjects } from "./assets/arrayOfObjects";

export const JSExercises = () => {
  const [type, setType] = useState("default");
  const [jsExercisesArr, setJSExercisesArr] = useState([]);

  const getTypeTarget = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const filteredExercises =
      jsExercises && jsExercises.filter((execise) => execise.type === type);
    type === "default"
      ? setJSExercisesArr(jsExercises)
      : setJSExercisesArr(filteredExercises);
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
      <div className="flex justify-between mt-10">
        <select
          className="bg-slate-700 px-6 py-2 rounded-xl"
          name="exercises"
          id="exercises"
          onChange={(e) => getTypeTarget(e)}
        >
          <option value="default">Alle</option>
          <option value="array">Array Basic</option>
          <option value="loops">Loop Basic</option>
          <option value="objects">Object</option>
          <option value="this" disabled>
            this
          </option>
          <option value="arrayHigh" disabled>
            Array Advanced
          </option>
          <option value="loopsHigh" disabled>
            Loop Advanced
          </option>
          <option value="dom" disabled>
            DOM Basic
          </option>
        </select>
        <p className="text-xl py-2">
          Übungen Vorhanden: {jsExercisesArr.length}
        </p>
      </div>
      {jsExercisesArr.map((exercise, i) => (
        <div className="mt-5 p-5 bg-slate-800 border" key={i}>
          <h3 className="font-extrabold text-xl">{exercise.header}</h3>
          <p>{exercise.tasks[0]}</p>
          <p>{exercise.tasks[1]}</p>
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
          {exercise.output && (
            <a
              href={exercise.output}
              download={exercise.output}
              target="_blank"
            >
              Download
            </a>
          )}
        </div>
      ))}
    </article>
  );
};
