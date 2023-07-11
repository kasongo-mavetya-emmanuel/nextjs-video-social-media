import { WindowsStateIProp } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialWindowsState: WindowsStateIProp = {
  isDrawer: false,
  isMenu: false,
};

const windowsSlice = createSlice({
  name: "windows",
  initialState: initialWindowsState,
  reducers: {
    setIsDrawer(state) {
      return {
        ...state,
        isDrawer: !state.isDrawer,
      };
    },
    setIsMenu(state) {
      return {
        ...state,
        isMenu: !state.isMenu,
      };
    },
  },
});

export const { setIsDrawer, setIsMenu }: any = windowsSlice.actions;

export default windowsSlice.reducer;
