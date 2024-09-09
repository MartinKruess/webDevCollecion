import { Link } from "react-router-dom";

export const SpaNavi = () => {
  return (
    <nav className="bg-slate-800 pb-5 sm:pb-4 px-8 sticky z-10 top-22 sm:top-8 text-xs sm:text-xs md:text-sm">
      <ul className="w-full text-sm sm:text-lg md:text-xl flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto">
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="vite">Vite</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800">
          <Link to="electron">Electron</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="querry">Selectoren</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="startDom">Text Erzeugen</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="event">Events</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="async">Async</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800">
          <Link to="asyncadv">Asynchrones Arbeiten (Advanced)</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800">
          <Link to="domexercises">Übungen</Link>
        </li>
      </ul>
    </nav>
  );
};
