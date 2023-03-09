import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import News from "../../Pages/News/News/News";
import TermsAndCondition from "../../Pages/others/TermsAndConditon/TermsAndCondition";
import UserProfile from "../../Pages/Shared/UserProfile/UserProfile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://dragon-news-server-ochre-ten.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-ochre-ten.vercel.app/category/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-ochre-ten.vercel.app/news/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <UserProfile></UserProfile>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
