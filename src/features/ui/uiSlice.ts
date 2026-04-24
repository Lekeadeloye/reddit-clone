import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuSideBarOpen: boolean;
  isSearchBarOpen: boolean;
  sortBy: string;
}

const initialState: UIState = {
  isMenuSideBarOpen: false,
  isSearchBarOpen: false,
  sortBy: 'all'
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
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload
    }
  },
});

export const { toggleMenuSideBar, openMenuSideBar, closeMenuSideBar, toggleSearchBar, setSortBy } =
  uiSlice.actions;

export default uiSlice.reducer;