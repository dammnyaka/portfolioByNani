import { memo, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import Themetoggle from "../themetoggle";
import "./Header.scss";

import soundImg from "../../assets/img/music_toggle.png";
import sound from "../../assets/sound/sound.mp3";

const Header = memo(() => {
  const audioPlayer = useRef();
  const [itPlay, setItPlay] = useState(false);
  const [pause, setPause] = useState(true);

  const plays = () => {
    if (itPlay === false && pause === false) {
      audioPlayer.current.pause();
      console.log("pause");
      setItPlay(true);
    } else if (itPlay === true) {
      audioPlayer.current.play();
      console.log("play");
      setItPlay(false);
    } else if (itPlay === false && pause === true) {
      audioPlayer.current.pause();
      setPause(false);
      setItPlay(true);
      console.log("no");
    } else if (itPlay === true && pause === false) {
      audioPlayer.current.play();
    }
  };

  const [show, setShow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const controlNavbar = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setShow(true);
    } else {
      setShow(false);
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  });

  return (
    <header className={show ? "hidden" : "header"}>
      <audio preload="none" ref={audioPlayer} loop={true} autoPlay>
        <source src={sound} />
      </audio>
      <div className="header_button">
        <button onClick={() => plays()} className="header_button_music">
          <img style={{ marginRight: "10px" }} className="header_button_img" src={soundImg} alt="button_music" />
        </button>
        <Themetoggle />
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active_link" : "")} to={"/home"}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active_link" : "")} to={"/projects"}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active_link" : "")} to={"/about"}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
