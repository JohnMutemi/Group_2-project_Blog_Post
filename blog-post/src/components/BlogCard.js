import React from 'react';

const BlogCard = ({ blogs }) => {
  // Filter the blogs where featured is false
  const normalBlogs = blogs.filter((blog) => blog.featured === 'false');

  return (
    <>
      {normalBlogs.map((blog) => (
        <div key={blog.id}>
          <div>
            <h3>{blog.title}</h3>
            {blog.image && (
              <img className="blogImage" src={blog.image} alt={blog.title} />
            )}
            <p>{blog.body}</p>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;