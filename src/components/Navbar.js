import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light myNavbar">
        <div className="container-fluid">
          <NavLink
            exact className="navbar-brand" to="/">LOGO</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
            {/* <span class="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/feature">FEATURES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/review">REVIEWS</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="demo-button">
          <a href="/">BOOK A DEMO</a>
        </div>
      </nav>
    </>
  )
}
export default Navbar