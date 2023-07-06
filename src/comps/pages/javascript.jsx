import { useState } from "react"
import { IfElse } from "../ifelse"
import { Array } from "../array"
import { Ternary } from "../ternary"

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
    <section>
      <nav>
        <ul className="text-2xl flex flex-wrap gap-5 p-2">
          <li className="p-4 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("variables")}>
            Variables
          </li>
          <li className="p-4 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ifelse")}>
            If/Else
          </li>
          <li className="p-4 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("ternary")}>
            Ternary
          </li>
          <li className="p-4 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("array")}>
            Array
          </li>
          <li className="p-4 border rounded-lg hover:bg-red-800" onClick={() => loadTheme("loop")}>
            Loops
          </li>
        </ul>
      </nav>
      {/* {theme === "variables" && <Variables />} */}
      {theme === "ifelse" && <IfElse />}
      {theme === "ternary" && <Ternary />}
      {theme === "array" && <Array />}
      {/* {theme === "loop" && <Loop />} */}
    </section>
  )
}