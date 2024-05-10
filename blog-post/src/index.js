import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignIn';
import App from './App';
import Home from './components/Home';
import CreateBlogPost from './components/CreateBlogpost';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/create-blog-post',
        element: <CreateBlogPost />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
