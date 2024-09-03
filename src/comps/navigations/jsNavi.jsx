import { Link } from "react-router-dom";

export const JSNavi = () => {
  return (
    <nav className="bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8">
      <ul className="w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto">
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="node">Node</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="npm">NPM</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="json">JSON</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="console">Stylen in der Console</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="variables">Variables</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="datatype">Datentypen</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="ifelse">If/Else</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="array">Arrays</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="loop">Loops</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="sort">Sortieralgorithmen</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="function">Functions</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="objects">Objects</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="objectsAdv">
            Objects <span className="text-sm">(Adv)</span>
          </Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="classes">Classes</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800">
          <Link to="jsexercises">Übungen</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800">
          <Link to="jsSelfTest">Selbst Test</Link>
        </li>
      </ul>
    </nav>
  );
};
