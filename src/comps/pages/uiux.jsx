import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";
import { Routes, Route } from "react-router-dom";

import { VSCode } from "../ui-basics/vsCode";
import { Grid } from "../ui-basics/grid";
import { Animation } from "../ui-basics/animation";
import { SASS } from "../ui-basics/sass";
import { Frameworks } from "../ui-basics/frameworks";
import { UibNavi } from "../navigations/uibNavi";
import { Console } from "../programmingBasic/console";

export const UIUX = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <UibNavi />
      <section className="w-full md:w-10/12 m-auto">
        <Routes>
          <Route exact path="vs-code" element={<VSCode />} />
          <Route exact path="console" element={<Console />} />
          <Route path="grid" element={<Grid />} />
          <Route path="animation" element={<Animation />} />
          <Route path="sass" element={<SASS />} />
          <Route path="frameworks" element={<Frameworks />} />
        </Routes>
      </section>
    </>
  );
};
