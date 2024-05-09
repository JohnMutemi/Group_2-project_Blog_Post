import './App.css';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import SearchingBlog from './components/SearchingBlog';
import { useState } from 'react';



function App() {
  const [blogs, setBlogs] = useState([]);


const handleBlogsReceived = (blogsData) => { 
  setBlogs(blogsData);
};

  return (
    <>
      <NavBar />
      <BlogList onBlogsReceived={handleBlogsReceived}/>
      <SearchingBlog blogs={blogs}/>
    </>
  );
}

export default App;
