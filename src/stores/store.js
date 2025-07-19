import { configureStore } from '@reduxjs/toolkit';
import useApiSlice from "@/features/apiSlice.js";
import useLoadingSlice from '@/features/loadingSlice.js';

export default configureStore({
  reducer: {
    apiData: useApiSlice,
    loading: useLoadingSlice,
  }
});
