import React, { useState, useEffect } from 'react';
import './searchbar.css';
const SearchBar = ({ blogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Filter the blog posts based on the search term and selected category
    if (!blogs) return;

    let filtered = blogs.filter((blog) => {
      const name = blog.title ? blog.title.toLowerCase() : '';
      const categoryMatch =
        selectedCategory === 'All' || blog.category === selectedCategory;
      return categoryMatch && name.includes(searchTerm.toLowerCase());
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory]);

  // Extract unique categories from blogs
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a blog post..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select category</option>
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="filtered-blogs">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
