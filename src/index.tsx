import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routers from "./component/routes/Router";
import Theme from "./component/theme/Theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme>
      <Router>
        <Routers />
      </Router>
    </Theme>
  </React.StrictMode>
);
