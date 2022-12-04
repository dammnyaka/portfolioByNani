import Header from "../header/Header";
import About from "./contact/Contact";
import Home from "./home/Home";
import Project from "./projects/Projects";

const Pricol = () => {
  return (
    <div>
      <Header />
      <Home />
      <div style={{ height: "60px" }}></div>
      <Project />
      <About />
    </div>
  );
};

export default Pricol;
