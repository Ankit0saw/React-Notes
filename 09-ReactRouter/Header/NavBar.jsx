import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className='text-2xl'>
          <h2>Logo</h2>
        </div>
        <div>
          <ul className='flex space-x-4 underline'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar