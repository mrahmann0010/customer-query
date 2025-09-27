import { configureStore } from "@reduxjs/toolkit";
import onGoingReducer from "./onGoingSlice";
import resolveReducer from "./resolvedSlice";
import ticketsReducer from "./ticketSlice";

const store = configureStore({
  reducer: {
    onGoing: onGoingReducer,
    resolved: resolveReducer,
    tickets: ticketsReducer,
  },
});

export default store;
