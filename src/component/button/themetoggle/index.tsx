import { FC, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../theme/Theme";

import "./style.scss";
import moon from "../../../assets/img/moon-theme-toggle.svg";
import sun from "../../../assets/img/sun-theme-toggle.svg";

const Themetoggle: FC = () => {
  const { themetoggle, theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="nav">
      <label className="switch">
        <input onClick={themetoggle} type="checkbox" defaultChecked={theme === "dark" ? true : false} />
        <span className="slider ">
          <img
            className={`${theme === "dark" ? "slider_sun" : "slider_moon"}`}
            src={`${theme === "dark" ? sun : moon}`}
            alt={`${theme === "dark" ? "sun" : "moon"}`}
          />
        </span>
      </label>
    </div>
  );
};

export default Themetoggle;
