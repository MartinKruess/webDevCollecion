import { useContext } from "react";
import { ReactIntro } from "../react/reactIntro";
import { ThemeContext } from "../global/loadTheme";
import { ReactStart } from "../react/reactStart";

export const React = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className='bg-slate-800 pb-5 px-8 sticky z-10 top-19'>
        <ul className='w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto'>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("reactBasics")}
          >
            React im Allgemeinen
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("comps")}
          >
            Compoments
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("props")}
          >
            Props
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("hooks")}
          >
            React Hooks
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("useState")}
          >
            useState/ref
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("useContext")}
          >
            useContext
          </li>
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <ReactIntro />}
        {theme === "reactBasics" && <ReactStart />}
        {/* {theme === "variables" && <Variables />} */}
      </section>
    </>
  );
};
