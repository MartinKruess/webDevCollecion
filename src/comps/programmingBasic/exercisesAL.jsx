import { useEffect, useState } from "react";
import { jsExercises } from "./assets/exercises";

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
      <div className="md:flex justify-between mt-10">
        <select
          className="bg-slate-700 px-3 py-2 rounded-lg h-8 w-full outline outline-slate-700 outline-8 md:flex md:justify-between md:w-1/6 font-bold"
          name="exercises"
          id="exercises"
          onChange={(e) => getTypeTarget(e)}
        >
          <option value="default">Alle</option>
          <option value="math">Math</option>
          <option value="array">Array Basic</option>
          <option value="loops">Loop Basic</option>
          <option value="objects">Object</option>
          <option value="higher order functions">
            Map, Filter, Reduce, Find
          </option>
        </select>
        <p className="text-lg py-2 w-full text-right md:w-1/6">
          Übungen: {jsExercisesArr.length}
        </p>
      </div>
      {jsExercisesArr.map((exercise, i) => (
        <div className="mt-5 p-5 bg-slate-800 border execiseContainer" key={i}>
          <h3 className="font-extrabold text-xl execiseHeader">
            {exercise.header}
          </h3>
          <p className="font-extrabold text-xl execiseType">{exercise.type}</p>
          <p className="execiseMainText text-lg">
            {exercise.tasks[0]}
            {exercise.tasks[1]}
          </p>
          {exercise.code[0] && (
            <pre className="exerciseCodeExample">
              <code>
                {exercise.code.map((codeLine, i) => (
                  <>
                    {codeLine}
                    <br />
                  </>
                ))}
              </code>
            </pre>
          )}
          {/* <h3 className="font-extrabold text-xl">{exercise.advancedHeader}</h3>
          <p>{exercise.advancedTask}</p> */}
          {exercise.data && (
            <a
              href={exercise.data}
              download={exercise.data}
              target="_blank"
              className="execiseDownload text-lg"
            >
              Download
            </a>
          )}
          {exercise.solution && (
            <a
              href={exercise.solution}
              download={exercise.solution}
              target="_blank"
              className="execiseSolution text-lg"
            >
              Solution
            </a>
          )}
        </div>
      ))}
    </article>
  );
};
