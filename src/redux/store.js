import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import remote from "./reducers/remote";
import metadata from "./reducers/metadata";

const rootReducer = combineReducers({
  remote,
  metadata,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
