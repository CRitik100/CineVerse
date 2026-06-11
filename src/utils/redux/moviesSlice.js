import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",

  initialState: {
    trailer: null,
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    searchedMovies: [
      "The Imitation Game",
      "The Theory of Everything",
      "A Beautiful Mind",
      "Good Will Hunting",
      "Hidden Figures",
    ],
    searchedMoviesData: [],
    favouriteMovies: [],
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
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    resetSearchedMovies: (state) => {
      state.searchedMovies = [];
    },
    addSearchedMoviesData: (state, action) => {
      state.searchedMoviesData = action.payload;
    },
    addFavouriteMovie: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFavouriteMovie: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.id !== action.payload.id,
      );
    },
  },
});

export const {
  addTrailer,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addSearchedMovies,
  resetSearchedMovies,
  addSearchedMoviesData,
  addFavouriteMovie,
  removeFavouriteMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
