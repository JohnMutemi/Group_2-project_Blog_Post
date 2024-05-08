import React, { useState } from 'react';
import './img.css';

const BlogModal = ({ blog, isVisible, onClose }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment.trim()]);
      setComment('');
    }
  };

  if (!isVisible || !blog) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h1>{blog.title}</h1>
        <img className="blog-image" src={blog.image} alt={blog.title} />
        <p>{blog.body}</p>
        <p>{blog.category}</p>
        <p>{blog.author}</p>
        <div className="blog-actions">
          <button onClick={handleLike}>Like ({likes})</button>
        </div>
        <div className="comments-section">
          <h3>Comments</h3>
          <ul>
            {comments.map((cmt, index) => (
              <li key={index}>{cmt}</li>
            ))}
          </ul>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
