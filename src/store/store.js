import { configureStore } from "@reduxjs/toolkit";
// import slices
import { shoppingSlice } from "./shoppingSlice";
import { titleSlice } from "./titleSlice";
import { itemShowSlice } from "./itemShowSlice";
import { btnRotateSlice } from "./btnRotateSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice.reducer,
    title: titleSlice.reducer,
    itemShow: itemShowSlice.reducer,
    btnRotate: btnRotateSlice.reducer,
  },
});
