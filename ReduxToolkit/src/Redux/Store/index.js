import { configureStore } from "@reduxjs/toolkit";
import counter from "../Slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counter,
  },
});
export default store;
