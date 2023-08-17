import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

import { NPM } from "../programmingBasic/npm";
import { VSCode } from "../programmingBasic/vsCode";
import { Variable } from "../programmingBasic/variable";
import { IfElse } from "../programmingBasic/ifelse";
import { Array } from "../programmingBasic/array";
import { Ternary } from "../programmingBasic/ternary";
import { JSText } from "../programmingBasic/jsText";
import { Loop } from "../programmingBasic/loop";
import { NodeInstaller } from "../programmingBasic/node";
import { Function } from "../programmingBasic/function";
import { JSExercises } from "../programmingBasic/exercisesAL";

import { Vite } from "../programmingBasic/vite";
import { Objects } from "../programmingBasic/objects";
import { ObjectsAdv } from "../programmingBasic/objectsAdv";
import { Datentypen } from "../programmingBasic/datatype";
import { SelfTest } from "../programmingBasic/jsSelfText";

export const PB = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-19">
        <ul className="w-11/12 text-2xl flex flex-wrap gap-4 pt-2 m-auto">
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("npm")}
          >
            NPM
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("node")}
          >
            NodeJS
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("vs-code")}
          >
            VS-Code
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("variables")}
          >
            Variables
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("ifelse")}
          >
            If/Else
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("array")}
          >
            Array
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("loop")}
          >
            Loops
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("function")}
          >
            Functions
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("datatype")}
          >
            Datentypen
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("objects")}
          >
            Objects Basics
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("objectsAdv")}
          >
            Objects Advanced
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("objectsAdv")}
          >
            JSON
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("classes")}
          >
            Classes
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("vite")}
          >
            Vite
          </li>
          <li
            className="bg-red-500 line-through px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("dom")}
          >
            DOM
          </li>
          <li
            className="bg-red-500 line-through px-3 py-2 border rounded-lg hover:bg-red-800"
            // onClick={() => setTheme("typescript")}
          >
            TS
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("jsexercises")}
          >
            Übungen
          </li>
          {/* <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("jsSelfTest")}
          >
            Selbst Test
          </li> */}
        </ul>
      </nav>
      <section className="w-10/12 m-auto mt-8">
        {!theme && <JSText />}
        {theme === "npm" && <NPM />}
        {theme === "node" && <NodeInstaller />}
        {theme === "vs-code" && <VSCode />}
        {theme === "variables" && <Variable />}
        {theme === "ifelse" && <IfElse />}
        {theme === "array" && <Array />}
        {theme === "loop" && <Loop />}
        {theme === "function" && <Function />}
        {theme === "datatype" && <Datentypen />}
        {theme === "objects" && <Objects />}
        {theme === "objectsAdv" && <ObjectsAdv />}
        {theme === "vite" && <Vite />}
        {theme === "jsexercises" && <JSExercises />}
        {theme === "jsSelfTest" && <SelfTest />}
      </section>
    </>
  );
};
