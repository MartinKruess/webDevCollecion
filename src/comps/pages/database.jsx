import { useContext, useEffect } from "react";
import { DatabaseInfo } from "../database/databaseInfo";
import { InstallMongo } from "../database/installMongo";
import { ThemeContext } from "../global/loadTheme";
import { MongoSchemas } from "../database/mongoSchemas";
import { MongoDB } from "../database/mongoDB";
import { MongoRefs } from "../database/assets/mongorefs";

export const Database = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8'>
        <ul className='w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("installMongo")}
          >
            MongoDB (install)
          </li>
          {/* <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("express")}
          >
            Mongo Compass
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("api")}
          >
            MongoDB
          </li>*/}
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("atlas")}
          >
            MongoDB Atlas (Mongoose)
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("schemas")}
          >
            Schemas
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg hover:bg-red-800'
            onClick={() => setTheme("references")}
          >
            Schema References
          </li>
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <DatabaseInfo />}
        {theme === "installMongo" && <InstallMongo />}
        {theme === "schemas" && <MongoSchemas />}
        {theme === "references" && <MongoRefs />}
        {theme === "atlas" && <MongoDB />}
      </section>
    </>
  );
};
