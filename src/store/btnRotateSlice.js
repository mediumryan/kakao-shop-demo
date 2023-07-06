import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const btnRotateSlice = createSlice({
  name: "btnRotate",
  initialState,
  reducers: {
    setBtnRotate: (state) => {
      state.status = !state.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBtnRotate } = btnRotateSlice.actions;

export default btnRotateSlice.reducer;
