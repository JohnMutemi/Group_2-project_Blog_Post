import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateBlogPost = () => {
  const [blogPost, setBlogPost] = useState({
    id: null,
    title: "",
    author: "",
    body: "",
    category: "",
    image: "",
    featured: false,
  });

  const createBlogPost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8002/posts",
        blogPost
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogPost();
    e.target.reset();
  };

  return (
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
        onChange={(e) => setBlogPost({ ...blogPost, category: e.target.value })}
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
  );
};

export default CreateBlogPost;
