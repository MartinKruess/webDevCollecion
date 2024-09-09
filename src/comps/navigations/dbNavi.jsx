import { Link } from "react-router-dom";

export const ReactNavi = () => {
  return (
    <nav className="bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8">
      <ul className="w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto">
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="reactBasics">JSX</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="jsxAdv">JSX Advanced</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="components">Components & Props</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="hooks">Hooks & Refs</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="routerV5">React Router v.5</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="routerV6">React Router v.6</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="routerBonus">React Router Additionals</Link>
        </li>
        <li className="p-1 sm:py-1 border rounded-lg hover:bg-red-800">
          <Link to="context">Global Context</Link>
        </li>
      </ul>
    </nav>
  );
};
