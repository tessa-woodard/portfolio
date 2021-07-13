import React, { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Globals/Header'
import Sidebar from './Globals/Sidebar'

import './layout.css'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
