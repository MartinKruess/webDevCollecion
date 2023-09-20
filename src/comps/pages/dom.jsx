import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

import { DOMText } from "../dom/domText";
import { Querries } from "../dom/querys";

import { NPM } from "../programmingBasic/npm";
import { Vite } from "../programmingBasic/vite";

import { SelfTest } from "../programmingBasic/jsSelfText";
import { Electron } from "../programmingBasic/electron";
import { ABC } from "../dom/abc";
import { DomExercises } from "../dom/domExercises";

export const DOM = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className='bg-slate-800 pb-5 px-8 sticky z-10 top-24 sm:top-16'>
        <ul className='w-full text-sm sm:text-lg md:text-xl flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          {/* <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("vite")}
          >
            Vite
          </li> */}
          {/* <li
            className="p-1 sm:p-2 border rounded-lg bg-green-950 hover:bg-red-800"
            onClick={() => setTheme("electron")}
          >
            Electron
          </li> */}
          <li
            className='p-1 sm:p-2 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("querry")}
          >
            Querry
          </li>
          <li
            className='p-1 sm:p-2 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme("domexercises")}
          >
            Übungen
          </li>
          {/* <li
            className='p-1 sm:p-2 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme("jsSelfTest")}
          >
            Selbst Test
          </li> */}
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <DOMText />}
        {theme === "npm" && <NPM />}
        {theme === "node" && <NodeInstaller />}
        {theme === "vs-code" && <VSCode />}
        {theme === "vite" && <Vite />}
        {theme === "electron" && <Electron />}
        {theme === "querry" && <Querries />}
        {theme === "variables" && <Variable />}
        {theme === "ifelse" && <IfElse />}
        {theme === "array" && <Array />}
        {theme === "loop" && <Loop />}
        {theme === "function" && <Function />}
        {theme === "datatype" && <Datentypen />}
        {theme === "objects" && <Objects />}
        {theme === "objectsAdv" && <ObjectsAdv />}
        {theme === "domexercises" && <DomExercises />}
        {theme === "jsSelfTest" && <SelfTest />}
      </section>
    </>
  );
};
