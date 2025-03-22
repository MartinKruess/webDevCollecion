import { Route, Routes } from "react-router-dom";

import { Querries } from "../dom/querys";
import { Vite } from "../programmingBasic/vite";
import { Electron } from "../programmingBasic/electron";
import { StartDom } from "../dom/startDom";
import { DomExercises } from "../dom/domExercises";
import { Async } from "../dom/async";
import { AsyncAdv } from "../dom/asyncAdvanced";
import { EventHandler } from "../dom/event";

export const DOM = () => {
  return (
    <>
      <section className="px-8">
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
