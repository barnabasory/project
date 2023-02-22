import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkedReducer from "./checkedSlice";

const store = configureStore({
  reducer: combineReducers({
    checked: checkedReducer,
  }),
});

export default store;
