// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../global/loadTheme";
// import { useContext } from "react";

// import { SubNavi } from "./subNavi";
// import {
//   deploymentLinks,
//   fullstackLinks,
//   jsLinks,
//   nodeLinks,
//   reactLinks,
//   spaLinks,
//   uibLinks,
// } from "./navidata";

// export const Navi = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <nav className="bg-slate-800 flex items-start py-4 fixed top-0 bottom-0 z-20 flex-col px-3 gap-1 mainNavi">
//       <NavLink to="/" className="self-center">
//         <img
//           className="w-16"
//           src="/images/webDev-logo.png"
//           alt="webDev collection Logo"
//         />
//       </NavLink>
//       <NavLink
//         to="/uib"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("uib")}
//       >
//         UI und Settings
//       </NavLink>
//       {theme === "uib" && <SubNavi navLinks={uibLinks} />}
//       <NavLink
//         to="/js"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("js")}
//       >
//         JAVASCRIPT
//       </NavLink>
//       {theme === "js" && <SubNavi navLinks={jsLinks} />}
//       <NavLink
//         to="/dom"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("dom")}
//       >
//         SPA
//       </NavLink>
//       {theme === "dom" && <SubNavi navLinks={spaLinks} />}
//       <NavLink
//         to="/react"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("react")}
//       >
//         REACT
//       </NavLink>
//       {theme === "react" && <SubNavi navLinks={reactLinks} />}
//       <NavLink
//         to="/backend"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("node")}
//       >
//         NODE-EXPRESS
//       </NavLink>
//       {theme === "node" && <SubNavi navLinks={nodeLinks} />}
//       <NavLink
//         to="/databases"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("db")}
//       >
//         DATABASE
//       </NavLink>
//       {/* <SubNavi navLinks={dbLinks} /> */}
//       <NavLink
//         to="/fullstack"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("fullstack")}
//       >
//         FULLSTACK
//       </NavLink>
//       {theme === "fullstack" && <SubNavi navLinks={fullstackLinks} />}
//       <NavLink
//         to="/deployment"
//         className="w-full border-b bg-neutral-800"
//         onClick={() => setTheme("deploy")}
//       >
//         DEPLOYMENT
//       </NavLink>
//       {theme === "deploy" && <SubNavi navLinks={deploymentLinks} />}
//     </nav>
//   );
// };

import { NavLink } from "react-router-dom";
import { ThemeContext } from "../global/loadTheme";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SubNavi } from "./subNavi";
import {
  dbLinks,
  deploymentLinks,
  fullstackLinks,
  jsLinks,
  nodeLinks,
  reactLinks,
  spaLinks,
  uibLinks,
} from "./navidata";

const menuItems = [
  { theme: "uib", path: "/uib", label: "UI und Settings", links: uibLinks },
  { theme: "js", path: "/js", label: "JAVASCRIPT", links: jsLinks },
  { theme: "dom", path: "/dom", label: "SPA", links: spaLinks },
  { theme: "react", path: "/react", label: "REACT", links: reactLinks },
  { theme: "node", path: "/backend", label: "NODE-EXPRESS", links: nodeLinks },
  { theme: "db", path: "/databases", label: "DATABASE 🚧", links: dbLinks },
  {
    theme: "fullstack",
    path: "/fullstack",
    label: "FULLSTACK 🚧",
    links: fullstackLinks,
  },
  {
    theme: "deploy",
    path: "/deployment",
    label: "DEPLOYMENT 🚧",
    links: deploymentLinks,
  },
];

export const Navi = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-slate-800 flex items-start py-4 fixed top-0 bottom-0 z-20 flex-col px-3 gap-1 mainNavi">
      <NavLink to="/" className="self-center">
        <img
          className="w-16"
          src="/images/webDev-logo-new.png"
          alt="webDev collection Logo"
        />
      </NavLink>

      {menuItems.map(({ theme: menuTheme, path, label, links }) => (
        <div key={menuTheme} className="w-full">
          <NavLink
            to={path}
            className="w-full border-b bg-neutral-800 block p-2"
            onClick={() => setTheme(menuTheme)}
          >
            {label}
          </NavLink>

          {/* Animiertes Untermenü */}
          <AnimatePresence>
            {theme === menuTheme && links.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <SubNavi navLinks={links} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
};
