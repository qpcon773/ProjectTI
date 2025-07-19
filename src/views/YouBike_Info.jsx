import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBikeData } from "@/features/apiSlice";

import ContentBox from "@/layouts/ContentBox.jsx";

function createYouBike_Info() {
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.apiData.infos);

  useEffect(() => {
    dispatch(getBikeData());
  }, []);

  return (
    <ContentBox>
      <h2>YouBike 資料</h2>
      {infos.length === 0 ? (
        <p>載入中...</p>
      ) : (
        <ul>
          {infos.map((item, index) => (
            <li key={item.StationUID}>{item.StationName.Zh_tw}</li>
          ))}
        </ul>
      )}
    </ContentBox>
  );
}

export default createYouBike_Info;
