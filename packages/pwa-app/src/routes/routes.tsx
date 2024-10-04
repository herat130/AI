import React from "react";
import { lazy } from "react";
import User from "../pages/UserForm/User";
import HookUserForm from "../pages/UserForm/HookUserForm";
import Albums from "../Albums";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

type TRoute = {
  id: number;
  path: string;
  element: React.ReactNode;
};

export const publicRoutes: TRoute[] = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/home", element: <Home /> },
  { id: 3, path: "/about", element: <About /> },
  { id: 4, path: "/user", element: <User /> },
  { id: 5, path: "/userhook", element: <HookUserForm /> },
  { id: 5, path: "/albums", element: <Albums /> },
  { id: 10, path: "*", element: <PageNotFound /> },
];
