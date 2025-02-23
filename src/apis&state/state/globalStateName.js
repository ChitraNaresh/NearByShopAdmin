// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const globalStateSlice = createSlice({
  name: "globalStateSlice",
  initialState: { isFilterPopupOpen: false },
  reducers: {
    setIsFilterPopupOpen: (state) => {
      state.isFilterPopupOpen=!state.isFilterPopupOpen;
    },
  },
});

export const { setIsFilterPopupOpen } = globalStateSlice.actions;
export default globalStateSlice.reducer;
