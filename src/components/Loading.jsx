import { createUseStyles } from "react-jss";

import { useSelector } from "react-redux";

const stylesConfig = createUseStyles({
  "@keyframes loading": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  lightBox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",

    "&.focus": {
      opacity: 1,
      pointerEvents: "all",
    },

    "& .lightMask": {
      background: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 99,
    },

    "& .lightMain": {
      // background: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 300,
      height: 300,
      zIndex: 100,
      padding: 24,
      borderRadius: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0 16px",

      "& p": {
        width: 16,
        height: 16,
        background: "#13c3f8",
        borderRadius: "50%",
        animation: "$loading 1.2s ease alternate-reverse infinite",

        "&:nth-child(1)": {
          // animationDelay: 0,
        },

        "&:nth-child(2)": {
          animationDelay: "0.4s",
        },

        "&:nth-child(3)": {
          animationDelay: "0.8s",
        },
      },
    },
  },
});

function CreateLoading({}) {
  const useStyles = stylesConfig();
  const infos = useSelector((state) => state.loading.isLoading);
  return (
    <div className={useStyles.lightBox + (infos ? " focus" : "")}>
      <div className="lightMask"></div>
      <div className="lightMain">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default CreateLoading;
