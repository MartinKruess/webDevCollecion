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
import { BackendInfo } from "../backend/backendInfo";
import { Express } from "../backend/express";
import { NodeBasics } from "../backend/nodeBasics";
import { API } from "../backend/api";

export const Node = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-5 px-8 sticky z-10 top-19'>
        <ul className='w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto'>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("node")}
          >
            Node
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("express")}
          >
            Express
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("api")}
          >
            API
          </li>
          {/* <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("hooks")}
          >
            GraphQL
          </li> */}
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <BackendInfo />}
        {theme === "node" && <NodeBasics />}
        {theme === "express" && <Express />}
        {theme === "api" && <API />}
      </section>
    </>
  );
};
