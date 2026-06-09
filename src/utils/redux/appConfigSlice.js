import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",

  initialState: {
    defaultLanguage: "en",
  },

  reducers: {
    updateDefaultLanguage: (state, action) => {
      console.log("Updating default language to: ", action.payload);
      state.defaultLanguage = action.payload;
    },
  },
});

export const { updateDefaultLanguage } = appConfigSlice.actions;

export default appConfigSlice.reducer;
