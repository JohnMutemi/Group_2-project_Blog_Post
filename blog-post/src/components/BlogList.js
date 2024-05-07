import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedBlog from './BlogList';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8002/posts')
      .then((res) => {
        setBlogs(res.data.posts); // Assuming your response structure is an object with a 'posts' array
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <h2>Featured Blog</h2>
      <FeaturedBlog blogs={blogs} />
    </div>
  );
};

export default BlogList;
