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
        // console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={blogs} />
      <h2>Normal Blog</h2>
      <BlogCard blogs={blogs} />
    </div>
  );
};

export default BlogList;
