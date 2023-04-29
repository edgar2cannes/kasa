import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  

  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activated" : "link")}
           end >
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activated" : "link")}
              to="/about"
              end
            >
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}