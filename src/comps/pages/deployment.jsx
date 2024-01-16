import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

import { GHPages } from "../deployment/ghPages";
import { Netlify } from "../deployment/netlify";
import { Vercel } from "../deployment/vercel";
import { Cyclic } from "../deployment/cyclic";
import { TippsTricks } from "../deployment/tipps&tricks";

export const Deployment = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8'>
        <ul className='w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("ghPages")}
          >
            Github Pages
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("netlify")}
          >
            Netlify
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("vercel")}
          >
            Vercel
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("cyclic")}
          >
            Cyclic
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("tipps&tricks")}
          >
            Tipps&Tricks
          </li>
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {/* {!theme && <JSText />} */}
        {theme === "ghPages" && <GHPages />}
        {theme === "netlify" && <Netlify />}
        {theme === "vercel" && <Vercel />}
        {theme === "cyclic" && <Cyclic />}
        {theme === "tipps&tricks" && <TippsTricks />}
      </section>
    </>
  );
};
