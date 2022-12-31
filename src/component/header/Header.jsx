import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { route } from "../routes/list";
import "./Header.scss";

import soundImg from "../../assets/img/music_toggle.png";
import sound from "../../assets/sound/sound.mp3";

import Themetoggle from "../button/themetoggle";
import BurgerMenu from "../button/BurgerMenu/BurgerMenu";

const Header = () => {
  const navigate = useNavigate();

  const audioPlayer = useRef();
  const [itPlay, setItPlay] = useState(false);

  const [show, setShow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const audioPlay = () => {
    if (!itPlay) {
      audioPlayer.current.play();
      setItPlay(true);
    } else {
      audioPlayer.current.pause();
      setItPlay(false);
    }
  };

  const controlHeader = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setShow(true);
    } else {
      setShow(false);
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  });

  return (
    <header className={show ? "hidden" : "header"}>
      <audio preload="metadata" ref={audioPlayer} loop={true}>
        <source src={sound} />
      </audio>
      <div className="header_button">
        <div>
          <svg
            onClick={() => navigate("/")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#000000"
              fillRule="nonzero"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M11.98438,4c-0.25977,0.00414 -0.50774,0.10921 -0.69141,0.29297l-8,8c-0.18754,0.18751 -0.29292,0.44183 -0.29297,0.70703v23c0.00005,0.2652 0.10543,0.51952 0.29297,0.70703l10,10c0.28603,0.28583 0.71604,0.37129 1.08963,0.21656c0.37359,-0.15474 0.61724,-0.51922 0.6174,-0.92359v-20.58594l9.29297,9.29297c0.39053,0.39037 1.02353,0.39037 1.41406,0l9.29297,-9.29297v20.58594c0.00016,0.40437 0.24381,0.76885 0.6174,0.92359c0.37359,0.15474 0.8036,0.06927 1.08963,-0.21656l10,-10c0.18754,-0.18751 0.29292,-0.44183 0.29297,-0.70703v-23c-0.00005,-0.2652 -0.10543,-0.51952 -0.29297,-0.70703l-8,-8c-0.39053,-0.39037 -1.02353,-0.39037 -1.41406,0l-12.29297,12.29297l-12.29297,-12.29297c-0.19132,-0.19141 -0.45205,-0.29711 -0.72266,-0.29297zM12,6.41406l12,12v13.17188l-18.58594,-18.58594zM38,6.41406l6.58594,6.58594l-18.58594,18.58594v-13.17188zM5,15.41406l8,8v20.17188l-8,-8zM45,15.41406v20.17188l-8,8v-20.17188z"></path>
              </g>
            </g>
          </svg>
        </div>
        <button onClick={() => audioPlay()} className={`header_button_music ${!itPlay && "soundOff"}`}>
          <img style={{ marginRight: "10px" }} className="header_button_img" src={soundImg} alt="button_music" />
        </button>
        <Themetoggle />
      </div>

      <nav className="header_nav">
        <ul className="header_ul">
          {route.map((i) => {
            if (!i.name) {
              return false;
            }
            return (
              <li key={i.name}>
                <NavLink className={({ isActive }) => (isActive ? "active_link" : "")} to={i.path}>
                  {i.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <BurgerMenu />
      </nav>
    </header>
  );
};

export default Header;
