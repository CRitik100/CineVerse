import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./logIn/Login";
import LoginBody from "./logIn/LoginBody";
import LoginForm from "./logIn/LoginForm";
import Browse from "./browse/Browse";
import Account from "./account/Account";

import Error from "./Error";
import Home from "./Home";
import Favourite from "./Favourite/Favourite";
import MovieTrailer from "./browse/MovieTrailer";

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
      element: <Home />,
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/browse/account",
          element: <Account />,
        },
        {
          path: "/browse/favourite",
          element: <Favourite />,
        },
        {
          path: "/browse/movieTrailer/:id",
          element: <MovieTrailer />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Main;
