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
  const wrongAnswers = [];
  let counter = 0;

  const createTest = (questions) => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      questionIndex.push(Math.floor(Math.random() * 30));
      console.log(questionIndex.includes(22));
    }
    for (let i = 0; i < questionIndex.length; i++) {
      array.push(questions[questionIndex[i]]);
    }
    return array;
  };

  useEffect(() => {
    setArr(createTest(questions));
  }, []);

  // console.log(inputs);

  const controllAnswers = (e) => {
    e.preventDefault();

    const inputsArr = Object.values(inputs);

    for (let i = 0; i < inputsArr.length; i++) {
      let isCorrect = false;

      // for (let a = 0; a < arr.length; a++) {
      //   if(inputsArr[i].includes(arr[a].answer) && a < arr.length -1){
      //     counter++
      //   } else {
      //     wrongAnswers.push(inputsArr[i])
      //     wrongAnswers.push(arr[i].answer[a]) //change back to correct
      //   }
      // }

      for (const answer of arr[i].answer) {
        if (inputsArr[i].includes(answer)) {
          isCorrect = true;
        }
      }
      if (isCorrect) {
        counter = counter + 10;
      } else {
        wrongAnswers.push(`${inputsArr[i]} - `);
        wrongAnswers.push(`${arr[i].correct}\n`);
      }
    }
    alert(
      `Deine erreichten Punkte: ${counter} \n Fehlerhafte Antworten:\n\n${wrongAnswers}\n\n`
    );
  };

  return (
    <article>
      <div className="questionContainer">
        <SelfTestText />
        {/* action="https://formspree.io/f/xpzbayoq" method="POST" */}
        <form className="w-full m-auto pb-20 flex flex-wrap gap-5">
          <label className="w-full">Punkte: {counter}</label>
          <label className="w-full">{wrongAnswers}</label>
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
                type="text"
                name={`answer${i}`}
                onChange={(e) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
              />
            </fieldset>
          ))}
          <button
            className="bg-red-600 text-white text-xl m-auto mt-10 p-2 border rounded-md small"
            onClick={(e) => controllAnswers(e)}
          >
            Send
          </button>
        </form>
      </div>
    </article>
  );
};
