import type { RootState } from '../store';

export const selectIsMenuSideBarOpen = (state: RootState) => state.ui.isMenuSideBarOpen
export const selectIsSearchBarOpen = (state: RootState) => state.ui.isSearchBarOpen
export const selectSortByValue = (state: RootState) => state.ui.sortBy