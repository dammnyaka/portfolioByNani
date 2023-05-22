import { memo } from "react";
import About from "./contact/Contact";
import Home from "./home/Home";
import Project from "./projects/Projects";

const TemporaryPage = memo(() => {
  return (
    <>
      <Home />
      <div style={{ height: "60px" }}></div>
      <Project />
      <div style={{ height: "60px" }}></div>
      <About />
    </>
  );
});

export default memo(TemporaryPage);
