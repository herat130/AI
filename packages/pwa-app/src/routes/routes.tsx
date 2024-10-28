import React, { Suspense } from "react";
import { lazy } from "react";
import User from "../pages/UserForm/User";
import HookUserForm from "../pages/UserForm/HookUserForm";
import Albums from "../pages/Albums/Albums";
import Products from "../pages/Products/Products";
import { ProductContextProvider } from "../utils/context/products/productContext";
import Loader from "../components/Layout/Loader";
import { CartContextProvider } from "../utils/context/Cart/cartContext";
import Album from "../pages/Albums/Album";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Products/Product";

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
  { id: 5, path: "/album/:id", element: <Album />, title: "Album" },
  {
    id: 6,
    path: "/products",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductContextProvider>
          <CartContextProvider>
            <Products />
          </CartContextProvider>
        </ProductContextProvider>
      </Suspense>
    ),
    title: "Products",
  },
  {
    id: 11,
    path: "/product/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductContextProvider>
          <CartContextProvider>
            <Product />
          </CartContextProvider>
        </ProductContextProvider>
      </Suspense>
    ),
    title: "Product",
  },
  {
    id: 7,
    path: "/cart",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductContextProvider>
          <CartContextProvider>
            <Cart />
          </CartContextProvider>
        </ProductContextProvider>
      </Suspense>
    ),
    title: "Cart",
  },
  { id: 10, path: "*", element: <PageNotFound />, title: "Not Found" },
];
