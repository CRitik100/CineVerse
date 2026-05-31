import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import LoginBody from "./LoginBody";
import LoginForm from "./LoginForm";
import Browse from "./Browse";

import Error from "./Error";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/",
          element: <LoginBody />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Main;
