import React from "react";
import "../index.css"
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  return (
    <div className="navbar">
      <ul className="nav nav-tabs">
        <li>Ryan Siverson</li>
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
