import { Link } from 'react-router-dom';
import './ButtonToCreate.css'; // Import CSS file

const ButtonToCreateBlogPost = () => {
  return (
    <button className="create-post-button">
      <Link to="/create-blog-post">Create a New Post</Link>
    </button>
  );
};

export default ButtonToCreateBlogPost;
