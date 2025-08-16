// if this is a new vite project, then consider this FullPage2.jsx (from this folder) as App.jsx of new project

import { Link, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"

function FullPage2() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>

      <h2>React router ka example</h2>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}
export default FullPage2