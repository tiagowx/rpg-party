import { configureStore } from "@reduxjs/toolkit";
import { roomListSlice } from "./reducers/roomReducer";

export const store = configureStore({
  reducer: {
    rooms: roomListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
