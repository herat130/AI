import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Layout/Loader";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

export default function App() {
  // test error boundary
  // throw new Error('Something wrong is happening')
  return (
    <>
      <Layout>
        <Routes>
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
            path="/about"
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
            path="/"
          />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Layout>
    </>
  );
}
