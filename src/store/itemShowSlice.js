import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
};

export const itemShowSlice = createSlice({
  name: "itemShow",
  initialState,
  reducers: {
    setItemShow: (state) => {
      state.status = !state.status;
    },
    setItemShowTrue: (state) => {
      state.status = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItemShow, setItemShowTrue } = itemShowSlice.actions;

export default itemShowSlice.reducer;
