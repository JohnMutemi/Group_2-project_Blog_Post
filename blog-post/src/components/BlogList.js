
import React, { useState, useEffect } from "react";
import axios from "axios";
import FeaturedBlog from "./FeaturedBlog";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8002/posts")
      .then((res) => {
        setBlogs(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      <h2>Featured Blog</h2>
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="card">
                <img src={blog.image} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <a href={blog.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>Normal Blog</h2>
      <BlogCard blogs={blogs} />
    </div>
  );
};

export default BlogList;