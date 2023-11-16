import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";
import issueReducer from "./IssueReducer";

export const store = configureStore({
  reducer: {
    user: profileReducer,
    issues: issueReducer,
  },
});
