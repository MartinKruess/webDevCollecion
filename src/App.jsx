import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navi } from './comps/reusables/navi'
import { Landingpage } from './comps/pages/landingpage'
import { BDL } from './comps/pages/bdl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi />
      <main className="w-10/12 m-auto mt-8 border-2">
        
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/BDL" element={<BDL />} />
        </Routes>
      </main>
    </>
  )
}

export default App
