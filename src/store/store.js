import { configureStore } from '@reduxjs/toolkit';
// import slices
import { titleSlice } from './titleSlice';
import { itemShowSlice } from './itemShowSlice';
import { btnRotateSlice } from './btnRotateSlice';

export const store = configureStore({
    reducer: {
        title: titleSlice.reducer,
        itemShow: itemShowSlice.reducer,
        btnRotate: btnRotateSlice.reducer,
    },
});
