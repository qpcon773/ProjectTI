import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios.js";

// 建立資料
// 後續修改資料時, 不會修改到本身, 會在slice的時候自動copy一個proxy物件
const initialMRT_data = {
  info: {},
  infos: [],
  state: false,
};

const MRT_slice = createSlice({
  name: "MRT_data",
  initialState: initialMRT_data,
  reducers: {
    initData(state, action) {
      // 直接回傳initial資料, 重置資料
      return initialMRT_data;
    },
  },
  extraReducers: (builder) => {
    // 非同步事件要使用"createAsyncThunk"建立, "extraReducers"做狀態管控
    builder.addCase(getMRT_data.fulfilled, (state, action) => {
      state.infos = action.payload;
    });
  },
});

export const getMRT_data = createAsyncThunk("MRT/info", async () => {
  const res = await axios.get("/api/MRT.json");
  return res.data.StationTransfers;
});

export const { initData } = MRT_slice.actions;
export default MRT_slice.reducer;
