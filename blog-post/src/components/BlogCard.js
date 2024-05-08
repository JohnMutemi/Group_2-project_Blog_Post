import React from 'react';

const BlogCard = ({ blogs }) => {
  // Filter the blogs where featured is false
  const normalBlogs = blogs.filter((blog) => blog.featured === "false");

  return (
    <>
      {normalBlogs.map((blog) => (
        <div key={blog.id}>
          <div className="blog-card">
            <h1>{blog.title}</h1>
            {blog.image && <img src={blog.image} alt={blog.title} />}
            <p>{blog.body}</p>
            <p>{blog.category}</p>
            <h1>{blog.author}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;