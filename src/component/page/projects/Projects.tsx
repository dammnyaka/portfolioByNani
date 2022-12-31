import { useState, useCallback, MouseEvent, memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "../../../content-type/conten";
import { Projects } from "../../../content-type/type";

import "./Projects.scss";
import ProjectCard from "./ProjectCard";

const var1 = {
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const Project = memo(() => {
  const location = useLocation();
  const LocOnAnimate =
    location.pathname === "/projects" ||
    location.pathname === "/about" ||
    location.pathname === "/contact" ||
    location.pathname === "/";

  const [dbProjects, setDbProjects] = useState<Projects[]>(projects);
  const [activeIcon, setActiveIcon] = useState<string>("");
  const [animate, setAnimate] = useState(false);

  const FilterClick = useCallback(
    (e: MouseEvent, name: string) => {
      e.preventDefault();
      setAnimate(true);
      if (name !== activeIcon) {
        const filterInstruments = projects.filter((i) => i.instuments?.filter((i) => i.name === name)[0]);
        setDbProjects(filterInstruments);
        setActiveIcon(name);
      } else {
        setDbProjects(projects);
        setActiveIcon("");
      }
    },
    [activeIcon]
  );

  return (
    <div className="projects">
      <div className="projects_layout">
        <motion.ul
          initial={LocOnAnimate && "closed"}
          exit={LocOnAnimate ? "closed" : ""}
          animate={animate && "open"}
          whileInView={"open"}
          viewport={{ amount: 0.1 }}
          variants={var1}
          className="projects_ul"
        >
          <AnimatePresence mode="wait">
            {dbProjects.map((i) => (
              <ProjectCard key={i.id} i={i} FilterClick={FilterClick} activeIcon={activeIcon} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      <Outlet />
    </div>
  );
});

export default memo(Project);
