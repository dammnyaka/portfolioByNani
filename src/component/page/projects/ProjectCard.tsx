import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import { Projects } from "../../../content-type/type";

type Props = {
  i: Projects;
  FilterClick: (e: MouseEvent, name: string) => void;
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

const ProjectCard = ({ i, FilterClick, activeIcon }: Props) => {
  const location = useLocation();

  return (
    <>
      <motion.li
        // initial={{ x: 0, opacity: 1 }}
        // transition={{ delay: 1 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ staggerChildren: 0.03, staggerDirection: 1 }}
        // exit="closed"
        variants={var1}
        // key={i.id}
      >
        <Link to={`${i.id}`} state={{ backgroundLocation: location }}>
          <div className="project_card">
            <img src={i.prev} alt="img_project" />
            <div className="project_card_info">
              <div className="project_card_name">
                <h2>{i.name}</h2>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </div>

              <div className="project_instuments">
                {i.instuments?.map((a: any) => (
                  <div
                    className={activeIcon === a.name ? "project_icon_active" : "project_icon"}
                    onClick={(e) => FilterClick(e, a.name)}
                    key={a.id}
                  >
                    <img src={a.instument} alt="proj_instrument" />
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
