import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../../../content-type/conten";
import "./Projects.scss";

const Project = () => {
  const location = useLocation();

  const ScrollHide = (e: any) => {
    if (e.stopPropagation()) {
      document.body.style.overflow = "hidden";
    }
  };

  // const [likes, setLikes] = useState(100);
  // const [isClicked, setIsClicked] = useState(false);

  const [dbProjects, setDbProjects] = useState(projects);
  const [activeIcon, setActiveIcon] = useState<string>();

  // const handleClick = (e: any) => {
  //   e.preventDefault(e);
  //   if (isClicked) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   setIsClicked(!isClicked);
  // };

  const FilterClick = (e: any, name: string) => {
    e.preventDefault();
    const filterInstruments = projects.filter((i) => i.instuments?.filter((i) => i.name === name)[0]);
    if (name !== activeIcon) {
      setDbProjects(filterInstruments);
      setActiveIcon(name);
    } else {
      setDbProjects(projects);
      setActiveIcon("");
    }
  };

  return (
    <div className="projects">
      <div className="asd">
        <div className="dsa">
          {dbProjects.map((i: any) => (
            <Link
              onClick={(e) => ScrollHide(e)}
              key={i.id}
              to={`/projects/${i.id}`}
              state={{ backgroundLocation: location }}
            >
              <div className="project_card">
                <img src={i.prev} alt="img_project" />
                <div className="project_card_info">
                  <div className="project_card_name">
                    <h2>{i.name}</h2>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </div>

                  <div className="project_instuments">
                    {i.instuments?.map((a: any) => (
                      <div
                        className={activeIcon === a.name ? "project_icon_active" : "project_icon"}
                        onClick={(e) => FilterClick(e, a.name)}
                        key={a.id}
                      >
                        <img src={a.instument} alt="" />
                      </div>
                    ))}
                  </div>

                  {/* {!likes && (
                    <div className="likes">
                      <div onClick={(e) => handleClick(e)} className={isClicked ? "heart_none" : "heart"}>
                        <p>{likes}</p>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
