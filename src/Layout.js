import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Components/navbar/Footer/Footer';
import NavbarMain from './Components/navbar/Navbar';
export default function Layout() {
  return (
    <div>
       <NavbarMain/>
       <Outlet/>
       <Footer/>
    </div>
  )
}
