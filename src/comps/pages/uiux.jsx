import { useState } from "react";
import { loadTheme } from "../global/loadTheme";

export const UIUX = () => {
  const [theme, setTheme] = useState("");

  return (
    <>
      <nav className="bg-slate-800 w-screen pb-5 px-8 sticky z-10 top-19">
        <ul className="text-2xl flex flex-wrap gap-5 p-2">
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("variables")}
          >
            Grundstruktur
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("node")}
          >
            Tags
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("variables")}
          >
            VS-Code
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("exerciseAL")}
          >
            inline-block
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("array")}
          >
            Flex
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("loop")}
          >
            Grid
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("variables")}
          >
            Animation
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("ifelse")}
          >
            SCSS/SASS
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => loadTheme("frameworks", theme)}
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
        {/* {theme === "function" && <Function />} */}
      </section>
    </>
  );
};
