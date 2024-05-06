import React from "react";

const BlogCard = ({ blog }) => {
  const { title, author, category, body } = blog;

  return (
    <>
      <h1>{title}</h1>
      {/*  <img>{image}</img> */}
      <p>{body}</p>
      <p>{category}</p>
      <h1>{author}</h1>
    </>
  );
};

export default BlogCard;
