import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { projects } from "../../../content-type/conten";
import "./ModalProject.scss";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction < 0 ? 900 : -900,
      opacity: 0,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -900 : 900,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ModalProject = () => {
  const ModalRef = useRef<HTMLDivElement | null>(null);
  const { id }: any = useParams();
  const navigate = useNavigate();

  const num = Number(id);
  const project = projects[parseInt(id, 10) - 1];
  const [[page, direction], setPage] = useState([num, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (page === 1 && newDirection === -1) {
      navigate(`/projects/${projects.length}`);
    } else if (page === projects.length && newDirection === 1) {
      navigate(`/projects/${newDirection}`);
    } else {
      navigate(`/projects/${page + newDirection}`);
    }
  };

  // const projectIndex: any = wrap(0, projects.length, page);

  if (!project) return <div className="not_project">NOT PROJECT</div>;

  return (
    <div style={{ overflowX: "hidden" }}>
      <AnimatePresence initial={true} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          // exit="exit"
          transition={{
            duration: 0.4,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={"modalDiv"}
        >
          <motion.div variants={variants} ref={ModalRef} className="modal">
            <div className="sidebar_user">
              <h2 className="sidebar_user_name">{project.name}</h2>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
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
      </AnimatePresence>
    </div>
  );
};

export default ModalProject;
