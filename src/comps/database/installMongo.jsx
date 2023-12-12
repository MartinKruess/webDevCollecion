import { useState } from "react";
import { MongoLinux } from "./assets/mongoLinux";

export const InstallMongo = () => {
  const [os, setOS] = useState(false);

  return (
    <article>
      <h2 className='font-extrabold text-xl'>MondoDB 7.0 installieren</h2>

      <div className='flex gap-8 mt-5 px-20'>
        <button
          onClick={() => setOS(false)}
          className='w-full text-lg font-bold bg-slate-400 text-indigo-800 py-1 rounded-lg'
        >
          Linux
        </button>
        <button
          onClick={() => setOS(true)}
          className='w-full text-lg font-bold bg-slate-400 text-indigo-800 py-1 rounded-lg'
        >
          Windows
        </button>
      </div>
      {!os && <MongoLinux />}

      {os}
    </article>
  );
};
