import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedBlog from './FeaturedBlog';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8002/posts')
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const featuredBlogs = blogs.filter((blog) => blog.featured === 'true');
  const normalBlogs = blogs.filter((blog) => blog.featured === 'false');

  return (
    <div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={featuredBlogs} />
      <h2>Normal Blog</h2>
      <BlogCard blogs={normalBlogs} />
    </div>
  );
};

export default BlogList;
