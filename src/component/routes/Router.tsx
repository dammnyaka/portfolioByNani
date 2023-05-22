import { FC, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { route } from "./list";

import Layout from "../page/Layout";
import Loader from "../loader";
import LayoutModal from "../modal/LayoutModal";
import Header from "../header/Header";

const Routers: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {route.map((rout) => {
              return (
                <Route
                  key={`route ${rout.path}`}
                  path={rout.path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <rout.component />
                    </Suspense>
                  }
                >
                  <Route path=":id" element={<LayoutModal />} />
                </Route>
              );
            })}
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default Routers;
