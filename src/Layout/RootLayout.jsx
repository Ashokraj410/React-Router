import React from 'react'
import { Navbar } from '../assets/Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
