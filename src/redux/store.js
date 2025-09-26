import onGoingReducer from "./onGoingSlice";
import resolveReducer from "./resolvedSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    onGoing: onGoingReducer,
    resolved: resolveReducer,
  },
});

export default store;
