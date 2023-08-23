import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

import { Flexbox } from "../ui-basics/flex";
import { Grid } from "../ui-basics/grid";
import { Animation } from "../ui-basics/animation";
import { SASS } from "../ui-basics/sass";
import { Frameworks } from "../ui-basics/frameworks";

export const UIUX = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-19">
        <ul className="w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto">
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("flex")}
          >
            Flex
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("grid")}
          >
            Grid
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("animation")}
          >
            Animation
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("sass")}
          >
            SCSS/SASS
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("frameworks")}
          >
            CSS-Frameworks
          </li>
        </ul>
      </nav>
      <section className="w-10/12 m-auto">
        {/* {!theme && <JSText />} */}
        {theme === "flex" && <Flexbox />}
        {theme === "grid" && <Grid />}
        {theme === "animation" && <Animation />}
        {theme === "sass" && <SASS />}
        {theme === "frameworks" && <Frameworks />}
      </section>
    </>
  );
};
