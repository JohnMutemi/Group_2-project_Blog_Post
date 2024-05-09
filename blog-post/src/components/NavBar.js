import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; // Import the LogoutButton component
import './NavBar.css';

function NavBar({ isAuthenticated, onLogout }) {
  return (
    <nav className="nav">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/create-post">CREATE POST</Link>
          </li>
          <li className="topListItem">
            <Link to="/user-profile">USER PROFILE</Link>
          </li>
          {/* Conditional rendering based on authentication status */}
          {isAuthenticated ? (
            <li className="topListItem">
              <LogoutButton onLogout={onLogout} />
            </li>
          ) : (
            <>
              <li className="topListItem">
                <Link to="/signin">LOG IN</Link> {/* Changed from LOG OUT to LOG IN */}
              </li>
              <li className="topListItem">
                <Link to="/register">REGISTER</Link> {/* Added REGISTER */}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
}

export default NavBar;
