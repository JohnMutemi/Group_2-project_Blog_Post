import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import FeaturedBlog from './FeaturedBlog';

const SearchingBlog = ({ blogs, searchQuery }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
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
    });
    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  return (
    <div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={filteredBlogs.filter((blog) => blog.featured === 'true')} />
      <h2>Normal Blog</h2>
      <BlogCard blogs={filteredBlogs.filter((blog) => blog.featured === 'false')} />
    </div>
  );
};

export default SearchingBlog;