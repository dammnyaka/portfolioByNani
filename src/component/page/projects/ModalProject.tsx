import { motion, Variants } from "framer-motion";
import { useRef } from "react";

import { projects } from "../../../content-type/conten";
import { useModalNavigation } from "../../hooks/useModalNavigation";
import "./ModalProject.scss";

const variants: Variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 900 : -900,
      opacity: 1,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 900 : -900,
      opacity: 1,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ModalProject = () => {
  const ModalRef = useRef<HTMLDivElement | null>(null);
  const { currentId, direction, back, next } = useModalNavigation();
  const project = projects[parseInt(String(currentId), 10) - 1];

  if (!project) return <div className="not_project">NOT PROJECT</div>;

  return (
    <div style={{ overflowX: "hidden" }}>
      <motion.div
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.4,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            next();
          } else if (swipe > swipeConfidenceThreshold) {
            back();
          }
        }}
        className="modalDiv"
      >
        <motion.div variants={variants} ref={ModalRef} className="modal">
          <div className="sidebar_user">
            <h2 className="sidebar_user_name">{project.name}</h2>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img src={project.link} alt="project_frame" />
          </div>
          {project.link1 && (
            <div>
              <img src={project.link1} alt="project_frame1" />
            </div>
          )}
          {project.link2 && (
            <div>
              <img src={project.link2} alt="project_frame2" />
            </div>
          )}
          {project.link3 && (
            <div>
              <img src={project.link3} alt="project_frame3" />
            </div>
          )}
          {project.link4 && (
            <div>
              <img src={project.link4} alt="project_frame4" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModalProject;
