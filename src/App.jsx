import { Outlet } from "react-router-dom";

import Nav from "@/layouts/Nav.jsx";
import Loading from "@/components/Loading.jsx";
import "@/assets/styles/index.scss";
import "@/assets/styles/reset.scss";

import { createUseStyles } from "react-jss";

const stylesConfig = createUseStyles({
  contentMain: {
    display: "flex",
    gap: "0 24px",
    maxHeight: "100vh",
  },
});

function App() {
  const useStyles = stylesConfig();
  return (
    <div className={useStyles.contentMain}>
      <Loading />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
