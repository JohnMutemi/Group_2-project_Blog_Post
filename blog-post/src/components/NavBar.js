import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './NavBar.css';

function NavBar({ isAuthenticated, onLogout, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm.toLowerCase());
  };

  return (
    <nav className="nav">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
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
                <Link to="/signin">LOG OUT</Link>
              </li>
              <li className="topListItem">
                <Link to="/register">REGISTER</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;