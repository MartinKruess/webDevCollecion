import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";
import { BackendInfo } from "../backend/backendInfo";
import { Express } from "../backend/express";
import { NodeBasics } from "../backend/nodeBasics";
import { API } from "../backend/api";
import { Security } from "../backend/security";
import { Encrypt } from "../backend/encrypt";
import { Bcrypt } from "../backend/bcrypt";
import { Middleware } from "../backend/middleware";

export const Node = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-11'>
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
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("middleware")}
          >
            Middleware
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("security")}
          >
            Security
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("encrypt")}
          >
            Encrypt
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("bcrypt")}
          >
            Bcrypt
          </li>
          {/* <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("jwt")}
          >
            JWT
          </li> */}
          {/* <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("oath")}
          >
            OAuth
          </li>
          <li
            className='px-3 py-2 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("cookies")}
          >
            Cookies & Sessions
          </li> */}
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <BackendInfo />}
        {theme === "node" && <NodeBasics />}
        {theme === "express" && <Express />}
        {theme === "api" && <API />}
        {theme === "middleware" && <Middleware />}
        {theme === "security" && <Security />}
        {theme === "encrypt" && <Encrypt />}
        {theme === "bcrypt" && <Bcrypt />}
        {/* {theme === "jwt" && <JWT />} */}
      </section>
    </>
  );
};
