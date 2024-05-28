import { useContext, useEffect } from 'react';
import { ThemeContext } from '../global/loadTheme';

import { VSCode } from '../ui-basics/vsCode';
import { Console } from '../ui-basics/console';
import { Grid } from '../ui-basics/grid';
import { Animation } from '../ui-basics/animation';
import { SASS } from '../ui-basics/sass';
import { Frameworks } from '../ui-basics/frameworks';

export const UIUX = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme('');
  }, []);

  return (
    <>
      <nav className='bg-slate-800 pb-3 px-8 pt-2 sticky z-10 top-24 sm:top-8'>
        <ul className='w-full text-xs sm:text-sm lg:text-base lg:leading-5 flex flex-wrap gap-2 sm:gap-3 pt-2 m-auto'>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800'
            onClick={() => setTheme('vs-code')}
          >
            VS-Code (Allgemein)
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-green-950 hover:bg-red-800'
            onClick={() => setTheme('console')}
          >
            Stylen in der Console
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme('grid')}
          >
            Grid
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-blue-950 hover:bg-red-800'
            onClick={() => setTheme('animation')}
          >
            Animation
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme('sass')}
          >
            SCSS/SASS
          </li>
          <li
            className='p-1 sm:py-1 border rounded-lg bg-red-950 hover:bg-red-800'
            onClick={() => setTheme('frameworks')}
          >
            CSS-Frameworks
          </li>
        </ul>
      </nav>
      <section className='w-full md:w-10/12 m-auto'>
        {theme === 'vs-code' && <VSCode />}
        {theme === 'console' && <Console />}
        {theme === 'grid' && <Grid />}
        {theme === 'animation' && <Animation />}
        {theme === 'sass' && <SASS />}
        {theme === 'frameworks' && <Frameworks />}
      </section>
    </>
  );
};
