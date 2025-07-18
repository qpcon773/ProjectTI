import { configureStore } from '@reduxjs/toolkit'
import userSlice from "@/features/apiSlice.js"

export default configureStore({
  reducer: {
    apiData: userSlice,
  }
})