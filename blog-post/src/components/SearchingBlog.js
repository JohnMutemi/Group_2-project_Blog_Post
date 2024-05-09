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
    title.include(searchQuery) ||
      body.include(searchQuery) ||
    category.include(searchQuery) ||
      author.include(searchQuery);

    return searchCondition;
  }) || [];

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={filteredBlogs.filter((blog) => blog.featured === 'true')} />
      <h2>Normal Blog</h2>
      <BlogCard blogs={filteredBlogs.filter((blog) => blog.featured === 'false')} />
    </div>
  );
};

export default SearchingBlog;