import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navi } from "./comps/reusables/navi";
import { Landingpage } from "./comps/pages/landingpage";
import { Git } from "./comps/pages/git";
import { PB } from "./comps/pages/javascript";
import { UIUX } from "./comps/pages/uiux";
import { Deployment } from "./comps/pages/deployment";

export const highlights = {
errorCode: "text-red-400",
program: "text-green-300",
file: "text-orange-400",
directory: "text-yellow-200",
code: "text-blue-500",
}

function App() {
  return (
    <>
      <Navi />
      <main className="bg-slate-900 text-slate-300">
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/Git" element={<Git />} />
          <Route exact path="/html&css" element={<UIUX />} />
          <Route exact path="/programming-basic" element={<PB />} />
          <Route exact path="/deployment" element={<Deployment />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
