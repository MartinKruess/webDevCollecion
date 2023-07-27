export const React = () => {
  return(
    <>
      <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-19">
        <ul className="w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto">
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            Grundstruktur
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("node")}>
            Tags
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            React Hooks
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("exerciseAL")}>
            Callback
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("array")}>
            Async Await
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("loop")}>
            Fetch
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            Globale&Local States
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ifelse")}>
            JWT
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ternary")}>
            Bcrypt
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