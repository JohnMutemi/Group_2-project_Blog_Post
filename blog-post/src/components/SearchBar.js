import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./searchbar.css";

const SearchBar = ({ blogs, logout }) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Ensure blogs data is available before filtering
    if (!blogs || !Array.isArray(blogs)) return;

    // Filter the blog posts based on the search term and selected category
    let filtered = blogs.filter((blog) => {
      const name = blog.title ? blog.title.toLowerCase() : "";
      const categoryMatch =
        selectedCategory === "All" || blog.category === selectedCategory;
      return categoryMatch && name.includes(searchTerm.toLowerCase());
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory]);

  // Extract unique categories from blogs
  const categories = Array.isArray(blogs)
    ? Array.from(new Set(blogs.map((blog) => blog.category)))
    : [];

  return (
    <div className="search-bar">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Search blogs categorically</option>
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
            {blog.image && (
              <img className="blog-image" src={blog.image} alt={blog.title} />
            )}
            <p>{blog.body}</p>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
