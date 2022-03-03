import { combineReducers } from "@reduxjs/toolkit";
import { articlesSlice } from "./articles";

export const rootReducer = combineReducers({
  articles: articlesSlice.reducer,
});
