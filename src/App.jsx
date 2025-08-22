{/* method 1 router*/}
/*
import './App.css'
import { Navbar } from './assets/Components/Navbar/Navbar'
import { Products } from './Pages/Products'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (

    <div>


      
      <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Products' element={<Products/>}/>
    </Routes>
    
    
    </div>
  )
}

export default App   */



import React from 'react'
import './App.css'
import { Products } from './Pages/Products'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { RootLayout } from './Layout/RootLayout'
import { Login } from './assets/Components/Login'
import { ContactLayout } from './Layout/ContactLayout'
import { Info } from './assets/Components/Info'
import { Details } from './assets/Components/Details'
import { NotFound } from './assets/Components/NotFound'
import { UserLayout } from './Layout/UserLayout'
import { Users } from './Pages/Users'

export const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='Home' index  element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<ContactLayout/>}>
            <Route path='info' element={<Info/>}/>
            <Route path='Details' element={<Details/>}/>
        </Route>
        <Route path='Products' element={<Products/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='UserLayout' element={<UserLayout/>}>
            <Route path='Users' element={<Users/>}/>
        </Route>
        </Route>
      
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  )
  }
