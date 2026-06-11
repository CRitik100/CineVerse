import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",

  initialState: {
    defaultLanguage: "en",
  },

  reducers: {
    updateDefaultLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
    },
  },
});

export const { updateDefaultLanguage } = appConfigSlice.actions;

export default appConfigSlice.reducer;
