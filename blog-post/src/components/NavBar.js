import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"; // Import the LogoutButton component

import "./NavBar.css";

function NavBar({ user, isAuthenticated, onLogout }) {
  return (
    <nav className="nav">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact">CONTACT US</Link>
          </li>

          <li className="topListItem">
            <Link to="/user-profile">USER PROFILE</Link>
          </li>

          {/* <li className="topListItem">
            <Link to="/register">REGISTER</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
