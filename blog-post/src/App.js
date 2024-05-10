import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
// import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/signin');
    alert('I have been clicked');
  };

  useEffect(() => {
    if (isAuthenticated) {
      // navigates to Home route if user is logged in
      navigate('/');
    } else {
      // navigates to Login route if user is logged out
      navigate('/signin');
    }
  }, [isAuthenticated]);

  return (
    <div className="app">
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isAuthenticated ? (
        <NavBar logout={logout} Navigate to="./" />
      ) : (
        <Navigate to="/login" />
      )}
      <Outlet context={{ logout, login }} />;
    </div>
  );
}

export default App;
