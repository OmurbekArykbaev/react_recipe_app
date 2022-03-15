import React from "react"
import Home from "./Home"
import Cusine from "./Cusine"
import Searched from "./Searched"
import Recipe from "./Recipe"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
