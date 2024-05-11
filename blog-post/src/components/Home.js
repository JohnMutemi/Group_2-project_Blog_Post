// src/pages/Home.js
import React, { useState } from 'react';
import BlogList from '../components/BlogList';
// import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import { useOutletContext } from 'react-router-dom';
// import SignIn from './SignIn';

function Home() {
  const { logout } = useOutletContext();
  return (
    <>
      {/* <SignIn onAuthChange={handleAuthChange} /> */}
      {/* <NavBar logout={logout} Navigate to=".signin/"></NavBar> */}
      <button>
        <Link to="/create-blog-post">CREATE POST</Link>
      </button>
      <BlogList />
    </>
  );
}

export default Home;
