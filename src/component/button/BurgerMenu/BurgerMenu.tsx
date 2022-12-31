import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { social } from "../../../content-type/conten";

import { route } from "../../routes/list";

import BurgBut from "./BurgBut";
import "./BurgerMenu.scss";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const BurgerMenu = () => {
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <main className="brg-main">
      <AnimatePresence mode="wait">
        {open && (
          <motion.aside
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{
              height: 0,
              transition: { delay: 0.2, duration: 0.1 },
            }}
          >
            <motion.div className="container" initial="closed" animate="open" exit="closed" variants={sideVariants}>
              <ul>
                {route.map((i) => {
                  if (!i.name) {
                    return false;
                  }
                  return (
                    <motion.li variants={itemVariants} key={i.name}>
                      <NavLink
                        onClick={() => cycleOpen()}
                        className={({ isActive }) => (isActive ? "active_link" : "")}
                        to={i.path}
                      >
                        {i.name}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div
                variants={itemVariants}
                style={{
                  position: "relative",
                  bottom: "-30vh",
                  display: "flex",
                }}
              >
                {social.map((i) => (
                  <div
                    className="social"
                    style={{
                      margin: "0px 10px",
                    }}
                    key={i.name}
                  >
                    <a style={{ display: "flex" }} href={i.link}>
                      <img style={{ width: "30px", height: "30px" }} src={i.icon} alt={i.name} />
                    </a>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container" onClick={() => cycleOpen()}>
        <BurgBut open={open} />
      </div>
    </main>
  );
};

export default BurgerMenu;
