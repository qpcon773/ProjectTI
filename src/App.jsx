import { Outlet } from "react-router-dom";
import "@/assets/styles/index.scss";
import "@/assets/styles/reset.scss";

import Nav from "@/layouts/Nav.jsx";

import { createUseStyles } from "react-jss";

const stylesConfig = createUseStyles({
  contentMain: {
    display: "flex",
    gap: [0, 24]
  },
});

function App() {
  const useStyles = stylesConfig();
  return (
    <div className={useStyles.contentMain}>
      <Nav></Nav>
      <Outlet />
    </div>
  );
}

export default App;
