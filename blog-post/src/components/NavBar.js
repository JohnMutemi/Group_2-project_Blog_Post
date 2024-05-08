// components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link" end>
        Home
      </NavLink>
      <NavLink to="/signin" className="nav-link">
        Sign In
      </NavLink>
    </nav>
  );
}

export default NavBar;
