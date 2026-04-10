import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "../services/jsonPlaceholderApi";
import { searchApi } from "../services/searchApi";
import { debounceMiddleware } from "./middleware/debounceMiddleware";
import searchReducer from "../features/search/searchSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(jsonPlaceholderApi.middleware)
      .concat(searchApi.middleware)
      .concat(debounceMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
