import windowsReducer from "./windows";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    windows: windowsReducer,
  },
});

export default store;
