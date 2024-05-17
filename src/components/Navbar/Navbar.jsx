import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { Hamburger } from "../../utilities";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/pastel-glyph/64/happy-skull--v2.png"
            alt="happy-skull--v2"
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/speech">Speecho</NavLink>
            </li>
            <li>
              <NavLink to="/detection">Object Detection</NavLink>
            </li>
            <li>
              <NavLink to="/weather">Weather</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
