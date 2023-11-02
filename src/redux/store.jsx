import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";

export const store = configureStore({
  reducer: {
    user: profileReducer,
  },
});
