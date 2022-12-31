import { lazy } from "react";
import NotPage from "../page/notPage/NotPage";

const TemporaryPage = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/TemporaryPage"));
    }, 1000);
  });
});

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
const Contact = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import("../page/contact/Contact"));
    }, 1000);
  });
});

export const route = [
  {
    path: "/",
    component: TemporaryPage,
  },
  {
    path: "/about",
    name: "ABOUT",
    component: Home,
  },
  {
    path: "/projects",
    name: "PROJECTS",
    component: Projects,
  },
  {
    path: "/contact",
    name: "CONTACT",
    component: Contact,
  },
  {
    path: "*",
    component: NotPage,
  },
];
