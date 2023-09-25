import { useEffect, useState } from "react";
import { domExercises } from "./assets/exercisesDOM";

export const DomExercises = () => {
  const [type, setType] = useState("default");
  const [domExercisesArr, setDOMExercisesArr] = useState([]);

  const getTypeTarget = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const filteredExercises =
      domExercises && domExercises.filter((execise) => execise.type === type);
    type === "default"
      ? setDOMExercisesArr(domExercises)
      : setDOMExercisesArr(filteredExercises);
  }, [type]);

  return (
    <article className='p-4'>
      <h2 className='font-extrabold text-2xl'>Bonus Übungen</h2>
      <p className='pt-4 pb-2'>
        Hier sind ein paar zusätzliche Übungsaufgaben für den DOM Bereich.
      </p>
      <div className='md:flex justify-between mt-10'>
        <select
          className='bg-slate-700 px-6 py-2 rounded-xl h-10 w-full md:flex md:justify-between md:w-1/6 font-bold'
          name='exercises'
          id='exercises'
          onChange={(e) => getTypeTarget(e)}
        >
          <option value='default'>Alle</option>
          <option value='dom'>DOM Manipulation</option>
          <option value='async' disabled>
            Async Übungen
          </option>
          <option value='web' disabled>
            Advanced Webseiten
          </option>
        </select>
        <p className='text-lg py-2 w-full text-right md:w-1/6'>
          Übungen: {domExercisesArr.length}
        </p>
      </div>
      {domExercisesArr.map((exercise, i) => (
        <div className='mt-5 p-5 bg-slate-800 border' key={i}>
          <h3 className='font-extrabold text-xl'>{exercise.header}</h3>
          <p>{exercise.description}</p>
          <ul>
            {exercise.tasks.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
          {exercise.commands && <p>{exercise.commands}</p>}
          {exercise.img && <p>{exercise.img}</p>}
          {exercise.url && (
            <a href={exercise.url} target='_blank'>
              {exercise.urlText || "Zur Aufgabe"}
            </a>
          )}
          {exercise.download && (
            <a
              href={exercise.download}
              download={exercise.download}
              target='_blank'
            >
              Download
            </a>
          )}
        </div>
      ))}
    </article>
  );
};
