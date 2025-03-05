// src/features/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeType {
  value: "light" | "dark";
}

const initialState: ThemeType = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload.value;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
