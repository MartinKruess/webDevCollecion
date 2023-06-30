import { NavLink } from "react-router-dom";

export const Navi = () => {
  return(
    <nav className="bg-slate-700 w-screen flex justify-around space-x-10 text-2xl p-5  sticky top-0">
      <NavLink>GIT</NavLink>
      <NavLink>HTML</NavLink>
      <NavLink>CSS</NavLink>
      <NavLink>JAVASCRIPT</NavLink>
      <NavLink>REACT</NavLink>
      <NavLink>DATABASE</NavLink>
      <NavLink>NODE EXPRESS</NavLink>
    </nav>
  )
}