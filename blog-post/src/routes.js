import App from "./App";
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
    ],
  },
];

export default routes;
