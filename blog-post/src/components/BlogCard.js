import React from 'react';

const BlogCard = ({ blog }) => {
  const { title, author, category, body, image } = blog; 
  return (
    <div className="blog-card">
      <h1>{title}</h1>
      {image && <img src={image} alt={title} />} <p>{body}</p>
      <p>{category}</p>
      <h1>{author}</h1>
    </div>
  );
};

export default BlogCard;
