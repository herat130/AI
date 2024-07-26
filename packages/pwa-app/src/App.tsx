import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Layout/Loader";
import Layout from "./components/Layout/Layout";
import { publicRoutes } from "./routes/routes";

export default function App() {
  // test error boundary
  // throw new Error('Something wrong is happening')
  return (
    <Layout>
      <Routes>
        {publicRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            element={<Suspense fallback={<Loader />}>{element}</Suspense>}
            path={path}
          />
        ))}
      </Routes>
    </Layout>
  );
}
