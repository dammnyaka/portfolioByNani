import { FC, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { route } from "./list";

import Layout from "../page/Layout";
import Loader from "../loader";
import NewModal from "../modal/LayoutModal";

const MainPage = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/MainPage"));
    }, 1000);
  });
});
const TemporaryPage = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/TemporaryPage"));
    }, 1000);
  });
});

const Router: FC = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              {/* <MainPage /> */}
              <TemporaryPage />
            </Suspense>
          }
        />
        {route.map((rout) => {
          return (
            <Route
              key={`route ${rout.path}`}
              path={rout.path}
              element={
                <Layout>
                  <Suspense fallback={<Loader />}>
                    <rout.component />
                  </Suspense>
                </Layout>
              }
            />
          );
        })}
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/projects/:id" element={<NewModal />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
