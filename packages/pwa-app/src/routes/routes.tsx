import React from "react";
import { lazy } from "react";

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
  { id: 1, path: "/about", element: <About /> },
  { id: 1, path: "*", element: <PageNotFound /> },
];
