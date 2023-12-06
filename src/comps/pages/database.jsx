import { DatabaseInfo } from "../database/databaseInfo";

export const Database = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-5 px-8 sticky z-10 top-19'>
        <ul className='w-11/12 text-2xl flex flex-wrap gap-5 p-2 m-auto'>
          {/* <li
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
            onClick={() => setTheme("security")}
          >
            Security
          </li> */}
        </ul>
      </nav>
      <section className='w-10/12 m-auto'>
        {!theme && <DatabaseInfo />}
        {/* {theme === "node" && <NodeBasics />} */}
      </section>
    </>
  );
};
