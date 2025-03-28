import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./src/features/basketSlice";

export const store = configureStore({
  reducer: {
 basket: basketReducer, 

  },
}) 