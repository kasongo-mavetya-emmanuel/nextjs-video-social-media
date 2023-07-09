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
    setIsDrawer({ isDrawer }) {
      isDrawer = !isDrawer;
    },
    setIsMenu({ isMenu }) {
      isMenu = !isMenu;
    },
  },
});

export const { setIsDrawer, setIsMenu }: any = windowsSlice.reducer;

export default windowsSlice.reducer;
