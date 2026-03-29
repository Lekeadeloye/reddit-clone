import { type Middleware } from "@reduxjs/toolkit";
import { setQuery, setDebouncedQuery } from "../../features/search/searchSlice";

let debounceTimer: ReturnType<typeof setTimeout>;

export const debounceMiddleware: Middleware = (store) => (next) => (action) => {
  // Let the action through immediately so the input stays responsive
  const result = next(action);

  if (setQuery.match(action)) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      store.dispatch(setDebouncedQuery(action.payload))
    }, 400)
  }

  return result
}