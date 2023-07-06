import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navi } from './comps/reusables/navi'
import { Landingpage } from './comps/pages/landingpage'
import { BDL } from './comps/pages/bdl'
import { PB } from './comps/pages/javascript'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi />
      <main className="w-10/12 m-auto mt-8">
        
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
