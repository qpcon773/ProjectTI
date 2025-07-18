import { createSlice } from "@reduxjs/toolkit";

// 建立資料
// 後續修改資料時, 不會修改到本身, 會在slice的時候自動copy一個proxy物件
const initialApiData = {
  info: {},
  infos: [],
  state: false,
};

const userSlice = createSlice({
  name: "apiData",
  initialState: initialApiData,
  reducers: {
    initData(state, action) {
      // 直接回傳initial資料, 重置資料
      return initialApiData;
    },
    putFakeData(state, action) {
      // state對應綁定的資料, action對應傳入的值(多一層payload)
      state.infos.push(action.payload);
    },
  },
});

export const { initData, putFakeData } = userSlice.actions;
export default userSlice.reducer;
