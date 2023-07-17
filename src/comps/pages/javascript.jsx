import { useState } from "react";
import { Variable } from "../programmingBasic/variable";
import { IfElse } from "../programmingBasic/ifelse";
import { Array } from "../programmingBasic/array";
import { Ternary } from "../programmingBasic/ternary";
import { JSText } from "../programmingBasic/jsText";
import { Loop } from "../programmingBasic/loop";
import { NodeInstaller } from "../programmingBasic/node";
import { Function } from "../programmingBasic/function";
import { JSExercises } from "../programmingBasic/exercisesAL";
import { VSCode } from "../programmingBasic/vsCode";
import { NPM } from "../programmingBasic/npm";
import { Vite } from "../programmingBasic/vite";
import { loadTheme } from "../global/loadTheme";

export const PB = () => {
  const [theme, setTheme] = useState("");
  console.log(theme);

  return (
    <>
      <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-19">
        <ul className="w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto">
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("npm", theme)}
          >
            NPM
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("node", theme)}
          >
            NodeJS
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("vs-code", theme)}
          >
            VS-Code
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("variables", theme)}
          >
            Variables
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("ifelse", theme)}
          >
            If/Else
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("ternary", theme)}
          >
            Ternary
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("array", theme)}
          >
            Array
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("loop", theme)}
          >
            Loops
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("function", theme)}
          >
            Functions
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("vite", theme)}
          >
            Vite
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("jsexercises", theme)}
          >
            Bonus Übungen
          </li>
        </ul>
      </nav>
      <section className="w-10/12 m-auto mt-8">
        {!theme && <JSText />}
        {theme === "npm" && <NPM />}
        {theme === "node" && <NodeInstaller />}
        {theme === "vs-code" && <VSCode />}
        {theme === "variables" && <Variable />}
        {theme === "ifelse" && <IfElse />}
        {theme === "ternary" && <Ternary />}
        {theme === "array" && <Array />}
        {theme === "loop" && <Loop />}
        {theme === "function" && <Function />}
        {theme === "vite" && <Vite />}
        {theme === "jsexercises" && <JSExercises />}
      </section>
    </>
  );
};
