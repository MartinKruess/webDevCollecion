import { useEffect, useState } from "react";
import { TestQuestions as questions } from "./assets/jsTestQuestions";

export const SelfTest = () => {
  const [arr, setArr] = useState([]);

  const questionIndex = [];

  const createTest = (questions) => {
    const array = [];
    for (let i = 0; i < 10; i++)
      questionIndex.push(Math.floor(Math.random() * 30));
    console.log(questionIndex);
    for (let i = 0; i < questionIndex.length; i++) {
      array.push(questions[questionIndex[i]]);
    }
    return array;
  };

  useEffect(() => {
    setArr(createTest(questions));
  }, []);

  console.log(arr);

  return (
    <article>
      <div className="questionContainer">
        <h2 className="font-extrabold text-2xl col-start-1 col-end-12 mb-3">Teste dein Wissen!</h2>
        <p className="my-5">
          Hier hast du die Möglichkeit dein Wissen auf die Probe zu stellen und herauszufinden bei welchen Themen du eventuell noch mal nachlesen solltest. Die Aufgaben sind so aufgebaut, dass du nur die Stichwörter oder Syntax abgeben musst. Oft gibt es Hinweise, die dir einen Tipp geben, in welchem Format die Antwort erwartet wird, Hinweise wie: 'Syntax', 'nutze Variable abc' und mehr.
        </p>
        <p>
          Das ganze befindet sichnoch in der testphase, daher könnte es sein, dass du das richtige meinst, die Antwort dennoch als falsch gewertet wird, da bisher nur eine Hand voll Antwortmöglichkeiten zur verfügung stehen. Wie du in den nachfolgenden beispielen siehst, gibt es eine Millionen mögliche Antworten und man kann leider nicht jede mögliche Antwort abfragen. Die Antworten, die gewählt wurden sind meist Fachbegriffe, Schlagwörter + simple Umschreibungen. Mit diesen werden deine NAtworten via includes() überprüft. Daher könnte es vorkommen, dass eine Antwort als falsch gekennzeichnet wird, die du im Grunde richtig, nur eben anders beschrieben hast. Dies ist nur ein Selbsttest und kein wirklich zertifiziertes Ergebnis.
        </p>
        <p>
          BEISPIEL: Beschreibe was if/else ist.<br />
          Richtige Antworten: 'wenn, dann', 'wenn dann', 'wenn/dann', 'logische abfrage'<br />
          Deine mögliche Antworten: 'wenn und dann', 'eine überprüfung von true/false', 'code der je nach erfüllen einer bedingung ausgeführt wird'...
        </p>
        <form action="https://formspree.io/f/xpzbayoq" method="POST" className="w-full m-auto pb-20 flex flex-wrap gap-5">
          <label className="flex items-center w-full">
            <span>Email:</span>
            <input
              className="bg-orange-300 text-black block w-3/4 m-auto text-xl px-8 py-2 rounded-lg"
              type="text" 
            />
          </label>
          {arr.map((task, i) => (
            <fieldset
              className="bg-slate-600 smallium p-10 rounded-2xl border"
              key={i}
            >
              <label>Aufgabe: {i + 1}</label>
              <label className="block text-xl text-center py-3">
                {task.question}
              </label>
              <label className="block text-xl text-center py-3">
                {task.description}
              </label>
              <input
                className="bg-orange-300 text-black block w-3/4 m-auto text-xl px-8 py-2 rounded-lg"
                type="text" name="value"
              />
            </fieldset>
          ))}
          <button type="submit" className="bg-red-600 text-white text-xl m-auto mt-10 p-2 border rounded-md small">Send</button>
        </form>
      </div>
    </article>
  );
};
