import { NavLink } from "react-router-dom";

export const NavLinkGen = ({ path, text, color = "bg-blue-900" }) => {
  return (
    <NavLink
      to={path}
      className={`${color}  hover:bg-red-700 hover:pl-4 block transition-all`}
    >
      {text}
    </NavLink>
  );
};
