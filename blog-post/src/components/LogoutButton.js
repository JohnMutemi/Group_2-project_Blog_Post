// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton({ logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout-related actions here, such as clearing local storage, etc.
    // For now, let's assume we're just triggering the logout function passed as a prop
    logout();
    // Redirect the user to the sign-in page after logout
    navigate('/signin');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}

export default LogoutButton;
