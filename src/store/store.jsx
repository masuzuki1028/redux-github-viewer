import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";
import IssueReducer from "./IssueReducer";

export const store = configureStore({
  reducer: {
    user: profileReducer,
    issue: IssueReducer,
  },
});
