import { useState } from "react"
import { IfElse } from "../programmingBasic/ifelse"
import { Array } from "../programmingBasic/array"
import { Ternary } from "../programmingBasic/ternary"
import { JSText } from "../programmingBasic/jsText"
import { Loop } from "../programmingBasic/loop"
import { NodeInstaller } from "../programmingBasic/node"
import { ArrayLoopExercise } from "../programmingBasic/exercisesAL"
import { Function } from "../programmingBasic/function"

export const PB = () => {

  const [theme, setTheme] = useState("")
  console.log(theme)

  const loadTheme = (clickedTheme) => {
    if(clickedTheme === theme){
      setTheme("")
    }else {
      setTheme(clickedTheme)
    }
  }

  return(
    <>
      <nav className="bg-slate-800 w-screen pb-5 px-8 sticky z-10 top-19">
        <ul className="text-2xl flex flex-wrap gap-5 p-2">
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            NPM
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("node")}>
            NodeJS
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            VS-Code
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            Variables
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ifelse")}>
            If/Else
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ternary")}>
            Ternary
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("array")}>
            Array
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("loop")}>
            Loops
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("exerciseAL")}>
            Array/Loop Übungen
          </li>
          <li className="px-3 py-2 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("function")}>
            Functions
          </li>
        </ul>
      </nav>
      <section className="w-10/12 m-auto mt-8">
        {!theme && <JSText />}
        {theme === "node" && <NodeInstaller />}
        {/* {theme === "variables" && <Variables />} */}
        {theme === "ifelse" && <IfElse />}
        {theme === "ternary" && <Ternary />}
        {theme === "array" && <Array />}
        {theme === "loop" && <Loop />}
        {theme === "exerciseAL" && <ArrayLoopExercise />}
        {theme === "function" && <Function />}
      </section>
    </>
  )
}