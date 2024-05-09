import React, { useState } from 'react';
import BlogCard from './BlogCard';
import FeaturedBlog from './FeaturedBlog';



const SearchingBlog = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchTerm.toLowerCase());
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog?.title?.toLowerCase() || '';
    const body = blog?.body?.toLowerCase() || '';
    const category = blog?.category?.toLowerCase() || '';
    const author = blog?.author?.toLowerCase() || '';

    const searchCondition =
      title.includes(searchQuery) ||
      body.includes(searchQuery) ||
      category.includes(searchQuery) ||
      author.includes(searchQuery);

    return searchCondition;
  }) || [];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem' }}>
          Search
        </button>
      </div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={filteredBlogs.filter((blog) => blog.featured === 'true')} />
      <h2>Normal Blog</h2>
      <BlogCard blogs={filteredBlogs.filter((blog) => blog.featured === 'false')} />
    </div>
  );
};

export default SearchingBlog;