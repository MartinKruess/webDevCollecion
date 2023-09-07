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
import { Console } from "../programmingBasic/console";
import { Electron } from "../programmingBasic/electron";

export const PB = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-40 sm:top-16">
        <ul className="w-full text-sm sm:text-lg md:text-xl flex flex-wrap gap-2 sm:gap-4 pt-2 m-auto">
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("npm")}
          >
            NPM
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("node")}
          >
            NodeJS
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("vs-code")}
          >
            VS-Code
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("vite")}
          >
            Vite
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("electron")}
          >
            Electron
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("console")}
          >
            Console
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("variables")}
          >
            Variables
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("ifelse")}
          >
            If/Else
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("array")}
          >
            Array
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("loop")}
          >
            Loops
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("function")}
          >
            Functions
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("datatype")}
          >
            Datentypen
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("objects")}
          >
            Objects Basics
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("objectsAdv")}
          >
            Objects Adv
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("objectsAdv")}
          >
            JSON
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800"
            onClick={() => setTheme("classes")}
          >
            Classes
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-red-950 hover:bg-red-800"
            onClick={() => setTheme("jsexercises")}
          >
            Übungen
          </li>
          <li
            className="p-1 sm:p-2 border rounded-lg bg-red-950 hover:bg-red-800"
            onClick={() => setTheme("jsSelfTest")}
          >
            Selbst Test
          </li>
          {/* <li
            className="p-1 sm:p-2 border rounded-lg bg-red-950 hover:bg-red-800"
            onClick={() => setTheme("projects")}
          >
            Projekt Ideen
          </li> */}
        </ul>
      </nav>
      <section className="w-10/12 m-auto">
        {!theme && <JSText />}
        {theme === "npm" && <NPM />}
        {theme === "node" && <NodeInstaller />}
        {theme === "vs-code" && <VSCode />}
        {theme === "vite" && <Vite />}
        {theme === "electron" && <Electron />}
        {theme === "console" && <Console />}
        {theme === "variables" && <Variable />}
        {theme === "ifelse" && <IfElse />}
        {theme === "array" && <Array />}
        {theme === "loop" && <Loop />}
        {theme === "function" && <Function />}
        {theme === "datatype" && <Datentypen />}
        {theme === "objects" && <Objects />}
        {theme === "objectsAdv" && <ObjectsAdv />}
        {theme === "jsexercises" && <JSExercises />}
        {theme === "jsSelfTest" && <SelfTest />}
      </section>
    </>
  );
};
