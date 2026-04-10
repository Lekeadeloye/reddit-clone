import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isMenuSideBarOpen: boolean;
}

const initialState: UIState = {
  isMenuSideBarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenuSideBar(state) {
      state.isMenuSideBarOpen = !state.isMenuSideBarOpen;
    },
    openMenuSideBar(state) {
      state.isMenuSideBarOpen = true;
    },
    closeMenuSideBar(state) {
      state.isMenuSideBarOpen = false;
    },
  },
});

export const { toggleMenuSideBar, openMenuSideBar, closeMenuSideBar } =
  uiSlice.actions;

export default uiSlice.reducer;