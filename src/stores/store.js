import { configureStore } from '@reduxjs/toolkit';
import useYouBike_apiSlice from "@/features/youBike_apiSlice.js";
import useMRT_apiSlice from "@/features/MRT_apiSlice.js";
import useLoadingSlice from '@/features/loadingSlice.js';

export default configureStore({
  reducer: {
    youBike_apiData: useYouBike_apiSlice,
    MRT_apiData: useMRT_apiSlice,
    loading: useLoadingSlice,
  }
});
