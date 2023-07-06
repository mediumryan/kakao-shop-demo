import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "모든상품",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTitle } = titleSlice.actions;

export default titleSlice.reducer;
