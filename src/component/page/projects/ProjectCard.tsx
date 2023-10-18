import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import { Instrument, Projects } from "../../../content-type/type";

type Props = {
  project: Projects;
  FilterProject: (e: MouseEvent, name: string) => void;
  activeIcon: string;
};

const var1 = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const ProjectCard = ({ project, FilterProject, activeIcon }: Props) => {
  const location = useLocation();

  return (
    <>
      <motion.li variants={var1}>
        <Link to={`${project.id}`} state={{ backgroundLocation: location }}>
          <div className={project.id === 2 ? "project_card test" : "project_card"}>
            <img src={project.prev} alt="img_project" />
            <div className="project_card_info">
              <div className="project_card_name">
                <h2>{project.name}</h2>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </div>

              <div className="project_instuments">
                {project.instuments?.map((instrument: Instrument) => (
                  <div
                    className={activeIcon === instrument.name ? "project_icon_active" : "project_icon"}
                    onClick={(e) => FilterProject(e, instrument.name)}
                    key={instrument.id}
                  >
                    <img src={instrument.instument} alt={instrument.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </motion.li>
    </>
  );
};

export default ProjectCard;
