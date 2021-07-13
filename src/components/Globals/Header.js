import React from "react"
// import logo from "../../images/TW.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Header
