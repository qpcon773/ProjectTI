import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { putFakeData, initData } from "@/features/apiSlice";

function Index() {
  return (
    <div>
      <h1>Welcome to the Page!</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">
          Outlined
        </Button>
      </Stack>
    </div>
  );
}

export default Index;
