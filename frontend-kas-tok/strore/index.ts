import windowsReducer from "./windows";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    windows: windowsReducer,
  },
});

export default store;
