import { memo } from "react";
import { Outlet } from "react-router-dom";
import About from "./contact/Contact";
import Home from "./home/Home";
import Project from "./projects/Projects";

const TemporaryPage = memo(() => {
  return (
    <>
      <Home />
      <div style={{ height: "60px" }}></div>
      <Project />
      {/* <Outlet /> */}
      <div style={{ height: "60px" }}></div>
      <About />
    </>
  );
});

export default memo(TemporaryPage);
