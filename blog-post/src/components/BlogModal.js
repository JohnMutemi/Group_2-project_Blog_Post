import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './img.css';

const BlogModal = ({ blog, isVisible, onClose }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (blog) {
      setLikes(blog.likes || 0);
      setComments(blog.comments || []);
    }
  }, [blog]);

  const handleLike = () => {
    setLikes(likes + 1);
    axios
      .put(`http://localhost:3000/posts/${blog.id}/like`)
      .then((response) => {
        // Handle success
      })
      .catch((error) => {
        console.error('Error liking post:', error);
        // Handle error
      });
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      const updatedComments = [...comments, comment.trim()];
      setComments(updatedComments);
      axios
        .put(`http://localhost:3000/posts/${blog.id}/comments`, { comment })
        .then((response) => {
          // Handle success
        })
        .catch((error) => {
          console.error('Error adding comment:', error);
          // Handle error
        });
      setComment('');
    }
  };

  if (!isVisible || !blog) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-blog-title">
          <h1>{blog.title}</h1>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-blog-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        <hr />
        <div>
          <p>{blog.body}</p>
        </div>
        <p>{blog.author}</p>
        <div className="blog-actions">
          <button onClick={handleLike}>Likes ({likes})</button>
        </div>
        <div className="comments-section">
          <h3>Comments</h3>
          <ul>
            {comments &&
              Array.isArray(comments) &&
              comments.map((cmt, index) => <li key={index}>{cmt}</li>)}
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
