import { FC, PropsWithChildren } from "react";
import Header from "../header/Header";
import "./Layout.scss";

const Pisin: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="children_page">{children}</div>
    </div>
  );
};

export default Pisin;
