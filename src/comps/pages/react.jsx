import { Route, Routes } from "react-router-dom";

import { ReactEinleitung } from "../react/reactEinleitung";
import { ReactIntro } from "../react/reactIntro";
import { JSXAdvanced } from "../react/jsxAdvanced";
import { Components } from "../react/components";
import { Hooks } from "../react/hooks";
import { Router } from "../react/router";
import { RouterV6 } from "../react/routerV6";
import { Context } from "../react/context";
import { RouterBonus } from "../react/routerBonus";

export const React = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route path="/" element={<ReactEinleitung />} />
          <Route path="reactBasics" element={<ReactIntro />} />
          <Route path="jsxAdv" element={<JSXAdvanced />} />
          <Route path="components" element={<Components />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="routerV5" element={<Router />} />
          <Route path="routerV6" element={<RouterV6 />} />
          <Route path="routerBonus" element={<RouterBonus />} />
          <Route path="context" element={<Context />} />
        </Routes>
      </section>
    </>
  );
};
