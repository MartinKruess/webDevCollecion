import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";

import { DOMText } from "../dom/domText";
import { Querries } from "../dom/querys";

import { Vite } from "../programmingBasic/vite";

import { SelfTest } from "../programmingBasic/jsSelfText";
import { Electron } from "../programmingBasic/electron";
import { StartDom } from "../dom/startDom";
import { DomExercises } from "../dom/domExercises";
import { Async } from "../dom/async";
import { AsyncAdv } from "../dom/asyncAdvanced";

export const DOM = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-5 sm:pb-4 px-8 sticky z-10 top-22 sm:top-8 text-xs sm:text-xs md:text-sm '>
        <ul className='w-full text-sm sm:text-lg md:text-xl flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800'
            onClick={() => setTheme("vite")}
          >
            Vite
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800'
            onClick={() => setTheme("electron")}
          >
            Electron
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("querry")}
          >
            Selectoren
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("startDom")}
          >
            Text Erzeugen
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("event")}
          >
            Events
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("async")}
          >
            Async
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme("asyncadv")}
          >
            Asynchrones Arbeiten (Advanced)
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme("domexercises")}
          >
            Übungen
          </li>
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <DOMText />}
        {theme === "vite" && <Vite />}
        {theme === "electron" && <Electron />}
        {theme === "querry" && <Querries />}
        {theme === "startDom" && <StartDom />}
        {theme === "async" && <Async />}
        {theme === "asyncadv" && <AsyncAdv />}
        {theme === "jsexercises" && <JSExercises />}
        {theme === "domexercises" && <DomExercises />}
        {theme === "jsSelfTest" && <SelfTest />}
      </section>
    </>
  );
};
