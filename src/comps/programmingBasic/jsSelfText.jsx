import { useEffect, useState } from "react";
import { TestQuestions as questions } from "./assets/jsTestQuestions";

export const SelfTest = () => {
  const [arr, setArr] = useState([]);

  const questionIndex = [];

  const createTest = (questions) => {
    const arrey = [];
    for (let i = 0; i < 10; i++)
      questionIndex.push(Math.floor(Math.random() * 30));
    console.log(questionIndex);
    for (let i = 0; i < questionIndex.length; i++) {
      arr.push(questions[questionIndex[i]]);
    }
    return arrey;
  };

  const storage = createTest(questions);

  useEffect(() => {
    //setArr(storage);
  }, [arr]);

  console.log(arr);

  return (
    <article>
      <div className="questionContainer">
        <h2>Teste dein Wissen!</h2>
        <form action="" className="w-3/4 m-auto">
          {arr.map((task, i) => (
            <fieldset
              className="bg-slate-600 my-5 p-10 m-auto rounded-2xl"
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
                type="text"
              />
            </fieldset>
          ))}
        </form>
      </div>
    </article>
  );
};
