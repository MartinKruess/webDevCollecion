import { useEffect, useState } from "react";
import { TestQuestions as questions } from "./assets/jsTestQuestions";
import { SelfTestText } from "./assets/selfTestText";

export const SelfTest = () => {
  const [arr, setArr] = useState([]);
  const [inputs, setInputs] = useState({
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
  });

  const questionIndex = [];

  const createTest = (questions) => {
    const array = [23];
    for (let i = 0; i < 9; i++)
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

  console.log(inputs);

  const controllAnswers = (value) => {
    
  }

  return (
    <article>
      <div className="questionContainer">
        <SelfTestText />
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
              <label className="block text-xl text-center py-3 text-red-400">
                {task.answer}
              </label>
              <input
                className="bg-orange-300 text-black block w-3/4 m-auto text-xl px-8 py-2 rounded-lg"
                type="text" name={`answer${i}`} onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})}
              />
            </fieldset>
          ))}
          <button type="submit" className="bg-red-600 text-white text-xl m-auto mt-10 p-2 border rounded-md small">Send</button>
        </form>
      </div>
    </article>
  );
};
