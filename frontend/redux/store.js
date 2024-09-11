import { configureStore } from "@reduxjs/toolkit";
import cookReducer from "./cookSlice";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";

const store = configureStore({
  reducer: {
    cook: cookReducer,
    user: userReducer,
    blog: blogReducer,
  },
});

export default store;
