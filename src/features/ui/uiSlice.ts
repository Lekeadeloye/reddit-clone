import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isMenuSideBarOpen: boolean;
  isSearchBarOpen: boolean;
}

const initialState: UIState = {
  isMenuSideBarOpen: false,
  isSearchBarOpen: false
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
    toggleSearchBar(state) {
      state.isSearchBarOpen = !state.isSearchBarOpen
    }
  },
});

export const { toggleMenuSideBar, openMenuSideBar, closeMenuSideBar, toggleSearchBar } =
  uiSlice.actions;

export default uiSlice.reducer;