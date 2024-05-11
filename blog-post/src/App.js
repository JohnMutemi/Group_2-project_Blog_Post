import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null); // Define a new state variable to hold user information
  const [blogs, setBlogs] = useState([]); // New state variable to hold blog data

  const navigate = useNavigate(); // Fetch all blog posts from the server
  useEffect(() => {
    axios
      .get('http://localhost:8002/posts')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);
  const login = (user) => {
    // Update the user state with the provided user object
    setUser(user);
    navigate('/');
  };

  const logout = () => {
    setUser(null); // Set the user state to null upon logout
    navigate('/signin');
  };

  useEffect(() => {
    if (user) {
      // navigates to Home route if user is logged in
      navigate('/');
    } else {
      // navigates to Login route if user is logged out
      navigate('/signin');
    }
  }, [user]);

  return (
    <div className="app">
      {' '}
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}{' '}
      {user ? (
        <>
          <NavBar logout={logout} Navigate to="./" />
          <SearchBar blogs={blogs} />{' '}
        </>
      ) : (
        <Navigate to="/login" />
      )}
      <Outlet context={{ logout, login, blogs }} />{' '}
    </div>
  );
}

export default App;
