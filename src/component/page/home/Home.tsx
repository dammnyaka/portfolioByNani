import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../theme/Theme";
import { motion } from "framer-motion";

import Typewritter from "../../typewritter";
import { img, introdata } from "../../../content-type/conten";
import "./Home.scss";

const homeAnimation = {
  visible: (custom: number) => {
    return {
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    };
  },
  hidden: {
    x: -200,
    opacity: 0,
  },
};

const homeVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 170 },
  },
  exit: {
    x: -300,
    opacity: 0,
  },
};

const Home = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={homeVariants} className="home">
      <motion.div initial="hidden" animate="visible" className="home_main">
        <div className="home_type">
          <motion.h3 variants={homeAnimation} custom={1}>
            {introdata.title}
          </motion.h3>
          <motion.h3 variants={homeAnimation} custom={2}>
            {introdata.description}
          </motion.h3>
          <motion.div variants={homeAnimation} custom={3}>
            <Typewritter props={introdata.animated} />
          </motion.div>
        </div>
        <div className="home_img">
          {img && img.map((i) => <img key={i.id} src={theme === "dark" ? i.imageDark : i.imageLight} alt="home_img" />)}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
