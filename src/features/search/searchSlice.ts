import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchUIState {
  query: string;
  debouncedQuery: string;
  type: 'posts' | 'communities' | 'users';
  sort: 'relevance' | 'new' | 'top';
  page: number;
  isPopoverOpen: boolean;
}

const initialState: SearchUIState = {
  query: '',
  debouncedQuery: '',
  type: 'posts',
  sort: 'relevance',
  page: 1,
  isPopoverOpen: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.isPopoverOpen = action.payload.length > 0;
    },
    setDebouncedQuery(state, action: PayloadAction<string>) {
      state.debouncedQuery = action.payload;
      state.page = 1; // reset page on new search
    },
    setType(state, action: PayloadAction<SearchUIState['type']>) {
      state.type = action.payload;
      state.page = 1
    },
    setSort(state, action: PayloadAction<SearchUIState['sort']>) {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    closePopover(state) {
      state.isPopoverOpen = false;
    },
    clearSearch(state) {
      return initialState
    }
  }
})

export const {
  setQuery, setDebouncedQuery, setType, setSort, setPage, closePopover, clearSearch
} = searchSlice.actions;

export default searchSlice.reducer