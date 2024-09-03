import { NavLink } from "react-router-dom";

export const Navi = () => {
  return (
    <nav className="bg-slate-800 flex items-center py-2 sticky top-0 z-20 text-xs md:text-sm  sm:justify-between flex-col px-16 sm:flex-row">
      <NavLink to=""></NavLink>
      <NavLink to="/uib">UIB</NavLink>
      <NavLink to="/programming-basic">JAVASCRIPT</NavLink>
      <NavLink to="/dom">SPA</NavLink>
      <NavLink to="/react">REACT</NavLink>
      <NavLink to="/backend">NODE-EXPRESS</NavLink>
      <NavLink to="/databases">DATABASE</NavLink>
      <NavLink to="/fullstack">FULLSTACK</NavLink>
      <NavLink to="/deployment">DEPLOYMENT</NavLink>
    </nav>
  );
};
