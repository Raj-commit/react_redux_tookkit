import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slice";
const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
export default store;
