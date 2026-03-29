import { type RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectSearchUI = (state: RootState) => state.search;
export const selectQuery = (state: RootState) => state.search.query
export const selectDebouncedQuery = (state: RootState) => state.search.debouncedQuery
export const selectSearchParams = createSelector(
  selectSearchUI,
  ({debouncedQuery, type, sort, page}) => ({
    q: debouncedQuery,
    type,
    sort,
    page
  })
)

// Why createSelector? It memoizes derived state. Without it, a new object { q, type, sort } is created on every render, causing unnecessary re-renders.