import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navi } from "./comps/navigations/navi";
import { Landingpage } from "./comps/pages/landingpage";
import { UIUX } from "./comps/pages/uiux";
import { PB } from "./comps/pages/javascript";
import { Deployment } from "./comps/pages/deployment";
import { DOM } from "./comps/pages/dom";
import { React } from "./comps/pages/react";
import { Node } from "./comps/pages/node";
import { Database } from "./comps/pages/database";
import { Fullstack } from "./comps/pages/fullstack";

export const highlights = {
  errorCode: "text-red-400",
  program: "text-green-300",
  file: "text-orange-400",
  directory: "text-yellow-200",
  code: "text-blue-500",
  blinc: "blinc",
};

function App() {
  return (
    <>
      <Navi />
      <main className="bg-slate-900 text-slate-300 min-h-screen">
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/uib/*" element={<UIUX />} />
          <Route exact path="/programming-basic/*" element={<PB />} />
          <Route exact path="/dom/*" element={<DOM />} />
          <Route exact path="/react/*" element={<React />} />
          <Route exact path="/backend/*" element={<Node />} />
          <Route exact path="/databases/*" element={<Database />} />
          <Route exact path="/fullstack/*" element={<Fullstack />} />
          <Route exact path="/deployment/*" element={<Deployment />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
