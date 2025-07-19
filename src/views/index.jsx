import { createUseStyles } from "react-jss";

import ContentBox from "@/layouts/ContentBox.jsx";

const stylesConfig = createUseStyles({
  indexInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "16px 0",
    height: "100%",

    "& .img_logo": {
      width: 150,
      margin: [0, "auto"],

      "@media (max-width: 1024px)": {
        width: 100,
      },
    },

    "& .img_travel": {
      width: 200,
      margin: ["auto", "auto", 0],

      "@media (max-width: 1024px)": {
        width: 150,
      },
    },
  },
});

function createIndex() {
  const useStyles = stylesConfig();
  return (
    <ContentBox>
      <div className={useStyles.indexInfo}>
        <img src="images/logo_head.svg" alt="logo" className="img_logo" />

        <h1>ProjectTI — 您的智慧交通好幫手</h1>
        <p>
          ProjectTI
          是一個專為台灣打造的交通資訊查詢平台，致力於提供使用者最即時、最實用的出行資訊。
          <br />
          目前服務範圍涵蓋雙北地區捷運與 YouBike
          系統，讓您隨時掌握站點狀態、剩餘車輛與空位，輕鬆規劃最佳路線。
          <br />
          <br />
          無論是日常通勤、臨時行程，或假日休閒騎乘，ProjectTI
          皆以簡潔直觀的介面，搭配即時數據更新，讓您的每一次出行更順暢、更高效。
          <br />
          <br />
          我們相信交通資訊應該簡單、快速、易取得，因此 ProjectTI
          將持續優化功能，並拓展更多服務，成為您出行不可或缺的好幫手。
        </p>

        <img
          src="images/Index/index_01.svg"
          alt="travel"
          className="img_travel"
        />
      </div>
    </ContentBox>
  );
}

export default createIndex;
