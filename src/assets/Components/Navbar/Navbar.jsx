
{/* method 1 


import React from 'react'
import { Link, Router,Routes } from 'react-router-dom'
import { About } from '../../../Pages/About'
import { Home } from '../../../Pages/Home'

export const Navbar = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <h2>RAJ</h2>
        </div>

        <ul>
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Products"><li>Product</li></Link>
        </ul>
        <button>Login</button>
    </div>
  )
}   
  */}




/*method 2*/

import {NavLink, useNavigate} from 'react-router-dom'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='container'>
        <div className='logo'>
            <h2>RAJ</h2>
        </div>

        <ul>
            <NavLink to="/Home"><li>Home</li></NavLink>
            <NavLink to="/About"><li>About</li></NavLink>
            <NavLink to="/Contact"><li>Contact</li></NavLink>
            <NavLink to="/Products"><li>Product</li></NavLink>
            <NavLink to="/Users"><li>Users</li></NavLink>
        </ul>
        {/* do not back navigation use--->{replace:true}*/}

        <button onClick={()=>navigate('/Login',{replace:true})}>Login</button>
    </div>
  )
}   

