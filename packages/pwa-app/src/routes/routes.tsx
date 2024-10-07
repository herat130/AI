import React, { Suspense } from "react";
import { lazy } from "react";
import User from "../pages/UserForm/User";
import HookUserForm from "../pages/UserForm/HookUserForm";
import Albums from "../pages/Albums/Albums";
import Products from "../pages/Products/Products";
import { ProductContextProvider } from "../utils/context/products/productContext";
import Loader from "../components/Layout/Loader";

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
  {
    id: 5,
    path: "/products",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductContextProvider>
          <Products />
        </ProductContextProvider>
      </Suspense>
    ),
    title: "Products",
  },
  { id: 10, path: "*", element: <PageNotFound />, title: "Not Found" },
];
