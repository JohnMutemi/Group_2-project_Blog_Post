// components/BlogPostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './img.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8002/posts/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
      });
  }, [id]);

  return (
    <div className="blog-post-detail">
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <img className="blog-image" src={blog.image} alt={blog.title} />
          <p>{blog.body}</p>
          <p>{blog.category}</p>
          <p>{blog.author}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default BlogPostDetail;
