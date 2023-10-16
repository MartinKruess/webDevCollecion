import { useContext, useEffect } from "react";
import { ReactIntro } from "../react/reactIntro";
import { ThemeContext } from "../global/loadTheme";
import { JSXAdvanced } from "../react/jsxAdvanced";
import { Components } from "../react/components";

export const React = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-5 px-8 sticky z-10 top-19'>
        <ul className='w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto'>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("reactBasics")}
          >
            JSX
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("jsxAdv")}
          >
            JSX Advanced
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("components")}
          >
            Components & Props
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("rEvents")}
          >
            Events
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("hooks")}
          >
            Hooks & Refs
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("router")}
          >
            React Router
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("context")}
          >
            Reducer & Context
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("redux")}
          >
            Redux
          </li>
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <ReactIntro />}
        {theme === "reactBasics" && <ReactIntro />}
        {theme === "jsxAdv" && <JSXAdvanced />}
        {theme === "components" && <Components />}
      </section>
    </>
  );
};
