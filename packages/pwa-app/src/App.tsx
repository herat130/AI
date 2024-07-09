import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Layout/Loader";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./containers/Home"));
const About = lazy(() => import("./containers/About"));
const PageNotFound = lazy(() => import("./containers/PageNotFound"));

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
          <Route element={<Home />} path="/" />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Layout>
    </>
  );
}
