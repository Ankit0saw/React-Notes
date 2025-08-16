// treat this is as the app.jsx file

import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavBar from './NavBar'

const FullPage3 = () => {
  return (
    <div>
        <div className="p-5 bg-sky-300 text-black h-[50px] flex items-center justify-between">
            <NavBar />
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </div>
        
    </div>
  )
}

export default FullPage3