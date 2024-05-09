import './App.css';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import SearchingBlog from './components/SearchingBlog';
import { useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBlogsReceived = (blogsData) => {
    setBlogs(blogsData);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
    <NavBar  onSearch={handleSearch} />
    <BlogList onBlogsReceived={handleBlogsReceived} />
    <SearchingBlog blogs={blogs} searchQuery={searchQuery} />
  </div>
  );
}

export default App;
