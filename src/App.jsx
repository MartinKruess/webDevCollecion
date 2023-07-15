import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navi } from "./comps/reusables/navi";
import { Landingpage } from "./comps/pages/landingpage";
import { Git } from "./comps/pages/git";
import { PB } from "./comps/pages/javascript";
import { UIUX } from "./comps/pages/uiux";

function App() {
  return (
    <>
      <Navi />
      <main className="bg-slate-900 text-slate-300 w-screen">
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/Git" element={<Git />} />
          <Route exact path="/html&css" element={<UIUX />} />
          <Route exact path="/programming-basic" element={<PB />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
