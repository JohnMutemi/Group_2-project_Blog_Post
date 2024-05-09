import { Link } from "react-router-dom";

const ButtonToCreateBlogPost = () => {
  return (
    <button>
      <Link to="/create-blog-post">Create a New Post</Link>
    </button>
  );
};

export default ButtonToCreateBlogPost;
