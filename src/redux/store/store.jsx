import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "../reducer/ProfileReducer";

const rootReducer = combineReducers({
  user: ProfileReducer,
});

export const store = createStore(rootReducer);
