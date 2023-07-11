import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Navi } from './comps/reusables/navi'
import { Landingpage } from './comps/pages/landingpage'
import { BDL } from './comps/pages/bdl'
import { PB } from './comps/pages/javascript'

function App() {

  return (
    <>
      <Navi />
      <main>
        
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/BDL" element={<BDL />} />
          <Route exact path="/pb" element={<PB />} />
        </Routes>
      </main>
    </>
  )
}

export default App
