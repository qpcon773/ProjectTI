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

    "& h2": {
      margin: [32, 0, 16],
    }
  },
});

function createIndex() {
  const useStyles = stylesConfig();
  return (
    <ContentBox>
      <div className={useStyles.indexInfo}>
        <img src="images/logo_head.svg" alt="logo" className="img_logo" />

        <h1>ProjectTI — 你的智慧交通查詢小幫手</h1>

        <p>
          還在為台北交通資訊煩惱嗎？ProjectTI 專為通勤族與旅人設計，讓你一站掌握
          台北捷運路線圖與 YouBike 租借站即時資訊！
        </p>

        <p>
          我們提供完整的捷運路線圖
          ，無論是規劃上班路線、假日出遊，還是臨時找轉乘方式，都能快速找到最佳解答。
          每個捷運站的轉運資訊也一併收錄，包含公車、Ubike
          租借點，幫你節省時間、提升效率。
        </p>

        <p>
          不只捷運，我們也整合YouBike 站點即時查詢
          ，想知道附近哪裡還有空車、停車格？
          動動手指馬上搞定，讓你的出行更順暢。
        </p>

        <h2>未來功能搶先看</h2>
        <ul>
          <li>捷運票價計算：出發前預先估算搭車費用</li>
          <li>轉乘時間計算：掌握最快的換乘策略</li>
          <li>台鐵、高鐵資訊整合：讓全台交通一次搞定</li>
        </ul>

        <p>
          ProjectTI
          致力於打造簡單、直覺、好用的查詢體驗，未來將持續新增更多實用功能，陪你一起探索台北！
        </p>

        <p>立即體驗，讓 ProjectTI 成為你的交通小幫手吧！</p>

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
