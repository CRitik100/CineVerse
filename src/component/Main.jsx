import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./logIn/Login";
import LoginBody from "./logIn/LoginBody";
import LoginForm from "./logIn/LoginForm";
import Browse from "./browse/Browse";
import Account from "./account/Account";

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
      path: "/account",
      element: <Account />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Main;
