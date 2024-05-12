import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './CreateBlogpost.css'; // Import CSS file

const CreateBlogPost = () => {
  const [blogPost, setBlogPost] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    body: '',
    category: '',
    image: '',
    featured: false, // Change default value to false
  });
  const navigate = useNavigate();

  const createBlogPost = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8002/posts',
        blogPost
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogPost();
    e.target.reset();
  };

  return (
    <div className="create-blog-container"> {/* Apply container class */}
      <h1>Create Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={blogPost.title}
          onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={blogPost.author}
          onChange={(e) => setBlogPost({ ...blogPost, author: e.target.value })}
        />

        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={blogPost.body}
          onChange={(e) => setBlogPost({ ...blogPost, body: e.target.value })}
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={blogPost.category}
          onChange={(e) =>
            setBlogPost({ ...blogPost, category: e.target.value })
          }
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={blogPost.image}
          onChange={(e) => setBlogPost({ ...blogPost, image: e.target.value })}
        />

        <label htmlFor="featured">Featured:</label>
        <input
          type="checkbox"
          id="featured"
          checked={blogPost.featured}
          onChange={(e) =>
            setBlogPost({ ...blogPost, featured: e.target.checked })
          }
        />

        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreateBlogPost;
