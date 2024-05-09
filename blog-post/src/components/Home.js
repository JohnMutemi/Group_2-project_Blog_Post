// src/pages/Home.js
import React from 'react';
import BlogList from '../components/BlogList';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <BlogList />
    </>
  );
}

export default Home;
