import { FC, useContext } from "react";
import { ThemeContext } from "../theme/Theme";

import "../themetoggle/style.scss";
import moon from "../../assets/img/moon-theme-toggle.svg";
import sun from "../../assets/img/sun-theme-toggle.svg";

const Themetoggle: FC = () => {
  const { themetoggle, theme } = useContext(ThemeContext);

  return (
    <div className="nav">
      <label className="switch">
        <input onClick={themetoggle} type="checkbox" defaultChecked={theme === "dark" ? true : false} />
        <span className="slider ">
          {theme === "dark" ? (
            <img className="slider_sun" src={sun} alt="sun" />
          ) : (
            <img className="slider_moon" src={moon} alt="moon" />
          )}
        </span>
      </label>
    </div>
  );
};

export default Themetoggle;
