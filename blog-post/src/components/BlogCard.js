import React from "react";
import axios from "axios";
import "./img.css";
// import Slider from 'react-slick';

const BlogCard = ({ blogs }) => {
  // Filter the blogs where featured is false
  const normalBlogs = blogs.filter((blog) => blog.featured === "false");
  const deleteBlogPost = async (blog) => {
    try {
      const response = await axios.delete(
        `http://localhost:8002/posts/${blog.id}`
      );
      console.log(response.data);
      // Reload the page to reflect the deleted blog post
      window.location.reload();
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <>
      {normalBlogs.map((blog) => (
        <div key={blog.id}>
          <div>
            <h3>{blog.title}</h3>
            {blog.image && (
              <img className="blog-image" src={blog.image} alt={blog.title} />
            )}
            <p>{blog.body}</p>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
            <button onClick={() => deleteBlogPost(blog)}>Delete post</button>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      {normalBlogs.map((blog) => (
        <div key={blog.id}>
          <div>
            <h3>{blog.title}</h3>
            {blog.image && (
              <img className="blog-image" src={blog.image} alt={blog.title} />
            )}
            <p>{blog.body}</p>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
            <button
              onClick={() => {
                deleteBlogPost;
              }}
            >
              Delete post
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
