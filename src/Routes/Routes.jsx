import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import CollageOneDetails from "../pages/College/CollageDetails/CollageOneDetails";
import College from "../pages/College/College";
import CollegeCard from "../pages/College/CollegeCard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllColleges from "../pages/Home/AllColleges/AllColleges";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/",
          element: <College></College>
        },
        {
          path: "/",
          element: <CollegeCard></CollegeCard>
        },
        {
          path: "/collegeDetails/:id",
          element:<CollageOneDetails></CollageOneDetails>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/allColleges",
          element: <PrivateRoute><AllColleges></AllColleges></PrivateRoute>
        },
      ]
    },
  ]);