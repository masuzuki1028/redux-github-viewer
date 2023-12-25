import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile";
import issueReducer from "./issue";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    user: profileReducer,
    issues: issueReducer,
    modal: modalReducer,
  },
});
