import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const addToSlice = createSlice({
  name: "addTo",
  initialState,
  reducers: {
    openAddTo: (state) => {
      state.status = true;
    },
    closeAddTo: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openAddTo, closeAddTo } = addToSlice.actions;

export default addToSlice.reducer;
