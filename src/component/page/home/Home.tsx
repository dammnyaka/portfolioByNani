import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";

import Typewritter from "../../typewritter";
import { img, introdata } from "../../../content-type/conten";
import "./Home.scss";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      <div className="home_main">
        <div className="home_type">
          <h3>{introdata.title}</h3>
          <h3>{introdata.description}</h3>
          <Typewritter props={introdata.animated} />
        </div>
        <div className="home_img">
          {img && img.map((i) => <img key={i.id} src={theme === "dark" ? i.imageDark : i.imageLight} alt="home_img" />)}
        </div>
      </div>

    </div>

  );
};

export default Home;
