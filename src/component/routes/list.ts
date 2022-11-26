// import Home from "../page/home/Home";
// import About from "../page/about/About";
// import Projects from "../page/projects/Projects";
// import ModalProject from "../page/projects/ModalProject";
// import ModalTest from "../page/projects/ModalTest";
import LayoutModal from "../modal/LayoutModal";
import { lazy } from "react";
import Loader from "../loader";
import NotPage from "../page/notPage/NotPage";

const Home = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/home/Home"));
    }, 1000);
  });
});
const Projects = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/projects/Projects"));
    }, 1000);
  });
});
// const LayoutModal = lazy(() => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(import("../modal/LayoutModal"));
//     }, 1000);
//   });
// });
const About = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/about/About"));
    }, 1000);
  });
});

export const route = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: Layout,
  // },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/projects",
    exact: true,
    component: Projects,
  },
  {
    path: "/projects/:id",
    exact: false,
    component: LayoutModal,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "*",
    exact: true,
    component: NotPage,
  },
];
