import { createUseStyles } from "react-jss";
const stylesConfig = createUseStyles({
  contentBox: {
    background: "#fff",
    margin: [16, 16, 16, 0],
    borderRadius: 24,
    padding: 24,
    overflow: "hidden",

    "& .scrollBox": {
      height: "100%",
      overflowY: "auto",
      maxHeight: "100%",
      paddingRight: 8
    },
  },
});

function createContentBox({ children }) {
  const useStyles = stylesConfig();
  return (
    <main className={useStyles.contentBox}>
      <div className="scrollBox">{children}</div>
    </main>
  );
}

export default createContentBox;
