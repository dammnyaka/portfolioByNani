import { Link } from "react-router-dom";
import { FC, useState } from "react";
import Canvas from "../canvas";

const Layout: FC = () => {
  return (
    <div>
      <Canvas />
      <Link to="/home">
        <button>asd</button>
      </Link>
    </div>
  );
};

export default Layout;
