import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios/axios";

const initialState = {
  loading: false,
  topHeadlines: [],
  topHeadlinesCurrentCount: 0,
  topHeadlinesTotalCount: null,
};

export const getTopHeadlines = createAsyncThunk(
  "articles/getTopHeadlines",
  async ({ page }) => {
    const { data } = await axiosInstance.get(
      `/top-headlines?country=${process.env.REACT_APP_API_DEFAULT_COUNTRY}&pageSize=${process.env.REACT_APP_DEFAULT_PER_PAGE}&page=${page}`
    );
    return data;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: {
    [getTopHeadlines.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [getTopHeadlines.fulfilled]: (state, action) => {
      const { articles, totalResults } = action.payload;
      state.topHeadlines = [...state.topHeadlines, ...articles];
      state.topHeadlinesCurrentCount += articles.length;
      state.topHeadlinesTotalCount = totalResults;
      state.loading = false;
      return state;
    },
  },
});
