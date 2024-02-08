import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">GeneralStore</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-Navlink" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Navlink" to="/about">About Me</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Navlink" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Navlink" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Navlink" to="/signup">Register</NavLink>
      </li>
      
    </ul>
   
  </div>
</nav>
    </>
  )
}

export default NavBar