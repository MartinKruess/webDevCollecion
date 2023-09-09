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
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [wrnAns, setWrnAns] = useState([]);
  const questionIndex = [];
  const wrongAnswers = [];
  let count = 0;

  const createTest = (questions) => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      //questionIndex.push(Math.floor(Math.random() * 30));
      const rnr = Math.floor(Math.random() * questions.length);
      if (!questionIndex.includes(rnr)) {
        questionIndex.push(rnr);
        console.log(rnr);
      } else {
        i--;
      }
    }
    for (let i = 0; i < questionIndex.length; i++) {
      array.push(questions[questionIndex[i]]);
    }
    return array;
  };

  useEffect(() => {
    setArr(createTest(questions));
    setCounter(count);
  }, []);

  // useEffect(() => {
  //   setCounter(count);
  // }, [toggle]);

  const controllAnswers = (e) => {
    e.preventDefault();

    const inputsArr = Object.values(inputs);

    for (let i = 0; i < inputsArr.length; i++) {
      let isCorrect = false;

      for (const answer of arr[i].answer) {
        if (inputsArr[i].toLowerCase().includes(answer.toLowerCase())) {
          isCorrect = true;
        }
      }
      if (isCorrect) {
        count = count + 10;
        setCounter(count);
      } else {
        wrongAnswers.push(`${inputsArr[i]}`);
        wrongAnswers.push(` - ${arr[i].correct}\n`);
        setWrnAns(wrongAnswers);
      }
    }
    // alert(
    //   `Deine erreichten Punkte: ${counter} \n Fehlerhafte Antworten:\n\n${wrongAnswers}\n\n`
    // );
    setToggle(true);
  };

  return (
    <article>
      <div className="questionContainer">
        <SelfTestText />
        {toggle && (
          <div className="flex flex-wrap">
            <div className="w-full">Punkte: {counter}</div>
            <h2 className="text-xl border-b-2 w-1/2">Falsche Antworten</h2>
            <h2 className="text-xl border-b-2 w-1/2">Erklärung</h2>
            {wrnAns.map((answer, i) => (
              <p key={i} className="w-full md:w-1/2 border-b border-blue-700">
                {answer}
              </p>
            ))}
            <button
              className="bg-red-600 text-white text-xl m-auto my-10 p-2 border rounded-md small"
              onClick={() => setToggle(!toggle)}
            >
              Neue Fragen
            </button>
          </div>
        )}
        {!toggle && (
          <form className="w-full m-auto pb-20 flex flex-wrap gap-5">
            {arr.map((task, i) => (
              <fieldset
                className="w-full lg:w-1/2 text-sm bg-slate-600 smallium p-10 rounded-2xl border"
                key={i}
              >
                <label>Aufgabe: {i + 1}</label>
                <label className="block text-md md:text-xl text-center py-3">
                  {task.question}
                </label>
                <label className="block text-md md:text-xl text-center py-3">
                  {task.description}
                </label>
                <input
                  className="bg-orange-300 text-black block w-full md:w-3/4 m-auto text-md md:text-xl px-8 py-2 rounded-lg"
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
        )}
      </div>
    </article>
  );
};
