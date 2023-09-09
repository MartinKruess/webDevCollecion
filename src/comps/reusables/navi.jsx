import { NavLink } from "react-router-dom";

export const Navi = () => {
  return (
    <nav className="bg-slate-800 flex justify-center gap-2 sm-gap-5 text-sm sm:text-lg md:text-lg lg:text-xl p-5 sticky top-0 z-20">
      <span className="flex items-center flex-col sm:flex-row sm:justify-center space-x-4 sm:space-x-4 md:space-x-8">
        <NavLink to=""></NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/programming-basic">JAVASCRIPT</NavLink>
        <NavLink to="/react">REACT</NavLink>
      </span>
      <span className="flex items-center flex-col sm:flex-row sm:justify-center space-x-4 sm:space-x-4 md:space-x-8">
        <NavLink to="/databases">DATABASE</NavLink>
        <NavLink to="/nodeJs">NODE EXPRESS</NavLink>
        <NavLink to="/deployment">DEPLOYMENT</NavLink>
      </span>
    </nav>
  );
};
