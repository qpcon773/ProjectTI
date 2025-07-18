import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { putFakeData, initData } from "@/features/apiSlice";

function Index() {
  // 引入store的資料
  const state = useSelector((state) => state.apiData);
  // 修改store的資料要用的
  const dispatch = useDispatch();

  const clickEvent = () => {
    dispatch(putFakeData(123456));
  };
  const clickEvent2 = () => {
    dispatch(initData());
  };

  return (
    <div>
      {state.infos}
      <h1>Welcome to the Page!</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={clickEvent}>
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" onClick={clickEvent2}>
          Outlined
        </Button>
      </Stack>
    </div>
  );
}

export default Index;
