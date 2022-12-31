import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.scss";

const Pisin: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <div className="children_page">
        {/* <Outlet /> */}
        {children}
      </div>
    </div>
  );
};

export default Pisin;
