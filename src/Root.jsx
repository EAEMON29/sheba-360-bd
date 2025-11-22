import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
