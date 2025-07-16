import React from 'react'
import { NavLink, Routes, Route } from 'react-router'
import Home from './page/Home.jsx'
import Notfound from './page/Notfound.jsx'
import Api from './page/Api.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App