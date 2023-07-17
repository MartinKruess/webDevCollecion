export const UIUX = () => {
  return(
    <>
      <nav className="bg-slate-800 w-screen pb-5 px-8 sticky z-10 top-19">
        <ul className="text-2xl flex flex-wrap gap-5 p-2">
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            Grundstruktur
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("tags")}>
            Tags
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("formular")}>
            Formulare
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("table")}>
            Tabelle
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("inline")}>
            inline-block
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("flex")}>
            Flex
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("loop")}>
            Grid
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("animation")}>
            Animation
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("scss")}>
            SCSS/SASS
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("frameworks")}>
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
  )
}