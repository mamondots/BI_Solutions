import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandingPage from "../Landing_page/LandingPage";
import Blog from "../Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);
