import React from "react"
import Home from "./Home"
import Cusine from "./Cusine"
import Searched from "./Searched"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/cuisine/:type" element={<Cusine />} />
    </Routes>
  )
}

export default Pages
