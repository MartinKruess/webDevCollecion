import { Link } from "react-router-dom";

export const UibNavi = () => {
  return (
    <nav className="bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8">
      <ul className="w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto">
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="vs-code">VS-Code (Allgemein)</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="console">Stylen in der Console</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="grid">Grid</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="animation">Animation</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800">
          <Link to="sass">SCSS/SASS</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800">
          <Link to="frameworks">CSS-Frameworks</Link>
        </li>
      </ul>
    </nav>
  );
};
