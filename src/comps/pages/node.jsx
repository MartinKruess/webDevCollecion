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
import { Validation } from "../backend/validation";
import { Cookies } from "../backend/cookies";

export const Node = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8'>
        <ul className='w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("node")}
          >
            Node
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("express")}
          >
            Express
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("api")}
          >
            API
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("middleware")}
          >
            Middleware
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("validation")}
          >
            Validation
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("security")}
          >
            Security
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("encrypt")}
          >
            Encrypt
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("bcrypt")}
          >
            Bcrypt
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("cookies")}
          >
            Cookies & Sessions
          </li>
          {/* <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("jwt")}
          >
            JWT
          </li> */}
          {/* <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("oath")}
          >
            OAuth
          </li>
           */}
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
        {theme === "validation" && <Validation />}
        {theme === "cookies" && <Cookies />}
        {/* {theme === "jwt" && <JWT />} */}
      </section>
    </>
  );
};
