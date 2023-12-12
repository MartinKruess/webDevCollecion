import { useContext, useEffect } from "react";
import { DatabaseInfo } from "../database/databaseInfo";
import { InstallMongo } from "../database/installMongo";
import { ThemeContext } from "../global/loadTheme";

export const Database = () => {
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
            onClick={() => setTheme("installMongo")}
          >
            MongoDB (install)
          </li>
          {/* <li
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
            onClick={() => setTheme("security")}
          >
            Security
          </li> */}
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <DatabaseInfo />}
        {theme === "installMongo" && <InstallMongo />}
      </section>
    </>
  );
};
