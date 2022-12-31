import { FC, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { route } from "./list";

import Layout from "../page/Layout";
import Loader from "../loader";
import LayoutModal from "../modal/LayoutModal";
import Header from "../header/Header";

const Router: FC = () => {
  const location = useLocation();
  // const state = location.state as { backgroundLocation?: Location };
  // const background = location.state && (location.state as { backgroundLocation?: Location });
  // const locationArr: any = location.pathname?.split("/") ?? [];

  // console.log(locationArr[1]);

  return (
    <>
      <div>
        <Header />
      </div>
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
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
              >
                <Route path=":id" element={<LayoutModal />} />
              </Route>
            );
          })}
        </Routes>
      </AnimatePresence>
      {/* {state?.backgroundLocation && (
        <Routes>
          <Route path="/projects" element={<Project />}>
            <Route path="/projects/:id" element={<LayoutModal />} />
          </Route>
        </Routes>
      )} */}
    </>
  );
};

export default Router;
