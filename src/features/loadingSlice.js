import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    changeType: (state, action) => {
      state.isLoading = action.payload;
      console.log(state.isLoading);
    },
  },
});

export const { changeType } = loadingSlice.actions;
export default loadingSlice.reducer;
