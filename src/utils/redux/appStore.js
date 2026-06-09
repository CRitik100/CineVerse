import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import appConfigReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    appConfig: appConfigReducer,
  },
});

export default appStore;
