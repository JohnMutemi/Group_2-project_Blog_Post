import App from "./App";
import CreateBlogPost from "./components/CreateBlogpost"; // Changed import path
import Home from "./components/Home";

import SignIn from './components/SignIn';
import Register from './components/Register'; // Corrected capitalization in import path

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: "/create-blog-post", // Changed path to match imported component
        element: <CreateBlogPost />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
];

export default routes;
