import React from "react";
import { lazy } from "react";
import User from "../pages/UserForm/User";
import HookUserForm from "../pages/UserForm/HookUserForm";
import Albums from "../pages/Albums/Albums";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

type TRoute = {
  id: number;
  path: string;
  element: React.ReactNode;
  title: string;
};

export const publicRoutes: TRoute[] = [
  { id: 1, path: "/", element: <Home />, title: "Home" },
  { id: 2, path: "/home", element: <Home />, title: "Home" },
  { id: 3, path: "/about", element: <About />, title: "About" },
  { id: 4, path: "/user", element: <User />, title: "Formik Form" },
  { id: 5, path: "/userhook", element: <HookUserForm />, title: "Hook Form" },
  { id: 5, path: "/albums", element: <Albums />, title: "Albums" },
  { id: 10, path: "*", element: <PageNotFound />, title: "Not Found" },
];
