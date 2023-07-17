import { NavLink } from "react-router-dom";

export const Navi = () => {
  return(
    <nav className="bg-slate-800 flex justify-around space-x-10 text-2xl p-5 sticky top-0 z-20">
      <NavLink to="/git">GIT</NavLink>
      <NavLink to="/html&css">HTML & CSS</NavLink>
      <NavLink to="/programming-basic">JAVASCRIPT (basic)</NavLink>
      <NavLink to="/react">REACT</NavLink>
      <NavLink to="/databases">DATABASE</NavLink>
      <NavLink to="/nodeJs">NODE EXPRESS</NavLink>
    </nav>
  )
}