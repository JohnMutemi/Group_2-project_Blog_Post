import BlogCard from "./BlogCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8002/posts").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </>
  );
};

export default Blogs;
