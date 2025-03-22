import { useContext } from "react";
import { ThemeContext } from "../global/loadTheme";

import { GHPages } from "../deployment/ghPages";
import { Netlify } from "../deployment/netlify";
import { TippsTricks } from "../deployment/tipps&tricks";
import { Route, Routes } from "react-router-dom";

export const Deployment = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route path="/middelware" element={<GHPages />} />
          <Route path="/middelware" element={<Netlify />} />
          <Route path="/tipps&tricks" element={<TippsTricks />} />
        </Routes>
      </section>
    </>
  );
};
