import App from "./App";
import CreateBlogPost from "./components/CreateBlogpost";
import Home from "./components/Home";

import SignIn from "./components/SignIn";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/create-blog-post",
        element: <CreateBlogPost />,
      },
    ],
  },
];

export default routes;
