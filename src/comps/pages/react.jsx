import { useContext, useEffect } from "react";
import { ReactEinleitung } from "../react/reactEinleitung";
import { ReactIntro } from "../react/reactIntro";
import { ThemeContext } from "../global/loadTheme";
import { JSXAdvanced } from "../react/jsxAdvanced";
import { Components } from "../react/components";
import { Hooks } from "../react/hooks";
import { Router } from "../react/router";
import { RouterV6 } from "../react/routerV6";
import { Context } from "../react/context";
import { RouterBonus } from "../react/routerBonus";

export const React = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className="bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8">
        <ul className="w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto">
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("reactBasics")}
          >
            JSX
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("jsxAdv")}
          >
            JSX Advanced
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("components")}
          >
            Components & Props
          </li>
          {/* <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("rEvents")}
          >
            Events
          </li> */}
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("hooks")}
          >
            Hooks & Refs
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("routerV5")}
          >
            React Router v.5
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("routerV6")}
          >
            React Router v.6
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("routerBonus")}
          >
            React Router Additionals
          </li>
          <li
            className="p-1 sm:py-1 border rounded-lg hover:bg-red-800"
            onClick={() => setTheme("context")}
          >
            Global Context
          </li>
          {/* <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("redux")}
          >
            Redux
          </li> */}
        </ul>
      </nav>
      <section className="w-10/12 m-auto">
        {!theme && <ReactEinleitung />}
        {theme === "reactBasics" && <ReactIntro />}
        {theme === "jsxAdv" && <JSXAdvanced />}
        {theme === "components" && <Components />}
        {theme === "hooks" && <Hooks />}
        {theme === "routerV5" && <Router />}
        {theme === "routerV6" && <RouterV6 />}
        {theme === "routerBonus" && <RouterBonus />}
        {theme === "context" && <Context />}
      </section>
    </>
  );
};
