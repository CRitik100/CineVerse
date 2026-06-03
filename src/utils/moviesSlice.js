import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",

  initialState: {
    trailer: null,
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
  },

  reducers: {
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const {
  addTrailer,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcoming,
} = moviesSlice.actions;

export default moviesSlice.reducer;
