import App from './App';
import Home from './components/Home';

import SignIn from './components/SignIn';
import Register from './components/register';

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
        path: '/register',
        element: <Register />,
      },
    ],
  },
];

export default routes;
