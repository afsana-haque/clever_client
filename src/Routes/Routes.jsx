import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import CollageOneDetails from "../pages/College/CollageDetails/CollageOneDetails";
import College from "../pages/College/College";
import CollegeCard from "../pages/College/CollegeCard";
import Login from "../pages/Login/Login";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <CollageOneDetails></CollageOneDetails>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);