// components/BlogCard.js
import React, { useState } from 'react';
import BlogModal from './BlogModal';
import './img.css';

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const BlogCard = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h3>{blog.title}</h3>
            {blog.image && (
              <img className="blog-image" src={blog.image} alt={blog.title} />
            )}
            <p>
              {truncateText(blog.body, 100)}{' '}
              <button onClick={() => handleOpenModal(blog)}>Read More</button>
            </p>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
          </div>
        ))}
      </div>
      <BlogModal
        blog={selectedBlog}
        isVisible={Boolean(selectedBlog)}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default BlogCard;
