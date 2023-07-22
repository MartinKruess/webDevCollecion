import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

export const Deployment = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
        <nav className="bg-slate-800 pb-5 px-8 sticky z-10 top-19">
        <ul className="w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto">
        <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("ghPages")}
          >
            Github Pages
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("netlify")}
          >
            Netlify
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("vercel")}
          >
            Vercel
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("cyclic")}
          >
            Cyclic
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("firebase")}
          >
            Firebase
          </li>
          <li
            className="px-3 py-2 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("tipps&zticks")}
          >
            Tipps&Tricks
          </li>
        </ul>
      </nav>
    <section className="w-10/12 m-auto">
    {!theme && <JSText />}
        {theme === "npm" && <NPM />}
        {theme === "ghPages" && <NodeInstaller />}
        {theme === "netlify" && <VSCode />}
        {theme === "vercel" && <Variable />}
        {theme === "cyclic" && <IfElse />}
        {theme === "firebase" && <Ternary />}
        {theme === "tipps&tricks" && <Array />}
    </section>
    </>
  )
}