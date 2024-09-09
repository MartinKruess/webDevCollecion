import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";

import { DOMText } from "../dom/domText";
import { Querries } from "../dom/querys";
import { Vite } from "../programmingBasic/vite";
import { Electron } from "../programmingBasic/electron";
import { StartDom } from "../dom/startDom";
import { DomExercises } from "../dom/domExercises";
import { Async } from "../dom/async";
import { AsyncAdv } from "../dom/asyncAdvanced";
import { SpaNavi } from "../navigations/spaNavi";
import { EventHandler } from "../dom/event";

export const DOM = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <SpaNavi />
      <section className="w-10/12 m-auto">
        <Routes>
          <Route path="vite" element={<Vite />} />
          <Route path="electron" element={<Electron />} />
          <Route path="querry" element={<Querries />} />
          <Route path="startDom" element={<StartDom />} />
          <Route path="event" element={<EventHandler />} />
          <Route path="async" element={<Async />} />
          <Route path="asyncadv" element={<AsyncAdv />} />
          <Route path="domexercises" element={<DomExercises />} />
        </Routes>
      </section>
    </>
  );
};
