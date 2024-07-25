import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Authentication/SignUp";
import Home from "../Home/Home";
import SignIn from "../Authentication/SignIn";
import Landing from "../Landing Page/Landing";
import Dashboard from "../Dashboard/Dashboard";
import Company from "../Dashboard/Company/Company";
import ApplicantDetails from "../Dashboard/Company/CompAtoms/ApplicantDetails";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/sign",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/company",
    element: <Company />,
    errorElement: <Error />,
  },
  {
    path: `/company/applicant/:studentId`,
    element: <ApplicantDetails />,
    errorElement: <Error />,
  },
]);
