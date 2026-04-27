import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuSideBarOpen: boolean;
  isSearchBarOpen: boolean;
  sortBy: string;
  isSinglePost: boolean;
  selectedPostId: string | null
}

const initialState: UIState = {
  isMenuSideBarOpen: false,
  isSearchBarOpen: false,
  sortBy: 'all',
  isSinglePost: false,
  selectedPostId: null
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
    },
    toggleSinglePost(state) {
      state.isSinglePost = !state.isSinglePost
    },
    setSelectedPostId(state, action: PayloadAction<string | null>) {
      state.selectedPostId = action.payload;
      state.isSinglePost = action.payload !== null
    }
  },
});

export const { toggleMenuSideBar, openMenuSideBar, closeMenuSideBar, toggleSearchBar, setSortBy, toggleSinglePost } =
  uiSlice.actions;

export default uiSlice.reducer;