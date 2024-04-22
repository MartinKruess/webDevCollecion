import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";
import { FullstackApp } from "../fullstack/fullstackApp";
import { FullstackInfo } from "../fullstack/fullstackInfo";
import { ErrorHandling } from "../fullstack/errorHandling";

export const Fullstack = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8'>
        <ul className='w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-green-900 hover:bg-red-800'
            onClick={() => setTheme("full")}
          >
            Preview (Fullstack)
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme("fullexercises")}
          >
            Der letzte Schliff (Übungen)
          </li>
        </ul>
      </nav>
      <section className='w-11/12 m-auto fullstackSection'>
        {!theme && <FullstackInfo />}
        {theme === "full" && <FullstackApp />}
        {theme === "fullexercises" && <ErrorHandling />}
      </section>
    </>
  );
};
