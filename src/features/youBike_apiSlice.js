import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios.js";

// 建立資料
// 後續修改資料時, 不會修改到本身, 會在slice的時候自動copy一個proxy物件
const initialYouBikeData = {
  info: {},
  infos: [],
  state: false,
};

const youBikeSlice = createSlice({
  name: "youBikeData",
  initialState: initialYouBikeData,
  reducers: {
    initData(state, action) {
      // 直接回傳initial資料, 重置資料
      return initialYouBikeData;
    },
  },
  extraReducers: (builder) => {
    // 非同步事件要使用"createAsyncThunk"建立, "extraReducers"做狀態管控
    builder.addCase(getBikeData.fulfilled, (state, action) => {
      state.infos = action.payload;
    });
  },
});

export const getBikeData = createAsyncThunk("youBike/info", async () => {
  const res = await axios.get("/api/bike.json");
  return res.data;
});

export const { initData } = youBikeSlice.actions;
export default youBikeSlice.reducer;
