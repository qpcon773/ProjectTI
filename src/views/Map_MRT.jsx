import { createUseStyles } from "react-jss";

import ContentBox from "@/layouts/ContentBox.jsx";

const stylesConfig = createUseStyles({
  mapMRT_Info: {
    "& .hintText": {
      marginTop: 32,
    },
  },
});

function createMap_MRT() {
  const useStyles = stylesConfig();
  return (
    <ContentBox>
      <div className={useStyles.mapMRT_Info}>
        <h2>捷運路線圖</h2>
        <img src="images/MRT/routemap2023n.png" alt="捷運路線圖" />
        <p className="hintText">
          資料來源：
          <a
            href="https://www.metro.taipei/cp.aspx?n=91974F2B13D997F1"
            target="_blank"
            class="link"
          >
            臺北大眾捷運股份有限公司
          </a>
        </p>
      </div>
    </ContentBox>
  );
}

export default createMap_MRT;
