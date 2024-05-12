import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import App from "./App";
import Home from "./components/Home";
import CreateBlogPost from "./components/CreateBlogpost";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/create-blog-post",
        element: <CreateBlogPost />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
