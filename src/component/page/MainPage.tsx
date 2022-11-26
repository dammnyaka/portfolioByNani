import { Link } from "react-router-dom";
import { FC, useState } from "react";
import Canvas from "../canvas";

const Layout: FC = () => {
  const [a, setA] = useState(true);
  return (
    <div>
      {a && <Canvas />}
      <Link to="/home">
        <button onClick={() => setA(false)}>asd</button>
      </Link>
    </div>
  );
};

export default Layout;
