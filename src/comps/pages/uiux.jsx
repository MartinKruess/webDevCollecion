import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";
import { Frameworks } from "../ui-basics/frameworks";

export const UIUX = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-slate-800 w-screen pb-5 px-8 sticky z-10 top-19">
        <ul className="text-2xl flex flex-wrap gap-5 p-2">
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("variables")}
          >
            Grundstruktur
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("tags")}
          >
            Tags
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("vscode")}
          >
            VS-Code
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("exerciseAL")}
          >
            inline-block
          </li>
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
      <section className="w-10/12 m-auto mt-8">
        {/* {!theme && <JSText />} */}
        {/* {theme === "node" && <NodeInstaller />} */}
        {/* {theme === "variables" && <Variables />} */}
        {/* {theme === "ifelse" && <IfElse />} */}
        {/* {theme === "ternary" && <Ternary />} */}
        {/* {theme === "array" && <Array />} */}
        {/* {theme === "loop" && <Loop />} */}
        {/* {theme === "exerciseAL" && <ArrayLoopExercise />} */}
        {theme === "frameworks" && <Frameworks />}
      </section>
    </>
  );
};
