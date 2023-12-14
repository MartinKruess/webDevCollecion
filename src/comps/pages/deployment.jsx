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
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-11'>
        <ul className='w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto'>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("ghPages")}
          >
            Github Pages
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("netlify")}
          >
            Netlify
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("vercel")}
          >
            Vercel
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("cyclic")}
          >
            Cyclic
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
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
