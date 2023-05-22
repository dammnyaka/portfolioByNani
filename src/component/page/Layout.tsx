import { FC, PropsWithChildren } from "react";
import "./Layout.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <div className="children_page">{children}</div>
    </div>
  );
};

export default Layout;
