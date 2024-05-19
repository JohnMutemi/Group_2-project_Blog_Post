import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      {' '}
      {/* Apply styling */}
      <h1>About</h1>
      <p>
        <strong>BlogPost</strong> is a platform that allows users to share their
        thoughts and experiences on a variety of topics. We hope you find the
        content here to be informative and engaging. You can start by{' '}
        <Link to="/create-blog-post">sharing a post</Link> about anything and
        remember the goal here is to inspire, inform, educate and have a good
        time.
      </p>
      <p>
        We always happy to hear from readers, so please feel free to contact us
        with any questions or comments.
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default About;
